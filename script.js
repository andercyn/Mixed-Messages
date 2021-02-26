const messageGenerator = () => {
    //These arrays will be used to generate the three categories of randomized words
    const predictionWord = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"];
    
    const verbWord = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"];

    const nounWord = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"];

    //This function will be used to pull a random array element in the generator function
    const randElement = () => {
        //holding place for function
    ;}

    //This function will generate the random message
    const message = () => {
        //holding place for function
        return 'You ${predictionWord[randElement]} ${verbWord[randElement]} ${nounWord[randElement]} this week.'
    ;}

    return message;
}

console.log(messageGenerator)