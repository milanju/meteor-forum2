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
    if(Sections.find().fetch().length === 0) {
      var section1 = Sections.insert({
        title: "Some Section"
      });
      var section2 = Sections.insert({
        title: "Another Section"
      });
      Forums.insert({
        sectionId: section1,
        title: "Forum1",
        description: "Some description"
      });
      Forums.insert({
        sectionId: section1,
        title: "Forum2",
        description: "Another description"
      });
      Forums.insert({
        sectionId: section1,
        title: "Forum1",
        description: "this is forum"
      });
      Forums.insert({
        sectionId: section2,
        title: "Forum1",
        description: "description"
      });
      Forums.insert({
        sectionId: section2,
        title: "Forum1",
        description: "scriptionde"
      });
    }


  });
}
