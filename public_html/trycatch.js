/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var panel = document.getElementById("panel");
    var day = 0;
    
    try 
    {
        if (day > 31)
        {
            throw new RangeError(" 'day' cannot exceed 31");
        }
        if (day < 1)
        {
            throw "GetReal";
        }
    }
    catch(err)
    {
        panel.innerHTML = (err === "GetReal") ? 
            ("Oops! The 'day' variable has an invalid value of " + day) :
            (err.name + " exception has occurred: " + err.message);
    }
    finally
    {
        panel.innerHTML += 
            "<br>The script has ignored that variable and is continuing";
    }
    
    
}

document.addEventListener("DOMContentLoaded", init, false);

