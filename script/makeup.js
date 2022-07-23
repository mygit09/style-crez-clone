
let makeupData=JSON.parse(localStorage.getItem("makeupLS"));
function display(makeupData){
    let container = document.querySelector('.data_container');
    container.innerHTML="";
    makeupData.forEach(function(elem,index){
       
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

display(makeupData);


const all = document.querySelector('#all');
all.addEventListener('click',function(e){
    
    display(makeupData);
})

const Scat1 = document.querySelector('#Scat1');
Scat1.addEventListener('click',function(e){
    let filterdata=makeupData.filter(function(ele){
        return ele.sub_category==="MehandiDesigns";
    });
    display(filterdata);
})
const Scat2 = document.querySelector('#Scat2');
Scat2.addEventListener('click',function(e){
    let filterdata=makeupData.filter(function(ele){
        return ele.sub_category==="NailArt";
    });
    display(filterdata);
});

const Scat3 = document.querySelector('#Scat3');
Scat3.addEventListener('click',function(e){
    let filterdata=makeupData.filter(function(ele){
        return ele.sub_category==="FaceMakeup";
    });
    display(filterdata);
})

