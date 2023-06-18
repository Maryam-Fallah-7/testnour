// var btn=document.getElementById('btn');
// function Toggle(){
//     if(btn.classList.contains("far")){
//         btn.classList.remove("far");
//         btn.classList.add('fas');
//     }else{
//         btn.classList.remove("fas");
//         btn.classList.add('far');
//     }
// }




document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('far')){
        e.target.classList.remove("far")
        e.target.classList.add('fas');
       
    }else if(e.target.classList.contains('fas')){
    e.target.classList.remove('fas');
    e.target.classList.add('far');
    }
    })
    