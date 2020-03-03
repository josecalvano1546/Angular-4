import { Directive, ElementRef, Renderer2, Input, OnInit } from "@angular/core";

@Directive({

    selector:'[resaltar]' //Es la palabra que utilizaremos para utilizar la directiva.


})

export class ResaltarDirective implements OnInit{
    constructor(private elRef : ElementRef, private renderer: Renderer2){}
    @Input('resaltar') plan : string = ''; //igual que el selector.
    ngOnInit(){
        if(this.plan ==='pago'){
            this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow' );
            this.renderer.setStyle(this.elRef.nativeElement, 'font-weigth', 'bold' );
        }
        
    }
}