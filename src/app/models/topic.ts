// Por que 'any': Por que se le puede añadir algun objeto y no solo strings
export class Topic{
     constructor(
         public _id: string,
         public title:string,
         public content:string,
         public code:string,
         public lang:string,
         public date: string,
         public user:any,
         public comments:any
     ) {
         
     }
}
