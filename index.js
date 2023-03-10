function submitData(name, email) {
    const configObj = {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            'name': name,
            'email': email,
        }),
    }
    return fetch('http://localhost:3000/users', configObj)
     .then(resp => resp.json())
     .then(newUser => document.body.innerHTML = newUser.id)
     .catch(error => document.querySelector('body').innerHTML = error)
}
