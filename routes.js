Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
  this.render('home');
});

Router.route('/:forumTitle', function() {
  var title = this.params.forumTitle.replace("-", " ");
  this.render('forum', {
    data: function() {
      return Forums.findOne({title: title});
    }
  });
});

Router.route('/:forumTitle/new', function() {
  var title = this.params.forumTitle.replace("-", " ");
  this.render('newThread', {
    data: function() {
      return Forums.findOne({title: title});
    }
  });
});

Router.route('/:forumTitle/:_id', function() {
  this.render('thread', {
    data: function() {
      return Threads.findOne({_id: this.params._id});
    }
  });
});

Router.route('/:forumTitle/:_id/edit', function() {
  this.render('editThread', {
    data: function() {
      return Threads.findOne({_id: this.params._id});
    }
  });
});
