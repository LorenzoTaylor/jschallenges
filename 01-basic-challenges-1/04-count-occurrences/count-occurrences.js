function countOccurrences(word, character) {
    var count = 0;
    for(let i = 0 ; i < word.length ; i++){
        if(word[i] == character){
            count++;
        }
    }
    return count;
}

module.exports = countOccurrences;
