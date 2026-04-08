import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  sendWhatsApp(name: string, message: string) {
    const nameStr = name.trim() ? name : '[Tu nombre]';
    const msgStr = message.trim() ? message : '[Tu mensaje]';
    const text = `Hola! mi nombre es ${nameStr}. ${msgStr}`;
    const url = `https://wa.me/5493446517773?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
