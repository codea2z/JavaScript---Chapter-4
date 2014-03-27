/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var panel = document.getElementById("panel");
    var i;
    var week = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    var weekend = ["Sat", "Sun"];
    
    panel.innerHTML += "Weekdays: " + week;
    panel.innerHTML += "<hr>Weekend days: " + weekend;
    
    for (i = 0; i < weekend.length; i++)
    {
        week[week.length] = weekend[i];
    }
    
    panel.innerHTML += "<hr>Increased with weekend days: " + week;
    
    week.length -= 2;
    
    panel.innerHTML += "<hr>Reduced back to week days: " + week;
}

document.addEventListener("DOMContentLoaded", init, false);

