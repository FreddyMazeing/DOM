// The Dom Manipulation
/*
Document Object Model: structured representation of an HTML document.
- treats the web page as a tree of objects(nodes)
- allows javascript to interact with and modify the document dynamically.

Example
<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>
    <h1 id="heading">Hello, World!</h1>
</body>
</html>

The browser creates a DOM tree like this:
Document
 ├── html
 │   ├── head
 │   │   ├── title ("DOM Example")
 │   ├── body
 │       ├── h1 ("Hello, World!") [id="heading"]

*/
/* 
  Using JavaScript we can 
  1. access <h1> elements and 
  2. modify it's text:
  
*/
const myHeading = document.getElementById("heading");
myHeading.textContent = "DOM Manipulation in Action!";

const myButton = document.getElementById("button");
myButton.textContent = "I'm Button";

const myParagraph = document.getElementById("paragraph");
myParagraph.textContent =
  "This is a new paragraph that I have changed using the DOM Manipulation. Great!";
// document.body.appendChild(myParagraph);

//  2. DOM Traversal(Navigating the DOM)
/*
  This involves moving between: parent, child, and sibling nodes in the DOM tree.
  
  Common Traversal Methods:
  parentNode → Gets the parent node.
  childNodes → Retrieves all child nodes (including text nodes).
  firstChild / lastChild → Gets the first/last child.
  nextSibling / previousSibling → Navigates between siblings.

*/
//Examle:

const myElement = document.getElementById("heading");
console.log(myElement.parentNode);
console.log(myElement.childNodes);
console.log(myElement.nextSibling);

//  3. DOM Manipulation(Modifying Elements)
/*
  DOM manipulation allows us to:
   - change content.
   - change styles,
   - change structure dynamically

  Selectors:
   getElementById("id")
   getElementsByClassName("class")
   getElementsByTagName("tag")
   querySelector("css-selector")
   querySelectorAll("css-selector")

  Modifying Elements:
   innerHTML → Changes HTML content (⚠️ Not safe for user input).
   textContent → Changes text inside an element (safer).
   setAttribute("attribute", "value") → Sets an attribute.
   style.property → Changes inline CSS.
   createElement(tag) → Creates a new element.
   appendChild(node) → Adds a child node.
   removeChild(node) → Removes a child node.
*/

// Examples:
const heading = document.getElementById("heading");
heading.style.color = "blue";

//  4. Event Listeners (Handling User Interactions)
/*
  Allows Javascript to respond to user actions making the web pages interactive.

*/
//Example: Click Event
const button = document.getElementById("button");
button.addEventListener("click", function () {
  myButton.textContent = "I'm Freddy";
  button.style.color = "blue";
});

//Example: Mouse Hover Event
const myContainer = document.getElementById("container");
myContainer.addEventListener("mouseover", function () {
  myContainer.style.backgroundColor = "lightblue";
});

//DEEPDIVE
/*deeply explain parentNode in DOM Manipulation, 
  giving a realworld example where it is used */

// ......................................


/*    
  1. parentNode - Gets the parent node
                - allows us to access the parent of a specific element.
                - usefull when you need to traverse the DOM tree and manipulate 
                  elements relative to their parent.
     
     Dfntn: parentNode - read-only property that  returns the parent node of the 
                         specified node in the DOM tree.
     
     Usage: allows us yo access & manipulate the parent of a specific element.
          : which can be useful for tasks like
          - removing an element,
          - changing the parent's style,
          - appending new elements to the parent.                    
*/
// Real-World Example:
/*
  Imagine you have a list of items and you want to remove an item when a user 
  clicks a "Remove" button next to it.
  You can use the parentNode property to find the parent of the "Remove" button(which would be 
  the list item ) and then remove that list from the DOM.

*/
// Select all remove buttons
const removeButtons = document.querySelectorAll(".removeBtn");

// Add click event listener to each button
removeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Get the parentNode (the <li> element)
    const listItem = this.parentNode;
    // Remove the <li> element from the DOM
    listItem.parentNode.removeChild(listItem);
  });
});

// ......................................


/*
  2. childNodes - retrieves all child nodes(including text nodes)
                - this property returns a list (NodeList) of all child nodes of
                  an element, including text nodes(like spaces or new lines)

     : used to access a collection of a node's child nodes, including:
       - elements              
       - text nodes              
       - comment nodes.
       
    Dfn: childNodes -is a read-only property that returns a live NodeList
                     of all child nodes of the specified nodes.

    Usage: all us to acces and manipulate the children of a specific element.
          - which can be usefull for tasks such as iterating over child
            elements, modifying their contents, or removing them. 
                   
*/
// Real-World Example
/*
  Imagine you have a list of items, & you want to iterate over each item to apply
  some style changes or perfom some actions.
  You can use the childNodes property to access each child node of the
  list and manipulate them accordingly.

*/

// Get the list element
const itemLists = document.getElementById("itemLists");

// Get all child nodes of the list element.
const children = itemLists.childNodes;

const toggleButton = document.getElementById("toggleButton");
const hideButton = document.getElementById("hideButton");
const showButton = document.getElementById("showButton");

// Add click event listener to the toggle button
toggleButton.addEventListener("click", function () {
  // iterate over each child node
  children.forEach((child) => {
    // Check if the child is an element node(nodeType === 1)
    if (child.nodeType == 1) {
      // Toggle the "highlight" class on the element
      child.classList.toggle("highlight");
    }
  });
});

// Add click event listener to the hide button
hideButton.addEventListener("click", function () {
  // iterate over each child node
  children.forEach((child) => {
    // Check if the child is an element node(nodeType === 1)
    if (child.nodeType == 1) {
      // Add the 'hidden' class to hide the element
      child.classList.add("hidden");
    }
  });
});

// Add click event listener to the show button
showButton.addEventListener("click", function () {
  // iterate over each child node
  children.forEach((child) => {
    // Check if the child is an element node(nodeType === 1)
    if (child.nodeType == 1) {
      // Add the 'hidden' class to hide the element
      child.classList.remove("hidden");
    }
  });
});

// ......................................


/*   
  3. firstChild / lastChild - Gets the first/last child of a specified element, respectively
            
     firstChild - returns the first child node of the specified element.
                - these can be any node type, including element nodes, text nodes or comment nodes.
    
     lastChild  - returns the last child node of the specified element.
                - like firstChild, - these can be any node type, including element nodes, 
                  text nodes or comment nodes.
  
     Usage      - when you quickly want to acces the first and last child of an element.
                
*/

// Real-World Example:
// when you want to highlight the first & last items in a list

// Get the list element
const listItemss = document.getElementById("itemListss");

// Get the highlight button
const highlightButton = document.getElementById("highlightButton");

// Add click event listener to the highlight button
highlightButton.addEventListener("click", function () {
  // Get first & last child nodes
  const firstChild = listItemss.firstElementChild;
  const lastChild = listItemss.lastElementChild;

  //   Check if the first & last child are element nodes(nodeType === 1)
  if (firstChild.nodeType === 1) {
    firstChild.classList.add("highlight");
  }
  if (lastChild.nodeType === 1) {
    lastChild.classList.add("highlight");
  }
});

// ......................................


/*
   4. nextSibling / previousSibling - Navigates to the next/previous sibling node
       

      nextSibling: returns the node immediately following the specified node in the 
                   childNodes list of its parent.

      previousSibling: returns the node immediately preceding the specified node in the 
                       childNodes list of its parent.

      Usage:  used to navigate the DOM tree to access and manipulate relative to a given node.
      
*/

// Real-World Exampe:
/*
  Imagine you have a list of items, and you want to create "Next" and "Previous" 
  buttons to navigate through the list, showing one item at a time.

*/
//Get the list element
const MyItemList = document.getElementById("MyItemList");

// Get the buttons
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Initialize the current item
let currentItem = MyItemList.firstElementChild;

// Show the first current item
currentItem.classList.remove("hidden");

// Add eventListener to the button
nextButton.addEventListener("click", function () {
  // Hide the current item
  currentItem.classList.add("hidden");

  // Get the next sibling element
  const nextSibling = currentItem.nextElementSibling;

  // if there is a next sibling, show it & update   currentItem
  if (nextSibling) {
    nextSibling.classList.remove("hidden");
    currentItem = nextSibling;
  } else {
    // if no next sibling , show the first item again
    currentItem = MyItemList.firstElementChild;
    currentItem.classItem.remove("hidden");
  }
});

// Add event listener to previous button
prevButton.addEventListener("click", function () {
  // Hide the current item
  currentItem.classList.add("hidden");

  //   Get the previous sibling element
  const previousSibling = currentItem.previousElementSibling;

  //if there is a prevoius sibling show it & update currentItem
  if (previousSibling) {
    previousSibling.classList.remove("hidden");
    currentItem = previousSibling;
  } else {
    // If no previous sibling, show the last item again
    currentItem = MyItemList.lastElementChild;
    currentItem.classList.remove("hidden");
  }
});

// ......................................

// 5.  innerHTML
/*
  A property used to set or get the HTML content inside an element.
  - allows us to dynamically change the content of an element by modifying its HTML structure.
  
  Explanation:
  dftn  - a property of an element that contains the HTML or XML markup within the element.
  usage - to read the current HTML content of an element.
        - to replace the content with new HTML.

*/
// Real-World Example
/*
Imagine you have a section of a webpage where you want to dynamically update the content based on user 
interactions, such as clicking a button to load new content. 
*/

// Get the content div and the update button
const contentDiv = document.getElementById("content");
const updateButton = document.getElementById("updateButton");

// Add click event listener to the update button
updateButton.addEventListener("click", function () {
  // Update the innerHTML of the content div
  contentDiv.innerHTML = `
  <h2>New Content</h2>
  <p>This is the updated content.</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  
  `;
});

// ......................................


// 6. setAttribute("attribute", "value")
