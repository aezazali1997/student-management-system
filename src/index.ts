#! /usr/bin/env node
import {Student} from './students'
import {Course} from './courses';

console.log(' Initiating Student management system....')
console.log('Initiating allowed courses');
const math = new Course("Math",2,40);
const physics = new Course("physics",3,60);
const chemistry = new Course("Chemistry",4,80) ;
const bio = new Course("Bio",3,60);
const computer = new Course("Computer",7,120);
const AI = new Course("AI",7,120);
console.log('Creating Student');

const student = new Student('aezaz',1000);
const piaicStudent = new Student('basit',3000);


console.log(`Enrolling ${student.name} with Math `);
student.enroll(math.getName(),math.getHourse())
console.log('Fee',math.Fee)
student.payTutionFee(math.Fee);


console.log(`Enrolling ${student.name} with physics `);
student.enroll(physics.getName(),physics.getHourse())
console.log('Fee',physics.Fee)
student.payTutionFee(physics.Fee);

student.showStatus();


console.log(`Enrolling ${piaicStudent.name} with Math `);
piaicStudent.enroll(math.getName(),math.getHourse())
console.log('Fee',math.Fee)
piaicStudent.payTutionFee(math.Fee);


console.log(`Enrolling ${piaicStudent.name} with physics `);
piaicStudent.enroll(physics.getName(),physics.getHourse())
console.log('Fee',physics.Fee)
piaicStudent.payTutionFee(physics.Fee);


console.log(`Enrolling ${piaicStudent.name} with chemistry `);
piaicStudent.enroll(chemistry.getName(),chemistry.getHourse())
console.log('Fee',chemistry.Fee)
piaicStudent.payTutionFee(chemistry.Fee);

piaicStudent.showStatus();







