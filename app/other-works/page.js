import CatalogView from "@/components/CatalogView";
import { catalogs } from "@/data/books";

export const metadata = { title: "Other Works" };

export default function OtherWorksPage() {
  return <CatalogView catalog={catalogs.otherWorks} />;
}