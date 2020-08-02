class Pilha{
    constructor(){
        this.items = [];
    }
    push(element){
        //exe2 verificando se não tem do tipo diferente
        if(this.items.length == 0){
            this.items.push(element);
        }else{
            if(typeof(element)  == typeof(this.items[0])  ){
                this.items.push(element);
                document.getElementById("feedback").innerHTML = "";//para sair a mensagem quando inserir tipo certo
                
            }else{
                //moudando a mesangem par ser ixibida na tela
                 var feedback = "";
                if(typeof(element) != "number" ){
                    feedback = "Essa pilha do tipo numérico. Strings não podem ser inseridas";
                }else{
                    feedback = "Essa pilha do tipo String. numéros não podem ser inseridas";
                }//fim moudelagem de mensagem
                document.getElementById("feedback").innerHTML = feedback;//imprenção da mensagem  
            }
           
        }//fim verificação
        document.getElementById("entrada").focus();//para manter o focus na entrada

    }
    pop(){
        this.items.pop();
        document.getElementById("feedback").innerHTML = "removido com sucesso";
        document.getElementById("entrada").focus();//para manter o focus na entrada
    }
    isEmpty(){
        if (this.items.length === 0 ){
            return true;
        }
        return false;

    }
    peek(){
      let feedback = "";
        if( this.items.length  != 0){
          
            feedback = "o último elemento é: " + this.items[this.items.length - 1] ;
        }else{
            feedback = "pilha vazia, não foi possivel reconhecer o último elemento";
        }
        
        document.getElementById("entrada").focus();//para manter o focus na entrada
        return document.getElementById("feedback").innerHTML = feedback;//imprenção do último número
        
    }    
    size(){
        return this.items.length;
    }
    print(){
        //escrever código para imprimir aqui
        //document.getElementById("resposta").innerHTML = pilha.items;
        //limpa a impressão da pilha

        
        if(this.items.length === 0){
            document.getElementById("resposta").innerHTML = "Pilha vazia";
            document.getElementById("removeButton").disabled = true;
        }else{
            document.getElementById("resposta").innerHTML = "";
             //imprime a pilha
             this.items.forEach(printPilha);
             document.getElementById("removeButton").disabled = false;
             
        }     
    }

    //para remover o último elemento
    mover(element ){
        if(element == this.items[this.items.length - 1] ){
            this.items.pop();

            return document.getElementById("feedback").innerHTML = "removido com sucesso";
        }else{
            return document.getElementById("feedback").innerHTML = "Não é o último elemento ";
        }
    }//fim remover o último elemento
      
}//fim classe Pilha

function printPilha(item, index){
    //1) Criar o elemento
    //2) Criar o texto do elemento
    //3) Adicionar o texto ao elemento
    //4) Adicionar o elemento já com texto ao elemento pai
   
    
    let node = document.createElement("button");//1
    node.className = "btn btn-outline-success btn-block";
    node.setAttribute("id", "botoesClicaveis");
    node.setAttribute("name", item);
    node.setAttribute("onclick", "removeUltimoElemento(this.name)");
    let text = document.createTextNode(item);//2
    node.appendChild(text);//3
    //document.getElementById("resposta").appendChild(node);//4
    let list = document.getElementById("resposta");//4
    list.insertBefore(node, list.childNodes[0]);//4

}//fim função printaPilha

//função peak
function mostraUltimo(){
    pilha.peek();
}//fim função peak

//função para eliminar o ultimo elento com clik
function eleminarUltimo(element){
    mover(element);
    pilha.printPilha();
}

//exe 5
function removeUltimoElemento(nomeBotao) {
    
   pilha.mover(nomeBotao);
   pilha.print();//3
   document.getElementById("entrada").value = "";//4

}



//função para adicionar o elemento
function addButton(){
    //1) pega o valor que está na caixa de texto
    //1.1) verificar se a caixa de texto não está vazia
    //2) add esse valor na pilha
    //3) imprime a pilha
    //4) limpar a caixa de texto
    //5) retorna o focus para a caixa de texto
    //6) faz o enter acionar a função add
    //
    
    let valor = document.getElementById("entrada").value; //1
    console.log(valor);
    //verificando se o valor e vazia
    if(valor.length == 0 ){//se for exibirar essa mensagem
        document.getElementById("feedback").innerHTML = "valores vazios não são permitidos";
    }else{//se não vai fazer esse procedimento
        let val = Number(valor);
    
        if(isNaN(val)){
            pilha.push(valor);//String
            
        }else{
            pilha.push(val);//numero
        
        }
        //pilha.push(valor);//2
        pilha.print();//3
        document.getElementById("entrada").value = "";//4

    }
    
}//Fim função para adicionar o elemento

// Execute a function when the user releases a key on the keyboard
var input = document.getElementById("entrada");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addButton").click();
    }
});
//Fim Function keyboard

//para manter o focus na entrada
document.getElementById("entrada").focus();
function removeButton(){
    //1) remover o último elemento da pilha
    //2) imprime a pilha
    //3) se a pilha já estiver vazia, exibe um aviso
    pilha.pop();//1
    pilha.print();//2
}
//Fim para manter o focus na entrada

const pilha = new Pilha();

//pilha.push(13);
//pilha.push(52);
pilha.push(74);
pilha.print();