//SHALLOW COPY & DEEP COPY
    //SHALLOW COPY=changing the value of cloned object will reflect into original as well as because both are pointing to same reference object
        const a={id:101, name:"Rounak"};   //Original Object
        const b=a;                          //Cloned Object
        b.id=102;
        console.log(a);         //{ id: 102, name: 'Rounak' }
        console.log(b);         //{ id: 102, name: 'Rounak' }
    //DEEP COPY=changing the value of object will not reflect into original object because both are pointing to different reference object
        //Spread Operator
        const c={...a};
        c.id=103;
        console.log(a);         //{ id: 102, name: 'Rounak' }
        console.log(c);         //{ id: 103, name: 'Rounak' }
        //Assign Operator
        const d=Object.assign({},a);
        d.id=104;
        console.log(d);         //{ id: 104, name: 'Rounak' }
