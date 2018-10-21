import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})


export class PostListComponentComponent implements OnInit {
 
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
  constructor() { }

  ngOnInit() {
  }

}
