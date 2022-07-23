
let haicareLS=JSON.parse(localStorage.getItem("haicareLS"))|| []


function display(haicareLS){
    let container = document.querySelector('.data_container');
    container.innerHTML="";
    haicareLS.forEach(function(elem,index){
       
        let div = document.createElement('div');
        let bimg = document.createElement('img');
        bimg.src=elem.img;
        let title = document.createElement('h3');
        title.innerText=elem.title;
        let date = document.createElement('p');
        date.innerText=`Publish Date:- ${elem.date}`;
        
div.addEventListener("click",function(e){
    e.preventDefault();
    console.log(elem);
})

        container.append(div)
        div.append(bimg,title,date)
        
    });
}

display(haicareLS);


const all = document.querySelector('#all');
all.addEventListener('click',function(e){
    
    display(haicareLS);
})

const Scat1 = document.querySelector('#Scat1');
Scat1.addEventListener('click',function(e){
    let filterdata=haicareLS.filter(function(ele){
        return ele.sub_category==="Dandruff";
    });
    display(filterdata);
})
const Scat2 = document.querySelector('#Scat2');
Scat2.addEventListener('click',function(e){
    let filterdata=haicareLS.filter(function(ele){
        return ele.sub_category==="DryHairCare";
    });
    display(filterdata);
});

const Scat3 = document.querySelector('#Scat3');
Scat3.addEventListener('click',function(e){
    let filterdata=haicareLS.filter(function(ele){
        return ele.sub_category==="HairTreatment";
    });
    display(filterdata);
})

