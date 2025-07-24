import { AfterViewInit } from '@angular/core';
import { Component, signal } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  ngAfterViewInit() {
    // Existing header functionality - keeping unchanged
    const updateHeader = () => {
      const header = document.getElementById('main-header');
      if (header) {
        if (window.innerWidth > 1024) {
          // Desktop behavior
          header.classList.remove('sticky', 'top-0');
          if (window.scrollY > 0) {
            header.classList.add(
              'bg-white/80',
              'shadow-md',
              'backdrop-blur-sm',
              'z-50'
            );
          } else {
            header.classList.remove(
              'bg-white/80',
              'shadow-md',
              'backdrop-blur-sm',
              'z-50'
            );
          }
        } else {
          // Mobile behavior - sticky with conditional background
          header.classList.remove('lg:fixed');
          header.classList.add('sticky', 'top-0');

          if (window.scrollY > 0) {
            header.classList.add(
              'bg-white/80',
              'shadow-md',
              'backdrop-blur-sm',
              'z-50'
            );
          } else {
            header.classList.remove(
              'bg-white/80',
              'shadow-md',
              'backdrop-blur-sm',
              'z-50'
            );
          }
        }
      }
    };
    window.addEventListener('scroll', updateHeader);
    window.addEventListener('resize', updateHeader);
    updateHeader();

    // GSAP Scroll Animations
    this.initScrollAnimations();
  }

  private initScrollAnimations() {
    // Hero section animation
    gsap.fromTo(
      '#home .hero-container > div:first-child',
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#home',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '#home .hero-img',
      {
        opacity: 0,
        x: 30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#home',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Why choose us section animation
    gsap.fromTo(
      '#why-choose-us > div > div:first-child',
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#why-choose-us',
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate feature cards with stagger
    gsap.fromTo(
      '#why-choose-us .grid > div',
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#why-choose-us .grid',
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // How it works section animation
    gsap.fromTo(
      '#how-it-works img:first-child',
      {
        opacity: 0,
        x: -30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#how-it-works',
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '#how-it-works > div > div:last-child',
      {
        opacity: 0,
        x: 30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#how-it-works',
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate how it works list items
    gsap.fromTo(
      '#how-it-works ul li',
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '#how-it-works ul',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Download app section animation
    gsap.fromTo(
      '#download-app > div > div:first-child',
      {
        opacity: 0,
        x: -30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#download-app',
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '#download-app img',
      {
        opacity: 0,
        x: 30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#download-app',
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Footer animation
    gsap.fromTo(
      '#contact-us > div:first-child > div',
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#contact-us',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  protected readonly title = signal('nabih-home');
}
