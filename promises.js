function downloadMovie() {
  return new Promise((resolve, reject) => {
    console.log("Movie Downloading....");

    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Coco movie downloaded");
      } else {
        reject("Movie download failed. Try next time");
      }
    }, 3000);
  });
}

downloadMovie().then((movie) => {
    console.log(`This is the movie: ${movie} `)
}).catch((error) => {
    console.log(`Error: ${error}`)
})