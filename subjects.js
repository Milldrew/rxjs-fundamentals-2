// A subject is like a combination of an Observable and an observer.
import { BehaviorSubject, Subject, Observable } from "rxjs";
/*
const streamObservable$ = new Observable((observer) => {
  observer.next(1);
  observer.next("from the observable 2");
});

streamObservable$.subscribe((data) => console.log("data", data));

const stream$ = new Subject();

stream$.subscribe((data) => console.log("data", data));
stream$.next(1);
stream$.next("from the subject 2");
*/

const behaviorStream$ = new BehaviorSubject("initial value");

setTimeout(() => {
  behaviorStream$.next("ajax");
}, 3000);

behaviorStream$.subscribe((data) => console.log("heavior stream", data));

//replay subject will emit events that are emitted before the subscription./ There is an option for the replay buffer just add a number as an argument.
