const Library = require('./Library.js')
const Playlist = require('./Playlist.js')
const Track = require('./Track.js')
//Library requires a name and a creator
// Track requires a title(string), rating(int), and length in seconds (int)
// Playlist requires a name


//create an instance of library
let myLibrary = new Library('myLibrary', 'Me');


//create some track instances
let track1 = new Track('Mama Mia', 5, 180);
let track2 = new Track('Dancing Queen', 5,  200);
let track3 = new Track('Super Trooper', 4, 165);
let track4 = new Track('Money Money Money', 4, 140);
let track5 = new Track('Waterloo', 5, 183);
let track6 = new Track('Bad Song', 1, 40);

//add all tracks to Library
myLibrary.addTrack(track1);
myLibrary.addTrack(track2);
myLibrary.addTrack(track3);
myLibrary.addTrack(track4);
myLibrary.addTrack(track5);

myLibrary.printTracks();


console.log('\n\n')


//create some playlist instances
let playlist1 = new Playlist('ABBA - One');
let playlist2 = new Playlist('ABBA - Two');
let playlist3 = new Playlist('ABBA - Three');
let playlist4 = new Playlist('ABBA - Four');

//add one track to playlist1
playlist1.addTrack(track1);

// add two tracks to playlist2
playlist2.addTrack(track1);
playlist2.addTrack(track2);

// add two tracks to playlist3
playlist3.addTrack(track1);
playlist3.addTrack(track2);
playlist3.addTrack(track6);

//add playlists to Library
myLibrary.addPlaylist(playlist1);
myLibrary.addPlaylist(playlist2);
myLibrary.addPlaylist(playlist3);

//print all playlists
myLibrary.printPlaylists();

console.log('\n');

//added a playlist that contains a song not already in the library (track6) - see if it adds it automatically
myLibrary.printTracks();

console.log('\n');
