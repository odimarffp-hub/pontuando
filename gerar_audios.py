"""
Gera AUDIO/card_<id>.m4a para toda carta com texto_correto que ainda não tem gravação.

Requisitos (uma vez só, no terminal):
    pip install edge-tts
    ffmpeg instalado e no PATH  (winget install Gyan.FFmpeg)

Uso (na pasta C:\\PONTUANDO\\www):
    python gerar_audios.py              # gera só os que faltam
    python gerar_audios.py --listar     # só mostra o que seria gerado
    python gerar_audios.py --refazer 260 261   # regrava esses ids
"""
import argparse
import asyncio
import re
import subprocess
import sys
import tempfile
from pathlib import Path

import edge_tts

PASTA = Path(__file__).resolve().parent
CARDS = PASTA / "cards.js"
AUDIO = PASTA / "AUDIO"
VOZ = "pt-BR-FranciscaNeural"  # alternativa masculina: pt-BR-AntonioNeural


def ler_cartas():
    """Extrai (id, texto_correto) de todas as cartas, na ordem do arquivo."""
    src = CARDS.read_text(encoding="utf-8")
    cartas = []
    for bloco in re.split(r"\{\s*\n\s*id:", src)[1:]:
        m_id = re.match(r"\s*(\d+)", bloco)
        m_txt = re.search(r'texto_correto:\s*"((?:[^"\\]|\\.)*)"', bloco)
        if m_id and m_txt:
            cartas.append((int(m_id.group(1)), m_txt.group(1).replace('\\"', '"')))
    return cartas


def preparar_fala(texto):
    """Ajusta o texto para a voz ler a pontuação de forma natural."""
    t = texto.replace("—", " ").replace("–", " ")
    t = t.replace("...", ", ")
    return re.sub(r"\s+", " ", t).strip()


def parametros(texto):
    """Mesma ideia do game.js: ! mais animado, ? mais lento."""
    if "!" in texto:
        return "+10%", "+15Hz"
    if "?" in texto:
        return "-8%", "+0Hz"
    return "-12%", "+0Hz"


async def gerar(id_, texto):
    rate, pitch = parametros(texto)
    destino = AUDIO / f"card_{id_}.m4a"
    with tempfile.TemporaryDirectory() as tmp:
        mp3 = Path(tmp) / "tmp.mp3"
        com = edge_tts.Communicate(preparar_fala(texto), VOZ, rate=rate, pitch=pitch)
        await com.save(str(mp3))
        subprocess.run(
            ["ffmpeg", "-y", "-loglevel", "error", "-i", str(mp3),
             "-c:a", "aac", "-b:a", "96k", str(destino)],
            check=True,
        )
    print(f"ok  card_{id_}.m4a  <- {texto}")


async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--listar", action="store_true")
    ap.add_argument("--refazer", nargs="*", type=int, default=[])
    args = ap.parse_args()

    AUDIO.mkdir(exist_ok=True)
    cartas = ler_cartas()
    alvo = [
        (i, t) for i, t in cartas
        if i in args.refazer or not (AUDIO / f"card_{i}.m4a").exists()
    ]
    print(f"{len(cartas)} cartas com texto_correto; {len(alvo)} para gerar.")
    if args.listar:
        for i, t in alvo:
            print(f"  {i}: {t}")
        return
    for i, t in alvo:
        try:
            await gerar(i, t)
        except Exception as e:  # segue para as próximas
            print(f"ERRO card_{i}: {e}", file=sys.stderr)


if __name__ == "__main__":
    asyncio.run(main())
