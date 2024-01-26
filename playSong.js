// eslint-disable-next-line no-unused-vars
function playRandomMusic (genre, numFiles) {
  const randomIndex = Math.floor(Math.random() * numFiles) + 1;

  const audioElement = document.getElementById(`${genre}Audio`);
  audioElement.src = `${genre}_song_${randomIndex}.mp3`;

  audioElement.load();
  audioElement.play();
}
