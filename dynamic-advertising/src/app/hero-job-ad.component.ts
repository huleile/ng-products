import { AdComponent } from "./ad.component";
import { Component, Input } from "@angular/core";

@Component({
    template: `
        <div class="job-ad">
            <h4>{{data.headline}}</h4>
            {{data.body}}
        </div>
    `
})
export class HeroJobAdComponent implements AdComponent {
    @Input() data: HeroJobAdData;
}

export interface HeroJobAdData {
    headline?: string;
    body?: string;
}
