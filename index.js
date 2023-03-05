// getting elements from html;

const decrementbtn = document.getElementById("decrementbtn");
const Incrementbtn = document.getElementById("Incrementbtn");
const resetbtn     = document.getElementById("resetbtn");
const displayvalue = document.getElementById("displayvalue");

// for decrementbtn

decrementbtn.addEventListener("click",()=>{
    const value =Number(displayvalue.innerText);
    if(value > -10){
        displayvalue.innerText = value-1;
    }else{
        alert("negative value not allowed")
    }
});

// for incrementbtn

Incrementbtn.addEventListener("click",()=>{
    const value = Number(displayvalue.innerText);
    if(value >= {}){
        alert("10+values are not allowed ")
    }else{
        displayvalue.innerText = value+1;

    }
})


// resetbtn

resetbtn.addEventListener("click",()=>{
    displayvalue.innerText = 0;
})