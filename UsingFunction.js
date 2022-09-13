//UC3
const PartTime = 1;
const FullTime = 2;
const PartTimeHours = 4;
const FullTimeHours = 8;
const WageperHour = 20;

function getWorkingHours(CheckEmp)
{
    switch(CheckEmp)
{
    case PartTime:
        return PartTimeHours; 
    case FullTime:
        return FullTimeHours;
    default:
        return 0;
}
}
let empHrs=0;
let CheckEmp = Math.floor(Math.random() * 10) % 3;
let Emphours = getWorkingHours(CheckEmp);
let EmpWage = Emphours * WageperHour;
console.log("Employee Wage is: " + EmpWage);
