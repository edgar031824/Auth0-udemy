import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {
  
  constructor(private _authService:AuthService) { }
  profile:any;
  ngOnInit() {
    if (this._authService.userProfile) {
      this.profile = this._authService.userProfile;
    } else {
      this._authService.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }
  
}
