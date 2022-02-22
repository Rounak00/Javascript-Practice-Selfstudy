const person={
    name: "Dom",
    age: 28,
    vehicle:{
      year:2008   
    }
}

const vehicley= person.vehicle?.year; //person.vehicle? person.vehicle.year : undefined;

console.log(vehicley);

//Mainly use in api's