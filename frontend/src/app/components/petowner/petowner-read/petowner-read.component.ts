import { Component, OnInit } from '@angular/core';
import { PetOwner } from '../petowner.model';
import { PetownerService } from '../petowner.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-petowner-read',
  templateUrl: './petowner-read.component.html',
  styleUrls: ['./petowner-read.component.css']
})
export class PetownerReadComponent implements OnInit {

  petOwners: PetOwner[] = [];

  displayedColumns = ['id', 'name', 'email', 'cpf', 'phone', 'actions'];
  constructor(private petOwnerService: PetownerService) { }

  ngOnInit(): void {
    this.petOwnerService.read().subscribe(petOwners => {
      this.petOwners = petOwners
      console.log(petOwners)
    })
  }

}
