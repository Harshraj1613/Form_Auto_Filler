(async () => {
  console.log("✅ Auto Filler content script loaded!");

  const result = await chrome.storage.sync.get("userData");
  const data = result.userData;
  console.log("📦 Loaded userData:", data);

  if (!data) return;

  const fields = document.querySelectorAll('input[type="text"], input[type="email"], textarea');

  fields.forEach(field => {
    let label = "";

    const labelElement =
      field.closest("div[role='listitem']")?.querySelector("div[role='heading']") ||
      field.closest(".Qr7Oae")?.querySelector(".M7eMe") ||
      field.closest("div")?.querySelector("label") ||
      field.closest("div")?.previousElementSibling;

    if (labelElement) label = labelElement.textContent.trim().toLowerCase();
    console.log("🔍 Field label detected:", label);

    // Flexible matching for common variations
    if (label.includes("name")) field.value = data.name || "";
    else if (label.includes("email")) field.value = data.email || "";
    else if (label.includes("contact") || label.includes("phone") || label.includes("mobile")) 
      field.value = data.contact || "";
    else if (label.includes("college")) field.value = data.college || "";
    else if (label.includes("course")) field.value = data.course || "";
    else if (label.includes("section")) field.value = data.section || "";
    else if (label.includes("semester")) field.value = data.semester || "";
    else if (label.includes("address")) field.value = data.address || "";
    else if (label.includes("University/Class Roll No.")) field.value = data.roll_no || "";
    else if (label.includes("about") || label.includes("bio")) field.value = data.about || "";

    // Handle variations like "Email Address", "Mobile Number", etc.
    else if (label.includes("email address")) field.value = data.email || "";
    else if (label.includes("mobile number")) field.value = data.contact || "";
    else if (label.includes("college name")) field.value = data.college || "";
    else if (label.includes("course name")) field.value = data.course || "";
  });

  console.log("✅ Auto-filling complete!");
})();

