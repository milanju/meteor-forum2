Sections = new Mongo.Collection("sections");

Sections.attachSchema({
  title: {
    type: String,
    label: "Section ID"
  }
});
