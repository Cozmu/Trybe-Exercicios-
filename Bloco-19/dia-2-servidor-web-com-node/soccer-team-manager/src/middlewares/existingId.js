const teams = require('../app');

const existingId = (req, res, next) => {
    const requiredID = +req.params.id;
    if (teams.some((t) => t.id === requiredID)) {
      next();
    } else {
      res.sendStatus(404).json({ message: 'Time não encontrado' });
    }
};

module.exports = existingId;