import { Component } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [HelloWorldComponent], // Include the component in the imports array
    standalone: true,  
})
export class AppComponent {}
