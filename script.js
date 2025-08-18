function capNhatDongHo() {
     const now = new Date();
    let gio = String(now.getHours()).padStart(2, '0');
    let phut = String(now.getMinutes()).padStart(2, '0');
    let giay = String(now.getSeconds()).padStart(2, '0');
    document.getElementById("clock").innerText = `${gio}:${phut}:${giay}`;
  }
  
  setInterval(capNhatDongHo, 1000);
  capNhatDongHo();
  
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

function troll() {
  window.open("https://youtu.be/dQw4w9WgXcQ?si=QsnyzfEO0iAdVax9","_blank")
}