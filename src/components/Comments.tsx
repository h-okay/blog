import { CommentCount, DiscussionEmbed } from "disqus-react";

type CommentsProps = {
  url: string;
};

export default function Comments({ url }: CommentsProps) {
  return (
    <section id="comments" className="w-full p-0">
      <CommentCount
        shortname="blog-hakanokay-dev"
        config={{
          url: url,
          identifier: url,
          title: url,
        }}
      >
        <h2 className="pb-5 text-xl font-semibold">Comments</h2>
      </CommentCount>
      <DiscussionEmbed
        shortname="blog-hakanokay-dev"
        config={{
          url: url,
          identifier: url,
          title: url,
          language: "en_US",
        }}
      />
    </section>
  );
}
