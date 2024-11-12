let humScore = 0;
let CompScore = 0;

function getComputerChoice(){
    let s1 = 'Vini';
    let s2 = 'Mbappe';
    let s3 = 'Haland';
    let prob = Math.random();
    if(prob < 1/3){
        return s1;
    } 
    else if(prob < 2/3){
        return s2;
    }
    else{
        return s3;
    }
}

function getHumanChoice(){
    let str_hum = prompt("Please enter the player you wish to play with:(Haland/Vini/Mbappe): ");
    return str_hum;
}

function PlayRound(HumanChoice, CompChoice){
    let hum = HumanChoice.toLowerCase();
    let com = CompChoice.toLowerCase();
    let win = 0;
    if(hum === 'vini'){
        if(com === 'haland'){
            win = 12;
        }
        else if(com === 'mbappe'){
            win = 13;
        }
        else{
            win = 0;
        }
    }
    else if(hum === 'haland'){
        if(com === 'mbappe'){
            win = 23;
        }
        else if(com === 'vini'){
            win = 21;
        }
        else{
            win = 0;
        }
    }
    else if(hum === 'mbappe'){
        if(com === 'vini'){
            win = 31;
        }
        else if(com === 'haland'){
            win = 32;
        }
        else{
            win = 0;
        }
    }else{
        console.log('Error! No player named ' + hum);
        return 0;
    }
    if(win === 12 || win === 23 || win === 31){
        
        humScore += 1;
    }else if(win === 13 || win === 21 || win === 32){
       
        CompScore += 1;
    }
    return win;
}

function playGame(){

    for(let i = 0; i < 5; i++){
        let h = getHumanChoice();
        let c = getComputerChoice();
        let x = PlayRound(h, c);
        if(x === 0){
            console.log('Round Drawn!');
        }
        if(x === 12){
            console.log('You Won!!! Vini Beats Haland');
        }
        if(x === 23){
            console.log('You Won!!! Haaland Beats Mbappe');
        }
        if(x === 31){
            console.log('You Won!!! Mbappe Beats Vini');
        }
        if(x === 13){
            console.log('Loser of round! Your Vini was beaten by Mbappe');
        }
        if(x === 21){
            console.log('Loser of round! Your Haland was beaten by Vini');
        }
        if(x === 32){
            console.log('Loser of round! Your Mbappe was beaten by Haland');
        }
    }
    if(humScore > CompScore){
        console.log("You ARE THE WINNER!");
    }
    else if(humScore < CompScore){
        console.log('HAHA! LOSEERR !!!');
    }else{
        console.log("Match Drawn!");
    }

}

playGame();