export interface YTVideo {
  id: string;
  title: string;
  thumbnailUrl: string;
  category: string;
}

interface PlaylistConfig {
  id: string;
  category: string;
  maxResults?: number;
}

const PLAYLISTS: PlaylistConfig[] = [
  // Personal Brand ขึ้นก่อน เพื่อไม่ให้คลิปถูกนับเป็น category อื่น
  { id: "PLUuz1sbgdfB8hLz4Wm1t8DsWhZn3i-W6q", category: "Personal Brand", maxResults: 18 },
  { id: "PLUuz1sbgdfB9BFSNoxCgPfVX9QaZ2edkU", category: "คลินิก",         maxResults: 15 },
  { id: "PLUuz1sbgdfB_8KWV-6erY2jdJJ_qaDEkp", category: "คลินิก",         maxResults: 15 },
  { id: "PLUuz1sbgdfB81XIJ8G8UCoJkjKF9GV8vt", category: "อสังหาฯ",        maxResults: 15 },
  { id: "PLUuz1sbgdfB9H12QICPQssgA4Q1uTi3Tv", category: "อสังหาฯ",        maxResults: 12 },
  { id: "PLUuz1sbgdfB-pvJfkPdeL_FiAWpfpfyhZ", category: "งานแต่ง",        maxResults: 13 },
  { id: "PLUuz1sbgdfB8LVnPxkXzWk__bxN_INp0y", category: "ให้ความรู้",     maxResults: 10 },
  { id: "PLUuz1sbgdfB98ZlqAZbkrJRScn6j6iitB", category: "ADS Motion",     maxResults: 15 },
];

export const CATEGORY_ORDER = [
  "Personal Brand",
  "คลินิก",
  "อสังหาฯ",
  "งานแต่ง",
  "ให้ความรู้",
  "ADS Motion",
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseItems(items: any[], category: string): YTVideo[] {
  return items.map((item) => {
    const sn = item.snippet;
    const thumb =
      sn.thumbnails?.maxres?.url ||
      sn.thumbnails?.high?.url ||
      sn.thumbnails?.medium?.url ||
      "";
    return {
      id: sn.resourceId.videoId as string,
      title: sn.title as string,
      thumbnailUrl: thumb,
      category,
    };
  });
}

export async function fetchAllPortfolioVideos(): Promise<YTVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    console.error("YOUTUBE_API_KEY not set");
    return [];
  }

  const results = await Promise.allSettled(
    PLAYLISTS.map(async (pl) => {
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${pl.id}&maxResults=${pl.maxResults ?? 6}&key=${apiKey}`;
      const res = await fetch(url, { next: { revalidate: 3600 } });
      const data = await res.json();
      return parseItems(data.items || [], pl.category);
    })
  );

  const seenId = new Set<string>();
  const seenTitle = new Set<string>();
  const videos: YTVideo[] = [];

  for (const result of results) {
    if (result.status === "fulfilled") {
      for (const v of result.value) {
        const titleKey = `${v.category}::${v.title.trim().toLowerCase()}`;
        if (!seenId.has(v.id) && !seenTitle.has(titleKey)) {
          seenId.add(v.id);
          seenTitle.add(titleKey);
          videos.push(v);
        }
      }
    }
  }
  return videos;
}
