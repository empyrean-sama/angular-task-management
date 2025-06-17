import { parseTemplate } from "@angular/compiler";
import { Component, isStandalone } from "@angular/core";

@Component({
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    selector: 'app-header'
})
export class HeaderComponent {}