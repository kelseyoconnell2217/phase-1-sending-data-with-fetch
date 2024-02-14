function submitData(submittedName, submittedEmail){
    const configObject = {
        method: 'POST',
        headers: {
            'Content-Type' : "application/json",
            'Accept' : "application/json"
        },
        body: JSON.stringify({
            name : submittedName,
            email : submittedEmail
        })}
    return fetch("http://localhost:3000/users", configObject)
        .then(function(resp){
            return resp.json()})
        .then(data => {
            const body = document.querySelector('body');
            body.append(data.id)})
        .catch(error => {
            const body = document.querySelector('body');
            body.append(error.message)})
        }
        
    