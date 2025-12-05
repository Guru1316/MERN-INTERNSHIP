let text = document.querySelector("#text");
let c1 = 0;
function changeText()
{
    c1 = c1 + 1;
    if(c1%2==1)
    {
        text.textContent = "Text has been Changed!";
    }
    else
    {
        text.textContent = "This is a sample text."
    }
}

let box = document.querySelector(".box");
// let c2 = 0;
// function changeColor()
// {
//     c2 = c2 + 1;
//     if(c2%2==1)
//     {
//         box.style.backgroundColor = "rgb(169, 215, 255)";
//     }
//     else
//     {
//         box.style.backgroundColor = "#ddd"
//     }
// }
function changeColor()
{
    box.classList.toggle("a");
}

function hideBox()
{
    box.style.display = "none";
}

function showBox()
{
    box.style.display = "flex";
}

let itemInput = document.querySelector("#itemInput");
let ul = document.querySelector("#list");
function addItem()
{
    let li = document.createElement("li");
    let content = itemInput.value;
    li.textContent = content;
    li.style.color = "black";
    ul.appendChild(li);
}