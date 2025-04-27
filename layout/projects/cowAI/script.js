var chat_log = "";

function main(event)
{

    if(event.key =="Enter"){

    var prompt = document.getElementById("prompt").value;

    document.getElementById("prompt").value = "";

    var output = document.getElementById("chat_history");

    var answer = "M";

    var answer_len = Math.floor(Math.random() * 9 + 2);

    for (let i = 0; i < answer_len; i++){

        answer = answer + "o";

    }


    chat_log = chat_log + "You:     " + prompt + "<br>" + "BovAi:       " + answer + "<br>";

    output.innerHTML = chat_log;

    }


}

function toggleInfo(open)
{

    var info = document.getElementById("info")
    var nav = document.getElementById("navigation")

    if (open)
    {

        info.style.display="none";
        nav.style.visibility="visible";

    }

    if (!open)
    {

        info.style.display="block";
        nav.style.visibility="hidden";


    }
    

}


function toggleMenu(open)
{

    var menu = document.getElementById("menu")
    var nav = document.getElementById("navigation")

    if (open)
    {

        menu.style.display="none";
        nav.style.visibility="visible";

    }

    if (!open)
    {

        menu.style.display="block";
        nav.style.visibility="hidden";

    }
    

}