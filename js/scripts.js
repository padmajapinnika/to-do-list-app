
/* Javascript
// 1. Adding a new item to the list of items:
function newItem(){
    let li= document.createElement("li");
    let inputValue = document.getElementById("input").value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let list = document.querySelector('#list');
        list.appendChild(li);
    }
// 2. Crossing out an item from the list of items:
    function crossOut() {
        li.classList.toggle("strike");
    }

    li.addEventListener("dblclick", crossOut);

// 3A. Adding the delete button "X":
    let crossOutButton = document.createElement("crossOutButton");
    crossOutButton.appendChild(document.createTextNode("X"));
    li.appendChild(crossOutButton);
    crossOutButton.addEventListener("click", deleteListItem);

// 3B. Adding class Delete (Display: None) from the css:
    function deleteListItem() {
        li.classList.add("delete")
    }
// 4. Reordering the items
    $('#list').sortable();
}
*/


// JQuery:
function newItem() {
    // 1. Adding a new item to the list
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You Must Write Something!");
    } else {
        $('#list').append(li);
    }

    // 2. Crossing out an Item
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick",function crossOut() {
        li.toggleClass("strike");
    });

    // 3. Delete Button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
    function deleteListItem() {
        li.addClass("delete");
    }
    $('#list').sortable();
}