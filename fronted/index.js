
async function sendName() {

  let name = document.getElementById('InputName').value;
  let response = await fetch("http://localhost:5000/submit",
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    }
  );

 const result =await response.json();  

  let finalResulT = document.getElementById('resu').innerHTML = result.message;
  console.log(finalResulT);
}




