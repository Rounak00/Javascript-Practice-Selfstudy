function x5(){
    var a5=50;
    function y5(b){
        function z5(){
            console.log(a5 , b , c5);
        }
        let c5=40;
        return z5;
    }
    return y5;
}
let c5=33; // here not get 33 if there is no line num42 then 33 will get
var clo= x5()("Hello");
clo();