
let Main = document.querySelector("main"); // correct selector

async function getData() {
  
    let Res = await axios.get("http://127.0.0.1:8000/api/carsview/dashboard/");
    displayData(Res.data);
}

function displayData(data) {
  Main.innerHTML="";
  for (let i of data) {
    Main.innerHTML += `
      <div class="card">
        <div>
          <i><img src="${i.Photo}" alt=""></i>    
        </div>
        <div class="card-content">
          <h2>${i.Name}</h2>
          <h3>${i.Brand}</h3>
          <p>
            <span class="spec-tag">Max Speed: ${i.TopSpeed} Km/hr</span>
            <span class="spec-tag">Mileage: ${i.Mileage} Kmpl</span>
          </p>
          
          <button>Book now!</button>
        </div>
      </div>
    `;
  }
}
getData();