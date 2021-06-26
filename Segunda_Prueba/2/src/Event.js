export default class Event{
  constructor(second, type, message) {
    this.second = second;
    this.type = type;
    this.message = message;
  }

  logMessage() {
    setTimeout(() => {
      console.log(`> At second ${this.second}`, {type: this.type, message: this.message});
    }, this.second * 1000)
  }
};