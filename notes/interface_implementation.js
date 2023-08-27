var Instagram = /** @class */ (function () {
    //We can create as much classes as required by implementing the interface.
    //Also we can add more members if required but not less than the members in the interface.
    function Instagram(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    return Instagram;
}());
var Youtube = /** @class */ (function () {
    function Youtube(cameraMode, filter, burst, short //Extra members are allowed.
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    Youtube.prototype.createStory = function () {
        console.log("Story created.");
    };
    return Youtube;
}());
