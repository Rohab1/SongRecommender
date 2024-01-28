/**
 * Plays a random music file from a specific year either 1960s or 1980
 *
 * @param {number} year The year of the music.
 * @param {number} numFiles The number of music files.
 */
// eslint-disable-next-line no-unused-vars
function playRandomMusic (year, numFiles) {
    const randomIndex = Math.floor(Math.random() * numFiles) + 1;

    const audioElement = document.getElementById(`${year}Audio`);
    audioElement.src = `${year}_song_${randomIndex}.mp3`;

    audioElement.load();
    audioElement.play();
}
