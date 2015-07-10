Template.section.helpers({
  'forums': function(id) {
    return Forums.find({sectionId: id});
  },
  'link': function(title) {
    return title.replace(" ", "-");
  }
});
