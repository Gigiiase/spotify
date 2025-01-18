// // Sample URL for fetching the data (replace with your actual API URL)
// const apiUrl = "https://api.example.com/artist";  // Replace with the actual API endpoint

// // Fetch data from the API
// fetch(apiUrl)
//   .then(response => response.json()) // Convert the response into JSON
//   .then(data => {
//     // Extracting relevant data from the API response
//     const artistName = data.name;
//     const artistGenres = data.genres.join(", "); // Joining genres into a string
//     const artistImage = data.images[0].url;
//     const artistPopularity = data.popularity;
//     const artistFollowers = data.followers.total;

//     // Use the extracted data to dynamically update your HTML
//     document.getElementById('artist-name').textContent = artistName;
//     document.getElementById('artist-genres').textContent = artistGenres;
//     document.getElementById('artist-image').src = artistImage;
//     document.getElementById('artist-popularity').textContent = `Popularity: ${artistPopularity}`;
//     document.getElementById('artist-followers').textContent = `Followers: ${artistFollowers}`;
//   })
//   .catch(error => {
//     console.error("Error fetching data: ", error);
//   });
