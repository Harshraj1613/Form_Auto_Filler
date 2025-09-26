document.getElementById("save").addEventListener("click",()=>{
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    contact: document.getElementById("contact").value,
    roll_no: document.getElementById("roll_no.").value,
    section: document.getElementById("section").value,
    course: document.getElementById("course").value,
    semester: document.getElementById("semester").value,
    college: document.getElementById("college").value,
    address: document.getElementById("address").value,
    about: document.getElementById("about").value
  };
  
  localStorage.setItem("userData", JSON.stringify(data));
  alert("Data Saved");
});