//An abstraction is a way of hiding the implementation details and showing only the functionality to the users. In other words, it ignores the irrelevant details and shows only the required one.
function Employee(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;

    let monthlyBonus = 1500;

    let calculateFinalSalary = function(){
        let finalSalary = baseSalary + monthlyBonus;
        console.log ('Final Salary is : '+finalSalary);
    }

    this.getEmpDetails = function (){
        console.log ('Name : '+this.name+' | Age : '+this.age);
        calculateFinalSalary();
    }
}

let emp1 = new Employee('John', 30, 2000);
emp1.getEmpDetails();

console.log ('abcd');

//Encapsulation:The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data. It allows us to control the data and validate it.
class Employee{

    setEmpDetails(name, id, phoneNo){
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
    }

    getEmpName(){
        return this.name;
    }
    getEmpId(){
        return this.id;
    }
    getEmpPhoneNo(){
        return this.phoneNo;
    }

}

let emp1 = new Employee();

emp1.setEmpDetails('John', 1001, 987890000);
console.log (emp1.getEmpName());
console.log (emp1.getEmpId());
console.log (emp1.getEmpPhoneNo());