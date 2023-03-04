const dataPath = "C:\Users\Kobe\Documents\GitHub\WDD230\chamber\json\data.json"

async function fetchData() {
    const response = await fetch('../json/data.json');
    const data = await response.json();
    const companies = data.companies;

    const cardsContainer = document.querySelector('.cards');

    companies.forEach(company => {
      const card = document.createElement('div');
      card.classList.add('card');

      const name = document.createElement('h2');
      name.textContent = company.name;
      card.appendChild(name);

      const address = document.createElement('p');
      address.textContent = company.address;
      card.appendChild(address);

      const phone = document.createElement('p');
      phone.textContent = company.phone;
      card.appendChild(phone);

      cardsContainer.appendChild(card);
    });
  }

  fetchData().catch(error => console.error(error));

