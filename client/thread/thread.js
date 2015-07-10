Template.thread.events({
  'click .edit-thread': function(event, template) {
    Router.go(Router.current().url + "/edit");
  }
});
