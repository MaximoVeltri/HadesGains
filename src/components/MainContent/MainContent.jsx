import './MainContent.css'

function MainContent() {
  return (
    <main className="main-content">
      <section id="inicio" className="section">
        <h2>Bienvenidos</h2>
        <p>Esta es una página simple creada con React y Vite.</p>
      </section>

      <section id="servicios" className="section">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Servicio 1</h3>
            <p>Descripción del primer servicio</p>
          </div>
          <div className="service-card">
            <h3>Servicio 2</h3>
            <p>Descripción del segundo servicio</p>
          </div>
          <div className="service-card">
            <h3>Servicio 3</h3>
            <p>Descripción del tercer servicio</p>
          </div>
        </div>
      </section>

      <section id="contacto" className="section">
        <h2>Contacto</h2>
        <form className="contact-form">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Mensaje"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  )
}

export default MainContent