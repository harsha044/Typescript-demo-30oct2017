import { IEmployee } from './Iemployee';
class Emp implements IEmployee {
    private eid:number;
    readonly name:string;
    protected sal:number;


    constructor(id : number,name : string){
            this.eid=id;
            this.name=name;
    }

    get empid(){
        return this.eid;
    }

    set empid(id:number){
        this.eid=id;
    }

    addEmp(){

    }

    getEmp(){

    }

    add() : number {
        return 1+1;
    }
    sub() : void {
         5-2;
    }

    deleteemp(){

    }
}