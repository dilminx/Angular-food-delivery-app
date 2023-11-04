export class Food{
    id!:number;
    name!:string;
    price!:string;
    tags?:string[];
    favorite:boolean=false;
    stars:number=0;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;
}