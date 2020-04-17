import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";
  url: string = "https://jsonplaceholder.typicode.com/posts";
  items: any = [];
  constructor(private http: HttpClient) {}
  // constructor() {}
  //// callback
  // ngOnInit() {
  //   console.log('1 first start...');
  //   this.asyncfuction(()=>{
  //     console.log('3 first start...');
  //   });

  // }
  // syncFunction(){
  //   confirm('confirm !!!');
  //   console.log('2 sync Function');
  // }
  // asyncfuction( callback: Function){
  //   setTimeout(()=>{
  //     console.log('2 Async Function')
  //     callback();
  //   },100)
  // }

  ////  who to async await
  // items: any = [];
  //   async ngOnInit() {
  //     console.log("1 first start...");
  //     await this.asyncFuction();
  //     console.log("3 first start...");
  //   }
  //   syncFunction() {
  //     confirm("confirm !!!");
  //     console.log("2 sync Function");
  //   }
  //   asyncFuction() {
  //     return new Promise(resolve => {
  //       setTimeout(() => {
  //         console.log("2 Async Function");
  //         resolve();
  //       }, 100);
  //     });
  //   }
  ngOnInit() {
    this.getPosts();
  }

  async getPosts() {
   this.items = await this.http.get(this.url).toPromise();
    console.log(this.items);
  }
  syncFunction() {
    confirm("confirm !!!");
    console.log("2 sync Function");
  }
  asyncFuction() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("2 Async Function");
        resolve();
      }, 100);
    });
  }
}
