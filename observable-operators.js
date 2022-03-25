const { of } = require("rxjs");
const { tap, map, filter } = require("rxjs/operators");
const streamProjection$ = of(1, 2, 3, 4).pipe(map((value) => value + 1));

streamProjection$.subscribe((data) => console.log("data", data));

const streamFilterd$ = of(1, 2, 3).pipe(filter((value) => value % 2 === 0));

streamFilterd$.subscribe((data) => console.log("filtered", data));

const streamFilterd2$ = of(1, 2, 3, 4).pipe(
  tap((value) => console.log("tap", value)),
  map((value) => value * 2),
  filter((value) => value % 2 === 0)
);

streamFilterd2$.subscribe((data) => console.log("filtered2", data));
