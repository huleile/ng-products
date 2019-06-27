import { HeroJobAdComponent } from "./hero-job-ad.component";
import { Injectable } from "@angular/core";
import { AdItem } from "./ad-item";
import { HeroProfileComponent } from "./hero-profile.component";

@Injectable()
export class AdService {
    getAds() {
        return [
            new AdItem(HeroProfileComponent, {name: "Hully", bio: "Node developer"}),

            new AdItem(HeroProfileComponent, {name: "Lily", bio: "bitch"}),

            new AdItem(HeroJobAdComponent, {
                headline: "Hiring for several positions",
                body: "Submit your resume today!"
            }),

            new AdItem(HeroJobAdComponent, {
                headline: "Openings in all departments",
                body: "Apply today"
            })
        ];
    }
}
