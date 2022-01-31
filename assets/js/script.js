let score = 99;
let simulation = "complete";
document.getElementById('result').innerText = simulation

window.addEventListener("DOMContentLoaded", function() {
    console.log("Firing message to parent");

    // signal the parent that we're loaded.
    window.parent.postMessage(simulation, "*")
}, false);