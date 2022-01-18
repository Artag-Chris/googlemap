import axios from 'axios';

const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
      
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '97c2f1ac7cmsh0deecad6e706928p18dc08jsn99576eb4346e'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });

export const getPlacesData = async (lat, lng) => {
 try {
     const {data:{data}} = await axios.get(URL, options )
        return data
 } catch (error) {
     console.log(error)
 }
}