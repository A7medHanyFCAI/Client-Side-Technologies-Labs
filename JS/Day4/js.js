// 1. Select the first <div> on the page using getElementsByTagName and log its innerHTML.
var elem = document.getElementsByTagName('div')[0];
console.log(elem.innerHTML);
// 2. Using getElementById change the text of #my-p to "Hello DOM".
document.getElementById("my-p").innerText = "Hello DOM";
// 3. Use querySelector to select the element with class "target-div" and log its nodeName.
var elem = document.querySelector('.target-div');
console.log(elem.nodeName);
// 4. Use querySelectorAll to count how many <div> elements exist; log the count.
console.log(document.querySelectorAll('div').length)
// 5. Use getElementsByName on the email input (name="user-email") and set its value to "user@test.com".
document.getElementsByName("user-email")[0].value = "user@test.com";
// 6. Check if the text input has a "name" attribute; if not add name="user-name" via setAttribute.
var textInput = document.querySelector('input[type="text"]');
if (!textInput.hasAttribute("name")) {
    textInput.setAttribute("name", "user-name");
}

// 7. Append the string " - UPDATED" to the existing innerText of #my-p (keep original text).
document.getElementById("my-p").innerText += " - UPDATED";
// 8. Create Images slider that work automatically and with next/prev/start/stop buttons.

var images = [
    'images/image.jfif',
    'images/photo1.JPG',
    'images/photo2.JPG',
    'images/photo3.JPG',
    'images/photo4.JPG',
    'images/photo5.JPG',
    'images/photo 6.JPG',
];

var currentIndex = 0;
var sliderImg = document.getElementById("slider-images");
var interval = null;

function showImage(index) {
    sliderImg.src = images[index];
}

function startSlider() {
    if (!interval) {
        interval = setInterval(function () {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 1000);
    }
}


document.getElementById("nextBtn").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});


document.getElementById("prevBtn").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});


document.getElementById("startBtn").addEventListener("click", function () {
    if (!interval) {
        interval = setInterval(function () {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 1000);
    }
});


document.getElementById("stopBtn").addEventListener("click", function () {
    clearInterval(interval);
    interval = null;
});

startSlider()

// 9. Set the placeholder of the text input to "Type your full name" using setAttribute.
var textInput = document.querySelector('input[type="text"]').setAttribute("placeholder", "Type your full name");
// 10. Log whether the email input has attribute "required"; if missing add it.
var emailInput = document.querySelector('input[type="email"]');
if (!emailInput.hasAttribute('required')) {
    emailInput.setAttribute('required', 'required')
}
// 11. Write function getSelectedValue(selectId) returning the current selected option value.
function getSelectedValue(selectId) {
    var selectElem = document.getElementById(selectId);
    return selectElem.options[selectElem.selectedIndex].value;
}
var val = getSelectedValue('my-select');
console.log(val);
// 12. Loop through all options of the select and log each option's text and value.
var selectElem = document.getElementById("my-select");
for (var i = 0; i < selectElem.options.length; i++) {
    var opt = selectElem.options[i];
    console.log(opt.text + " " + opt.value);
}

// 13. Programmatically select the option with value "EG".
var selectElem = document.getElementById("my-select");
for (var i = 0; i < selectElem.options.length; i++) {
    var opt = selectElem.options[i];
    if (opt.value === "EG") {
        selectElem.selectedIndex = i;
        break;
    }

}
// 14. Create function selectByText(selectId, text) that selects the first option whose text matches exactly.
function selectByText(selectId, text) {
    var selectElem = document.getElementById(selectId);
    for (var i = 0; i < selectElem.options.length; i++) {
        var opt = selectElem.options[i];
        if (opt.text === text) {
            selectElem.selectedIndex = i;
        }
    }
}
selectByText("my-select", "Egypt")
// 15. Replace innerHTML of #div-2 with a <p><b>Bold Text</b></p> (ensure bold renders, not printed literally).
document.getElementById("div-2").innerHTML = "<p><b>Bold Text</b></p>";

// 16. Add classes class-a and class-b to #div-2 then remove class-b (using classList).
var elem = document.getElementById("div-2");
elem.classList.add("class-a", "class-b");
elem.classList.remove("class-b");

// 17. Toggle class "hidden" on #div-2 twice; comment final visibility.
var elem = document.getElementById("div-2");
elem.classList.toggle("hidden"); // dds "hidden"
elem.classList.toggle("hidden"); // removes "hidden"

// 18. Create function insertAfter(refNode, newNode) that inserts newNode immediately after refNode.
function insertAfter(refNode, newNode) {
    if (refNode.nextSibling) {
        refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
    } else {
        refNode.parentNode.appendChild(newNode);
    }
}

// 19. Create a new <div> saying "Dynamic Box" with yellow background and append inside #div-2.
var elem = document.getElementById("div-2");
var newDiv = document.createElement("div");
newDiv.textContent = "Dynamic Box";
newDiv.style.backgroundColor = "yellow";
elem.appendChild(newDiv);

// 20. Insert a new <p> BEFORE the first child of #div-2 (insertBefore).
var elem = document.getElementById("div-2");
var newP = document.createElement("p");
newP.textContent = "Hello Ahmed";
elem.insertBefore(newP, elem.firstChild);

// 21. Insert a <span> with text "AFTER END" right after #div-2 using insertAdjacentHTML.
var elem = document.getElementById("div-2");
elem.insertAdjacentHTML("afterend", "<span>Hello World</span>");

// 22. Form onsubmit: prevent default and log values of text, email, and select inputs.

var form = document.getElementById("Form1");

form.onsubmit = function (event) {
    event.preventDefault();

    var textVal = form.querySelector('input[type="text"]').value;
    var emailVal = form.querySelector('input[type="email"]').value;
    var selectVal = form.querySelector('select').value;

    console.log(textVal);
    console.log(emailVal);
    console.log(selectVal);
};

// 23. Add input event on the text input that logs its length whenever it changes.
var textInput = document.querySelector('input[type="text"]');

textInput.addEventListener("input", function () {
    console.log(this.value.length);
});

// 24. Write validateEmailSimple(value) returning true if value contains both '@' and '.'; add 2 passing / 2 failing examples (comments).
function validateEmailSimple(value) {
    return value.indexOf("@") !== -1 && value.indexOf(".") !== -1;
}

// Passing examples
console.log(validateEmailSimple("user@test.com"));
console.log(validateEmailSimple("hello.world@x.com"));

// Failing examples
console.log(validateEmailSimple("usertest.com"));
console.log(validateEmailSimple("user@testcom"));

// 25. Create an element, append it to #div-2, then remove it using parent.removeChild(child).
var elem = document.createElement("p");
elem.textContent = "This is a new element";

document.getElementById("div-2").appendChild(elem);
document.getElementById("div-2").removeChild(elem);

// 25. Create an element, append it to <div id="wrapper">
//   <p id="first">First</p>
// the element should be here
//   <p id="second">Second</p>
// </div>

var parent = document.getElementById("wrapper");
var elem = document.createElement("p");
elem.textContent = "Between";
var second = document.getElementById("second");
parent.insertBefore(elem, second);



// 26. Clone #div-2 , set clone id="div-2-clone", and insert it after original using insertAfter.
function insertAfter(refNode, newNode) {
    if (refNode.nextSibling) {
        refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
    } else {
        refNode.parentNode.appendChild(newNode);
    }

}

var div2 = document.getElementById("div-2");
var clone = div2.cloneNode(true);
clone.id = "div-2-clone";
insertAfter(div2, clone);

// 27. Highlight all text & email inputs (green border) in a function highlightInputs(form) and call it on DOMContentLoaded.
function highlightInputs(form) {

    var inputs = form.querySelectorAll('input[type="text"], input[type="email"]');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.border = "green";
    }

}

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("Form1");
    highlightInputs(form);
});
// 28. Build function buildCard(title, content) returning <div class="card"> with an <h3> and <p>; append two cards to body.

function buildCard(title, content) {
    var card = document.createElement('div');
    card.className = 'card';

    var h3 = document.createElement('h3');
    h3.textContent = title;

    var p = document.createElement('p');
    p.textContent = content;

    card.appendChild(h3);
    card.appendChild(p);

    return card;
}

document.body.appendChild(buildCard("Card 1", "This is the first card."));
document.body.appendChild(buildCard("Card 2", "This is the second card."));

// 29. Add delegated click listener on body logging when a .card is clicked.

document.body.addEventListener('click', function (event) {
    if (event.target.className === 'card' || event.target.closest('.card')) {
        console.log('Card clicked');
    }
});

// 30. Reflection (comment): Which two tasks were most challenging and why?
// task 8 => the challenging part was trying to make it using events 
// task 29 => dicovering the closest method instead of looping through all the cards

// 31. create and unordered list dynamically with at 10 items, the odd list items should have class "odd" and even items "even", -create the two classes in your CSS file-


var ul = document.createElement("ul");

// Add 10 list items with classes
for (var i = 1; i <= 10; i++) {
    var li = document.createElement("li");
    li.textContent = "Item " + i;
    if (i % 2 === 0) {
        li.className = "even";
    }
    else {
        li.className = "odd";
    }

    ul.appendChild(li);
}

document.body.appendChild(ul);


// 32. form contains 3 inputs (name, email, city(select)) , when submitting each value should appear in a different div (nameDiv, emailDiv, cityDiv) 

document.getElementById("Form1").addEventListener("submit", function (event) {
    event.preventDefault();

    var nameValue = document.getElementById("my-input").value;
    var emailValue = document.getElementById("my-email").value;
    var cityValue = document.getElementById("my-select").value;

    document.getElementById("nameDiv").innerText += nameValue;
    document.getElementById("emailDiv").innerText += emailValue;
    document.getElementById("cityDiv").innerText += cityValue;
});