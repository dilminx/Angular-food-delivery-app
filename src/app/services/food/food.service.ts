import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():String[]{
    return[
      '/assets/images/foodimg/p1.png',
      '/assets/images/foodimg/p2.png',
      '/assets/images/foodimg/p3.png',
      '/assets/images/foodimg/p4.png',
      '/assets/images/foodimg/p5.png',
      '/assets/images/foodimg/p6.png',
      '/assets/images/foodimg/p7.png',
      '/assets/images/foodimg/p8.png',
      '/assets/images/foodimg/p9.png',
      '/assets/images/foodimg/p10.png',
      '/assets/images/foodimg/p11.png',
      '/assets/images/foodimg/p12.png',
      '/assets/images/foodimg/p13.png',
      '/assets/images/foodimg/p14.png',
    ]
  }
}
