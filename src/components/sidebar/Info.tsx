import me from '../../images/me.png';
import Footer from './Footer';

export interface InfoProps {
  title?: string
}

export default function Info({title}: InfoProps) {
  return (
    <section id="intro">
      <header>
        {title ? null : <img src={me} alt="Keanan_Callebout" height='128px'/>}
        <h2>{title ?? "Keanan Callebout"}</h2>
      </header>
      {title ? null : <Footer />}
    </section>
  );
}