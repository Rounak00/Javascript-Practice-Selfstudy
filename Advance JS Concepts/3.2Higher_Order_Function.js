Higher Order Funcrion: it are the functions that take other function as argument or return a function as their result . 

const inter=(sc)=>{
    if(sc=="5"){
        return function(topic){
            console.log(sc, "," , topic);
        }
    }
}
inter(5)('k');