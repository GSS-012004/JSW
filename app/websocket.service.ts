import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { of } from 'rxjs';

// import * as Rx from "rxjs/Rx";


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()

export class WebsocketService {

  constructor( URL = "ws://192.168.18.4:3001") {
    
   }
 

  private subject!: Subject<MessageEvent>;
  public connect(URL:any): Subject<MessageEvent>{
    if(!this.subject){
      this.subject = this.create(URL);
      console.log("Successfully connected:" + URL);


    }
    return this.subject;
  }

//   private create (url:string):Rx.Subject<MessageEvent>{
//     let ws = new WebSocket(url);
//     let observable = Rx.Observable.create((obs:Rx.Observar)=>)
//   }
// }

private create(URL:any): Subject<MessageEvent> {
  let ws = new WebSocket(URL);


let observable = Observable.create((obs: Observer<MessageEvent>) => {
  ws.onmessage = obs.next.bind(obs);
  ws.onerror = obs.error.bind(obs);
  ws.onclose = obs.complete.bind(obs);
  return ws.close.bind(ws);
});
let observer = {
  next: (data: Object) => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(data));
    }
  }
};
return Subject.create(observer, observable);
}
}
