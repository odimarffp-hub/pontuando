// cards.js

// Cartas de questionamento gramatical
const questionCards = [
    {
        id: 101,
        tipo: "pergunta",
        pergunta: "Eu enumero, pauso, tenho muitas utilidades, e mesmo assim as pessoas não aprendem a me utilizar. Quem sou eu?",
        resposta: "Vírgula",
        dica: "Sou o sinal mais comum para pequenas pausas e enumerações."
    },
    {
        id: 102,
        tipo: "pergunta",
        pergunta: "Eu sou usado para isolar informações breves, comentários, siglas e muito mais, você com certeza já me utilizou. Quem sou eu?",
        resposta: "Parênteses",
        dica: "Isolamos explicações ou comentários acessórios com este sinal."
    },
    {
        id: 103,
        tipo: "pergunta",
        pergunta: "Sou a forma mais prática de escrever frases presentes em textos, falas de personagens, palavras estrangeiras e muito mais. Quem sou eu?",
        resposta: "Aspas",
        dica: "Utilizadas para destacar citações ou palavras com sentido especial."
    },
    {
        id: 104,
        tipo: "pergunta",
        pergunta: "Indico uma interrupção na fala ou um pensamento que não terminou. Quem sou eu?",
        resposta: "Reticências",
        dica: "São aqueles três pontinhos seguidos."
    },
    {
        id: 105,
        tipo: "pergunta",
        pergunta: "Sou usado para introduzir uma fala, uma explicação ou uma enumeração. Quem sou eu?",
        resposta: "Dois-pontos",
        dica: "Dois pontos sobrepostos."
    },
    {
        id: 106,
        tipo: "pergunta",
        pergunta: "Sirvo para separar orações coordenadas muito longas ou que já possuem vírgulas. Quem sou eu?",
        resposta: "Ponto e vírgula",
        dica: "Uma mistura de ponto e vírgula."
    },
    {
        id: 107,
        tipo: "pergunta",
        pergunta: "Indico o final de uma frase declarativa, encerrando um pensamento. Quem sou eu?",
        resposta: "Ponto final",
        dica: "O sinal mais básico de encerramento."
    },
    {
        id: 108,
        tipo: "pergunta",
        pergunta: "Demonstro surpresa, espanto, alegria ou dou uma ordem. Quem sou eu?",
        resposta: "Ponto de exclamação",
        dica: "Usado para expressar emoções fortes."
    },
    {
        id: 109,
        tipo: "pergunta",
        pergunta: "Sou utilizado para indicar uma pergunta direta. Quem sou eu?",
        resposta: "Ponto de interrogação",
        dica: "Apareço no final de todas as dúvidas."
    },
    {
        id: 110,
        tipo: "pergunta",
        pergunta: "Sou usado para indicar a fala de um personagem em um diálogo ou isolar frases explicativas. Quem sou eu?",
        resposta: "Travessão",
        dica: "Um traço mais longo que o hífen."
    },
    {
        id: 111,
        tipo: "pergunta",
        pergunta: "Tenho a mesma função que as aspas que você conhece, mas sou usada em uma citação onde já existem aspas duplas. Quem sou eu?",
        resposta: "aspas simples",
        dica: "Citação dentro de citação"
    },
    {
        id: 112,
        tipo: "pergunta",
        pergunta: "Eu indico que uma letra foi retirada na junção de duas palavras",
        resposta: "Apóstrofo",
        dica: "'copo de água, caixa de água... Pense nisso'"
    }
];

// Cartas de exemplos
const exemplosCards = [
    {
        id: 201,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Olha Essa flor é muito bonita",
        texto_correto: "Olha, essa flor é muito bonita!",
        dica: "Põe-se vírgula após o vocativo e ponto de exclamação para indicar surpresa, espanto, alegria."
    },
    {
        id: 202,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Gabriel você sabe o que fazer",
        texto_correto: "Gabriel, você sabe o que fazer?",
        dica: "Vocativo isolado por vírgula e ponto de interrogação para expressar uma pergunta direta."
    },
    {
        id: 203,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "O homem estava muito feliz",
        texto_correto: "O homem estava muito feliz.",
        dica: "Ponto final usado para encerrar uma frase declarativa."
    },
    {
        id: 205,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Aqui nós vendemos bananas maçãs peras laranjas tangerinas",
        dica_contexto: "(A enumeração dos itens não terminou)",
        texto_correto: "Aqui, nós vendemos bananas, maçãs, peras, laranjas, tangerinas...",
        dica: "Vírgula no início da frase e para separar itens de uma enumeração. Reticências para indicar que a enumeração não terminou."
    },
    {
        id: 206,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Então ele disse Mas que bela menina",
        dica_contexto: "(não há travessão)",
        texto_correto: "Então ele disse: Mas que bela menina!",
        dica: "Dois pontos indicam que algo será dito e ponto de exclamação expressa emoção"
    },
    {
        id: 207,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Eu fiquei muito feliz quando ele disse Você está aprovada",
        dica_contexto: "(não há aspas)",
        texto_correto: "Eu fiquei muito feliz quando ele disse: —Você está aprovada.",
        dica: "Dois pontos indicam que algo será dito e travessão indica a fala do personagem."
    },
    {
        id: 208,
        livro: "Memórias Póstumas de Brás Cubas",
        fonte: "Memórias Póstumas de Brás Cubas — Machado de Assis (1899)",
        texto_sem_pontuacao: "Esqueceu alguma coisa perguntou Marcela",
        texto_correto: "Esqueceu alguma coisa? perguntou Marcela.",
        dica: "Ponto de interrogação para expressar uma pergunta direta. Ponto final para encerrar uma frase declarativa."
    },
    {
        id: 209,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Estava aqui pensando",
        dica_contexto: "(Uma frase que ainda não terminou)",
        texto_correto: "Estava aqui pensando...",
        dica: "Reticências usadas para indicar interrupção ou incompletude do pensamento."
    },
    {
        id: 210,
        livro: "Memórias Póstumas de Brás Cubas",
        fonte: "Memórias Póstumas de Brás Cubas — Machado de Assis (1899)",
        texto_sem_pontuacao: "Nunca nunca meu amor",
        dica_contexto: "(ênfase no meu amor)",
        texto_correto: "Nunca, nunca, meu amor!",
        dica: "Vírgula separando palavras repetidas e ponto de exclamação para expressar emoção."
    },
    {
        id: 211,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "São Gonçalo 13 de maio de 2026",
        texto_correto: "São Gonçalo, 13 de maio de 2026.",
        dica: "Utiliza-se vírgula para separar o local da data e ponto final para encerrar a frase declarativa."
    },
    {
        id: 212,
        livro: "Constituição Federal de 1988",
        fonte: "Constituição Federal de 1988 - Artigo 5º",
        texto_sem_pontuacao: "I - homens e mulheres são iguais em direitos e obrigações II - ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei",
        texto_correto: "I - homens e mulheres são iguais em direitos e obrigações; II - ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei.",
        dica: "Utiliza-se ponto e vírgula na redação oficial separando os itens de uma lei."
    },
    {
        id: 213,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Todos absolutamente todos que estão nesta sala são responsáveis pelo roubo do banco",
        texto_correto: "Todos, absolutamente todos que estão nesta sala são responsáveis pelo roubo do banco."
    }
];

// Unificando os baralhos e garantindo que todos tenham a propriedade 'tipo'
const gameCards = [
    ...questionCards,
    ...exemplosCards.map(c => ({ ...c, tipo: 'citacao' }))
];

window.gameCards = gameCards;
