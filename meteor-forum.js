if (Meteor.isClient) {
  Template.homes.helpers({
    'threads': function() {
      return Threads.find();
    },
    'threadPosts': function() {
      return Posts.find({threadId: this._id}).fetch().length;
    },
    'activeThread': function() {
      return Session.get("activeThread");
    }
  });

  Template.homes.events({
    'click .thread-row': function(event) {
      Session.set("activeThread", this._id);
    }
  })

  Template.threadView.helpers({
    'thread': function() {
      var threadId = Session.get("activeThread");
      return Threads.findOne({_id: threadId});
    }
  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
