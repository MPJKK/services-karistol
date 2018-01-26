import {Component, OnInit} from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';

@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

    pysakki = '';
    temp: any;

    constructor(private digitransiteService: DigitransitService) {
    }

    search() {
        this.digitransiteService.getRoutes(this.pysakki).subscribe(response => {
            console.log(response.data['stops']);
            this.temp = response.data['stops'][0].patterns;

        });
    }

    ngOnInit() {
    }
}

