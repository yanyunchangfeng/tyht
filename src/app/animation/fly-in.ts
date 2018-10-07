import {animate, keyframes, style, transition, trigger} from "@angular/animations";

export const FLYIN= trigger('flyIn',[
   transition('*=>*',[
     animate(1000,keyframes([
        style({opacity:0,transform:'translateX(-100%)',offset:0}),
        style({opacity:1,transform:'translateX(25px)',offset:0.3}),
        style({opacity:1,transform:'translateX(25px)',offset:1})
     ]))
   ]),
  transition('*=>*',[
    animate(1000,keyframes([
      style({opacity:1,transform:'translateX(0)',offset:0}),
      style({opacity:1,transform:'translateX(-25px)',offset:0.7}),
      style({opacity:1,transform:'translateX(100%)',offset:1})
    ]))
  ])
])
