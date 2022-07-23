onload();
function onload(){
    let loginflag=JSON.parse(localStorage.getItem("loginFlag")) || 0;
if(loginflag!==0)
    { console.log("inside function")
    const account = document.querySelector('#account-tab');
    let account_HTML=account;
    account.innerHTML="";
    let name=JSON.parse(localStorage.getItem("SignIn")).user_name;
    account.innerText=name;
    account.style.color="#FF5C75";
    account.style.fontSize="18px";
    account.addEventListener("click",function(){
        window.location.href="./userdashbord.html";
    })

    let postBLog=document.querySelector(".nav-heading>div:first-child");
    let postBTN= document.createElement('button');
    postBTN.innerText="+ Post Blog";
    postBTN.addEventListener("click",function(){
        window.location.href="./collectdata.html";
    })
    postBLog.append(postBTN);
    }
    else{
        document.querySelector('#signup').addEventListener("click",function(){
            window.location.href = "sign_up.html";
        });
        document.querySelector('#signin').addEventListener("click",function(){
            window.location.href = "sign_in.html";
        });
        
        
    }
}

const mainimg = document.querySelector('.nav-heading>div>img');
        mainimg.style.cursor="pointer";
        mainimg.addEventListener("click",function(){
            window.location.href="index.html"
        });
