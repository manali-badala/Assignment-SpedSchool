import { Component, HostListener } from '@angular/core';

interface SolutionsCategory {
  title: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})

export class MainLayoutComponent {
  solutionsCategory: SolutionsCategory[] = [
    {
      title: 'assessment-card',
      name: 'Assessment',
      description: 'An unique way of assessing your child.',
    },
    {
      title: 'therapy-card',
      name: 'Therapy',
      description: 'Evidence based online Therapy Sessions',
    },
    {
      title: 'learning-card',
      name: 'Learning',
      description: 'Effective Social Learning with Specialized Coach',
    },
  ];

  @HostListener('window:scroll', []) // Listen for scroll events
  onWindowScroll() {
    this.toggleScrollButtonVisibility();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleScrollButtonVisibility() {
    const button = document.querySelector('.scroll-to-top-button');
    if (button) {
      if (window.scrollY > 200) {
        button.classList.add('show');
      } else {
        button.classList.remove('show');
      }
    }
  }
}
