export class Quote {
  showDescription: boolean;
  constructor(
    public id: number,
    public Quote: string,
    public author: string,
    public name: string,
    completeDate : Date){
    this.showDescription=false;

}
}
