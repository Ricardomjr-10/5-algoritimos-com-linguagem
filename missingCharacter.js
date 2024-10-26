function showLetters (frase) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const fraseArray = [...frase]
    let letters = ''
    for (let i = 0; i < alphabet.length;i++) {
        if (!fraseArray.includes(alphabet[i])) {
            letters += ` ${alphabet[i]}`
        }
    }
    console.log(letters)
}
const frase = 'o rato roeu a roupa do rei de roma'
showLetters(frase)