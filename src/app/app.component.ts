import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-translate';
  nombreMio = "Armando";
  constructor(private translate: TranslateService) {
    const lang = translate.getBrowserLang();
    // const lang = translate.getBrowserCultureLang();
    if (lang) {
      console.log('Language detected ->', lang);
      translate.setDefaultLang(lang);
      translate.use(lang);

      translate.get('demo.greeting', {name: 'John'}).subscribe((res: string) => {
        console.log(res);
      });
    }

    translate.get('demo.greeting', {name: 'John'}).subscribe((res: string) => {
      console.log(res);
    });

    console.log(translate.instant('demo.greeting', {name: 'John'}));
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}

}
