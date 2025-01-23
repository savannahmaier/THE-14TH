function showLetter() {

    const questionMark = document.querySelector('.question-mark');
    const letter = document.getElementById('letter');
    const buttons = document.querySelector('.buttons');
  
   
    questionMark.style.display = 'none'; 
  
 
    letter.style.display = 'block'; 
    buttons.style.display = 'flex'; 
  }
  
  function showMessage(answer) {
    const messageDiv = document.getElementById('message');
    if (answer === 'Yes') {
      messageDiv.innerHTML = "Yay! Now let me know on snap because I have no idea what you picked.";
    } else if (answer === 'No') {
      messageDiv.innerHTML = "This never happened.";
    }
  
    messageDiv.style.display = 'block'; 
  }