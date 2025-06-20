/*
let songs = [];

function extractTrackId(url) {
    const match = url.match(/track\/([a-zA-Z0-9]+)/);
    return match ? match[1] : null;
}

async function addSong() {
    const input = document.getElementById("songInput");
    const url = input.value.trim();
    const trackId = extractTrackId(url);

    if (!trackId) {
        alert("Invalid Spotify track URL.");
        return;
    }

    try {
        const res = await fetch(`/api/track-info?trackId=${trackId}`);
        const song = await res.json();

        if (!song.name) {
            alert("Spotify track not found.");
            return;
        }

        if (songs.length >= 10) {
            alert("You can only submit 10 songs.");
            return;
        }

        songs.push(song);

        // Display song info in a nice card
        const list = document.getElementById("songsList");
        const card = document.createElement("div");
        card.className = "song-card";
        card.innerHTML = `
      <img src="${song.image}" alt="Album art" width="50">
      <div>
        <strong>${song.name}</strong><br>
        <em>${song.artists.join(', ')}</em>
      </div>
    `;
        list.appendChild(card);

        input.value = ''; // Clear input
    } catch (error) {
        console.error('Error fetching track info:', error);
        alert("Something went wrong while fetching the song.");
    }
}
*/

function goToPage() {
    const name = document.getElementById("name").value.trim();
    const mode = localStorage.getItem("roomMode");

    if (!name) {
        alert("Please enter your name.");
        return;
    }
    if (songs.length !== 10) {
        alert("Please submit exactly 10 songs.");
        return;
    }

    localStorage.setItem("username", name);
    localStorage.setItem("songs", JSON.stringify(songs));

    if (mode === 'create') {
        window.location.href = "host.html";
    } else if (mode === 'join') {
        window.location.href = "join.html";
    }
}
