export const sleep = (ms: number, message: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, ms);
  });
};
