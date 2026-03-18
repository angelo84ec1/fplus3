import { Metadata } from "next";

type Props = {
  params: { _slug: string };
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blogUrl = params["_slug"];
  try {
    const article = require(`@/static/Content/BlogPost/${blogUrl}.json`);
    return {
      title: article.seo.title,
      description: article.seo.description,
      alternates: {
        canonical: `https://fplusglobal.com/blogs/${blogUrl}`,
      },
    };
  } catch {
    return {};
  }
}

const PageLayout = async (props: any) => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};

export default PageLayout;
