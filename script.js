function promptNumber() {
  let number;
  do {
    number = prompt("Please enter a number:");
  } while (isNaN(number) || number === null || number.trim() === "");

  number = parseInt(number);
  const output = document.getElementById("output");

  let shape = "Number inputted: " + number + "\n\n";
  const digitWidth = String(number).length; 
  
  if (number % 2 !== 0) {
    for (let i = number; i >= 1; i--) {
      let line = "";
      for (let j = 0; j < number; j++) {
        line += String(i).padStart(digitWidth, " ") + " ";
      }
      shape += line.trimEnd() + "\n"; 
    }
  } else {
    for (let i = number; i >= 1; i--) {
      let line = "";
      for (let j = 0; j < i; j++) {
        line += String(i).padStart(digitWidth, " ") + " ";
      }
      shape += line.trimEnd() + "\n";
    }
  }
  output.textContent = shape;
}

const contacts = [];

function addContact() {
    const input = document.getElementById("contact-input");
    const name = input.value; 
    if (name === "") return;
  
    if (contacts.length === 7) {
      contacts.shift(); 
    }
    contacts.push(name);
    input.value = "";
    renderContacts();
}  

function removeContact() {
  contacts.pop();
  renderContacts();
}

function renderContacts() {
  const list = document.getElementById("contacts-list");
  list.innerHTML = "";
  contacts.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
}

