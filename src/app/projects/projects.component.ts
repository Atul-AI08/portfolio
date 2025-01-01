import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @Input() theme: string = 'light';
  showMore: boolean = false;
  projects1: any[] = [
    {
      img: 'assets/projects/recipe.png',
      title: 'Context Aware Recipe Generator',
      desc: 'The project implements an AI-powered recipe transformation tool designed to customize recipes based on individual dietary preferences, skill levels, and serving sizes. It leverages advanced AI models to suggest ingredient substitutions and provide personalized cooking instructions, ensuring the dish fits specific needs like vegan, gluten-free, or low-carb diets.',
      tech_stack: ['FastAPI', 'LangChain', 'Ollama LLM', 'ChromaDB', 'PyTorch', 'Angular'],
      url: 'https://github.com/Atul-AI08/Context-Aware-Recipe-Generator',
    },
    {
      img: 'assets/projects/fl.svg',
      title: 'Federated Learning',
      desc: 'The project implements sentiment analysis using neural networks in a federated setting with PyTorch. We utilized the Sentiment140 and Large Movie Review datasets, along with pre-trained word vectors from GoogleNews-vectors-negative300, to enhance training efficiency. For model selection, we utilize the bidirectional LSTM architecture.',
      tech_stack: ['Python', 'PyTorch', 'Scikit-Learn', 'NLTK', 'Pandas'],
      url: 'https://github.com/Atul-AI08/Federated-Learning-for-NLP-Tasks',
    },
    {
      img: 'assets/projects/estore.png',
      title: 'eStore',
      desc: 'The project is an eStore where users can browse and search for items, view detailed product information, and add items to their cart. Users can place orders and create accounts to manage their purchases, track order history, and update personal information. The platform is designed for a seamless shopping experience, integrating essential e-commerce functionalities.',
      tech_stack: [
        'Angular',
        'SCSS',
        'Bootstrap',
        'Node.js',
        'Express.js',
        'MySQL',
      ],
      url: 'https://github.com/Atul-AI08/estore',
    },
  ];
  projects2: any[] = [
    // {
    //   img: 'assets/projects/smilechat.png',
    //   title: 'SmileChat',
    //   desc: 'The project showcases a comprehensive web application designed for seamless communication. It includes features such as video conferencing, text and audio messaging, group chats, and file sharing. Users can also customize their profiles, enhancing the virtual communication experience. The application aims to provide a robust and versatile platform for all communication needs.',
    //   tech_stack: ['Next.js', 'Node.js', 'Express.js', 'Tailwind', 'Firebase'],
    //   url: 'https://github.com/Atul-AI08/SmileChat',
    // },
    {
      img: 'assets/projects/translate.svg',
      title: 'Lingo Blend',
      desc: 'The project provides Python tools for classifying and translating Bengali, Hindi, Punjabi, Tamil, and Telugu texts. It uses the MuRIL model for language classification, IndicXlit for transliteration, and the NLLB-200 model for English translation, showcasing advanced NLP techniques for Indian languages.',
      tech_stack: ['Python', 'PyTorch', 'Hugging Face', 'Jupyter Notebook'],
      url: 'https://github.com/Atul-AI08/Lingo-Blend',
    },
    {
      img: 'assets/projects/time.png',
      title: 'Multi-Step Air Quality Forecasting',
      desc: 'The project predicts air quality levels using a systematic pipeline. It prepares and normalizes data, decomposes time-series into trend and seasonality components, and uses LSTM models for forecasting. A feed-forward neural network combines these features to predict future air quality, aiding decision-making in pollution-affected areas.',
      tech_stack: ['Python', 'Tensorflow', 'Keras', 'Pandas'],
      url: 'https://github.com/Atul-AI08/Multi-Step-Air-Quality-Forecasting',
    },
  ];

  @Output() scrollVar = new EventEmitter<string>();
  onScroll() {
    this.showMore = !this.showMore;
    if (this.showMore) return;
    setTimeout(() => {
      this.scrollVar.emit('certificates');
    }, 200);
  }
}
