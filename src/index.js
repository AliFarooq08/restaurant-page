import "./styles.css";
import krabbyImage from "./chrome-krabby-patty.png"
import kelpImg from "./chrome-kelp-shake.png"
import krustyKrabImg from "./chrome-krusty-krab.png"


let content = document.querySelector("#content")
let homeButton = document.querySelector("#home-button")
let menuButton = document.querySelector("#menu-button")
let locationButton = document.querySelector("#location-button")

//Home Button Functionality
homeButton.addEventListener("click", () => {
    content.innerHTML = ""; // Clears the child elements of the content div

    //Home Title Element
    let homeTitle = document.createElement("h1");
    homeTitle.setAttribute("id", "title");
    homeTitle.textContent = "W31C0M3 70 7H3 KRU57Y KR48";
    content.appendChild(homeTitle);

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
    name.textContent = "- 5P0N637R0N";
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

homeButton.click() // Initializes Home Screen on Page Start

menuButton.addEventListener("click", () => {
    content.innerHTML = ""; // Clears the child elements of the content div

    //Menu Title Element
    let menuTitle = document.createElement("h2");
    menuTitle.textContent = "M3NU 173Ms";
    menuTitle.setAttribute("id", "title");
    content.appendChild(menuTitle);

    //Menu Element
    let menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    content.appendChild(menu);

    //Item 1 Element
    let item1 = document.createElement("div");
    item1.setAttribute("class", "item1")
    menu.appendChild(item1)

    //Image of Chrome Krabby Patty
    let imgKrabby = document.createElement("img")
    imgKrabby.setAttribute("class", "img-krabby")
    imgKrabby.setAttribute("src", krabbyImage)
    imgKrabby.setAttribute("alt", "7H3 W0ND3RFU1 CHR0M3 KR488Y P477Y")
    item1.appendChild(imgKrabby)

    //Chrome Krabby Patty Title
    let pattyTitle = document.createElement("h2")
    pattyTitle.setAttribute("class", "patty")
    pattyTitle.textContent = "CHR0M3 KR488Y P477Y"
    item1.appendChild(pattyTitle)

    //Chrome Krabby Patty Description
    let pattyDescription = document.createElement("p")
    pattyDescription.textContent = "4 CU570M3R F4V0R173, 7H3 CHR0M3 KR488Y P477Y 15 3NJ0Y3D 8Y 411."
    item1.appendChild(pattyDescription)

    //Item 2 Element
    let item2 = document.createElement("div");
    item2.setAttribute("class", "item2")
    menu.appendChild(item2)

    //Image of Chrome Kelp Shake
    let imgKelpShake = document.createElement("img")
    imgKelpShake.setAttribute("class", "img-kelp-shake")
    imgKelpShake.setAttribute("src", kelpImg) //Just learn you can do (img.src = "") ... SUCH A GREAT TIME SAVE THOUGH THIS WAS SO ANNOYING, but I continue until location button
    imgKelpShake.setAttribute("alt", "7H3 R3FR35H1N9 K31P 5H4K3")
    item2.appendChild(imgKelpShake)

    //Chrome Kelp Shake Title
    let kelpShake = document.createElement("h2")
    kelpShake.setAttribute("class", "kelp-shake")
    kelpShake.textContent = "CHR0M3 K31P 5H4K3"
    item2.appendChild(kelpShake)

    //Chrome Kelp Shake Description
    let kelpShakeDescription = document.createElement("p")
    kelpShakeDescription.textContent = "7H3 8357 7H1N9 70 90 W17H 4 CHR0M3 KR488Y P477Y."
    item2.appendChild(kelpShakeDescription)
})
locationButton.addEventListener("click", () => {
    content.innerHTML = ""; // Clears the child elements of the content div

    //Location Title Element --- just started to change formatting for practice
    let locationTitle = document.createElement("h2")
    locationTitle.id = "title"
    locationTitle.textContent = "0UR 570R3 10C4710N:"
    content.appendChild(locationTitle)
    
    //Location Element
    let location = document.createElement("div")
    location.id = "location"
    content.appendChild(location)

    //Chrome Krusty Krab Img
    let krustyKrab = document.createElement("img")
    krustyKrab.src = krustyKrabImg
    krustyKrab.class = "krusty-krab"
    krustyKrab.alt = "4 834U71FU1 1M463 0F KRU57Y KR48."
    location.appendChild(krustyKrab)
    
    //Location text
    let locationDesc = document.createElement("p")
    locationDesc.innerHTML = "<strong>7313P0R7 T0:</strong> 831 B0770M F33D3R 1N. B1K1N1 B0770M, P4C1F1C 0C34N <strong>(7313P0R7 C0D3: KKB357).</strong>"
    location.appendChild(locationDesc)
})