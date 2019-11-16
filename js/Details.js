const details = function render() {
  return `<div class="wrapper">
      <div class="container">
        <header class="section" role="navigation">
          <div class="container">
            <button class="navbar-burger">
              <img src="images/burger.png" />
            </button>
            <a class="navbar-item navbar-logo" href="#/"
              ><img src="images/logo.svg" width="80"
            /></a>
            <ul class="navbar-menu">
              <li><a class="navbar-item active" href="#/">الرئيسية</a></li>
              <li><a class="navbar-item" href="#/movies">أفلام</a></li>
              <li><a class="navbar-item" href="#/shows">مسلسلات</a></li>
            </ul>
            <div class="navbar-search">
              <input
                class="searchInput"
                type="text"
                name="search"
                placeholder="إبحث عن فيلم أو مسلسل..."
              />
            </div>
          </div>
        </header>
        <section class="section hero detailsPage">
          <div class="container">
            <div class="movieDetails slide">
              <div class="movieVideo">
                <iframe
                  width="1063"
                  height="598"
                  src="https://www.youtube.com/embed/5Hc8tB9uhho?modestbranding=1&rel=0"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="movieDescription">
                <h2 class="featured-title">The Dawn Wall</h2>
                <p class="featured-overview">
                  المسلسل يدور حول البطل كالين مورفي في دور تومي شيلبي، قائد
                  العصابة بالأضافة إلى سام نيل في دور المحقق المسؤول عن قمع
                  العصابة. المسلسل مقتبس عن عائلة البيكي بلايندرز الحقيقية
                  المسلسل عرض لاول مره علي بي بي سي 2 في 13 سبتمبر 2013 لمدة 6
                  حلقات
                </p>
                <p class="movieGeneralData">2019 | ساعة و 40 دقيقية | وثائقي</p>
              </div>
            </div>
          </div>
        </section>
        <section class="section movieMetaData">
          <div class="container">
            <h3 class="section-title">التفاصيل</h3>
            <ul>
              <li>
                <span class="title">الجنس الأدبي</span>
                <span class="values"
                  >وثائقي | مغامرة | السيرة الذاتية | رياضة</span
                >
              </li>
              <li>
                <span class="title">النجوم</span>
                <span class="values"
                  >وثائقي | مغامرة | السيرة الذاتية | رياضة</span
                >
              </li>
              <li>
                <span class="title">الإدارة</span>
                <span class="values"
                  >وثائقي | مغامرة | السيرة الذاتية | رياضة</span
                >
              </li>
            </ul>
            <div class="plot">
              <h3 class="section-title">القصة</h3>
              <p>
                المسلسل يدور حول البطل كالين مورفي في دور تومي شيلبي، قائد
                العصابة بالأضافة إلى سام نيل في دور المحقق المسؤول عن قمع
                العصابة. المسلسل مقتبس عن عائلة البيكي بلايندرز الحقيقية المسلسل
                عرض لاول مره علي بي بي سي 2 في 13 سبتمبر 2013 لمدة 6 حلقات
              </p>
            </div>
          </div>
        </section>
        <footer class="section">
          <div class="container">
            <section class="footer-nav" role="navigation">
              <a class="navbar-logo grayscale" href="#/"
                ><img src="images/logo.svg" width="80"
              /></a>
              <div class="navbar-menu">
                <ul class="navbar-menu">
                  <li><a class="navbar-item" href="#">الرئيسية</a></li>
                  <li><a class="navbar-item" href="#">أفلام</a></li>
                  <li><a class="navbar-item" href="#">مسلسلات</a></li>
                </ul>
              </div>
              <a class="navbar-item logout" href="#/logout">تسجيل الخروج</a>
            </section>
          </div>
        </footer>
      </div>
    </div>`;
};
export default details;
