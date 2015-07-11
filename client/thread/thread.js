Template.thread.helpers({
  'posts': function() {
    return Posts.find({threadId: this._id});
  }
});

Template.thread.events({
  'click .edit-thread': function(event, template) {
    Router.go(Router.current().url + "/edit");
  }
});
