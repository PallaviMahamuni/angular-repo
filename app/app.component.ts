import { Component } from '@angular/core';

@Component({
  selector: 'pm-app',
  template: `<div>
                <pm-products></pm-products>            
             </div>`,
})
export class AppComponent  { 
     name = 'Angular'; 
 }