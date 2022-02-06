export class Quote {
  showDescription: boolean;
  constructor(
    public Quote: string,
    public author: string,
    public name: string,
    completeDate : Date){
    this.showDescription=false;

}
}
