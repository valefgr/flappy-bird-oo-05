const juego = {
    timerId: 0,
    gravedad: 2,
    // 1. Agrega skyHeight
    
  
    aleatorio: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  
    verificaColision: function () {
      if (bird.colision()) {
        juego.terminar();
      }
    },
  
    loop: function () {
      bird.efectoGravedad();
     
      bird.dibujar(); 
      // 11. Llama a obstaculos.dibujar();
      
      juego.verificaColision();
    },
  
    iniciar: function () {
      document.addEventListener("keyup", bird.mover);
      // 10. Llama a obstaculos.crear()
      
      juego.timerId = setInterval(juego.loop, 20);
      
    },
  
    terminar: function () {  
      clearInterval(juego.timerId);
      juego.mostrarGameOver();
      juego.pararEfectos();
    },
  
    mostrarGameOver: function () {
      const mensaje = document.querySelector(".message");
      mensaje.setAttribute("id", "game-over");
    },
  
    pararEfectos: function () {
      let ground = document.querySelector(".ground");
      ground.removeAttribute("id");
  
      bird.div.setAttribute("id", "fall");
    },
  };
  
  
  
  
  const bird = {
    div: document.querySelector(".bird"),
    bottom: juego.aleatorio(10, 570),
    left: 250,
    width: 60,
    height: 45,
  
    efectoGravedad: function () {
      bird.bottom -= juego.gravedad;
    },
  
    dibujar: function () {
      bird.div.style.bottom = bird.bottom + "px";
      bird.div.style.left = bird.left + "px";
    },
  
    mover: function () {
      bird.bottom += 40;
    },
  
    colision: function () {
        if (bird.bottom < 0) {
          return true;
        }
      },
  
   
  }
  
  
  const obstaculos = {
    // 2. Agrega obstacleContainer
    

    // 3. Agrega gap
    gap: 200,

    // 4. Agrega maxHeight
    maxHeight: 320,

    // 5. Agrega minHeight
    minHeight: 50,

    // 6. Agrega width
    width: 52,

    // 7. Agrega lista
    lista: [],
  
    // 8. Agrega crear()
    crear: function () {
     // Agregar código
    },
  

    // 9. Agrega dibujar()
    dibujar: function () {
       // Agregar codigo
    },
  };
  
  
  
  
  juego.iniciar();