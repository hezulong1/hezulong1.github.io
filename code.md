- display: flex / table 下 text-overflow 失效

```ts
// npm i @zajno/common

export type LengthArray<
    T,
    N extends number,
    R extends T[] = []
> = number extends N
    ? T[]
    : (R['length'] extends N
        ? R
        : LengthArray<T, N, [T, ...R]>
    );

export type EmptyArray = [] & { length: 0 };
export type NonEmptyArray<T = any> = T[] & { 0: T; };

/** Intellisense helper to show type unions/intersections as a whole type */
export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
```


```css
cubic-bezier(.77, 0, .175, 1)
#fffbf5
#f0f3e2
```