import {
  MDXRemote,
  MDXRemoteProps,
  MDXRemoteSerializeResult,
} from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { GetStaticPaths, GetStaticProps } from 'next';
import matter from 'gray-matter';

type BlogPostProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: BlogPostFrontmatter;
};

export default function BlogPost({ source, frontMatter }: BlogPostProps) {
  console.log(frontMatter);
  return (
    
<div>
<div>
<h1>{frontMatter.title}</h1>
<h2>{frontMatter.description}</h2>
<MDXRemote {...source} />
</div>
</div>
  );
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = await loadMdxFromSlug(params?.slug as string);
  const mdxSource = await serialize(content, {
      // Optionally pass remark/rehype plugins
      mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
      },
      scope: data,
  });
  return {
      props: {
          source: mdxSource,
          frontMatter: data,
      },
  };
};


export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await findAllPostSlugs();
  console.log(slugs);
  return {
      paths: slugs.map((slug) => {
          return { params: { slug } };
      }),
      fallback: false, // false or 'blocking'
  };
};