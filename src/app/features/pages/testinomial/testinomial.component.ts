import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testinomial',
  imports: [CommonModule],
  templateUrl: './testinomial.component.html',
  styleUrl: './testinomial.component.scss'
})
export class TestinomialComponent {
  pmTestimonials = [
  {
    name: 'Linda Chen',
    role: 'Product Manager, NovaTech',
    comment: 'Planvia helped us cut sprint planning time by 40%. It’s clean, fast, and customizable.',
    image: 'images/man-1.jpg'
  },
  {
    name: 'Carlos Rivera',
    role: 'CTO, DevCore Systems',
    comment: 'Migrating from Jira to Planvia was the best decision. Our devs love the intuitive workflows.',
    image: 'images/women-1.jpg'
  },
  {
    name: 'Emily Thorne',
    role: 'Project Lead, Ascend Agency',
    comment: 'Dependencies, roadmaps, and velocity tracking — all in one place. Planvia is a game-changer.',
    image: 'images/man-2.jpg'
  },
  {
    name: 'Markus Klein',
    role: 'Agile Coach, FastLaunch',
    comment: 'What I love about Planvia is the simplicity. No fluff, just what agile teams actually need.',
    image: 'images/man-2.jpg'
  },
  {
    name: 'Ayesha Siddiqui',
    role: 'Engineering Manager, BrightSync',
    comment: 'Our cross-functional teams finally speak the same language — thanks to Planvia’s visual boards.',
    image: 'images/women-1.jpg'
  },
  {
    name: 'Julian Becker',
    role: 'Founder, SprintOps',
    comment: 'Planvia gives us enterprise-grade features at startup speed. We’ll never look back.',
    image: 'images/man-2.jpg'
  }
];


collageImages = [
    { src: 'images/man-1.jpg', alt: 'Team member 1' },
    { src: 'images/women-1.jpg', alt: 'Team member 2' },
    { src: 'images/man-2.jpg', alt: 'Team member 3' },
    { src: 'images/man-2.jpg', alt: 'Team member 4' },
    { src: 'images/man-1.jpg', alt: 'Team member 5' },
    { src: 'images/women-1.jpg', alt: 'Team member 6' },
    { src: 'images/about.png', alt: 'Team group' }
  ];
}
