class Student {
  static students = 0;

  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    Student.students += 1;
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
  }

  static getStudentTotal() {
    return Student.students;
  }
}

let student = new Student("Emil", "Katz");

console.log(student.firstName);
console.log(student.year);

let kitty = new Student("Kitty", "Kat", 1);

console.log(kitty.fullName());
console.log(kitty.markLate());
console.log(Student.getStudentTotal());
