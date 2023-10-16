let names=document.getElementById('name')
let submit=()=>{
    let str=names.value
    let s=""
    for(let i=0;i<str.length;i++){
        s=str[i]+s
    }
    names.value=s
}