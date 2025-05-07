import React from 'react'; // Importamos React

// Vamos a importar el CSS específico de App si lo tuviera, por ahora usamos el global
// import './App.css';

function App() {
  return (
    // El contenido JSX debe estar envuelto en un único elemento padre
    <>
      {/* Icon Bar (Sidebar - hidden on small screens) */}
      <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        {/* Avatar image in top left corner */}
        {/* NOTA: La ruta de la imagen debe ser correcta. Si la pones en 'public', la ruta sería '/nombre-imagen.jpg' */}
        <img src="/w3images/avatar_smoke.jpg" alt="photo_profile" style={{ width: '100%' }} />
        <a href="#" className="w3-bar-item w3-button w3-padding-large w3-black">
          <i className="fa fa-user w3-xxlarge"></i>
          <p>INICIO</p>
        </a>

        {/* about section left */}
        <a
          href="#about"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-user w3-xxlarge"></i>
          <p>SOBRE MI</p>
        </a>

        {/* project section left */}
        <a
          href="#projects"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-eye w3-xxlarge"></i>
          <p>PROYECTOS</p>
        </a>

        {/* contact section left */}
        <a
          href="#contact"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-envelope w3-xxlarge"></i>
          <p>CONTACTO</p>
        </a>
      </nav>

      {/* Navbar on small screens (Hidden on medium and large screens) */}
      <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
        <div
          className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small"
        >
          <a
            href="#"
            className="w3-bar-item w3-button"
            style={{ width: '25% !important' }} // Estilo en línea con objeto JavaScript
          >INICIO</a>
          <a
            href="#about"
            className="w3-bar-item w3-button"
            style={{ width: '25% !important' }}
          >SOBRE MI</a>
          <a
            href="#projects"
            className="w3-bar-item w3-button"
            style={{ width: '25% !important' }}
          >PROYECTOS</a>
          <a
            href="#contact"
            className="w3-bar-item w3-button"
            style={{ width: '25% !important' }}
          >CONTACTO</a>
        </div>
      </div>

      {/* Page Content*/}
      <div className="w3-padding-large" id="main">
        {/* Header/Home */}
        <header
          className="w3-container w3-padding-32 w3-center w3-black"
          id="home"
        >
          <h1 className="w3-jumbo">
            <span className="w3-hide-small"></span> Adrian Peña
          </h1>
          <p>Ingeniero Agroindustrial y Analista de datos</p>
          {/* NOTA: La ruta de la imagen debe ser correcta */}
          <img
            src="/w3images/man_smoke.jpg"
            alt="boy"
            className="w3-image"
            style={{ width: '992px', height: '1108px' }} // Estilo en línea
          />
        </header>

        {/* About Section */}
        <div
          className="w3-content w3-justify w3-text-grey w3-padding-64"
          id="about"
        >
          <h2 className="w3-text-light-grey">Sobre Mi</h2>
          <hr style={{ width: '200px' }} className="w3-opacity" /> {/* Etiqueta auto-cerrada */}
          <p>
            Ingeniero Agroindustrial con tres años de experiencia en el
            sector público, apasionado por los datos y todo lo referente
            al analisis de datos, cuento con especialización en
            analitica y big data.
          </p>

          {/* Skill Section */}
          <h3 className="w3-padding-16 w3-text-light-grey">
            Mis habilidades
          </h3>
          <p className="w3-wide">Python</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: '28px', width: '50%' }} // Estilo en línea
            ></div>
          </div>
          <p className="w3-wide">Power BI</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: '28px', width: '85%' }} // Estilo en línea
            ></div>
          </div>
          <p className="w3-wide">SQL</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: '28px', width: '80%' }} // Estilo en línea
            ></div>
          </div>
          <br /> {/* Etiqueta auto-cerrada */}

          {/* Education Section */}
          <div
            className="w3-row w3-center w3-padding-16 w3-section w3-light-grey"
          >
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge"
                >Especialización en Analitica y Big Data</span><br /> {/* Etiqueta auto-cerrada */}
              IU Digital de Antioquia
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">Ingenieria Agroindustrial</span><br /> {/* Etiqueta auto-cerrada */}
              Universidad del Cauca
            </div>
          </div>

          {/* PDF Resume */}
          <button
            className="w3-button w3-light-grey w3-padding-large w3-section"
          >
            <i className="fa fa-download"></i> Descargar Hoja de Vida
          </button>

          {/* Experience */}
          <h3 className="w3-padding-24 w3-text-light-grey">Experiencia</h3>
          {/* NOTA: La ruta de la imagen debe ser correcta */}
          <img
            src="/w3images/bandmember.jpg"
            alt="Avatar"
            className="w3-left w3-circle w3-margin-right"
            style={{ width: '80px' }} // Estilo en línea
          />
          <p>
            <span className="w3-large w3-margin-right"
              >Apoyo profesional en Ingenieria Agroindustrial</span>
            Gobernación del Putumayo
          </p>
          <p>
            Secretaria de Productividad y Competitividad Departamental
          </p>
          <br /> {/* Etiqueta auto-cerrada */}

          {/* NOTA: La ruta de la imagen debe ser correcta */}
          <img
            src="/w3images/avatar_g2.jpg"
            alt="Avatar"
            className="w3-left w3-circle w3-margin-right"
            style={{ width: '80px' }} // Estilo en línea
          />
          <p>
            <span className="w3-large w3-margin-right"
              >Apoyo profesional en Ingenieria Agroindustrial</span>Alcaldia de Puerto Guzmán
          </p>
          <p>Secretaria de Desarrollo Agropecuario</p>
          {/* End About Section */}
        </div>

        {/* Projects section */}
        <div className="w3-padding-64 w3-content" id="projects">
          <h2 className="w3-text-light-grey">Proyectos</h2>
          <hr style={{ width: '200px' }} className="w3-opacity" /> {/* Etiqueta auto-cerrada */}

          {/* Grid for projects */}
          {/* NOTA: Esta estructura de grid necesita revisión en React para ser más dinámica */}
          <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
            {/* NOTA: Las rutas de las imágenes deben ser correctas */}
            <div className="w3-half"> {/* Asumiendo que quieres dos columnas, W3.CSS usa w3-half */}
               <img src="/w3images/wedding.jpg" style={{ width: '100%' }} alt="Project 1" /> {/* Añadido alt text */}
               <img src="/w3images/wedding.jpg" style={{ width: '100%' }} alt="Project 2" />
               <img src="/w3images/wedding.jpg" style={{ width: '100%' }} alt="Project 3" />
            </div>
             <div className="w3-half"> {/* Segunda columna */}
               <img src="/w3images/underwater.jpg" style={{ width: '100%' }} alt="Project 4" />
               <img src="/w3images/underwater.jpg" style={{ width: '100%' }} alt="Project 5" />
               <img src="/w3images/underwater.jpg" style={{ width: '100%' }} alt="Project 6" />
            </div>
          </div>
          {/* End Grid Projects */}
        </div>
        {/* End projects Section */}

        {/* Contact Section */}
        <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
          <h2 className="w3-text-light-grey">Contacto</h2>
          <hr style={{ width: '200px' }} className="w3-opacity" /> {/* Etiqueta auto-cerrada */}

          <div className="w3-section">
            <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>Mocoa, PU, Colombia</p>
            <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>Email: adriancamilopc@gmail.com</p>
          </div><br /> {/* Etiqueta auto-cerrada */}
          <p>Enviame un mensaje:</p>

          {/* Form Section */}
          {/* NOTA: Los formularios en React suelen manejarse de manera diferente (componentes controlados) */}
          <form action="/action_page.php" target="_blank">
            <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name" /></p> {/* Etiqueta auto-cerrada */}
            <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email" /></p> {/* Etiqueta auto-cerrada */}
            <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject" /></p> {/* Etiqueta auto-cerrada */}
            <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message" /></p> {/* Etiqueta auto-cerrada */}

            <p>
              <button className="w3-button w3-light-grey w3-padding-large" type="submit"><i className="fa fa-paper-plane"></i> Enviame un mensaje</button>
            </p>
          </form>
          {/* End Contact Section */}
        </div>

        {/* Footer Section */}
        <footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge">
          <i className="fa fa-facebook-official w3-hover-opacity"></i>
          <i className="fa fa-instagram w3-hover-opacity"></i>
          <i className="fa fa-twitter w3-hover-opacity"></i>
          <i className="fa fa-linkedin w3-hover-opacity"></i>
          <p className="w3-medium">Template by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" className="w3-hover-text-green">w3.css</a></p>
          {/* End Footer */}
        </footer>

        {/* End Page Content */}
      </div>
    </>
  );
}

export default App; 
// Exportamos el componente App