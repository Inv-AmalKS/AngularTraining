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

  ngOnInit(): void {
    this.contactDetails = this.contactService.getContactDetails();
    function checkEmpty(value: string): boolean {
      if (value.length < 1) {
        return false
      }
      return true


    }
    if (!Object.values(this.contactDetails).some(checkEmpty)) {
      this.router.navigate(['contact'])
    }
  }
}
