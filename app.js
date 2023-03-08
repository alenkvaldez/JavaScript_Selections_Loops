console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 0; i < 100; i++) {
    console.log(i);
    if (i % 3 == 0) {
        console.log("FIZZ");
    }
    if (i % 5 == 0) {
        console.log("BUZZ");
    }
    else {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FIZZBUZZ");
        }
    }
}

//Exercise 3: Repeat with While and Do/While

let i = 1;

while (i <= 100) {
    let output = "";

    if (i % 3 == 0) {
        output += "FIZZ";
    }

    if (i % 5 == 0) {
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);

    i++;
}

let a = 1;
do {
    let output = ""

    if (i % 3 == 0) {
        output += "FIZZ";
    }

    if (i % 5 == 0) {
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);

    a++;
} while (a <= 100);

// Exercise 4: Find Value
//Start with the following code:
let numToFind = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

let foundValue;

for (let i = 1; i <= n; i++){
    if (i == numToFind){ 
    console.log(`found ${numToFind}!`);
    break;
 }
}

if (foundValue){
    console.log(`found ${numToFind}!`);
} else {console.log(`no found over here did not find that ${numToFind}`);
}


for (let i = 1; i <= n; i++){
    if (i == numToFind){ 
    console.log(`found ${numToFind}!`);
    break;
 }
}

if (i == n){ 
console.log(`no found over here did not find that ${numToFind}`);
}

//Bonus: Exercise 5: Customized FIZZBUZZ
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for (let i = start; i <= end; i++){
    let output = "";

    if (i % fizzDivisor == 0){
        output += "FIZZ";
    }

    if (i % buzzDivisor == 0){
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);
}
console.log(fizzDivisor, buzzDivisor);
