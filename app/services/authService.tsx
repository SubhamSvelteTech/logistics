const authenticate = async(email:string,password:string) => {
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: 'kminchelle',
          password: '0lelplR',
          expiresInMins: 30, // optional, defaults to 60
        })
      })
      .then(res => {
        console.log(res.json())
       return res.json()
})
      .then(console.log);
}

export {authenticate}