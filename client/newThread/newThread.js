Template.newThread.events({
  'submit .new-thread-form': function(event, template) {
    var userId = Meteor.userId();
    var forumId = template.data._id;
    var sectionId = template.data.sectionId;
    var author = Meteor.user().username;
    var createdAt = new Date();
    var title = event.target.newThreadTitle.value;
    var content = event.target.newThreadContent.value;

    var threadId = Threads.insert({
      userId: userId,
      forumId: forumId,
      sectionId: sectionId,
      author: author,
      createdAt: createdAt,
      title: title,
    })

    Posts.insert({
      userId: userId,
      forumId: forumId,
      sectionId: sectionId,
      threadId: threadId,
      author: author,
      createdAt: createdAt,
      content: content
    })

    var forumLink = Forums.findOne({_id: forumId}).title.replace(" ", "-");
    Router.go('/' + forumLink + '/' + threadId);
    return false;
  }
});
