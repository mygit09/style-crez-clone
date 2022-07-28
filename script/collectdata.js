// catching date
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();





let makeupLS=JSON.parse(localStorage.getItem("makeupLS"));



let skincareLS=JSON.parse(localStorage.getItem("skincareLS"));


let haicareLS=JSON.parse(localStorage.getItem("haicareLS"));


const form = document.querySelector('#blogform');
let postedBlog=JSON.parse(localStorage.getItem("userBlogs")) || [];

form.addEventListener("submit",function(e){
    // e.preventDefault();
    let obj={
                title:form.title.value,
                img:form.plink.value,
                category:form.category.value,
                sub_category:form.Subcategory.value,
                content:form.blogcontent.value,
                date:date,
        
    };
  
    for(let i in obj)
    {
        if(obj[i].length==0)
        {
            alert("FIll all field");
            return;
        }
        else if(obj["category"]=="MakeUp"){
            makeupLS.push(obj);
            localStorage.setItem("makeupLS",JSON.stringify(makeupLS))
            alert("Blog Have Posted Successfully");

            postedBlog.push(obj);
            localStorage.setItem("userBlogs",JSON.stringify(postedBlog))
            return;
        }
        else if(obj["category"]=="SkinCare"){
            skincareLS.push(obj);
            localStorage.setItem("skincareLS",JSON.stringify(skincareLS))
            alert("Blog Have Posted Successfully");

            postedBlog.push(obj);
            localStorage.setItem("userBlogs",JSON.stringify(postedBlog))
            return;
        }
        else if(obj["category"]=="HaireCare"){
            haicareLS.push(obj);
            localStorage.setItem("haicareLS",JSON.stringify(haicareLS))
            alert("Blog Have Posted Successfully");

            postedBlog.push(obj);
            localStorage.setItem("userBlogs",JSON.stringify(postedBlog))
            return;
        }
       
       
    }
   
});