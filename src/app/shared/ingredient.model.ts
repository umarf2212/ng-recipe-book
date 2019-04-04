/*
export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number){
        this.name = name;
        this.amount = amount;
    }
}
Alternately, we can do it in a shortcut way as shown below.
*/
export class Ingredient {
    constructor(public name: string, public amount: number){}
}
