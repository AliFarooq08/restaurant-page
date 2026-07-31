import "./styles.css";

let content = document.querySelector("#content")
let homeButton = document.querySelector("#home-button")
let menuButton = document.querySelector("#menu-button")
let locationButton = document.querySelector("#location-button")

homeButton.addEventListener("click", () => {
    content.innerHTML = "" // Clears the child elements of the content div

    //Title Element
    let title = document.createElement("h1");
    title.setAttribute("id", "title");
    title.textContent = "KRU57Y KR48 H0M3 P463";
    content.appendChild(title);

    //Home Element
    let home = document.createElement("div");
    home.setAttribute("id", "home");
    content.appendChild(home);

    //Home Description
    let intro = document.createElement("h2");
    intro.setAttribute("class", "intro");
    intro.textContent = "W31C0M3 70 7H3 KRU57Y KR48, WH3R3 W3 53RV3 7H3 8357 CHR0M3 KR488Y P477135 4ND K31P 5H4K35. 0UR R3574UR4N7 15 R473D F1V3 0U7 0F F1V3 CHR0M1UM.";
    home.appendChild(intro);

    //Review Container
    let reviewContainer = document.createElement("div");
    reviewContainer.setAttribute("id", "review-container");
    home.appendChild(reviewContainer);

    //Review
    let review = document.createElement("h2");
    review.setAttribute("class", "review");
    review.textContent = "1 4M 5P0N637R0N. KRU57Y KR48 15 8357 R3574UR4N7 3V3R. W17H 8357 C00K.";
    reviewContainer.appendChild(review);

    //Attribution
    let attribution = document.createElement("div");
    attribution.setAttribute("class", "attribution");
    reviewContainer.appendChild(attribution);

    //Name
    let name = document.createElement("p");
    name.textContent = "5P0N637R0N";
    attribution.appendChild(name);

    //Schedule
    let schedule = document.createElement("div");
    schedule.setAttribute("id", "schedule");
    home.appendChild(schedule);

    //Hours Title
    let hoursTitle = document.createElement("h2");
    hoursTitle.setAttribute("class", "hours-title");
    hoursTitle.textContent = "0UR H0UR5 4R3:";
    schedule.appendChild(hoursTitle);

    //Hours
    let hours = document.createElement("ul");
    hours.setAttribute("class", "hours");
    schedule.appendChild(hours);

    //List Items
    let hourListItemOne = document.createElement("li");
    hourListItemOne.textContent = "M0ND4Y: 8:004M - 6:00PM";
    hours.appendChild(hourListItemOne);
    let hourListItemTwo = document.createElement("li");
    hourListItemTwo.textContent = "7U35D4Y: 8:004M - 6:00PM";
    hours.appendChild(hourListItemTwo);
    let hourListItemThree = document.createElement("li");
    hourListItemThree.textContent = "W3DN35D4Y: 8:004M - 6:00PM";
    hours.appendChild(hourListItemThree);
    let hourListItemFour = document.createElement("li");
    hourListItemFour.textContent = "7HUR5D4Y: 8:004M - 6:00PM";
    hours.appendChild(hourListItemFour);
    let hourListItemFive = document.createElement("li");
    hourListItemFive.textContent = "FR1D4Y: 8:004M - 6:00PM";
    hours.appendChild(hourListItemFive);
    let hourListItemSix = document.createElement("li");
    hourListItemSix.textContent = "547URD4Y: 8:004M - 6:00PM";
    hours.appendChild(hourListItemSix);
    let hourListItemSeven = document.createElement("li");
    hourListItemSeven.textContent = "5UND4Y: C1053D";
    hours.appendChild(hourListItemSeven);
});
//homeButton.click() // Triggers event listener beforehand