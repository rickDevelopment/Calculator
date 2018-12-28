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
  // Function to run when a symbol is clicked 

  function handleNumber(clickedValue){
    console.log(`Handle number: ${clickedValue}`)
    if(buffer === "0"){
      buffer = clickedValue
    }
    else{
      buffer += clickedValue
    }
    runningTotal = parseInt(buffer)

  }
  // Function to run when a symbol is clicked 
  function handleSymbol(value){
    switch(value){
      case 'C':
        clearButton()
      case '+':
        console.log(runningTotal)
        if(previousOperator === null){
          previousOperator = '+';
        }
        break;
    }

  }