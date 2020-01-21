class NoLogError extends Error {
    constructor(msg) {
        super();
        this.name = 'NoLogError';
        this.message = msg;
    }
}

class NotExposeError extends Error {
    constructor(msg) {
        super();
        this.name = 'NotExposeError';
        this.message = msg;
    }
}

module.exports ={ NoLogError, NotExposeError };