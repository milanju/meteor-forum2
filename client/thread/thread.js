Template.thread.helpers({
  'forumTitle': function() {
    var forum = Forums.findOne({_id: this.forumId});
    return forum.title;
  },
  'forumLink': function() {
    var forum = Forums.findOne({_id: this.forumId});
    return forum.title.replace(" ", "-");
  },
  'currentUrl': function() {
    return Router.current().url;
  }
})

Template.thread.events({
  'click .edit-thread': function(event, template) {
    Router.go(Router.current().url + "/edit");
  }
});
