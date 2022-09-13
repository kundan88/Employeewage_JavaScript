//UC8
const PartTime = 1;
const FullTime = 2;
const PartTimeHours = 4;
const FullTimeHours = 8;
const WageperHour = 20;
const WorkingDays = 20;
const MaxHours_In_A_Month = 160;

let TotalEmpHrs = 0;
let TotalWorkingDays = 0;
let EmpDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();


function CalculateDailyWage(CheckEmp)
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
function DailyWages(EmpHrs)
{
    return EmpHrs * WageperHour;
}

let EmpHrs = 0;
let dailyEmpHrs = 0;
let dailyempwage = 0;

while(TotalEmpHrs <= MaxHours_In_A_Month && TotalWorkingDays < WorkingDays)
{
    TotalWorkingDays++;
    let CheckEmp = Math.floor(Math.random() * 10) % 3;
    TotalEmpHrs += CalculateDailyWage(CheckEmp);
    dailyEmpHrs += CalculateDailyWage(CheckEmp);
    let EmpHrs = CalculateDailyWage(CheckEmp);
    TotalEmpHrs += EmpHrs;
    EmpDailyWageArr.push(DailyWages(EmpHrs));
    empDailyHrsMap.set(TotalWorkingDays, EmpHrs);
    empDailyWageMap.set(TotalWorkingDays, DailyWages(EmpHrs));
}
let EmpWage = TotalEmpHrs * WageperHour;
dailyempwage = dailyEmpHrs * WageperHour;
console.log("Total Emp Wage: " + EmpWage + "\nDaily Emp Wage: " + dailyempwage);

// UC 7A : Calc Total Wage using Array foreach traversal or reduce method
let TotEmpWage = 0;
function sum(dailyempwage){
    TotEmpWage += dailyempwage;
}
EmpDailyWageArr.forEach(sum);
console.log("Total Days: " + TotalWorkingDays + " Total Hrs: " + TotalEmpHrs + " Emp Wage: " + TotEmpWage);

function totalWages(totalWages,dailyempwage){
    return totalWages + dailyempwage;
}
console.log("Emp Wage with reduce: " + EmpDailyWageArr.reduce(totalWages,0));

// UC 7B : Show the day along with daily wage using Array Map Helper function.
let dailycntr = 0;
function mapDaywithWage(dailyWage){
    dailycntr++;
    return dailycntr + " = " + dailyWage;
}
let mapDaywithWageArr = EmpDailyWageArr.map(mapDaywithWage);
console.log(mapDaywithWageArr);

// UC 7C : Show Days when Full time wage of 160 were earned
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDaywageArr = mapDaywithWageArr.filter(fulltimeWage);
console.log(" UC:7C-- " + fullDaywageArr);

// UC 7D : Find the first occurence when full time wage was earned using find function
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log(" UC:7D-- " + mapDaywithWageArr.find(findFulltimeWage));

// UC 7E : Check if every element of full time wage is truely holding full time wage
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log(" UC:7E-- " + fullDaywageArr.every(isAllFulltimeWage));

// UC 7F : Check if there is any part time wage
function isAnyPartTimewage(dailyWage){
    return dailyWage.includes("80");
}
console.log(" UC:7F-- " + mapDaywithWageArr.some(isAnyPartTimewage));

// UC 7G : Find the number of Days the Employee Works
function totalDaysWorked(numofDays,dailyWage){
    if (dailyWage > 0) return numofDays+1;
    return numofDays;
}
console.log(" UC:7G-- " + EmpDailyWageArr.reduce(totalDaysWorked, 0));

//UC 8 - Map Function
console.log("Emp Wage Map Total Wages: " + 
Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

