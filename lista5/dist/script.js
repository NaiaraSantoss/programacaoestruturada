//FILAS
//Primeiro a entrar, primeiro a sair.

//PILHAS
//Primeiro a entrar, Último a sair
/*
1 - Adicionar elemento a fila
2 - Remover o primeiro elemento da fila 
3  - Esta vazia?
4 - Tamanho da fila.
5 - Retorna o primeiro o elemento da fila, sem remove lo.
6 - Limpar a fila
*/

class Fila{
    constructor(){
        this.items = {};//array para armazenar os elementos da fila.
        this.cont = 0; //contador para saber qual é o índice do pròximo elemento
        this.menorCont = 0; //contador para saber qual é o primeiro elemento da fila.
    }

    add(elemento){
        this.items[this.cont] = elemento;
        this.cont++;
    }

    remover(){
        //verifica se a fila está vazia
        if(this.estaVazia()){
            return undefined;
        }
        const result = this.items[this.menorCont];
        delete this.items[this.menorCont];
        this.menorCont++;
        return result; 
    } 

    estaVazia(){
        return this.cont - this.menorCont === 0;
    }

    tamanho(){
        return this.cont - this.menorCont;
    }

    primeiro(){
        if(this.estaVazia()){
            return undefined;
        }
        return this.items[this.menorCont];
    }

    limpar(){
        this.items = {};//array para armazenar os elementos da fila.
        this.cont = 0; //contador para saber qual é o índice do pròximo elemento
        this.menorCont = 0; //contador para saber qual é o primeiro elemento da fila.
    }

   
    tiposElementos(){
        let n = this.tamanho();
        var tipo = '';
        var contN = 0;
        var contS = 0;

        

        // console.log(tamanho());
        // console.log(this.items.length); = undefined

        //Descobrindo o tipo da variavel
        for(let i = 0; i < this.items.leght; i++){

            this.items.length
            if(typeof this.items[i] === "number"){
                tipo = "numéricos";
                contN++;
            } else if(typeof this.items[i] === "string"){ //push();
                tipo = "String";
                contS++; 
            }
            if(contN >= 1 && contS >= 1) {  
                tipo = "Vários Tipo";
            }
        }
        //Fim Descobrindo o tipo da váriavel

        // Se for número soma-los
        if (tipo == "numéricos"){
            return this.items.reduce((a, b) => a + b) ;
        }
        //Fim

        if (tipo == "String"){
            
        }
    } 

}

   
    


//Usando a fila
const filaNum = new Fila();
const filaString = new Fila();
const filaVarios = new Fila();


filaNum.add(2);
filaNum.add(4);
filaNum.add(5);
console.log(filaNum);
console.log("tipo de fila: " + filaNum.tiposElementos());

/*

filaString.add('andre');
filaString.add('carol');
filaString.add('willian');
console.log(filaString);
console.log("tipo de fila: " + filaString.tiposElementos());

filaVarios.add('andre');
filaVarios.add(3);
filaVarios.add('carol');
filaVarios.add('Willian');
filaVarios.add(7);
console.log(filaVarios);
console.log("tipo de fila: " + filaVarios.tiposElementos());

*/

var a = [2,3,4,85,3];

var b = a.reduce((a, b) => a + b);
console.log(b);