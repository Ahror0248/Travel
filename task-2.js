let a = `wefdw`
let b = `BCA`
let a1 = a.split(``).sort();
let a2 = b.split(``).sort();
function bass (){
    for(let i=0; i<a1.length;i++){
        for(let q=0;q<a2.length;q++){
            if(a1[i]===a2[q]) return true;
            else return false;
        }
    }
}
console.log(bass())