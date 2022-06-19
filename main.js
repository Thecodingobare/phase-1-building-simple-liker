// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let allHearts = document.querySelectorAll('span.like-glyph');
// let errorModal = document.querySelector('div#modal')
let modal = document.querySelector('.hidden')

function likeHeart(e) {
  let targetHeart = e.target
  console.log(targetHeart.textContent)
  mimicServerCall()
  .then(function () {
    if (targetHeart.textContent === EMPTY_HEART) {
      targetHeart.classList.add('activated-heart')
      targetHeart.textContent = FULL_HEART;
    } else {
      targetHeart.classList.remove('activated-heart')
      targetHeart.textContent = EMPTY_HEART;
    }
  })
  .catch(function () {
    modal.classList.remove('hidden')
    setTimeout(() => {modal.classList.add('hidden')}, 3000)
  })
};




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
