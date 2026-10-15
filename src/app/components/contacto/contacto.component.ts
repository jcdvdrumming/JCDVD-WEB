import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  name = '';
  message = '';
  error = '';

  @ViewChild('nameField') nameField?: ElementRef<HTMLInputElement>;
  @ViewChild('messageField') messageField?: ElementRef<HTMLTextAreaElement>;

  onSubmit(): void {
    const nameStr = this.name.trim();
    const msgStr = this.message.trim();

    if (!nameStr) {
      this.error = 'Completá tu nombre para continuar.';
      this.nameField?.nativeElement.focus();
      return;
    }

    if (!msgStr) {
      this.error = 'Escribí un mensaje para continuar.';
      this.messageField?.nativeElement.focus();
      return;
    }

    this.error = '';
    const text = `Hola! mi nombre es ${nameStr}. ${msgStr}`;
    const url = `https://wa.me/5493446517773?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
