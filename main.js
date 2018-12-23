console.log('javascript file loaded')
//run JS after the page loads

  //select elements from the html
  let calcScreen = document.querySelector('.calc-screen');
  let calcNumbers = document.querySelector('.calc-numbers');
  let clearButton = document.querySelector('.clear-btn');
  let equalButton = document.querySelector('.equal-btn');
  
  calcNumbers.addEventListener('click', function(event){
    //get the value of the number that pressed then convert it and add it to the numbers array
    
    calcScreen.innerHTML = event.target.innerText;

    if(numbersPressed != equalButton){
      
      numbersPressed.push(parseInt(event.target.innerText))
    }
    //Clear the screen
    if(event.target === clearButton){
      clear();
    }
    if(event.target === equalButton){
      addition();
    }
  });

  // array to store numbers 
  let numbersPressed = [];
  
  // 
  function addition(){
    let total = 0;
    numbersPressed.forEach(function(number){
      total += number;
      return total; 
    })
    calcScreen.innerHTML = total;
    console.log(total)
  }
  
  function clear(){
    calcScreen.innerHTML = 0;
    numbersPressed = []
    return
  }

