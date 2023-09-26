export interface LaunchPadInterface {
  project: {
    title: string | null;
  } | null;
  team: object | null;
  artworks: {
    price: string | null;
  } | null;
  sales: object | null;
  social: object | null;
}
