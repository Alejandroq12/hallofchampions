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

  async function getScores(gameId) {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);
    const result = await response.json();
    return result.result;
  }

  function displayScores(scores) {
    const scoresList = document.querySelector('.leaderboard-scores__list');
    scoresList.innerHTML = '';

    scores.forEach((score) => {
      const listItem = document.createElement('li');
      listItem.classList.add('scores-li');
      listItem.textContent = `${score.user}: ${score.score}`;
      scoresList.appendChild(listItem);
    });
  }

  const refreshButton = document.querySelector('.leaderboard-refresh__btn');
  refreshButton.addEventListener('click', async () => {
    const scores = await getScores(gameId);
    displayScores(scores);
  });

  async function saveScore(gameId, userName, userScore) {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userName, score: userScore }),
    });

    const result = await response.json();
    return result.result;
  }
})();