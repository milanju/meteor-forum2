Template.thread.helpers({
  'posts': function() {
    var starter = Threads.findOne({_id: this._id});
    var replys = Posts.find({threadId: this._id}).fetch();
    var posts = [];
    posts.push(starter);
    for(var i = 0; i < replys.length; i++){
      posts.push(replys[i]);
    }
    return posts;
  }
});

Template.thread.events({
  'click .edit-thread': function(event, template) {
    Router.go(Router.current().url + "/edit");
  }
});
