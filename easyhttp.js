class EasyHTTP {
  
  //Make a get reguest
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch(err => reject(err))
    })
  }

  //Make a post request

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    })
  }

//Make a Put request
put(url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
  })
}

// Delete User request
delete(url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
  })
}
}