function toggleMenu()
{


    var menu = document.getElementById("collapsed");

    var overlay = document.getElementById("mobile");

    if(menu.style.display == "flex")
    {
    menu.style.display="none";

    overlay.style.backdropFilter="none";

    overlay.style.backgroundColor="rgba(0,0,0,0)";
    }

    else
    {
    menu.style.display="flex";

    overlay.style.backdropFilter="blur(4px)";

    overlay.style.backgroundColor="rgba(23, 4, 53, 0.603)";

    }

}