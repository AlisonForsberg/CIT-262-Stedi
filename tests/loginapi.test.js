import fetch from 'node-fetch';

it ("Should get a login token", async () => { //async allows us to read from the database by moving on and coming back
    const loginResponse = await fetch('https://dev.stedi.me/login', { //await fetch allows it to move on while getting the date
    
        method: 'POST', //method : POST says to give information to the server
        headers:{
            'Content-Type': 'application/text'
        },

        body:JSON.stringify({
            "userName": "hotmail@gmail.com",
            "password": "P@ssw0rd"
        })
    })
    expect(loginResponse.status).toBe(200);  //200 means authorized
})