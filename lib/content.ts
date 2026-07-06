import { cacheLife, cacheTag } from "next/cache";
import { defaultContent, type SiteContent } from "./defaultContent";
import { CONTENT_FILE_NAME, downloadFile, findFileByName, uploadOrUpdateJson } from "./drive";

function mergeContent(partial: Partial<SiteContent> | null): SiteContent {
  if (!partial) return defaultContent;

  return {
    contact: { ...defaultContent.contact, ...partial.contact },
    tarifs: { ...defaultContent.tarifs, ...partial.tarifs },
    hero: { ...defaultContent.hero, ...partial.hero },
    about: { ...defaultContent.about, ...partial.about },
    services: { ...defaultContent.services, ...partial.services },
  };
}

async function fetchContent(): Promise<SiteContent> {
  try {
    const file = await findFileByName(CONTENT_FILE_NAME);
    if (!file) return defaultContent;

    const raw = await downloadFile(file.id);
    const parsed = JSON.parse(raw) as Partial<SiteContent>;
    return mergeContent(parsed);
  } catch {
    return defaultContent;
  }
}

export async function getSiteContent(): Promise<SiteContent> {
  "use cache";
  cacheTag("site-content");
  cacheLife("hours");

  return fetchContent();
}

/** Uncached read for admin write flows — avoids merging stale cached data. */
export async function getRawSiteContent(): Promise<SiteContent> {
  return fetchContent();
}

export async function saveSiteContent(content: SiteContent): Promise<void> {
  await uploadOrUpdateJson(CONTENT_FILE_NAME, content);
}
