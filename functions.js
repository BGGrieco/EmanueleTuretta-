$(document).ready(function()
{
    $("#sestasi").hover(function()
    {
        $("#one").toggleClass("coverOn");
    });

    $("#delia").hover(function()
    {
        $("#two").toggleClass("coverOn");
    });

    $("#altro").hover(function()
    {
        $("#three").toggleClass("coverOn");
    });

    $("#altroAncora").hover(function()
    {
        $("#four").toggleClass("coverOn");
    });
});
