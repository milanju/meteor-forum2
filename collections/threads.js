Threads = new Mongo.Collection("threads");

Threads.attachSchema({
  userId: {
    type: String,
    label: "User ID"
  },
  forumId: {
    type: String,
    label: "Forum ID"
  },
  sectionId: {
    type: String,
    label: "Section ID"
  },
  author: {
    type: String,
    label: "Author"
  },
  createdAt: {
    type: String,
    label: "Created at"
  },
  title: {
    type: String,
    label: "Title"
  },
  content: {
    type: String,
    label: "Content"
  }
});
