interface TakePhoto {
    cameraMode: string,
    filter: string,
    burst: number
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {
//We can create as much classes as required by implementing the interface.
//Also we can add more members if required but not less than the members in the interface.
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}
}


class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: boolean //Extra members are allowed.
    ) {}

    createStory(): void {
        console.log("Story created.")
    }
}