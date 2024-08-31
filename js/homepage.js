const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEyOGVhMjVmOGJkODAwMTUyZjhjZTIiLCJpYXQiOjE3MjQ5NTQ0NTMsImV4cCI6MTcyNjE2NDA1M30.wdRlTQpOsy0fTiRTjzqmoQ1kMVftrhHgccQrHUg3JkI";

const URL = "https://striveschool-api.herokuapp.com/api/product/" ;
async function call(){
    try{
        const response = await fetch(`${URL}`, {
            method: 'GET',
            headers: {
              "Content-Type" : "application/json",
              "Authorization" : `Bearer ${apiKey}`,
            },
            }
          )
          const product = await response.json()
          console.log(product)
    }catch(err){
        console.log("errore ")
    }
    
    const cardContainer = document.getElementById("cardContainer")



}