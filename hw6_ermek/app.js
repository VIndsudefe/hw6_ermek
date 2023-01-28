let p =document.querySelector(".counter")
const plus=document.querySelector(".add")
const minus=document.querySelector(".minus")

plus.onclick=()=>{
    p.innerHTML++
}
minus.onclick=()=>{
    p.innerHTML--
}