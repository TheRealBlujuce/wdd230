const lastModifiedDate = new Date(document.lastModified);
const lastModified = document.getElementById("modified");
console.log(lastModified)
lastModified.innerHTML = `Last updated: ${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;