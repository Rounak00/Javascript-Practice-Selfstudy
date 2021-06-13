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