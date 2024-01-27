// eslint-disable-next-line no-unused-vars
function playRandomMusic (year, numFiles) {
                const randomIndex = Math.floor(Math.random() * numFiles) + 1;

                const audioElement = document.getElementById(`${year}Audio`);
                audioElement.src = `${year}_song_${randomIndex}.mp3`;

                audioElement.load();
                audioElement.play();
            }
