import { Course } from "./courses";

export class Student {
    private _id:number
    private _balance:number;
    private _enrolled:Course[];
    private _name:string;
    constructor(name:string,balance:number){
        this._id= Math.ceil(Math.random()*10000);
        this._balance=balance;
        this._enrolled=[];
        this._name = name;
    }
    enroll(name:string,hours:number){

                const courseEnrolled = new Course(name,hours)
                this._enrolled.push(courseEnrolled);
            
    }

    get name():string{
        return this._name
    }
    get balance():string{
        return this.balance

    }
    payTutionFee(fee:number){
        this._balance-=fee;
    }
    showStatus(){
        console.log("---- Student Details -----")
        console.log('Id : ',this._id)
        console.log('Name : ',this._name)
        console.log('**Courses Enrolled**');
        this._enrolled.forEach((en,index)=>{
            console.log(`${index+1}. ${en.getName()} ${en.getHourse()} hrs`)
        })
        console.log('Balance: ',this._balance)
    }
}