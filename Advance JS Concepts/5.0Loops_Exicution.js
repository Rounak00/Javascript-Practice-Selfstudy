//for-each loop
const bykes = [
    "bmw",
    "ninja",
    "kawashaki",
    "bookati",
    "tesla"
];

bykes.forEach((i) => {console.log(i)}); // bykes.foreach((elements,index)=>{console.log(elements,index)});

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

//for-in loop
const smallNames = {
    yt: "youtube",
    fb: "facebook",
    ig: "instagram",
    ti: "tinder",
    loco: "loco tv"
};

// for in loop is use for printing object keys and values
//when we deal with objects its not iterating its enumariting
for (const i in smallNames) {
    console.log(i); // for printing keys
}


for (const i in smallNames) {
    console.log(smallNames[i]); // for printing values
}

console.log("....................................");

for (const i in smallNames) {
    console.log(`Key= ${i} & value=${smallNames[i]}`); // for printing keys & values
}
