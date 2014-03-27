/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var panel = document.getElementById("panel");
    var seasons = ["Spring", "Summer", "Autumn", "Winter"];
    
    panel.innerHTML += "Elements: " + seasons;
    panel.innerHTML += "<br>Joined: " + seasons.join(" and ");
    panel.innerHTML += "<hr>Popped: " + seasons.pop();
    panel.innerHTML += "<br>Elements: " + seasons;
    panel.innerHTML += "<hr>Pushed: " + seasons.push("Winter");
    panel.innerHTML += "<br>Elements: " + seasons;
    panel.innerHTML += "<hr>Sliced: " + seasons.slice(1, 3);
    panel.innerHTML += "<br>Spliced: " + seasons.splice(2, 1, "Fall");
    panel.innerHTML += "<br>Elements: " + seasons;
}

document.addEventListener("DOMContentLoaded", init, false);

