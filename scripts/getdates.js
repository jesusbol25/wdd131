// 1. This to obtain the current year for the copyright
const yearSpan = document.querySelector("#currentyear");
const today = new Date();
yearSpan.innerHTML = today.getFullYear();

// 2. Obtaining the date for the last modification of the file
const lastModParagraph = document.querySelector("#lastModified");
lastModParagraph.innerHTML = `Last Modification: ${document.lastModified}`;