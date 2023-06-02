let shEl=document.getElementById("scoreH")
let countH=0
function add1h(){
    countH+=1
    shEl.textContent=countH
}
function add2h(){
    countH+=2
    shEl.textContent=countH
}
function add3h(){
    countH+=3
    shEl.textContent=countH
}

let saEl=document.getElementById("scoreA")
let countA=0
function add1a(){
    countA+=1
    saEl.textContent=countA
}
function add2a(){
    countA+=2
    saEl.textContent=countA
}
function add3a(){
    countA+=3
    saEl.innerText=countA
}
