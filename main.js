function sum() {
    //alert("Hi, future developers");
    let inp1= document.getElementById('firstInp');
    let inp2= document.getElementById('secondInp');
    let resultDiv= document.getElementById('resultDiv');
    //inp1.style.backgroundColor = 'red';
    //console.log(inp1.value);
    resultDiv.textContent = Number(inp1.value) + Number(inp2.value);
}

function minus() {
    
    let inp1= document.getElementById('firstInp');
    let inp2= document.getElementById('secondInp');
    let resultDiv= document.getElementById('resultDiv');
    
    resultDiv.textContent = Number(inp1.value) - Number(inp2.value);
}