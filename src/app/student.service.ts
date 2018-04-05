import { Student } from "./Student";
import { Programs } from "./Programs";

export class StudentService {


    student: Student[] = [new Student(1, "creating", "student", "form", Programs.CS)];

    getStudentData() {
        return this.student;
    }

    addStudent(student:Student) {
        this.student.push(student);
        console.log(student);
    }

}