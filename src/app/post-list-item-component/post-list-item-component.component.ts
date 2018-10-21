import { Component, OnInit, Input } from '@angular/core';
 let clicL : any=0;
 let clicD : any=0;

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})

   


export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent : string;
  @Input() postLoveIts : number;
  @Input() postDate : string;



  constructor() { }

  ngOnInit() {
  }

  
  onLike(){
    clicL++;
    document.getElementById("nbLike").innerHTML = clicL
  }

  onDislike(){
    clicD++;
    document.getElementById("nbDislike").innerHTML = clicD
  }
}
