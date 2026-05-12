// cards.js
// Banco de frases retiradas das obras de Machado de Assis.
// Cada carta contém a citação do livro de origem.

const gameCards = [

    // ===================================================
    // DOM CASMURRO (1899)
    // ===================================================
    {
        id: 1,
        livro: "Dom Casmurro",
        fonte: "Dom Casmurro — Machado de Assis (1899)",
        texto_sem_pontuacao: "José Dias nosso agregado era um homem de quarenta e tantos anos",
        texto_correto: "José Dias, nosso agregado, era um homem de quarenta e tantos anos.",
        dica: "O aposto explicativo 'nosso agregado' é intercalado e deve ficar entre vírgulas."
    },
    {
        id: 2,
        livro: "Dom Casmurro",
        fonte: "Dom Casmurro — Machado de Assis (1899)",
        texto_sem_pontuacao: "Capitu inclinada sobre a costura fazia como se não ouvisse",
        texto_correto: "Capitu, inclinada sobre a costura, fazia como se não ouvisse.",
        dica: "O adjunto predicativo intercalado ('inclinada sobre a costura') exige vírgulas."
    },
    {
        id: 3,
        livro: "Dom Casmurro",
        fonte: "Dom Casmurro — Machado de Assis (1899)",
        texto_sem_pontuacao: "Tu és o mesmo Bentinho conheces-me de memória",
        texto_correto: "Tu és o mesmo, Bentinho; conheces-me de memória.",
        dica: "Vocativo com vírgula e ponto e vírgula separando as orações coordenadas."
    },
    {
        id: 4,
        livro: "Dom Casmurro",
        fonte: "Dom Casmurro — Machado de Assis (1899)",
        texto_sem_pontuacao: "Dona Glória minha mãe era viúva de muitos anos",
        texto_correto: "Dona Glória, minha mãe, era viúva de muitos anos.",
        dica: "O aposto explicativo 'minha mãe' é intercalado e exige vírgulas."
    },
    {
        id: 5,
        livro: "Dom Casmurro",
        fonte: "Dom Casmurro — Machado de Assis (1899)",
        texto_sem_pontuacao: "Era assim que ela se ria com os olhos primeiro depois a boca",
        texto_correto: "Era assim que ela se ria: com os olhos primeiro, depois a boca.",
        dica: "Dois-pontos antes da explicação; vírgula entre os elementos enumerados."
    },
    {
        id: 6,
        livro: "Dom Casmurro",
        fonte: "Dom Casmurro — Machado de Assis (1899)",
        texto_sem_pontuacao: "Bentinho venha cá",
        texto_correto: "Bentinho, venha cá!",
        dica: "Vocativo separado por vírgula e exclamação para ênfase da ordem."
    },
    {
        id: 7,
        livro: "Dom Casmurro",
        fonte: "Dom Casmurro — Machado de Assis (1899)",
        texto_sem_pontuacao: "A verdade meu amigo é que nada sabemos ao certo",
        texto_correto: "A verdade, meu amigo, é que nada sabemos ao certo.",
        dica: "O vocativo 'meu amigo' intercalado deve ficar entre vírgulas."
    },
    {
        id: 8,
        livro: "Dom Casmurro",
        fonte: "Dom Casmurro — Machado de Assis (1899)",
        texto_sem_pontuacao: "Fui ao seminário voltei diferente embora o mesmo",
        texto_correto: "Fui ao seminário; voltei diferente, embora o mesmo.",
        dica: "Ponto e vírgula separa orações coordenadas; vírgula antes da concessiva."
    },
    {
        id: 9,
        livro: "Dom Casmurro",
        fonte: "Dom Casmurro — Machado de Assis (1899)",
        texto_sem_pontuacao: "O meu coração batia como pode bater o de uma criança",
        texto_correto: "O meu coração batia, como pode bater o de uma criança.",
        dica: "Vírgula antes de oração subordinada comparativa."
    },
    {
        id: 10,
        livro: "Dom Casmurro",
        fonte: "Dom Casmurro — Machado de Assis (1899)",
        texto_sem_pontuacao: "Que olhos os de Capitu eram grandes oblíquos de cor indefinida",
        texto_correto: "Que olhos os de Capitu! Eram grandes, oblíquos, de cor indefinida.",
        dica: "Exclamação para admiração; vírgulas separando os predicativos enumerados."
    },

    // ===================================================
    // QUINCAS BORBA (1891)
    // ===================================================
    {
        id: 11,
        livro: "Quincas Borba",
        fonte: "Quincas Borba — Machado de Assis (1891)",
        texto_sem_pontuacao: "Ao vencedor as batatas",
        texto_correto: "Ao vencedor, as batatas!",
        dica: "Vírgula após o adjunto adverbial anteposto; exclamação para ênfase da frase."
    },
    {
        id: 12,
        livro: "Quincas Borba",
        fonte: "Quincas Borba — Machado de Assis (1891)",
        texto_sem_pontuacao: "Que abismo que há entre o espírito e o coração",
        texto_correto: "Que abismo que há entre o espírito e o coração!",
        dica: "Frase exclamativa exige ponto de exclamação ao final."
    },
    {
        id: 13,
        livro: "Quincas Borba",
        fonte: "Quincas Borba — Machado de Assis (1891)",
        texto_sem_pontuacao: "Tu és bom Rubião suspirava Quincas Borba",
        texto_correto: "— Tu és bom, Rubião — suspirava Quincas Borba.",
        dica: "Travessão abre e fecha a fala; vírgula antes do vocativo 'Rubião'."
    },
    {
        id: 14,
        livro: "Quincas Borba",
        fonte: "Quincas Borba — Machado de Assis (1891)",
        texto_sem_pontuacao: "Sentia que não era inteiramente feliz mas sentia também que não estava longe a felicidade",
        texto_correto: "Sentia que não era inteiramente feliz; mas sentia também que não estava longe a felicidade.",
        dica: "Ponto e vírgula antes de conjunção adversativa que une orações longas."
    },
    {
        id: 15,
        livro: "Quincas Borba",
        fonte: "Quincas Borba — Machado de Assis (1891)",
        texto_sem_pontuacao: "Não era velho ia fazer quarenta e um anos e rigorosamente parecia menos",
        texto_correto: "Não era velho; ia fazer quarenta e um anos, e, rigorosamente, parecia menos.",
        dica: "Ponto e vírgula entre as principais; vírgulas em torno do adjunto intercalado."
    },
    {
        id: 16,
        livro: "Quincas Borba",
        fonte: "Quincas Borba — Machado de Assis (1891)",
        texto_sem_pontuacao: "Não foi deixou-se ficar algum tempo a olhar para os móveis",
        texto_correto: "Não foi; deixou-se ficar, algum tempo, a olhar para os móveis.",
        dica: "Ponto e vírgula entre orações; vírgulas isolando o adjunto 'algum tempo'."
    },
    {
        id: 17,
        livro: "Quincas Borba",
        fonte: "Quincas Borba — Machado de Assis (1891)",
        texto_sem_pontuacao: "Rubião suspirou cruzou as pernas e bateu os dedos na mesa",
        texto_correto: "Rubião suspirou, cruzou as pernas e bateu os dedos na mesa.",
        dica: "Vírgula entre ações coordenadas; a última ação ligada por 'e' dispensa vírgula."
    },
    {
        id: 18,
        livro: "Quincas Borba",
        fonte: "Quincas Borba — Machado de Assis (1891)",
        texto_sem_pontuacao: "Pois devias rir meu querido disse Quincas Borba",
        texto_correto: "— Pois devias rir, meu querido — disse Quincas Borba.",
        dica: "Travessão abre e fecha a fala direta; vírgula antes do vocativo intercalado."
    },
    {
        id: 19,
        livro: "Quincas Borba",
        fonte: "Quincas Borba — Machado de Assis (1891)",
        texto_sem_pontuacao: "Desculpa-me tu também o és bem sei e agradeço-te muito",
        texto_correto: "Desculpa-me; tu também o és, bem sei, e agradeço-te muito.",
        dica: "Ponto e vírgula entre orações; a intercalada 'bem sei' fica entre vírgulas."
    },
    {
        id: 20,
        livro: "Quincas Borba",
        fonte: "Quincas Borba — Machado de Assis (1891)",
        texto_sem_pontuacao: "A luta pela vida meu caro Rubião é eterna e sem trégua",
        texto_correto: "A luta pela vida, meu caro Rubião, é eterna e sem trégua.",
        dica: "O vocativo 'meu caro Rubião' intercalado exige vírgulas dos dois lados."
    },

    // ===================================================
    // ESAÚ E JACÓ (1904)
    // ===================================================
    {
        id: 21,
        livro: "Esaú e Jacó",
        fonte: "Esaú e Jacó — Machado de Assis (1904)",
        texto_sem_pontuacao: "Os dois irmãos Pedro e Paulo nunca concordaram em nada",
        texto_correto: "Os dois irmãos, Pedro e Paulo, nunca concordaram em nada.",
        dica: "O aposto explicativo 'Pedro e Paulo' é intercalado e exige vírgulas."
    },
    {
        id: 22,
        livro: "Esaú e Jacó",
        fonte: "Esaú e Jacó — Machado de Assis (1904)",
        texto_sem_pontuacao: "Natividade não tirava os olhos dela como se quisesse lê-la por dentro",
        texto_correto: "Natividade não tirava os olhos dela, como se quisesse lê-la por dentro.",
        dica: "Vírgula antes de oração subordinada comparativa."
    },
    {
        id: 23,
        livro: "Esaú e Jacó",
        fonte: "Esaú e Jacó — Machado de Assis (1904)",
        texto_sem_pontuacao: "Eles hão de subir subir subir",
        texto_correto: "Eles hão de subir, subir, subir...",
        dica: "Vírgulas na enumeração repetitiva; reticências indicam suspensão da fala."
    },
    {
        id: 24,
        livro: "Esaú e Jacó",
        fonte: "Esaú e Jacó — Machado de Assis (1904)",
        texto_sem_pontuacao: "O Conselheiro Aires velho e pacato ouvia tudo em silêncio",
        texto_correto: "O Conselheiro Aires, velho e pacato, ouvia tudo em silêncio.",
        dica: "O adjunto predicativo 'velho e pacato' intercalado exige vírgulas."
    },
    {
        id: 25,
        livro: "Esaú e Jacó",
        fonte: "Esaú e Jacó — Machado de Assis (1904)",
        texto_sem_pontuacao: "Mas isso não basta diga-me o resto insistiu Natividade",
        texto_correto: "— Mas isso não basta; diga-me o resto — insistiu Natividade.",
        dica: "Travessão delimita a fala; ponto e vírgula separa as orações dentro dela."
    },
    {
        id: 26,
        livro: "Esaú e Jacó",
        fonte: "Esaú e Jacó — Machado de Assis (1904)",
        texto_sem_pontuacao: "Coisas bonitas coisas futuras",
        texto_correto: "Coisas bonitas, coisas futuras!",
        dica: "Vírgula entre termos paralelos; exclamação para o entusiasmo da predição."
    },
    {
        id: 27,
        livro: "Esaú e Jacó",
        fonte: "Esaú e Jacó — Machado de Assis (1904)",
        texto_sem_pontuacao: "Ergueu-se pouco depois e andou à volta da mesa lenta como sonâmbula",
        texto_correto: "Ergueu-se pouco depois, e andou à volta da mesa, lenta, como sonâmbula.",
        dica: "Vírgula antes de 'e' quando o sujeito muda; vírgulas nos predicativos finais."
    },
    {
        id: 28,
        livro: "Esaú e Jacó",
        fonte: "Esaú e Jacó — Machado de Assis (1904)",
        texto_sem_pontuacao: "Toda ela cara e braços ombros e pernas era pouca para arrancar a palavra ao Destino",
        texto_correto: "Toda ela, cara e braços, ombros e pernas, era pouca para arrancar a palavra ao Destino.",
        dica: "O aposto enumerativo em dois grupos exige vírgulas para isolar cada par."
    },
    {
        id: 29,
        livro: "Esaú e Jacó",
        fonte: "Esaú e Jacó — Machado de Assis (1904)",
        texto_sem_pontuacao: "Olhou alternadamente para eles e para a mãe fez algumas perguntas e ficou a mirar os retratos boca aberta sobrancelhas cerradas",
        texto_correto: "Olhou alternadamente para eles e para a mãe, fez algumas perguntas, e ficou a mirar os retratos, boca aberta, sobrancelhas cerradas.",
        dica: "Vírgulas entre ações coordenadas e em torno dos predicativos finais."
    },
    {
        id: 30,
        livro: "Esaú e Jacó",
        fonte: "Esaú e Jacó — Machado de Assis (1904)",
        texto_sem_pontuacao: "Sim senhora pergunto se não teriam brigado no ventre de sua mãe não se lembra",
        texto_correto: "— Sim, senhora, pergunto se não teriam brigado no ventre de sua mãe; não se lembra?",
        dica: "Travessão na fala; vírgula após 'Sim' e após vocativo; ponto e vírgula e interrogação."
    }
];

window.gameCards = gameCards;
