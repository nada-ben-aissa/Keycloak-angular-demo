import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-secured',
  templateUrl: './secured.component.html',
  styleUrls: ['./secured.component.scss']
})
export class SecuredComponent implements OnInit {
  authService = inject(AuthService);
  http = inject(HttpClient);

  logout() {
    this.authService.logout()
  }

  get username(): string {
    return this.authService.getUsername();
  }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8081/api/kc/say-hello2',{headers:new HttpHeaders({Authorization:'Bearer '+this.authService.keycloak.getToken})}).subscribe(console.log)
  }

}
