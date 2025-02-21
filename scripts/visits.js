// Check if 'pageVisits' exists in localStorage
if (localStorage.getItem('pageVisits')) {
    // If it exists, increment the counter
    let visits = parseInt(localStorage.getItem('pageVisits')) + 1;
    localStorage.setItem('pageVisits', visits);
} else {
    // If not, initialize the counter
    localStorage.setItem('pageVisits', 1);
}

// Update the counter on the page
document.getElementById('page-visit-counter').textContent = 'Page visits: ' + localStorage.getItem('pageVisits');
