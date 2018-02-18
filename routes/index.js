var moviesJSON = require(`../movies.json`)



exports.home = function (req, res) {

    var movies = moviesJSON.movies;


    res.render(`home`, {
        title: "Star Wars Movies",
        movies: movies
        // movies : [`First Movie`, `Second Movie`, `gtgtgtg`],
    })
}

exports.movie_single = function (req, res) {
    var episode_number = req.params.episode_number;
    res.send("This is the page for eposide" + episode_number)
}

// notFound
exports.notFound = function (req, res) {
    res.send("This is not the page that you are looking for")
}