import './styles.css';

const gameId = 'FIXED_GAME_ID3';

const API_BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const SCORES_PER_PAGE = 10;
let currentPage = 1;

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

const getScores = async (page, perPage) => {
  const response = await fetch(`${API_BASE_URL}games/${gameId}/scores/?page=${page}&per_page=${perPage}`);
  return response.json();
};

const refreshScores = async (page, clearList = true) => {
  if (clearList) {
    currentPage = 1;
  }

  const scoresData = await getScores(currentPage, SCORES_PER_PAGE);
  const scoresList = document.querySelector('.leaderboard-scores__list');

  if (clearList) {
    scoresList.innerHTML = '';
  }

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

const showSuccessMessage = () => {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('success-message');
  messageContainer.textContent = 'Score successfully added!';
  document.body.appendChild(messageContainer);

  setTimeout(() => {
    document.body.removeChild(messageContainer);
  }, 3000);
};

document
  .querySelector('.leaderboard-refresh__btn')
  .addEventListener('click', () => {
    refreshScores(currentPage, true);
  });

document
  .querySelector('.leaderboard-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const score = event.target.score.value;

    const response = await createNewScore(name, score);
    if (response.result === 'Leaderboard score created correctly.') {
      showSuccessMessage();
    }
    event.target.reset();
  });

const isNearBottom = () => {
  const { scrollHeight } = document.documentElement;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const { clientHeight } = document.documentElement;

  return scrollTop + clientHeight >= scrollHeight - 50;
};

window.addEventListener('scroll', () => {
  if (isNearBottom()) {
    currentPage += 1;
    refreshScores(currentPage, false);
  }
});
refreshScores(currentPage);
