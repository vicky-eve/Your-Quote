export class Quote{
 
  showDescription: boolean;
 constructor(
   public id: number,
   public author: string,
   public quote: string,
   public name: string){
   this.showDescription=false;

}
}
