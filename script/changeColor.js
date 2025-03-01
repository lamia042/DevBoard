document.getElementById("change-color").addEventListener("click", function(){
    let randomColor="#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
})

let currentDate = new Date();
let formattedDate = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

document.getElementById("current-date").innerText = formattedDate;