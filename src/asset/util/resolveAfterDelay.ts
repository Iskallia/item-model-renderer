export async function resolveAfterDelay<T>(
  resolver: () => Promise<T> | T,
  delay: number
) {
  return new Promise<T>((resolve) => {
    setTimeout(async () => resolve(await resolver()), delay);
  });
}
