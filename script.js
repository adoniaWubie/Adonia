/* const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const sectionPopup = document.querySelector(".section-popup");
const emailAddress = email.value;

let tableRow = document.createElement("tr");
let tableColumn1 = document.createElement("td");
let tableColumn2 = document.createElement("td");
let tableColumn3 = document.createElement("td");
let table = document.querySelector(".tbody");

// Load data from local storage, or create an empty array
let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

// Populate table with existing submissions on page load
submissions.forEach((submission) => {
  let tableRow = document.createElement("tr");
  let tableColumn1 = document.createElement("td");
  let tableColumn2 = document.createElement("td");
  let tableColumn3 = document.createElement("td");

  tableColumn1.textContent = submission.firstName;
  tableColumn2.textContent = submission.lastName;
  tableColumn3.textContent = submission.email;

  tableRow.appendChild(tableColumn1);
  tableRow.appendChild(tableColumn2);
  tableRow.appendChild(tableColumn3);

  table.appendChild(tableRow);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
  const submission = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
  };
  const fullName = `${firstName.value} ${lastName.value}`;
  tableColumn1.textContent = submission.firstName;
  tableColumn2.textContent = submission.lastName;
  tableColumn3.textContent = submission.email;
  tableRow.appendChild(tableColumn1);
  tableRow.appendChild(tableColumn2);
  tableRow.appendChild(tableColumn3);
  table.appendChild(tableRow);

  sectionPopup.textContent = `Hello ${fullName}, you have registered successfully`;

  submissions.push(submission);
  localStorage.setItem("submissions", JSON.stringify(submissions));

  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password.value = "";

  sectionPopup.classList.add("come-back");
  setTimeout(() => {
    sectionPopup.classList.remove("come-back");
  }, 3000);
});
*/

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const sectionPopup = document.querySelector(".section-popup");

// Load data from local storage, or create an empty array
let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

// Populate table with existing submissions on page load
const table = document.querySelector(".tbody");
submissions.forEach((submission) => {
  const tableRow = document.createElement("tr");
  const tableColumn1 = document.createElement("td");
  const tableColumn2 = document.createElement("td");
  const tableColumn3 = document.createElement("td");
  tableColumn1.setAttribute("data-cell", "First name");
  tableColumn2.setAttribute("data-cell", "Last name");
  tableColumn3.setAttribute("data-cell", "Email");
  tableColumn1.classList.add("fadeIn");
  tableColumn2.classList.add("fadeIn");
  tableColumn3.classList.add("fadeIn");

  tableColumn1.textContent = submission.firstName;
  tableColumn2.textContent = submission.lastName;
  tableColumn3.textContent = submission.email;

  tableRow.appendChild(tableColumn1);
  tableRow.appendChild(tableColumn2);
  tableRow.appendChild(tableColumn3);

  table.appendChild(tableRow);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = `${firstName.value} ${lastName.value}`;
  sectionPopup.textContent = `Hello ${fullName}, Thank you for the form`;
  sectionPopup.classList.add("come-back");

  const submission = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
  };

  // Append new submission to table
  const tableRow = document.createElement("tr");
  const tableColumn1 = document.createElement("td");
  const tableColumn2 = document.createElement("td");
  const tableColumn3 = document.createElement("td");

  tableColumn1.textContent = submission.firstName;
  tableColumn2.textContent = submission.lastName;
  tableColumn3.textContent = submission.email;

  tableRow.appendChild(tableColumn1);
  tableRow.appendChild(tableColumn2);
  tableRow.appendChild(tableColumn3);

  table.appendChild(tableRow);

  // Add new submission to local storage
  submissions.push(submission);
  localStorage.setItem("submissions", JSON.stringify(submissions));

  // Clear input values
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password.value = "";
  document.querySelectorAll(".inputs").forEach((input) => {
    input.checked = false;
    console.log(input);
  });
  sectionPopup.classList.add("come-back");
  setTimeout(() => {
    sectionPopup.classList.remove("come-back");
  }, 3000);
});
