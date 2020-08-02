class Set {
  constructor(){
    this.items = {}
  }
  
  has(element){
    return element in this.items;
  }
  
  add(element){
    var valores = this.values();
    if(!this.has(element)){// O elemento não existir fasa isso
      
      if(this.size() == 0 ){// se o elemento for menor que zero adicione
        this.items[element]= element;
        return true;
      }else{
        this.items[element]= element;
        return true;     
     }     
    }else{//se o elemento já existir retorine isso
      const values = this.values();
      console.log("Elemento "+element+ " já existe");
      document.getElementById("feedback").innerHTML= "Elemento <b>"+element+ "</b> já existe";
      return false;
    }
  }
  
  remove(element){
    if(this.has(element)){
      delete this.items[element];
      return true;
    }else{
      console.log("Elemento " + element + " não existe");
      return false;
    }
  }

  clear(){
    this.items = {};
  }

  size(){
    return Object.keys(this.items).length;
  }

  values(){
    return Object.values(this.items);
  }


  print(onde){

    if(this.size() === 0){
        document.getElementById(nameSet).innerHTML = "esta vazio";
        //document.getElementById("byName").disabled = true;
        
    }else{
        
        document.getElementById("resposta").innerHTML = "";
                
        document.getElementById("byName").disabled = false;
         //printa todos os elementos do conjunto
         for(let i = 0; i< this.size(); i++){            
            printConjunto(this.values()[i],onde);            
         }
        
    }
   
   
}
 
}
//Fim classe conjunto

//Função para limpar elementos de um conjunto
function clearr(){
  let nameSet = document.getElementById("nameSet").value;

  if(!conjuntosName.includes(nameSet)){
    document.getElementById("feedback").innerHTML= "O Cojunto "+nameSet+"não existe!"
  }else{
    let indexx = conjuntosName.indexOf(nameSet); 
    conjuntos[indexx].clear(nameSet);
    showSet();
  }  
 
 }
//Fim função para limpar elementos de um conjunto


////Função printa elementos dos Conjunotos
function printConjunto(item, onde){

  let node = document.createElement("div");//1
  let vir = document.createElement("p");//1
 
  node.className = "popup";
  node.setAttribute("value", item)
  node.setAttribute("name", item);
 
  let text = document.createTextNode(item );//2

  node.appendChild(text);//3


  let list = document.getElementById(onde);//4
  list.appendChild(node, list.childNodes[0] );//4

  
  document.getElementById("entrada").focus();

}//Fim função printa elementos dos Conjunotos

// Execute a function when the user releases a key on the keyboard
var input = document.getElementById("entrada");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addButton").click();
    }
});
//Fim Function keyboard


//Função para adicionar o elemento a um conjunto
function addButton(){

  let valor = document.getElementById("entrada").value; //1
  let nomeConj = document.getElementById("nameSet").value; //1  
  
  let indexx = conjuntosName.indexOf(nomeConj); ;
  
  //verificando se o valor e vazia
  if(valor.length == 0 ){//se for exibirar essa mensagem
      document.getElementById("feedback").innerHTML = "valores <b>vazios</b> não são permitidos";
  }else{//se não vai fazer esse procedimento
      let val = Number(valor);
  
      if(isNaN(val)){
        conjuntos[indexx].add(valor);//String          
      }else{
          conjuntos[indexx].add(val);//numero      
      }
      //pilha.push(valor);//2
      showSet();
      document.getElementById("entrada").value = "";//4

  }
  
}//Fim função para adicionar o elemento


//função para deletar um elemento especifico de um conjunto
function byName(){
  let nome = document.getElementById("entrada").value; //1
  let nameSet = document.getElementById("nameSet").value; //1
  if(nome.length == 0){
      document.getElementById("feedback").innerHTML= "Escreva o nome do elemento"
  }else{
    if(!conjuntosName.includes(nameSet)){
      document.getElementById("feedback").innerHTML= "O Cojunto "+nameSet+"não existe!"
    }else{
      let indexx = conjuntosName.indexOf(nameSet); 
      console.log(indexx);
      conjuntos[indexx].remove(nome);
      showSet();
    }  
  }
}
//Fim função para deletar um elemento especifico de um conjunto


//função para deletar um conjunto 
//está eu não conseguir fazer
function deleteSet(){
 
  let nameSet = document.getElementById("nameSet").value; //1
  if(nameSet.length == 0){
      document.getElementById("feedback").innerHTML= "Escreva o nome do elemento"
  }else{
    
    if(!conjuntosName.includes(nameSet)){//verifica se o conjunto existe
      document.getElementById("feedback").innerHTML= "O Cojunto "+nameSet+"não existe!"
    }else{
      
      let indexx = conjuntosName.indexOf(nameSet); 

      conjuntos.remove(nameSet);
      
      conjuntosName.remove(nameSet);
     
      showSet();
    }  
  }
}
//Fim função para deletar conjuntos

let conjuntos = []; //vetor do conjuntos
let conjuntosName = [];//vetor do nome dos conjuntos


//função para criar os conjuntos
function creatSet(){ 
  let nameSet = document.getElementById("nameSet").value; //1
  
  if(nameSet.length == 0 ){//se for exibirar essa mensagem
    document.getElementById("feedback").innerHTML = "Adicione um nome ao seu Conjunto";
  }else if(conjuntosName.includes(nameSet)){//verifica se o conjunto já existe
    document.getElementById("feedback").innerHTML = "Este conjunto já existe!<br> Insira outro nome.";
  }else{//faz o conjunto junto com seu <p></p>
    conjuntosName.push(nameSet);

    let conjutoo = nameSet;//nome do conjunto
    let onde = nameSet;// criação do paragrafo
    let nomeP = nameSet;//id Do paragrafo
    conjutoo = new Set(); // criando o Conjunto

    // criando onde o conjunto vai ser emprimido
    onde = document.createElement("p");
    onde.setAttribute("id", nomeP);
    let listt = document.getElementById("resposta2");//4
    listt.appendChild(onde, listt.childNodes[0] );//4
    //Fim onde vai ser imprimido

    conjuntos.push(conjutoo);//adicionando o conjunto no vetor de conjuntos
    showSet();//imprimindo todos os vetores   
    
  }
}

//retornar a quantidade elementos de um conjunto
function sizee(){
  let nameSet = document.getElementById("nameSet").value; //1
  
  let indexx = conjuntosName.indexOf(nameSet);  
  document.getElementById("feedback").innerHTML= "O Conjunto <b>'"+nameSet+"' </b> Contem <b>"+conjuntos[indexx].size()+ "</b> elementos";
  
}
//Fim retornar a quantidade elementos de um conjunto


  //onde printa todos conjuntos
  function showSet(){       
    for(let i = 0; conjuntos.length ; i++ ){  
        if(conjuntos[i].size() == 0){
          document.getElementById(conjuntosName[i]).innerHTML ="Nome: " + conjuntosName[i]+": Está vazio ";//reseta para não repetir

        }else{    
        document.getElementById(conjuntosName[i]).innerHTML ="Nome: " + conjuntosName[i]+" : ";//reseta para não repetir
        conjuntos[i].print(conjuntosName[i]);         
      }
      //document.getElementById("feedback").innerHTML= "O Conjunto " + nameSet + " Contem "+conjuntos[i].size()+ "elementos";
      document.getElementById("entrada").value = "";//4
    }
  }
  //Fim função para printar conjunotos