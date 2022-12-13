
"use strict";

const LogIn=document.querySelector("#Log-In>button");
const PopUp=document.getElementById("Log-In-Pop-Up");

LogIn.addEventListener("click",temp);


function temp()
{
    PopUp.style.zIndex=5;
    // alert("Load Login Page here");
}

const PopUpClose=document.querySelector("#Pop-Up-Container>button");

PopUpClose.addEventListener('click',closePopUp);

function closePopUp()
{
    PopUp.style.zIndex=-5;
    // alert("pop up closed");
}