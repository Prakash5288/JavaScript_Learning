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
  console.log(`Employees from Wipro company`);
  const wiproEmployee = arrayEmployees.filter((employee) => {
   return employee.emp_company === "Wipro";
  });
    wiproEmployee.forEach((employee) => {
    console.log(employee);
   });



console.log(`-----------------------------------STEP-2-----------------------------------`);
console.log(`Employees from IT or HR department`);
  const ItorHrDeptEmployee = arrayEmployees.filter((element) => {
    return(element.emp_dept == 'IT' ||  element.emp_dept == 'HR') ;
  }); 
    ItorHrDeptEmployee.forEach((employee) => {
      console.log(employee);
     }); 

     console.log(`-----------------------------------STEP-3-----------------------------------`);

     console.log(`Employees from IT or HR department`);
     const IdEmployee = arrayEmployees.filter((element) => {
       return(element.emp_id > 50) ;
     }); 
       IdEmployee.forEach((employee) => {
         console.log(employee);
        }); 
   

console.log(`-----------------------------------STEP-4-----------------------------------`);
console.log(`Employees name start with letter 'A' or 'V' or 'M'`);
const startAVMEmployee = arrayEmployees.filter((element) => {
  return(element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M")) ;
  
 });
 startAVMEmployee.forEach((employee) => {
  console.log(employee);
});

 console.log(`-----------------------------------STEP-5-----------------------------------`);
 const totalSalary = arrayEmployees.reduce((total, employee) =>  total + employee.emp_salary,0);
const avgSalary = totalSalary/arrayEmployees.length;
console.log(`Averagesalary of all the employee is: ${avgSalary}`);

console.log(`-----------------------------------STEP-6-----------------------------------`);
const ItDeptEmployee = arrayEmployees.filter((element) => {
  return(element.emp_dept == 'IT') ; 
 });
 const totalITSalary = ItDeptEmployee.reduce((total, employee) => total + employee.emp_salary,0);
 const avgITSalary = totalITSalary/ItDeptEmployee.length;
 console.log(`Average salary of employee of 'IT'department is: ${avgITSalary}`);