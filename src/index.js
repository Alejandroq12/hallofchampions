import './styles.css';

async function createNewGame(gameName) {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: gameName }),
  });

  const result = await response.json();
  return result;
}

(async () => {
  const gameName = 'My Cool New Game';
  const game = await createNewGame(gameName);
  const gameId = game.result.split(': ')[1];
  console.log('Game ID:', gameId);
})();

async function getScores(gameId) {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);
  const result = await response.json();
  return result.result;
}