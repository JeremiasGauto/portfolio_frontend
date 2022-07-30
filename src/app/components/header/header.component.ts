import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
  
export class HeaderComponent implements OnInit {
  
  isLogged = false;
  
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  constructor(private router: Router,private tokenService: TokenService) { }

  login(){
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    if (this.tokenService.getToken()) { 
    this.isLogged = true;
  }else{
    this.isLogged = false;
  }
  }

  onLogout(): void{
    
    this.tokenService.logOut();
    window.location.reload();

  }


  
}
