export class Quote{
 
  showDescription: boolean;
 constructor(
   public id: number,
   public author: string,
   public Quote: string,
   public name: string){
   this.showDescription=false;

}
}
