(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const p=()=>`
    
    
    <div class="mr-section-header-layout mr-layout-flex">
      <a href="#" role="link" class="mr-section-header-title">
        <img src="./icons/logo.png" alt="logo" class="logo"/>
      </a>
      <label class="mr-hamburguer-icon" for="hamburger">&#9776;</label>
      <input type="checkbox" class="mr-hamburguer" id="hamburger">

      <!-- MENU -->
      <nav role="navigation" class="mr-section-nav">
        <ul class="mr-layout-flex mr-section-header-nav">
          <li><a href="#" id="homeLink" class="mr-section-header--nav-link">Home</a></li>
          <li> <a href="#" id="linkAbout" class="mr-section-header--nav-link">Sobre mi</a></li>
          <li><a href="#" id="linkProjects" class="mr-section-header--nav-link">Proyectos</a></li>
        </ul>
      </nav>
    </div>
    </div>
    
    
    
    
    
    `;const s=(e,a,i)=>`
    <a href="${i}" class="web-link">
        <button class="myBtn">
            <img src="${e}" alt="${a}">
        </button>
    </a>
`,u=()=>`
<div class="button-container">
${s("/icons/facebook.png","Facebook","https://es-es.facebook.com/")}
${s("/icons/github.png","Github","https://github.com/mroch897")}
${s("/icons/twitter.png","Twitter","https://twitter.com/Marcr97Marrch")}
${s("/icons/linkedin.png","LinkedIn","https://www.linkedin.com/in/marcroigchueca/")}
</div>

<p class="copy">Copyright ©2023 All rights reserved </p>


`;const r=e=>{e.innerHtml=""},d=()=>{const e=document.querySelector("main");r(e),e.innerHTML=`
    
    <section class="myHome">

    <div class="img-container">
    <img src="./images/profile.jpg" alt="image"/ >
    </div>

    <div class="description">
    <h1>Marc Roig Chueca</h1>
    <h2 class="role">IT Helpdesk y futuro FullStack Developer</h2>
    <q>Trust the process</q>
    <p class="live">Un entusiasta del IT Helpdesk en camino a convertirse en un versátil FullStack Developer. Mi mantra es "Confía en el proceso". Me sumerjo en retos tecnológicos con una actitud optimista, buscando siempre expandir mis horizontes. Mi habilidad para fusionar creatividad y habilidades técnicas me lleva a idear soluciones únicas. Encuentro mi pasión en el aprendizaje constante y en la exploración de nuevas tecnologías. Conéctate conmigo en Facebook, Github, Twitter y LinkedIn.</p>
    <div class="button-cv">
    <a href="/files/RoigChueca_CV.pdf" download class="download-button">Descargar CV</a>
    </div>

    
    </div>

   
    </section>
    
    
    
    
    
    
    `},l=(e,a)=>{const i=document.querySelector(e);i?i.addEventListener("click",()=>{a()}):console.error(`Elemento con ID '${e}' no encontrado en el DOM.`)};const m=[{title:"Proyecto 1: Página web Responsive",description:"En este proyecto crearás una landing page maquetada y responsive para una “supuesta tienda” de la que serás dueñ@. ",image:"/images/proyecto1.jpg",tech:["./icons/html5.png","./icons/css3.png"],github:"https://github.com/mroch897/Proyecto1",link:"https://runforlife.netlify.app/"},{title:"Proyecto 2: Tienda dinámica",description:"En este proyecto crearás una landing page maquetada y responsive para una “supuesta tienda” de la que serás dueñ@.",image:"/images/proyecto2.jpg",tech:["./icons/html5.png","./icons/css3.png"],github:"https://github.com/mroch897/Proyecto2",link:"https://polite-dragon-fdffca.netlify.app"},{title:"Proyecto 3: Portfolio",description:"En este proyecto crearás una landing page maquetada y responsive para una “supuesta tienda” de la que serás dueñ@.",image:"/images/proyecto1.jpg",tech:["./icons/html5.png","./icons/css3.png","./icons/js.png"],github:"https://github.com/mroch897/Proyecto3",link:""},{title:"Proyecto 4: App NASA",description:"En este proyecto crearás una landing page maquetada y responsive para una “supuesta tienda” de la que serás dueñ@.",image:"/images/cooming.jpg",tech:["./icons/html5.png","./icons/css3.png","./icons/js.png","./icons/react.png"],github:"#",link:"#"},{title:"Proyecto 5: App del tiempo",description:"En este proyecto crearás una landing page maquetada y responsive para una “supuesta tienda” de la que serás dueñ@.",image:"/images/cooming.jpg",tech:["./icons/js.png","./icons/react.png"],github:"#",link:"#"},{title:"Proyecto 6: Hub de Juegos",description:"En este proyecto crearás una landing page maquetada y responsive para una “supuesta tienda” de la que serás dueñ@.",image:"/images/cooming.jpg",tech:["./icons/js.png","./icons/react.png"],github:"#",link:"#"},{title:"Proyecto 7: API rest",description:"En este proyecto crearás una landing page maquetada y responsive para una “supuesta tienda” de la que serás dueñ@.",image:"/images/cooming.jpg",tech:["./icons/nodojs.png","./icons/react.png"],github:"#",link:"#"},{title:"Proyecto 8: Modelado relacional",description:"En este proyecto crearás una landing page maquetada y responsive para una “supuesta tienda” de la que serás dueñ@.",image:"/images/cooming.jpg",tech:["./icons/nodojs.png","./icons/react.png"],github:"",link:""},{title:"Proyecto 9: Servidor completo",description:"En este proyecto crearás una landing page maquetada y responsive para una “supuesta tienda” de la que serás dueñ@.",image:"/images/cooming.jpg",tech:["./icons/nodojs.png","./icons/react.png"],github:"#",link:"#"}];const g=e=>`

<div class="project-card">
<img src=${e.image} alt=${e.title}/>
<div class="headerCard">
<h2>${e.title}</h2>
<div>
<a href=${e.github}>
<img src="/icons/github.png" alt="GitHub Icon" />
</a>
<a href=${e.link}>
<img src="/icons/enlace.png" alt="Link icon" />
</a>
</div>
</div>

<div class="description">
<p>${e.description}</p>

<div class="tech">
${e.tech.map(a=>`<img src="${a}" alt="Tech Icon" />`).join("")}
</div>
</div>
</div>









`,h=()=>{const e=document.querySelector("main");r(e),e.innerHTML=`
    <section class="projects">
    <h2>Proyectos</h2>
    <div class="projects-container"></div>
    </section>
    `;const a=document.querySelector(".projects-container");for(const i of m){const t=document.createElement("figure");t.innerHTML=g(i),a.appendChild(t)}};const y=e=>`
<div class="experience-card">
<div class="header-card">
<div class="logo-card">
<h2>${e.name}</h2>
<a href=${e.web}>
<img src="${e.logo}" alt="${e.name}" />
</a>

</div>

<div class="description">
<p class="descriptiontext">${e.description}</p>
<div class="date">
<p class="datetext">${e.date}</p>
</div>
</div>

</div>
</div>


`,b=[{name:"Tienda Cables",logo:"/images/tiendaCables.jpg",date:"Octubre 2016 - Mayo 2017",description:"Atención al cliente, almacén, control de stock, reposición de productos...",web:"https://www.tiendacables.com/?gad=1&gclid=Cj0KCQjwuNemBhCBARIsADp74QT-6Bpy_qYlqHMBbO3LXpxwGI2Nc1zjkPbECiMml26RJmtCN5qSwoEaAmo7EALw_wcB"},{name:"Escuelas FEDAC",logo:"/images/fedac.jpg",date:"Octubre 2018-Mayo 2019",description:"Trabajando en la creación de una plataforma de comunicación entre profesores a través de Angular y Moodle.",web:"https://escoles.fedac.cat/"},{name:"FoxLive",logo:"/images/foxLive.jpg",date:"Septiembre 2019-Marzo 2020",description:"Encargado de atención al cliente, mejorar pagina web, hacer promoción a través de redes sociales, servicio técnico...",web:"https://www.repararmovilbarcelona.com/"},{name:"Global Transit World",logo:"/images/global.jpg",date:"Noviembre 2020- Mayo 2021",description:"Helpdesk informático en buffete de abogados con call center. Solución de todo tipo de problemas informáticos ( backups, servidores, problemas básicos...). Ayuda y participación en la creación de una CRM propia.",web:"https://www.einforma.com/informacion-empresa/global-transit-world"},{name:"Sosmatic",logo:"/images/sosmatic.jpg",date:"Junio 2021-Presente",description:"Helpdesk informático con funciones de: ayuda a diferentes empresas en la solución de problemas informáticos de nivel 1. Principalmente, centrado en ayuda informática en empresas como la UOC, Condis y Andbank. Uso de herramientas de ticketing propias de las empresas, y también de Jira. Depende del servicio realizo conexiones remotas a los equipos de los usuarios. Función de coordinador de más de 30 personas durante la época de exámenes virtuales en la UOC.",web:"https://www.sosmatic.com/"}],f=()=>{const e=document.querySelector("main");r(e),e.innerHTML=`

<section class="container">
<h2 class="title">Experiencia Laboral</h2>
<article class="facts">
<div class="experience-container"></div>
</article>
</section>
`;const a=document.querySelector(".experience-container");for(const i of b){const t=document.createElement("figure");t.classList.add("experienceFigure"),t.innerHTML=y(i),a.appendChild(t)}};document.querySelector("header").innerHTML=p();document.querySelector("footer").innerHTML=u();l("#homeLink",d);l("#linkAbout",f);l("#linkProjects",h);d();
