import { Component,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './app/features/star.component.html',
  styleUrls: ['./app/features/star.component.css']

})
export class StarComponent implements OnChanges{
    starWidth: number;
    // @Input is used to share data between two component
    @Input() rating:number;
    
    ngOnChanges(): void {
        this.starWidth = this.rating * 70 / 5;
    }
	
}