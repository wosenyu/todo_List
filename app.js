const li = document.createElement('li');

const checkbox = document.createElement('input');
const dueDate = document.querySelector('.Duedate');

checkbox.type = "checkbox";
//checkbox.value = "str";
//checkbox.checked = true;



function Add(str, time) {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    const date = document.createElement('input');
    const dueDate = document.querySelector('.Duedate');

    var array = ["URGENT", "Important", "Normal"];

    date.type = "date";
    checkbox.type = "checkbox";
    checkbox.value = "str";
    //checkbox.checked = true;
    let select = document.createElement('select');

    select.id = "Select";
    li.appendChild(checkbox);
    li.appendChild(date);
    li.appendChild(document.createTextNode(str))
    //li.appendChild(document.createTextNode(time));
    li.appendChild(date);
    li.appendChild(select);
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        option.style.color = "#ff0000";
        select.style.color = "#ff0000";
        select.appendChild(option);
    }

    if (str === "") {
        alert("Enter Your Todo for Today");
    } else {
        document.getElementById('list').appendChild(li);

        //document.getElementById('list').appendChild(dueDate);
    }
}
function deleteAll() {
    const li = document.getElementById('list');
    const dueDate = document.querySelector('.Duedate');
    li.removeChild(li.childNodes[0]);
    dueDate.removeChild(dueDate.childNodes[0]);
}
function Delete() {
    const li = document.getElementById('list');
    const dueDate = document.querySelector('.Duedate');


    if (checkbox.checked) {
        li.removeChild(li.childNodes[0]);
        while (li.hasChildNodes()) {
            li.removeChild(li.firstChild);
        }
    }
}

const list = document.querySelector('ol');
list.addEventListener('click', function (e) {
    const audio = new Audio('ding-sound-effect_2.mp3');
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        audio.play();
    }
}, false);
