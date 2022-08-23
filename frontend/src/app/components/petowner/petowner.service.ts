import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PetOwner } from './petowner.model';
import { MatSnackBar } from '@angular/material/snack-bar';

const apiUrl = 'https://localhost:5001/PetOwners';
var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class PetownerService {
  
  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string): void{
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(petOwner: PetOwner): Observable<PetOwner> {
    return this.http.post<PetOwner>(apiUrl, petOwner, httpOptions);
  }

  read(): Observable<PetOwner[]> {
    return this.http.get<PetOwner[]>(apiUrl)
  }
}
