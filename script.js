
let forward = document.querySelector(".fa-forward");
let backward = document.querySelector(".fa-backward");
let audios = [
    "https://server12.mp3quran.net/maher/001.mp3",
    "https://server12.mp3quran.net/maher/002.mp3",
    "https://server12.mp3quran.net/maher/003.mp3",
    "https://server12.mp3quran.net/maher/004.mp3",
    "https://server12.mp3quran.net/maher/005.mp3",
    "https://server12.mp3quran.net/maher/006.mp3",
    "https://server12.mp3quran.net/maher/007.mp3",
    "https://server12.mp3quran.net/maher/008.mp3",
    "https://server12.mp3quran.net/maher/009.mp3",
    "https://server12.mp3quran.net/maher/010.mp3",
    "https://server12.mp3quran.net/maher/011.mp3",
    "https://server12.mp3quran.net/maher/012.mp3",
    "https://server12.mp3quran.net/maher/013.mp3",
    "https://server12.mp3quran.net/maher/014.mp3",
    "https://server12.mp3quran.net/maher/015.mp3",
    "https://server12.mp3quran.net/maher/016.mp3",
    "https://server12.mp3quran.net/maher/017.mp3",
    "https://server12.mp3quran.net/maher/018.mp3",
    "https://server12.mp3quran.net/maher/019.mp3",
    "https://server12.mp3quran.net/maher/020.mp3",
    "https://server12.mp3quran.net/maher/021.mp3",
    "https://server12.mp3quran.net/maher/022.mp3",
    "https://server12.mp3quran.net/maher/023.mp3",
    "https://server12.mp3quran.net/maher/024.mp3",
    "https://server12.mp3quran.net/maher/025.mp3",
    "https://server12.mp3quran.net/maher/026.mp3",
    "https://server12.mp3quran.net/maher/027.mp3",
    "https://server12.mp3quran.net/maher/028.mp3",
];

let imgs = [
    "https://th.bing.com/th/id/OIP.5rIsZCMJLsfxCMy7SM2sIwHaEK?rs=1&pid=ImgDetMain",
    "https://i.ytimg.com/vi/X8BZGW0PeYU/hqdefault.jpg",
    "https://modo3.com/thumbs/fit630x300/17403/1441802469/%D8%AA%D8%B9%D8%B1%D9%8A%D9%81_%D8%B3%D9%88%D8%B1%D8%A9_%D8%A2%D9%84_%D8%B9%D9%85%D8%B1%D8%A7%D9%86.jpg",
    "https://th.bing.com/th/id/OIP.7koHkICIv9AO8Tdf2nA74gHaDw?w=350&h=177&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.8d9do0z5RQ-JoSFcWuNTawHaFu?w=203&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/R.b5e64f730e068c919378e753f5b980b2?rik=B8J4XB1ZPpmDXQ&pid=ImgRaw&r=0",
    "https://th.bing.com/th?id=OIP.NqinG8rSE4HEtqPEe2c2sQHaEh&w=319&h=195&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    "https://th.bing.com/th/id/OIP._s87MgiJpQYR59os7INViQHaEH?w=310&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP._Sw7Etro8XdxWKeU-k8aDgHaEh?w=301&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.iU3QMkKlaenN79Y7c3mJyQHaKQ?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.VCy_davqAryHArSt4XMaVwHaHa?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.Yi1jdrVUmgu5Kf5a-NhX1AHaDi?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.1OS4Pk0gDcpD_f1buq5K-wHaEh?rs=1&pid=ImgDetMain",
    "https://beauty-images.net/wp-content/uploads/2020/12/2521.jpg",
    "https://th.bing.com/th/id/R.b12ce254021497a315a38335d5401271?rik=n07vx4f%2fBXzeFQ&riu=http%3a%2f%2fwww.ashahada.com%2fwp-content%2fuploads%2f2013%2f07%2f337.jpg&ehk=Nw78nxEA8cbfyhvO9lXl%2fUaPlSxtv7quEfxyIU6TBX8%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.OHjfHvGmjQueJvq0vZtIcgHaEj?rs=1&pid=ImgDetMain",
    "https://allonlineislam.com/wp-content/uploads/2022/05/%D8%B3%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D8%A5%D8%B3%D8%B1%D8%A7%D8%A1-%D9%85%D9%83%D8%AA%D9%88%D8%A8%D8%A9.jpg",
    "https://meaningg.cc/wp-content/uploads/2018/07/1811.jpg",
    "https://th.bing.com/th/id/R.614e385c60bb80cceb311deb4ea85099?rik=c6AZG%2fPFHZ1Fww&riu=http%3a%2f%2flove-msg.com%2fwp-content%2fuploads%2f2018%2f03%2f13116-4.jpg&ehk=scfAS26I8rxRDDE5NqZni7%2fhzUKX77eE7zR6Hx5IyZQ%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.lB_rKXPGz_f2-zYybModbgHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.i99E3Nn4wnvDuODmWHtTPAHaFj?rs=1&pid=ImgDetMain",
    "https://allonlineislam.com/wp-content/uploads/2020/11/%D8%B3%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D8%AD%D8%AC-%D9%85%D9%83%D8%AA%D9%88%D8%A8%D8%A9.jpg",
    "https://th.bing.com/th/id/R.ece934e8b8e831ff13ac0aab2910b78d?rik=I%2bJs8jERpsQ6Uw&riu=http%3a%2f%2fquran-for-all.com%2fapi%2fquran%2fimages%2fsurah-titles%2f23.png&ehk=58tHeEZI0KdtsQkIEeks5uhtmZMNkF4i0zySyZlk8N0%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.93b136a374fd46f88dd409a495f7f849?rik=37FC3O0HlkYZlA&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.XhzwnUmk4y6G8P4jJkn85QHaEj?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.9hpFTzEhKZupyXuvDmvNgAHaFj?w=271&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.UgITGAkIPUeZc7Od2BzuNQHaFj?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://www.storiesrealistic.com/wp-content/uploads/2021/04/%D8%B3%D9%88%D8%B1%D9%87_%D9%82%D8%B5%D8%B5.jpg",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];
let h=["الفاتحة","البقرة","ال عمران","النساء","المائدة","الانعام","الاعراف","الانفال","التوبة","يونس","هود","يوسف","الرعد","ابراهيم","الحجر","النحل","الاسراء","الكهف","مريم","طه","الانبياء","الحج","المؤمنون","النور","الفرقان","الشعراء","النمل","القصص","","","","","","","","","","",""]

let currentIndex = 0; // مؤشر لتتبع الصورة الحالية

function updateContent() {
    let img = document.getElementById("image");
    let h1 = document.getElementById("hh");
    let audio = document.getElementById("audio");
    img.src = imgs[currentIndex];
    audio.src = audios[currentIndex];
    h1.innerHTML=h[currentIndex]

}

// زر "Next"
forward.addEventListener("click", function() {
    if (currentIndex < imgs.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateContent();
});

// زر "Previous"
backward.addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = imgs.length - 1;
    }
    updateContent();
});

// تحديث المحتوى عند تحميل الصفحة لأول مرة
updateContent();