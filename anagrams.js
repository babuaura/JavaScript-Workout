// two strings chars are equal => 
// listen => silent
// rat => tar

const isAnagrams = (str1, str2) => {
    
    // remove space and convert to lowercase
    str1 = str1.replace(/\s+/g,'').toLowerCase();
    str2 = str2.replace(/\s+/g,'').toLowerCase();

    // check String length is equal
    if(str1.length != str2.length) return false;

    let str1Count = {};
    let str2Count = {};

    for (const char of str1) {
        str1Count[char] = (str1Count[char] || 0 ) + 1;
    }
    for (const char of str2) {
        str2Count[char] = (str2Count[char] || 0 ) + 1;
    }
    for (const char in str1Count) {
        if(str1Count[char] != str1Count[char]) return false;
    }
    
    return true;
};
console.log(isAnagrams("listen", "silent"));

