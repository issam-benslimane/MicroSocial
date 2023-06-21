import { keys } from "./object-keys";

export function mergeUrlParts(
  base: string,
  {
    path,
    params,
  }: { path?: string; params?: Record<string, string | undefined> } = {}
) {
  let url = base.replace(/\/$/g, "");
  if (path) url = [url, path.replace(/^\/|\/$/g, "")].join("/");
  if (params) url = [url, toUrlQueryParams(params)].join("?");
  return url;
}

function toUrlQueryParams(params: Record<string, string | undefined>) {
  return keys(params)
    .map((key) => {
      const value = params[key];
      if (value) return `${key}=${encodeURIComponent(value)}`;
      return undefined;
    })
    .filter((v) => v !== undefined)
    .join("&");
}
