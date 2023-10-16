let a=[4,21,5,22,18,42,87,20]
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]<a[j]){
            let temp=a[i]
            a[i]=a[j]
            a[j]=temp
        }
    }
}
console.log(a);