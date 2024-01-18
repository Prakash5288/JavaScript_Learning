class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_compony){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_compony=emp_compony;

    }
}
const emp_anil= new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_vinay=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

let ar=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];
console.log(`######################################## Step 01 ##############################`); 
for (const element of ar) {
     
    if(element.emp_compony =="TCS" ){
       console.log("Employee Name=",element.emp_name, "Compony:",element.emp_compony);
    }
}
console.log(`######################################## Step 02 ##############################`); 
for (const element of ar) {
    if(element.emp_dept=="Finance"){
        console.log(`Department: ${element.emp_dept}, Employee Name: ${element.emp_name}`);
    }
}
console.log(`######################################## Step 03 ##############################`); 
for (const element of ar) {
    if(element.emp_name.startsWith("R")){
        console.log(element);
    }
}
console.log(`######################################## Step 04 ##############################`); 
for (const element of ar) {
    if(element.emp_salary>75000)
    {
        console.log(`Employee Name:${element.emp_name}, Compony: ${element.emp_compony}, Salary: ${element.emp_salary}`);
    }
}
console.log(`######################################## Step 05 ##############################`);
for (const element of ar) {
    if(element.emp_salary>=50000 && element.emp_dept =="IT"){
        console.log(element);
    }
    
} 
console.log(`######################################## Step 06 ##############################`); 
for (const element of ar) {
    if(element.emp_compony=="Infy"){
        console.log(element)
    }
    
}