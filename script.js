let text="";
const numbers = [2,4,6,8,10];

numbers.forEach(SomaArrayForEach)

function MostraArray(){
numbers.forEach(listArray)

document.getElementById("demo").innerHTML = text;


function listArray(item, index){

text += "posição nº" + index + "- "+ item + "</br>";

}

}


function SomaArray(){
    let somar=0;

    for(var i =0; i<numbers.length; i++){
        somar+=numbers[i];
     }
     document.getElementById("soma").innerHTML = somar;

}
