const loggingMiddleware = (app) =>
    async (req, res, next) => {
        const ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || '').split(',')[0].trim();
        const headers = JSON.stringify(req.headers);
        const originalUrl = req.originalUrl;
        // Persist this info on DB
        const data = await app.controllers.logController.createEntity({
            action: originalUrl,
            header: headers,
            ip: ip
        });
        next();
    }

module.exports = loggingMiddleware;