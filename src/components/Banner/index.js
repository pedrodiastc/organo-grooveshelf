import './Banner.css';

function Banner() {
  return (
    <header className="banner">
      <img
        className="banner-bg"
        src="/images/banner.jpg"
        alt="Main banner of the site"
      />
      <div className="main-title">
        <h1>GrooveShelf</h1>
        <p>
          Your personal music album gallery. Add your favorite albums, organise
          them by genre, and showcase your music tast.
        </p>
      </div>
    </header>
  );
}

export default Banner;
