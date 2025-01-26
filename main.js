 const musicSection = document.getElementById('main-content');
const apiUrl = "https://api.example.com/artist";  
fetch(apiUrl)
  .then(response => response.json()) 
  .then(data => {
    const artistName = data.name;
    const artistGenres = data.genres.join(", "); 
    const artistImage = data.images[0].url;
    const artistPopularity = data.popularity;
    const artistFollowers = data.followers.total;

    document.getElementById('artist-name').textContent = artistName;
    document.getElementById('artist-genres').textContent = artistGenres;
    document.getElementById('artist-image').src = artistImage;
    document.getElementById('artist-popularity').textContent = `Popularity: ${artistPopularity}`;
    document.getElementById('artist-followers').textContent = `Followers: ${artistFollowers}`;
  })
  .catch(error => {
    console.error("Error fetching data: ", error);
  });

  artist.forEach(musicList => {
    const div = document.createElement('div');
    div.className = 'music list';
    div.innerHTML = `   <div class="artist-container">
        <img id="${artistImage}" src="" alt="Artist Image" class="artist-image">
        <h2 id="artist-name">${artistName}</h2>
        <p id="artist-genres">${artistGenres}</p>
        <p id="artist-popularity">Popularity; ${artistPopularity}</p>
        <p id="artist-followers">Followers: ${artistFollowers}</p>
    </div>`;
    musicSection.appendChild('div');
  });