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
    ["coke", "pepsi", "water"],
    // Bread
    ["ciabatta", "baguette", "bagels", "bread", "white bread", "brown bread", "wholemeal bread"],
    // Cleaners
    ["bleach"],
    // Dairy
    ["milk", "butter", "yogurt"],
    // Dry / Baking Goods
    ["cereals", "flour", "raising flour", "wholemeal flour", "white flour"],
    // Frozen
    ["frozen pizza", "frozen peas", "frozen vegetables"],
    // Fruit & Veg
    ["bananas", "apples", "oranges", "lemons", "mango", "passionfruit", "broccoli"],
    // Health
    ["vitamins"],
    // Meat
    ["prosciutto crudo", "prosciutto cotto", "pancetta"],
    // Paper goods
    ["towels", "paper", "napkins"],
    // Personal Care
    ["cream"],
    // Tins and Jars
    ["peas", "tuna"]
]

var concatCategories = categories.flat();

let storeBeverages = localStorage.getItem('beverages') ? JSON.parse(localStorage.getItem('beverages')) : [];
localStorage.setItem('beverages', JSON.stringify(storeBeverages));
let storeBread = localStorage.getItem('bread') ? JSON.parse(localStorage.getItem('bread')) : [];
localStorage.setItem('bread', JSON.stringify(storeBread));

var focusStore = '';

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
            focusStore = storeBeverages;
        }
        // Bread
        else if (categories[1].includes(input.value.toLowerCase())) {
            focusList = breadList;
            focusStore = storeBread;
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
    focusStore.push(input.value)
    localStorage.setItem(focusList.id, JSON.stringify(focusStore))

    liMaker(input.value);
    input.value = '';
    document.getElementById("input").focus();
    randPlaceholder();
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

/*

storeBeverages.forEach(item => {
    liMaker(item)
})*/


function randPlaceholder() {
    let randItem = Math.floor(Math.random() * (concatCategories.length));
    input.placeholder = `Try adding ${concatCategories[randItem]}...`;
}

randPlaceholder();

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

autocomplete(document.getElementById("input"), concatCategories);