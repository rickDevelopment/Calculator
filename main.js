/*==============Variable Declaration============*/
let runningTotal = 0;
let buffer = '0';
let previousOperator = null;
//Get class from html document
let screen = document.querySelector('.calc-screen');
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
  function clearButton(){
    buffer = '0';
    runningTotal = 0;
    previousOperator = null
    rerender()
  }

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
    if(previousOperator === null){
      previousOperator = value;
    }
    switch(value){
      case 'C':
        clearButton()
        break
      case '=':
      runningTotal = parseInt(buffer)
      console.log(runningTotal)
          addition()
          break;
      case '←':
        if(buffer.length === 1){
          buffer = "0";
        }
        else{
          buffer = buffer.slice(0, buffer.length-1)
        }
        }
  }

  