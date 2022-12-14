
"use strict";

const LogIn=document.querySelector("#Log-In>button");
const PopUp=document.getElementById("Log-In-Pop-Up");

LogIn.addEventListener("click",temp);

const HomeRightContainer=document.querySelector("#Body-Container>#Right-Container");

const HomeLeftContainer=document.querySelector("#Body-Container>#Left-Container");

let i=0;

console.log(HomeLeftContainer.children.length);

for(i=0;i<HomeLeftContainer.children.length;i++)
{
    HomeLeftContainer.children[i].addEventListener('click',updateHomeNews);
}

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

function updateHomeNews()
{
    console.log(HomeRightContainer.children[i]);
}