Template.forum.helpers({
  'threads': function() {
    return Threads.find({forumId: this._id});
  },
  'link': function() {
    return Forums.findOne({_id: this.forumId}).title.replace(" ", "-");
  }
});
Template.forum.events({
  'click .new-thread': function(event) {
    Router.go('/' + this.title.replace(" ", "-") + '/new');
  }
})
