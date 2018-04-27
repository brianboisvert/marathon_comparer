export default function AccessToken(token) {
  return (dispatch)=> {
    // console.log(token);
    fetch('https://www.strava.com/api/v3/athlete/activities?access_token=18d281cb13b61567648c6ba76a168eeb40e89d6a', {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    })
    .then(res=>res.json())
    .then(data => console.log(data))
  }
}
