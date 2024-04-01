import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-translate';
  nombreMio = 'Armando';
  lang: string | undefined = 'en';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    this.lang = translate.getBrowserCultureLang();
    console.log('Language initial detected: ', this.lang);

    if (!this.lang) {
      console.error('Language not detected');
      this.lang = 'en';
    }
    if (this.lang === 'es-419') {
      console.log('Language es-419 changing to es-MX');
      this.lang = 'es-MX';
    }

    console.log('Language to use: ', this.lang);
    this.useLanguage(this.lang);

    translate
      .get('demo.greeting', { name: 'Armando' })
      .subscribe((res: string) => {
        console.log(res);
      });

    console.log(translate.instant('demo.greeting', { name: 'Developer' }));
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
