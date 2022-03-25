const { Observable } = require("rxjs");
/*
const stream$ = new Observable((observer) => {
  observer.next(1);
  observer.next(1);
});

stream$.subscribe((data) => console.log("data", data));
*/

const streamPromise$ = new Observable((observer) => {
  const promise = new Promise((resolve, reject) => {
    const randomNumberLessThanTen = Math.floor(Math.random() * 10);
    const isError = randomNumberLessThanTen > 5;
    const id = setTimeout(() => {
      if (isError) {
        reject("error");
      }
      resolve("data");
    }, 3000);
  });
  promise
    .then((data) => {
      observer.next(data);
      observer.complete();
    })
    .catch((error) => observer.next(error));
});

streamPromise$.subscribe(
  (data) => console.log(data),
  (err) => console.error(err),
  () => console.log("observer complete")
);
