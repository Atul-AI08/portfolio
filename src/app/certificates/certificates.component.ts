import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
})
export class CertificatesComponent {
  @Input() theme: string = 'light';

  certificates: any[] = [
    {
      title: 'Inter IIT Tech Championship 2023',
      desc: 'Participated in the Adobe Simulation Challenge, addressing two key tasks: Behavior Simulation (predicting tweet engagement based on content) and Content Simulation (generating tweet text from metadata). This challenge honed my skills in data analysis and content creation, aiding marketers in optimizing social media strategies to achieve desired KPIs.',
      url: 'https://drive.google.com/file/d/18v6m7pDey5_bxCEJ96aiOCXZlaAA19dD/view?usp=sharing',
    },
    {
      title: 'Angular Intermediate Certificate',
      desc: 'Earned the HackerRank Angular Intermediate Certificate, demonstrating proficiency in building dynamic web applications using Angular. This certification validated my skills in Angular concepts, including components, services, directives, and routing, showcasing my ability to develop and maintain robust front-end applications.',
      url: 'https://www.hackerrank.com/certificates/3e129b825221',
    },
    {
      title: 'Deep Learning Specialization',
      desc: 'Completed the Coursera Deep Learning Specialization, mastering key concepts and techniques in deep learning. This certification covered neural networks, convolutional networks, sequence models, and deep learning applications, demonstrating my ability to build and apply deep learning models to real-world problems.',
      url: 'https://coursera.org/share/a4404571c657c957d710481463d8937b',
    },
    {
      title: 'Data Analysis with Python - IBM',
      desc: 'Completed the Coursera Data Analysis with Python course, gaining proficiency in data manipulation, visualization, and analysis using Python. This certification covered libraries such as Pandas, NumPy, and Matplotlib, showcasing my ability to analyze data and derive meaningful insights effectively.',
      url: 'https://coursera.org/share/45ec181cb05bd1b70ca1c3ad9d937ad0',
    },
  ];
}
