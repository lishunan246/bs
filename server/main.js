/**
 * Created by Li Shunan on 2015/5/23.
 */
var CE = require("canvasengine").listen(8333);
CE.Model.init("Main", ["start"], {
    initialize: function (socket) {

    },
    start: function () {
        console.log("started");
        this.socket.emit("MyScene.load", "Hello");
    }
});