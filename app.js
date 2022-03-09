function Add(str)
{
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.value = "str";

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(str))
    if(str ===""){
        alert("Enter Your Todo for today");
    }else{
        document.getElementById('list').appendChild(li);
       
            
        alert("TODO created");
    }
}

function Delete()
{
    var li = document.getElementById('list');
    
        li.children[0].style.textDecoration = "line-through";
    

    li.removeChild(li.childNodes[0]);
}

