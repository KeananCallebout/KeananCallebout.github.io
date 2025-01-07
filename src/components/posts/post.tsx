export default function Post() {
  return (
    <article className="post">
      <header>
        <div className="title">
          <h2><a href="projects/1">Magna sed adipiscing</a></h2>
          <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
        </div>
        <div className="meta">
          <time className="published" dateTime="2015-11-01">November 1, 2015</time>
        </div>
      </header>
      <a href="projects/1" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
      <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
      <footer>
        <ul className="actions">
          <li><a href="projects/1" className="button large">Continue Reading</a></li>
        </ul>
      </footer>
    </article>
  );
}