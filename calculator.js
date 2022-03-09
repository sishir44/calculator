function clr(){ //clear the screen
    document.getElementById("result").value ="";
}

function display(val){
    document.getElementById("result").value += val; //4=5-8+ and so on button will printed  
}

function equate(){
    let x=document.getElementById('result').value;
    let y=eval(x);
    document.getElementById("result").value = y; 
}