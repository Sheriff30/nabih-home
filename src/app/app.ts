import { AfterViewInit } from '@angular/core';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  ngAfterViewInit() {
    const updateHeader = () => {
      const header = document.getElementById('main-header');
      if (header) {
        if (window.innerWidth > 1024) {
          header.classList.remove('sticky', 'top-0');
          if (window.scrollY > 0) {
            header.classList.add(
              'bg-white/80',
              'shadow-md',
              'backdrop-blur-sm'
            );
          } else {
            header.classList.remove(
              'bg-white/80',
              'shadow-md',
              'backdrop-blur-sm'
            );
          }
        } else {
          header.classList.remove(
            'bg-white/80',
            'shadow-md',
            'backdrop-blur-sm',
            'z-50'
          );
          header.classList.add(
            'sticky',
            'top-0',
            'backdrop-blur-sm',
            'bg-white/80'
          );
        }
      }
    };
    window.addEventListener('scroll', updateHeader);
    window.addEventListener('resize', updateHeader);
    updateHeader();
  }
  protected readonly title = signal('nabih-home');
}
