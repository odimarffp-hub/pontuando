// game.js

document.addEventListener('DOMContentLoaded', () => {
    const TOTAL_CELLS = 39;

    const CELL_COORDS = [
        { x: 91.5, y: 13 }, // 0: Começo
        { x: 79.5, y: 13 }, // 1
        { x: 72, y: 13 },   // 2
        { x: 64.5, y: 13 }, // 3
        { x: 57, y: 13 },   // 4
        { x: 49.5, y: 13 }, // 5
        { x: 42, y: 13 },   // 6
        { x: 34.5, y: 13 }, // 7
        { x: 27, y: 13 },   // 8
        { x: 19.5, y: 13 }, // 9
        { x: 12, y: 13 },   // 10
        { x: 12, y: 25 },   // 11
        { x: 12, y: 37 },   // 12
        { x: 12, y: 49 },   // 13
        { x: 12, y: 61 },   // 14
        { x: 12, y: 73 },   // 15
        { x: 12, y: 85 },   // 16
        { x: 19.5, y: 85 }, // 17
        { x: 27, y: 85 },   // 18
        { x: 34.5, y: 85 }, // 19
        { x: 42, y: 85 },   // 20
        { x: 49.5, y: 85 }, // 21
        { x: 57, y: 85 },   // 22
        { x: 64.5, y: 85 }, // 23
        { x: 72, y: 85 },   // 24
        { x: 79.5, y: 85 }, // 25
        { x: 87, y: 85 },   // 26
        { x: 87, y: 73 },   // 27
        { x: 87, y: 61 },   // 28
        { x: 87, y: 49 },   // 29
        { x: 87, y: 37 },   // 30
        { x: 79.5, y: 37 }, // 31
        { x: 72, y: 37 },   // 32
        { x: 64.5, y: 37 }, // 33
        { x: 57, y: 37 },   // 34
        { x: 49.5, y: 37 }, // 35
        { x: 42, y: 37 },   // 36
        { x: 34.5, y: 37 }, // 37
        { x: 34.5, y: 49 }, // 38
        { x: 34.5, y: 64 }  // 39: Fim
    ];


    let players = [];
    let playerNames = {};
    let currentPlayerIndex = 0;
    let playersPosition = {};
    let gameState = 'SETUP';
    let currentCard = null;

    // ================================================
    // PRENDAS — com suporte a customização
    // ================================================
    const DEFAULT_PRENDAS = [
        "Dê três voltas ao redor da mesa de jogo!",
        "Cante o refrão da sua música favorita!",
        "Fique em um pé só por 30 segundos!",
        "Conte uma piada rápida para os outros jogadores!",
        "Imite um pirata bravo por 1 minuto!",
        "Tente falar um trava-língua sem errar!",
        "Faça 5 polichinelos!",
        "Fale o alfabeto de trás para frente até a letra M!",
        "Diga 3 qualidades do jogador à sua direita!",
        "Fique sem falar 'sim' ou 'não' até a sua próxima vez!"
    ];

    let prendas = loadPrendas();

    function loadPrendas() {
        try {
            const saved = localStorage.getItem('pontuando_prendas');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) return parsed;
            }
        } catch (e) {}
        return [...DEFAULT_PRENDAS];
    }

    function savePrendas() {
        localStorage.setItem('pontuando_prendas', JSON.stringify(prendas));
    }

    // ================================================
    // Elementos UI
    // ================================================
    const boardEl              = document.getElementById('board');
    const piecesContainer      = document.getElementById('pieces-container');
    const playersListEl        = document.getElementById('players-list');
    const currentPlayerBadge   = document.getElementById('current-player');
    const currentPlayerNameEl  = document.getElementById('current-player-name');
    const btnDrawCard          = document.getElementById('btn-draw-card');
    const btnRollDice          = document.getElementById('btn-roll-dice');
    const diceContainer        = document.getElementById('dice-container');
    const diceEl               = document.getElementById('dice');

    // Setup
    const setupModal           = document.getElementById('setup-modal');
    const step1                = document.getElementById('step-1');
    const step2                = document.getElementById('step-2');
    const namesInputsContainer = document.getElementById('names-inputs-container');
    const btnStartGame         = document.getElementById('btn-start-game');

    // Card modal
    const cardModal            = document.getElementById('card-modal');
    const victoryModal         = document.getElementById('victory-modal');
    const answerInput          = document.getElementById('answer-input');
    const btnSubmitAnswer      = document.getElementById('btn-submit-answer');
    const btnGiveUp            = document.getElementById('btn-give-up');
    const btnCloseCard         = document.getElementById('btn-close-card');
    const answerSection        = document.getElementById('answer-section');
    const feedbackTitle        = document.getElementById('answer-feedback-title');
    const phrasePunctuated     = document.getElementById('phrase-punctuated');
    const phraseHint           = document.getElementById('phrase-hint');
    const bookSourceEl         = document.getElementById('book-source');
    const btnPlayAudio         = document.getElementById('btn-play-audio');

    // Prendas modal
    const prendasModal         = document.getElementById('prendas-modal');
    const prendasListEl        = document.getElementById('prendas-list');
    const newPrendaInput       = document.getElementById('new-prenda-input');
    const btnAddPrenda         = document.getElementById('btn-add-prenda');
    const btnClosePrendas      = document.getElementById('btn-close-prendas');
    const btnResetPrendas      = document.getElementById('btn-reset-prendas');
    const btnManagePrendas     = document.getElementById('btn-manage-prendas');

    // ================================================
    // SETUP
    // ================================================
    initSetup();

    function initSetup() {
        document.querySelectorAll('.btn-player-count').forEach(btn => {
            btn.onclick = () => {
                const count = parseInt(btn.dataset.count);
                showNameInputs(count);
            };
        });

        btnStartGame.onclick = () => {
            const inputs = namesInputsContainer.querySelectorAll('input');
            inputs.forEach(input => {
                const id = input.dataset.id;
                const name = input.value.trim() || `Jogador ${id}`;
                playerNames[id] = name;
            });

            // Sorteia a ordem dos jogadores
            shuffleArray(players);

            step2.classList.add('hidden');
            setupModal.classList.add('hidden');
            startGame();
        };
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function showNameInputs(count) {
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
        namesInputsContainer.innerHTML = '';
        players = ['A', 'B', 'C', 'D'].slice(0, count);
        players.forEach(id => {
            const group = document.createElement('div');
            group.className = 'name-input-group';
            group.innerHTML = `
                <span>${id}</span>
                <input type="text" data-id="${id}" placeholder="Nome do Jogador ${id}" maxlength="15">
            `;
            namesInputsContainer.appendChild(group);
        });
    }

    function startGame() {
        playersPosition = {};
        players.forEach(p => playersPosition[p] = 0); // 0 = casa de Início, fora da contagem
        currentPlayerIndex = 0;
        gameState = 'WAITING_CARD';
        createBoard();
        createPieces();
        updateUI();
    }

    // ================================================
    // TABULEIRO
    // ================================================
    function createBoard() {
        // Preserva o container de peças para não perdê-lo ao redesenhar o tabuleiro
        const pContainer = document.getElementById('pieces-container');
        boardEl.innerHTML = '';

        // Painel de fundo único
        const panel = document.createElement('div');
        panel.className = 'board-screen';
        panel.style.top    = '0%';
        panel.style.height = '100%';
        panel.style.backgroundImage = "url('Tabuleiro.png')";
        boardEl.appendChild(panel);

        if (pContainer) boardEl.appendChild(pContainer);
    }

    function getCellPosition(index) {
        if (index < 0) index = 0;
        if (index > TOTAL_CELLS) index = TOTAL_CELLS;
        return CELL_COORDS[index];
    }

    function drawPath() {
        // O caminho já está desenhado na imagem de fundo, 
        // então não precisamos gerar o SVG.
        const old = boardEl.querySelector('.path-svg');
        if (old) old.remove();
    }

    function createPieces() {
        piecesContainer.innerHTML = '';
        players.forEach(p => {
            const piece = document.createElement('div');
            piece.className = `piece piece-${p}`;
            piece.id = `piece-${p}`;
            piece.textContent = p;
            piecesContainer.appendChild(piece);
        });
        setTimeout(updatePiecesPosition, 100);
    }

    function updatePiecesPosition() {
        // Offset menor em telas pequenas para os pinos não saírem das casas
        const off = window.innerWidth <= 768 ? 5 : 8;
        players.forEach(p => {
            const pos = playersPosition[p];
            const cellPos = getCellPosition(pos);
            const piece = document.getElementById(`piece-${p}`);
            if (piece) {
                const offset = { 'A': {x:-off,y:-off}, 'B': {x:off,y:-off}, 'C': {x:-off,y:off}, 'D': {x:off,y:off} }[p];
                piece.style.left = `calc(${cellPos.x}% + ${offset.x}px)`;
                piece.style.top  = `calc(${cellPos.y}% + ${offset.y}px)`;
            }
        });
    }

    // ================================================
    // UI DE JOGO
    // ================================================
    function updateUI() {
        const cpID   = players[currentPlayerIndex];
        const cpName = playerNames[cpID];

        currentPlayerBadge.textContent = cpID;
        currentPlayerBadge.className   = `player-badge player-${cpID}`;
        currentPlayerNameEl.textContent = cpName;

        playersListEl.innerHTML = '';
        players.forEach(id => {
            const li = document.createElement('li');
            li.className = `status-${id} ${id === cpID ? 'active' : ''}`;
            const posLabel = playersPosition[id] === 0 ? 'Início' : `Casa ${playersPosition[id]}`;
            li.innerHTML = `<span>${playerNames[id]}</span> <span class="pos">${posLabel}</span>`;
            playersListEl.appendChild(li);
        });

        btnDrawCard.disabled = (gameState !== 'WAITING_CARD');
        btnRollDice.disabled = (gameState !== 'WAITING_DICE');
        diceContainer.style.opacity = (gameState === 'WAITING_DICE' ? '1' : '0.5');
    }

    // ================================================
    // CARTA — com citação do livro
    // ================================================
    btnDrawCard.onclick = () => {
        const card = gameCards[Math.floor(Math.random() * gameCards.length)];
        currentCard = card;

        const phraseUnp = document.getElementById('phrase-unpunctuated');
        const cardTitle = document.querySelector('.card-modal-content .card-title');
        const instruction = document.querySelector('.card-modal-content .instruction');
        const bookCitation = document.getElementById('book-citation');
        const contextHint = document.getElementById('context-hint');

        if (card.tipo === 'pergunta') {
            cardTitle.textContent = "Desafio de Conhecimento";
            instruction.textContent = "Responda à charada sobre o sinal de pontuação:";
            phraseUnp.textContent = card.pergunta;
            answerInput.value = "";
            answerInput.placeholder = "Sua resposta (ex: Vírgula)...";
            bookCitation.classList.add('hidden');
            if (contextHint) contextHint.classList.add('hidden');
            if (btnPlayAudio) btnPlayAudio.style.display = 'none';
        } else {
            cardTitle.textContent = "Desafio de Pontuação";
            instruction.textContent = "Adicione a pontuação correta à frase abaixo:";
            phraseUnp.textContent = card.texto_sem_pontuacao;
            answerInput.value = card.texto_sem_pontuacao;
            answerInput.placeholder = "Insira os pontos aqui...";
            bookCitation.classList.remove('hidden');
            
            if (contextHint) {
                if (card.dica_contexto) {
                    contextHint.textContent = card.dica_contexto;
                    contextHint.classList.remove('hidden');
                } else {
                    contextHint.classList.add('hidden');
                }
            }
            
            if (btnPlayAudio) btnPlayAudio.style.display = 'flex';

            // Exibe a citação do livro
            bookSourceEl.textContent = card.fonte || '';

            // Adiciona o badge do livro
            bookCitation.className = 'book-citation';
            if (card.livro) {
                const livroSlug = card.livro
                    .toLowerCase()
                    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove acentos
                    .replace(/\s+/g, '-')
                    .replace(/[^a-z-]/g, '');
                bookCitation.classList.add(`livro-${livroSlug}`);
            }
        }

        answerSection.classList.add('hidden');
        btnSubmitAnswer.style.display = 'inline-block';
        btnGiveUp.style.display       = 'inline-block';

        gameState = 'READING_CARD';
        cardModal.classList.remove('hidden');

        // No celular, não abre o teclado virtual automaticamente
        if (window.innerWidth > 768) {
            setTimeout(() => {
                answerInput.focus();
                answerInput.setSelectionRange(answerInput.value.length, answerInput.value.length);
            }, 100);
        }
    };

    btnSubmitAnswer.onclick = () => {
        const userText = answerInput.value;
        const normalize = s => s.trim().toLowerCase().replace(/\s+/g, ' ')
                                .normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // remove acentos
        
        let isCorrect = false;
        if (currentCard.tipo === 'pergunta') {
            isCorrect = normalize(userText) === normalize(currentCard.resposta);
        } else {
            // Para frases do Machado, a normalização de acentos pode ser sensível, 
            // vamos usar a normalização original sem remover acentos para não quebrar a pontuação/acentuação do autor
            const normalizeSimple = s => s.trim().toLowerCase().replace(/\s+/g, ' ');
            isCorrect = normalizeSimple(userText) === normalizeSimple(currentCard.texto_correto);
        }
        showFeedback(isCorrect);
    };

    btnGiveUp.onclick = () => {
        showFeedback(false, true);
    };

    function showFeedback(isCorrect, gaveUp = false) {
        answerSection.classList.remove('hidden');
        btnSubmitAnswer.style.display = 'none';
        btnGiveUp.style.display       = 'none';

        if (currentCard.tipo === 'pergunta') {
            phrasePunctuated.textContent = "Resposta: " + currentCard.resposta;
        } else {
            phrasePunctuated.textContent = currentCard.texto_correto;
        }
        
        phraseHint.textContent = currentCard.dica || 'Preste atenção nos sinais de pontuação!';

        if (isCorrect) {
            feedbackTitle.textContent = '✅ Parabéns! Você acertou!';
            feedbackTitle.style.color = 'var(--success-color)';
            gameState = 'WAITING_DICE';
        } else {
            let prendaMsg = '';
            if (players.length > 1 && prendas.length > 0) {
                const prenda = prendas[Math.floor(Math.random() * prendas.length)];
                prendaMsg = `<div class="prenda-box"><strong>🏴‍☠️ CASTIGO PARA ${playerNames[players[currentPlayerIndex]].toUpperCase()}:</strong><br>${prenda}</div>`;
            }
            feedbackTitle.innerHTML   = (gaveUp ? '❌ Você desistiu.' : '❌ Resposta incorreta.') + prendaMsg;
            feedbackTitle.style.color = 'var(--danger-color)';
            gameState = 'FAILED';
        }
    }

    btnCloseCard.onclick = () => {
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        cardModal.classList.add('hidden');
        if (gameState === 'FAILED') { nextTurn(); }
        else { updateUI(); }
    };

    let availableVoices = [];
    if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = () => {
            availableVoices = window.speechSynthesis.getVoices();
        };
    }

    if (btnPlayAudio) {
        btnPlayAudio.onclick = () => {
            // Interrompe qualquer áudio TTS que esteja tocando
            if ('speechSynthesis' in window) window.speechSynthesis.cancel();

            // 1. Tenta buscar o arquivo de áudio gravado (ex: AUDIO/card_201.m4a)
            const audio = new Audio(`AUDIO/card_${currentCard.id}.m4a`);
            
            audio.oncanplaythrough = () => {
                // Se o arquivo existir e puder ser tocado, toca a gravação real!
                audio.play();
            };

            audio.onerror = () => {
                // 2. Fallback: Se o arquivo MP3 não existir, usa a voz do navegador (TTS)
                if ('speechSynthesis' in window) {
                    const utterance = new SpeechSynthesisUtterance(currentCard.texto_correto);
                    utterance.lang = 'pt-BR';
                    
                    // Ajustes base
                    utterance.rate = 0.85; 
                    utterance.pitch = 1.05;

                    if (currentCard.texto_correto.includes('!')) {
                        utterance.pitch = 1.7; 
                        utterance.rate = 1.15; 
                    } else if (currentCard.texto_correto.includes('?')) {
                        utterance.pitch = 1.0; 
                        utterance.rate = 0.8; 
                    }

                    if (availableVoices.length === 0) {
                        availableVoices = window.speechSynthesis.getVoices();
                    }

                    const ptVoices = availableVoices.filter(v => v.lang.includes('pt-BR') || v.lang === 'pt_BR');
                    if (ptVoices.length > 0) {
                        let bestVoice = ptVoices.find(v => 
                            v.name.includes('Online') || v.name.includes('Natural') || 
                            v.name.includes('Premium') || v.name.includes('Google')
                        );
                        if (!bestVoice) bestVoice = ptVoices[0];
                        utterance.voice = bestVoice;
                    }

                    window.speechSynthesis.speak(utterance);
                } else {
                    alert('Nenhum áudio gravado encontrado e o navegador não suporta leitura em voz alta.');
                }
            };

            // Força o carregamento para disparar o oncanplaythrough ou onerror
            audio.load();
        };
    }

    function nextTurn() {
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        gameState = 'WAITING_CARD';
        updateUI();
    }

    // ================================================
    // DADO
    // ================================================
    btnRollDice.onclick = () => {
        btnRollDice.disabled = true;
        diceEl.classList.add('rolling');
        setTimeout(() => {
            diceEl.classList.remove('rolling');
            const result     = Math.floor(Math.random() * 6) + 1;
            const diceFaces  = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
            diceEl.querySelector('.dice-face').textContent = diceFaces[result - 1];
            movePiece(result);
        }, 1000);
    };

    function movePiece(spaces) {
        const p      = players[currentPlayerIndex];
        const target = Math.min(TOTAL_CELLS, playersPosition[p] + spaces);
        let current  = playersPosition[p];
        const interval = setInterval(() => {
            if (current < target) {
                current++;
                playersPosition[p] = current;
                updatePiecesPosition();
                updateUI();
            } else {
                clearInterval(interval);
                if (target === TOTAL_CELLS) { showVictory(p); }
                else { nextTurn(); }
            }
        }, 300);
    }

    function showVictory(p) {
        const name = playerNames[p];
        document.getElementById('victory-message').textContent = `O Capitão ${name} alcançou o tesouro e venceu a jornada!`;
        victoryModal.classList.remove('hidden');
    }

    document.getElementById('btn-restart').onclick = () => {
        victoryModal.classList.add('hidden');
        setupModal.classList.remove('hidden');
        step1.classList.remove('hidden');
        step2.classList.add('hidden');
        gameState = 'SETUP';
    };

    window.onresize = () => {
        if (gameState !== 'SETUP') {
            createBoard();
            updatePiecesPosition();
        }
    };

    // ================================================
    // GERENCIADOR DE PRENDAS
    // ================================================
    btnManagePrendas.onclick = () => {
        renderPrendasList();
        prendasModal.classList.remove('hidden');
    };

    btnClosePrendas.onclick = () => {
        savePrendas();
        prendasModal.classList.add('hidden');
    };

    btnResetPrendas.onclick = () => {
        if (confirm('Restaurar as prendas originais? As prendas personalizadas serão perdidas.')) {
            prendas = [...DEFAULT_PRENDAS];
            savePrendas();
            renderPrendasList();
        }
    };

    btnAddPrenda.onclick = () => addPrenda();

    newPrendaInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') addPrenda();
    });

    function addPrenda() {
        const texto = newPrendaInput.value.trim();
        if (!texto) {
            newPrendaInput.focus();
            newPrendaInput.classList.add('input-error');
            setTimeout(() => newPrendaInput.classList.remove('input-error'), 600);
            return;
        }
        prendas.push(texto);
        newPrendaInput.value = '';
        newPrendaInput.focus();
        renderPrendasList();
    }

    function removePrenda(index) {
        prendas.splice(index, 1);
        renderPrendasList();
    }

    function renderPrendasList() {
        prendasListEl.innerHTML = '';

        if (prendas.length === 0) {
            prendasListEl.innerHTML = '<p class="no-prendas">Nenhuma prenda cadastrada. Adicione uma abaixo!</p>';
            return;
        }

        prendas.forEach((prenda, index) => {
            const item = document.createElement('div');
            item.className = 'prenda-item';
            item.innerHTML = `
                <span class="prenda-num">${index + 1}</span>
                <span class="prenda-text">${prenda}</span>
                <button class="btn-remove-prenda" title="Remover prenda" onclick="void(0)">✕</button>
            `;
            item.querySelector('.btn-remove-prenda').addEventListener('click', () => removePrenda(index));
            prendasListEl.appendChild(item);
        });
    }
});
