//UC10

const PartTime = 1;
const FullTime = 2;
const PartTimeHours = 4;
const FullTimeHours = 8;
const WageperHour = 20;
const WorkingDays = 20;
const MaxHours_In_A_Month = 160;

let TotalEmpHrs = 0;
let TotalWorkingDays = 0;
let empdailyHrsAndWageArr = new Array();

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
    empdailyHrsAndWageArr.push(
        {
            dayNum:TotalWorkingDays,
            dailyHours:EmpHrs,
            dailyWage:DailyWages(EmpHrs),
            toString(){
                return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours +
                        ' And Wage Earned = ' + this.dailyWage
            },
        });
}
console.log(" Showing daily hours worked and wage earned : " + empdailyHrsAndWageArr);
