import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theme-detail',
  templateUrl: './theme-detail.component.html',
  styleUrls: ['./theme-detail.component.scss']
})
export class ThemeDetailComponent {
    constructor(private activatedRoute: ActivatedRoute){
      console.log(this.activatedRoute.snapshot.data?.['theme'])
    }
}
