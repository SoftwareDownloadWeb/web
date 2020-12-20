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

function login(type) {
    var iframe= document.getElementById("a_iframe");
    var a = document.getElementById("a_login");
    var b = document.getElementById("a_register");
    if(type=="login"){
        a.style.color="black";
        b.style.color="gray";
    }
    else{
        b.style.color="black";
        a.style.color="gray";
    }
    iframe.src = "public/" + type + ".html";
    console.log(iframe.src);
}
