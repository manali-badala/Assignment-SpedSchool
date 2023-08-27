import { Component } from '@angular/core';

interface PurchaseExamCart {
  testName: string;
  learnBtn: string;
  testCardDesc: string;
}

@Component({
  selector: 'app-purchase-cart',
  templateUrl: './purchase-cart.component.html',
  styleUrls: ['./purchase-cart.component.scss'],
})
export class PurchaseCartComponent {
  purschaseAssessment: PurchaseExamCart[] = [
    {
      testName: 'Educational Assessment',
      learnBtn: 'Learn More',
      testCardDesc: 'AI delivered English And Maths Assessment',
    },
    {
      testName: 'Occupational Therapy Assessment',
      learnBtn: 'Learn More',
      testCardDesc: 'SpEd@Home makes online learning fun and flexible for Kids ',
    },
    {
      testName: 'Speech Assessment',
      learnBtn: 'Learn More',
      testCardDesc: 'SpEd@Home makes online Environment for Speech Assessment',
    },
  ];
}
