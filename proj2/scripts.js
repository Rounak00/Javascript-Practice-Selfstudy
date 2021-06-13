const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//console.log(window.getComputedStyle(pink).backgroundColor);

const getBgColor=(selectedColor)=>{
    return (window.getComputedStyle(selectedColor).backgroundColor);
}

//var getElementColor = getBgColor(orange);

//orange.addEventListener('mouseenter',()=>{
//    center.style.background = getElementColor;
//});

const magicColorChenger=(element,color)=>{
    return element.addEventListener('mouseenter',()=>{
    center.style.background = color;
});
};
magicColorChenger(red,getBgColor(red));
magicColorChenger(cyan,getBgColor(cyan));
magicColorChenger(violet,getBgColor(violet));
magicColorChenger(orange,getBgColor(orange));
magicColorChenger(pink,getBgColor(pink));


