// const url = 'https://firebasestorage.googleapis.com/v0/b/schooltest-1cb48.appspot.com/o/data.json?alt=media&token=ca78974a-2c91-4aee-b385-0b653e61b99e';


// async function getData() {
//     const response = await fetch(url);
//     const data = await response.json();
//     displayCompanies(data.companies)
//     }

//     getData();

//     const displayCompanies = (companies) => {
//     const cards = document.querySelector('div.cards'); // select the output container element
    
//     companies.forEach((company) => {
//         // Create elements to add to the div.cards element
//         let card = document.createElement('section');
//         let name = document.createElement('h2');
//         let address = document.createElement('h3');
//         let phone = document.createElement('h3');

//         // Append the section(card) with the created elements
//         card.appendChild(name);
//         card.appendChild(address);
//         card.appendChild(phone);

//         cards.appendChild(card);
//     }) // end of forEach loop
// } // end of function expression


// I am unable to fetch information from the JSon. It does not want to work for me even though I followed all the instructions for it. 
// I have gone with the solution below due to this fact.



const companies = [
    {
      "name": "Pixel Playground",
      "address": "1234 Main St, Suite 100, Anytown, USA",
      "phone": "+1 (555) 123-4567",
      "member": "gold"
    },
    {
      "name": "Arcade Avenue",
      "address": "5678 Second St, Suite 200, Anytown, USA",
      "phone": "+1 (555) 987-6543",
      "member": "gold"
    },
    {
      "name": "Game Galaxy",
      "address": "2468 Third St, Suite 300, Anytown, USA",
      "phone": "+1 (555) 555-1212",
      "member": "gold"
    },
    {
      "name": "Virtual Ventures",
      "address": "1357 Fourth St, Suite 400, Anytown, USA",
      "phone": "+1 (555) 867-5309",
      "member": "gold"
    },
    {
      "name": "Digital Dreamland",
      "address": "3690 Fifth St, Suite 500, Anytown, USA",
      "phone": "+1 (555) 555-5555",
      "member": "gold"
    },
    {
      "name": "Pixelated Playtime",
      "address": "2468 Sixth St, Suite 600, Anytown, USA",
      "phone": "+1 (555) 222-3333",
      "member": "gold"
    },
    {
      "name": "Gaming Galaxy",
      "address": "1357 Seventh St, Suite 700, Anytown, USA",
      "phone": "+1 (555) 444-5555",
      "member": "gold"
    },
    {
      "name": "Tech Toybox",
      "address": "3690 Eighth St, Suite 800, Anytown, USA",
      "phone": "+1 (555) 123-7890",
      "member": "gold"
    },
    {
      "name": "Virtual World",
      "address": "2468 Ninth St, Suite 900, Anytown, USA",
      "phone": "+1 (555) 555-1212",
      "member": "gold"
    }
  ];


function setData()
{

   // Get the cards div element
    const cards = document.querySelector('.cards');

    // Loop through the companies array and create a card for each one
    companies.forEach(company => {
    // Create a new section element for the card
    const card = document.createElement('section');
    card.classList.add('card');

    // Create h2, p, and span elements for the company data
    const name = document.createElement('h2');
    const address = document.createElement('h3');
    const phone = document.createElement('h3');
    name.classList.add("cardInfo");
    address.classList.add("cardInfo");
    phone.classList.add("cardInfo");


    // Build the h2 content
    name.textContent = `${company.name}`;
    address.textContent = `Address: ${company.address}`;
    phone.textContent = `Phone: ${company.phone}`;

    // Append the section(card) with the created elements
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);

    // Append the card to the cards container
    cards.appendChild(card);
    });
}

setData();
