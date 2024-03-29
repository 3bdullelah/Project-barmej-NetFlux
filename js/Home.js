import mv1 from "../images/movie1.svg";
import mv2 from "../images/movie2.svg";
import mv3 from "../images/movie3.svg";
import mv4 from "../images/movie4.svg";
import { getCookie } from "./Helpers.js";
function fetchsuggestedMovies() {
  fetch("https://netflux-api.barmej.com/api/movies/latest", {
    headers: {
      Authorization: `Bearer ${getCookie("accessToken")}`
    }
  }).then(res => res.json()).then(movies =>(document.querySelector("#suggestedMovies").innerHTML = Response.movies.slice(0, 4).map(movie => `<li class="movie">
						<img src="https://image.tmdb.org/t/p/w300${movie.posterPath}" />
						<a href="#/details">
						<span class="movie-description">
						${movie.originalTitle}
						<span class="play-icon"><i class="fas fa-play"></i></span>
						</span>
						</a>
						</li>`).join(""))).catch(res => (document.location.hash = "#/login"));
}
const Home = function render() {
  fetchsuggestedMovies();
//   var suggestedMovies = [
//     {
//       originalTitle: "The Maze Runner",
//       img: `${mv1}`
//     },
//     {
//       originalTitle: "Breaking Bad",
//       img: `${mv2}`
//     },
//     {
//       originalTitle: "Peaky Blinders",
//       img: `${mv3}`
//     },
//     {
//       originalTitle: "The Good Doctor",
//       img: `${mv4}`
//     }
//   ];
  return `<section class="section hero featuredMovies has-bullets">
    <div class="container">
        <div class="slide featured">
            <h2 class="featured-title">Peaky Blinders</h2>
            <p class="featured-overview">المسلسل يدور حول البطل كالين مورفي في دور تومي شيلبي، قائد العصابة بالأضافة إلى
                سام نيل في دور المحقق المسؤول عن قمع العصابة. المسلسل مقتبس عن عائلة البيكي بلايندرز الحقيقية المسلسل عرض
                لاول مره علي بي بي سي 2 في 13 سبتمبر 2013 لمدة 6 حلقات</p>
            <p class="buttons">
                <a href="#/details" class="button">شاهد الفيلم</a>
                <a href="#/details" class="button is-secondary">إقرأ المزيد</a>
            </p>
        </div>
    </div>
</section>
<section class="section movies slider has-arrows is-suggested">
    <div class="container">
        <h3 class="section-title">إقتراحتنا لك</h3>
        <ul class="moviesGrid" id="suggestedMovies">
        </ul>
    </div>
</section>
<section class="section movies slider has-arrows is-trending">
    <div class="container">
        <h3 class="section-title">الأكثر مشاهدة</h3>
        <ul class="moviesGrid">
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        Breaking Bad
                    </span>
                </a>
            </li>
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        Peaky Blinders
                    </span>
                </a>
            </li>
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        The Good Doctor
                    </span>
                </a>
            </li>
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        The Maze Runner
                    </span>
                </a>
            </li>
        </ul>
    </div>
</section>
<section class="section movies slider has-arrows is-series">
    <div class="container">
        <h3 class="section-title">أحدث المسلسلات</h3>
        <ul class="moviesGrid">
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        The Maze Runner
                    </span>
                </a>
            </li>
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        Breaking Bad
                    </span>
                </a>
            </li>
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        The Maze Runner
                    </span>
                </a>
            </li>
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        Breaking Bad
                    </span>
                </a>
            </li>
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        Peaky Blinders
                    </span>
                </a>
            </li>
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        Peaky Blinders
                    </span>
                </a>
            </li>
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        The Good Doctor
                    </span>
                </a>
            </li>
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        The Good Doctor
                    </span>
                </a>
            </li>
        </ul>
    </div>
</section>
<section class="section movies slider has-arrows is-movies">
    <div class="container">
        <h3 class="section-title">أحدث الأفلام</h3>
        <ul class="moviesGrid">
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        Peaky Blinders
                    </span>
                </a>
            </li>
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        The Good Doctor
                    </span>
                </a>
            </li>
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        The Maze Runner
                    </span>
                </a>
            </li>
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        Breaking Bad
                    </span>
                </a>
            </li>
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        Breaking Bad
                    </span>
                </a>
            </li>
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        Peaky Blinders
                    </span>
                </a>
            </li>
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        The Good Doctor
                    </span>
                </a>
            </li>
            <li class="movie">
                <a href="#/details">
                    <img src="https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg" />
                    <span class="movie-description">
                        <span class="play-icon"><i class="fas fa-play"></i></span>
                        The Maze Runner
                    </span>
                </a>
            </li>
        </ul>
    </div>
</section>`;
};

export default Home;
