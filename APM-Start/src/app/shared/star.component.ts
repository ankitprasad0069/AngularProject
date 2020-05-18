import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number;
    @Output() clicked: EventEmitter<string> = new EventEmitter<string>();
    clickOrNot: boolean = false;
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
    OnClick(): void {
        
            this.clicked.emit(`The star rating which was clicked is ${this.rating}`)
           /// console.log(this.clickOrNot);
           
       
    }
}