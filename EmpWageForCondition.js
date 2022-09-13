//UC5
// UC1:Checking Employee Present or Absent
const Is_Present = 1
let EmpCheck = Math.floor(Math.random() * 10) % 2;
if(EmpCheck == Is_Present)
{
    console.log("Employee is Present");
}
else
{
    console.log("Employee is Absent");
}

// UC5:Checking Employee Wage with Condition
const PartTime = 1;
const FullTime = 2;
const PartTimeHours = 4;
const FullTimeHours = 8;
const WageperHour = 20;
const WorkingDays = 20;
const MaxHours_In_A_Month = 160;

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
let TotalEmpHrs = 0;
let TotalWorkingDays = 0;
while(TotalEmpHrs <= MaxHours_In_A_Month && TotalWorkingDays < WorkingDays)
{
    TotalWorkingDays++;
    let CheckEmp = Math.floor(Math.random() * 10) % 3;
    TotalEmpHrs += CalculateDailyWage(CheckEmp);
}
let EmpWage = TotalEmpHrs * WageperHour;
console.log("Total Days: " + TotalWorkingDays + "\nTotal Hours: " + TotalEmpHrs +"\nEmployee Wage is: " + EmpWage);


