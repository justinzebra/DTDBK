// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEHtf0N6cbq6nvIz8sF88X4f4tcibNHVw",
  authDomain: "dtdgamedata.firebaseapp.com",
  projectId: "dtdgamedata",
  storageBucket: "dtdgamedata.appspot.com",
  messagingSenderId: "866630183676",
  appId: "1:866630183676:web:1f816353e1f19a95374579",
  measurementId: "G-R0S26RMWS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", async () => {
  const seasonSelect = document.getElementById('seasonSelect');
  const fetchMatchesButton = document.getElementById('fetchMatches');
  const matchesList = document.getElementById('matchesList');
  const matchDetails = document.getElementById('matchDetails');
  let selectedMatchElement = null;

  // Load seasons into the dropdown
  try {
    const seasonCollection = collection(db, 'seasons');
    const seasonSnapshot = await getDocs(seasonCollection);
    seasonSnapshot.forEach(doc => {
      const season = doc.data();
      const option = document.createElement('option');
      option.value = doc.id;
      option.textContent = season.year;
      seasonSelect.appendChild(option);
    });
  } catch (error) {
    console.error('Error fetching seasons:', error);
  }

  // When the fetch button is clicked
  fetchMatchesButton.addEventListener('click', async () => {
    const seasonId = seasonSelect.value;
    matchesList.innerHTML = '';
    matchDetails.innerHTML = '';

    if (seasonId) {
      try {
        const seasonDoc = doc(db, 'seasons', seasonId);
        const seasonSnapshot = await getDoc(seasonDoc);
        if (seasonSnapshot.exists()) {
          const seasonData = seasonSnapshot.data();
          const matches = seasonData.matches || [];
          renderMatches(matches);
        } else {
          console.log('No such season!');
        }
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    }
  });

  // Render matches list
  function renderMatches(matches) {
    matchesList.innerHTML = '';
    matches.forEach((match) => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.textContent = `日期: ${match.date}, 對手: ${match.opponent}`;
      listItem.addEventListener('click', () => {
        highlightSelectedMatch(listItem);
        displayMatchDetails(match);
      });
      matchesList.appendChild(listItem);
    });
  }

  // Highlight the selected match
  function highlightSelectedMatch(matchItem) {
    if (selectedMatchElement) {
      selectedMatchElement.classList.remove('active');
    }
    matchItem.classList.add('active');
    selectedMatchElement = matchItem;
  }

  // Display match details
  function displayMatchDetails(match) {
    matchDetails.innerHTML = `
      <h3>比賽詳細內容</h3>
      <table class="table">
        <thead>
          <tr>
            <th>姓名</th>
            <th>背號</th>
            <th>兩分不進球數</th>
            <th>兩分進球數</th>
            <th>兩分命中率</th>
            <th>三分不進球數</th>
            <th>三分進球數</th>
            <th>三分命中率</th>
            <th>罰球不進球數</th>
            <th>罰球進球數</th>
            <th>罰球命中率</th>
            <th>進攻籃板</th>
            <th>防守籃板</th>
            <th>助攻數</th>
            <th>抄截數</th>
            <th>阻攻數</th>
            <th>失誤數</th>
            <th>犯規數</th>
            <th>總得分</th>
          </tr>
        </thead>
        <tbody>
          ${match.players.map(player => `
            <tr>
              <td>${player.name}</td>
              <td>${player.number}</td>
              <td>${player.missed_two}</td>
              <td>${player.made_two}</td>
              <td>${player.two_point_percentage.toFixed(1)}%</td>
              <td>${player.missed_three}</td>
              <td>${player.made_three}</td>
              <td>${player.three_point_percentage.toFixed(1)}%</td>
              <td>${player.missed_free}</td>
              <td>${player.made_free}</td>
              <td>${player.free_throw_percentage.toFixed(1)}%</td>
              <td>${player.off_reb}</td>
              <td>${player.def_reb}</td>
              <td>${player.assists}</td>
              <td>${player.steals}</td>
              <td>${player.blocks}</td>
              <td>${player.turnovers}</td>
              <td>${player.fouls}</td>
              <td>${player.total_points}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
});
