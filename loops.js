// let favFilm = [
//     "Gladiator",
//     "A Beautiful Mind",
//     "Good Will Hunting",
//     "Lock Stock And Two Smoking Barrels",
//     // "Snatch",
//     // "21"
// ];
// favFilm.push ("Snatch");
// favFilm.push ("21");
// for (filmIndex = 0; filmIndex < favFilm.length;
//     filmIndex++) {
//         console.log(favFilm [filmIndex]);
//     }

// loop condition

// for ( i = 9 ; i > -1 ; i-- ){
//     console.log (i);

// }



// While condtion

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = " ";

// while (currentCard != "Spade"){

//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
      
// }

// console.log(currentCard);

// Activity Loops

// let arrFavoriteFilms = [
//     “1”,
//     “2",
//     “3”, //“Ghostbusters”,
//     “Ghostbusters”,
//     “5"
// ];
// arrFavoriteFilms.push(“6”);
// arrFavoriteFilms.push(“7");
// const funFilmCheck = (varFilm, varIndex) => {
//     if(varIndex == 3-1){
//         if(varFilm == “Ghostbusters”) {
//             console.log(“Yay it’s Ghostbusters”);
//         } else {
//             console.log(“Booo, we want Ghostbusters”);
//         }
//     }
// }
// for (arrFavoriteFilmsIndex = 0; arrFavoriteFilmsIndex < arrFavoriteFilms.length; arrFavoriteFilmsIndex++) {
//     console.log(arrFavoriteFilms[arrFavoriteFilmsIndex]);
//     funFilmCheck(arrFavoriteFilms[arrFavoriteFilmsIndex], arrFavoriteFilmsIndex);






// Activity While Loops

// let number = 50;
// let currentNum = 0;
// while(currentNum !== number){
//   currentNum = Math.floor((Math.random() * 50) + 1);
//   console.log(currentNum);
// }



//Add a film checker function to your fav films array and for loop.
let favFilms = [
    "Wrong turn",
    "Carrie",
    "Scream"
];
for (filmIndex = 0; filmIndex < favFilms.length; filmIndex++) {
    console.log(favFilms[filmIndex]);
}
const filmCheck = () => {
    if (favFilms[2] == "Ghostbusters") {
        console.log("Yay, the third film is Ghostbusters.")
    }
    else {
        console.log("The third film is not Ghostbusters.")
    }
}
filmCheck()
//Take the random card generator and adapt it into a random number generator until the given number is reached 
let number = 50;
let currentNum = 0;
while(currentNum != number){
  currentNum = Math.floor((Math.random() * 51));
  console.log(currentNum);