const rentalList = document.getElementById('rental-list');
const rentalTable = document.querySelector('#rental-table tbody');

fetch('data/rentals.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(rental => {
      // Create rental cards
      const card = document.createElement('div');
      card.classList.add('rental-card');
      card.innerHTML = `
        <img src="${rental.image}" alt="${rental.type}">
        <h3>${rental.type}</h3>
        <p><strong>Max Persons:</strong> ${rental.maxPersons}</p>
        <p><strong>Half Day:</strong> $${rental.halfDay}</p>
        <p><strong>Full Day:</strong> $${rental.fullDay}</p>
      `;
      rentalList.appendChild(card);

      // Add to table
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${rental.type}</td>
        <td>${rental.maxPersons}</td>
        <td>$${rental.halfDay}</td>
        <td>$${rental.fullDay}</td>
      `;
      rentalTable.appendChild(row);
    });
  })
  .catch(error => console.error('Error loading rentals:', error));
