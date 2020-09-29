function Expand(id)
{
    var mainElement = document.getElementById("gamesShowdown").children[0];

    for (i = 0; i < mainElement.children.length; i++)
    {
        if (mainElement.children[i].id === id)
        {
        mainElement.children[i].classList.remove("col-1");
        mainElement.children[i].classList.add("col");
        }
        else
        {
        mainElement.children[i].classList.remove("col");
        mainElement.children[i].classList.add("col-1");
        }
    }   
}