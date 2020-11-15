export default function useThenable<T>(create: () => PromiseLike<T>): [boolean, T | undefined];
