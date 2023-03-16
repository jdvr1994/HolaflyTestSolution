/**
 * DateBaseException is a class used to manage the database exceptions
 * it responses with a error message
 */
 class DateBaseException extends Error{

    constructor(message = 'An unexpected error ocurred.', _err = {name: 'undefined'}){
        super(message);
        this.err = _err;
        this.code = 400
    }
}

module.exports = DateBaseException