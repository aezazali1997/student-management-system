export class Course {
    private name:string
    private hourse:number;
    private fee?:number 
    constructor(name:string,hours:number,fee?:number){
        this.name=name;
        this.hourse=hours;
        this.fee=fee;
    
 }
 get Fee():number{
   return this.fee!
 }
 getName(){
    return this.name
 }
 getHourse(){
    return this.hourse
 }
 
}