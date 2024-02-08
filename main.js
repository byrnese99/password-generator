const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordOne = document.getElementById('password-one');
let passwordTwo = document.getElementById('password-two');
let passwordsDisplayed = false;

function generatePasswords() {
    if (passwordsDisplayed === false){
        for (let i = 1; i <= 15 ; i++){
            let randomCharacter = Math.floor(Math.random() * characters.length);
            passwordOne.textContent += characters[randomCharacter];
        }
        for (let j = 1; j <= 15 ; j++){
            let randomCharacter = Math.floor(Math.random() * characters.length);
            passwordTwo.textContent += characters[randomCharacter];
        }
        passwordsDisplayed = true; 
    }
    
    else{
        passwordOne.textContent = "";
        passwordTwo.textContent = "";
        passwordsDisplayed = false;
        generatePasswords();
    }
}

