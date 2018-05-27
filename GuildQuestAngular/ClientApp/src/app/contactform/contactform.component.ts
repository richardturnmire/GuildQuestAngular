import
{
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import
{
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
  
} from '@angular/forms';

import { Contact } from 'app/Models/contact.model';

import { Globals } from "app/Shared/globals";
import * as $ from 'jquery'; 
import { ContactService } from 'app/Services/contact.service';

window["$"] = $; window["jQuery"] = $;

@Component({
  selector: 'app-contact-form',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})

export class ContactFormComponent implements OnInit
{
  model: Contact = {
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactSubject: '',
    contactMessage: '',
    contactGenerated: false
  };

  post: any;                     // A property for our submitted form
  errorMessage: any;
  submitted = false;
  public hasError = false;
  // initial center position for the map
  lat: number = 38.2539326;
  lng: number = -85.7485225;
  zoom: number = 15; // google maps zoom level

  constructor(private fb: FormBuilder, private _contactService: ContactService)
  {

  }

  ngOnInit()
  {
    
  }
  onSubmit() {
    //if (!this.contactForm.valid)
    //{
    //  return;
    //}
    this._contactService.saveContact(this.model)
      .subscribe((data) =>
        {
          console.log("Message posted");
        },
        error => this.errorMessage = error);
     this.submitted = true;
  }

  clickedMarker(label: string, index: number)
  {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent)
  {
    this.markers.push({
      lat: $event.x,
      lng: $event.y,
      draggable: true
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent)
  {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
      lat: this.lat,
      lng: this.lng,
      label: 'A',
      draggable: true
    }
  ];

  

  cancel()
  {
    //this._router.navigate(['/fetch-employee']);
  }

}
// just an interface for type safety.
interface marker
{
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
