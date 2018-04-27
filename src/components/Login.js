import React from 'react';

const Login = (props) => {

  return(
    <div>
      <a href="https://www.strava.com/oauth/authorize?client_id=22504&response_type=code&redirect_uri=http://localhost:3000/dashboard/&scope=write">Login</a>
    </div>
  )
}

export default Login;
