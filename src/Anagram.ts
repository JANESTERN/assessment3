function Anagram(word1: string, word2: string): boolean {
    let word1Array = word1.split('').sort();
    let word2Array = word2.split('').sort();
    if (word1Array.length !== word2Array.length) {
        return false;
    }
    for (let i = 0; i < word1Array.length; i++) {
        if (word1Array[i] !== word2Array[i]) {
            return false;
        }
    }
    return true;
}
console.log(Anagram('cat', 'dog')); 