let challenge = 1;

// Challenge 0
function printChallengeHead() {
    console.log("######### Challenge " + challenge  + " #########");
    challenge++;
}

// Challenge 1
function printVowels(word) {
    const vowels = "aeiou";
    let i = 0;
    while(i < word.length - 1) {
        if(vowels.includes(word[i])) {
            console.log(word[i]);
        }
        
        i++;
    }
}

// Challenge 2
function print5Vowels(word) {
    const vowels = "aeiou";
    const wordLen = word.length;
    let i = 0;
    let vowelCount = 0;
    while(i < wordLen && vowelCount < 5) {
        if(vowels.includes(word[i])) {
            console.log(word[i]);
            vowelCount++;
        }

        i++;
    }
}

// Challenge 3
function everyThird(word) {
    let i = 2;
    let wordLen = word.length;

    while(i < wordLen) {
        console.log(word[i]);
        i += 3;
    }
}

// Challenge 4
function print4Chars(word, startIndex) {
    let curr = startIndex;
    const end = curr + 4;
    const wordLen = word.length;

    while(curr < end && curr < wordLen) {
        console.log(word[curr]);
        curr++;
    }
}

// Challenge 5
function printUIndexes(word) {
    let i = 0;
    const wordLen = word.length;

    while(i < wordLen) {
        if(word[i].toLowerCase() === "u") {
            console.log(i);
        }

        i++;
    }   
}

// Challenge 6
function firstIndexOfU(word) {
    let ui;
    let i = 0;
    const wordLen = word.length;

    while(!ui && i < word.length) {
        if(word[i].toLowerCase() === "u") {
            ui = i;
            console.log(ui);
        }

        i++;
    }
}

// Challenge 7
function firstIndexOfUV2(word) {
    let ui = -1;
    let i = 0;
    const wordLen = word.length;

    while(i < word.length) {
        if(word[i].toLowerCase() === "u") {
            ui = i;
            break;
        }

        i++;
    }

    console.log(ui);
}

// Challenges
printChallengeHead();
printVowels("Regular expression are for term 2.");

printChallengeHead();
print5Vowels("Regular expression are for term 2.");

printChallengeHead();
everyThird("I am the alfalfa and the omelette.");

printChallengeHead();
print4Chars("Oh hi, I didn't see you there. Welcome.", 36);

printChallengeHead();
printUIndexes("You picked the wrong house, bub.");

printChallengeHead();
firstIndexOfU("You picked the wrong house, bub.");

printChallengeHead();
firstIndexOfUV2("I'm Canadian.");
