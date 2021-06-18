let a=5;
// for loop

for(let i=0;i<=a; i++ ){
    console.log(i);
}

//While loop

while(a==0){
    console.log(a);
    a--;
}

//do-while

do{
    console.log(a);
    a--;
}
while(a!=0);






//for-each loop
const bykes = [
    "bmw",
    "ninja",
    "kawashaki",
    "bookati",
    "tesla"
];

bykes.forEach((i) => (console.log(i)));

//for-in loop
const smallNames = {
    yt: "youtube",
    fb: "facebook",
    ig: "instagram",
    ti: "tinder",
    loco: "loco tv"
};

// for of loop is use for printing object keys and values

for (const i in smallNames) {
    console.log(i); // for printing keys
}

console.log("....................................");

for (const i in smallNames) {
    console.log(smallNames[i]); // for printing values
}

console.log("....................................");

for (const i in smallNames) {
    console.log(`Key= ${i} & value=${smallNames[i]}`); // for printing keys & values
}

// for-of loop
const social = ["youtube",
    "facebook",
    "twitter",
    "instagram",
    "tinder"
];

// for of loop is use for printing array elements

for (const n of social) {
    console.log(n);
}