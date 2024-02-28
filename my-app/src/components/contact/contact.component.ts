import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: string;
  email: string;
  phone: string;
  place: string;
  message: string;
  constructor(private contactService: ContactService, private router: Router) {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.place = '';
    this.message = '';

  }
  onSubmit() {
    this.contactService.setContactDetails({
      name: this.name,
      email: this.email,
      phone: this.phone,
      place: this.place,
      message: this.message
    });
    this.router.navigate(['/contact/details']);
  }

}
