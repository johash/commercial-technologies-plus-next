import Layout from "../../components/Layout/Layout";
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import Insights from "../../components/Insights/Insights";
import AllBlogs from "../../components/AllBlogs/AllBlogs";
import StartProject from "../../components/StartProject/StartProject";

const BlogPage = () => {
  return (
    <Layout>
      <BlogHeader />
      <Insights />
      <AllBlogs />
      <StartProject />
    </Layout>
  );
};

export default BlogPage;
