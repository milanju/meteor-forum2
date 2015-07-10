Template.editThread.events({
  'submit .edit-thread-form': function(event, template) {
    var threadId = template.data._id;
    var forumId = template.data.forumId;
    var title = event.target.editThreadTitle.value;
    var content = event.target.editThreadContent.value;

    Threads.update({_id: threadId}, {$set: {title: title, content: content}});

    var forumLink = Forums.findOne({_id: template.data.forumId}).title.replace(" ", "-");
    Router.go('/' + forumLink + '/' + threadId);
    return false;
  },
  'click .delete-thread': function(event, template) {
    var threadId = template.data._id;
    var forumId = template.data.forumId;
    Threads.remove({_id: threadId});

    var forumLink = Forums.findOne({_id: template.data.forumId}).title.replace(" ", "-");
    Router.go('/' + forumLink);
    return false;
  }
});
