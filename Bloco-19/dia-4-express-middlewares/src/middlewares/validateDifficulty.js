const validateDifficulty = (req, res, next) => {
    const { description: { difficulty } } = req.body;
    const arr = ['Fácil', 'Médio', 'Dificil'];
    if (arr.every((e) => e !== difficulty)) {
        return res.status(400)
            .json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' });
    }
    
    return next();
};

module.exports = validateDifficulty;