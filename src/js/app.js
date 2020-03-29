var app = angular.module("todoApp", ["firebase"]);

app.controller("TodoAppCtrl", function($scope, $firebaseArray) {
  var ref = firebase.database().ref().child("lists/qeyeTodo");
  // create a synchronized array
  $scope.todos = $firebaseArray(ref);

  $scope.todoCategories = [
    {name: "Core", value: "Core"},
    {name: "User Interface", value: "User Interface"},
    {name: "Communication", value: "Communication"}
   ];

  $scope.todoPriorities = [
    {name: "High", value: 1},
    {name: "Medium", value: 2},
    {name: "Low", value: 3}
   ];

  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addTodo = function() {
    var date = new Date();
    var stringDate = date.toISOString();
    $scope.todos.$add({
      text: $scope.newTodoText,
      category: $scope.newTodoCategory.value,
      priority: $scope.newTodoPriority.value,
      status: "pending",
      assignedTo: $scope.newTodoAssignedTo,
      timestamp: stringDate
     });
   };

   // remove items to the array
   // the message is automatically removed to our Firebase database!
   $scope.removeTodo = function(index, todo) {
       // check if item is valid
       //if (todo.id === undefined) {
       //  return;
       //}

       $scope.todos.$remove(todo);
   };

    // update status
    $scope.updateTodoStatus = function(index, todo) {

       // check if item is valid
       //if (todo.id === undefined) {
       //  return;
       //}

        if(todo.status === "pending") {
          todo.status = "progress";
        } else if(todo.status === "progress") {
          todo.status = "done";
        }
        
        $scope.todos.$save(todo);
    };

    $scope.getPriorityName = function(todo) {
      var name = $scope.todoPriorities.find(x => x.value === todo.priority).name;
      if (name === undefined) {
        name = "undefined";
      }
      return name;
    };
});