// ---
// BOM (Browser Object Model)

// 1. Open a new window with a specific URL and size, then close it after 3 seconds using JavaScript.
function openWindow(){
    var NewWindow = window.open("https://www.google.com/", "Google", "width=600,height=400");
}
function timeout(){
setTimeout(openWindow, 3000);
}

// 2. Display the browser's user agent string in an alert.
alert(navigator.userAgent);

// 3. Use `navigator` to detect if the browser is online or offline and log the result.
if (navigator.onLine) {
    console.log("online");
} else {
    console.log("offline");
}
// 4. Write code to reload the current page after 5 seconds.
function reload(){
    location.reload();
}
function reloadTimeout(){
    setTimeout(reload, 5000);
    }

// 5. Get the current page URL, protocol, and hostname using `location` and log them.
console.log(location.href)
console.log(location.protocol)
console.log(location.hostname)

// 6. Use `history` to go back one page, then forward one page (write the code, don't actually run it).

// Go back one page:
history.back();
// Go forward one page:
history.forward();

// 7. Show the screen width and height in a div -change the div content- on the page.
var width = screen.width;
var height = screen.height;
document.writeln('<div>'+width+" "+height+'</div>');


// 8. Use `setTimeout` to change the content of a hyperlink -a- with a new content after 2 seconds, and provide a button to cancel it.
var linkTimeout;
function changeLink() {
    linkTimeout = setTimeout(function () {
        var link = document.getElementById("link");
        link.innerHTML = "Change";
        link.href = "https://www.google.com";
    }, 2000);
}
function cancelChange() {
    clearTimeout(linkTimeout);
}


// 9. Use `setInterval` to update the time  on the page title every second, and a button to stop it.
var timeInterval;
function startTime() {
    timeInterval = setInterval(function () {
        document.title = new Date().toLocaleTimeString();
    }, 1000);
}
function stopTime() {
    clearInterval(timeInterval);
}

// 10. Show a confirm dialog asking "Do you want to continue?" and log the user's choice("user said yes", "user said no").
var result = confirm("Do you want to continue?");
if (result) {
console.log("user said yes");
} else {
console.log("user said no");
}


// ---
// DOM Traversal (Nodes, Elements, Collections)

// 11. Select the first `<ul>` in the document and log its `childNodes` and `children` properties. Explain the difference in a comment.

var ul = document.querySelector("ul");
console.log(ul.childNodes); 
console.log(ul.children); 
//Explanation => children returns only element nodes, while childNodes could include text nodes

// 12. Write a function that logs the tag names of all direct child elements of `<body>`.
function logChild() {
    var body = document.body;
    for (var i = 0; i < body.children.length; i++) {
        console.log(body.children[i].tagName);
    }
}
logChild()
// 13. Given a parent element, loop through its `childNodes` and log only the nodes that are elements (not text/comments).
function logElementNodes(parent) {
    var nodes = parent.childNodes;
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeType === 1) { 
            console.log(nodes[i]);
        }
    }
}
logElementNodes(document.body)
// 14. Use `firstChild` and `firstElementChild` on a container and explain the difference in a comment.
var container = document.querySelector(".container");
console.log(container.firstChild);       
console.log(container.firstElementChild);
// Explanation => firstChild will return the first node child even if it is a text, while firstElementChild will return the first element node child
// 15. Write code to get all `<li>` elements inside a `<ul>` using `children` and explain the difference.
var ul2 = document.querySelector("ul");
var liItems = ul2.children;
console.log(liItems); 
//Explanation => children returns only element nodes, while childNodes could include text nodes

// 17. Write a function that logs all sibling elements of a given element (excluding itself).

function logSiblings(elem) {
    var siblings = elem.parentNode.children;
    for (var i = 0; i < siblings.length; i++) {
        if (siblings[i] !== elem) {
            console.log(siblings[i]);
        }
    }
}
logSiblings(document.querySelector(".container"))

// 18. Use `nextSibling` and `nextElementSibling` to traverse from the first child to the last child of a `<ul>`, logging each node.
var ul3 = document.querySelector("ul");
var node = ul3.firstChild;
while (node) {
    console.log(node); 
    node = node.nextSibling;
}

var elem = ul3.firstElementChild;
while (elem) {
    console.log(elem); 
    elem = elem.nextElementSibling;
}

// 19. Count how many element children a given node has (not using `children.length`).
function countElementChildren(node) {
    var count = 0;
    var child = node.firstElementChild;
    while (child) {
        if (child.nodeType === 1) {
            count++;
        }
        child = child.nextElementSibling;
    }
    return count;
}
console.log(countElementChildren(document.querySelector("ul")))
// 20. Write a function that takes the first form element and logs the names and values of all its input fields using the `elements` collection.
function logFormInputs() {
    var form = document.forms[0];
    var elements = form.elements;
    for (var i = 0; i < elements.length; i++) {
        console.log(elements[i].name, elements[i].value);
    }
}
logFormInputs()
// 21. Access all forms in the document using `document.forms` and log their names.
for (var i = 0; i < document.forms.length; i++) {
    console.log(document.forms[i].name);
}
// 22. Access all images in the document using `document.images` and log their `src` attributes.
for (var i = 0; i < document.images.length; i++) {
    console.log(document.images[i].src);
}
// 23. Write a function that takes a form and disables all its input fields using the `elements` collection.
function disableFormInputs(form) {
    var elements = form.elements;
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].tagName === "INPUT") {
            elements[i].disabled = true;
        }
    }
}
// 24. Use `Array.from` to convert `document.images` to an array and filter images with width > 100px.
var imagesArray = Array.from(document.images);
var filtered = imagesArray.filter(function(img) {
    return img.width > 100;
});
console.log(filtered);








