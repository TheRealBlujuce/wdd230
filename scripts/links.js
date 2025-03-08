const baseURL = "https://therealblujuce.github.io/wdd230/"; // Update if needed
const linksURL = "data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.lessons);
    } catch (error) {
        console.error("Error loading JSON data:", error);
    }
}

function displayLinks(lessons) {
    const list = document.querySelector(".list");
    list.innerHTML = ""; // Clear static links

    lessons.forEach(lesson => {
        const listItem = document.createElement("li");
        listItem.textContent = `Lesson ${lesson.lesson}: `;

        lesson.links.forEach(link => {
            const anchor = document.createElement("a");
            anchor.href = `${baseURL}${link.url}`;
            anchor.textContent = link.title;
            anchor.style.marginRight = "10px"; // Add spacing
            listItem.appendChild(anchor);
        });

        list.appendChild(listItem);
    });
}

getLinks();
