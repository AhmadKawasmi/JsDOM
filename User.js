class User {
    constructor(firstName, lastName, userName, passWord, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.userName = userName
        this.passWord = passWord
        this.age = age
        this.isLoggedIn = false
        this.lastLoggedIn = 0
        this.isActive = true
    }
    signIn() {
        if (this.isActive) {
            this.isLoggedIn = true
            this.lastLoggedIn = Date.now()
            return this
        } else {
            alert('This Acc has Been Deleted')
        }
    }
    signOut() {
        this.isLoggedIn = false
    }
    getLastLoggedIn() {
        const date = new Date(this.isLoggedIn)
        return date.toLocaleTimeString()
    }
    deActivateAcc() {
        this.isActive = false
    }
    reActivateAcc() {
        this.isActive = true
        alert('Welcome Back' + this.userName)
    }
}

class Teacher extends User {
    constructor(firstName, lastName, userName, passWord, age, subject, salary) {
        super(firstName, lastName, userName, passWord, age)
        this.subject = subject
        this.salary = salary
        this.workHours = 0
    }

    giveMark() {

    }
}

class Student extends User {
    constructor(firstName, lastName, userName, passWord, age, grade, tuition) {
        super(firstName, lastName, userName, passWord, age)
        this.grade = grade
        this.tuition = tuition
    }
}



class School {
    constructor(name) {
        this.name = name
        this.grades = {}
        this.teachers = []
        this.students = []
    }

    registerStudent(firstName, lastName, userName, passWord, age, grade) {
        const student = new Student(firstName, lastName, userName, passWord, age, grade)
        this.students.push(student)
    }

    hireTeacher(firstName, lastName, userName, passWord, age, subject, salary) {
        const teacher = new Teacher(firstName, lastName, userName, passWord, age, subject, salary)
        this.teachers.push(teacher)
    }
}


const school = new School('America House')

school.hireTeacher('Ahmad', 'Kawasmi', 'iahmad2', '2919', 29, 'ComputerScince', '5500')
school.registerStudent('Ahmad', 'Kawasmi', 'iahmad2', '2919', 18, 'Tawjihi')

console.log(school);