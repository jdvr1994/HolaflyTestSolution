/**
 * ApplicationException is a class used to manage the aplication exceptions
 * it responses with a error message
 */
class ApplicationException extends Error {
  constructor(message = 'An unexpected error ocurred.') {
    super(message);
  }
}

module.exports = ApplicationException;
