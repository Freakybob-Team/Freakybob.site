const songs = [
    "https://ia600902.us.archive.org/6/items/tvtunes_8269/Burl%20Ives%20-%20A%20Holly%20Jolly%20Christmas.mp3", //1 
    "https://ia800304.us.archive.org/7/items/300-christmas-songs_202305/Sleigh%20Ride%20-%20ANDRE%20RIEU.mp3", //2
    "https://ia800304.us.archive.org/7/items/300-christmas-songs_202305/Happy%20Xmas%20%28War%20Is%20Over%29%20-%20JOHN%20LENNON.mp3", //3
    "https://ia800304.us.archive.org/7/items/300-christmas-songs_202305/Rockin%27%20Around%20The%20Christmas%20Tree%20-%20BRENDA%20LEE.mp3", //4
    "https://ia600304.us.archive.org/7/items/300-christmas-songs_202305/Run%20Rudolph%20Run%20-%20CHUCK%20BERRY.mp3", //5
    "https://ia601608.us.archive.org/14/items/3HourMedleyOfChristmasSongs_201712/White_Christmas_-_Michael_Buble.mp3", //6
    "https://ia800304.us.archive.org/7/items/300-christmas-songs_202305/Santa%20Baby%20-%20EARTHA%20KITT.mp3", //7
    "https://ia804602.us.archive.org/4/items/wham-last-christmas-extended-version-of-original-45-mix-m-128s-re-creation/Wham%21%20-%20Last%20Christmas%20%28Extended%20Version%20of%20Original%2045%20Mix%29%20%5BM128%27s%20Re-creation%5D.mp3", //8
    "https://ia600304.us.archive.org/7/items/300-christmas-songs_202305/Jingle%20Bell%20Rock%20-%20HALL%20%26%20OATES.mp3", //9
    "https://ia803200.us.archive.org/24/items/TheTwelveDaysOfChristmas/Santa%20Claus%20Is%20Coming%20To%20Town.mp3", //10
    "https://ia801509.us.archive.org/29/items/ka-gene-autry/78%20country%20record%20cabinet/G/Gene%20Autry/Gene%20Autry%20-%20Here%20Comes%20Santa%20Claus%20%28C%29.mp3", //11
    "https://ia600709.us.archive.org/19/items/ChristmasMichaelBuble/Have%20Yourself%20A%20Merry%20Little%20Christmas.mp3", //12
    "https://ia903101.us.archive.org/0/items/mariahcareyalliwantforchristmasisyou_201912/Mariah%20Carey%20-%20All%20I%20Want%20For%20Christmas%20Is%20You.mp3", //13
    "https://ia601208.us.archive.org/20/items/ChristmasSongsFelizNavidad1/Christmas%20Songs%20-%20Feliz%20Navidad%281%29.mp3", //14
    "https://ia600706.us.archive.org/5/items/ChristmasSong2018/Andy%20Williams%20-%20It%27s%20The%20Most%20Wonderful%20Time%20Of%20The%20Year.mp3", //15
    "https://ia800706.us.archive.org/5/items/ChristmasSong2018/Michael%20Buble%20-%20It%27s%20Beginning%20To%20Look%20A%20Lot%20Like%20Christmas.mp3", //16
    "https://ia801609.us.archive.org/22/items/FrostyTheSnowman_694/GeneAutrychristmas-FrostyTheSnowman.mp3", //17
    "https://ia803200.us.archive.org/24/items/TheTwelveDaysOfChristmas/Mr%20Grinch%20Song.mp3", //18
    "https://ia801509.us.archive.org/29/items/ka-gene-autry/78%20country%20record%20cabinet/G/Gene%20Autry/Gene%20Autry%20-%20Rudolph%20The%20Red-Nosed%20Reindeer%20%28C%29.mp3",  //19
    "https://ia904607.us.archive.org/3/items/rockin-around-the-christmas-tree/Elton%20John%20-%20Step%20Into%20Christmas.mp3", //20
    "https://ia804607.us.archive.org/3/items/rockin-around-the-christmas-tree/Brian%20Setzer%20Orchestra%20-%20Jingle%20Bells.mp3", //21
    "https://ia804607.us.archive.org/3/items/rockin-around-the-christmas-tree/George%20Thorogood%20%26%20The%20Destroyers%20%E2%80%93%20%E2%80%9CRock%20And%20Roll%20Christmas%E2%80%9D%20EMI%20America%201983.mp3", //22
];

const songTitles = [
    "A Holly Jolly Christmas - Burl Ives", // 1
    "Sleigh Ride - Andre Rieu", //2 
    "Happy Xmas (War Is Over) - John Lennon", //3
    "Rockin' round The Christmas.. - Brenda Lee", //4
    "Run Rudolph Run - Chuck Berry", //5
    "White Christmas - Michael Buble", //6
    "Santa Baby - Eartha Kitt", //7
    "Last Christmas - Wham!", //8
    "Jingle Bell Rock - Hall & Oates", //9
    "Santa Is Coming To Town - J. Fred Coots", //10
    "Here Comes Santa Claus - Gene Autry", //11
    "Little Christmas - Michael Buble", //12
    "All I want for Christmas is You - Mariah Carey",  //13
    "Feliz Navidad - José Feliciano", // 14
    "It's The Most Wonderful Time Of The Year - Andy Williams", // 15
    "It's Beginning To Look A Lot Like Christmas - Michael Buble", //16
    "Frosty The Snowman - Gene Autry (Unknown)", //17
    "You're a Mean One, Mr. Grinch - Thurl Ravenscroft", //18
    "Rudolph The Red-Nosed Reindeer - Gene Autry", //19
    "Step Into Christmas - Elton John", //20
    "Jingle Bells (Rock) - Brian Setzer Orchestra", //21
    "Rock And Roll Christmas - George Thorogood & The Destroyers", //22
];


const brainrotSongs = [
    "https://github.com/Freakybob-Team/Freakybob.site/raw/refs/heads/main/audio/i-dont-gyatt-a-lot-for-chrizzmas-MARIAH-CAREY-ALL-I-GOT-FOR-CHRISTMAS-IS-YOU-PARODY.mp3", //23
    "https://github.com/Freakybob-Team/Freakybob.siteSL/raw/refs/heads/main/audio/rizzmas%20ew.mp3", //24
    // I'ma have to ask my classmates what brainrot songs to add cause they brainrotted frrr
];
const brainrotTitles = [
    "I Don't Gyatt a Lot for Chrizzmas - Rizziah Carey",
    "It's Beginning To Look A gyatt Like Rizzmas- Skibidi Buble",
];

let currentSongIndex = 0;
let isBrainrotMode = false;
let audio = new Audio(songs[currentSongIndex]);

document.getElementById("current-song").textContent = `Playing: ${songTitles[currentSongIndex]}`;

document.getElementById("play-pause-button").onclick = () => {
    if (audio.paused) {
        audio.play();
        document.getElementById("play-pause-button").textContent = "II";
    } else {
        audio.pause();
        document.getElementById("play-pause-button").textContent = "▷II";
    }
};


document.getElementById("brainrot-button").onclick = () => {
    isBrainrotMode = !isBrainrotMode;
    currentSongIndex = 0;
    const playlist = isBrainrotMode ? brainrotSongs : songs;
    const titles = isBrainrotMode ? brainrotTitles : songTitles;

    audio.src = playlist[currentSongIndex];
    document.getElementById("current-song").textContent = `Playing: ${titles[currentSongIndex]}`;
    document.getElementById("brainrot-button").textContent = isBrainrotMode ? "Disable Brainrot Mode" : "Enable Brainrot Mode";
    audio.play();
};

document.getElementById("next-button").onclick = () => {
    const playlist = isBrainrotMode ? brainrotSongs : songs;
    const titles = isBrainrotMode ? brainrotTitles : songTitles;

    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    audio.src = playlist[currentSongIndex];
    audio.play();
    document.getElementById("current-song").textContent = `Playing: ${titles[currentSongIndex]}`;
    document.getElementById("play-pause-button").textContent = "II";
};

document.getElementById("prev-button").onclick = () => {
    const playlist = isBrainrotMode ? brainrotSongs : songs;
    const titles = isBrainrotMode ? brainrotTitles : songTitles;

    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    audio.src = playlist[currentSongIndex];
    audio.play();
    document.getElementById("current-song").textContent = `Playing: ${titles[currentSongIndex]}`;
    document.getElementById("play-pause-button").textContent = "II";
};

