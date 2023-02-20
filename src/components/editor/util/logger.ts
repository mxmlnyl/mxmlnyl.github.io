const Logger = `
function Logger() {
  this.queue = [];
  this.original = console;
  console = this;
  this.log = (args) => {
    try {
      this.queue.push(JSON.stringify(args));
    } catch(e) {
      console.log(e)
    }
    this.original.log(args);
  };
  this.warn = this.original.warn;

};
const newConsole = new Logger();
`;

export default Logger;
