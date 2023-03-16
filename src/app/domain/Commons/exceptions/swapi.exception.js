/**
 * SwapiException is a class used to manage the database exceptions
 * it responses with a error message
 */
 class SwapiException extends Error{

    constructor(message = 'An unexpected error ocurred.', _err = {detail: 'undefined'}){
        super(message);
        this.err = _err;

        if(this.err.detail === 'Not found') {
            this.code = 404
        }else{
            this.code = 400
        }
    }
}

module.exports = SwapiException