const dropmenu = document.getElementsByClassName("menu")[0];
const drop = document.getElementsByClassName("icon")[0];
const bodyt = document.querySelector("body");

let displayfun = (e)=>{
    if(e.target===drop)
    {
        if(getComputedStyle(dropmenu).display==="none")
        {
            dropmenu.style.display="block";
        }
        else{
            dropmenu.style.display="none";
        }
    }
    else if(e.target!=drop)
    {
        dropmenu.style.display="none";
    }
}
bodyt.addEventListener("click",displayfun);

