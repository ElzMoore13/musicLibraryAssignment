function Playlist(name) {
    this.name = name;
    this.tracks = [];
    this.overallRating = null; //average rating of each track (int 1 - 5)
    this.totalDuration = 0; //total of all track lengths
}

//function to add a track to a playlists
Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track)
  this.overallRating = this.getNewRating();
  this.totalDuration += track.length;
}

//function to print a given playlist
Playlist.prototype.printPlaylist = function() {
  console.log(`Playlist: '${this.name}' is ${this.totalDuration} seconds long, and has a rating of ${this.overallRating} out of 5\nTracks:`);
  this.tracks.forEach((track) => {
    console.log(`\t${track.title}`);
  })
}

Playlist.prototype.getNewRating = function () {
  let newRating = 0;
  this.tracks.forEach((track) => {
    newRating += track.rating
  })
  return (newRating / this.tracks.length).toFixed(2);
}

module.exports = Playlist;
