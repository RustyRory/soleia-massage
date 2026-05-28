import { cacheLife } from "next/cache";

export type Review = {
  author: string;
  photoUri: string;
  rating: number;
  text: string;
  relativeTime: string;
};

export async function getGoogleReviews(): Promise<Review[]> {
  "use cache";
  cacheLife("hours");

  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!placeId || !apiKey) return [];

  const res = await fetch(
    `https://places.googleapis.com/v1/places/${placeId}`,
    {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "reviews.rating,reviews.text,reviews.authorAttribution,reviews.relativePublishTimeDescription",
      },
    }
  );

  if (!res.ok) return [];

  const data = await res.json();

  return (data.reviews ?? []).map((r: {
    rating: number;
    text?: { text: string };
    relativePublishTimeDescription: string;
    authorAttribution: { displayName: string; photoUri: string };
  }) => ({
    author: r.authorAttribution.displayName,
    photoUri: r.authorAttribution.photoUri,
    rating: r.rating,
    text: r.text?.text ?? "",
    relativeTime: r.relativePublishTimeDescription,
  }));
}
