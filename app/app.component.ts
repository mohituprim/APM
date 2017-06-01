import { Component } from '@angular/core';

//Decorator to supply metadata
//class becomes component with component decorator
@Component({
    //Directive name used int HTML
    selector: 'pm-app',
    //View Layout
    template:`
    <div>
        <pm-products></pm-products>
    </div>`
})
//Class
export class AppComponent { }
