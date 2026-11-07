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
    },
// New cards supplied by the user
{
    id: 214,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Então o Bernardo disse Estou com dúvidas mas eles disseram que vocês estão prontos para trabalhar",
    texto_correto: "Então o Bernardo disse: \"Estou com dúvidas, mas eles disseram que: 'Vocês estão prontos para trabalhar'\".",
    dica: "O Bernardo faz parte do \"vocês\"."
},
{
    id: 215,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Você está seco Deve beber um galão dágua inteiro para compensar",
    texto_correto: "Você está seco! Deve beber uma galão d'água inteiro para compensar.",
    dica: "Observe o \"dágua\"."
},
{
    id: 216,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "O que o senhor vai querer Apenas um copo dágua por favor",
    texto_correto: "\"O que o senhor vai querer?\" \"Apenas um copo d'água, por favor\".",
    dica: "Existem duas falas, além de não existir nenhum travessão."
},
{
    id: 217,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Você nunca mais vai poder comer camarão",
    texto_correto: "Você nunca mais vai poder comer camarão!",
    dica: "É uma frase no modo imperativo."
},
{
    id: 218,
    livro: "Memórias Póstuma de Brás Cubas",
    fonte: "Memórias Póstumas de Brás Cubas — Machado de Assis",
    texto_sem_pontuacao: "Algum tempos hesitei se devia abrir estas memórias pelo princípio ou pelo fim isto é se iria pôr em primeiro lugar o meu nascimento ou a minha morte",
    texto_correto: "Algum tempo hesitei se devia abrir estas memórias pelo princípio ou pelo fim, isto é, se iria pôr em primeiro lugar o meu nascimento ou a minha morte."
},
{
    id: 219,
    livro: "Memórias Póstumas de Brás Cubas",
    fonte: "Memórias Póstumas de Brás Cubas — Machado de Assis",
    texto_sem_pontuacao: "Mas já que falei nos meus dois tios deixa me fazer aqui um curto esboço genealógico",
    texto_correto: "Mas, já que falei nos meus dois tios, deixa-me fazer aqui um curto esboço genealógico...",
    dica: "Esta frase ainda não foi terminada."
},
{
    id: 220,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Ele só teve coragem de me responder três dias depois do ocorrido Mas quanta covardia",
    texto_correto: "Ele só teve coragem de me responder três das depois do ocorrido... Mas quanta covardia!",
    dica: "Antes da primeira conjunção de oposição, o \"Mas\", houve uma pausa dramática."
},
{
    id: 221,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Eu sou uma pessoa qualquer em um mundo qualquer em um universo qualquer falando uma frase qualquer Então qual o sentido de tudo isso",
    texto_correto: "Eu sou uma pessoa qualquer, em um mundo qualquer, em um universo qualquer, falando um frase frase qualquer... Então, qual o sentido de tudo isso?",
    dica: "Observe o pronome \"qual\", além de observar a pausa dramática antes de \"Então\"."
},
{
    id: 222,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Cuidado Existem tubarões nesta praia",
    texto_correto: "Cuidado! Existem tubarões nesta praia."
},
{
    id: 223,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "O sentido da vida é apenas É apenas viver",
    texto_correto: "O sentido da vida é apenas... É apenas viver!",
    dica: "Pausa dramática antes do segundo verbo \"É\"."
},
{
    id: 224,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Mas o que poderemos fazer sem a sua ajuda",
    texto_correto: "Mas o que poderemos fazer sem ajuda?"
},
{
    id: 225,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Eu não sei o que fazer Eu escolho a porta da esquerda ou da direita",
    texto_correto: "Eu não sei o que fazer! Eu escolho a porta da esquerda ou da direta?"
},
{
    id: 226,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Como pôde me trair desse jeito Alberto",
    texto_correto: "Como pôde me trair desse jeito, Alberto?",
    dica: "Observe o vocativo e o pronome."
},
{
    id: 227,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Nunca repito nunca diga nunca",
    texto_correto: "Nunca, repito, nunca diga nunca!",
    dica: "Frase no modo imperativo."
},
{
    id: 228,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Cara me ensina a trocar o pneu do carro por favor",
    texto_correto: "Cara, me ensina a trocar o pneu do carro, por favor?",
    dica: "É um pedido."
},
{
    id: 229,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Eu consigo contar até um milhão Um dois três e E por aí vai",
    texto_correto: "Eu consigo contar até um milhão! Um, dois, três, e... E por aí vai!",
    dica: "Pausa depois do primeiro \"e\"."
},
{
    id: 230,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Como tens coragem de matar meu pai Adalberto",
    texto_correto: "Como tens coragem de matar meu pai, Adalberto?",
    dica: "Observe o vocativo."
},
{
    id: 231,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Pedro pode servir chá ao convidado por favor",
    texto_correto: "Pedro, pode servir chá ao convidado, por favor?",
    dica: "É uma solicitação com uso de vocativo."
},
{
    id: 232,
    livro: "Código Penal",
    fonte: "Código Penal — Art. 1º e Art. 2º",
    texto_sem_pontuacao: "Não há crime sem lei anterior que o defina Não há pena sem prévia prescrição legal",
    texto_correto: "Não há crime sem lei anterior que o defina. Não há pena sem prévia prescrição legal."
},
{
    id: 233,
    livro: "Código Penal",
    fonte: "Código Penal — Art. 25",
    texto_sem_pontuacao: "Entende se em legítima defesa quem usando moderadamente dos meios necessários repele injusta agressão atual ou que está prestes a acontecer a direito seu ou de outra pessoa",
    texto_correto: "Entende-se em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou que está prestes a acontecer, a direito seu ou de outra pessoa."
},
{
    id: 234,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Iniciando contagem regressiva para o lançamento do foguete cinco quatro três dois um já",
    texto_correto: "Iniciando contagem regressiva para o lançamento do foguete: cinco, quatro, três, dois, um,  já!",
    dica: "A contagem regressiva é um enumeração."
},
{
    id: 235,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "O que você vai fazer amanhã Nadar ou ir no parque",
    texto_correto: "O que você vai fazer amanhã? Nadar ou ir no parque?"
},
{
    id: 236,
    livro: "Bíblia",
    fonte: "1 Coríntios 10:24",
    texto_sem_pontuacao: "Ninguém deve buscar o seu próprio bem mas sim o dos outros",
    texto_correto: "Ninguém deve buscar o seu próprio bem, mas sim o dos outros."
},
{
    id: 237,
    livro: "Gabriela e a Titia",
    fonte: "Gabriela e a Titia",
    texto_sem_pontuacao: "Gabriela uma menina muito levada tinha uma tia que falava demais A cada vez que ela iam para a rua a tia arranjava um jeito de conversar horas a fio com o florista com o peixeiro com o padeiro Gabriela achava aquilo muito chato",
    texto_correto: "Gabriela, uma menina muito levada, tinha uma tia que falava demais. A cada vez que elas iam para a rua, a tia arranjava um jeito de conversar horas a fio: com o florista, com o peixeiro, com o padeiro... Gabriela achava aquilo muito chato.",
    dica: "A enumeração não terminou."
},
{
    id: 238,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "No futuro as pessoas vão se comunicar via pensamento ou seja telepatia",
    texto_correto: "No futuro, as pessoas vão se comunicar via pensamentos, ou seja, telepatia!"
},
{
    id: 239,
    livro: "Forrest Gump",
    fonte: "Forrest Gump",
    texto_sem_pontuacao: "A vida é como uma caixa de chocolates Você nunca sabe o que vai encontrar",
    texto_correto: "A vida é como uma caixa de chocolates. Você nunca sabe o que vai encontrar."
},
{
    id: 240,
    livro: "Autoria Própria",
    fonte: "René Descartes",
    texto_sem_pontuacao: "Penso logo existo",
    texto_correto: "Penso, logo existo."
},
{
    id: 241,
    livro: "Hamlet",
    fonte: "Hamlet — William Shakespeare",
    texto_sem_pontuacao: "Ser ou não ser eis a questão",
    texto_correto: "Ser ou não ser, eis a questão."
},
{
    id: 242,
    livro: "E o Vento Levou",
    fonte: "E o Vento Levou",
    texto_sem_pontuacao: "Depois de tudo amanhã é outro dia",
    texto_correto: "Depois de tudo, amanhã é outro dia!"
},
{
    id: 243,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Depois de tudo que fez a mim e à minha família você ainda tem coragem de vir aqui e falar que quer voltar a ser meu amigo",
    texto_correto: "Depois de tudo que fez a mim e à minha família, você ainda tem coragem de vir aqui e falar que quer voltar a ser meu amigo?"
},
// New cards supplied by the user
{
    id: 244,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Mariana venha aqui preciso te contar uma coisa muito importante",
    texto_correto: "Mariana, venha aqui! Preciso te contar uma coisa muito importante.",
    dica: "Observe o vocativo e a mudança entre as duas frases."
},
{
    id: 245,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Na minha mochila há cadernos livros canetas lápis borrachas e muito mais",
    dica_contexto: "(A enumeração não terminou)",
    texto_correto: "Na minha mochila há cadernos, livros, canetas, lápis, borrachas e muito mais...",
    dica: "Utilizam-se vírgulas para separar os itens de uma enumeração, e as reticências indicam que ela pode continuar."
},
{
    id: 246,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Ele olhou para mim e perguntou Você realmente fez isso sozinho",
    texto_correto: "Ele olhou para mim e perguntou: \"Você realmente fez isso sozinho?\"",
    dica: "Os dois-pontos introduzem a fala, e o ponto de interrogação indica uma pergunta direta."
},
{
    id: 247,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Eu pensei que tudo daria certo mas no último instante tudo mudou",
    texto_correto: "Eu pensei que tudo daria certo, mas, no último instante, tudo mudou.",
    dica: "A vírgula separa a oração introduzida por \"mas\", e a expressão \"no último instante\" está intercalada."
},
{
    id: 248,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Você prometeu que nunca me abandonaria e agora vai embora",
    texto_correto: "Você prometeu que nunca me abandonaria... E agora vai embora!",
    dica: "As reticências marcam uma pausa dramática, enquanto o ponto de exclamação expressa indignação ou surpresa."
},
{
    id: 249,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Pedro me diga uma coisa você realmente acredita nessa história",
    texto_correto: "Pedro, me diga uma coisa: você realmente acredita nessa história?",
    dica: "Observe o vocativo, os dois-pontos que introduzem uma pergunta e o ponto de interrogação no final."
},
{
    id: 251,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Nem pense nisso Se lembra de quando você tentou pular da cama elástica",
    texto_correto: "Nem pense nisso! Se lembra de quando você tentou pular da cama elástica?",
    dica: ""
},
{
    id: 252,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Nem em sonhos você conseguirá me ultrapassar então nem tente",
    texto_correto: "Nem em sonhos você conseguirá me ultrapassar, então nem tente!",
    dica: ""
},
{
    id: 253,
    livro: "Autoria Própria",
    fonte: "Autoria própria, baseada em fatos reais",
    texto_sem_pontuacao: "Você viu as novas notícias do jornal Encontraram alienígenas em uma cidade do interior",
    texto_correto: "Você viu as novas notícias do jornal? Encontraram alienígenas em uma cidade do interior!",
    dica: ""
},
{
    id: 254,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Será possível fazer suco de laranja sem laranja",
    texto_correto: "Será possível fazer suco de laranja sem laranja?",
    dica: ""
},
{
    id: 255,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Eu não tenho nada a declarar mas ele com certeza",
    texto_correto: "Eu não tenho nada a declarar, mas ele, com certeza...",
    dica: ""
},
{
    id: 256,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Eu duvido que você seja primo daquele cantor sertanejo",
    texto_correto: "Eu duvido que você seja primo daquele cantor sertanejo!",
    dica: ""
},
{
    id: 258,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Existem coisas mais importantes que a sua piscina por exemplo o desmatamento e as espécies em extinção",
    texto_correto: "Existem coisas mais importantes que a sua piscina, por exemplo, o desmatamento e as espécies em extinção.",
    dica: ""
},
{
    id: 259,
    livro: "Autoria Própria",
    fonte: "Autoria Própria",
    texto_sem_pontuacao: "Eu gosto de aprender de pescar de cozinhar e de construir",
    texto_correto: "Eu gosto de aprender, de pescar, de cozinhar e de construir.",
    dica: ""
},
,

    // New cards supplied by the user
    {
        id: 260,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Os animais também têms seus direitos afinal eles ainda são seres vivos",
        texto_correto: "Os animais também têm seus direitos, afinal, eles ainda são seres vivos.",
        dica: ""
    },
    {
        id: 261,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Como aprender a fazer embaixadinhas",
        texto_correto: "Como aprender a fazer embaixadinhas?",
        dica: ""
    },
    {
        id: 262,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Eu adoro personagens que quebram a quarta parede o único problema é que tenho medo de falar seu nome e receber uma carta sobre direitosautorais de uma certa empresa",
        texto_correto: "Eu adoro personagens que quebram a quarta parede. O único problema é que tenho medo de falar seu nome e receber uma carta sobre direitos autorais de uma certa empresa.",
        dica: ""
    },
    {
        id: 263,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Hoje em dia as pessoas ouvem uma pessoa que elas gostam falar uma coisa absurda e tomar como verdade total",
        texto_correto: "Hoje em dia, as pessoas ouvem uma pessoa de quem gostam falar uma coisa absurda e tomam isso como verdade absoluta.",
        dica: ""
    },
    {
        id: 264,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Cara eu estava tentando abrir essa caixa e só agora percebi que é um tijolo",
        texto_correto: "Cara, eu estava tentando abrir essa caixa e só agora percebi que é um tijolo.",
        dica: ""
    },
    {
        id: 265,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "A imortalidade não é uma benção é uma maldição",
        texto_correto: "A imortalidade não é uma bênção, é uma maldição!",
        dica: ""
    },
    {
        id: 266,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Eu tenho mais medo de viver quinhentos anos no futuro do que viver quinhentos anos no passado",
        texto_correto: "Eu tenho mais medo de viver quinhentos anos no futuro do que viver quinhentos anos no passado.",
        dica: ""
    },
    {
        id: 267,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "A festa estava boa até que os policiais bateram na porta",
        texto_correto: "A festa estava boa, até que os policiais bateram na porta...",
        dica: "A frase não foi terminada."
    },
    {
        id: 268,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "A gente provavelmente estaria na rua se tivessemos desistido dos nossos sonhos então vamos agradecer",
        texto_correto: "A gente provavelmente estaria na rua se tivesse desistido dos nossos sonhos. Então, vamos agradecer!",
        dica: ""
    },
    {
        id: 269,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "A casa que tem dois andares tem dois tetos ou só um",
        texto_correto: "A casa que tem dois andares tem dois tetos ou só um?",
        dica: ""
    },
    {
        id: 270,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Eu nunca mais vi o Edinaldo Onde será que ele está",
        texto_correto: "Eu nunca mais vi o Edinaldo. Onde será que ele está?",
        dica: ""
    },
    {
        id: 271,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Quando eu fico quieto consigo escutar as folhas das árvores balançando meu coração batendo e a natureza operando",
        texto_correto: "Quando eu fico quieto, consigo escutar as folhas das árvores balançando, meu coração batendo e a natureza operando.",
        dica: ""
    },
    {
        id: 272,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Não fale do meu avô assim Ele foi um bravo guerreiro na segunda guerra",
        texto_correto: "Não fale do meu avô assim! Ele foi um bravo guerreiro na Segunda Guerra Mundial.",
        dica: ""
    },
    {
        id: 273,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Eu só preciso de comida água e um ventilador nada mais",
        texto_correto: "Eu só preciso de comida, água e um ventilador, nada mais.",
        dica: ""
    },
    {
        id: 274,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "A melhor coisa para se fazer em um domingo é nada",
        texto_correto: "A melhor coisa para se fazer em um domingo é nada.",
        dica: ""
    },
    {
        id: 275,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Nunca deixe seus pensamentos intrusivos vencerem, e falo por experiência própria",
        texto_correto: "Nunca deixe seus pensamentos intrusivos vencerem, e falo por experiência própria!",
        dica: ""
    },
    {
        id: 276,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Minha casa é meu paraíso Minha televisão me traz entreterimento e meu sofá conforto",
        texto_correto: "Minha casa é meu paraíso. Minha televisão me traz entretenimento, e meu sofá, conforto.",
        dica: ""
    },
    {
        id: 277,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Durante toda a semana estou cansado menos no fim de semana Será que isso é uma piada do universo",
        texto_correto: "Durante toda a semana estou cansado, menos no fim de semana. Será que isso é uma piada do universo?",
        dica: ""
    },
    {
        id: 278,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Eu tenho um cachorro dois gatos e um papagaio",
        texto_correto: "Eu tenho um cachorro, dois gatos e um papagaio.",
        dica: ""
    },
    {
        id: 279,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Entre toros os sentimentos o meu preferido é a nostalgia",
        texto_correto: "Entre todos os sentimentos, o meu preferido é a nostalgia.",
        dica: ""
    },
    {
        id: 280,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Estou ansiosa para finalmente poder dirigir",
        texto_correto: "Estou ansiosa para finalmente poder dirigir.",
        dica: ""
    },
    {
        id: 281,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Como assim os robôs têm um cérebro diferente do nosso",
        texto_correto: "Como assim os robôs têm um cérebro diferente do nosso?",
        dica: ""
    },
    {
        id: 282,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Existem lugares em que só uma pessoa controla tudo e nem sempre controla bem",
        texto_correto: "Existem lugares em que só uma pessoa controla tudo e nem sempre controla bem.",
        dica: ""
    },
    {
        id: 283,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "O meu filme favorito é É qualquer um que tenha heróis e vilões",
        texto_correto: "O meu filme favorito é... É qualquer um que tenha heróis e vilões.",
        dica: "Pausa antes de \"É qualquer um...\""
    },
    {
        id: 284,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Todo o universo é feito de coisas Eu sou uma coisa você é uma coisa todos nós somos coisas",
        texto_correto: "Todo o universo é feito de coisas: eu sou uma coisa, você é uma coisa, todos nós somos coisas.",
        dica: ""
    },
    {
        id: 285,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "As pessoas me deixam confuso Eu só queria saber se o que vem primeiro é a educação ou a segurança",
        texto_correto: "As pessoas me deixam confuso. Eu só queria saber se o que vem primeiro é a educação ou a segurança.",
        dica: ""
    },
    {
        id: 286,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "A natureza é bela e os arco íris estão aí para provar",
        texto_correto: "A natureza é bela, e os arco-íris estão aí para provar.",
        dica: ""
    },
    {
        id: 287,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Eu adoro cozinhar mas odeio o barulho do liquidicador",
        texto_correto: "Eu adoro cozinhar, mas odeio o barulho do liquidificador.",
        dica: ""
    },
    {
        id: 288,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Eu acho que atingi o ápice da paz do ser humano Estou sentado com o ventilador fazendo um vento fresco em mim",
        texto_correto: "Eu acho que atingi o ápice da paz do ser humano. Estou sentado, com o ventilador fazendo um vento fresco em mim...",
        dica: ""
    },
    {
        id: 289,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "A criatividade é como um carro Funciona por um tempo considerável até que de repente precisa para para ser reabastecida",
        texto_correto: "A criatividade é como um carro: funciona por um tempo considerável, até que, de repente, precisa parar para ser reabastecida.",
        dica: ""
    },
    {
        id: 290,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Não",
        texto_correto: "Não.",
        dica: ""
    },
    {
        id: 291,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Na minha opinião as velas de aniversário deviam ser deitadas justamente para durarem menos",
        texto_correto: "Na minha opinião, as velas de aniversário deviam ser deitadas justamente para durarem menos.",
        dica: ""
    },
    {
        id: 292,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Sim",
        texto_correto: "Sim.",
        dica: ""
    },
    {
        id: 293,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Tal pai tal filho",
        texto_correto: "Tal pai, tal filho.",
        dica: ""
    },
    {
        id: 294,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Não entendo quem chorar de rir afinal quem está rindo deve estar feliz certo",
        texto_correto: "Não entendo quem chora de rir, afinal, quem está rindo deve estar feliz, certo?",
        dica: ""
    },
    {
        id: 295,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Nem todo ser humano toma ações humanas da mesma forma que nem todo animal toma ações desumanas",
        texto_correto: "Nem todo ser humano toma ações humanas, da mesma forma que nem todo animal toma ações desumanas.",
        dica: ""
    },
    {
        id: 296,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "A pipoca do cinema é tão boa que quando eu e meu amigo chegamos na sala comemos tudo antes do filme começar",
        texto_correto: "A pipoca do cinema é tão boa que, quando eu e meu amigo chegamos à sala, comemos tudo antes de o filme começar.",
        dica: ""
    },
    {
        id: 297,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Nunca desconte sua raiva em quem não merece",
        texto_correto: "Nunca desconte sua raiva em quem não merece.",
        dica: ""
    },
    {
        id: 298,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Talvez",
        texto_correto: "Talvez.",
        dica: ""
    },
    {
        id: 299,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Existem pessoas que são piadas ambulantes e elas sempre alegram meu dia",
        texto_correto: "Existem pessoas que são piadas ambulantes, e elas sempre alegram meu dia.",
        dica: ""
    },
    {
        id: 300,
        livro: "Autoria Própria",
        fonte: "Autoria Própria",
        texto_sem_pontuacao: "Bem acho que já estou preparado para a prova",
        texto_correto: "Bem, acho que já estou preparado para a prova.",
        dica: ""
    }
];

// Unificando os baralhos e garantindo que todos tenham a propriedade 'tipo'
const gameCards = [
    ...questionCards,
    ...exemplosCards.map(c => ({ ...c, tipo: 'citacao' }))
];

window.gameCards = gameCards;
