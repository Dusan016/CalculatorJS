let textView = document.getElementById("textView");
let secondtextView = document.getElementById("secondtextView");
function writeNumber(a){
    if(textView.value != 0){
        if(textView.value == "+" || textView.value == "/" || textView.value == "*"){
            textView.value = null;
            textView.value = textView.value + a;
        }
        else{
            textView.value = textView.value + a;
        }
    }
    else{
        textView.value = null;
        textView.value = textView.value + a;
    }
}

function deleteNumber(){
    if(textView.value != null)
        textView.value = textView.value.slice(0,-1);
}

function deleteAll(){
    textView.value = null;
    secondtextView.value = null;
}

function equal(x){
    if(x == "radic"){
        secondtextView.value = "SQRT(" + textView.value +")";
        textView.value = Math.sqrt(textView.value);
    }
    else{
        secondtextView.value = textView.value;
        textView.value = eval(textView.value);
    }
        
}