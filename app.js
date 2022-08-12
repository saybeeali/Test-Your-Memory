let getCard = document.querySelectorAll(".card")
const winner = document.querySelector(".winner")
const htmlMatches = document.querySelector('.count')
const reset =document.querySelector(".reset")
reset.addEventListener("click", () => {
    window.location.reload()
})
let countDown = 20;
let interval = setInterval(function(){
  document.querySelector('.timer').innerHTML=countDown;
  countDown--;
  if (countDown === 0){
    clearInterval(interval);
    document.querySelector('.timer').innerHTML='TIMES UP!!';
    winner.innerHTML="Times up, Try again."
   
  }
}, 1500);




let matches = 0;
let clickedCards = []
let bothCards =[]
let matchedCards= []
let flipClick= document.querySelectorAll(".inner-card-flip")
     flipClick.forEach(flip => {
        flip.addEventListener("click",() => {
            flipOpen(flip); 
             current(flip)
             
        })})
    





function flipOpen (evt){

     evt.classList.length < 2  ? evt.classList.add('flip-card') : evt.classList.remove('flip-card');
  

}

function flipBack (evt){
    evt[0].classList.length < 2  ? evt[0].classList.add('flip-card') : evt[0].classList.remove('flip-card');
    evt[1].classList.length < 2  ? evt[1].classList.add('flip-card') : evt[1].classList.remove('flip-card');
}
function disableCard(matched) {
    for(let i=0; i < matchedCards.length; i++) {
        matched[i].style.pointerEvents="none";
        console.log(matched[i])
        };
    }




function current (evt) {
   
   bothCards.push(evt)
   console.log(bothCards)
    clickedCards.push(evt.innerText)
    console.log(evt)
   
    console.log(clickedCards[0])
    console.log(clickedCards[1])
    console.log(clickedCards.length)
    
    if(clickedCards.length == 2) {
        if(clickedCards[0]===clickedCards[1]) {
        
             matches++;
             htmlMatches.innerHTML=`Matches: ${matches} `
            clickedCards.length=0;
            matchedCards.push(bothCards[0])
            matchedCards.push(bothCards[1])
        
            console.log(matchedCards)
            console.log("matched")
            disableCard(matchedCards)
            
            bothCards=[]
            gameDone()
            
            
        }
         else {console.log(clickedCards[0]===clickedCards[1])
            console.log("try again")
           
            unflipCards(bothCards)
            bothCards=[]
            console.log(bothCards)
            clickedCards.length=0;
            
            
             }}}
             
           
      function unflipCards(evt) {
            setTimeout(() => {
                flipBack(evt)
            }, 1000);}



        function gameDone() {
                console.log(matches)
                if (matches == 4) {
                
                    winner.innerHTML="You Won with 4 Matches"
                    countDown= "You win!!!"
                    clearInterval(interval);
                    
                }
              
            }


         function shuffleBoard() {
                let wrapper = document.querySelector('.wrapper');
                for (let i = wrapper.children.length; i >= 0; i--) {
                    wrapper.appendChild(wrapper.children[Math.random() * i | 0]);
                }
            }
            shuffleBoard()
        
        
            
    
            
            
            





































// now create function that logs once two of same cards are matched 


// This might be where I would start:
// Steps for building an mvp memory matcher
// 1. declare a variable that selects all of your cards
// 2. Add an event listener to the first card
// 3. Have the event listener access the event.target to verify the content of the
// card
// 4. console.log the innerText of the current card
// Add the event listeners to all of the cards (instead of just the first one)
// 6. Keep track of which card was clicked (to a maximum of two cards) - ie
// card1 card2
// 7. Check if the innerText of card 1 and card 2 match
// 8. console.log the match state and update the player score


//have to make an empty array which enterrs clicked buttons into the array so it keeps track of whats being clicked.
//then make a function to checl if clicked card match together, if they do log ITS A MAtc