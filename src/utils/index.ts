import path from 'path';

import glob from 'tiny-glob';
import matter from 'gray-matter';
import fs from 'fs/promises';

export type BlogPostFrontmatter = {
    title: string;
    description: string;
    publishedAt: string;
};

export function pascalToKebabCase(pascalString: string): string {
    return pascalString
        .split(/[A-Z][a-z]+/g)
        .map((s) => s.toLocaleLowerCase())
        .join('-');
}

export function kebabToPascalCase(kebabString: string): string {
    return kebabString
        .split('-')
        .map((s) => s[0].toLocaleUpperCase() + s.substring(1))
        .join('');
}

export const BLOG_PATH = path.join(process.cwd(), '/posts/');

export type BlogPostDescription = {
    slug: string;
    title: string;
};

export function findAllPostSlugs() {
    return glob(path.join(BLOG_PATH, '*.mdx')).then((paths) =>
        paths.map(getSlug)
    );
}

function getSlug(slugPath: string) {
    const [slug] = /.+(?=.mdx)/i.exec(path.basename(slugPath)) as string[];
    return slug;
}

export function getPath(slug: string) {
    return path.join(BLOG_PATH, slug + '.mdx');
}

export async function loadMdxFromSlug(slug: string) {
    const path = getPath(slug);
    const source = await fs.readFile(path);
    return matter(source);
}