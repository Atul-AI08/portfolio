import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  copy_mail: boolean = false;
  copy_phone: boolean = false;
  @Input() theme: string = 'light';

  copyMail(val: string) {
    navigator.clipboard.writeText(val);
    this.copy_mail = true;
    setTimeout(() => {
      this.copy_mail = false;
    }, 2000);
  }
  copyPhone(val: string) {
    navigator.clipboard.writeText(val);
    this.copy_phone = true;
    setTimeout(() => {
      this.copy_phone = false;
    }, 2000);
  }
}
