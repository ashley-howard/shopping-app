const input = document.getElementById('input');
const inputInfo = document.getElementById("inputInfo");

window.onload = function () {
    document.getElementById("input").focus();
};

var categories = [
    // Bread
    ["ciabatta", "baguette", "bagels", "bread", "white bread", "brown bread", "wholemeal bread"],
    // Dairy
    ["milk", "butter", "yogurt"],
    // Frozen
    ["frozen pizza", "frozen peas", "frozen vegetables"],
    // Fruit & Veg
    ["bananas", "apples", "oranges", "lemons", "mango", "passionfruit", "broccoli"],
    // Health
    ["vitamins"],
    // Meat
    ["proscuitto crudo", "proscuitto cotto", "pancetta"],
    // tinjar
    ["peas", "tuna"]
]

const breadList = document.getElementById("bread");
const dairyList = document.getElementById("dairy");
const frozenList = document.getElementById("frozen");
const fruitVegList = document.getElementById("fruitveg");
const healthList = document.getElementById("health");
const meatList = document.getElementById("meat");
const tinnedList = document.getElementById("tinjar");
const otherList = document.getElementById("other");
var focusList = '';

const data = JSON.parse(localStorage.getItem('items'));

function addItem(input) {
    // Bread
    if (categories[0].includes(input.value.toLowerCase())) {
        focusList = breadList;
    }
    // Dairy
    else if (categories[1].includes(input.value.toLowerCase())) {
        focusList = dairyList;
    }
    // Frozen
    else if (categories[2].includes(input.value.toLowerCase())) {
        focusList = frozenList;
    }
    // Fruit & Veg
    else if (categories[3].includes(input.value.toLowerCase())) {
        focusList = fruitVegList;
    }
    // Health
    else if (categories[4].includes(input.value.toLowerCase())) {
        focusList = healthList;
    }
    // Meat
    else if (categories[5].includes(input.value.toLowerCase())) {
        focusList = meatList;
    }
    // Tinned & Jarred
    else if (categories[6].includes(input.value.toLowerCase())) {
        focusList = tinnedList;
    }
    // Empty
    else if (input.value === '' || input.value === ' ') {
        inputInfo.innerHTML = "Please type something";
    }
    else {
        focusList = otherList;
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

data.forEach(item => {
    liMaker(item)
})

// Enter key
document.getElementById("input")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("add-button").click();
        }
    });