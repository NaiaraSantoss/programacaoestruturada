

/*Lista 01 - Data: 11/02/2020. Data de entrega: 19/02/2020
1) Faça um código que preencha um array de 10 posições com números inteiros aleatórios (entre 0 e 100) e os imprima na tela.
2) Faça um código que preencha um array de 20 posições com números inteiros pares aleatórios (entre 0 e 100) e os imprima na tela.
3) Faça um código que preencha um array de 30 posições com números inteiros ímpares aleatórios (entre 0 e 100) e os imprima na tela.
4) Faça um código com um array A com todos os meses do ano (Janeiro a Dezembro). Faça um array B que será uma cópia do array A porém com os meses na ordem reversa (Dezembro a Janeiro).
5) Faça um código com um array de strings com os dias da semana (domingo a sábado) todo em caracteres minúsculos. 5.a) Faça uma função que converta todos os caracteres de todos os elementos de qualquer array para caracteres maiúsculos. 5.b) Faça uma função que converta somente o primeiro caractere de cada elemento de qualquer array para caractere maiúsculo.
6) Faça um código que preencha um array de 100 posições com números inteiros aleatórios (entre 0 e 100). Faça duas somas: todos os números pares do array, e outra para todos os números ímpares. Exiba na tela: o array, os resultados das duas somas.
7) Gere um número aleatório entre 1 e 10. Esse número aleatório será o tamanho um array. Preencha esse array com números reais aleatórios entre -10 e 10.
8) Acesse esse arquivo aqui. Escolha 30 frases. Coloque as frases em um array (cuidado com as aspas). Crie um código que a cada visita a página HTML, uma frase diferente é exibida. Bônus: Crie um app com um botão o qual quando pressionado, uma nova frase é exibida (para que não seja necessário dar refresh na página para exibir uma nova frase).
9) Vá ao Google Imagens. Escolha 10 imagens de natureza. Copie os endereços URL das 10 imagens e coloque em um array. Crie um código que a cada visita a página HTML, uma imagem diferente é exibida. Bônus: Crie um app com um botão o qual quando pressionado, uma nova imagem é exibida (para que não seja necessário dar refresh na página para exibir uma nova imagem).
10) Unir o app do exercício 8 com o app do exercício 9. Bônus incluído. Pode usar o visual que você quiser no seu app.
*/

//1) Faça um código que preencha um array de 10 posições com números inteiros aleatórios (entre 0 e 100) e os imprima na tela.
function geraNumero(){
    let n = 0;
    n = Math.random();
    n = Math.random() * 100;
    n = Math.floor(n);// ou ceil

    return n;
}

var exe1 = [];

for (let i = 0; i < 9; i++){
    this.exe1[i] =  geraNumero();
}
document.getElementById("exercicio1").innerHTML = "Exercício 3 = " + exe1 + "<br>";
//FIM Exercicio 1

//2) Faça um código que preencha um array de 20 posições com números inteiros pares aleatórios (entre 0 e 100) e os imprima na tela.
function geraNumeroPar(){
    let n = 0;
    n = Math.random();
    n = Math.random() * 100;
    n = Math.floor(n);// ou ceil

    //se o número for impar
    if((n%2 != 0) || (n == 1)){
        n = n + 1;//recebe mais um
    }
    
    return n;
}
var exe2 = [];
for (let i = 0; i < 20; i++){
    this.exe2[i] =  geraNumeroPar();
}
document.getElementById("exercicio2").innerHTML = "Exercício 2 = " + exe2 + "<br>";
//FIM Exercicio 2

//3) Faça um código que preencha um array de 30 posições com números inteiros ímpares aleatórios (entre 0 e 100) e os imprima na tela.
function geraNumeroImpar(){
    let n = 0;
    n = Math.random();
    n = Math.random() * 100;
    n = Math.floor(n);// ou ceil

    //se o número for par
    if((n%2 == 0) || (n == 0)){
        n = n + 1;//recebe mais um
    }
    
    return n;
}
var exe3 = [];
for (let i = 0; i < 30; i++){  
    this.exe3[i] =  geraNumeroImpar();
}
document.getElementById("exercicio3").innerHTML = "Exercício 3 = " + exe3 + "<br>";
//FIM Exercicio 3

//Método para todas as letras em maiúsculo
var semana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
semana.toUpperCase;
for (let i = 0; i < todasAsCores.length; i++){
    todasAsCores[i] = todasAsCores[i].toUpperCase();
}
//FIM Exercicio 5

//4) Faça um código com um array A com todos os meses do ano (Janeiro a Dezembro). Faça um array B que será uma cópia do array A porém com os meses na ordem reversa (Dezembro a Janeiro).
var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho','<BR>', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
document.getElementById("exercicio4").innerHTML = "exercicio 4 = <br> " + meses + "<br>";
var m = 0;
var exe4 = [];
for (let i = 12; i > 0; i--){  
    this.exe4[m] =  meses[i];
    m++;
}
document.getElementById("exercicio4.2").innerHTML =  exe4 + "<br>";
//FIM Exercicio4

//6) Faça um código que preencha um array de 100 posições com números inteiros aleatórios (entre 0 e 100). Faça duas somas: todos os números pares do array, e outra para todos os números ímpares. Exiba na tela: o array, os resultados das duas somas.
function numAlea(){
    let n = 0;
    n = Math.random();
    n = Math.random() * 100;
    n = Math.floor(n);// ou ceil

    return n;
}
var exe6P = []; 
var exe6I = [];
var par = 0;
var impar = 0;

for (let i = 0; i < 100; i++){ 
    var num = numAlea(); 
    
    if(num % 2 == 0){
        par = par + num;//execultando a soma de pares
        exe6P.unshift(num);//inserindo no vetor de pares
    }else{
        impar = impar + num;//execultando a soma de impares
        exe6I.unshift(num);//inserindo no vetor impares
    }
}
document.getElementById("exercicio6").innerHTML ="Exercício 6 <br> Pares <br>" + exe6P + "<br>" + 
"A soma dos números pares: " + par + "<br>";

document.getElementById("exercicio6.2").innerHTML = "Impares<BR>" + exe6I + "<br>" +
"A soma dos números pares: " + impar + "<br>";
//FIM Exercicio 6

//7) Gere um número aleatório entre 1 e 10. Esse número aleatório será o tamanho um array. Preencha esse array com números reais aleatórios entre -10 e 10.
function geraNumero(){
    let n = 0;
    n = Math.random();
    n = Math.random() * 10;
    n = Math.floor(n);// ou ceil

    return n;
}
function geraNumero7(){
     Math.ceil(-10);
     Math.floor(10);
   return Math.floor(Math.random() * (10 - 10)) + 10;
   
}
var rand = geraNumero7();
var nn = [];

for (let i = 0; i < rand; i++){ 
     this.nn[i] = numAlea();     
   
}

document.getElementById("exercicio7").innerHTML = "Exercício 7: " + nn ;

var frases = ['“Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos” – James Cameron, cineasta',
    '“O sucesso normalmente vem para quem está ocupado demais para procurar por ele” – Henry David Thoreau, filósofo',
    '“A vida é melhor para aqueles para quem fazem o possível para terem o melhor – John Wooden, jogador e treinador de basquete',
    '“Os empreendedores falham, em média, 3,8 vezes antes do sucesso final. O que separa os bem-sucedidos dos outros é a persistência” – Lisa M. Amos, executiva',
    '“Se você não está disposto a arriscar, esteja disposto a uma vida comum” – Jim Rohn, empreendedor',
    '“Escolha uma ideia. Faça dessa ideia a sua vida. Pense nela, sonhe com ela, viva pensando nela. Deixe cérebro, músculos, nervos, todas as partes do seu corpo serem preenchidas com essa ideia. Esse é o caminho para o sucesso” – Swami Vivekananda, pensador hindu',
    '“Para de perseguir o dinheiro e comece a perseguir o sucesso” – Tony Hsieh, empreendedor',
    '“Todos os seus sonhos podem se tornar realidade se você tem coragem para persegui-los” – Walt Disney, desenhista e empreendedor',
    '“Ter sucesso é falhar repetidamente, mas sem perder o entusiasmo” – Winston Churchill, político',
    '“Sempre que você vir uma pessoa de sucesso, você sempre verá as glórias, nunca os sacrifícios que os levaram até ali” – Vaibhav Shah, pensador',
    '“Sucesso? Eu não sei o que isso significa. Eu sou feliz. A definição de sucesso varia de pessoa para pessoa Para mim, sucesso é paz anterior” – Denzel Washington, ator',
    '“Oportunidades não surgem. É você que as cria” – Chris Grosser, fotógrafo',
    '“Não tente ser uma pessoa de sucesso. Em vez disso, seja uma pessoa de valor” – Albert Einstein, físico',
    '“Não é o mais forte que sobrevive, nem o mais inteligente. Quem sobrevive é o mais disposto à mudança” – Charles Darwin, biólogo',
    '“A melhor vingança é um sucesso estrondoso” – Frank Sinatra, cantor',
    '“Eu não falhei. Só descobri 10 mil caminhos que não eram o certo” – Thomas Edison, inventor',
    '“Um homem de sucesso é aquele que cria uma parede com os tijolos que jogaram nele” – David Brinkley, jornalista',
    '“Ninguém pode fazer você se sentir inferior sem o seu consentimento” – Eleanor Roosevelt, primeira-dama dos EUA',
    '“O grande segredo de uma boa vida é encontrar qual é o seu destino. E realizá-lo” – Henry Ford, empreendedor',
    '“Se você está atravessando um inferno, continue atravessando” – Churchill',
    '“O que nos parece uma provação amarga pode ser uma bênção disfarçada” – Oscar Wilde, escritor',
    '“A distância entre a insanidade e a genialidade é medida pelo sucesso” – Bruce Feirstein, roteirista',
    '“Não tenha medo de desistir do bom para perseguir o ótimo” – John D. Rockefeller, empreendedor',
    '“A felicidade é uma borboleta que, sempre que perseguida, parecerá inatingível; no entanto, se você for paciente, ela pode pousar no seu ombro” – Nathaniel Hawthorne, escritor',
    '“Se você não pode explicar algo de forma simples, então você não entendeu muito bem o que tem a dizer” – Einstein',
    '“Há dois tipos de pessoa que vão te dizer que você não pode fazer a diferença neste mundo: as que têm medo de tentar e as que têm medo de que você se dê bem” – Ray Goforth, executivo',
    '“Comece de onde você está. Use o que você tiver. Faça o que você puder” – Arthur Ashe, tenista',
    '“As pessoas me perguntam qual é o papel que mais gostei de interpretar. Eu sempre respondo: o próximo” – Kevin Kline, ator',
    '“Descobri que, quanto mais eu trabalho, mais sorte eu pareço ter” – Thomas Jefferson, político',
    '“O ponto de partida de qualquer conquista é o desejo” – Napoleon Hill, assessor político',
    '“O sucesso é a soma de pequenos esforços repetidos dia após dia” – Robert Collier, escritor',
    '“Todo progresso acontece fora da zona de conforto” – Michael John Bobak',
    '“Coragem é a resistência e o domínio do medo, não a ausência dele” – Mark Twain, escritor',
    '“Só evite fazer algo hoje se você quiser morrer e deixar assuntos inacabados” – Pablo Picasso, pintor',
    '“O único lugar em que o sucesso vem antes do trabalho é no dicionário” – Vidal Sassoon, cabeleireiro',
    '“Não sei qual é a chave para o sucesso, mas a chave para o fracasso é tentar agradar a todos” – Bill Cosby, comediante',
    '“Embora ninguém possa voltar atrás e começar tudo de novo, qualquer um pode ter um ótimo final” – Carl Bard'];

   // document.getElementById("exercicio8").innerHTML = "Exercício 8: " + frases ;
   var colors = ["https://images.madeiramadeira.com.br/product/images/42198045-adesivo-paisagem-natureza-papel-parede-floresta-gg597prdpmivhu5iswwgm-179-1-800x729.jpg",
   "https://abrilsuperinteressante.files.wordpress.com/2019/09/fotosvencedora.png",
   "https://http2.mlstatic.com/adesivo-paisagem-3d-natureza-papel-parede-cachoeira-gg348-D_NQ_NP_949247-MLB27348373098_052018-F.jpg",
   "https://images-americanas.b2w.io/produtos/01/00/sku/37954/0/37954062_1GG.jpg",
   "data:image/jpeg;base64,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",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6TTrduoiRDiEJoP7RxVA1Lw2groavFBZWaZA2L4Pvare01ufp",
   "https://www.a12.com/source/files/originals/natureza-260802.jpg",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR82JMRMwQL5mRGorpmLJZW94weBUzKAntOiHP5PlWB50wmUi_I",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl1kT2iz67QMHGQA8A1ro3DiL7I_BxrN9LweUzQBXl5Q0oY6lt",
    "https://www.imagensfotos.com.br/wp-content/uploads/2013/05/natureza-47.jpg"];
    
   function mudaFrase(){
        let frase = 0;
        let cor = 0;
    
        frase = Math.floor(Math.random() * Math.floor(frases.length));//entre 0 e 1
        cor = Math.floor(Math.random() * Math.floor(colors.length));
        document.getElementById("exercicio9").innerHTML =  frases[frase];
        document.getElementById("conteiner").style.backgroundImage = "url('"+ colors[cor] +"')";
    };