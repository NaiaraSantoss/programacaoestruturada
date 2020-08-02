
var numeros = [1,2,3,8,19,29,30,31];

var dobranumero = numeros.map(dou => dou * 2);
document.getElementById("exercicio0").innerHTML = "Exercicio 0: <BR> Original:" + numeros +
"<br> Dobro :   " + dobranumero + "<br>";

var numeros = [1,2,3,8,19,29,30,31];
var stringAray = numeros;
function strin (elemento){
    for(let i = 0; i < elemento.length; i++) {
        elemento[i].toString();
        elemento[i] = ' ' + elemento[i] + ''; 
    }
   return elemento;
    
}



stringAray = strin(stringAray);

document.getElementById("exercicio1").innerHTML = "Exercicio 1: <BR> Original:" + numeros +
"<br> Dobro :   " + stringAray + "<br>";

function changeColor(elemento) {
   
    var resultado = [];
        for(let i = 0; i <elemento.length; i++){
            if( elemento[i] %2 == 0 ){   
                resultado[i] = elemento[i].toString().fontcolor("red");
            }else{
                resultado[i] = elemento[i].toString().fontcolor("blue");
            } 
        }
         
    return resultado;
  }

  function geraNumero(){
    let n = 0;
    n = Math.random();
    n = Math.random() * 10;
    n = Math.floor(n);

    
        return" "+ n ;
    
}

var exe2 = [];

for (let i = 0; i < 10; i++){  
    this.exe2[i] = geraNumero();

}
exe2 = changeColor(exe2);

document.getElementById("exercicio2").innerHTML = "Exercicio 3: <BR> " + exe2 + "<BR>";

  function geraNumero(){
    let n = 0;
    n = Math.random();
    n = Math.random() * 10;
    n = Math.floor(n); 

        return" "+ n ;    
}

var exe3 = [];

for (let i = 0; i < 20; i++){  
    this.exe3[i] = geraNumero();

}

var impar = exe3.filter(im => im % 2 != 0); 
var pares = exe3.filter(pa => pa % 2 == 0); 
document.getElementById("exercicio3").innerHTML = "Exercicio 3: <BR> Original: " + exe3 + "<BR> Imapar:"
+ impar+ "<BR> Par: "+ pares;


function maior6(elemento) {   
   let maior = elemento.filter(ma => ma.length > 6);
   return maior;    
}

function menor6(elemento) { 
    let menor = elemento.filter(me => me.length <= 6);
    return menor;      
} 
 
var meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
var exe4_0 = menor6(meses); 
var exe4_1 = maior6(meses);

document.getElementById("exercicio4").innerHTML = "Exercicio 4: <BR> meses: <BR>" + meses + 
"<BR> Menor que seis caracteres: <BR>" + exe4_0 +
"<BR><BR> Maior que seis caracteres: <BR>" + exe4_1 + "<BR>";

var nomes = ["andre", "felipe", "maria", "daniel", "naiara"];
var sobrenomes = ["batista", "silva", "carolina", "pimentel", "silva"];

function juncoa(nome, sobrenome){
    let nomeJuntos = [];
    for(let i = 0; i < nome.length; i++){
        nomeJuntos[i] =" "+ nome[i].concat(" "+sobrenome[i]);   
    }
    return nomeJuntos;
}
var exe5 = juncoa(nomes,sobrenomes);

document.getElementById("exercicio5").innerHTML = "Exercicio 5: <BR> nomes e sobrenomes: <BR>" + exe5 ;





  function shiftLetters(elemento){
      resul = '';
      for(let i = 0; i < elemento.length; i++){
        let n = 0;
        n = elemento.charCodeAt(i);
        resul = resul + String.fromCharCode(n - 1);
      }
      return resul;
     
  }
  var teste = "kkbbccdd";

  exe6 = shiftLetters(teste);
  document.getElementById("exercicio6").innerHTML = "Exercicio 6: <BR> Original: " + teste + 
  "<br> resultadoado: " + exe6;

var isPresent = function(string, alvo) {
    let resultado = false
  
    resultado = string.indexOf(alvo) !=-1? true: false; 

    return resultado;
    
}
 
var exe7 = isPresent('abcd', 'f');
document.getElementById("exercicio7").innerHTML = "Exercicio 7: <BR> Original: " + exe7 ;


var isVetPresent = function(vet1, vet2) {
    let resultado = [];
    let n = 0;
    for(let i = 0; i < vet1.length; i++){
        for(let j = 0; j < vet2.length; j++){
            if(vet1[i] == vet2[j]){
                resultado[n] = vet1[i];
                n++;
            }
            
        }
        
    }
  
    return resultado;  
}
var vetor1 = [1,2,3,4,5,28,8];
var vetor2 = [1,2,18,5,28,8];
var exe8 = isVetPresent(vetor1,vetor2);

document.getElementById("exercicio8").innerHTML = "Exercicio 8: <BR> vetor 1: " + vetor1 +
"<br >vetor 2: "+ vetor2 + "<br> origina: "+ exe8 + "<br>";


var City = ["Londres","Tóquio","Seoul","Moscou","Genebra", "Paris","Amsterdan",
"Bruxelas","Lisboa","Berlim"];

var month = ["Janeiro","Fevereiro","Março","Abril","Maio", "Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

var year = [];

for (let i = 1900; i < 2018; i++){ 
    year.push(i)
}

var fenomeno = ["chuva","tempestade","neblina", "neve","vento","granizo"];

var intensidades = ["leve","muito forte","levemente forte", "pesada"];

function randYear() {
    return Math.floor(Math.random() * 119);
};

function randCity() {
    return Math.floor(Math.random() * 11);
};

function randMonth() {
    return Math.floor(Math.random() * 12);
};

function randFenomeno() {
    return Math.floor(Math.random() * 6);
};

function randIntensidade() {
    return Math.floor(Math.random() * 3);
};

c = randCity();
m = randMonth();
y = randYear();
f = randFenomeno();
i = randIntensidade();

var msg = (`Em ${month[m]} de ${year[y]} verificamos na cidade de ${City[c]} uma 
            ${fenomeno[f]} ${intensidades[i]}.`);

console.log(msg);
document.getElementById("exercicio9").innerHTML = "Exercicio 9:<br> " + msg;

var month = ["Janeiro","Fevereiro","Março","Abril","Maio", "Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
var color = [ "pink", "red", "green", "purple", "white ", "brown", "black", "violet", "gray", "lilac ",  "orange","blue"]
var month_color = [""];
for (let i = 0; i < 12; i++){
    month_color = month_color + "<span style='color: " + color[i] +"'>" + month[i] + "</span><br>"
}

document.getElementById("exercicio10").innerHTML = "Exercicio 10:<br> " + month_color;
