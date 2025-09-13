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