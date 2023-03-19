function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 1; // rewind to the start
    audio.play();
    key.classList.toggle('playing'); 
    console.log(key);
  }
  
  function removeTransition(e){
    if (e.propertyName !== 'background-color') return; // skip it if it's not a background-color change
    this.classList.remove('playing');
  }
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);