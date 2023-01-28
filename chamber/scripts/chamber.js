// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
// long, medium, short options ... try them
datefield.innerHTML = `<em>${fulldate}</em>`;



function main()
{
    let date = document.lastModified;
    const year = new Date();
    document.getElementById("updated").innerText = "Last Updated on : " + date;
    document.getElementById("year").innerText = "© " + year.getFullYear() + " Citizens Chamber of Commerce";
}

main();