const getPosts = function (req, res) {
    return res.json({
        status: 'success',
        message: 'Posts Route',
    });
};

module.exports = {getPosts};
