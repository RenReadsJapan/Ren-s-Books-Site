import CatalogView from "@/components/CatalogView";
import { catalogs } from "@/data/books";

export const metadata = { title: "Shinji" };

export default function ShinjiPage() {
  return <CatalogView catalog={catalogs.shinji} />;
}
