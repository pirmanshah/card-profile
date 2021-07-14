const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const closeModal = document.getElementById('close-modal');

const showModal = () => {
    modalOverlay.classList.add('active');
    modal.classList.add('active');
}
closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('active');
    modalOverlay.classList.remove('active');
});

const jsConfetti = new JSConfetti();

const showConfetti1 = () => {
    jsConfetti.addConfetti({
        confettiColors: [
          '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
      })
}

const showConfetti2 = () => {
    jsConfetti.addConfetti({
        confettiColors: [
          '#6E22CB', '#8549D3', '#9C6BDB', '#B896E8', '#D6C0F4', '#EFE5FD',
        ],
      })
}

const showConfetti3 = () => {
    jsConfetti.addConfetti({
        confettiColors: [
          '#43A047', '#4CAF50', '#66BB6A', '#81C784', '#A5D6A7', '#C8E6C9',
        ],
      })
}

const showConfetti4 = () => {
    jsConfetti.addConfetti({
        confettiColors: [
          '#0984e3', '#d63031', '#74b9ff', '#ff7675'
        ],
      })
}

const showConfetti5 = () => {
    jsConfetti.addConfetti({
        emojis: ['⚡️', '💥'],
        emojiSize: 50,
        confettiNumber: 100,
     })
}

const showConfetti6 = () => {
  jsConfetti.addConfetti({
      emojis: ['✨', '💫', '✈️'],
      emojiSize: 50,
      confettiNumber: 100,
   })
}

// function random(){
//    var i  = Math.floor(Math.random() * 6) + 1;
//    return i;
//  }

const showConfetti = () => {
//    var i = random();
//    eval('showConfetti'+i+'()');
    showConfetti1();
    setTimeout(showConfetti2, 1000)
    setTimeout(showConfetti3, 2000)
    setTimeout(showConfetti4, 3000)
    setTimeout(showConfetti5, 4000)
    setTimeout(showConfetti6, 5000)
}