

let show =document.querySelector(".show")

let game =false

let boxs =document.querySelectorAll(".contant .one")

boxs.forEach(box=>{
box.addEventListener("click",(e)=>{

if(e.target.innerHTML==""){

if (game==false) {
    e.target.innerHTML="X"
game=true
show.innerHTML="O"
check()
}
else if(game==true){
    e.target.innerHTML="O"
    game=false
show.innerHTML="X"
    check()

}
}
})

})

let draw =true


function check(){
let arr = []
for(let i =1 ; i<=9 ; i++){
    arr[i]=document.getElementById("A"+i).innerHTML
}
if (arr[1]==arr[2] && arr[2]==arr[3]&& arr[1]!=0) {
    show.innerHTML="Player "+arr[1]+" is wins"
    rest(1,2,3)
}
else if(arr[4]==arr[5] && arr[5]==arr[6]&& arr[4]!=0){
    show.innerHTML="Player "+arr[4]+" is wins"
    rest(4,5,6)

}
else if(arr[7]==arr[8] && arr[8]==arr[9]&& arr[7]!=0){
    show.innerHTML="Player "+arr[7]+" is wins"
    rest(7,8,9)
}
else if(arr[1]==arr[4] && arr[4]==arr[7]&& arr[7]!=0){
    show.innerHTML="Player "+arr[1]+" is wins"
    rest(1,4,7)
}
else if(arr[2]==arr[5] && arr[5]==arr[8]&& arr[2]!=0){
    show.innerHTML="Player "+arr[2]+" is wins"
    rest(2,5,8)
}
else if(arr[3]==arr[6] && arr[6]==arr[9]&& arr[3]!=0){
    show.innerHTML="Player "+arr[3]+" is wins"
    rest(3,6,9)
}
else if(arr[1]==arr[5] && arr[5]==arr[9]&& arr[1]!=0){
    show.innerHTML="Player "+arr[1]+" is wins"
    rest(1,5,9)
}
else if(arr[3]==arr[5] && arr[5]==arr[7]&& arr[3]!=0){
    show.innerHTML="Player "+arr[3]+" is wins"
    rest(3,5,7)
}

if(draw==true){
checkeqwal(arr)
}

}

// دي الفانكشن بتاعت التعادل    
function checkeqwal(arr){
if( arr[1] && arr[2] && arr[3] && arr[4] && arr[5] && arr[6] && arr[7] && arr[8] && arr[9] ){
    show.innerHTML="Draw"
    setTimeout(function(){
        location.reload()
        },1500)
}
}




function rest(a,b,c){
document.getElementById("A"+a).style.color="red"
document.getElementById("A"+b).style.color="red"
document.getElementById("A"+c).style.color="red"
setTimeout(function(){
location.reload()
},1500)
draw=false
}

function restall(){
    location.reload()
}



// دا جزء الدارك مود

let sqware =document.querySelector(".square")
let them =document.querySelector(".them")
let contant =document.querySelector(".contant")
document.body.style.backgroundColor=localStorage.getItem("theam")
contant.style.color=localStorage.getItem("theam")
change()

them.addEventListener("click" ,(e) => {
if(localStorage.getItem("theam")=="white"){
    localStorage.setItem("theam","black")
    localStorage.setItem("color","white")
    sqware.classList.add("active")
    document.body.style.backgroundColor="black"
    contant.style.color="black"
    change()
}else{
localStorage.setItem("theam","white")
localStorage.setItem("color","black")
sqware.classList.remove("active")
document.body.style.backgroundColor="white"
contant.style.color="white"
change()    
}
})

if(localStorage.getItem("theam")=="white"){
sqware.classList.remove("active")
}else{
sqware.classList.add("active")

}


function change(){
    boxs.forEach(element => {
        element.style.backgroundColor=localStorage.getItem("color")
        show.style.backgroundColor=localStorage.getItem("color")
    });
}