
async function getData() {
    const response = await fetch('randomdata.json');
    const data = await response.json();

    let randomIndexOne = Math.floor(Math.random() * data.companies.length)
    let randomIndexTwo = Math.floor(Math.random() * data.companies.length)

    if (randomIndexOne == randomIndexTwo)
    {
      randomIndexOne = Math.floor(Math.random() * data.companies.length)
      randomIndexTwo = Math.floor(Math.random() * data.companies.length)
    }

    displayCompanyOne(data.companies[randomIndexOne])

    

    displayCompanyTwo(data.companies[randomIndexTwo])

    }


  const displayCompanyOne = (company) => {
    
        // get the card
        let card = document.getElementById("comp1")
        // Create elements to add to the div.cards element
        let name = document.createElement('h2');
        let address = document.createElement('h3');
        let phone = document.createElement('h3');

        // Create h2, p, and span elements for the company data
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

} // end of function expression

  const displayCompanyTwo = (company) => {
    
        // get the card
        let card = document.getElementById("comp2")
        // Create elements to add to the div.cards element
        let name = document.createElement('h2');
        let address = document.createElement('h3');
        let phone = document.createElement('h3');

        // Create h2, p, and span elements for the company data
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


} // end of function expression

getData();