class Node{
    constructor(element){
        this.value = element;
        this.next = undefined;
    }
}

class Lista{
    constructor(){
        this.head = undefined;
        this.count = 0;
    }
    //Outros métodos da classe Lista
    //push() adicionar um elemento no fim da lista
    push(element){
        const node = new Node(element); 
        let corrent;

        if(this.head == null){
            this.head = node;
            this.count++;
            console.log('O elemento: "' + this.head.value + '" Foi adicionado com sucesso!');
           // document.getElementById("feedback").innerHTML= 'O elemento: "' + this.head.value + '" Foi adicionado com sucesso!' ;
            
       
        }else{   
            corrent = this.head;
            while(corrent.next != null){
               
                corrent = corrent.next;                    
                
            }            
            corrent.next = node;   
            console.log('O elemento: "' + element + '" Foi adicionado com sucesso!');   
            document.getElementById("feedback").innerHTML= 'O elemento: "' + element + '" Foi adicionado com sucesso!' ;

            this.count++          
                        
        }


        
    }
    //insertAt(element, position) adiciona um elemento em qualquer posição da lista
    getElementAt(position){
        if(position >= 0 && position <= this.count){
            let node = this.head;
            for(let i = 0; i < position && node != null; i++){
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    //getElementAt(position) retorna um elemento de um posição especifica da lista
    insertAt(element, position){
        if(typeof position === "string"){
            document.getElementById("feedback").innerHTML = "posição aceita somente números"+ typeof this.position;
        }else if(position >= 0 && position <= this.count ){
            const node = new Node(element);
            if(position === 0 ){
                const current = this.head;
                node.next = current;
                this.head = node;
            }else{
                const previous = this.getElementAt(position - 1);
                //console.log("A previous: " + previous.value);
                const current = previous.next;
                //console.log("O current: "+ current.value);
                node.next = current;
                previous.next = node;
               // console.log("A previous nest: " + previous.next.value);
            }
            console.log('O elemento: "' + element + '" Foi adicionado com sucesso!')
            this.count++;
            return true;
        }
        if(this.noRepeat(element) != false){
            console.log("elemento já existe não pode ser Adicionado");
        }
        return false;
    }
    //noRepeat(element) seu tentar adicionar um elemento não vai deixar
    noRepeat(){
       // const node = new Node(element); 
        let result = false;
        for(let i = 0; i< this.count; i++){
            for(let j = 0; j< this.count; j++){
                let valor1 = this.getElementAt(i).value;
                let valor2 = this.getElementAt(j).value;
                if(valor1 == valor2 ){
                   return result = true ;
                }           
                   //  console.log( this.getElementAt(i).value);            
            }
                    
        }
        if( result != true){
            return result = false
        }
    }
    //indexOf(element)retorna a posição de um elemento da lista
    indexOf(element){
        let current = this.head;
        for(let i = 0; i< this.count && current != null; i++){
            if(current.value == element){
                return i;
            }else{
                current = current.next;
            }
        }
        return -1;
    }
    //removeAt(position)remove um elemento de uma posição específica da lista
    removeAt(position){
        if(position >= 0 && position <= this.count){
          let element = this.getElementAt(position ).value;
            const current = this.head; 
            if(position === 0){
                this.head = current.next;
            }else{
                
                const previous = this.getElementAt(position -1);
                const current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            document.getElementById("feedback").innerHTML= "Elemento: '" + element + "' na posição:'"  +position+ "' removido com sucesso";
            return console.log("Elemento: '" + element + "'na posição:'"  +position+ "' removido com sucesso");
        }
    }
    //isEmpty checar se alista está vazia
    isEmpty(){
        if(this.count === 0){
            return true;
        }else{
            return false;
        }
    }
    //size()retorna o tamanho da lista
    size(){
        return this.count;
    }
    //peek retorna o último valor
    peek(){
       
        let feedback = "";
        if( this.count  != 0){
            let lastValue = this.getElementAt(this.count -1 ).value ; // armazenando o último valor em uma variavel
           return feedback = 'O último elemento é: "' + lastValue + '"';
        }else{
            return feedback = "Fila vazia, não foi possivel reconhecer o último elemento";
        }
        
       // document.getElementById("entrada").focus();//para manter o focus na entrada
       // return document.getElementById("feedback").innerHTML = feedback;//imprenção do último número
       return console.log(feedback);
    }

    //peek retorna o Primeiro valor
    first(){
       
        let feedback = "";
        if( this.count  != 0){
           return feedback = 'O primeiro elemento é:' + this.head.value  ;
        }else{
            return feedback = "Fila vazia, não foi possivel reconhecer o primeiroo elemento";
        }
        
       
       return console.log(feedback);
    }
  //03) Escreva um método para sua classe Lista para remover um elemento da lista passando como parâmetro o elemento a ser removido. Se o elemento não existir, retorna false. Se o elemento existir, e for removido, retorna o próprio elemento removido.
    //deleByName(name) deleta o elemento por nome
    deleByName(name){
        if(this.noRepeat(name) == true){//verifica se existe esté nome na lista
            let posicao = this.indexOf(name);//Pega a posição do nome
            this.removeAt(posicao );//deleta o elemento           
        }else{
            // imprime o resultado que não existe o nome do elemento que deseja exlcluir
            console.log('Elemento: "'+ name + '" não existe!');
        }
    }
//fim exercicio3
    //clear() limpa a lista/reiniciaa
    clear(){        
            this.head = undefined;
            this.count = 0;
    }
    //fim exercicio 4

    tiposElementos(){
        let n = this.count;
        var tipo = '';
        var contN = 0;
        var contS = 0;

        

        // console.log(tamanho());
        // console.log(this.items.length); = undefined
        for(let i = 0; i < n; i++){

           
            if(typeof this.getElementAt(i ).value  === "number"){
                tipo = "numéricos";
                contN++;
            } else if(typeof this.getElementAt(i ).value === "string"){
                tipo = "String";
                contS++; 
            }
            //se o contador de estring e de numeros forem maior que um 
            if(contN >= 1 && contS >= 1) {  
                tipo = "Vários Tipo";
            }
        }
       // console.log( tipo);
        return tipo;
    } 
    inverte(){
       // let valueHead = this.head;
       // let valueLast = this.getElementAt(this.count -1);
        
      //  this.head = valueLast;
       // this.head.next = this.getElementAt(1);
       
        //console.log("A previous nest: " + previous.next.value);
        const current = this.head;
        this.head.next = current;
         this.head = node;
        
    }

    print(){
        //para adicionar id a ao button da fila
        if(this.count === 0){
            document.getElementById("resposta").innerHTML = "Fila vazia";
            document.getElementById("byName").disabled = true;
            document.getElementById("removeAtt").disabled = true;
            document.getElementById("addAt").disabled = true;
        }else{
            
            document.getElementById("resposta").innerHTML = "";
             //imprime a pilha
             
            document.getElementById("byName").disabled = false;
            document.getElementById("removeAtt").disabled = false;
            document.getElementById("addAt").disabled = false;
             let current = this.head;

             for(let i = 0; i< this.count && current != null; i++){
                let atual = current;
                printFila(atual.value, i);
                current = current.next;
             }
            
        }
       
       
    }

}

function printFila(item, index){
    //1) Criar o elemento
    //2) Criar o texto do elemento
    //3) Adicionar o texto ao elemento
    //4) Adicionar o elemento já com texto ao elemento pai
   
    
    let node = document.createElement("div");//1
    let vir = document.createElement("p");//1
   
    node.className = "popup";
    
    vir.className = "vir";
    node.setAttribute("value", item)
    node.setAttribute("index", index)
    //
    node.setAttribute("name", item);
    node.setAttribute("id", index);
    
    
    //node.setAttribute("index", index);
    node.setAttribute("onclick", "clickButton(this.id)");
    
    let text = document.createTextNode(item );//2
    let textVir = document.createTextNode(" , ");//2
    
    node.appendChild(text);//3
    vir.appendChild(textVir);
   
    //node.appendChild(popup);
  
    let list = document.getElementById("resposta");//4
    list.appendChild(node, list.childNodes[0] );//4
    //list.appendChild(popup, list.childNodes[1] );//4

    let cavalo = document.getElementById("resposta");//4
    cavalo.appendChild(vir, cavalo.childNodes[0] );//4
    
    document.getElementById("entrada").focus();//toda vez que printar a fila o focus volta para entrada
    

}//fim função printaLista

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
    console.log(typeof(valor));
    //verificando se o valor e vazia
    if(valor.length == 0 ){//se for exibirar essa mensagem
        document.getElementById("feedback").innerHTML = "valores <b>vazios</b> não são permitidos";
    }else{//se não vai fazer esse procedimento
        let val = Number(valor);
    
        if(isNaN(val)){
            lista.push(valor);//String
            
        }else{
            lista.push(val);//numero
        
        }
        //pilha.push(valor);//2
        lista.print();//3
        document.getElementById("entrada").value = "";//4

    }
    
}//Fim função para adicionar o elemento

function estaVazia(){ 
   
    if (lista.isEmpty() == true ){
        return document.getElementById("feedback").innerHTML = "Lisata está <b>vazia</b>";
    }else{
        return document.getElementById("feedback").innerHTML = "Lisata <b>não</b> está Vazia";
    }
    
}

function tamanhoFila(){ 
    
    let feedback = "";
    feedback =  lista.peek();//1   
        
        document.getElementById("entrada").focus();//para manter o focus na entrada
        return document.getElementById("feedback").innerHTML = feedback;//imprenção do último número
}

function ultimoElemento(){ 
    
    //fila.print();//2
    let feedback = "";
        if( lista.size()  != 0){
          
            feedback = "O Tamanho da Fila é: <b>" +  lista.size()+ "<b>";
        }else{
            feedback = "pilha vazia, não foi possivel reconhecer o Primeiro elemento Fila <b>Vazia</b>";
        }
        
        document.getElementById("entrada").focus();//para manter o focus na entrada
        return document.getElementById("feedback").innerHTML = feedback;//imprenção do último número
}

function addAt(){ 
    let valor = document.getElementById("entrada").value; //1    
    let posicao = document.getElementById("posicao").value; //1
    console.log(typeof posicao);
    if( posicao.length != 0 ){
        if(valor.length == 0 ){//se for exibirar essa mensagem
            document.getElementById("feedback").innerHTML = "valores <b>vazios</b> não são permitidos";
        }else{//se não vai fazer esse procedimento
            let val = Number(posicao);
        
            if(isNaN(val)){
                lista.insertAt(valor,posicao);//String
                
            }else{
                lista.insertAt( valor,val);//String
                
            }
            //pilha.push(valor);//2
            lista.print();//3
            document.getElementById("entrada").value = "";//4
    
        }
        
    }else{
        console.log(posicao.length);
        document.getElementById("feedback").innerHTML = "adicione um valor na posição";
    } 
}

function removeAtt(){ 
     
    let posicao = document.getElementById("posicao").value; //1
    console.log(typeof posicao);
    if( posicao.length != 0 ){
        let val = Number(posicao);
        
            if(isNaN(val)){
                document.getElementById("feedback").innerHTML = "somente numeros são aceitos";
                
            }else{
                lista.removeAt(val);//String
                
            }
            //pilha.push(valor);//2
            lista.print();//3
            document.getElementById("entrada").value = "";
            //document.getElementById("feedback").value = "";
       
        
    }else{
        console.log(posicao.length);
        document.getElementById("feedback").innerHTML = "adicione um valor na posição";
    } 
}

function typeee(){ 
    let feedback = lista.tiposElementos();
    document.getElementById("entrada").focus();//para manter o focus na entrada
   return document.getElementById("feedback").innerHTML =  feedback;//imprenção do último número
}

function clearr(){
 lista.clear();
 lista.print();
}

function byName(){
    let nome = document.getElementById("entrada").value; //1
    if(nome.length == 0){
        document.getElementById("feedback").innerHTML= "Escreva o nome do elemento"
    }else{
        lista.deleByName(nome);
        lista.print();
    }  
    
}
function firstElement(){
    let feedback = "";
        if( lista.first()  != 0){
          
            feedback =   lista.first();
        }else{
            feedback = "pilha vazia, não foi possivel reconhecer o Primeiro elemento Fila <b>Vazia</b>";
        }
        
        document.getElementById("entrada").focus();//para manter o focus na entrada
        return document.getElementById("feedback").innerHTML = feedback;//imprenção do último número
}

function isRepeat(){
    if(lista.noRepeat == true){
        document.getElementById("feedback").innerHTML= "Há Elemento repetido na Lista";
    }else{
        document.getElementById("feedback").innerHTML= "<b>Não</b> Há Elemento repetido na Lista";
    }
}

function clickButton(id){
    
    let identificador  = Number(id);

    let anterior = "";
    let posterior  = "";

    if(identificador == 0 ){
        anterior = "não há anteriores"
    }else if(identificador > 0 ){
         anterior  = lista.getElementAt(identificador - 1).value;
    }

    if(identificador == lista.size() - 1){
        posterior = "não há posteriores";
    }else if(identificador < lista.size() - 1){
        posterior  =lista.getElementAt(identificador + 1).value;
    }
    
    let tipo = typeof lista.getElementAt(identificador).value;
    let valor  =lista.getElementAt(identificador ).value;
    let posicao = identificador + 1;
    let feedback= "anterior "+ anterior+ " posterior: "+ posterior + " Tipo: " + tipo + " Valor: " + valor + " Posição: "+posicao;
    
    
    
   
    
    //informacoes.appendChild(textnode);
   var popup = document.getElementById("info"+identificador);
   //var popup = document.getElementById("myPopup");
   
   //document.getElementById("info").innerHTML= popup;
  
   
   if(document.getElementById("info"+identificador)){
    popup.classList.toggle("show");
   }else{
    var informacoes = document.createElement("span");
    var textnode = document.createTextNode(feedback);
    informacoes.className = "popuptext";
    informacoes.setAttribute("id", "info"+identificador);
    informacoes.appendChild(textnode);//3
    document.getElementById(identificador).appendChild(informacoes);
    var popup = document.getElementById("info"+identificador);
    popup.classList.toggle("show");
    
   }
   
   
}
const lista = new Lista();
lista.push(15);
lista.push(23);
lista.push(354);
lista.push("dinosalro");

lista.insertAt(7, 2);





const lista2 = new Lista();

console.log("tamanho da lista: " + lista.size());

lista.push(354);


lista.push(54);

lista.peek();




//ista.inverte();
//console.log(lista);
console.log(JSON.stringify(lista, null, 2));
//lista.deleByName("dinosalro");


console.log(JSON.stringify(lista, null, 2));
lista.tiposElementos();
lista.print();