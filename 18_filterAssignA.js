class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
  console.log(`-----------------------------------STEP-1-----------------------------------`);


  const tcsEmployees = arrayEmployees.filter(employee => employee.emp_company == 'TCS');

tcsEmployees.forEach(employee => {
    console.log(`Company Name: ${employee.emp_company}, Employee Name: ${employee.emp_name} `);
})
 
console.log(`-----------------------------------STEP-2-----------------------------------`);
const wiproEmployee = arrayEmployees.filter(employee => employee.emp_company === 'Wipro');
const totalSalaryWipro = wiproEmployee.reduce((total, employee) =>  total + employee.emp_salary,0);
const avgSalaryWipro = totalSalaryWipro/wiproEmployee.length;
console.log(`Averagesalary of Wipro employee is: ${avgSalaryWipro}`);


console.log(`-----------------------------------STEP-3-----------------------------------`);
const wiproInfyEmployee = arrayEmployees.filter(employee => employee.emp_company === 'Wipro' || employee.emp_company === 'Infy' );
const totalSalaryWiproInfy = wiproInfyEmployee.reduce((total, employee) =>  total + employee.emp_salary,0);
const avgSalaryWiproInfy = totalSalaryWiproInfy/wiproInfyEmployee.length;

console.log(`Averagesalary of Wipro and Infy employee is: ${avgSalaryWiproInfy}`);
console.log(`-----------------------------------END-----------------------------------`);