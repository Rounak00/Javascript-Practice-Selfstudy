const obj={
    num:10,
    name:"Rounak",
};
const p1=new Proxy(obj,{
    get(target,property){
        if(property in target){
            //instead of -> return target[property]
            return Reflect.get(target,property);
        }
        return false;
    },
    set(target,property,value){
        if(property==='num'){
            //instead of -> target[property]=value
            Reflect.set(target,property,value)
        }
    }
})

console.log(p1.num)
p1.num=20;
console.log(p1.num)