class Fila{
    constructor(){
        this.items = []; // array para armazenar os elementos da fila.
        this.cont = 0; // contador para saber qual é o indice do próximo elemento
        this.menorCont = 0 //contador para saber qual é o primeiro elemento da fila
    }

    push(element){
       
        
        document.getElementById("feedback").innerHTML = "" ;
        this.items.push(element);    
        this.cont++;       
        
        document.getElementById("entrada").focus();//para manter o focus na entrada

    }

    pop(){
        // verificar se a fila está vazia
        if(this.items.length -1 == 0){
            this.items = []; // array para armazenar os elementos da fila.
            this.cont = 0; // contador para saber qual é o indice do próximo elemento
            this.menorCont = 0 //contador para saber qual é o primeiro elemento da fila
            

            return document.getElementById("feedback").innerHTML = "Fila está <b>vazia</b>  " ;
            
        }else{
            
            this.items.shift();
            document.getElementById("feedback").innerHTML = "";//para não aparecer nada no feedback
            fila.print();
        }
    }

    isEmpty(){
        if (this.items.length === 0 ){
            return document.getElementById("feedback").innerHTML = "Fila está <b>vazia</b>";
        }else{
            return document.getElementById("feedback").innerHTML = "Fila <b>não</b> está Vazia";
        }
    }

    size(){
        let feedback = "";
        if( this.items.length  != 0){
          
            feedback = "O Tamanho da Fila é: <b>" +  this.items.length+ "<b>";
        }else{
            feedback = "pilha vazia, não foi possivel reconhecer o Primeiro elemento Fila <b>Vazia</b>";
        }
        
        document.getElementById("entrada").focus();//para manter o focus na entrada
        return document.getElementById("feedback").innerHTML = feedback;//imprenção do último número
    }

    peek(){
       
        let feedback = "";
        if( this.items.length  != 0){
          
            feedback = "o último elemento é: " + this.items[this.items.length - 1] ;
        }else{
            feedback = "Fila vazia, não foi possivel reconhecer o último elemento";
        }
        
        document.getElementById("entrada").focus();//para manter o focus na entrada
        return document.getElementById("feedback").innerHTML = feedback;//imprenção do último número
    }


    clear(){
        this.items = {}; // array para armazenar os elementos da fila.
        this.cont = 0; // contador para saber qual é o indice do próximo elemento
        this.menorCont = 0 //contador para saber qual é o primeiro elemento da fila
    }
    

    print(){
        //para adicionar id a ao button da fila
        if(this.items.length === 0){
            document.getElementById("resposta").innerHTML = "Fila vazia";
            document.getElementById("removeButton").disabled = true;
        }else{
            
            document.getElementById("resposta").innerHTML = "";
             //imprime a pilha
             
             document.getElementById("removeButton").disabled = false;
             this.items.forEach(printFila);
        }
       
       
    }
}

function printFila(item, index){
    //1) Criar o elemento
    //2) Criar o texto do elemento
    //3) Adicionar o texto ao elemento
    //4) Adicionar o elemento já com texto ao elemento pai
   
    
    let node = document.createElement("button");//1
    node.className = "btn";
    node.setAttribute("value", item)
    node.setAttribute("index", index)
    //
    node.setAttribute("name", item);
    node.setAttribute("id", index);
   
    
    //node.setAttribute("index", index);
    node.setAttribute("onclick", "removePri(this.id)");
    
    let text = document.createTextNode(item);//2
    node.appendChild(text);//3
    //document.getElementById("resposta").appendChild(node);//4
    let list = document.getElementById("resposta");//4
    list.appendChild(node, list.childNodes[0]);//4
    document.getElementById("entrada").focus();//toda vez que printar a fila o focus volta para entrada
    

}//fim função printaPilha

// Execute a function when the user releases a key on the keyboard
var input = document.getElementById("entrada");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addButton").click();
    }
});
//Fim Function keyboard

function addButton(){

    let valor = document.getElementById("entrada").value; //1
    console.log(valor);
    //verificando se o valor e vazia
    if(valor.length == 0 ){//se for exibirar essa mensagem
        document.getElementById("feedback").innerHTML = "valores <b>vazios</b> não são permitidos";
    }else{//se não vai fazer esse procedimento
        let val = Number(valor);
    
        if(isNaN(val)){
            fila.push(valor);//String
            
        }else{
            fila.push(val);//numero
        
        }
        //pilha.push(valor);//2
        fila.print();//3
        document.getElementById("entrada").value = "";//4

    }
    
}//Fim função para adicionar o elemento


//para manter o focus na entrada
function removeButton(){ 
    fila.pop();//1
    fila.print();//2
}
function estaVazia(){ 
    fila.isEmpty();//1
    fila.print();//2
}

function ultimoElemento(){ 
    fila.size();//1
    //fila.print();//2
}

function tamanhoFila(){ 
    fila.peek();//1
    //fila.print();//2
}

function removePri(index){
    console.log("id: "+index);
    var x =  document.getElementsByClassName("btn")[index].value;
    console.log("Valor: "+x);
   document.getElementById("feedback").innerHTML = "o valor é "+x;
   if(index != 0){
    document.getElementById("feedback").innerHTML = "não é o primiero elemento, não pode ser eliminado  posição: <b>"+index+ "</b>";
   }else{
       fila.pop();
       document.getElementById("feedback").innerHTML = "Item:<b> ''"+x+"'' na posição: "+index+"</b> Eliminado com sucesso! ";

   }
}

const fila = new Fila();
fila.push(13);
//fila.push(52);
fila.push(74);
fila.print();
console.log(fila);