/*import { startLoading, stopLoading } from "./.js/confirm-card.js"*/

const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEyOGVhMjVmOGJkODAwMTUyZjhjZTIiLCJpYXQiOjE3MjQ5NTQ0NTMsImV4cCI6MTcyNjE2NDA1M30.wdRlTQpOsy0fTiRTjzqmoQ1kMVftrhHgccQrHUg3JkI";

const URL = "https://striveschool-api.herokuapp.com/api/product/" ;


const crea = document.getElementById("btnCrea");

crea.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const brand = document.getElementById("brand").value
  const description = document.getElementById("description").value;
  const price = document.getElementById('price').value; 
  const imageUrl = document.getElementById('imageUrl').value;

  const product = {
    name: name,
    brand: brand,
    description: description,
    price: Number(price),
    imageUrl : imageUrl,
  };

  call(product); 
})

async function call(product) {


    const response = await fetch(`${URL}`, {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${apiKey}`,
      },
      body: JSON.stringify(product),
      }
    );

    const data = await response.json();
    console.log(data);
/*
    Swal.fire({
      title: "Fatto!",
      text: "Prodotto creato con successo!",
      icon: "success"
    }).then(()=>{
        stopLoading()
      })*/

}





