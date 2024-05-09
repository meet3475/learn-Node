
module.exports = (salary, calBonus) => {
    console.log(salary);
    if (salary <= 0) {
        calBonus(new Error("salary must be grather than zero"), null)
    } else if (salary <= 10000) {
        calBonus(null, salary * 0.10)
    } else if (salary <= 20000) {
        calBonus(null, salary * 0.15)
    } else if (salary > 20000) {
        calBonus(null, salary * 0.20)
    } 
}
