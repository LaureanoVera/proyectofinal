const API = "https://randomuser.me/api/";

const cvImage = document.getElementById("cv-image");
const profileName = document.getElementById("name");
const contact = document.getElementById("contact");
const dateEl = document.getElementById("date");
const button = document.getElementById("button");
const buttonContainer = document.getElementById("button-li");

const handleData = (data) => {
  console.log(data);
  const {
    picture,
    name,
    phone,
    email,
    dob,
    location: { city, state },
  } = data;
  let [y, m, d] = dob.date.split("T")[0].split("-");

  cvImage.src = picture.large;
  profileName.innerText = `${name.first} ${name.last}`;
  contact.innerHTML = `
  <li>Phone: ${phone}</li>
  <li>Email: ${email}</li>
  <li>City: ${city}, ${state}</li>
  `;
  dateEl.innerText = `${y}/${m}/${d}`;
};

const handleClick = () => {
  window.alert("Sorry, portfolio under maintenance");
};

button.addEventListener("click", handleClick);

fetch(API)
  .then((res) => res.json())
  .then((data) => handleData(data.results[0]))
  .catch((err) => console.log(err));
