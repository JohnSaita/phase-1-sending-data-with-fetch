
// Add your code here

function submitData(name,email){
  const users ={
    'name':name,
    'email':email
  }
  const postHandle = {
    method:'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(users)
  }
  const body =document.querySelector('body');
  const p =document.createElement('P');
 return fetch('http://localhost:3000/users',postHandle)
  .then(res=>res.json())
  .then(data=>{
    p.innerText =data.id
    document.body.appendChild(p)
  })
  .catch((message)=>{
    alert(message)
    p.innerText ="Unauthorized Access"
    document.body.appendChild(p)

  })

}



