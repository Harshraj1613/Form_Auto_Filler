document.getElementById("save").addEventListener("click", () => {
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    contact: document.getElementById("contact").value,
    roll_no: document.getElementById("University roll no").value,
    section: document.getElementById("section").value,
    course: document.getElementById("course").value,
    semester: document.getElementById("semester").value,
    college: document.getElementById("college").value,
    address: document.getElementById("address").value,
    about: document.getElementById("about").value
  };

  chrome.storage.sync.set({ userData: data }, () => {
    alert("✅ Data Saved Successfully!");
  });
});

// Load previously saved data when popup opens
window.addEventListener("load", () => {
  chrome.storage.sync.get("userData", (result) => {
    if (result.userData) {
      for (const key in result.userData) {
        const el = document.getElementById(key);
        if (el) el.value = result.userData[key];
      }
    }
  });
});
