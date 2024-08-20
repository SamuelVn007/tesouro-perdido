const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Você é um caçador de tesouros raros e valiosos indo a uma ilha em busca de uma grande fortuna escondida, ao desembarcar você pega seu mapa conquistado em uma luta de bar e parte atrás da riqueza. Caminhando pela ilha, uma enorme besta mutante aparece em sua frente, você corre e se de para com dois caminhos: ",
        alternativas: [
            {
                texto:"O primeiro é uma trilha para uma caverna, um caminho muito fechado e rochoso mas é um caminho mais curto, e é um lugar mais escondido. ",
                afirmacao: "Mas ao chegar no fim da caverna me deparei com um monstro, com muito medo corri para as montanhas, "
            },
            {
                texto: "O segundo é uma estrada em meio a floresta, as árvores impedem a passagem de luz pelo caminho, é um lugar mais aberto mas não é facil se esconder do monstro. ",
                afirmacao: "Ao chegar no fim da floresta me deparei com um monstro, contaminado pelo medo corri para as montanhas, "
            }
        ]
    },
    {
        enunciado: "A besta ainda o persegue, ela o ataca mas seu medo é tão grande que a adrenalina não o faz sentir dor. Você se esquiva de um golpe mortal e segue o caminho esbarrando em tudo no trajeto, você tem coisas mais importantes para se preocupar do que para onde você está correndo.Porém esse descuido pode ser sua ruína. Você tropeça e cai de um barranco próximo a uma espada jogada do lado de uma árvore e se vê diante de mais uma escolha   ",
        alternativas: [
            {
                texto:"Pegar a espada e tentar lutar pela sua vida ",
                afirmacao: "porém a fera me perseguiu e me atacou brutalmente, foi quando encontrei uma espada, então decidi lutar pela minha vida, a batalha foi intensa. No fim a besta fugiu. "
            },
            {
                texto: "Ignorar a arma e continuar correndo",
                afirmacao: "porém a fera me perseguiu e me atacou brutalmente, corri por muito tempo pelo ardiloso caminho, mas no fim alcancei a saída e perdi a besta de vista.",
            }
        ]
    },
    {
        enunciado: "Você consegue com muita dificuldade passar pelo caminho, despistando a terrível fera mutante, enquanto você se recuperava da fuga/luta, se depara com uma entrada escondida para uma caverna profunda. Se aproximando dela você escorrega e acaba caindo nela. Entretanto, curiosamente ela é a caverna do tesouro, mas também pode ser o seu túmulo, você está muito ferido e precisa urgentemente de auxílio médico.",
        alternativas: [
            {
                texto:"O tesouro e muito valioso para ser ignorado, seu valor pode salvar minha vida, mas infelizmente só terei condições de levar algumas moedas.",
                afirmacao: "Após o encontro com a besta, foi descuidado e cai em uma caverna, lá achei o tesouro que buscava. A fera tinha me ferido muito então só consegui levar poucas moedas. "
            },
            {
                texto: "Sou muito jovem para morrer tentar levar a fortuna será um desafio, infelizmente terei que deixá-lo",
                afirmacao: "Após o encontro com a besta, foi descuidado e cai em uma caverna, lá achei o tesouro que buscava. A fera tinha me ferido muito então optei por sair do local e retornar em outro momento."
            }
        ]
    },
    {
        enunciado: "Mesmo quase desmaiando você consegue milagrosamente subir a caverna, se deparando com um pequeno pote, aparentemente quem escondeu esse tesouro morreu antes de sair dessa maldita ilha, você se pergunta se o monstro teria algo haver com isso. Independente do fim que o pirata levou, você entra no barco e retorna de volta ao seu próprio navio. Ao chegar nele, a ganância sussurra em seus ouvidos, entretanto suas feridas se agravam ainda mais. E uma tempestade se aproxima rapidamente",
        alternativas: [
            {
                texto:"Não sairei dessa ilha sem uma boa quantia de dinheiro, retornarei a caverna, agora com o meu navio",
                afirmacao: "Ao chegar em meu barco a ganância me consumiu e decidi voltar até a caverna pelo mar. "
            },
            {
                texto: "Merda! Terei de retornar uma outra hora para buscar toda a fortuna, espero que ninguém a encontre até o meu retorno.",
                afirmacao: "Ao chegar em meu barco a ganância tentou me consumir, mas meu sofrimento falou mais alto então decidi voltar a terra firme do continente."
            }
        ]
    },
    {
        enunciado: "Você faz sua escolha e começa a velejar, quando a tempestade finalmente o alcança sua determinação e a enfraquecida sua vida pode estar proxima",
        alternativas: [
            {
                texto:"Não morrei nesta ilha irei enfrentar os mares e os céus. ",
                afirmacao: "Entretanto uma tempestade me pegou desprevinido, virei o barco para longe da ilha e lutei contra a fúria da natureza, os mares eram implacáveis quase morri, mas agora sou triunfante perante as águas. Buscarei ajuda médica e logo voltarei à ilha para pegar definitivamente toda a fortuna pirata. "
            },
            {
                texto: "E melhor eu atracar na ilha e esperar, ainda há esperanças seguras de minha sobrevivência ",
                afirmacao: "Entretanto uma tempestade me pegou desprevinido, virei o barco para a ilha, mas os céus me castigaram com um poderoso raio que fez o navio naufragar, agora estou preso nesta ilha e só Deus sabe o que me espera. "
            }
        ]
    }
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    mostraAlternativas();
}

function mostraAlternativas(){
    for( const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement('button');
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click',() => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " "
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Sua caçada pelo tesouro chegou ao fim, como de costume você relata sua jornada em seu diário e aqui está o que você pôs em palavras do que vivenciou na ilha: "
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

