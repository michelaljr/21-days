class Computer{
    type
    processor
    video
    storage
    memory
    ssd

    constructor(type, processor, video, storage, memory, ssd){
    this.Type = type;
    this.Processor = processor;
    this.Video = video;
    this.Storage = storage;
    this.Memory = memory;
    this.Ssd = ssd;
    }

    Informations() {
console.log("computer information:")
console.log(`Type:  ${this.Type}`);
console.log(`Processor: ${this.processor}`);
console.log(`Video: ${this.Video}`)
console.log(`Storage ${this.Storage}`);
console.log(`SSD: ${this.Ssd}`);

    }
}
const myComputer = new Computer("laptop", "ibuypower", "dedicated" , 1000, 16, true);
myComputer.Informations();