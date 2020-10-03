$(document).ready(function()
{
   $(document).click(function (event)
   {
       var clickOver = $(event.target);
       if (!clickOver.hasClass("navbar-toggle") ) {
           $("#navbarButtons").collapse('hide');
       }
   });
});