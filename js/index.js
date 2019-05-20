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

const beveragesList = document.getElementById("beverages");
let beveragesShow = (localStorage.getItem('beverages') != '[]') ? beveragesList.style.display = "block" : beveragesList.style.display = "none";
let beveragesStore = localStorage.getItem('beverages') ? JSON.parse(localStorage.getItem('beverages')) : [];
localStorage.setItem('beverages', JSON.stringify(beveragesStore));
const beveragesData = JSON.parse(localStorage.getItem('beverages'));

const breadList = document.getElementById("bread");
let breadShow = (localStorage.getItem('bread') != '[]') ? breadList.style.display = "block" : breadList.style.display = "none";
let breadStore = localStorage.getItem('bread') ? JSON.parse(localStorage.getItem('bread')) : [];
localStorage.setItem('bread', JSON.stringify(breadStore));
const breadData = JSON.parse(localStorage.getItem('bread'));

const cleanersList = document.getElementById("cleaners");
let cleanersShow = (localStorage.getItem('cleaners') != '[]') ? cleanersList.style.display = "block" : cleanersList.style.display = "none";
let cleanersStore = localStorage.getItem('cleaners') ? JSON.parse(localStorage.getItem('cleaners')) : [];
localStorage.setItem('cleaners', JSON.stringify(cleanersStore));
const cleanersData = JSON.parse(localStorage.getItem('cleaners'));

const dairyList = document.getElementById("dairy");
let dairyShow = (localStorage.getItem('dairy') != '[]') ? dairyList.style.display = "block" : dairyList.style.display = "none";
let dairyStore = localStorage.getItem('dairy') ? JSON.parse(localStorage.getItem('dairy')) : [];
localStorage.setItem('dairy', JSON.stringify(dairyStore));
const dairyData = JSON.parse(localStorage.getItem('dairy'));

const dryList = document.getElementById("dry");
let dryShow = (localStorage.getItem('dry') != '[]') ? dryList.style.display = "block" : dryList.style.display = "none";
let dryStore = localStorage.getItem('dry') ? JSON.parse(localStorage.getItem('dry')) : [];
localStorage.setItem('dry', JSON.stringify(dryStore));
const dryData = JSON.parse(localStorage.getItem('dry'));

const frozenList = document.getElementById("frozen");
let frozenShow = (localStorage.getItem('frozen') != '[]') ? frozenList.style.display = "block" : frozenList.style.display = "none";
let frozenStore = localStorage.getItem('frozen') ? JSON.parse(localStorage.getItem('frozen')) : [];
localStorage.setItem('frozen', JSON.stringify(frozenStore));
const frozenData = JSON.parse(localStorage.getItem('frozen'));

const produceList = document.getElementById("produce");
let produceShow = (localStorage.getItem('produce') != '[]') ? produceList.style.display = "block" : produceList.style.display = "none";
let produceStore = localStorage.getItem('produce') ? JSON.parse(localStorage.getItem('produce')) : [];
localStorage.setItem('produce', JSON.stringify(produceStore));
const produceData = JSON.parse(localStorage.getItem('produce'));

const healthList = document.getElementById("health");
let healthShow = (localStorage.getItem('health') != '[]') ? healthList.style.display = "block" : healthList.style.display = "none";
let healthStore = localStorage.getItem('health') ? JSON.parse(localStorage.getItem('health')) : [];
localStorage.setItem('health', JSON.stringify(healthStore));
const healthData = JSON.parse(localStorage.getItem('health'));

const meatList = document.getElementById("meat");
let meatShow = (localStorage.getItem('meat') != '[]') ? meatList.style.display = "block" : meatList.style.display = "none";
let meatStore = localStorage.getItem('meat') ? JSON.parse(localStorage.getItem('meat')) : [];
localStorage.setItem('meat', JSON.stringify(meatStore));
const meatData = JSON.parse(localStorage.getItem('meat'));

const paperList = document.getElementById("paper");
let paperShow = (localStorage.getItem('paper') != '[]') ? paperList.style.display = "block" : paperList.style.display = "none";
let paperStore = localStorage.getItem('paper') ? JSON.parse(localStorage.getItem('paper')) : [];
localStorage.setItem('paper', JSON.stringify(paperStore));
const paperData = JSON.parse(localStorage.getItem('paper'));

const careList = document.getElementById("care");
let careShow = (localStorage.getItem('care') != '[]') ? careList.style.display = "block" : careList.style.display = "none";
let careStore = localStorage.getItem('care') ? JSON.parse(localStorage.getItem('care')) : [];
localStorage.setItem('care', JSON.stringify(careStore));
const careData = JSON.parse(localStorage.getItem('care'));

const tinList = document.getElementById("tin");
let tinShow = (localStorage.getItem('tin') != '[]') ? tinList.style.display = "block" : tinList.style.display = "none";
let tinStore = localStorage.getItem('tin') ? JSON.parse(localStorage.getItem('tin')) : [];
localStorage.setItem('tin', JSON.stringify(tinStore));
const tinData = JSON.parse(localStorage.getItem('tin'));

const otherList = document.getElementById("other");
let otherShow = (localStorage.getItem('other') != '[]') ? otherList.style.display = "block" : otherList.style.display = "none";
let otherStore = localStorage.getItem('other') ? JSON.parse(localStorage.getItem('other')) : [];
localStorage.setItem('other', JSON.stringify(otherStore));
const otherData = JSON.parse(localStorage.getItem('other'));

var focusStore = '';
var focusList = '';
var focusDiv = '';

function addItem(input) {

    if (input.value !== '') {
        // Beverages
        if (categories[0].includes(input.value.toLowerCase())) {
            focusList = beveragesList;
            focusStore = beveragesStore;
        }
        // Bread
        else if (categories[1].includes(input.value.toLowerCase())) {
            focusList = breadList;
            focusStore = breadStore;
        }
        // Cleaners
        else if (categories[2].includes(input.value.toLowerCase())) {
            focusList = cleanersList;
            focusStore = cleanersStore;
        }
        // Dairy
        else if (categories[3].includes(input.value.toLowerCase())) {
            focusList = dairyList;
            focusStore = dairyStore;
        }
        // Dry / Baking Goods
        else if (categories[4].includes(input.value.toLowerCase())) {
            focusList = dryList;
            focusStore = dryStore;
        }
        // Frozen
        else if (categories[5].includes(input.value.toLowerCase())) {
            focusList = frozenList;
            focusStore = frozenStore;
        }
        // Fruit & Veg
        else if (categories[6].includes(input.value.toLowerCase())) {
            focusList = produceList;
            focusStore = produceStore;
        }
        // Health
        else if (categories[7].includes(input.value.toLowerCase())) {
            focusList = healthList;
            focusStore = healthStore;
        }
        // Meat
        else if (categories[8].includes(input.value.toLowerCase())) {
            focusList = meatList;
            focusStore = meatStore;
        }
        // Paper Goods
        else if (categories[9].includes(input.value.toLowerCase())) {
            focusList = paperList;
            focusStore = paperStore;
        }
        // Personal Care
        else if (categories[10].includes(input.value.toLowerCase())) {
            focusList = careList;
            focusStore = careStore;
        }
        // Tinned & Jarred
        else if (categories[11].includes(input.value.toLowerCase())) {
            focusList = tinList;
            focusStore = tinStore;
        }
        // Other
        else {
            focusList = otherList;
            focusStore = otherStore;
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

// in general
const liMaker = text => {
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    var span = document.createElement("span");  
    focusList.appendChild(label);
    label.appendChild(li);
    span.textContent = ` ${text}`;
    label.appendChild(span);
    var br = document.createElement("br");
    focusList.appendChild(br);
}

// beverages
const beveragesMaker = text => {
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    var span = document.createElement("span");
    beveragesList.appendChild(label);
    label.appendChild(li);
    span.textContent = ` ${text}`;
    label.appendChild(span);
    var br = document.createElement("br");
    beveragesList.appendChild(br);
}

beveragesData.forEach(item => {
    beveragesMaker(item)
})

// bread
const breadMaker = text => {
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    var span = document.createElement("span");
    breadList.appendChild(label);
    label.appendChild(li);
    span.textContent = ` ${text}`;
    label.appendChild(span);
    var br = document.createElement("br");
    breadList.appendChild(br);
}

breadData.forEach(item => {
    breadMaker(item)
})

// cleaners
const cleanersMaker = text => {
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    var span = document.createElement("span");
    cleanersList.appendChild(label);
    label.appendChild(li);
    span.textContent = ` ${text}`;
    label.appendChild(span);
    var br = document.createElement("br");
    cleanersList.appendChild(br);
}

cleanersData.forEach(item => {
    cleanersMaker(item)
})

// dairy
const dairyMaker = text => {
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    var span = document.createElement("span");
    dairyList.appendChild(label);
    label.appendChild(li);
    span.textContent = ` ${text}`;
    label.appendChild(span);
    var br = document.createElement("br");
    dairyList.appendChild(br);
}

dairyData.forEach(item => {
    dairyMaker(item)
})

// dry
const dryMaker = text => {
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    var span = document.createElement("span");
    dryList.appendChild(label);
    label.appendChild(li);    
    span.textContent = ` ${text}`;
    label.appendChild(span);
    var br = document.createElement("br");
    dryList.appendChild(br);
}

dryData.forEach(item => {
    dryMaker(item)
})

// frozen
const frozenMaker = text => {
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    var span = document.createElement("span");
    frozenList.appendChild(label);
    label.appendChild(li);
    span.textContent = ` ${text}`;
    label.appendChild(span);
    var br = document.createElement("br");
    frozenList.appendChild(br);
}

frozenData.forEach(item => {
    frozenMaker(item)
})

// produce
const produceMaker = text => {
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    var span = document.createElement("span");
    produceList.appendChild(label);
    label.appendChild(li);
    span.textContent = ` ${text}`;
    label.appendChild(span);
    var br = document.createElement("br");
    produceList.appendChild(br);
}

produceData.forEach(item => {
    produceMaker(item)
})

// health
const healthMaker = text => {
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    var span = document.createElement("span");
    healthList.appendChild(label);
    label.appendChild(li);
    span.textContent = ` ${text}`;
    label.appendChild(span);
    var br = document.createElement("br");
    healthList.appendChild(br);
}

healthData.forEach(item => {
    healthMaker(item)
})

// meat
const meatMaker = text => {
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    var span = document.createElement("span");
    meatList.appendChild(label);
    label.appendChild(li);   
    span.textContent = ` ${text}`;
    label.appendChild(span);
    var br = document.createElement("br");
    meatList.appendChild(br);
}

meatData.forEach(item => {
    meatMaker(item)
})

// paper
const paperMaker = text => {
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    var span = document.createElement("span");
    paperList.appendChild(label);
    label.appendChild(li);
    span.textContent = ` ${text}`;
    label.appendChild(span);
    var br = document.createElement("br");
    paperList.appendChild(br);
}

paperData.forEach(item => {
    paperMaker(item)
})

// care
const careMaker = text => {
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    var span = document.createElement("span");
    careList.appendChild(label);
    label.appendChild(li);
    span.textContent = ` ${text}`;
    label.appendChild(span);
    var br = document.createElement("br");
    careList.appendChild(br);
}

careData.forEach(item => {
    careMaker(item)
})

// tin
const tinMaker = text => {
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    var span = document.createElement("span");
    tinList.appendChild(label);
    label.appendChild(li);
    span.textContent = ` ${text}`;
    label.appendChild(span);
    var br = document.createElement("br");
    tinList.appendChild(br);
}

tinData.forEach(item => {
    tinMaker(item)
})

// other
const otherMaker = text => {
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    var span = document.createElement("span");
    otherList.appendChild(label);
    label.appendChild(li);
    span.textContent = ` ${text}`;
    label.appendChild(span);
    var br = document.createElement("br");
    otherList.appendChild(br);
}

otherData.forEach(item => {
    otherMaker(item)
})

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