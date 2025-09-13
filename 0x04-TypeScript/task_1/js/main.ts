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

// Function implementation
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher("John", "Doe")); // J. Doe