/// <reference path="../.astro/types.d.ts" />

type NewsModel = {
  title: string;
  description: string;
  image: string;
  alt: string;
  type: string;
  slug: string;
  author: Author;
  date: string;
  tags?: Tag[];
};

type Tag = {
  title: string;
  slug: string;
};

type Author = {
  name: string;
  avatar: string;
  slug: string;
};

type WebStory = {
  src: string;
  alt: string;
  title: string;
};

type NewsElement = {
  data: string;
  type: "paragraph" | "image" | "quote" | "source" | "video" | "embed";
};

type NewsDetail = NewsModel & {
  cover: string;
  elements: NewsElement[];
};
