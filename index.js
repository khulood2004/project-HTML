function onClickSubmitButton(){
    let inputValue = document.getElementById('inputText').value;
    if(inputValue>0){
        alert ("Hey el numero es mayoer a 0")
    }
    if(inputValue<0){
        alert ("Hey el numero es menor a 0")
    }
    if(inputValue==0){
        alert ("intente otra vez")
    }

}   