function downloadMovie(callback){
    console.log("Downloading movie...");

    setTimeout(() => {
        const movie = "Coco is the movie downloaded";
        callback(movie);
    }, 3000);
}

function displayMovie(movie){
    console.log(`The movie downloaded is: ${movie}`)
}

downloadMovie(displayMovie);