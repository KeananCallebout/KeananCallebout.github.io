export default function MiniPost() {
  return (
    <li>
      <article>
        <header>
          <h3><a href="projects/1">Lorem ipsum fermentum ut nisl vitae</a></h3>
          <time className="published" dateTime="2015-10-20">October 20, 2015</time>
        </header>
        <a href="projects/1" className="image"><img src="images/pic08.jpg" alt="" /></a>
      </article>
    </li>
  );
}