//UC1
const IS_ABSENT=0
let empcheck=Math.floor(Math.random() * 10) % 2

console.log(empcheck)
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10))

if (empcheck==IS_ABSENT)
{
    console.log("Employee is absent")
}
else{
    console.log("Employee is Present")
}
