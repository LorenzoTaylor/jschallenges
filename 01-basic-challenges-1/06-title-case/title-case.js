function titleCase(phrase) {
    var newPhrase = "";
    for(let i = 0 ; i < phrase.length ; i++){
        if(phrase[i-1] == " " || i == 0){
            newPhrase += phrase[i].toUpperCase();
        } else {
            newPhrase += phrase[i];
        }
    }
    return newPhrase;
}

module.exports = titleCase;
