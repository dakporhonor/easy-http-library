 const http = new EasyHTTP

//Get users
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err))

// Users data
const data = {
  name: 'John Doe',
  ursername: 'jdoe',
  email: 'xyz@abc.com'
}

// Create user
http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.log(err))

//Update user
http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err))

//Delete user
http.put('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log('Resource Deleted...'))
.catch(err => console.log(err))