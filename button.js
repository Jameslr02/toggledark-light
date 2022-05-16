let lightmode = false;
function toggleswitch() {
    if (!lightmode)
    {
    lightmode = true;
    let circle1 = document.getElementsByClassName('circle');
    let svg1 = document.getElementsByClassName('svg1');
    let svg2 = document.getElementsByClassName('svg2');
    let trac = document.getElementsByClassName('darktrac');
    // svg1[0].style.display = "none";
    svg1[0].style.transform = "scaleX(0) scaleY(0)";
    
    circle1[0].style.background = "#383838";
    trac[0].style.background = "#404040";
    svg1[0].style.width = "0px";
    svg1[0].style.height = "0px";
    svg2[0].style.width = "12px";
    svg2[0].style.height = "16px";
    // console.log(getElementsByClassName("circle"));
    // // document.getElementsByClassName("circle").style.transform("translateX(30px)");
    svg2[0].style.display = "block";
    svg2[0].style.transform = "scaleX(1) scaleY(1)";
    circle1[0].style.transform = "translateX(17px)";
    }
    else if(lightmode) {
        lightmode = false;
    let circle1 = document.getElementsByClassName('circle');
    let trac = document.getElementsByClassName('darktrac');
    let svg1 = document.getElementsByClassName('svg1');
    let svg2 = document.getElementsByClassName('svg2');
    svg2[0].style.width = "0px";
    svg2[0].style.height = "0px";
    svg1[0].style.width = "18px";
    svg1[0].style.height = "18px"
    svg2[0].style.transform = "scaleX(0) scaleY(0)";
    circle1[0].style.background = "skyblue";
    trac[0].style.background = "skyblue";
    svg1[0].style.display = "block";
    svg1[0].style.transform = "scaleX(1) scaleY(1)";
    circle1[0].style.transform = "translateX(0px)";
    }
}
