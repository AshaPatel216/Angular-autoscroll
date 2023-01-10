import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-app',
    encapsulation: ViewEncapsulation.None,
    template: `
   <div>
   <div>
    
   <kendo-sortable
   [kendoSortableBinding]="palettes"
   [itemStyle]="{'float':'left', 'display': 'inline-block',
                 'width': '100px', 'background-color': '#fffaed',
                 'margin': '4px' , 'border': '1px solid black',
                 'cursor': 'move'}">
     <ng-template let-palette="item">
       {{palette.name}}
       <br/><br/>
       <div style="width: 100px;">
           <kendo-sortable
           [kendoSortableBinding]="palette.data"
           [itemStyle] = "{'border': '0px', 'opacity':'1', 'cursor': 'move'}"
           [emptyItemStyle] = "{'height': '30px', 'border': '2px dashed black'}"
           [activeItemStyle] = "{'border': '2px dashed black', 'opacity':'0.7'}"
           zone="innerZone"
           (dragEnd)="onDragEnd()"
           (dragStart)="onDragStartCard();">
               <ng-template let-item="item">
                   <div [ngStyle]="{'background-color': item,'color': 'white',
                   'height': '30px', 'margin' : '2px', 'border': '1px solid black'}" >
                       {{item}}
                   </div>
               </ng-template>
           </kendo-sortable>
        </div>
     </ng-template>
 </kendo-sortable>
   </div>
   </div>

    `
})
export class AppComponent {

    isDetectDrag:boolean = false;


    public colorsA: string[] = ['Violet', 'Magenta', 'Purple', 'SlateBlue'];
    public colorsB: string[] = ['SteelBlue', 'CornflowerBlue', 'RoyalBlue', 'MediumBlue'];
    public colorsC: string[] = ['LimeGreen', 'SeaGreen', 'Green', 'OliveDrab'];
    public colorsD: string[] = ['LightSalmon', 'Salmon', 'IndianRed', 'FireBrick'];
    public colorsE: string[] = ['SteelBlue', 'CornflowerBlue', 'RoyalBlue', 'MediumBlue'];
    public colorsF: string[] = ['Violet', 'Magenta', 'Purple', 'SlateBlue'];


    public palettes = [
        { data: this.colorsA, name: 'Palette A' },
        { data: this.colorsB, name: 'Palette B' },
        { data: this.colorsC, name: 'Palette C' },
        { data: this.colorsD, name: 'Palette D' },
        { data: this.colorsE, name: 'Palette E' },
        { data: this.colorsF, name: 'Palette F' }, 
        { data: this.colorsD, name: 'Palette G' }
    ];

    onDragStartCard(): void {
        this.isDetectDrag = true;
      }
    
      onDragEnd(): void {
        this.isDetectDrag = false;
      }
    
      @HostListener('document:mousemove', ['$event'])
      
      onMouseMove(event) {
      let element =  document.getElementById('container');
    
      console.log("Window Inner Height: " + window.innerHeight);
      console.log("Client Y: " + event.clientY);
        if (this.isDetectDrag) {
          if (window.innerHeight < (event.clientY)) {
              window.scroll(0, 50);
            //element.scrollTop += 5;
          }
    
          if (window.innerHeight > (event.clientY)) {
            window.scrollTo({
                behavior: 'smooth',
                top: event.clientY
              });
           // element.scrollTop -= 5;
          } 
          
          if (window.innerWidth < (event.clientX)) {
            window.scroll(0,0);
            // element.scrollLeft += 5;
          }
    
          if (window.innerWidth > (event.clientX)) {
            window.scroll(0,0);
            // element.scrollLeft -= 10;
          } 
        
        }
        else {
          console.log("NOOOO")
        }
      }
    
}
