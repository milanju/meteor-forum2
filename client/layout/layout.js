Template.layout.helpers({
  'navigation': function() {
    var path = Router.current().location.get().path.split("/");
    var prev = "";
    var pathArray = [];
    for(var i = 0; i < path.length; i++){
      if(path[i] != "") {
        pathArray.push({name: path[i], link: prev + path[i]});
        prev += path[i] + "/";
      }
    }
    return pathArray;
  }
});
