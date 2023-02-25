
const freePrice = 0;
const goldPrice = 50;
const platPrice = 75;
const diamondPrice = 100;

const curDate = new Date();
const curTime = new Date();

let currentMembershipSelection = document.getElementById("membership");

function main()
{
    
    document.getElementById("date").innerText = curDate.getDay();
    document.getElementById("time").innerText = curDate.getMinutes();
    

    GetMembershipPrice();


}

main();

function GetMembershipPrice()
{

    switch (currentMembershipSelection.value)
    {
        case "free":
            document.getElementById("mFee").innerText = "One Time Membership Fee: $" + freePrice;
            break;
        case "gold":
            document.getElementById("mFee").innerText = "One Time Membership Fee: $" + goldPrice;
            break;
        case "plat":
            document.getElementById("mFee").innerText = "One Time Membership Fee: $" + platPrice;
            break;
        case "diamond":
            document.getElementById("mFee").innerText = "One Time Membership Fee: $" + diamondPrice;
            break;
    }

}