import CatalogView from "@/components/CatalogView";
import { catalogs } from "@/data/books";

export const metadata = { title: "Ren English Readers" };

export default function RenPage() {
  return <CatalogView catalog={catalogs.ren} />;
}
