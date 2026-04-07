import { Component } from '@angular/core';
import { DrumDoctorComponent } from '../drum-doctor/drum-doctor.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ClasesComponent } from '../clases/clases.component';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DrumDoctorComponent, PortfolioComponent, ClasesComponent, ContactoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
