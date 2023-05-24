
let alphabet = prompt("Enter Your Alphabet : " );
alphabet = alphabet.toLowerCase();

if( alphabet == "a" || alphabet == "e" || alphabet == "i" || alphabet == "o" || alphabet == "u" ){
    document.write(alphabet + " This is vowel ")
}
else{
    document.write( alphabet + " isn't vowel")
}