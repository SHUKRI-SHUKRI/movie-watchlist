const watchlist = [
  {
    title: "Inception",
    genre: "Sci-Fi",
    runtime: 148,
    rating: 8.8,
    watched: true
  },
  {
    title: "The Office",
    genre: "Comedy",
    runtime: 22,
    rating: 9.0,
    watched: false
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    runtime: 169,
    rating: 8.7,
    watched: true
  },
  {
    title: "Coco",
    genre: "Animation",
    runtime: 105,
    rating: 8.4,
    watched: false
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    runtime: 152,
    rating: 9.0,
    watched: true
  },
  {
    title: "The Pursuit of Happyness",
    genre: "Drama",
    runtime: 117,
    rating: 8.0,
    watched: true
  },
  {
    title: "Free Solo",
    genre: "Documentary",
    runtime: 100,
    rating: 8.1,
    watched: false
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    genre: "Animation",
    runtime: 117,
    rating: 8.4,
    watched: true
  },
  {
    title: "Knives Out",
    genre: "Drama",
    runtime: 130,
    rating: 7.9,
    watched: false
  },
  {
    title: "The Grand Budapest Hotel",
    genre: "Comedy",
    runtime: 99,
    rating: 8.1,
    watched: true
  },
  {
    title: "Mad Max: Fury Road",
    genre: "Action",
    runtime: 120,
    rating: 8.1,
    watched: false
  },
  {
    title: "Arrival",
    genre: "Sci-Fi",
    runtime: 116,
    rating: 7.9,
    watched: true
  }
];
function displayMovies(movies) {
  const movieGrid = document.querySelector("#movieGrid");
  const resultCount = document.querySelector("#resultCount");

  if (!movieGrid || !resultCount) {
    console.error("Movie grid or result count element not found.");
    return;
  }

  movieGrid.innerHTML = "";

  resultCount.textContent = `${movies.length} titles found`;

  movies.forEach(function(movie) {
    const card = document.createElement("article");

    card.className =
      "rounded-2xl border border-slate-700 bg-slate-800 p-5";

    card.innerHTML = `
      <h3 class="text-xl font-bold text-white">
        ${movie.title}
      </h3>

      <p class="mt-2 text-slate-400">
        Genre: ${movie.genre}
      </p>

      <p class="mt-1 text-slate-400">
        Runtime: ${movie.runtime} minutes
      </p>

      <p class="mt-1 text-amber-400 font-bold">
        Rating: ${movie.rating}/10
      </p>

      <p class="mt-2 ${movie.watched ? "text-green-400" : "text-amber-400"}">
        ${movie.watched ? "Watched" : "Not watched"}
      </p>
    `;

    movieGrid.appendChild(card);
  });
}

// Display all four movies when the page loads
displayMovies(watchlist);