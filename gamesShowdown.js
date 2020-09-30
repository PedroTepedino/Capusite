function Expand(id)
{
    var mainElement = document.getElementById("gamesShowdownHorizontal");

    for (i = 0; i < mainElement.children.length; i++)
    {
        if (mainElement.children[i].id === id)
        {
            mainElement.children[i].classList.remove("col-1");
            mainElement.children[i].classList.remove("shrink");
            mainElement.children[i].classList.add("col");
            mainElement.children[i].classList.add("grow");
        }
        else
        {
            mainElement.children[i].classList.remove("col");
            mainElement.children[i].classList.remove("grow");
            mainElement.children[i].classList.add("col-1");
            mainElement.children[i].classList.add("shrink");
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
            mainElement.children[i].children[0].classList.remove("gameShowImageVerticalCollapsed");
            mainElement.children[i].children[0].classList.add("gameShowImageVerticalExpanded");
        }    
        else
        {
            mainElement.children[i].children[0].classList.remove("gameShowImageVerticalExpanded");
            mainElement.children[i].children[0].classList.add("gameShowImageVerticalCollapsed");
        }
    }
}