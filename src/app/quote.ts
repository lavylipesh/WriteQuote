export class Quote {
    public showDescription:boolean;
    constructor(public id:number, public name: string , public author:string,public description:string,public quoteDate:Date) {
        this.showDescription=false;
    }
}
