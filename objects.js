var playlist = {
  chrisBrown: 'Loyal',
  rihanna: 'Work'
};

function updatePlaylist (playlist, key, val) {
  playlist.key = val;
  return playlist;
}

function removeFromPlaylist (playlist, key) {
  delete playlist.key;
  return obj;
}