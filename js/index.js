const input = document.getElementById('input');

// Enter key
document.getElementById("input")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("add-button").click();
        }
    });

const inputInfo = document.getElementById("inputInfo");

window.onload = function () {
    document.getElementById("input").focus();
};

var categories = [
    // Beverages
    ["coke"],
    // Bread
    ["ciabatta", "baguette", "bagels", "bread", "white bread", "brown bread", "wholemeal bread"],
    // Cleaners
    ["bleach"],
    // Dairy
    ["milk", "butter", "yogurt"],
    // Dry / Baking Goods
    ["cereals"],
    // Frozen
    ["frozen pizza", "frozen peas", "frozen vegetables"],
    // Fruit & Veg
    ["bananas", "apples", "oranges", "lemons", "mango", "passionfruit", "broccoli"],
    // Health
    ["vitamins"],
    // Meat
    ["proscuitto crudo", "proscuitto cotto", "pancetta"],
    // Paper goods
    ["towels"],
    // Personal Care
    ["cream"],
    // Tins and Jars
    ["peas", "tuna"]
]

let beverages = localStorage.getItem('beverages') ? JSON.parse(localStorage.getItem('beverages')) : [];
// etc

const beveragesList = document.getElementById("beverages");
const breadList = document.getElementById("bread");
const cleanersList = document.getElementById("cleaners");
const dairyList = document.getElementById("dairy");
const dryList = document.getElementById("dry");
const frozenList = document.getElementById("frozen");
const produceList = document.getElementById("produce");
const healthList = document.getElementById("health");
const meatList = document.getElementById("meat");
const paperList = document.getElementById("paper");
const careList = document.getElementById("care");
const tinList = document.getElementById("tin");
const otherList = document.getElementById("other");
var focusList = '';



function addItem(input) {

    if (input.value !== '') {
        // Beverages
        if (categories[0].includes(input.value.toLowerCase())) {
            focusList = beveragesList;
        }
        // Bread
        else if (categories[1].includes(input.value.toLowerCase())) {
            focusList = breadList;
        }
        // Cleaners
        else if (categories[2].includes(input.value.toLowerCase())) {
            focusList = cleanersList;
        }
        // Dairy
        else if (categories[3].includes(input.value.toLowerCase())) {
            focusList = dairyList;
        }
        // Dry / Baking Goods
        else if (categories[4].includes(input.value.toLowerCase())) {
            focusList = dryList;
        }
        // Frozen
        else if (categories[5].includes(input.value.toLowerCase())) {
            focusList = frozenList;
        }
        // Fruit & Veg
        else if (categories[6].includes(input.value.toLowerCase())) {
            focusList = produceList;
        }
        // Health
        else if (categories[7].includes(input.value.toLowerCase())) {
            focusList = healthList;
        }
        // Meat
        else if (categories[8].includes(input.value.toLowerCase())) {
            focusList = meatList;
        }
        // Paper Goods
        else if (categories[9].includes(input.value.toLowerCase())) {
            focusList = paperList;
        }
        // Personal Care
        else if (categories[10].includes(input.value.toLowerCase())) {
            focusList = careList;
        }
        // Tinned & Jarred
        else if (categories[11].includes(input.value.toLowerCase())) {
            focusList = tinList;
        }
        // Other
        else {
            focusList = otherList;
        }
    }
    // Empty
    else {
        inputInfo.innerHTML = "Please type something";
        document.getElementById("input").focus();
    }

    focusList.style.display = "block";
    liMaker(input.value);
    input.value = '';
    document.getElementById("input").focus();
}


const liMaker = text => {
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    var span = document.createElement("span");
    span.textContent = ` ${input.value}`;
    focusList.appendChild(li);
    focusList.appendChild(span);
    var br = document.createElement("br");
    focusList.appendChild(br);
}

const data = localStorage.getItem('shopping-items') ? JSON.parse(localStorage.getItem('shopping-items')) : [];

data.forEach(item => {
    liMaker(item)
})


function randPlaceholder() {
    let randCategory = Math.floor(Math.random() * (categories.length));
    let randItem = Math.floor(Math.random() * (categories[randCategory].length));
    input.placeholder = `Try adding ${categories[randCategory][randItem]}...`;
}

randPlaceholder();
