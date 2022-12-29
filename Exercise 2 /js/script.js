const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries.length

let myWatchedSeriesSentence = myWatchedSeries.toString();

console.log("I watched "+ myWatchedSeriesLength + " series : " + myWatchedSeriesSentence);

let indexTheBigBangTheory = myWatchedSeries.indexOf("the big bang theory");

if (indexTheBigBangTheory !== -1) {
    myWatchedSeries.splice(indexTheBigBangTheory, 1);
}

// myWatchedSeries.splice(2,1,'friends');
myWatchedSeries.push('Avengers');
myWatchedSeries.unshift('Death Note');

let indexBlackMirror  = myWatchedSeries.indexOf("black mirror");

if (indexBlackMirror !== -1) {
    myWatchedSeries.splice(indexBlackMirror, 1);
}

console.log(myWatchedSeries[myWatchedSeries.indexOf("money heist")]);
console.log(myWatchedSeries);