export type Merge<P, T> = Omit<P, keyof T> & T;
