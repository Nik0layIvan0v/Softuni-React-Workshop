function Header() {
  return (
    <header>
      <h1>
        <a className="home" href="index.html">
          GamesPlay
        </a>
      </h1>
      <nav>
        <a href="index.html">All games</a>
        <div id="user">
          <a href="index.html">Create Game</a>
          <a href="index.html">Logout</a>
        </div>
        <div id="guest">
          <a href="index.html">Login</a>
          <a href="index.html">Register</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
