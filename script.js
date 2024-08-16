
const toggleCheckbox= document.getElementById('toggleCheckbox');
const statusText = document.getElementById('status');


function calculatePersentage(){
    let display =document.getElementById('display');
    
    if(display.value){
        display.value= parseFloat(display.value)/100;
    }
}
toggleCheckbox.addEventListener('change',(e)=>{
    if(e.target.checked){
        statusText.innerHTML='On';
        document.body.classList.add("lightTheme")
    }else{
        statusText.innerHTML='Off'
        document.body.classList.remove("lightTheme")
    }
}
)