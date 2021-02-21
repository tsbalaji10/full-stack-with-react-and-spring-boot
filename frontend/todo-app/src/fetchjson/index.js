"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    console.log("\n    The todo with id:" + id + "\n    has a title of:" + title + "\n    Is it finished? " + finished + "\n    ");
});
