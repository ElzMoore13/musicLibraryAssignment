const Playlist = require('./Playlist.js');
const Track = require('./Track.js');

function Library(name, creator) {
      this.name = name;
      this.creator = creator;
      this.tracks = []; //an array of tracks
      this.playlists = []; //an array of playlists
}

//function to add track
Library.prototype.addTrack = function(track) {
  this.tracks.push(track);
}

//function to print all tracks
Library.prototype.printTracks = function() {
  console.log(`All ${this.tracks.length} tracks in this library:\n`);
  this.tracks.forEach((track) => {
    track.printTrack();
  })
}


//function to add playlist
Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
  //if any of the tracks in the playlist are not already in the Lirbary, add them
  playlist.tracks.forEach((track) => {
    if(!this.tracks.includes(track)){
      this.addTrack(track);
    }
  })
}


// function to print all playlists
Library.prototype.printPlaylists = function() {
  console.log(`All ${this.playlists.length} playlists in this library:\n`);
  this.playlists.forEach((playlist) => {
    playlist.printPlaylist();
    console.log('\n');
  })
}

module.exports = Library;
