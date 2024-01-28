console.log(`#####################################Step 01##################################`);
const arrayNums=[20,3,4,56,90,400,49];
const copyArray=arrayNums;
copyArray.push(55);
copyArray.push(66);
console.log(`Original Array=>`);
console.log(arrayNums);
console.log(`Shallow cloned copy of Array=>`);
console.log(copyArray);
console.log(`#####################################Step 02##################################`);
let spreadCopy=[...arrayNums];
arrayNums.splice(4,0,10);
arrayNums.splice(5,0,25);
console.log(`Original Array=>`);
console.log(arrayNums);
console.log(`cloned Array=>`);
console.log(spreadCopy);
console.log(`#####################################Step 03##################################`);
console.log(`Merge array using spread method=>`);
const arrayEven=[2,30,14,8];
const mergedArray=[...arrayNums, ...arrayEven];
console.log(mergedArray);
console.log(`#####################################Step 04 & 5##################################`);
const employee_info={
    emp_id: 27,
    emp_name: 'John Doe',
    salary:{
        july_month: '40,000INR',
        aug_month: '50,000INR',
        jun_month:'65,000INR'
    },
    address: {
        lacality:{
            colony:'OM Vrindavan Society',
            street: 'Kanchan Pokali 431202',
        
        },
        city: 'Mumbai',
        state:'Maharashtra',
        country:'India'
    },
    mobiles: ['+9186003456','1800-4567 32','+91-9096 5678 77']
}
console.log(`Log the employee details on the console=> `);
console.log(employee_info.address.lacality);
console.log(employee_info.address.city);
console.log(employee_info.address.state);
console.log(employee_info.address.country);
console.log(employee_info.mobiles);
console.log(`#####################################Step 06##################################`);
const empClone=JSON.parse(JSON.stringify(employee_info));
empClone.salary.july_month='80,000INR';
empClone.address.country='UNITED KINGDOM';
console.log(`Upadates value from original object=>`);
console.log(employee_info.salary.july_month);
console.log(`Updated value from cloned objects=>`);
console.log(empClone.salary.july_month);
console.log(`Upadates value from original object=>`);
console.log(employee_info.address.country);
console.log(`Updated value from cloned objects=>`);
console.log(empClone.address.country);