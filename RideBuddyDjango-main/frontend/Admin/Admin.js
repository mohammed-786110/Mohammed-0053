
const Myform = document.getElementById("vehicleForm");
let Tbody=document.querySelector("tbody")

Myform.addEventListener("submit", async (e) => {
  e.preventDefault();

  const Data = {
    Photo: e.target[0].value,
    Name: e.target[1].value,
    Brand: e.target[2].value,
    Mileage: e.target[3].value,
    TopSpeed: e.target[4].value,
  };

  try {
    const Res = await axios.post("http://127.0.0.1:8000/api/carsview/create/", Data);

    
    if (Res.status === 201) {
      alert("Data Submitted Successfully");
      Myform.reset();
    } 
  }
   catch (err) {
    console.error("Submission error:", err);
    alert("Error Submitting Data");
  }
});

async function getData() {
  let Res = await axios.get("http://127.0.0.1:8000/api/carsview/dashboard/")
  Display(Res.data);
}
getData();

function Display(data) {
  Tbody.innerHTML = "";
  data.forEach((e) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${e.id}</td>
      <td>${e.Name}</td>
      <td>${e.Brand}</td>
      <td><img src="${e.Photo}" alt="Poster" style="width:50px;height:50px;"></td>
      <td> <button onclick="handleDelete(${e.id})">Delete</button></td>
      <td><button onclick="handleUpdate(${e.id})">Update</button></td>
      

    `;
    Tbody.appendChild(tr);

  });
}
getData();


async function handleDelete(id){
  if(confirm("Are you sure you want to delete this data?"))
   try{
  let Res=await axios.delete(`http://127.0.0.1:8000/api/carsview/delete/${id}`)
  alert("Data Deleted Successfully!")
  getData()
 } 
 catch(error){
  console.log(error)
  alert("Data not Deleted!")
 }
}

async function handleUpdate() {
  alert("Alert functionality not added for Update Feature! Sorry for Inconvinience")
  }