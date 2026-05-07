import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isDarkMode = false;

  ngOnInit() {
    // Check localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      this.isDarkMode = true;
    } else if (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Respect system preference if not set
      this.isDarkMode = true;
    }

    this.updateBodyClass();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.updateBodyClass();
  }

  private updateBodyClass() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
