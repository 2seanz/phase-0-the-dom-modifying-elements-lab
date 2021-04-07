// Write your code here!
// document.querySelector('main').remove();

// const newHeader = document.createElement('h1');
// document.body.appendChild(newHeader);
// newHeader.id = "victory";
// newHeader.innerHTML = "<h1>YOUR-NAME is the champion</h1>";




document.querySelector("main").remove()

// const newHeader = document.createElement("h1")
// newHeader.setAttribute('id', 'victory')

// // const myName = document.createElement("h1")
// myName.textContent = "YOUR-NAME is the champion"
// newHeader.append(myName)


// //newHeader.innerHTML = "<h1>YOUR-NAME is the champion</h1>"

const newHeader = document.createElement("h1");
newHeader.setAttribute("id","victory");
const myName = document.createElement("p");
myName.textContent = "Jamse-Bond  is the champion";
newHeader.appendChild(myName);