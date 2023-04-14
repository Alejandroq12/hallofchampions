import './styles.css';

const gameId = 'FIXED_GAME_ID';

const API_BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const createNewScore = async (name, score) => {
  const response = await fetch(`${API_BASE_URL}games/${gameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score,
    }),
  });
  return response.json();
};

const getScores = async () => {
  const response = await fetch(`${API_BASE_URL}games/${gameId}/scores/`);
  return response.json();
};

const refreshScores = async () => {
  const scoresData = await getScores();
  const scoresList = document.querySelector('.leaderboard-scores__list');
  scoresList.innerHTML = '';

  // Sort the scores in descending order
  const sortedScores = scoresData.result.sort((a, b) => b.score - a.score);

  // Iterate over the sorted scores and display them
  sortedScores.forEach((scoreItem) => {
    const listItem = document.createElement('li');
    listItem.classList.add('scores-li');
    listItem.textContent = `${scoreItem.user}: ${scoreItem.score}`;
    scoresList.appendChild(listItem);
  });
};

document
  .querySelector('.leaderboard-refresh__btn')
  .addEventListener('click', () => {
    refreshScores();
  });

document
  .querySelector('.leaderboard-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const score = event.target.score.value;

    await createNewScore(name, score);
    event.target.reset();
  // refreshScores(); if this lines is uncommented,
  // the scores will be refreshed after each submission
  });
