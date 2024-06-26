// query selector variables go here 👇
var mainPoster = document.querySelector('.main-poster')
var posterForm = document.querySelector(".poster-form")
var showMain = document.querySelector(".show-main");
var saveThis = document.querySelector('.save-poster');
var showSave = document.querySelector('.show-saved');
var showAnother = document.querySelector('.show-random');
var makeYourown = document.querySelector('.show-form');
var makePoster = document.querySelector('.make-poster');
var picture = document.querySelector('.poster-img');
var savedPostersView = document.querySelector('.saved-posters');
var heading = document.querySelector('.poster-title');
var quote = document.querySelector('.poster-quote');
var backToMain = document.querySelector('.back-to-main');
var posterImageUrl = document.getElementById('poster-image-url');
var posterTitle = document.getElementById('poster-title');
var posterQuote = document.getElementById('poster-quote');
var form = document.querySelector('.poster-form form');
var savedPostersGrid = document.querySelector('.saved-posters-grid');



// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;




// event listeners go here 👇



saveThis.addEventListener('click', () => {
  var dattaHolder = {
    heading: heading.innerText,
    quote: quote.innerText,
    picture: picture.src
  }

  if (cheakForDubbles(dattaHolder) === false) {
    savedPosters.push({
      heading: heading.innerText,
      quote: quote.innerText,
      picture: picture.src
    })
  }
  console.log("you saved this", savedPosters)
});

showSave.addEventListener('click', () => {
  savedPostersGrid.innerHTML = ''
  mainPoster.classList.add("hidden")
  savedPostersView.classList.remove("hidden")
  for (var i = 0; i < savedPosters.length; ++i) {

    savedPostersGrid.innerHTML = savedPostersGrid.innerHTML +
      `<article class="poster" ondblclick="deleteItem(${i})">
        <img class="poster-img" src=${savedPosters[i].picture} alt="nothin' to see here">
        <h1 class="poster-title">${savedPosters[i].heading}</h1>
        <h3 class="poster-quote">${savedPosters[i].quote}</h3>
       </article>`
  }

  console.log('button2')
});

showAnother.addEventListener('click', () => {
  heading.innerText = titles[Math.floor(Math.random() * titles.length)]
  quote.innerText = quotes[Math.floor(Math.random() * quotes.length)]
  picture.src = images[Math.floor(Math.random() * images.length)]

});

makeYourown.addEventListener('click', () => {
  mainPoster.classList.add("hidden")
  posterForm.classList.remove("hidden")
  console.log('button4')
});

showMain.addEventListener('click', () => {
  mainPoster.classList.remove("hidden")
  posterForm.classList.add("hidden")

  console.log('button2')
});

backToMain.addEventListener('click', () => {
  mainPoster.classList.remove("hidden")
  savedPostersView.classList.add("hidden")
  console.log('button2')
});

// Make Poster
form.addEventListener('submit', (event) => {
  event.preventDefault();

  mainPoster.classList.remove("hidden")
  posterForm.classList.add("hidden")

  heading.innerText = String(posterTitle.value).toUpperCase()
  quote.innerText = posterQuote.value
  picture.src = posterImageUrl.value

  var dattaHolder = {
    heading:String(posterTitle.value).toUpperCase(),
    quote: posterQuote.value,
    picture: posterImageUrl.value
  }

  if (cheakForDubbles(dattaHolder) === false) {
    images.push(posterImageUrl.value)
    quotes.push(posterQuote.value)
    titles.push(String(posterTitle.value).toUpperCase())
    savedPosters.push({
      heading: String(posterTitle.value).toUpperCase(),
      quote: posterQuote.value,
      picture: posterImageUrl.value
    })
  }
});

// functions and event handlers go here 👇
// (we've provided two to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function cheakForDubbles(datta) {

  for (var i = 0; i < savedPosters.length; ++i) {
    if (savedPosters[i].heading === datta.heading &&
      savedPosters[i].quote === datta.quote &&
      savedPosters[i].picture === datta.picture) {
      return true
    }
  }
  return false
}

function deleteItem(index) {
  savedPosters.splice(index, 1)
  savedPostersGrid.innerHTML = ''
  for (var i = 0; i < savedPosters.length; ++i) {

    savedPostersGrid.innerHTML = savedPostersGrid.innerHTML +
      `<article class="poster" ondblclick="deleteItem(${i})">
        <img class="poster-img" src=${savedPosters[i].picture} alt="nothin' to see here">
        <h1 class="poster-title">${savedPosters[i].heading}</h1>
        <h3 class="poster-quote">${savedPosters[i].quote}</h3>
       </article>`
  }  
}

function start() {
  console.log('ss', titles.length)
  heading.innerText = titles[getRandomIndex(titles)]
  quote.innerText = quotes[getRandomIndex(quotes)]
  picture.src = images[getRandomIndex(images)]
}

start()