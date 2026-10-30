// ⚠️ Cambia este número por el WhatsApp del dueño (código de Chile 56 + número, sin + ni espacios)
const WHATSAPP = "56996634125";
const MENSAJE = "Hola, quiero más información sobre los servicios de Car Wash Julio";
const WA_LINK = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAJE)}`;
const DIRECCION = "Domingo Santa María 4271, Renca";
const MAPA = `https://www.google.com/maps?q=${encodeURIComponent(DIRECCION + ", Chile")}&output=embed`;
const img = (n) => `${import.meta.env.BASE_URL}images/${n}`;

const SERVICIOS = [
  { titulo: "Lavado simple", texto: "Lavado exterior para dejar tu auto limpio.", color: "lav" },
  { titulo: "Lavado completo", texto: "Exterior e interior en un solo servicio.", color: "mint" },
  { titulo: "Pulverizado de interior", texto: "Pulverizado en la cabina para un interior limpio y fresco.", color: "sun" },
  { titulo: "Lavado de motor", texto: "Limpieza del motor, hecha con cuidado.", color: "blue" },
];

const FOTOS = [
  { src: "lavado-4.jpeg", alt: "Limpieza de vidrios por dentro" },
  { src: "lavado-5.jpeg", alt: "Auto recién lavado frente al local" },
  { src: "lavado-1.jpeg", alt: "Auto con llantas limpias y brillantes" },
  { src: "lavado-2.jpeg", alt: "Auto lavado estacionado en la vereda" },
];

function BotonInfo({ className = "" }) {
  return (
    <a className={`btn btn-fill ${className}`} href={WA_LINK} target="_blank" rel="noopener noreferrer">
      Obtén más información
    </a>
  );
}

export default function App() {
  const aviso = "Lavado simple · Lavado completo · Pulverizado de interior · Lavado de motor · ";
  return (
    <>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>{aviso.repeat(6)}</span>
          <span>{aviso.repeat(6)}</span>
        </div>
      </div>

      <header className="nav">
        <a className="logo" href="#inicio" aria-label="Car Wash Julio">CJ</a>
        <nav className="pills" aria-label="Secciones">
          <a className="pill" href="#servicios">Servicios</a>
          <a className="pill" href="#galeria">Galería</a>
          <a className="pill" href="#ubicacion">Ubicación</a>
        </nav>
        <BotonInfo />
      </header>

      <main>
        <section id="inicio" className="band hero">
          <svg className="ribbon" viewBox="0 0 1200 520" preserveAspectRatio="none" aria-hidden="true">
            <path d="M-60 400 C 180 80, 420 480, 660 260 S 1040 40, 1280 240" fill="none" stroke="#4da2ff" strokeWidth="96" strokeLinecap="round" />
          </svg>
          <span className="sticker s-ember">Interior</span>
          <span className="sticker s-sun">Motor</span>
          <span className="sticker s-violet">Completo</span>
          <h1 className="display">Car Wash<br />Julio</h1>
          <p className="tagline">Lavado de autos en Renca. Simple, completo, de interior y de motor.</p>
          <div className="actions">
            <BotonInfo />
            <a className="btn btn-ghost" href="#servicios">Ver servicios</a>
          </div>
        </section>

        <section id="servicios" className="band white">
          <h2 className="heading">Nuestros servicios</h2>
          <div className="cards">
            {SERVICIOS.map((s) => (
              <article key={s.titulo} className={`card ${s.color}`}>
                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>
              </article>
            ))}
          </div>
          <p className="note">¿Cuál te sirve? Escríbenos y te contamos valores y disponibilidad.</p>
          <BotonInfo />
        </section>

        <section id="galeria" className="band gray">
          <h2 className="heading">Así trabajamos</h2>
          <div className="gallery">
            {FOTOS.map((f) => (
              <figure key={f.src} className="photo">
                <img src={img(f.src)} alt={f.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>

        <section id="ubicacion" className="band lav">
          <h2 className="heading">Dónde estamos</h2>
          <p className="tagline">{DIRECCION}</p>
          <div className="map">
            <iframe title="Mapa de Car Wash Julio" src={MAPA} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="actions">
            <BotonInfo />
            <a className="btn btn-ghost" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(DIRECCION)}`} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Car Wash Julio</span>
        <span>{DIRECCION}</span>
      </footer>
    </>
  );
}
