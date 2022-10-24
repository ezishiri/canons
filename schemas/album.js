export default {
  title: "Album",
  name: "album",
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
      title: "Artist",
      name: "artist",
      type: "reference",

      to: [{ type: "person" }],
    },
  ],
};
