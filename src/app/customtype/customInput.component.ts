import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input',
  template: `
<label type="label"  class="row" [formlyAttributes]="field"><strong>{{to.label}}</strong>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 {{to['value']}}</label>
<br>
<br> `,
})
export class CustomLableComponent extends FieldType { }