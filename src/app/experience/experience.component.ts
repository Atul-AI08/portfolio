import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  @Input() theme: string = 'light';

  exps: any[] = [
    {
      logo: 'assets/logo.webp',
      role: 'Developer Intern @Fastcurve',
      start: 'June 2024',
      end: 'Present',
      line1:
        'Developed multiple business tools using Angular, enhancing functionality and user experience.',
      line2:
        'Gained hands-on experience in modern web development practices and frameworks.',
      line3:
        'Implemented lazy loading in Angular applications to optimize performance and load times.',
      url: '',
    },
    {
      logo: 'assets/iitp_campus.webp',
      role: 'UG Researcher @IIT Patna',
      start: 'June 2023',
      end: 'Present',
      line1:
        'Utilized efficient knowledge distillation methods to improve medical image analysis accuracy by 2-6%.',
      line2:
        'Published a research paper on medical image classification accepted at MICCAI 2024; two papers submitted in journals.',
      line3: 'Currently working on stereotype evaluation in language models.',
      url: 'https://drive.google.com/file/d/1C2YN2TEF4QcsN3osUDZxj0w50Ous-P61/view?usp=sharing',
    },
  ];
}
