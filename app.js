let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById('user-score');
const computerscore_span = document.getElementById('computer-score');

const scoreboard_div = document.querySelector('.score-board');

const result_p = document.querySelector('#abc');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getcomputerchoice() {
    const choices = ['r', 'p', 's'];
    const randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];
}
function convert(letter) {
    if (letter == 'r') return "rock";
    if (letter == 'p') return "paper";
    else return "scissor";
}

function win(user, computer) {
    userscore++;
    userscore_span.innerHTML = userscore;
    const smalluserword = "user".fontsize(3).sub();
    const smallcompword = "comp".fontsize(3).sub();
    result_p.innerHTML = convert(user) + smalluserword + " beats " + smallcompword + convert(computer) + " you win ";
    document.getElementById(user).classList.add('green-glow')
    setTimeout(function(){
        document.getElementById(user).classList.remove('green-glow')
    },300)
}


function lose(user,computer) {
    computerscore++;
    computerscore_span.innerHTML = computerscore;
    const smalluserword = "user".fontsize(3).sub();
    const smallcompword = "comp".fontsize(3).sub();
    result_p.innerHTML = convert(user) + smalluserword + " loses to " + smallcompword + convert(computer) + " you lose ";
    document.getElementById(user).classList.add('red-glow')
    setTimeout(function(){
        document.getElementById(user).classList.remove('red-glow')
    },300)
}
function draw(user,computer) {
   // userscore++;
    //userscore_span.innerHTML = userscore;
    const smalluserword = "user".fontsize(3).sub();
    const smallcompword = "comp".fontsize(3).sub();
    result_p.innerHTML = convert(user) + smalluserword + " draw " + smallcompword + convert(computer) + " Its a Draw ";
    document.getElementById(user).classList.add('grey-glow')
    setTimeout(function(){
        document.getElementById(user).classList.remove('grey-glow')
    },300)
}

function game(userchoice) {
    const computerchoice = getcomputerchoice();
    // console.log('userchoice=>'+userchoice)
    // console.log('compchoice=>'+computerchoice)
    switch (userchoice + computerchoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userchoice, computerchoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userchoice, computerchoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice, computerchoice);
            break;

    }


}


function main() {
    rock_div.addEventListener('click', function () {
        game('r');
    })

    paper_div.addEventListener('click', function () {
        game('p');
    })
    scissors_div.addEventListener('click', function () {
        game('s');
    })

}


main();


