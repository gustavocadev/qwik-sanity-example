import type { PortableTextBlock } from '@sanity/types';

export type Page = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};
