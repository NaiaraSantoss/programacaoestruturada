//1
class Pilha{
    constructor(){
        this.itens = [];
    }
    inserir(elemento){
        this.itens.push(elemento);
    }
    remover(){
        return this.itens.pop();
    }
    ultimo(){
        return this.itens[this.itens.length - 1];
    }
    ElementoEx(alvo){
        return this.itens.some(x => x == alvo);
    } 
}

var pilha = new Pilha();
var pilhaAuxiliar = new Pilha();

for(let i = 0; i < 10; i++){
    pilha.inserir(i);
}
console.log("Exercício 1");
var ver = pilha.ElementoEx(6);
console.log(ver);
var ver = pilha.ElementoEx(15);
console.log(ver);

//2
class Pilha2{

    constructor(){
        this.itens = [];
    }
    inserir(elemento){
        this.itens.push(elemento);
    }
    elementoBase(){
        for(let i = 0; i < this.itens.length; i++){
            var elemento = this.itens[0];
        }
          return elemento;
    }
  
}

var pilha2 = new Pilha2();
pilha2.inserir("Primeiro elemento");
pilha2.inserir("Segundo elemento");
pilha2.inserir("Terceiro elemento");

for(let i = 1; i <= 20; i++){
    pilha2.inserir(i);
}
console.log("Exercício 2");
console.log("Pilha Normal: ");
console.log(pilha2);
console.log(pilha2.elementoBase());

//3

class Pilha3{
    constructor(){
        this.itens = [];
        
    }
    inserir(elemento){
        this.itens.push(elemento);
    }

    tiposElementos(){
        var tipo;
        var contNum = 0;
        var contString = 0;
        for(let i = 0; i < this.itens.length; i++){
            if(typeof this.itens[i] === "number"){
                tipo = "numérico";
                contNum++;
            } else if(typeof this.itens[i] === "string"){
                tipo = "String";
                contString++; 
            }
            if(contNum >= 1 && contString >= 1) {  
                tipo = "Vários tipos";
            }
        }
        return tipo;
    }   


}

const pilhaNumerica = new Pilha3();
const pilhaString = new Pilha3();
const pilhaVariosTipos = new Pilha3();
const pilhaVariosTipos1 = new Pilha3();

for(let i = 1; i <= 11; i++){
    pilhaNumerica.inserir(i);
}
console.log("Exercício 3")
console.log("Pilha Numérica: ");
console.log(pilhaNumerica);

pilhaString.inserir("Einstein");
pilhaString.inserir("João Dória");
pilhaString.inserir("Mandetta");
pilhaString.inserir("Trump");

console.log("Pilha String: ");
console.log(pilhaString);

pilhaVariosTipos.inserir(234);
pilhaVariosTipos.inserir("Telefone");
pilhaVariosTipos.inserir(2345);
pilhaVariosTipos.inserir(34567);

console.log("Pilha Varios: ");
console.log(pilhaVariosTipos);

pilhaVariosTipos1.inserir("Email");
pilhaVariosTipos1.inserir("Celular");
pilhaVariosTipos1.inserir(34368);
pilhaVariosTipos1.inserir(3421);

console.log("Pilha Varios: ");
console.log(pilhaVariosTipos1);
console.log("Pilha Numérica = " + pilhaNumerica.tiposElementos());
console.log("Pilha String = " + pilhaString.tiposElementos());
console.log("Pilha diferentes tipos = " + pilhaVariosTipos.tiposElementos());
console.log("Pilha diferentes tipos = " + pilhaVariosTipos1.tiposElementos());

//4

var tipo;
class Pilha4{
    constructor(){
        this.itens = [];
        
    }

    inserir(elemento){
        this.itens.push(elemento);
    }

    tiposElementos(){
        
        var contNumer = 0;
        var contString = 0;
        for(let i = 0; i < this.itens.length; i++){
            if(typeof this.itens[i] === "number"){
                tipo = "Numérico";
                contNumer++;
            } else if(typeof this.itens[i] === "string"){
                tipo = "String";
                contString++; 
            }
            if(contNumer >= 1 && contString >= 1) {  
                tipo = "Vários tipos";
            }
        }
        return tipo;
    }  


    soma_Frase(){
        function somaTodos(total, value){
            return total + value;
        }

        if(tipo == "Numérico"){
            var result = this.itens.reduce(somaTodos);
            return result;
        } else if(tipo == "String"){
            var texto = this.itens.join(" ");
            return texto;
        } else {
            var error = "Error";
            return error;
        }
         
    }
}

const pilhaNumerica4 = new Pilha4();
const pilhaString4 = new Pilha4();
const pilhaVarios4 = new Pilha4();
const pilhaVarrios4_1 = new Pilha4();

for(let i = 1; i <= 11; i++){
    pilhaNumerica4.inserir(i);
}
console.log("Exercicio 4: ");
console.log("Pilha Numérica: ");
console.log(pilhaNumerica4);

pilhaString4.inserir("Einstein");
pilhaString4.inserir("Mandetta");
pilhaString4.inserir("Trump");
pilhaString4.inserir("Buda");

console.log("Pilha String: ");
console.log(pilhaString4);

pilhaVarios4.inserir(234);
pilhaVarios4.inserir("Telefone");
pilhaVarios4.inserir(23);
pilhaVarios4.inserir(42);

console.log("Pilha Varios: ");
console.log(pilhaVarios4);

console.log(tipo);

console.log("Pilha Numérica tipo = " + pilhaNumerica4.tiposElementos());
console.log("Pilha função soma_Frase = " + pilhaNumerica4.soma_Frase());
console.log("Pilha String tipo = " + pilhaString4.tiposElementos());
console.log("Pilha função soma_Frase = " + pilhaString4.soma_Frase());
console.log("Pilha diferente tipo = " + pilhaVarios4.tiposElementos());
console.log("Pilha função soma_Frase = " + pilhaString4.soma_Frase());

//5
class Pilha5{
    constructor(){
        this.itens = [];
    }
    inserir(elemento){
        this.itens.push(elemento);
    }
    remover(){
        return this.itens.pop();
    }
    ultimo(){
        return this.itens[this.itens.length - 1];
    }
    invertePilha(){
        return this.itens.reverse();
    }
}

var pilha = new Pilha5();
console.log("Exercício 5: ");
for(let i = 1; i <= 15; i++){
    pilha.inserir(i);
    console.log("Pilha normal: ", pilha);
}

console.log("Pilha invertida: ");
pilha.invertePilha();
console.log(pilha);

//6
class Pilha6{
    // Construtor da classe Pilha
    constructor(){
        this.itens = [];
    }

    //Métodos da calsse Pilha
    inserir(elemento){
        this.itens.push(elemento);
    }

    visualizarPilhaHtml(){
        document.getElementById("exercicio6").innerHTML = pilha.itens;
    }

}

var pilha = new Pilha6();
console.log("Exercício 6: ");
for(let i = 1; i <= 10; i++){
    pilha.inserir(i);
}
console.log("Pilha Normal: ");
console.log(pilha);

pilha.visualizarPilhaHtml();

//7

class Pilha7{
    constructor(){
        this.itens = [];
    }
    inserir(elemento){
        this.itens.push(elemento);
    }
    visualizarPilhaHtml(){
        this.itens.forEach(printPilha);    
    }
}
function printPilha(item){
    let node = document.createElement("div");
    let text = document.createTextNode(item);
    node.appendChild(text);
    let list = document.getElementById("exercicio7");
   list.insertBefore(node, list.childNodes[0]);

}

var pilha = new Pilha7();

for(let i = 1; i <= 10; i++){
    pilha.inserir(i);
}
console.log("Pilha Normal: ");
//console.log(pilha);

pilha.visualizarPilhaHtml();

//O exercício 8 está no outro arquivo.