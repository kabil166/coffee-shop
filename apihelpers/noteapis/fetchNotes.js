export const fetchNotes= async ()=>{
    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      };
    //   'https://api.foursquare.com/v3/places/search?query=coffee&ll=25.616129%2C88.136170
      const responses = await fetch('http://localhost:3000/api/notes', options)

    
        const data =await responses.json();

        return data;
}