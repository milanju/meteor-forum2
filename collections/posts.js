Posts = new Mongo.Collection("posts");

Posts.attachSchema({
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
  threadId: {
    type: String,
    label: "Thread ID"
  },
  author: {
    type: String,
    label: "Author"
  },
  createdAt: {
    type: String,
    label: "Created at"
  },
  content: {
    type: String,
    label: "Content"
  }
});
