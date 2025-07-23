let homeScoreEl =document.getElementById("home-score")
let guestScoreEl =document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function add1home() {
    homeScore += 1 ;
    homeScoreEl.innerHTML = homeScore;
}
function add2home() {
    homeScore += 2;
    homeScoreEl.innerHTML = homeScore;
}
function add3home() {
    homeScore += 3;
    homeScoreEl.innerHTML = homeScore;
}

function add1guest() {
    guestScore += 1;
    guestScoreEl.innerHTML = guestScore;
}
function add2guest() {
    guestScore += 2;
    guestScoreEl.innerHTML = guestScore;
}
function add3guest() {
    guestScore += 3;
    guestScoreEl.innerHTML = guestScore;
}
function reset(){
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.innerHTML = homeScore;
    guestScoreEl.innerHTML = guestScore;
}