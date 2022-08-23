import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-petowner-crud',
  templateUrl: './petowner-crud.component.html',
  styleUrls: ['./petowner-crud.component.css']
})
export class PetownerCrudComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToPetOwnerCreate(): void {
    this.router.navigate(['/petowners/create'])
  }

}
