export enum COLORS {
    red,
    green,
    yellow,
    blue
}
export const START_COUNT = 2;

export const sleep = async (time: number) => {
   return new Promise (resolve => setTimeout(resolve, time));
}