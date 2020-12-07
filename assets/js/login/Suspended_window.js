function login_test(id)
{
    var a=document.getElementById(id);
    console.log(a);
    if(a.style.display=="none"){
        a.style.display="block";
    }else
        a.style.display="none";
}
function login_cancelBubble(){
    event.cancelBubble=true;
}