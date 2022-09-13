const IS_PARTTIME=1
const IS_FULLTIME = 2
const  PARTTIME_HOURS=4
const FULLTIME_HOURS=8
const WAGE_PER_HOURS=20;

let empHrs=0
let empCheck=Math.floor(Math.random() * 10) % 3

    switch (empCheck)
    {
        case IS_PARTTIME:
            empHrs=PARTTIME_HOURS
            break;
        case IS_FULLTIME:
            empHrs = FULLTIME_HOURS
            break;
        default:
            empHrs=0
            break;
    }
    let empWage= empHrs * WAGE_PER_HOURS;
    console.log("Employee Wage:" +empWage);