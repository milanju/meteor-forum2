Template.quickReply.events({
  'submit .thread-quick-reply': function(event, template) {
    var userId = Meteor.userId();
    var forumId = this.forumId;
    var sectionId = this.sectionId;
    var threadId = this._id;
    var author = Meteor.user().username;
    var createdAt = new Date();
    var content = event.target.quickReplyContent.value;

    Posts.insert({
      userId: userId,
      forumId: forumId,
      sectionId: sectionId,
      threadId: threadId,
      author: author,
      createdAt: createdAt,
      content: content
    })

    return false;
  }
});
