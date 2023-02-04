// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
// long, medium, short options ... try them
datefield.innerHTML = `<em>${fulldate}</em>`;

// for banner
const currentDay = new Date();
let today = currentDay.getDay();
let showBanner = false;
let showMsgOne = false;
let showMsgTwo = false;

// main function
function main()
{
    let date = document.lastModified;
    const year = new Date();
    document.getElementById("updated").innerText = "Last Updated on : " + date;
    document.getElementById("year").innerText = "© " + year.getFullYear() + " Citizens Chamber of Commerce";

    DisplayBanner();

    if (showBanner)
    {
        document.getElementById("banner").style.display = "block";
    }
    else
    {
        document.getElementById("banner").style.display = "none";
    }

}


function DisplayBanner()
{
    switch(today)
    {
        case 1:
            showBanner = true;
            showMsgOne = true;
            break;
        case 2:
            showBanner = true;
            showMsgOne = true;
            break;
        case 6:
            showBanner = true;
            showMsgTwo = true;
            break;
        default:
            showBanner = false;
            showMsgOne = false;
            showMsgTwo = false;
            break;
    }
}


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 

main();