export function initializeDragAndDrop() {
    const cube = document.querySelector('.cube');
    const handle = document.querySelector('.cube-handle'); // Poignée pour le drag-and-drop
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;
    let velocityX = 0;
    let velocityY = 0;
    const dampingFactor = 0.95; // Facteur d'amortissement
  
    handle.addEventListener('mousedown', (e) => {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      e.preventDefault();
    });
  
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      let deltaX = (e.clientX - lastX) / 5; // Augmenter la vitesse initiale
      let deltaY = (e.clientY - lastY) / 5; // Augmenter la vitesse initiale
      lastX = e.clientX;
      lastY = e.clientY;
  
      velocityX = deltaX;
      velocityY = deltaY;
  
      updatePosition();
    });
  
    document.addEventListener('mouseup', () => {
      isDragging = false;
      animate();
    });
  
    function updatePosition() {
      let translateX = cube.offsetLeft + velocityX;
      let translateY = cube.offsetTop + velocityY;
  
      cube.style.left = `${translateX}px`;
      cube.style.top = `${translateY}px`;
    }
  
    function animate() {
      if (!isDragging) {
        let appContainer = document.querySelector('.App');
        let appRect = appContainer.getBoundingClientRect();
  
        velocityX *= dampingFactor;
        velocityY *= dampingFactor;
  
        let newLeft = cube.offsetLeft + velocityX;
        let newTop = cube.offsetTop + velocityY;
  
        // Détection de collision avec les bords de '.App'
        if (newLeft < 0 || newLeft + cube.offsetWidth > appRect.width) {
          velocityX = -velocityX;
        }
        if (newTop < 0 || newTop + cube.offsetHeight > appRect.height) {
          velocityY = -velocityY;
        }
  
        updatePosition();
        if (Math.abs(velocityX) > 0.1 || Math.abs(velocityY) > 0.1) {
          requestAnimationFrame(animate);
        }
      }
    }
  }
  