function login_test(id)
{
    var a=document.getElementById(id);
    if(a.style.display=="block"){
        a.style.display="none";
    }else
        a.style.display="block";
}
function login_cancelBubble(){
    event.cancelBubble=true;
}