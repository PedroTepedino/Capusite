function Expand(id)
{
    var mainElement = document.getElementById("gamesShowdownHorizontal");

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

function ExpandVertical(id)
{
    var mainElement = document.getElementById("gamesShowdownVertical");

    for (i = 0; i < mainElement.children.length; i++)
    {
        if (mainElement.children[i].id === id)
        {
            mainElement.children[i].classList.remove("gameShowImageVerticalCollapsed");
            mainElement.children[i].classList.add("gameShowImageVerticalExpanded");
        }    
        else
        {
            mainElement.children[i].classList.remove("gameShowImageVerticalExpanded");
            mainElement.children[i].classList.add("gameShowImageVerticalCollapsed");
        }
    }
}