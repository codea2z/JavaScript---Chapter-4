/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Car(make, model, colour)
{
    this.make = make;   // Properties
    this.model = model;
    this.colour = colour;
}

function init()
{
    var panel = document.getElementById("panel");
    var myCar = new Car("Ford", "Sierra", "Blue");
    Car.prototype.doors = 4;
    
    for (property in myCar)
    {
        if (myCar[property] !== "")
        {
            panel.innerHTML += (property + ": " + myCar[property] + "<br>");
        }    
    }
    
    panel.innerHTML += "<hr>";
    
    myCar.make = "Dodge";
    myCar.model = "Challenger";
    myCar.colour = "Orange";
    myCar.doors = 2;
   
    for (property in myCar)
    {
        if (myCar[property] !== "")
        {
            panel.innerHTML += (property + ": " + myCar[property] + "<br>");
        }    
    }
}

document.addEventListener("DOMContentLoaded", init, false);

