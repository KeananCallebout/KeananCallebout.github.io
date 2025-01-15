export interface InfoProps {
  title?: string
}

export default function Info({title}: InfoProps) {
  return (
    <section id="intro">
      <header>
        <h2>{title ?? "Keanan Callebout"}</h2>
      </header>
    </section>
  );
}