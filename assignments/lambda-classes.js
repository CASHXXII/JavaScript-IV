// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.newName = attributes.name,
        this.newAge = attributes.age,
        this.newLocation = attributes.location
    }

    speak(){
        return `Helly my name is ${this.newName}, I am from ${this.newLocation}`
    }
}

////////////////////////////////////////////////////////////////////////////////////

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.newSpecialty = instructorAttributes.specialty,
        this.newFavLanguage = instructorAttributes.favLanguage,
        this.newCatchPhrase = instructorAttributes.catchPhrase
    }

    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(studentObj, subject){
        return `${studentObj.name} receives a perfect score on ${subject}`
    }
}

////////////////////////////////////////////////////////////////////////////////////////


class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground,
        this.className = studentAttributes.className,
        this.favSubjects = studentAttributes.favSubjects
    }

    listsSubjects(){
        return `${this.favSubjects}`;
    }

    PRAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

class ProjectManager extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName,
        this.favInstrutor = pmAttributes.favInstructor
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(studentObj, subject){
        return `${this.name} debugs ${studentObj.name}'s code on ${subject}`;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });


const jess = new Student({
    name: 'Jess',
    location: 'Minnesota',
    age: 20,
    previousBackground: "College",
    className: "Web Dev",
    favSubjects: "Science, Math"
})


const ann = new ProjectManager({
    name: 'Ann',
    location: 'California',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: "CS1",
    favInstrutor: "Fred"
  });



console.log(ann.standUp(25));


  console.log(fred.demo("science"));




  //jason
  console.log(fred.grade(jess, "science"))