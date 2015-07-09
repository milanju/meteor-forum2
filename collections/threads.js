Threads = new Mongo.Collection("threads");

Threads.attachSchema({
  userId: {
    type: String,
    label: "User ID"
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
