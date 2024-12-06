class Student {
    constructor(id, name, dob, email, course, year, gpa, administrativeDetails) {
        this.id = id;
        this.name = name;
        this.dob = dob; // Date of birth
        this.email = email;
        this.course = course; // e.g., "Computer Science"
        this.year = year; // e.g., "1st Year"
        this.gpa = gpa; // Grade Point Average
        this.administrativeDetails = administrativeDetails; // e.g., "Fee Paid: Yes"
    }

    updateAcademicDetails(gpa) {
        this.gpa = gpa;
    }

    updateAdministrativeDetails(administrativeDetails) {
        this.administrativeDetails = administrativeDetails;
    }
}

class StudentManagementSystem {
    constructor() {
        this.students = [];
    }

    addStudent(id, name, dob, email, course, year, gpa, administrativeDetails) {
        let student = new Student(id, name, dob, email, course, year, gpa, administrativeDetails);
        this.students.push(student);
        console.log(`Student ${name} added successfully.`);
    }

    updateStudent(id, name, dob, email, course, year, gpa, administrativeDetails) {
        let student = this.students.find(student => student.id === id);
        if (student) {
            student.name = name || student.name;
            student.dob = dob || student.dob;
            student.email = email || student.email;
            student.course = course || student.course;
            student.year = year || student.year;
            student.gpa = gpa || student.gpa;
            student.administrativeDetails = administrativeDetails || student.administrativeDetails;
            console.log(`Student ${student.name} updated successfully.`);
        } else {
            console.log("Student not found.");
        }
    }

    deleteStudent(id) {
        const index = this.students.findIndex(student => student.id === id);
        if (index !== -1) {
            this.students.splice(index, 1);
            console.log(`Student with ID: ${id} has passed out and their details have been deleted.`);
        } else {
            console.log("Student not found.");
        }
    }

    viewStudentDetails(id) {
        let student = this.students.find(student => student.id === id);
        if (student) {
            console.log(`Student ID: ${student.id}`);
            console.log(`Name: ${student.name}`);
            console.log(`Date of Birth: ${student.dob}`);
            console.log(`Email: ${student.email}`);
            console.log(`Course: ${student.course}`);
            console.log(`Year: ${student.year}`);
            console.log(`GPA: ${student.gpa}`);
            console.log(`Administrative Details: ${student.administrativeDetails}`);
        } else {
            console.log("Student not found.");
        }
    }

    viewAllStudents() {
        if (this.students.length === 0) {
            console.log("No students found.");
            return;
        }
        this.students.forEach(student => {
            console.log(`ID: ${student.id}, Name: ${student.name}, Course: ${student.course}, Year: ${student.year}`);
        });
    }
}

// Usage Example
let system = new StudentManagementSystem();

// Add students
system.addStudent(1, "John Doe", "1999-05-10", "john.doe@example.com", "Computer Science", "1st Year", 3.5, "Fee Paid: Yes");
system.addStudent(2, "Jane Smith", "2000-07-12", "jane.smith@example.com", "Electrical Engineering", "2nd Year", 3.8, "Fee Paid: No");

// View student details
system.viewStudentDetails(1);

// Update student details
system.updateStudent(1, null, null, "john.doe@college.com", null, "2nd Year", 3.7, "Fee Paid: Yes");

// View updated student details
system.viewStudentDetails(1);

// Delete student (on graduation)
system.deleteStudent(1);

// View all students
system.viewAllStudents();
