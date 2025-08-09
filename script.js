function capNhatDongHo() {
     const now = new Date();
    let gio = String(now.getHours()).padStart(2, '0');
    let phut = String(now.getMinutes()).padStart(2, '0');
    let giay = String(now.getSeconds()).padStart(2, '0');
    document.getElementById("clock").innerText = `${gio}:${phut}:${giay}`;
  }
  
  setInterval(capNhatDongHo, 1000);
  capNhatDongHo();
  async function layLink() {
    const b = document.getElementById("text").value;

    const url = "https://soundcloud-scraper.p.rapidapi.com/v1/track/metadata";
    const params = new URLSearchParams({
      track: b,
      download: "sq"
    });

    const headers = {
      "x-rapidapi-key": "bf5996ec37mshce4979221d04039p179d95jsn7df86e505ee4",
      "x-rapidapi-host": "soundcloud-scraper.p.rapidapi.com"
    };

    try {
      const response = await fetch(`${url}?${params.toString()}`, { headers });
      const data = await response.json();
      console.log(data)
      const link = data.audio['0'].url;
      navigator.clipboard.writeText(link);
      window.open(link);
      alert("successful!");
    } catch (err) {
      alert("error!");
    }
  }
  
const m = document.querySelector('.main');
const mbg = document.querySelector('.main-bg');

const width = m.getBoundingClientRect().width;
const height = m.getBoundingClientRect().height;

mbg.style.width = width + 'px';
mbg.style.height = height + 'px';

function an() {
  el = document.getElementById("menu-all");
  el.classList.toggle("hidden");
}

function facebook() {
  window.open("https://www.facebook.com/share/1BL1xAR6Sd/","_blank")
}

function tiktok() {
  window.open("https://www.tiktok.com/@hoankyak?_t=ZS-8yjGM3ueMsx&_r=1","_blank")
}

function email() {
  window.location.href = "mailto:nguyenqutnhthanhhoang.st2010@gmail.com"
}

function github() {
  window.open("https://github.com/Hoangpolauncher","_blank")
}