/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function sortNums(x, y)
{
    return (x - y);
}

function init()
{
    var panel = document.getElementById("panel");
    var hues = ["Red", "RED", "red", "Green", "Blue"];
    var nums = [1, 20, 3, 45, 44, 0.5];
    
    panel.innerHTML += "Colours:" + hues;
    panel.innerHTML += "<br>Dictionary sort: " + hues.sort();
    panel.innerHTML += "<hr>Numbers: " + nums;
    panel.innerHTML += "<br>Dictionary sort: " + nums.sort();
    panel.innerHTML += "<br>Numerical sort: " + nums.sort(sortNums);
    panel.innerHTML += "<br>Reversed: " + nums.reverse();
}

document.addEventListener("DOMContentLoaded", init, false);

