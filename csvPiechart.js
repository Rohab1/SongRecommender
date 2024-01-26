document.addEventListener('DOMContentLoaded', () => {
  fetch('http://127.0.0.1:8080/Spotify-2000.csv')
    .then((response) => response.text())
    .then((csvData) => {
      const rows = csvData.split('\n').slice(1, 51);

      const tbody = document.getElementById('table-body');
      rows.forEach((row) => {
        const columns = row.split(',');

        if (columns.length >= 4) {
          const sanitizedColumns = columns.map((item) => item.replace(/"/g, ''));

          tbody.innerHTML += `
                <tr>
                  <td>${sanitizedColumns[0]}</td>
                  <td>${sanitizedColumns[1]}</td>
                  <td>${sanitizedColumns[2]}</td>
                  <td>${sanitizedColumns[3]}</td>
                </tr>
              `;
        }
      });

      const genres = rows.map((row) => row.split(',')[3]?.trim()).filter(Boolean); // Extract genres
      const genresData = {};
      genres.forEach((genre) => {
        genresData[genre] = (genresData[genre] || 0) + 1;
      });

      const ctx = document.getElementById('genreChart').getContext('2d');
      // eslint-disable-next-line no-new, no-undef
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: Object.keys(genresData),
          datasets: [{
            data: Object.values(genresData)
          }]
        },
        options: {
          elements: {
            arc: {
              borderWidth: 3.5
            }
          },
          radius: '75%'
        }
      });
    });
});
