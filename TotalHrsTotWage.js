//UC11

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

// UC11A : Create Employee Pay Roll Data with ID Name Salary
let totalWages = empdailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
let totalHours = empdailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log(" Total Hours: " + totalHours + " Total Wages: " + totalWages);

// UC11B : Logging Full working Days
process.stdout.write("logging full working days")
empdailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                    .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

// UC11C : Part Working String
let partWorkingDayStrArr = empdailyHrsAndWageArr
                            .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                            .map(dailyHrsAndWage => dailyHrsAndWage.toString());
                            console.log("\n11C--partWorkingDayStrArr :" + partWorkingDayStrArr);

// UC11D : Non Working Day Number
let nonWorkingDayNums = empdailyHrsAndWageArr
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                        .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
                        console.log("11D--nonWorkingDayNums : " + nonWorkingDayNums);
