export default function AccessToken(token) {
  // const data = [6437.38, 6437.38, 6437.38, 12874, 12874, 12875]
  return (dispatch)=> {
    // return {type:'ADD_DATA', payload: data}
    fetch('https://www.strava.com/api/v3/athlete/activities?access_token=18d281cb13b61567648c6ba76a168eeb40e89d6a', {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    })
    .then(res=>res.json())
    .then(data => {
      dispatch({type:'ADD_DATA', payload: data})
    })
  }
}

export function RunCategories(categories) {
  return (dispatch) => {
    console.log("RUnCatrogroiies hit");
  }
}
