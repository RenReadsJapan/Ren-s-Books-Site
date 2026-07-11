import CatalogView from "@/components/CatalogView";
import { catalogs } from "@/data/books";

export const metadata = { title: "Everyday Together" };

export default function EverydayTogetherPage() {
  return <CatalogView catalog={catalogs.everydayTogether} />;
}
