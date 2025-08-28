1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
getElementById selects a element by unique id. getElementsByClassName selects all elements of the class. querySelector select the first element of the given tag name. querySelectAll selects all emement of the given tag name.

2.How do you create and insert a new element into the DOM?
Answer:
const newElement = document.createElement("div");
newElement.innerText = "I am Prosun";
document.body.appendChild(newElement);

3.What is Event Bubbling and how does it work?
Answer:
When an event happens in an element it happens from bottom to top. child -> parent -> grandparent and so on.

4.What is Event Delegation in JavaScript? Why is it useful?
Answer:
When an event happens in an element it happens from bottom to top. child -> parent -> grandparent and so on.
So instread of adding eventlistener to all childs adding it in the parent and use event in the parameter and use event.target to select.

5.What is the difference between preventDefault() and stopPropagation() methods?
Answer:
preventDefault() stops browsers default actions and stopPropagation() stops Event Bubbling.
