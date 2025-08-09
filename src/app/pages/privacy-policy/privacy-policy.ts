import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Translation {
  title: string;
  content: string;
}

interface StaticContent {
  id: number;
  type: string;
  user_type: string;
  is_active: boolean;
  translations: {
    en: Translation;
    ar: Translation;
  };
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: {
    contents: StaticContent[];
  };
}

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.css',
})
export class PrivacyPolicy implements OnInit {
  protected readonly title = 'Privacy Policy - Nabih';
  protected privacyContent: string = '';
  protected isLoading: boolean = true;
  protected error: string = '';
  protected currentLanguage: 'en' | 'ar' = 'en';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadPrivacyContent();
  }

  protected loadPrivacyContent() {
    this.isLoading = true;
    this.error = '';

    this.http
      .get<ApiResponse>('https://api.nabih.sa/api/content/static-content')
      .subscribe({
        next: (response) => {
          console.log(response);
          if (response.success) {
            // Find privacy content for customers
            const privacyContent = response.data.contents.find(
              (content) =>
                content.type === 'privacy' && content.user_type === 'customer'
            );

            if (privacyContent && privacyContent.is_active) {
              let content =
                privacyContent.translations[this.currentLanguage]?.content ||
                privacyContent.translations.en.content;

              // Replace &nbsp; with regular spaces for better text wrapping
              this.privacyContent = content.replace(/&nbsp;/g, ' ');
            } else {
              this.error = 'Privacy policy content not found';
            }
          } else {
            this.error = 'Failed to load privacy policy content';
          }
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error loading privacy content:', err);
          this.error =
            'Failed to load privacy policy content. Please try again later.';
          this.isLoading = false;
        },
      });
  }

  protected toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'ar' : 'en';
    this.loadPrivacyContent();
  }
}
