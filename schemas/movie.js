export default {
  title: "Movie",
  name: "movie",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Cover",
      name: "cover",
      type: "image",
    },
    {
      title: "Director",
      name: "director",
      type: "reference",

      to: [{ type: "person" }],
    },
    {
      title: "Writer",
      name: "writer",
      type: "reference",

      to: [{ type: "person" }],
    },
  ],
};
