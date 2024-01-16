console.log(
    "======================================== Step 01 ======================================="
  );
  class car {
    constructor(compony, name, color, year, capacity) {
      this.compony = compony;
      this.name = name;
      this.color = color;
      this.year = year;
      this.capacity = capacity;
    }
    getdetails() {
      console.log(
    `    Compony Name:= ${this.compony}, Car Name:= ${this.name}, Car color:= ${this.color}, Manufactoring Year:= ${this.year}, Car Capacity:= ${this.capacity}`
      );
    }
  }
  const ertiga = new car("Maruti Suzuki", "Eretiga", "White", 2023, 7);
  const thar = new car("Mahindra", "Thar", "Grey", 2024, 6);
  const verna = new car("Hyndai", "Verna", "Black", 2022, 7);
  const swift = new car("Maruti Suzuki", "Swift", "Red", 2020, 5);
  const endevour = new car("FOrd", "Endevour", "White", 2019, 8);
  const carArray = [ertiga, thar, verna, swift, endevour];
  
  for (const element of carArray) {
    element.getdetails();
  }
  console.log(
    " ======================================== Step 02 ======================================="
  );
  class college {
    constructor(name, location, teachers, degree) {
      this.name = name;
      this.location = location;
      this.teachers = teachers;
      this.degree = degree;
    }
    getdetails01() {
      console.log(
  `      College Name:= ${this.name}, College Location:= ${this.location}, No. Of Teachers:= ${this.teachers}, Degree:= ${this.degree}`
      );
    }
  }
  const sms = new college("Sangola College Sangola", "Sangola", 50, "Bcs");
  const vms = new college("Vidnyaan Mahavidyalaya", "Sangola", 34, "Bsc");
  const nes = new college("New English SChool", "Sangola", 20, "Hsc");
  const vps = new college("Vidyamandir Prashala", "Sangola", 16, "Ssc");
  const collegeArray = [sms, vms, nes, vps];
  for (const element of collegeArray) {
    element.getdetails01();
  }
  console.log(
    " ======================================== Step 03 ======================================="
  );
  let traverseObject = function(obj){
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            console.log(`Key => ${key}; Value=> ${element}`);
        }
    }
    
    
  }
  console.log("College 1 details");
  traverseObject(sms);
  console.log("College 2 details");
  traverseObject(vms);
  console.log("College 3 details");
  traverseObject(nes);
  console.log("College 4 details");
  traverseObject(vps);