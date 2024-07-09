import { getBlogsData } from "@/lib/db/db-helper";
import FcBlogs from "@/components/pages/Blogs";

export default async function BlogsPage() {
  const allBlogs = await getBlogsData();
  return <FcBlogs allBlogs={allBlogs} base="blogs" />;
}
