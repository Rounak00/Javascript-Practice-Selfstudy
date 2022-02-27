function r(){
    return{
        difficulty: "Easy",
        s:0
    }
}

const ans=r().s || 500;
console.log(cash);  // here it print 500 bcz here s is 0 although it is present but it makes the value false so for that we use nullish coalescing

function r(){
    return{
        difficulty: "Easy",
        s:0
    }
}

const ans=r().s ?? 500;//r().s===undefined? 500:r().s;
console.log(cash); 