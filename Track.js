function Track(title, rating, length) {
    this.title = title;
    this.rating = rating; //int from 1 - 5
    this.length = length;
}


// function to print given track
Track.prototype.printTrack = function() {
  console.log(`${this.title} is ${this.length} seconds long, and has a rating of ${this.rating} out of 5`);
}

module.exports = Track;
