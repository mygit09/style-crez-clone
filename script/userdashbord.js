let postedBlog=JSON.parse(localStorage.getItem("userBlogs")) || [];
let makeupLS=JSON.parse(localStorage.getItem("makeupLS")) || [];
let skincareLS=JSON.parse(localStorage.getItem("skincareLS")) || [];
let haicareLS=JSON.parse(localStorage.getItem("haicareLS")) || [];
// console.log(postedBlog);
// console.log(makeupLS);
// console.log(skincareLS);
// console.log(haicareLS);



let userdata=JSON.parse(localStorage.getItem("SignIn")) || [];
let displayName=userdata.user_name;

document.querySelector('#display_name').innerHTML=displayName;


function display(makeupData){
    document.querySelector('#post-count').innerHTML=postedBlog.length;
    let container = document.querySelector('.post_container');
    container.innerHTML="";
    makeupData.forEach(function(elem,index){
       
        let div = document.createElement('div');
        let bimg = document.createElement('img');
        bimg.src=elem.img;
        let title = document.createElement('h3');
        title.innerText=elem.title;
        let div1 = document.createElement('div');
        div1.setAttribute("id","deletebtn_span")

        let Dbtn = document.createElement('button');
        Dbtn.innerText="Delete";
        Dbtn.addEventListener("click",function(){
            deleteBlog(elem,index)
        })

        let date = document.createElement('p');
        date.innerText=`Publish Date:- ${elem.date}`;
        
        div.addEventListener("click",function(e){
        e.preventDefault();
        console.log(elem);
        })

        container.append(div)
        div1.append(date,Dbtn)
        div.append(bimg,title,div1)
       
        
    });
}
display(postedBlog);

function deleteBlog(elem,index){
    console.log("inside delete")
    if(elem.category=="HaireCare"){
        for(let i=0; i<haicareLS.length; i++)
        {
            if(elem.title==haicareLS[i]["title"])
            {
                
            haicareLS.splice(i,1);
            localStorage.setItem("haicareLS",JSON.stringify(haicareLS));
            }
        }
        
    }

    else if(elem.category=="MakeUp"){
        for(let i=0; i<makeupLS.length; i++)
        {
            if(elem.title==makeupLS[i]["title"])
            {
                
                makeupLS.splice(i,1);
                localStorage.setItem("makeupLS",JSON.stringify(makeupLS))
            }
        }
        
    }

    else if(elem.category=="SkinCare"){
        for(let i=0; i<skincareLS.length; i++)
        { console.log();
            if(elem.title==skincareLS[i]["title"])
            {
                skincareLS.splice(i,1);
                localStorage.setItem("skincareLS",JSON.stringify(skincareLS))
                
            }
        }
       
    }

    
    postedBlog.splice(index,1);
    document.querySelector('#post-count').innerHTML=postedBlog.length;
    localStorage.setItem("userBlogs",JSON.stringify(postedBlog));
    display(postedBlog);

}