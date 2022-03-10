let user ={
    name: "Akshay Saini",
    address: {
      personal: {
        city: "Dehradun",
        state: "Uttrakhand",
        area: "Majra",
      },
      office: {
        city: "Hyderabad",
        area: {
          landmark: "Hi Tech",
        }
      }
    }
  }
  let magic = (obj, parent, finalObj) => {
    for(let key in obj){
      if(typeof obj[key] === "object"){
        magic(obj[key], parent + "_" + key, finalObj);
      }
      else {
        finalObj[parent + "_" + key] = obj[key];
      }
    }
  }
  
  let finalObj= {};
  magic(user, "user", finalObj);
  
  console.log(finalObj);
  