$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid()


    // TODO 2 - Create Platforms
      createPlatform(200, 610, 40, 10, "green")
      createPlatform(300, 570, 300, 15, "orange")
      createPlatform(700, 350, 70, 200, "black")
      createPlatform(350, 450, 200, 10, "green" )
      createPlatform(450, 450, 100, 10, "gray")
      createPlatform(700, 650, 300, 15, "orange")
      createPlatform(800, 550, 80, 10, "green")
      createPlatform(1000, 450, 80, 10, "orange")
      createPlatform(1300, 220, 100,800, "gray")
      createPlatform(1150, 350, 150, 10, "black")
    // TODO 3 - Create Collectables
      createCollectable("diamond", 700, 590)
      createCollectable("steve", 1250, 220)
      createCollectable("grace", 720, 320)
      createCollectable("database", 1350, 200)
    // TODO 4 - Create Cannons
      createCannon("right", 650, 1500)
      createCannon("top", 1000, 1000)
      createCannon("left", 200, 2000)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
