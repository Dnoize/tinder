import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  posts = [
    {
      title: "Premier post",
      content : "Ceci est mon premier post. Passionnant n'est-ce pas?",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Deuxième post",
      content : "Ceci est mon deuxième post. Extraordinaire non?",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Troisième post",
      content : "Ceci est mon troisième post. Phénoménalement incroyable!",
      loveIts: 0,
      created_at: new Date()
    }
  ]
}
