const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

const pages = {
  diary: {
    title: "my little diary",
    emoji: "📔",
    html: () => `
      <div class="eyebrow">dear little heart</div>
      <h1>a page just for you ♡</h1>
      <p>There is no need to make every day extraordinary. Sometimes a small breath, a warm drink, or a moment of quiet is already a lovely beginning.</p>
      <div class="soft-card">
        <label for="diaryText"><b>write a thought for today</b></label>
        <textarea class="field" id="diaryText" rows="4" placeholder="today, my heart feels..."></textarea>
        <button class="action-button" data-action="save-diary">save this page ♡</button>
        <p id="diarySaved" class="eyebrow"></p>
      </div>
      <div class="soft-card">✧ reminder: your pace is allowed to be your own.</div>`
  },

  music: {
    title: "tiny radio",
    emoji: "🎧",
    html: () => `
      <div class="eyebrow">on air · station 01</div>
      <h1>sounds for a soft day</h1>
      <p>A tiny pretend radio for your desktop. Choose a mood and let the little player change its atmosphere.</p>
      <div class="soft-card">
        <div class="big-emoji" id="radioEmoji">☁️</div>
        <h2 id="radioMood">cloudy day mixtape</h2>
        <p id="radioLine">soft thoughts, slow afternoons, warm light.</p>
        <button class="action-button" data-action="radio-next">change the station ↻</button>
      </div>
      <div class="memory-list">
        <div class="memory-item"><span>🎹</span>piano raindrops</div>
        <div class="memory-item"><span>🫧</span>bubble pop</div>
        <div class="memory-item"><span>🌙</span>moon lullaby</div>
      </div>
      <p class="tiny-footer">this is a visual radio interface; it does not stream copyrighted songs.</p>`
  },

  garden: {
    title: "pocket garden",
    emoji: "🌱",
    html: () => `
      <div class="eyebrow">a tiny living corner</div>
      <h1>let something grow</h1>
      <p>Press the button to care for your little plant. Every click gives it a little more sunshine.</p>
      <div class="soft-card" style="text-align:center">
        <div class="big-emoji" id="plantEmoji">🌱</div>
        <h2 id="plantName">sprout the first</h2>
        <div class="progress"><span id="plantProgress"></span></div>
        <p id="plantCount">care points: 0 / 5</p>
        <button class="action-button" data-action="water-plant">give a little water 💧</button>
      </div>
      <div class="soft-card">🌼 garden note: little progress is still progress.</div>`
  },

  calendar: {
    title: "calendar of tiny things",
    emoji: "🗓️",
    html: () => `
      <div class="eyebrow">october · 2026</div>
      <h1>make room for little joys</h1>
      <p>Pick a small intention for the week. It can be as simple as stretching, drawing a flower, or telling someone thank you.</p>
      <div class="memory-list">
        <div class="memory-item"><span>🌷</span>make something</div>
        <div class="memory-item"><span>🍵</span>take a pause</div>
        <div class="memory-item"><span>💌</span>send kindness</div>
        <div class="memory-item"><span>🌤️</span>step outside</div>
      </div>
      <div class="soft-card">
        <b>today's tiny plan</b>
        <input class="field" id="planText" placeholder="one small thing I can do...">
        <button class="action-button" data-action="save-plan">keep my plan ♡</button>
        <p id="planSaved"></p>
      </div>`
  },

  memories: {
    title: "little memory box",
    emoji: "🧸",
    html: () => `
      <div class="eyebrow">collected sunshine</div>
      <h1>small things worth keeping</h1>
      <p>A little collection of moments that do not need to be grand to matter.</p>
      <div class="memory-list">
        <div class="memory-item"><span>🍓</span>a sweet snack</div>
        <div class="memory-item"><span>🎀</span>a favorite detail</div>
        <div class="memory-item"><span>🌦️</span>rain after sunlight</div>
        <div class="memory-item"><span>🐈</span>a silly little thing</div>
        <div class="memory-item"><span>🪷</span>a quiet moment</div>
        <div class="memory-item"><span>🫶</span>someone being kind</div>
      </div>
      <div class="soft-card">
        <input class="field" id="memoryText" placeholder="add a tiny memory...">
        <button class="action-button" data-action="add-memory">put it in the box +</button>
        <div id="memoryAdded"></div>
      </div>`
  },

  notes: {
    title: "sticky notes",
    emoji: "📝",
    html: () => `
      <div class="eyebrow">notes pinned with a flower</div>
      <h1>leave a note for yourself</h1>
      <p>Write a reminder, a little wish, or something you would like to remember later.</p>
      <div class="soft-card">
        <textarea class="field" id="noteText" rows="4" placeholder="dear me, please remember..."></textarea>
        <button class="action-button" data-action="save-note">pin this note ✿</button>
        <div id="noteBoard" class="memory-list"></div>
      </div>`
  },

  mail: {
    title: "postbox",
    emoji: "💌",
    html: () => `
      <div class="eyebrow">three tiny letters</div>
      <h1>letters for a gentle day</h1>
      <div class="soft-card">
        <b>✉ from the cloud</b>
        <p>You are allowed to begin again, even in the middle of the day.</p>
        <button class="action-button" data-action="open-letter">open another letter</button>
        <p id="letterText"></p>
      </div>
      <div class="soft-card">
        <b>♡ write a hello</b>
        <input class="field" id="helloText" placeholder="a little hello for the world">
        <button class="action-button" data-action="send-hello">send into the clouds</button>
        <p id="helloSent"></p>
      </div>`
  },

  games: {
    title: "tiny arcade",
    emoji: "🎮",
    html: () => `
      <div class="eyebrow">mini game room</div>
      <h1>find the matching stars!</h1>
      <p>Tap two tiles at a time and find all matching pairs. A tiny game, right here in its own window.</p>
      <div class="soft-card">
        <p id="gameStatus">pairs found: 0 / 4</p>
        <div class="game-board" id="gameBoard"></div>
        <button class="action-button" data-action="restart-game">shuffle again ↻</button>
      </div>
      <div class="soft-card">🏆 no pressure, just play for the joy of it.</div>`
  },

  mood: {
    title: "heart weather",
    emoji: "☁️",
    html: () => `
      <div class="eyebrow">a little check-in</div>
      <h1>what is your heart weather?</h1>
      <p>There is no wrong answer. Pick whichever feels closest, or choose the one you hope to feel.</p>
      <div class="memory-list mood-choices">
        <button class="choice-button" data-mood="cloudy">☁️ cloudy</button>
        <button class="choice-button" data-mood="sunny">☀️ sunny</button>
        <button class="choice-button" data-mood="rainy">🌧️ rainy</button>
        <button class="choice-button" data-mood="sparkly">✨ sparkly</button>
        <button class="choice-button" data-mood="breezy">🍃 breezy</button>
        <button class="choice-button" data-mood="sleepy">🌙 sleepy</button>
      </div>
      <div class="soft-card" id="moodResponse">your feeling can take up space here ♡</div>`
  },

  guestbook: {
    title: "guestbook",
    emoji: "💗",
    html: () => `
      <div class="eyebrow">a little place for hellos</div>
      <h1>leave a tiny footprint</h1>
      <p>Write a friendly message for this small corner of the internet.</p>
      <div class="soft-card">
        <input class="field" id="guestName" placeholder="your nickname">
        <textarea class="field" id="guestMessage" rows="3" placeholder="write a little hello..."></textarea>
        <button class="action-button" data-action="sign-guestbook">sign the guestbook ♡</button>
      </div>
      <div id="guestEntries" class="memory-list"></div>`
  }
};

let plantCare = 0;
let radioIndex = 0;
let letterIndex = 0;
let matched = 0;
let opened = [];
let lock = false;

const radioMoods = [
  ["☁️", "cloudy day mixtape", "soft thoughts, slow afternoons, warm light."],
  ["🫧", "bubblegum daydream", "let your thoughts float without rushing."],
  ["🌙", "moonlight station", "the world can wait while you take a breath."],
  ["🌷", "spring window", "something gentle can still be growing."]
];

const moodMessages = {
  cloudy: "Clouds are part of the sky, too. Be gentle with yourself.",
  sunny: "Keep a little of this warmth for later.",
  rainy: "You do not need to turn every feeling into sunshine.",
  sparkly: "Keep noticing the little things that make you feel alive.",
  breezy: "Take the day one easy breath at a time.",
  sleepy: "Rest is a valid thing to need. Slow down if you can."
};

const toast = (message) => {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 1900);
};

function updateClock() {
  const d = new Date();
  const time = d.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit"
  });

  $("#bigClock").textContent = time;
  $("#topClock").textContent = time;
  $("#dateLine").textContent = d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  }).toLowerCase();
}

updateClock();
setInterval(updateClock, 15000);

const calendar = $("#calendarGrid");

["s", "m", "t", "w", "t", "f", "s"].forEach(day => {
  const el = document.createElement("span");
  el.className = "day-name";
  el.textContent = day;
  calendar.append(el);
});

for (let i = 1; i <= 31; i++) {
  const el = document.createElement("span");
  el.textContent = i;

  if (i === 20) {
    el.className = "today";
  }

  calendar.append(el);
}

function openPage(key) {
  const page = pages[key];
  if (!page) return;

  closeWindows(false);

  const win = document.createElement("section");
  win.className = "app-window";
  win.dataset.page = key;

  win.innerHTML = `
    <div class="window-bar">
      <div class="window-dots">
        <button class="close-dot" data-action="close-window" aria-label="tutup"></button>
        <button class="min-dot" data-action="minimize-window" aria-label="minimalkan"></button>
        <button class="green-dot" data-action="new-window" aria-label="buka jendela baru"></button>
      </div>
      <div class="window-title">${page.emoji} ${page.title}</div>
    </div>
    <div class="window-content">
      ${page.html()}
      <div class="tiny-footer">made of little wishes & soft pixels · ♡</div>
    </div>
  `;

  $("#windowLayer").append(win);

  if (key === "games") setupGame(win);
  if (key === "guestbook") renderGuests(win);
}

function closeWindows(animate = true) {
  const windows = $$(".app-window");

  windows.forEach(win => {
    if (animate) {
      win.classList.add("closing");
      setTimeout(() => win.remove(), 220);
    } else {
      win.remove();
    }
  });
}

function setupGame(win) {
  const board = $("#gameBoard", win);
  if (!board) return;

  const icons = [
    "🌟", "🍓", "🐸", "🌷",
    "🌟", "🍓", "🐸", "🌷"
  ].sort(() => Math.random() - 0.5);

  board.innerHTML = "";
  matched = 0;
  opened = [];
  lock = false;

  $("#gameStatus", win).textContent = "pairs found: 0 / 4";

  icons.forEach((icon, index) => {
    const button = document.createElement("button");

    button.className = "game-cell";
    button.textContent = "？";
    button.dataset.icon = icon;
    button.dataset.index = index;

    button.addEventListener("click", () => flipTile(button, win));

    board.append(button);
  });
}

function flipTile(tile, win) {
  if (lock || tile.classList.contains("found") || opened.includes(tile)) {
    return;
  }

  tile.textContent = tile.dataset.icon;
  opened.push(tile);

  if (opened.length === 2) {
    if (opened[0].dataset.icon === opened[1].dataset.icon) {
      opened.forEach(item => item.classList.add("found"));
      opened = [];
      matched++;

      $("#gameStatus", win).textContent = `pairs found: ${matched} / 4`;

      if (matched === 4) {
        toast("you found every little star! ✨");
      }
    } else {
      lock = true;

      setTimeout(() => {
        opened.forEach(item => item.textContent = "？");
        opened = [];
        lock = false;
      }, 700);
    }
  }
}

function renderGuests(win) {
  const list = $("#guestEntries", win);

  list.innerHTML = `
    <div class="memory-item">
      <span>🌸</span>mimi: sending soft wishes ♡
    </div>
    <div class="memory-item">
      <span>🐣</span>pipi: hello, little world!
    </div>
  `;
}

document.addEventListener("click", event => {
  const tile = event.target.closest("[data-page]");

  if (tile && !event.target.closest("button")) {
    openPage(tile.dataset.page);
    return;
  }

  const button = event.target.closest("[data-action]");
  if (!button) return;

  const action = button.dataset.action;
  const win = button.closest(".app-window");

  switch (action) {
    case "close-window":
      closeWindows();
      break;

    case "minimize-window":
      closeWindows();
      toast("window tucked away ♡");
      break;

    case "new-window":
      if (win) openPage(win.dataset.page);
      break;

    case "save-diary": {
      const value = $("#diaryText", win).value.trim();

      $("#diarySaved", win).textContent = value
        ? "saved in this moment ♡"
        : "write a little thought first ♡";
      break;
    }

    case "radio-next":
      radioIndex = (radioIndex + 1) % radioMoods.length;

      $("#radioEmoji", win).textContent = radioMoods[radioIndex][0];
      $("#radioMood", win).textContent = radioMoods[radioIndex][1];
      $("#radioLine", win).textContent = radioMoods[radioIndex][2];
      break;

    case "water-plant":
      plantCare = Math.min(5, plantCare + 1);

      $("#plantProgress", win).style.width = (plantCare / 5 * 100) + "%";
      $("#plantCount", win).textContent = `care points: ${plantCare} / 5`;

      $("#plantEmoji", win).textContent = [
        "🌱", "🌿", "🪴", "🌷", "🌼", "🌸"
      ][plantCare];

      $("#plantName", win).textContent = plantCare === 5
        ? "a flower has bloomed!"
        : "sprout the " + ["first", "second", "third", "fourth", "fifth"][plantCare - 1];

      if (plantCare === 5) toast("your flower bloomed! 🌸");
      break;

    case "save-plan": {
      const value = $("#planText", win).value.trim();

      $("#planSaved", win).textContent = value
        ? "your tiny plan is tucked away ♡"
        : "write one small plan first.";
      break;
    }

    case "add-memory": {
      const value = $("#memoryText", win).value.trim();

      if (value) {
        const item = document.createElement("div");
        item.className = "memory-item";

        const icon = document.createElement("span");
        icon.textContent = "💖";

        item.append(icon, document.createTextNode(value));
        $("#memoryAdded", win).append(item);
        $("#memoryText", win).value = "";
      } else {
        toast("add a tiny memory first ♡");
      }
      break;
    }

    case "save-note": {
      const value = $("#noteText", win).value.trim();

      if (value) {
        const item = document.createElement("div");
        item.className = "memory-item";
        item.textContent = "📌 " + value;

        $("#noteBoard", win).prepend(item);
        $("#noteText", win).value = "";
      } else {
        toast("write a note first ✿");
      }
      break;
    }

    case "open-letter":
      letterIndex++;

      $("#letterText", win).textContent = [
        "A little kindness can travel further than you think.",
        "You are more than what you finish in a day.",
        "There is still room for a new beginning."
      ][letterIndex % 3];
      break;

    case "send-hello": {
      const value = $("#helloText", win).value.trim();

      $("#helloSent", win).textContent = value
        ? "your hello floated away into the clouds ☁️"
        : "write a hello first ♡";
      break;
    }

    case "restart-game":
      setupGame(win);
      break;

    case "sign-guestbook": {
      const name = $("#guestName", win).value.trim() || "little visitor";
      const message = $("#guestMessage", win).value.trim();

      if (!message) {
        toast("write a tiny hello first ♡");
        break;
      }

      const item = document.createElement("div");
      item.className = "memory-item";

      const icon = document.createElement("span");
      icon.textContent = "💌";

      const strong = document.createElement("b");
      strong.textContent = name + ": ";

      item.append(icon, strong, document.createTextNode(message));
      $("#guestEntries", win).prepend(item);

      $("#guestMessage", win).value = "";
      toast("your hello is on the page ♡");
      break;
    }
  }
});

document.addEventListener("click", event => {
  const mood = event.target.closest("[data-mood]");
  if (!mood) return;

  $$("[data-mood]").forEach(button => {
    button.classList.remove("selected");
  });

  mood.classList.add("selected");

  const win = mood.closest(".app-window");

  $("#moodResponse", win).textContent =
    moodMessages[mood.dataset.mood] || "your feeling belongs here ♡";
});

$("#playMusic").addEventListener("click", () => {
  const bars = $(".equalizer");
  const paused = bars.classList.toggle("paused");

  $("#playMusic").textContent = paused ? "▶" : "Ⅱ";

  $("#trackState").textContent = paused
    ? "paused for a moment"
    : "playing a pretend little tune ♡";

  toast(paused ? "radio paused ♡" : "radio mood activated ♫");
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeWindows();
});