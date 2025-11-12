
const anchorTags = document.getElementsByTagName("a");
console.log("All Anchor tags :", anchorTags);

// adding new element in header section

const loginItem = document.createElement("li");
loginItem.innerHTML = `<a href="#" class="nav-item">Login</a>`;
console.log("Created Element:", loginItem);

const ullistupdate = document.getElementById("nav-list")
ullistupdate.appendChild(loginItem);

// --- READ & UPDATE ---
const offersItem = document.getElementById("gallery");

// Read text content
console.log("Before Update - Offers Text:", offersItem.textContent);

// // Update text content
offersItem.textContent = "Mega Offers";
console.log("After Update - Offers Text:", offersItem.textContent);

// --- INSERT ---
ullistupdate.insertBefore(loginItem, offersItem); // Insert Login before Offers
console.log("Inserted 'Login' before 'Offers'");

// Replacing Item in navbar

// creating newitem first

const supportItem = document.createElement("li");
supportItem.innerHTML = `<a href ="#" class="nav-item">Support</a>`;

const olditem = ullistupdate.lastElementChild;
ullistupdate.replaceChild(supportItem,olditem);


// Example for Array Method
const numlist = [10, 20, 30, 40 , 50];
// without using curly braces
// const squarenum = numlist.map((num) => num * num);
// if we use curly BroadcastChannel, then need to use return inside curly braces
const squarenum = numlist.map((num) => {return num * num});
console.log(squarenum)

// DOM Attribute Manipulation

const searchbtn = document.getElementById("searchBtn");

searchbtn.setAttribute("title", "Click to search buses");
console.log(searchbtn);

searchbtn.setAttribute("data-type", "Primary")
console.log(searchbtn);

searchbtn.removeAttribute("class");
console.log(searchbtn);
