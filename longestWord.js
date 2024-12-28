const longestWord = (sentence) =>{
    const words = sentence.split(' ');

    let longestWord = '';

    for (const word of words) {

        if(word.length > longestWord.length) longestWord = word;

    }
    
    return longestWord; 
}

const sentence = 'find the longest word int the String';

console.log(longestWord(sentence));
