import { Injectable } from '@angular/core';

interface ContactDetails{
  name: string;
  email: string;
  phone: string;
  place: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactDetails: ContactDetails = {
    name: '',
    email: '',
    phone: '',
    place: '',
    message: ''
  };

  setContactDetails(details: ContactDetails) {
    this.contactDetails = details
  }

  getContactDetails(): ContactDetails {
    return this.contactDetails;
  }
}
