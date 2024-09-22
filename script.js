function clearDisplay(){
    document.getElementById("screen").value=""
}

function buttonclick(val){

    document.getElementById("screen").value+=val
}

function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)      //eval is a built in function that performs actions based on the operators given
    document.getElementById("screen").value=result
}