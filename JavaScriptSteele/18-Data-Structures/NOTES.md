<h2>Data Structures: Introduction</h2>

<p>Data structures are:</p>

<ol>
<li>Collections of objects</li>
<li>Relationships among the objects</li>
<li>Functions or operations that can be applied to the objects.</li>
</ol>

<p>Different data structures excel at different things. Some are highly specialized, while others are more generally used (such as arrays).</p>

<h3>Class Syntax Overview</h3>

<p>ES2015 Class Syntax</p>

<ol style="list-style-type: upper-alpha">
<li>What is a class?
    <ol style="list-style-type: lower-alpha">
        <li>Blueprint for creating objects</li>
        <li>Pre-defined properties</li>
        <li>Pre-defined methods.</li>
    </ol>
</li>
<li>How JavaScript implements classes.
    <ol>
    <li>Class keyword
    <pre>
    class Student {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
    </pre>
    </li>
    <li>Constructor used to instantiate new Student instances
    <pre>
    let firstStudent = new Student("Colt","Steele")
    let secondStudent = new Student("Dwyer","Martin")
    </pre>
    </li>
    <li>Instance methods
    <pre>
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}` ;
    }
    </pre>
    </li>
    <li>Static (Class) methods
    <pre>
    * Static Attributes *
    static students = 0;            
    </pre>
    <pre>
    * Static Methods *
    static getStudentTotal() {
           return Student.students;
    }
    </pre>
    </li> 
    </ol>
</li>
<li>Abstraction, encapsulation, polymorphism.</li>
<li>Implement data structures.</li>
</ol>
