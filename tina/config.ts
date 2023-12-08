import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog",
        path: "src/content/blog",
        fields: [

          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          { type: "string", name: "author", label: "Author", required: true },
          {
            type: "datetime",
            name: "pubDatetime",
            label: "Publish Date",
            required: true,
          },
          {
            type: "string",
            name: "postSlug",
            label: "Slug",
            required: false,
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured",
            required: false,
          },
          { type: "boolean", name: "draft", label: "Draft", required: false },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            required: true,
            list: true,
          },
          {
            type: "string",
            name: "ogImage",
            label: "OG Image URL",
            required: false,
          },
          {
            type: "string",
            name: "canonicalURL",
            label: "Canonical URL",
            required: false,
          },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
    ],
  },
});
