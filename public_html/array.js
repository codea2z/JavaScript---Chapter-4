/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var summer = ["June", "July", "August"];
    
    for (month in summer)
    {
        if (summer[month] !== "")
        {
            panel.innerHTML += (month + ": " + summer[month] + "<br>");
        }
    }
    panel.innerHTML += "Vacation month: " + summer[2];
}

document.addEventListener("DOMContentLoaded", init, false);

