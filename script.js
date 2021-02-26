const messageGenerator = () => {
    //These arrays will be used to generate the three categories of randomized words
    const predictionWord = ["will", "will not", "should", "should not", "can", "cannot", "might", "might not"];
    
    const verbWord = ["steal", "buy", "sell", "make", "borrow", "rent", "find", "lose"];

    const nounWord = ["a house", "a car", "a business deal", "a book", "a childhood toy", "event tickets", "headphones", "a new phone"];

    //This function will be used to pull a random array element in the generator function
    const randElement = () => {
        return Math.floor(Math.random() * 8)
    ;}

    //This function will generate the random message
    const message = () => {
        return 'You '  + predictionWord[randElement()] +' ' + verbWord[randElement()] + ' ' + nounWord[randElement()] + ' ' + 'this week.'
    ;}

    return message();
}

console.log(messageGenerator())