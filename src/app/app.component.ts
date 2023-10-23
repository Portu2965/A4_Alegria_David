import { Component } from '@angular/core';

/**
 * Refactor `data` to a new file.
 * Ctrl + . will reveal the refactoring options.
 */
export const data = {
  app: {
    generalInformation: {
      title: 'The Force'
    },
    footer: {
      author: 'David Alegria',
      email: 'dalegria@inscastellet.cat'
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title: string;

  constructor() {
    this.title = this.titleOfTheApplication()
  }

  private titleOfTheApplication(): string {
    return data.app.generalInformation.title;
  }
}

import { Bird } from './bird';
const bird= new Bird();
bird.Birdname="Paquito";
bird.Wingspan="12cm";
bird.eggsize=0;
console.log(bird);
