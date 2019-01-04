/*==============Variable Declaration============*/
let runningTotal = 0;
let buffer = '0';
let previousOperator = null;
//Get class from html document
const screen = document.querySelector('.calc-screen');
let buttonClicked = document.querySelector('.calc-buttons')

//Function to handle clicked events
  buttonClicked.addEventListener('click', function(event){
    let clickedValue = event.target.innerText
//Check if clicked value is a number or symbol 
    if(isNaN(parseInt(clickedValue))){
      handleSymbol(clickedValue)
    }
    else{
      handleNumber(clickedValue)
    }
    rerender();
  })
/*===================Functions ======================*/
//Update screen with the value of buffer
  function rerender(){
    screen.innerHTML = buffer;
  }
  //Function reset everthing to default when the clear button is pressed
  // function clearButton(){
  //   buffer = '0';
  //   runningTotal = 0;
  //   previousOperator = null
  //   rerender()
  // }

  //addition function

  function addition(a,b){
    let total = 0
     a = runningTotal
     b = parseInt(buffer)
     total = a+b;
     console.log(total) 
     runningTotal =total;
     return runningTotal;
  }
  // Function to run when a symbol is clicked 

  function handleNumber(value){
    console.log(`Handle number: ${value}`)
    if(buffer === "0"){
      buffer = value
    }
    else{
      buffer += value
    }

  }
  // Function to run when a symbol is clicked 
  function handleSymbol(value){
    // if(previousOperator === null){
    //   previousOperator = value;
    // }
    switch(value){
      case 'C':
        buffer = '0';
        runningTotal =0;
        break
      case '=':
        if(previousOperator === null){
          //Need two numbers to math
          return;
        }
        flushOperation(parseInt(buffer));
          previousOperator = null;
          buffer = ""+ runningTotal;
          runningTotal = 0;
          break;
      case '←':
        if(buffer.length === 1){
          buffer = "0";
        }
        else{
          buffer = buffer.substring(0, buffer.length-1);
        }
        break;
      case "+":
      case "-":
      case "✕":
      case "÷":
        handleMath(value);
        break;
    }
  }
  
  function handleMath(value){
    if(buffer === '0'){
      return;
    }

    const intBuffer = parseInt(buffer);
    if(runningTotal === 0){
      runningTotal = intBuffer;
    }
    else{
      flushOperation(intBuffer);
    }
    previousOperator = value;
    
    buffer = '0';
  }

  function flushOperation(intBuffer){
    if(previousOperator === "+"){
      runningTotal += intBuffer;

    } else if(previousOperator === "-"){
      runningTotal -= intBuffer;
    } else if(previousOperator === "✕"){
      runningTotal *= intBuffer;
    
  }else {
    runningTotal /= intBuffer;
  }
}