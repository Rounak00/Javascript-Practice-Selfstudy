



    async function getapi(){
        try{ 
          const data=await fetch("https://api.covid19api.com/summary");
          const jsdata=await data.json();

          const countryname= jsdata.Countries[101];

          console.log(`
                     The name of the country is ${countryname.Country},
                     Current cases are ${countryname.TotalConfirmed}, 
                     Total Deaths are ${countryname.TotalDeaths}     
                    `)


       }catch(error){
           console.log(error);
       }
    } 
