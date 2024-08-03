// JS

const display = document.getElementById("display")

function calDisplay(input){
    display.value += input 
}

function clearDisplay(){
    display.value = "";
}

function calValue(){
    try{    
    display.value = eval(display.value)
    }
    catch(e){
        display.value = "Second Class Failed"
    }
}

function minusStr(){
    str = display.value;
    newStr = "";
    strChar = [...str]
    strRemoved = strChar.pop()
    for (let i = 0; i < strChar.length; i++) {
        newStr += strChar[i];
    }
    display.value = newStr

    
    // console.log(newStr)
    // newStr = strChar.toString()
    // display.value = newStr
    // console.log(strChar)
    // display.value -= input
}