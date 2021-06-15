
let button = document.getElementById("button");
button.addEventListener("click", function(event) {
    event.preventDefault();
    let word = document.getElementById("word").value;
    palindrome(word)
})
function palindrome (word) {
    let word2 = word.toLowerCase();
    let word3 = word2.replace(/[^A-Za-z0-9]/g,'');
    let wordreverse = word3.split('').reverse().join('');
    if (word3 === wordreverse){
        return true,
        document.getElementById("resultado").innerText="Es un palindromo";
    }
    else {         
    return false,
    document.getElementById("resultado").innerText="No es un palindromo";
    }
}

