const input = document.getElementById('input');
const checkboxItems = document.getElementById('checkbox-item');
const addScreen = document.getElementById('addScreen');
const settingsScreen = document.getElementById('settingsScreen');
const clearText = document.getElementById('clearText');
const filter = document.getElementById('filter');


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.background = "#b6b6b6";
    document.body.style.transition = "all 2s";
    filter.style.display = "block";
    filter.onclick = function() {closeNav()};
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.background = "#fff";
    document.body.style.transition = "all 2s";
    filter.style.display = "none";
}




// Enter key
document.getElementById("input")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("add-button").click();
            inputInfo.innerHTML = "";
        }
    });

const inputInfo = document.getElementById("inputInfo");
const finishButton = document.getElementById('finished-button');

window.onload = function () {
    document.getElementById("input").focus();
};

var categories = [
    // Alcoholic Beverages
    ["beer", "wine", "cider", "aperol"],
    // Non-alcoholic Beverages
    ["coke", "pepsi", "water", "fruit juice", "diet coke", "diet pepsi", "orange juice", "apple juice", "pear juice", "pineapple juice"],
    // Hot Beverages
    ["coffee", "tea", "hot chocolate", "decaf coffee", "decaf tea", "herbal tea", "green tea", "breakfast tea", "black tea"],
    // Bakery
    ["ciabatta", "baguette", "bagels", "bread", "white bread", "brown bread", "wholemeal bread", "donut"],
    // Baking
    ["flour", "raising flour", "wholemeal flour", "white flour"],
    // Breakfast
    ["cereals", "biscuits", "oatmeal", "porridge", "muesli", "granola bars"],
    // Condiments, sauces, and oils
    ["ketchup", "mayonnaise", "oil", "olive oil", "extra virgin olive oil"],
    // Confectionary
    ["chocolates", "chocolate bar"],
    // Dairy and eggs
    ["milk", "butter", "yogurt", "eggs", "cheese"],
    // Delicatessen
    ["pizza (chilled)"],
    // Fish and seafood
    ["fish", "salmon"],
    // Frozen
    ["pizza (frozen)", "peas (frozen)", "vegetables (frozen)"],
    // Health
    ["vitamins"],
    // Household
    ["bleach"],
    // Meat
    ["prosciutto crudo", "prosciutto cotto", "pancetta"],
    // Nuts and snacking fruits
    ["nuts", "walnuts", "dried fruit"],
    // Pasta and rice
    ["pasta", "spaghetti", "rice", "couscous"],
    // Paper and plastic
    ["towels", "paper", "napkins"],
    // Personal Care
    ["cream", "wax", "razors", "cotton buds"],
    // Produce
    ["vegetables (fresh)", "fruit", "bananas", "apples", "oranges", "lemons", "mango", "passionfruit", "broccoli"],
    // Spices
    ["curry"],
    // Spreads
    ["nutella", "jam"],
    // Tins and Jars
    ["peas (tinned)", "tuna", "olives", "anchovies", "chickpeas (tinned)"]
]



/*
const storedItemsList = document.getElementById("stored");
//let storedItemsShow = (localStorage.getItem('stored') != '[]') ? storedItemsList.style.display = "block" : storedItemsList.style.display = "none";
let storedItems = localStorage.getItem('stored') ? JSON.parse(localStorage.getItem('stored')) : [];
localStorage.setItem('stored', JSON.stringify(storedItems));
const storedItemsData = JSON.parse(localStorage.getItem('stored'));
*/

// var myNewArray = JSON.parse(myArray)
//const beveragesData = JSON.parse(localStorage.getItem('stored'));

var concatCategories = categories.flat();

const alcoholicList = document.getElementById("alcoholic");
let alcoholicStore = localStorage.getItem('alcoholic') ? JSON.parse(localStorage.getItem('alcoholic')) : [];
let alcoholicShow = alcoholicStore.length > 0 ? alcoholicList.style.display = "block" : alcoholicList.style.display = "none";
localStorage.setItem('alcoholic', JSON.stringify(alcoholicStore));
const alcoholicData = JSON.parse(localStorage.getItem('alcoholic'));

const nonAlcoholicList = document.getElementById("nonAlcoholic");
let nonAlcoholicStore = localStorage.getItem('nonAlcoholic') ? JSON.parse(localStorage.getItem('nonAlcoholic')) : [];
let nonAlcoholicShow = nonAlcoholicStore.length > 0 ? nonAlcoholicList.style.display = "block" : nonAlcoholicList.style.display = "none";
localStorage.setItem('nonAlcoholic', JSON.stringify(nonAlcoholicStore));
const nonAlcoholicData = JSON.parse(localStorage.getItem('nonAlcoholic'));

const hotBeveragesList = document.getElementById("hotBeverages");
let hotBeveragesStore = localStorage.getItem('hotBeverages') ? JSON.parse(localStorage.getItem('hotBeverages')) : [];
let hotBeveragesShow = hotBeveragesStore.length > 0 ? hotBeveragesList.style.display = "block" : hotBeveragesList.style.display = "none";
localStorage.setItem('hotBeverages', JSON.stringify(hotBeveragesStore));
const hotBeveragesData = JSON.parse(localStorage.getItem('hotBeverages'));

const bakeryList = document.getElementById("bakery");
let bakeryStore = localStorage.getItem('bakery') ? JSON.parse(localStorage.getItem('bakery')) : [];
let bakeryShow = bakeryStore.length > 0 ? bakeryList.style.display = "block" : bakeryList.style.display = "none";
localStorage.setItem('bakery', JSON.stringify(bakeryStore));
const bakeryData = JSON.parse(localStorage.getItem('bakery'));

const bakingList = document.getElementById("baking");
let bakingStore = localStorage.getItem('baking') ? JSON.parse(localStorage.getItem('baking')) : [];
let bakingShow = bakingStore.length > 0 ? bakingList.style.display = "block" : bakingList.style.display = "none";
localStorage.setItem('baking', JSON.stringify(bakingStore));
const bakingData = JSON.parse(localStorage.getItem('baking'));

const breakfastList = document.getElementById("breakfast");
let breakfastStore = localStorage.getItem('breakfast') ? JSON.parse(localStorage.getItem('breakfast')) : [];
let breakfastShow = breakfastStore.length > 0 ? breakfastList.style.display = "block" : breakfastList.style.display = "none";
localStorage.setItem('breakfast', JSON.stringify(breakfastStore));
const breakfastData = JSON.parse(localStorage.getItem('breakfast'));

const condimentsList = document.getElementById("condiments");
let condimentsStore = localStorage.getItem('condiments') ? JSON.parse(localStorage.getItem('condiments')) : [];
let condimentsShow = condimentsStore.length > 0 ? condimentsList.style.display = "block" : condimentsList.style.display = "none";
localStorage.setItem('condiments', JSON.stringify(condimentsStore));
const condimentsData = JSON.parse(localStorage.getItem('condiments'));

const confectionaryList = document.getElementById("confectionary");
let confectionaryStore = localStorage.getItem('confectionary') ? JSON.parse(localStorage.getItem('confectionary')) : [];
let confectionaryShow = confectionaryStore.length > 0 ? confectionaryList.style.display = "block" : confectionaryList.style.display = "none";
localStorage.setItem('confectionary', JSON.stringify(confectionaryStore));
const confectionaryData = JSON.parse(localStorage.getItem('confectionary'));

const dairyList = document.getElementById("dairy");
let dairyStore = localStorage.getItem('dairy') ? JSON.parse(localStorage.getItem('dairy')) : [];
let dairyShow = dairyStore.length > 0 ? dairyList.style.display = "block" : dairyList.style.display = "none";
localStorage.setItem('dairy', JSON.stringify(dairyStore));
const dairyData = JSON.parse(localStorage.getItem('dairy'));

const delicatessenList = document.getElementById("delicatessen");
let delicatessenStore = localStorage.getItem('delicatessen') ? JSON.parse(localStorage.getItem('delicatessen')) : [];
let delicatessenShow = delicatessenStore.length > 0 ? delicatessenList.style.display = "block" : delicatessenList.style.display = "none";
localStorage.setItem('delicatessen', JSON.stringify(delicatessenStore));
const delicatessenData = JSON.parse(localStorage.getItem('delicatessen'));

const fishList = document.getElementById("fish");
let fishStore = localStorage.getItem('fish') ? JSON.parse(localStorage.getItem('fish')) : [];
let fishShow = fishStore.length > 0 ? fishList.style.display = "block" : fishList.style.display = "none";
localStorage.setItem('fish', JSON.stringify(fishStore));
const fishData = JSON.parse(localStorage.getItem('fish'));

const frozenList = document.getElementById("frozen");
let frozenStore = localStorage.getItem('frozen') ? JSON.parse(localStorage.getItem('frozen')) : [];
let frozenShow = frozenStore.length > 0 ? frozenList.style.display = "block" : frozenList.style.display = "none";
localStorage.setItem('frozen', JSON.stringify(frozenStore));
const frozenData = JSON.parse(localStorage.getItem('frozen'));

const householdList = document.getElementById("household");
let householdStore = localStorage.getItem('household') ? JSON.parse(localStorage.getItem('household')) : [];
let householdShow = householdStore.length > 0 ? householdList.style.display = "block" : householdList.style.display = "none";
localStorage.setItem('household', JSON.stringify(householdStore));
const householdData = JSON.parse(localStorage.getItem('household'));

const healthList = document.getElementById("health");
let healthStore = localStorage.getItem('health') ? JSON.parse(localStorage.getItem('health')) : [];
let healthShow = healthStore.length > 0 ? healthList.style.display = "block" : healthList.style.display = "none";
localStorage.setItem('health', JSON.stringify(healthStore));
const healthData = JSON.parse(localStorage.getItem('health'));

const meatList = document.getElementById("meat");
let meatStore = localStorage.getItem('meat') ? JSON.parse(localStorage.getItem('meat')) : [];
let meatShow = meatStore.length > 0 ? meatList.style.display = "block" : meatList.style.display = "none";
localStorage.setItem('meat', JSON.stringify(meatStore));
const meatData = JSON.parse(localStorage.getItem('meat'));

const pastaList = document.getElementById("pasta");
let pastaStore = localStorage.getItem('pasta') ? JSON.parse(localStorage.getItem('pasta')) : [];
let pastaShow = pastaStore.length > 0 ? pastaList.style.display = "block" : pastaList.style.display = "none";
localStorage.setItem('pasta', JSON.stringify(pastaStore));
const pastaData = JSON.parse(localStorage.getItem('pasta'));

const paperList = document.getElementById("paper");
let paperStore = localStorage.getItem('paper') ? JSON.parse(localStorage.getItem('paper')) : [];
let paperShow = paperStore.length > 0 ? paperList.style.display = "block" : paperList.style.display = "none";
localStorage.setItem('paper', JSON.stringify(paperStore));
const paperData = JSON.parse(localStorage.getItem('paper'));

const careList = document.getElementById("care");
let careStore = localStorage.getItem('care') ? JSON.parse(localStorage.getItem('care')) : [];
let careShow = careStore.length > 0 ? careList.style.display = "block" : careList.style.display = "none";
localStorage.setItem('care', JSON.stringify(careStore));
const careData = JSON.parse(localStorage.getItem('care'));

const produceList = document.getElementById("produce");
let produceStore = localStorage.getItem('produce') ? JSON.parse(localStorage.getItem('produce')) : [];
let produceShow = produceStore.length > 0 ? produceList.style.display = "block" : produceList.style.display = "none";
localStorage.setItem('produce', JSON.stringify(produceStore));
const produceData = JSON.parse(localStorage.getItem('produce'));

const snackingList = document.getElementById("snacking");
let snackingStore = localStorage.getItem('snacking') ? JSON.parse(localStorage.getItem('snacking')) : [];
let snackingShow = snackingStore.length > 0 ? snackingList.style.display = "block" : snackingList.style.display = "none";
localStorage.setItem('snacking', JSON.stringify(snackingStore));
const snackingData = JSON.parse(localStorage.getItem('snacking'));

const spicesList = document.getElementById("spices");
let spicesStore = localStorage.getItem('spices') ? JSON.parse(localStorage.getItem('spices')) : [];
let spicesShow = spicesStore.length > 0 ? spicesList.style.display = "block" : spicesList.style.display = "none";
localStorage.setItem('spices', JSON.stringify(spicesStore));
const spicesData = JSON.parse(localStorage.getItem('spices'));

const spreadsList = document.getElementById("spreads");
let spreadsStore = localStorage.getItem('spreads') ? JSON.parse(localStorage.getItem('spreads')) : [];
let spreadsShow = spreadsStore.length > 0 ? spreadsList.style.display = "block" : spreadsList.style.display = "none";
localStorage.setItem('spreads', JSON.stringify(spreadsStore));
const spreadsData = JSON.parse(localStorage.getItem('spreads'));

const tinList = document.getElementById("tin");
let tinStore = localStorage.getItem('tin') ? JSON.parse(localStorage.getItem('tin')) : [];
let tinShow = tinStore.length > 0 ? tinList.style.display = "block" : tinList.style.display = "none";
localStorage.setItem('tin', JSON.stringify(tinStore));
const tinData = JSON.parse(localStorage.getItem('tin'));

const otherList = document.getElementById("other");
let otherStore = localStorage.getItem('other') ? JSON.parse(localStorage.getItem('other')) : [];
let otherShow = otherStore.length > 0 ? otherList.style.display = "block" : otherList.style.display = "none";
localStorage.setItem('other', JSON.stringify(otherStore));
const otherData = JSON.parse(localStorage.getItem('other'));

const aisle1List = document.getElementById("aisle1");
const aisle2List = document.getElementById("aisle2");
const aisle3List = document.getElementById("aisle3");
const aisle4List = document.getElementById("aisle4");


var focusStore = '';
var focusList = '';
var aisleList = '';
var focusDiv = '';

function addItem(input) {
    //var category = '';
    var checked = 'unchecked';
    var d = new Date();
    var identifier = d.getTime();
    var position = 0;

    if (input.value !== '') {
        // Alcoholic Beverages
        if (categories[0].includes(input.value.toLowerCase())) {
            focusList = alcoholicList;
            aisleList = aisle3List;
            focusStore = alcoholicStore;
        }
        // Non-alcoholic Beverages
        else if (categories[1].includes(input.value.toLowerCase())) {
            focusList = nonAlcoholicList;
            aisleList = aisle3List;
            focusStore = nonAlcoholicStore;
        }
        // Hot Beverages
        else if (categories[2].includes(input.value.toLowerCase())) {
            focusList = hotBeveragesList;
            aisleList = aisle1List;
            focusStore = hotBeveragesStore;
        }
        // Bakery
        else if (categories[3].includes(input.value.toLowerCase())) {
            focusList = bakeryList;
            aisleList = aisle2List;
            focusStore = bakeryStore;
        }
        // Baking
        else if (categories[4].includes(input.value.toLowerCase())) {
            focusList = bakingList;
            aisleList = aisle1List;
            focusStore = bakingStore;
        }
        // Breakfast
        else if (categories[5].includes(input.value.toLowerCase())) {
            focusList = breakfastList;
            aisleList = aisle1List;
            focusStore = breakfastStore;
        }
        // Condiments, sauces, and oils
        else if (categories[6].includes(input.value.toLowerCase())) {
            focusList = condimentsList;
            aisleList = aisle1List;
            focusStore = condimentsStore;
        }
        // Confectionary
        else if (categories[7].includes(input.value.toLowerCase())) {
            focusList = confectionaryList;
            aisleList = aisle1List;
            focusStore = confectionaryStore;
        }
        // Dairy and eggs
        else if (categories[8].includes(input.value.toLowerCase())) {
            focusList = dairyList;
            aisleList = aisle1List;
            focusStore = dairyStore;
        }
        // Delicatessen
        else if (categories[9].includes(input.value.toLowerCase())) {
            focusList = delicatessenList;
            aisleList = aisle2List;
            focusStore = delicatessenStore;
        }
        // Fish and seafood 
        else if (categories[10].includes(input.value.toLowerCase())) {
            focusList = fishList;
            aisleList = aisle2List;
            focusStore = fishStore;
        }
        // Frozen
        else if (categories[11].includes(input.value.toLowerCase())) {
            focusList = frozenList;
            aisleList = aisle3List;
            focusStore = frozenStore;
        }
        // Health
        else if (categories[12].includes(input.value.toLowerCase())) {
            focusList = healthList;
            aisleList = aisle2List;
            focusStore = healthStore;
        }
        // Household
        else if (categories[13].includes(input.value.toLowerCase())) {
            focusList = householdList;
            aisleList = aisle3List;
            focusStore = householdStore;
        }
        // Meat
        else if (categories[14].includes(input.value.toLowerCase())) {
            focusList = meatList;
            aisleList = aisle1List;
            focusStore = meatStore;
        }
        // Nuts and snacking fruits
        else if (categories[15].includes(input.value.toLowerCase())) {
            focusList = snackingList;
            aisleList = aisle1List;
            focusStore = snackingStore;
        }
        // Pasta and rice
        else if (categories[16].includes(input.value.toLowerCase())) {
            focusList = pastaList;
            aisleList = aisle2List;
            focusStore = pastaStore;
        }
        // Paper and plastic
        else if (categories[17].includes(input.value.toLowerCase())) {
            focusList = paperList;
            aisleList = aisle3List;
            focusStore = paperStore;
        }
        // Personal Care
        else if (categories[18].includes(input.value.toLowerCase())) {
            focusList = careList;
            aisleList = aisle3List;
            focusStore = careStore;
        }
        // Produce
        else if (categories[19].includes(input.value.toLowerCase())) {
            focusList = produceList;
            aisleList = aisle1List;
            focusStore = produceStore;
        }
        // Spices
        else if (categories[20].includes(input.value.toLowerCase())) {
            focusList = spicesList;
            aisleList = aisle1List;
            focusStore = spicesStore;
        }
        // Spreads
        else if (categories[21].includes(input.value.toLowerCase())) {
            focusList = spreadsList;
            aisleList = aisle1List;
            focusStore = spreadsStore;
        }
        // Tinned & Jarred
        else if (categories[22].includes(input.value.toLowerCase())) {
            focusList = tinList;
            aisleList = aisle1List;
            focusStore = tinStore;
        }
        // Other
        else {
            focusList = otherList;
            aisleList = aisle4List;
            focusStore = otherStore;
            //position = otherData.length;
        }

        focusList.style.display = "block";
        // focusStore.push(input.value);
        //localStorage.setItem([focusList.id], JSON.stringify(focusStore))
        position = focusStore.length;
        focusStore.push([input.value, checked, identifier, position]);
        localStorage.setItem(focusList.id, JSON.stringify(focusStore))

        liMaker(input.value, checked, identifier, position);
        input.value = '';
        inputInfo.innerHTML = "";
        randPlaceholder();
    }
    // Empty
    else {
        inputInfo.innerHTML = "Please type something";
        setTimeout(function () {
            inputInfo.innerHTML = "";
        }, 2000);

        document.getElementById("input").focus();
    }

    document.getElementById("input").focus();
}


// in general
const liMaker = (text, checked, identifier, position) => {

    // category
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text}", "${checked}", ${identifier}, ${position}])`);
    li.setAttribute("id", `input-${identifier}`);
    label.classList.add(checked);
    label.setAttribute("id", `${text}-${position}`);
    focusList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text}`));
    var br = document.createElement("br");
    focusList.appendChild(br);

    // aisle
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text}", "${checked}", ${identifier}, ${position}])`);
    li.setAttribute("id", `input-${identifier}`);
    label.classList.add(checked);
    label.setAttribute("id", `${text}-${position}`);
    aisleList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text}`));
    var br = document.createElement("br");
    aisleList.appendChild(br);
}

// Alcoholic beverages
const alcoholicMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    alcoholicList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    alcoholicList.appendChild(br);
}

alcoholicData.forEach(item => {
    alcoholicMaker(item)
})

// Non-alcoholic beverages
const nonAlcoholicMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    nonAlcoholicList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    nonAlcoholicList.appendChild(br);
}

nonAlcoholicData.forEach(item => {
    nonAlcoholicMaker(item)
})

// hot beverages
const hotBeveragesMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    hotBeveragesList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    hotBeveragesList.appendChild(br);
}

hotBeveragesData.forEach(item => {
    hotBeveragesMaker(item)
})


// bakery
const bakeryMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    bakeryList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    bakeryList.appendChild(br);
}

bakeryData.forEach(item => {
    bakeryMaker(item)
})


// baking
const bakingMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    bakingList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    bakingList.appendChild(br);
}

bakingData.forEach(item => {
    bakingMaker(item)
})


// Breakfast
const breakfastMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    breakfastList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    breakfastList.appendChild(br);
}

breakfastData.forEach(item => {
    breakfastMaker(item)
})


// Condiments, sauces, and oils
const condimentsMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    condimentsList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    condimentsList.appendChild(br);
}

condimentsData.forEach(item => {
    condimentsMaker(item)
})


// Confectionary
const confectionaryMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    confectionaryList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    confectionaryList.appendChild(br);
}

confectionaryData.forEach(item => {
    confectionaryMaker(item)
})


// dairy
const dairyMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    dairyList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    dairyList.appendChild(br);
}

dairyData.forEach(item => {
    dairyMaker(item)
})

// Delicatessen
const delicatessenMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    delicatessenList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    delicatessenList.appendChild(br);
}

delicatessenData.forEach(item => {
    delicatessenMaker(item)
})

// fish and seafood
const fishMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    fishList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    fishList.appendChild(br);
}

fishData.forEach(item => {
    fishMaker(item)
})

// frozen
const frozenMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    frozenList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    frozenList.appendChild(br);
}

frozenData.forEach(item => {
    frozenMaker(item)
})



// health
const healthMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    healthList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    healthList.appendChild(br);
}

healthData.forEach(item => {
    healthMaker(item)
})

// household
const householdMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    householdList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    householdList.appendChild(br);
}

householdData.forEach(item => {
    householdMaker(item)
})

// meat
const meatMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    meatList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    meatList.appendChild(br);
}

meatData.forEach(item => {
    meatMaker(item)
})

// nuts and snacking fruits
const snackingMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    snackingList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    snackingList.appendChild(br);
}

snackingData.forEach(item => {
    snackingMaker(item)
})

// pasta and rice
const pastaMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    pastaList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    pastaList.appendChild(br);
}

pastaData.forEach(item => {
    pastaMaker(item)
})

// paper and plastic
const paperMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    paperList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    paperList.appendChild(br);
}

paperData.forEach(item => {
    paperMaker(item)
})


// Personal care
const careMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    careList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    careList.appendChild(br);
}

careData.forEach(item => {
    careMaker(item)
})

// produce
const produceMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    produceList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    produceList.appendChild(br);
}

produceData.forEach(item => {
    produceMaker(item)
})

// Spices
const spicesMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    spicesList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    spicesList.appendChild(br);
}

spicesData.forEach(item => {
    spicesMaker(item)
})


// Spreads
const spreadsMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    spreadsList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    spreadsList.appendChild(br);
}

spreadsData.forEach(item => {
    spreadsMaker(item)
})

// tin
const tinMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    tinList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
    var br = document.createElement("br");
    tinList.appendChild(br);
}

tinData.forEach(item => {
    tinMaker(item)
})

// other
const otherMaker = (text) => {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var label = document.createElement("LABEL");
    var li = document.createElement("INPUT");
    li.setAttribute("type", "checkbox");
    li.setAttribute("onclick", `selectItem(["${text[0]}", "${text[1]}", ${text[2]}, ${text[3]}])`);
    li.setAttribute("id", `input-${text[2]}`);
    label.classList.add(text[1]);
    label.setAttribute("id", `${text[0]}-${text[3]}`);
    otherList.appendChild(label);
    label.appendChild(li);
    label.appendChild(document.createTextNode(`${text[0]}`));
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
                    addItem(input)
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

/*
function selectItem(text, checked, identifier, position) {
 //   var checkboxItem = document.getElementById(`input-${identifier}`);
   // var checkboxLabel = document.getElementById(identifier);
  //  getId = checkboxLabel.parentElement.id; // gets ID


    if (checkboxItem.checked == true) {
        checkboxLabel.style.textDecoration = "line-through";
        console.log(`"${checkboxItem.nextSibling.nodeValue}" "${getId}" "${identifier}" selected`);

    } else {
        checkboxLabel.style.textDecoration = "none";
        console.log(`"${checkboxItem.nextSibling.nodeValue}" "${getId}" "${identifier}" deselected`);
    }
}
*/


function selectItem(text) {
    //  text[0] = text
    //  text[1] = checked
    //  text[2] = identifier
    //  text[3] = position
    var checkboxItem = document.getElementById(`input-${text[2]}`);
    var checkboxLabel = document.getElementById(`${text[0]}-${text[3]}`);
    getId = checkboxLabel.parentElement.id; // gets ID
    arrayPosition = `${getId}Data[${text[3]}]`; // finds Array position


    if (checkboxItem.checked == true) {
        checkboxLabel.style.textDecoration = "line-through";
        // console.log(`Item: "${text[0]}", Category: "${getId}", Checked: "${text[1]}", Identifier: "${text[2]}", Position: "${text[3]}" selected`);
        console.log(`${getId}Data[${text[3]}]: "${text[0]}" SELECTED`);

    } else {
        checkboxLabel.style.textDecoration = "none";
        //  console.log(`Item: "${text[0]}", Category: "${getId}", Checked: "${text[1]}", Identifier: "${text[2]}", Position: "${text[3]}" deselected`);
        console.log(`${getId}Data[${text[3]}]: "${text[0]}" DESELECTED`);
    }
}

function changeScreen(screen) {
    if (screen === 'settings') {
        addScreen.style.display = "none";
        settingsScreen.style.display = "block";
        closeNav();
    }
}

function clearStorage() {
    localStorage.clear();
    clearText.innerHTML = "Please refresh to see changes"
}