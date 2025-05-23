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
      logo: 'assets/logo-sr.png',
      role: 'Prism Intern @Samsung R&D Institute India',
      start: 'June 2024',
      end: 'March 2025',
      line1:
        'Developed a lightweight, on-device inference model for automated thumbnail generation from movies.',
      line2:
        'Designed an interactive module to regenerate thumbnails based on user feedback.',
      line3:
        'Optimized algorithms for real-time usability and scalability in video analysis.',
      url: 'https://drive.google.com/file/d/1ixAKRcCYUlQ2t3Gv87CYxWisnbL4Pz1n/view?usp=sharing',
    },
    {
      logo: 'assets/logo.webp',
      role: 'Developer Intern @Fastcurve',
      start: 'June 2024',
      end: 'September 2024',
      line1:
        'Developed and implemented AI-based Face Recognition Technology for the Enkept product.',
      line2:
        'Built free tools in Angular for the Yukt product, improving customer efficiency in day-to-day operations.',
      line3:
        'Worked with teams to add new technologies to the company’s main products, providing solutions.',
      url: 'https://drive.google.com/file/d/1jzWQUUGRffQ1ax3Nr_ffWmGzCpfE6z1J/view?usp=sharing',
    },
    {
      logo: 'assets/iitp_campus.webp',
      role: 'UG Researcher @IIT Patna',
      start: 'June 2023',
      end: 'April 2025',
      line1:
        'Utilized efficient knowledge distillation methods to improve medical image analysis accuracy by 2-6%.',
      line2:
        'Published research papers on medical image classification accepted at Knowledge-Based Systems and MICCAI 2024.',
      line3: 'Currently working on optimizing federated learning frameworks for improved performance and scalability.',
      url: 'https://drive.google.com/file/d/1C2YN2TEF4QcsN3osUDZxj0w50Ous-P61/view?usp=sharing',
    },
  ];
}
