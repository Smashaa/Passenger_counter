// Corrected to use the proper method to get the element by its ID
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");
let count = 0;


// Sets initial value
countEl.innerText = count;

function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    let countstr = count + " - "
    saveEl.textContent += countstr
    countEl.textContent = 0;
    count = 0;
    

}


save();