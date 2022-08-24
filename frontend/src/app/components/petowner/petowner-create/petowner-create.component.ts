import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetOwner } from '../petowner.model';
import { PetownerService } from '../petowner.service';

@Component({
  selector: 'app-petowner-create',
  templateUrl: './petowner-create.component.html',
  styleUrls: ['./petowner-create.component.css']
})
export class PetownerCreateComponent implements OnInit {

  petOwner: PetOwner = {
    name: '',
    cpf: '',
    email: '',
    password: '',
    phone: '',
    status: true
  }
  
  constructor(private petOwnerService: PetownerService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.petOwnerService.create(this.petOwner).subscribe(() => {
      this.petOwnerService.showMessage('Pet owner created!')
      this.router.navigate(['/petowners'])
    });
  }

  cancel(): void {
    this.router.navigate(['/petowners'])
  }

}
