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
      }else if(typeof valores[0] == typeof element){
        this.items[element]= element;
        return true;
        
      }else{
        const values = this.values();
        console.log("O elemento '"+element+"' é do tipo "+ typeof element + " não são permitodos");
      }     
    }else{//se o elemento já existir retorine isso
      const values = this.values();
      console.log("Elemento "+element+ " já existe");
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

  /*Operações em conjunto
  -- União
  -- Diferença
  -- Sub-conjunto 
  */
  uniao(outroConjunto){
    const novoConjunto = new Set();
    this.values().forEach(value => novoConjunto.add(value));
    outroConjunto.values().forEach(value => novoConjunto.add(value));
    return novoConjunto;
  }

  intersecao(outroConjunto){
    const novoConjunto = new Set();
    
    const values = this.values();
    for(let i = 0; i< values.length; i++){
      if(outroConjunto.has(values[i])){
        novoConjunto.add(values[i])
      }
    }
    return novoConjunto;
  }



  diferenca(outroConjunto){
    const novoConjunto = new Set();
    
    this.values().forEach(value =>{
      if(!outroConjunto.has(value)){
        novoConjunto.add(value);
      }
    });
    return novoConjunto;
  }

  ehSubConjunto(outroConjunto){
    if(this.size() > outroConjunto.size()){
      return false;
    }
    let subConjunto = true;
    this.values().forEach(value =>{
      if(!outroConjunto.has(value)){
        subConjunto = false;
        return false;
      }
      return true;
    });
    return subConjunto;
  }

  //07) Crie um método para verificar se um conjunto contém um subconjunto. 
  contem(outroConjunto){
    if(this.size() < outroConjunto.size()){
      console.log("E menor:");
      //console.log(false);
      return false;
    }
    let subConjunto = true;
    let count = 0;
    let i =0;
    this.values().forEach(value =>{      
     
      if(outroConjunto.has(value)){              
        count++;      
      }      
    });


    if(count != outroConjunto.size() ){// se a quantidade for diferente significa que não comtem
      subConjunto = false;
    }
    return subConjunto;
  }
  //fim exercico 7
 
}
//Fim classe conjunto

function tipoConj(conjunto){
   let valores = conjunto.values();
  
    let n = valores.length;
        var tipo = '';
        var contN = 0;
        var contS = 0;

        

        // console.log(tamanho());
        // console.log(this.items.length); = undefined
        for(let i = 0; i < n; i++){

           
            if(typeof valores[0]  === "number"){
                tipo = "numéricos";
                contN++;
            } else if(typeof valores[0] === "string"){
                tipo = "String";
                contS++; 
            }
            //se o contador de estring e de numeros forem maior que um 
            if(contN >= 1 && contS >= 1) {  
                tipo = "Vários Tipo";
            }
        }
       // console.log(typeof valores[0]);

        return tipo;
        
}
//03) Crie um método que faça união entre três conjuntos.
function uniaoTres(conjunto_1,conjunto_2,conjunto_3){
  let resultado = conjunto_1.uniao(conjunto_2.uniao(conjunto_3));
  //console.log("União entre os três conjuntos");
  console.log(resultado);
  return resultado;
}
//fim atividade 3

//04) Crie um método que faça interseção entre três conjuntos.
function intersecaoTres(conjunto_1,conjunto_2,conjunto_3){  
  let conj1 = conjunto_1.intersecao(conjunto_2);
  let conj2 = conjunto_1.intersecao(conjunto_3);
  let conj3 = conjunto_2.intersecao(conjunto_3);
  //let conj4 = conjunto_2.intersecao(conjunto_1);
  uniaoTres(conj1,conj2,conj3);

 // console.log( result = conj4.uniao(resultado));

}
//Fim atividade 4

function iaguis(conjunto_1, conjunto_2){
  valores = conjunto_1.values();
  let count = 0;
  for(let i = 0; i< valores.length; i++){
    if(conjunto_2.has(valores[i])){
      count++;
    }
  }
  console.log(count);

  if(count == valores.length){// se o count for o mesmo signica que contêm
   console.log(true);
   return true
  }else{
    console.log(false);
    return false;
  }
  
}
let conjuntoA = new Set();
conjuntoA.add(0);
conjuntoA.add(1);
conjuntoA.add(2);
conjuntoA.add(3);
conjuntoA.add(4);
conjuntoA.add(5);
console.log("Conjunto A: ");
console.log(conjuntoA);

let conjuntoB = new Set();

conjuntoB.add(2);
conjuntoB.add(4);



console.log("Conjunto B: ");
console.log(conjuntoB);

let conjuntoC = new Set();
conjuntoC.add(3);
conjuntoC.add(5);
conjuntoC.add(7);
console.log("Conjunto C: ");
console.log(conjuntoC);


console.log("conjuntoA comtem conjuntoB")
console.log(conjuntoA.contem(conjuntoB));

console.log("conjuntoA comtem conjuntoC")
console.log(conjuntoA.contem(conjuntoC));

console.log("conjuntoB comtem conjuntoA")
console.log(conjuntoB.contem(conjuntoA));