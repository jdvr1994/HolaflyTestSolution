class Log {
  constructor(_logData) {
    this.id = parseInt(_logData.id, 10);
    this.action = _logData.action;
    this.header = _logData.header;
    this.ip = _logData.ip;
  }

  getAction() {
    return this.action;
  }

  getHeader() {
    return this.header;
  }

  getIp() {
    return this.ip;
  }
}

module.exports = Log;
