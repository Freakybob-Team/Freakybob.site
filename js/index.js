const popup = document.getElementById('sound-popup');
const thanksButton = document.getElementById('thanks-button');
const thanksSound = document.getElementById('thanks-sound');
const backgroundMusic = document.getElementById('background-music');
const muteButton = document.getElementById('mute-button');
const githubButton = document.getElementById('github-button');
const discordButton = document.getElementById('discord-button');
const blueskyButton = document.getElementById('bluesky-button');
const languageSelector = document.getElementById('language-selector');
const pikidiaryButton = document.getElementById('pikidiary-button');
const freakyblog = document.getElementById('freakyblog-logo');

thanksButton.addEventListener('click', () => {
    thanksSound.play();
    popup.classList.add('fade-out');
    setTimeout(() => {
        popup.style.display = 'none'; 
        githubButton.style.display = 'block';
        discordButton.style.display = 'block';
        blueskyButton.style.display = 'block';
        muteButton.style.display = 'block';
        pikidiaryButton.style.display = 'block';
        freakyblog.style.display = 'block';
        backgroundMusic.play();
    }, 2000);
});

function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        muteButton.textContent = 'Mute Music';
    } else {
        backgroundMusic.pause();
        muteButton.textContent = 'Unmute Music';
    }
}

muteButton.addEventListener('click', toggleMusic);

window.addEventListener('load', () => {
    setTimeout(() => popup.style.display = 'flex', 500);
});

document.addEventListener('DOMContentLoaded', () => {
    const translations = {
en: {
    mainTitle: 'Freakybob',
    marqueeText: 'The website is making me genuinely tweak :3 | Check out the new Freakyblog page!',
    popupText: 'Welcome to freakybob.site! Hope you enjoy the website just as much as we do!',
    infoButton: 'Check out the info page!',
    teamButton: 'See the team behind freakybob.site!',
    galleryButton: 'Check out the image gallery!',
    musicButton: 'Listen to Spongebob music!',
    activitiesButton: 'More activities!',
    popupText: 'Welcome to freakybob.site! Hope you enjoy the website just as much as we do!',
    thanksButton: 'Thanks!',
},
es: {
    mainTitle: 'Freakybob',
    marqueeText: '¡Este sitio web realmente me pone a prueba! | ¡Echa un vistazo a la nueva página Freakyblog!',
    popupText: '¡Bienvenido a freakybob.site! ¡Esperamos que disfrutes el sitio web tanto como nosotros!',
    infoButton: '¡Visita la página de información!',
    teamButton: '¡Conoce al equipo detrás de freakybob.site!',
    galleryButton: '¡Mira la galería de imágenes!',
    musicButton: '¡Escucha música de Spongebob!',
    activitiesButton: '¡Mas actividades!',
    popupText: '¡Bienvenido a freakybob.site! ¡Esperamos que disfrutes el sitio web tanto como nosotros!',
    thanksButton: '¡Gracias!',
},
fr : {
    mainTitle: 'Freakybob',
    marqueeText: 'Le site Internet fait-il vraiment le maitre :3 | Regardez la nouvelle page de Freakyblog!',
    popupText: 'Bienvenue sur freakybob.site! Nous sommes impatients de vous offrir le site Internet comme nous le faisons!',
    infoButton: 'Regardez la page d\'information!',
    teamButton: 'Venez voir le team derrière freakybob.site!',
    galleryButton: 'Regardez la galerie d\'images!',
    musicButton: 'Ecoutez la musique depongebob!',
    activitiesButton: 'Dernières d\'activité!',
    popupText: 'Bienvenue sur freakybob.site! Nous sommes impatients de vous offrir le site Internet comme nous le faisons!',
    thanksButton: 'Merci!',
},
de: {
    mainTitle: 'Freakybob',
    marqueeText: 'Diese Website macht mich echt fertig! | Schau dir die neue Freakyblog-Seite an!',
    popupText: 'Willkommen auf freakybob.site! Wir hoffen, dass dir die Website genauso gefällt wie uns!',
    infoButton: 'Schau dir die Infoseite an!',
    teamButton: 'Sieh dir das Team hinter freakybob.site an!',
    galleryButton: 'Schau dir die Bildergalerie an!',
    musicButton: 'Höre Spongebob-Musik!',
    activitiesButton: 'Mehr Aktivität!',
    popupText: 'Willkommen auf freakybob.site! Wir hoffen, dass dir die Website genauso gefäch wie uns!',
    thanksButton: 'Danke!',
}
,jp : {
    mainTitle: 'Freakybob',
    marqueeText: 'このウェブサイトは本当に機能するように作りました | 新しいFreakyblogのページをチェックしてください',
    popupText: 'Freakybob.siteへようこそ! このウェブサイトを楽しんでいただきありがとうございます!',
    infoButton: 'Freakyblogのページを確認してください',
    teamButton: 'Freakybobのページに行ってみてください',
    galleryButton: 'Freakybobのページに行ってみてください',
    musicButton: 'Freakybobのページに行ってみてください',
    activitiesButton: '活動を見てください',
    popupText: 'Freakybob.siteへようこそ! このウェブサイトを楽しんでいただきありがとうございます!',
    thanksButton: 'ありがとうございます!',
}
,ko : {
    mainTitle: 'Freakybob',
    marqueeText: '웹사이트이 만족둔하고 한다! | 더의 텍스트를 확인해 보세요!',
    popupText: '프레이티브박스가 freakybob.site에 접근하고 어떤을!',
    infoButton: '프레이티브박스를 확인해 보세요!',
    teamButton: '프레이티브박스를 확인해 보세요!',
    galleryButton: '프레이티브박스를 확인해 보세요!',
    musicButton: '프레이티브박스를 확인해 보세요!',
    activitiesButton: '프레이티브박스를 확인해 보세요!',
    popupText: '프레이티브박스가 freakybob.site에 접근하고 어떤을!',
    thanksButton: '프레이티브박스를 확인해 보세요!',
}
,pt : {
    mainTitle: 'Freakybob',
    marqueeText: 'O site está a fazer-me realmente tweaking :3 | Veja a nova página do Freakyblog!',
    popupText: 'Bem-vindo ao freakybob.site! Esperamos que goste do site como eu fizemos!',
    infoButton: 'Veja a página de informação!',
    teamButton: 'Veja o time de traço do freakybob.site!',
    galleryButton: 'Veja a galleria de imagens!',
    musicButton: 'Escute a música de.spongebob!',
    activitiesButton: 'Mais Atividade!',
    popupText: 'Bem-vindo ao freakybob.site! Esperamos que goste do site como eu fizemos!',
    thanksButton: 'Obrigado!',
}
,pl : {
    mainTitle: 'Freakybob',
    marqueeText: 'To strona jest robiać mi prawdopodobnie zmiany :3 | Sprawdź nową stronę Freakyblog!',
    popupText: 'Witaj na freakybob.site! Zapewniamy, że zobaczyłes strone jak ja zrobiłes!',
    infoButton: 'Sprawdź stronę informacyjną!',
    teamButton: 'Sprawdź drapień przeciw freakybob.site!',
    galleryButton: 'Sprawdź galerię obrazów!',
    musicButton: 'Ogarnij muzyczę spongebob!',
    activitiesButton: 'Mehr Aktivitä!',
    thanksButton: 'Dziekuje!',
}
,tr : {
    mainTitle: 'Freakybob',
    marqueeText: 'Bu site size hızlıca çıkaracak :3 | Lütfen yeni Freakyblog sayfasını deneyin!',
    popupText: 'Freakybob.site\'e hos geldiniz! Burada site size hızlıca çıkaracaktır!',
    infoButton: 'Freakyblog sayfasını deneyin!',
    teamButton: 'Freakybob sayfasını deneyin!',
    galleryButton: 'Freakybob sayfasını deneyin!',
    musicButton: 'Freakybob sayfasını deneyin!',
    activitiesButton: 'Freakybob sayfasını deneyin!',
    popupText: 'Freakybob.site\'e hos geldiniz! Burada site size hızlıca çıkaracaktır!',
    thanksButton: 'Tesekkürler!',
}
,th : {
    mainTitle: 'Freakybob',
    marqueeText: 'Website จะใช้งานตอนนี้แล้ว :3 | ดูหน้าต่างใหม่ของ Freakyblog!',
    popupText: 'ยินดีต้อนรับสู่ freakybob.site! ระบบของคุณจะใช้งานตอนนี้แล้ว!',
    infoButton: 'ดูหน้าต่างข้อมูล!',
    teamButton: 'ดูทีมของคุณที่หลังจาก freakybob.site!',
    galleryButton: 'ดูภาพกิจกรรม!',
    musicButton: 'ดูเพลง spongebob!',
    activitiesButton: 'ดูกิจกรรม!',
    popupText: 'ยินดีต้อนรับสู่ freakybob.site! ระบบของคุณจะใช้งานตอนนี้แล้ว!',
    thanksButton: 'ขอบคุณ!',
}
,vi : {
    mainTitle: 'Freakybob',
    marqueeText: 'Website đang được đầu tư đã :3 | Xem trang mới nhất của Freakyblog!',
    popupText: 'Chào mừng đến freakybob.site! Chúng tôi mong muốn được ủng hộ trang web này!',
    infoButton: 'Xem trang thông tin!',
    teamButton: 'Xem đội ngũ trước freakybob.site!',
    galleryButton: 'Xem hình ảnh!',
    musicButton: 'Nghe nhạc spongebob!',
    activitiesButton: 'Xem hoạt động!',
    popupText: 'Chào mừng đến freakybob.site! Chúng tôi mong muốn được ủng hộ trang web này!',
    thanksButton: 'Cảm ơn!',
}
,uk : {
    mainTitle: 'Freakybob',
    marqueeText: 'Віддалено :3 | Перегляньте нову сторінку Freakyblog!',
    popupText: 'Добро пожаловать на freakybob.site! Мы рады, что вам понравилось сайт как мы это делали!',
    infoButton: 'Перегляньте сторінку інформації!',
    teamButton: 'Перегляньте команду против freakybob.site!',
    galleryButton: 'Перегляньте галерею зображень!',
    musicButton: 'Слухай музику spongebob!',
    activitiesButton: 'Інші активності!',
    popupText: 'Добро пожаловать на freakybob.site! Мы рады, что вам понравилось сайт как мы это делали!',
    thanksButton: 'Дякую!',
}
,zh : {
    mainTitle: 'Freakybob',
    marqueeText: '这个站点已经 :3 | 看看新的 Freakyblog 页面!',
    popupText: '欢迎来到 freakybob.site! 我们很高兴为您服务!',
    infoButton: '看看信息页面!',
    teamButton: '看看我们的队伍后面的 freakybob.site!',
    galleryButton: '看看照片活动!',
    musicButton: '听听.spongebob 音乐!',
    activitiesButton: '更多活动!',
    popupText: '欢迎来到 freakybob.site! 我们很高兴为您服务!',
    thanksButton: '谢谢!',
}
,ru : {
    mainTitle: 'Freakybob',
    marqueeText: 'Это сайт сделал-мы вполне нравится :3 | Посмотрите новую страницу Freakyblog!',
    popupText: 'Добро пожаловать на freakybob.site! Мы рады, что вам понравилось сайт как мы это делали!',
    infoButton: 'Посмотрите страницу информации!',
    teamButton: 'Посмотрите команду против freakybob.site!',
    galleryButton: 'Посмотрите галерею изображений!',
    musicButton: 'Слушай музыку.spongebob!',
    activitiesButton: 'Ещё активности!',
    popupText: 'Добро пожаловать на freakybob.site! Мы рады, что вам понравилось сайт как мы это делали!',
    thanksButton: 'Спасибо!',
}
,it : {
    mainTitle: 'Freakybob',
    marqueeText: 'Il sito è facendo di molto bello :3 | Clicca sul nuovo sito di Freakyblog!',
    popupText: 'Benvenuto su freakybob.site! Abbiamo apprezzato il sito come lo facciamo!',
    infoButton: 'Clicca sul sito di informazione!',
    teamButton: 'Clicca sul team di freakybob.site!',
    galleryButton: 'Clicca sul galleria di immagini!',
    musicButton: 'Ascolta la canzone di spongebob!',
    activitiesButton: 'Altre attività!',
    popupText: 'Benvenuto su freakybob.site! Abbiamo apprezzato il sito come lo facciamo!',
    thanksButton: 'Grazie!',
}
,lc : {
mainTitle: 'Feakybob',
    marqueeText: 'TEH WEBSIET IZ MAKIN ME GENUINELY TWEAK :3 | CHECK OUT TEH NEW FREAKYBLOG PAEG BY CLICKIN TEH SPONGEBOB BELOW TEH "FREAKYBOB"! | UP',
    popupText: 'Welcome to freakybob.site! Hope you enjoy the website just as much as we do!',
    infoButton: 'CHECK OUT TEH INFO PAEG!',
    teamButton: 'See the team behind freakybob.site!',
    galleryButton: 'Check out the image gallery!',
    musicButton: 'Listen to Spongebob music!',
    activitiesButton: 'More activities!',
    popupText: 'Welcome to freakybob.site! Hope you enjoy the website just as much as we do!',
    thanksButton: 'kthxbai',
}
};

    const languageSelector = document.getElementById('language-selector');

    function updateLanguage(lang) {
document.getElementById('main-title').textContent = translations[lang].mainTitle;
document.getElementById('info-button').textContent = translations[lang].infoButton;
document.getElementById('team-button').textContent = translations[lang].teamButton;
document.getElementById('gallery-button').textContent = translations[lang].galleryButton;
document.getElementById('music-button').textContent = translations[lang].musicButton;
document.getElementById('activities-button').textContent = translations[lang].activitiesButton;
document.getElementById('marquee-text').textContent = translations[lang].marqueeText;
document.getElementById('popup-text').textContent = translations[lang].popupText;
document.getElementById('thanks-button').textContent = translations[lang].thanksButton;
    }

    function setLanguage(lang) {
if (translations.hasOwnProperty(lang)) {
    languageSelector.value = lang;
    updateLanguage(lang);
}
    }

    languageSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        updateLanguage(selectedLanguage);
    });

    updateLanguage('en');
});