import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetOwner } from '../petowner.model';
import { PetownerService } from '../petowner.service';

@Component({
  selector: 'app-petowner-update',
  templateUrl: './petowner-update.component.html',
  styleUrls: ['./petowner-update.component.css']
})
export class PetownerUpdateComponent implements OnInit {

  petOwner: PetOwner = {
    name: '',
    cpf: '',
    email: '',
    password: '',
    phone: '',
    status: true
  }
  
  constructor(private petOwnerService: PetownerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    this.petOwnerService.readById(id).subscribe(petOwner => {this.petOwner = petOwner})
  }

  updatePetOwner(): void {
    this.petOwnerService.update(this.petOwner).subscribe(() => {
      this.petOwnerService.showMessage('Pet owner updated!')
      this.router.navigate(['/petowners'])
    });
  }

  cancel(): void {
    this.router.navigate(['/petowners'])
  }

}
