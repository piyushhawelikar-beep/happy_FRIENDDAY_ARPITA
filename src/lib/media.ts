// Media auto-discovery.
// We glob lazily (no `eager`) so the loader functions are never invoked —
// that means Vite only resolves the file *paths* at build time and we can
// serve the files straight from /public (no asset import of public files).
const photoGlob = import.meta.glob(
  "/public/photos/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG,WEBP}",
);
const videoGlob = import.meta.glob("/public/videos/*.{mp4,webm,mov,m4v,MP4,WEBM,MOV}");
const musicGlob = import.meta.glob("/public/music/*.{mp3,wav,ogg,m4a,MP3,WAV,OGG,M4A}");

const toPublicUrl = (key: string) => key.replace(/^\/public/, "");

const sortNatural = (a: string, b: string) =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });

const collect = (glob: Record<string, unknown>) =>
  Object.keys(glob).sort(sortNatural).map(toPublicUrl);

export const photos: string[] = collect(photoGlob);
export const videos: string[] = collect(videoGlob);
export const tracks: string[] = collect(musicGlob);

export const prettyName = (url: string) =>
  decodeURIComponent(url.split("/").pop() ?? "")
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
