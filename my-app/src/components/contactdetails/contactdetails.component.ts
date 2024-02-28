import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactdetails',
  standalone: true,
  imports: [NgIf],
  templateUrl: './contactdetails.component.html',
  styleUrl: './contactdetails.component.css'
})

export class ContactdetailsComponent implements OnInit {
  contactDetails: {
    name: string,
    email: string,
    phone: string,
    place: string,
    message: string
  } = {
    name: '',
    email: '',
    phone: '',
    place: '',
    message: ''
  }

  constructor(private contactService: ContactService, private router: Router) { }
  
  checkEmpty(value: string): boolean {
    return value.length < 1
   }

  ngOnInit(): void {
    this.contactDetails = this.contactService.getContactDetails();

    if (Object.values(this.contactDetails).some(this.checkEmpty)) {
      this.router.navigate(['contact'])
    }
  }
}
