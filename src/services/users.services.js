const postUsers=(obj)=>{

 return    fetch('http://jsonplaceholder.typicode.com/users',{
        method:'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(value => value.json())
}
export {postUsers}