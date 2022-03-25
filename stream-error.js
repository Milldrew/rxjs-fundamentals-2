const { of, throwError, Observable } = require("rxjs");
const {
  retryWhen,
  concat,
  concatWith,
  retryAttempts,
  take,
  delay,
  retry,
  catchError,
} = require("rxjs/operators");

/*
const stream$ = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  throw new Error("hello error");
  observer.next(3);
  observer.complete();
}).pipe(
  retry(2),
  catchError((err) => of("patched error: " + err))
);

*/

const stream$ = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  throw new Error("hello error");
  observer.next(3);
  observer.complete();
}).pipe(
  retryWhen((errors) =>
    errors.pipe(
      delay(1000),
      take(retryAttempts),
      throwError("ensure our retry crashes").pipe(concatWith())
    )
  )
);

stream$.subscribe(
  (data) => console.log("data emitted", data),
  (err) => console.error("error emitted", err),
  () => console.log("stream completed")
);
