let item=JSON.parse(localStorage.getItem("item"));

function displayitemm(item)
{
    let leftbox=document.querySelector('#leftbox');
    leftbox.innerHTML="";

    const itemtitle = document.createElement('h1');
    itemtitle.innerText=item.title;

    const itemdate = document.createElement('p');
    itemdate.innerText=`Publish Date:- ${item.date}`;

    const itemimg = document.createElement('img');
    itemimg.src=item.img;

    const itemcontent = document.createElement('p');
    itemcontent.innerText=item.content;

   

    leftbox.append(itemtitle,itemdate,itemimg,itemcontent)
}
displayitemm(item);


let postedBlog=JSON.parse(localStorage.getItem("userBlogs")) || [];
let makeupLS=JSON.parse(localStorage.getItem("makeupLS")) || [];
let skincareLS=JSON.parse(localStorage.getItem("skincareLS")) || [];
let haicareLS=JSON.parse(localStorage.getItem("haicareLS")) || [];


if(item.category=="HaireCare")
{
    displayadd(haicareLS);
}
else if(item.category=="MakeUp"){
    displayadd(makeupLS);

}
else if(item.category=="SkinCare"){
    displayadd(skincareLS);

}

   function displayadd(data){
    let topSearch=document.querySelector(".tosearch");
    topSearch.innerHTML=""
    data.forEach(function(elem,index){
        let div=document.createElement("div");
        let addimg=document.createElement("img");
        addimg.src=elem.img;

        let heading=document.createElement("h5");
        heading.innerText=elem.title;
        
        div.addEventListener("click",function(e){
            e.preventDefault();
            itemdisplay(elem);
        })

        topSearch.append(div)
        div.append(addimg,heading);
    })
    
   }
    function itemdisplay(elem)
{
    let item=localStorage.setItem("item",JSON.stringify(elem));
    window.location.href="product_makeup.html";
}