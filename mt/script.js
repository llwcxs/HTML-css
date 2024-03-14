$(document).ready(function () {
    const wheel = $('.wheel');
    const btnStart = $('#btn-start');
    const winnerMessage = $('#winnerMessage');
  
    let spinning = false;
  
    const segments = 8; // Número de segmentos na roleta
    const segmentAngle = 360 / segments; // Ângulo de cada segmento
  
    // Adicione mais prêmios conforme necessário
    const prizes = ['Prêmio 1', 'Prêmio 2', 'Prêmio 3', 'Prêmio 4', 'Prêmio 5', 'Prêmio 6', 'Prêmio 7', 'Prêmio 8'];
  
    // Adicione mais cores se desejar
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF5733', '#33FF57', '#5733FF', '#FF5733', '#33FF57'];
  
    btnStart.on('click', function () {
      if (!spinning) {
        spinning = true;
        winnerMessage.text('');
  
        const randomSpin = Math.floor(Math.random() * 360); // Gira entre 0 e 359 graus
        const spinDuration = 5000; // Tempo de rotação em milissegundos
  
        wheel.css({
          'transition': `transform ${spinDuration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`,
          'transform': `rotate(${randomSpin}deg)`
        });
  
        setTimeout(function () {
          const winningSegment = Math.floor(randomSpin / segmentAngle) % segments;
          displayWinner(prizes[winningSegment]);
          spinning = false;
        }, spinDuration);
      }
    });
  
    function displayWinner(prize) {
      winnerMessage.text(`Parabéns! Você ganhou: ${prize}`);
    }
  });
  