

// aync function retrieve information about a city
const cityInfo = async (city) => {
    //url API endpointr defined
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q34647`
    
    //alternatives for the fetch() call, including headers with an API key and host
    const alternatives = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'dfc14bccf0msh55cd09095fc7e5bp1087b2jsn142626d6d73d',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    };
    

        //call fetch() to retrieve data from the API, the parse the response as JSON

      

    fetch(url, alternatives)
        .then(res => res.json())
        .then((result) => {

            //log the city population and elevation to the console
            console.log('Population: ' + JSON.stringify(result.data.population, null, '\t') + 
                        '\n\nElevation: ' + JSON.stringify(result.data.elevationMeters, null, '\t'))
        }),
    (error) =>{
        //if there is an error , log it to the console
        console.log(error)
    }
        
    }
    
    //Get weather information based on longitude and latitude points
    const getWeather = async (lat, lon) => {
    const url = `https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&lon=${lon}&lat=${lat}`;
    
    //Define the 
    const alternatives = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'dfc14bccf0msh55cd09095fc7e5bp1087b2jsn142626d6d73d',
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
      }
    };
    
    //call fetch to retrieve data from the API, then parse the response as JSON
    fetch(url, alternatives)
        .then(res => res.json())
        .then((result) => {
            
            //display weather infomation to the console
            console.log('Weather: \n' + JSON.stringify(result.data[0].app_temp, '', '\t').replaceAll("\"", ""))
        }),
    (error) =>{
        //log error to the console
        console.log(error)
    }
    }
    
    //cal function to retrieve information about Bloemfontein
    cityInfo('Polokwane')
    getWeather(23.8962 ,29.4486)