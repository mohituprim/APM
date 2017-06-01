import { Component } from '@angular/core';

//Decorator to supply metadata
//class becomes component with component decorator
@Component({
    //Directive name used int HTML
    selector: 'pm-app',
    //View Layout
    template: '<h1>Angular2: Getting Started</h1>'
})
//Class
export class AppComponent { }
