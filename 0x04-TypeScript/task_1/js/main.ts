// Define the Teacher interface
interface Teacher {
  readonly firstName: string;     // readonly: cannot be changed after initialization
  readonly lastName: string;
  fullTimeEmployee: boolean;      // always required
  yearsOfExperience?: number;     // optional (with ?)
  location: string;               // always required
  [key: string]: any;             // allows extra properties like contract
}

// Example usage
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,   // extra attribute
};

console.log(teacher3);

// Directors extends Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation with destructuring
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // J. Doe

// Describe the constructor interface
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Describe the class interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the class
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage:
const student: StudentClassInterface = new StudentClass("Matilda", "Gbeve");
console.log(student.displayName()); // Matilda
console.log(student.workOnHomework()); // Currently working

