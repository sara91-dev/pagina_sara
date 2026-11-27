import './style.css'
import { createIcons, icons } from 'lucide'
import fondo_principal from './assets/fondo_principal.png'
import fondo_secundario from './assets/fondo_secundario.png'


document.querySelector('#app').innerHTML = `
<section id="portada">
  <div class="estrellas"></div>
  <div class="text-container">
    <img class="planeta" src="/src/assets/planeta.png" alt="Imagen de un planeta">
    <img class="meteorito" src="/src/assets/meteorito.png" alt="Imagen de un meteorito">
    <img class="estrellaimg" src="/src/assets/estrella.png" alt="Imagen de un estrella">
    <h1>SARA LIGIA BOGDAN</h1>
    <h2>Desarrolladora en constante aprendizaje</h2>
    <p>¡Hola! Soy una persona constante, curiosa y comprometida. </p>
    <p>Disfruto aprendiendo, resolviendo problemas y dando vida a ideas.</p>
    <p>A continuación te cuento más sobre mí. </p>
    <button class="boton">¡Descubre quién soy!</button>
  </div>
  <div class="flecha-container">
    <i data-lucide="arrow-down" class="flecha"></i>
  </div>
</section>

<section id="segunda-seccion">
  <div class="estrellas"></div>
  <div class="contenido-principal">
    <div class="recuadro-container">
      <img class="estrellaimg2" src="/src/assets/estrella.png" alt="Imagen de un estrella"> 
      <img class="estrellaimg3" src="/src/assets/estrella.png" alt="Imagen de un estrella">   
      <div class="botones">
        <button class="boton activo">Sobre mí</button>
        <button class="boton">Mi trayectoría</button>
        <button class="boton">Mis habilidades</button>
        <button class="boton">Contáctame</button>
      </div>
      <div class="contenedor-texto"></div>
    </div>
  </div>
</section>

`;



document.querySelector('#portada').style.backgroundImage = `url("${fondo_principal}")`
document.querySelector('#segunda-seccion').style.backgroundImage = `url("${fondo_secundario}")`

const portada = document.querySelector('#portada');

function cambiarFondoPortada() {
    if (window.matchMedia('(max-width: 1000px)').matches) {
        portada.style.backgroundImage = `url("${fondo_secundario}")`;
    } else {
        portada.style.backgroundImage = `url("${fondo_principal}")`;
    }
}

cambiarFondoPortada();

window.addEventListener('resize', cambiarFondoPortada);

createIcons({ icons })

const botonDescubre = document.querySelector('.text-container .boton');

botonDescubre.addEventListener('click', () => {
    document.querySelector('#segunda-seccion').scrollIntoView({
        behavior: 'smooth'
    });
});

let desplazando = false;
const cielos = document.querySelectorAll('.estrellas');

window.addEventListener('wheel', (event) => {

    if (event.target.closest('.contenedor-texto')) {
        return;
    }

    event.preventDefault();

    if (desplazando) return;

    const secciones = [...document.querySelectorAll(
        '#portada, #segunda-seccion'
    )];

    const actual = Math.round(window.scrollY / window.innerHeight);
    const direccion = event.deltaY > 0 ? 1 : -1;

    const siguiente = Math.max(
        0,
        Math.min(actual + direccion, secciones.length - 1)
    );

    if (siguiente === actual) return;

    desplazando = true;

    window.scrollTo({
        top: secciones[siguiente].offsetTop,
        behavior: 'smooth'
    });

    setTimeout(() => {
        desplazando = false;
    }, 1500);

}, { passive: false });

cielos.forEach(cielo => {

    for (let i = 0; i < 45; i++) {
        const estrella = document.createElement('span');

        estrella.classList.add('estrella');

        estrella.style.left = Math.random() * 100 + '%';
        estrella.style.top = Math.random() * 100 + '%';

        estrella.style.animationDelay = Math.random() * 5 + 's';
        estrella.style.animationDuration = (2 + Math.random() * 4) + 's';

        cielo.appendChild(estrella);
    }

});

const botones = document.querySelectorAll(
  '#segunda-seccion .botones .boton'
);

const contenedor = document.querySelector(
  '#segunda-seccion .contenedor-texto'
);

const contenidos = [
  {
    html: `

    <div class="sobre-mi">  
      <h2>Sobre mí</h2>

      <h3>Cómo me defino</h3>
      <p>
        Me considero una persona creativa y curiosa. En lo personal, me interesan muchos temas diferentes y me gusta mucho aprender. Siempre hay algo nuevo por descubrir, ya que hay muchísimas cosas que todavía desconozco. Además, normalmente tengo facilidad para comprender conceptos nuevos y adquirir conocimientos.
      </p>
      <p>
        Soy trabajadora y dedicada en lo que hago. Me gusta esforzarme, implicarme en mis tareas y conseguir buenos resultados.
      </p>
      <p>
        También soy bastante perfeccionista. Me gusta cuidar los detalles y dedicar tiempo a las cosas que hago, ya que suelo pensar que siempre hay algún aspecto que se puede mejorar. Me cuesta dar algo por terminado cuando siento que todavía podría quedar mejor.
      </p>
      <p>
        Por otra parte, soy una persona analítica, organizada y empática. Me gusta mantener una buena relación con las personas de mi entorno, cooperar, escuchar y ayudar siempre que puedo. También tengo facilidad para adaptarme a nuevas situaciones y desenvolverme en diferentes entornos.
      </p>
      <div class="separador"></div>
      <h3>Mis dificultades</h3>
      <p>
        Pero, como todo el mundo, también tengo mis dificultades y aspectos que mejorar.
      </p>
      <p>
        A veces me cuesta mantener la constancia con algunas cosas de mi vida personal y necesito encontrar ese impulso inicial o la motivación necesaria para ponerme en marcha.
      </p>
      <p>
        También suelo analizar bastante las situaciones y contemplar diferentes posibilidades antes de actuar. Me gusta organizarme, anticiparme y tener cierta planificación, por lo que los cambios inesperados o las situaciones que se salen de lo previsto pueden costarme un poco más.
      </p>
      <div class="separador"></div>
      <h3>Mi actitud en el trabajo</h3>
      <p>
        Quiero aclarar que esto me ocurre principalmente en mi vida personal, ya que mi actitud en el trabajo es bastante diferente. Cuando trabajo, soy consciente de que hay más personas involucradas y de que mi esfuerzo también puede afectar a los demás.
      </p>
      <p>
        Por eso, me gusta implicarme y dar lo mejor de mí. Tengo ganas de aprender, demostrar lo que puedo hacer, conseguir buenos resultados y, sobre todo, sentir que puedo aportar y ayudar de alguna manera.
      </p>
      <div class="separador"></div>
      <h3>Mis intereses</h3>
      <p>
        Fuera del mundo de la informática, tengo bastantes intereses y me gusta dedicar tiempo a cosas diferentes. Me gustan mucho las actividades creativas y las manualidades en general, como el crochet, el dibujo y cualquier cosa que implique crear algo con mis propias manos. Disfruto especialmente dibujando paisajes, animales y pequeños personajes.
      </p>
      <p>
        También me gusta mucho leer, especialmente sobre psicología y temas más profundos. Me llaman la atención las cosas relacionadas con la mente, el comportamiento humano y la forma en la que pensamos y sentimos. Me gusta descubrir cosas nuevas, reflexionar y darle vueltas a temas que quizá a primera vista parecen sencillos, pero que pueden tener mucho más detrás.
      </p>
      <p>
        Por otro lado, los videojuegos ocupan una parte importante de mis aficiones. Me gustan bastante los juegos con mucha acción y movimiento, como League of Legends, pero también disfruto de experiencias mucho más tranquilas, como Minecraft o Stardew Valley. También me pueden gustar juegos con historias y ambientaciones interesantes, como Fallout, Outlast o Skyrim.
      </p>
      <p>
        Y, sobre todo, no puedo olvidarme de los gatos. Me encantan y tengo uno que se llama Eren, así que también forman parte de mi día a día.
      </p>
      <p>
        En general, me gusta tener diferentes aficiones, probar cosas nuevas y alternar entre actividades que me permiten ser creativa, otras que me hacen pensar y otras con las que simplemente puedo desconectar y disfrutar.
      </p>
    </div>

    `
  },

  {
    html: `

    <div class="trayectoria">
      <h2>Mi trayectoria</h2>

      <h3>Cuidados auxiliares de enfermería</h3>
      <p>
        Hice CAI, pero rápidamente me di cuenta de que el ámbito de la sanidad no era algo que me llamara demasiado la atención. Eso no quiere decir que no haya cosas que me interesen de este sector. La neurología y la psicología, por ejemplo, me parecen muy interesantes. También otros campos relacionados con el conocimiento del cuerpo humano: saber qué ocurre en nuestro interior, cómo estamos hechos y cómo funcionamos nunca está de más.
      </p>
      <p>
        Pero, claro, el ambiente de los hospitales me deprime un poco, aunque sea consciente de que allí estamos ayudando a las personas. En mi caso, hice las prácticas en una residencia porque me venía bien por cercanía. Durante esa experiencia aprendí bastante, no solo a nivel profesional, sino también sobre la vida en general.
      </p>
      <div class="separador"></div>
      <h3>Redirigiendo mi camino</h3>
      <p>
        Luego estuve un año sin estudiar porque tenía dudas entre DAM y Diseño Multimedia. Al final, me apunté a Diseño Multimedia, pero cuando empecé a informarme un poco más sobre lo que era, no terminó de convencerme. Así que decidí no empezarlo y quise matricularme en DAM, pero para entonces ya era tarde.
      </p>
      <p>
        En ese momento tenía bastantes dudas porque tampoco me había informado demasiado bien sobre lo que ofrecía cada opción. Siempre me han gustado mucho los ordenadores y los videojuegos, así que DAM me llamaba la atención. Pero, por otro lado, también soy una persona creativa y eso hizo que me costara decidirme. Aunque tener creatividad también viene muy bien para DAM.
      </p>
      <div class="separador"></div>
      <h3>Mi primera experiencia laboral</h3>
      <p>
        Mientras tanto, también estuve trabajando durante una temporada corta en un bar del Pinell de Brai, el Bar Nou. Fueron pocos fines de semana, pero supuso mi primera experiencia laboral. Allí hacía un poco de todo: tomaba nota de los pedidos, los servía a los clientes, ayudaba en la cocina y también me encargaba de limpiar y recoger.
      </p>
      <p>
        Aunque fue una experiencia breve, me permitió tener un primer contacto con el mundo laboral y familiarizarme con tareas de atención al cliente, organización y trabajo en equipo.
      </p>
      <div class="separador"></div>
      <h3>Trabajando como niñera</h3>
      <p>
        También estuve trabajando por temporadas como niñera en el mismo pueblo, donde me encargaba de cuidar a cuatro niños. Al principio, mi horario era entre semana, aproximadamente de 21:00 a 00:00, aunque más adelante hubo algunos cambios y acabé haciendo un horario de 21:00 a 6:00.
      </p>
      <p>
        Era un trabajo que me gustaba, ya que disfrutaba pasando tiempo con los niños. Durante esas horas hacíamos diferentes actividades, como leer, ayudarles con alguna tarea del colegio o jugar un rato. Después, solíamos tomar un ColaCao y prepararnos para ir a dormir.
      </p>
      <p>
        Estuve trabajando allí durante distintas temporadas, con algunos periodos en los que dejé de ir y posteriormente volví. Finalmente, cuando empecé las clases y las prácticas de DAM, me resultó complicado compaginarlo todo y tuve que dejar el trabajo.
      </p>
      <div class="separador"></div>
      <h3>Empezando Desarrollo de Aplicaciones Multiplataforma</h3>
      <p>
        Al año siguiente ya lo tenía claro y me apunté a DAM. El primer año fue curioso, porque al principio todo me resultaba bastante nuevo: gente nueva, materias diferentes a las habituales y cosas que nunca había tocado hasta entonces. Era como entrar en otro mundo. Poco a poco te ibas acostumbrando y todo empezaba a resultar más familiar.
      </p>
      <div class="separador"></div>
      <h3>El segundo año de DAM</h3>
      <p>
        El segundo año de DAM me gustó muchísimo. Mientras que el primero fue algo más teórico, en el segundo empezamos a centrarnos más en la práctica y en ver cómo éramos capaces de hacer las cosas por nosotros mismos, siempre con la ayuda y orientación de los profesores. Me lo pasé muy bien y lo recuerdo como una experiencia muy positiva. Aprendí mucho y disfruté bastante del proceso. Además, tuve la suerte de coincidir con profesores y compañeros con los que conecté bien y a los que recuerdo con mucho cariño.
      </p>
      <p>
        De todas las cosas que hicimos, creo que lo que más me gustó fue la creación de páginas web y videojuegos. Crear aplicaciones también me gusta, pero quizá las otras dos me resultan algo más dinámicas. Aunque cada una tiene lo suyo y comparten bastantes cosas, así que tampoco sabría decidirme del todo.
      </p>
      <div class="separador"></div>
      <h3>Mis prácticas en el ayuntamiento</h3>
      <p>
        Durante mis prácticas participé en diferentes tareas de mantenimiento y mejora de los recursos digitales del ayuntamiento.
      </p>
      <div class="info_ayun">
        <p>
          - Actualización y mantenimiento de la página web municipal.
        </p>
        <p>
          - Detección y resolución de incidencias técnicas y problemas de funcionamiento.
        </p>
        <p>
          - Desarrollo de una página web informativa para la pantalla de la sala de espera, con información de interés para los ciudadanos y respuestas a consultas frecuentes.
        </p>
        <p>
          - Apoyo en diferentes tareas informáticas y necesidades tecnológicas del personal municipal.
        </p>
        <p>
          - Adaptación a distintas necesidades y resolución de problemas del día a día.
        </p>
      </div>
      <div class="separador"></div>
      <h3>Mi primer trabajo en Salaet</h3>
      <p>
        Luego empecé a trabajar y mi primer empleo fue como operaria en Salaet. Era un trabajo bastante manual que consistía en trabajar con una máquina: primero debía montar el papel de detrás, ajustar la posición de los diferentes papeles y, una vez preparada, ponerla en funcionamiento. Después tenía que recoger las cápsulas que iban saliendo, apilarlas y colocarlas en sus respectivas cajas.
      </p>
      <p>
        De esta experiencia puedo destacar varias cosas que aprendí. Por ejemplo, a consultar la hoja de trabajo y seguir sus indicaciones para preparar correctamente tanto la máquina como las cajas en las que se colocaban las cápsulas. Además, era un trabajo en el que se necesitaba coordinación y colaboración con los compañeros, ya que trabajábamos en equipo alrededor de la misma máquina. También aprendí a trabajar con rapidez, mantener la atención y asumir responsabilidades para que todo funcionara correctamente.
      </p>
      <div class="separador"></div>
      <h3>Mi experiencia en informática y programación</h3>
      <p>
        Más adelante, en la misma empresa, tuve la oportunidad de trabajar como ayudante de un informático y programador. Esto coincidió con la implantación de un nuevo programa de seguimiento de las máquinas, que permitía consultar información como las paradas, las órdenes de trabajo, los materiales y otros datos relacionados con la producción.
      </p>
      <p>
        Como mi jefe acudía presencialmente solo unas pocas veces al mes, me encargaba de buena parte del mantenimiento y seguimiento del sistema. Entre mis tareas estaba instalar y configurar el programa, preparar y montar terminales, vigilar su funcionamiento, detectar posibles errores y solucionarlos cuando aparecían. También colaboraba en la modificación del código para incorporar nuevas funcionalidades o adaptar el programa a nuevas necesidades.
      </p>
      <p>
        Además, daba soporte a los trabajadores cuando tenían algún problema o duda. A veces se trataba de errores del propio programa, otras veces de problemas con las impresoras o los equipos, y en ocasiones simplemente necesitaban ayuda para entender cómo funcionaba alguna parte del sistema. En esos casos, intentaba encontrar una solución o explicarles cómo realizar correctamente lo que necesitaban.
      </p>
      <p>
        Fue una experiencia bastante diferente a mis anteriores trabajos y, personalmente, una de las más relacionadas con mis intereses. Me permitió acercarme más al mundo de la informática desde un entorno laboral real, aprender sobre mantenimiento, resolución de problemas, programación y soporte técnico, y ganar autonomía a la hora de enfrentarme a situaciones nuevas.
      </p>
      
    </div>

    `
  },

  {
    html: `

      <div class="vista-carpetas">
          <h2>Mis habilidades</h2>

          <div class="carpetas-container">

            <div class="carpeta-item">
                <img class="carpeta-programacion" src="/src/assets/carpeta_prog.png" data-carpeta="programacion">
                <h4>PROGRAMACIÓN</h4>
            </div>
            <div class="carpeta-item">
                <img class="carpeta-intereses" src="/src/assets/carpeta_inter.png" data-carpeta="intereses">
                <h4>INTERESES</h4>
            </div>
            <div class="carpeta-item">
                <img class="carpeta-apuntes" src="/src/assets/carpeta_apun.png" data-carpeta="apuntes">
                <h4>APUNTES</h4>
            </div>

          </div>
      </div>

      <div class="vista-proyecto"></div>

  `
  },

  {
    html: `
    <div class="contacto">
      <h2>Contáctame</h2>
    
      <div class="redes-grid">

        <a class="red-social deshabilitada" role="link" aria-disabled="true" title="Instagram no está disponible">
          <div class="icono-red instagram">
            <img
              src="https://cdn.simpleicons.org/instagram/ffffff"
              alt=""
            >
          </div>
          <span>Instagram</span>
        </a>
        <a href="https://github.com/sara91-dev" class="red-social">
          <div class="icono-red github">
            <img
              src="https://cdn.simpleicons.org/github/ffffff"
              alt=""
            >
          </div>
          <span>GitHub</span>
        </a>
        <a class="red-social deshabilitada" role="link" aria-disabled="true" title="YouTube no está disponible">
          <div class="icono-red youtube">
            <img
              src="https://cdn.simpleicons.org/youtube/ffffff"
              alt=""
            >
          </div>
          <span>YouTube</span>
        </a>
        <a href="https://www.linkedin.com/in/sara-bogdan-611216451/" class="red-social" title="LinkedIn">
            <div class="icono-red linkedin">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                    alt="LinkedIn"
                >
            </div>
            <span>LinkedIn</span>
        </a>
        <a
          class="red-social deshabilitada"
          role="link"
          aria-disabled="true"
          title="X no está disponible"
        >
          <div class="icono-red x">
            <img
              src="https://cdn.simpleicons.org/x/ffffff"
              alt=""
            >
          </div>
          <span>X / Twitter</span>
        </a>
        <a href="https://github.com/sara21h" class="red-social">
          <div class="icono-red github">
            <img
              src="https://cdn.simpleicons.org/github/ffffff"
              alt=""
            >
          </div>
          <span>GitHub Anterior</span>
        </a>
      </div>

      <div class="apartado-correo">
        <p class="nombre">Correo:</p>
        <p class="valor">sarabog91@gmail.com</p>
      </div>

      <div class="apartado-tel">
        <p class="nombre">Número de teléfono:</p>
        <p class="valor">621 231 711</p>
      </div>

    </div>

      
    `
  }
];

const carpetasContenido = {
    programacion: `
        <div class="programacion-apartado">
          <p>Durante mi formación en Desarrollo de Aplicaciones Multiplataforma (DAM) he adquirido conocimientos en diferentes áreas del desarrollo de software, diseño y gestión de proyectos.</p>
          <div class="separador"></div>
          
          <h3>Sistemas informáticos</h3>
          <p>- Instalación y configuración de sistemas operativos (Windows y Ubuntu).</p>
          <p>- Administración remota y uso de comandos de terminal.</p>
          <p>- Máquinas virtuales.</p>
          <p>- Docker y contenedores.</p>
          <div class="separador"></div>
          
          <h3>Programación</h3>
          <p>- Desarrollo de aplicaciones con Java, JavaScript, PHP y Python.</p>
          <p>- Programación orientada a objetos (POO).</p>
          <p>- Depuración de código (debugging).</p>
          <p>- Pruebas unitarias.</p>
          <div class="separador"></div>
          
          <h3>Desarrollo web</h3>
          <p>- HTML5, CSS3 y JavaScript.</p>
          <p>- Diseño responsive y adaptación a dispositivos móviles.</p>
          <p>- Desarrollo web con Laravel y Tailwind CSS.</p>
          <p>- Consumo de APIs y servicios REST.</p>
          <p>- Arquitectura cliente-servidor.</p>
          <p>- Gestión de sesiones y autenticación.</p>
          <p>- Intercambio de información mediante JSON.</p>
          <p>- Tecnologías de marcado y gestión de información: XML, RSS, XPath, XQuery y XSL.</p>
          <div class="video-container">
              <video controls>
                  <source src="/src/assets/ej_web.webm" type="video/webm">
                  Tu navegador no admite la reproducción de vídeo.
              </video>
          </div>
          <div class="separador"></div>

          <h3>Bases de datos y acceso a datos</h3>
          <p>- Diseño y gestión de bases de datos relacionales y no relacionales.</p>
          <p>- PostgreSQL, MongoDB y SQL.</p>
          <p>- Creación, modificación y eliminación de tablas y gestión de usuarios.</p>
          <p>- Diseño de modelos relacionales.</p>
          <p>- Claves primarias y foráneas.</p>
          <p>- Consultas JOIN, subconsultas y procedimientos almacenados.</p>
          <p>- Operaciones CRUD (crear, leer, actualizar y eliminar datos).</p>
          <p>- Conexión entre aplicaciones y bases de datos.</p>
          <div class="separador"></div>

          <h3>Entornos de desarrollo</h3>
          <p>- IntelliJ IDEA.</p>
          <p>- Visual Studio Code.</p>
          <p>- PyCharm.</p>
          <p>- PhpStorm.</p>
          <p>- Qt Designer.</p>
          <div class="separador"></div>

          <h3>Herramientas y metodologías</h3>
          <p>- Git y GitHub: control de versiones, ramas, commits, merges y resolución de conflictos.</p>
          <p>- Markdown.</p>
          <p>- KanbanFlow.</p>
          <p>- Metodologías de organización y gestión de proyectos.</p>
          <div class="separador"></div>

          <h3>Diseño de interfaces y experiencia de usuario</h3>
          <p>- Diseño de interfaces (UI) y experiencia de usuario (UX).</p>
          <p>- Prototipado y diseño de interfaces con Figma.</p>
          <p>- Diseño gráfico y edición de contenido visual con Canva y Procreate.</p>
          <p>- Edición de vídeo con CapCut.</p>
          <p>- Modelado y representación de sistemas mediante diagramas UML, diagramas de flujo y diagramas entidad-relación (ER).</p>
          <div class="separador"></div>

          <h3>Desarrollo multimedia y móvil</h3>
          <p>- Desarrollo de aplicaciones Android.</p>
          <p>- Programación multimedia con Phaser.</p>
          <div class="separador"></div>

          <h3>Aplicaciones de escritorio e integración hardware</h3>
          <p>- Desarrollo de aplicaciones de escritorio con Python y PyQt5.</p>
          <p>- Comunicación con dispositivos mediante puertos serie (PySerial).</p>
          <p>- Generación y gestión de etiquetas mediante ZPL para impresoras Zebra.</p>
          <p>- Uso e integración de dispositivos Raspberry Pi.</p>
          <div class="separador"></div>

          <h3>Gestión de aplicaciones</h3>
          <p>- Funcionamiento, configuración y modificación de módulos de Odoo.</p>
          <div class="separador"></div>
        </div>
        
    `,

    intereses: `
        <h3>MIS INTERESES</h3>
        <p>Aquí se verán cosas relacionadas con mis intereses (crochet, dibujos, etc).</p>
    `,

    apuntes: `
        <h3>MIS APUNTES</h3>
        <p>Aquí se verán apuntes que he hecho sobre temas que me interesan (cursos, libros, etc).</p>
    `
};

botones.forEach((boton, indice) => {
  boton.addEventListener('click', () => {

    botones.forEach((b) => {
      b.classList.remove('activo');
    });

    boton.classList.add('activo');

    contenedor.innerHTML = contenidos[indice].html;
    createIcons({ icons });

    // Activar las carpetas cuando entramos en Mis proyectos
    if (indice === 2) {
        activarCarpetas();
    }

    if (indice === 0) {
      activarMostrarMas();
    }
  });
});



function activarCarpetas() {

    const carpetas = contenedor.querySelectorAll('.carpeta-item img[data-carpeta]');
    const vistaCarpetas = contenedor.querySelector('.vista-carpetas');
    const vistaProyecto = contenedor.querySelector('.vista-proyecto');

    carpetas.forEach(carpeta => {

        carpeta.addEventListener('click', () => {

            const tipo = carpeta.dataset.carpeta;

            vistaCarpetas.classList.add('desaparecer');

            setTimeout(() => {

                vistaCarpetas.style.display = 'none';

                vistaProyecto.innerHTML = `
                    ${carpetasContenido[tipo]}

                    <button class="volver-proyectos">
                        Volver atrás
                    </button>
                `;

                vistaProyecto.style.display = 'block';

                vistaProyecto.classList.remove('aparecer');
                void vistaProyecto.offsetWidth;
                vistaProyecto.classList.add('aparecer');

                const botonVolver = vistaProyecto.querySelector('.volver-proyectos');

                botonVolver.addEventListener('click', () => {

                    vistaProyecto.classList.remove('aparecer');
                    vistaProyecto.style.display = 'none';

                    vistaCarpetas.style.removeProperty('display');
                    vistaCarpetas.classList.remove('desaparecer');

                    contenedor.scrollTop = 0;

                });

            }, 300);

        });

    });
}


contenedor.innerHTML = contenidos[0].html;

function activarMostrarMas() {

    const botonMas = contenedor.querySelector('.mostrar-mas');
    const textoOculto = contenedor.querySelector('.texto-oculto');

    botonMas.addEventListener('click', () => {

      textoOculto.classList.toggle('visible');

      botonMas.classList.toggle('girada');

    });

    createIcons({ icons });
}

activarMostrarMas();
