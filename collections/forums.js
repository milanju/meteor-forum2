Forums = new Mongo.Collection("forums");

Forums.attachSchema({
  sectionId: {
    type: String,
    label: "Section ID"
  },
  title: {
    type: String,
    label: "Title"
  },
  description: {
    type: String,
    label: "Description"
  }
});
