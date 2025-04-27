function toggleMenu()
{


    var menu = document.getElementById("collapsed");
    var bottom = document.getElementById("bottomShelf");

    if(menu.style.display == "flex")
    {
    menu.style.display="none";
    bottom.style.position="fixed";
    }

    else
    {
    menu.style.display="flex";
    bottom.style.position="relative";
    }

}