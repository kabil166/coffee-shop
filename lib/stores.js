// const getUrlForStores=(latLong, query, limit)=>{
//     return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
// }

// export const fetchStores = async () =>{
//     const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: process.env.AUTHORIZATION
//         }
//       };
//     //   'https://api.foursquare.com/v3/places/search?query=coffee&ll=25.616129%2C88.136170
//       // const responses = await fetch(getUrlForStores("25.616129%2C88.136170","coffee", 6), options)

    
//         const data =await responses.json();

//         return data.results;
// }