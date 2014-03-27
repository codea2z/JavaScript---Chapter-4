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
    
    this.accelerate = accelerate; // Methods - not obvious!!!
   
}

function accelerate()
{
    return "<br>Vroom!";
}

function init()
{
    var panel = document.getElementById("panel");
    var myCar = new Car("Ford", "Sierra", "Blue");
    
    panel.innerHTML = myCar.colour + " " + myCar.make + " " + myCar.model;
    panel.innerHTML += myCar.accelerate();
}

document.addEventListener("DOMContentLoaded", init, false);

