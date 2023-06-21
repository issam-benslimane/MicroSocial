import { keys } from "./object-keys";

export function mapObject<T extends object, R>(obj: T, fn: (v: any) => R) {
  return keys(obj).reduce((final, key) => {
    const v = obj[key];
    return { ...final, [key]: fn(v) };
  }, {});
}
