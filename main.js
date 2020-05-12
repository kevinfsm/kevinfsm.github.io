const kacang = document.querySelectorAll('.kacang');
const tupai = document.querySelectorAll('.tupai');
const papanSkor = document.querySelector('.papan-skor');
const cry = document.querySelector('#cry')

var kacangSebelumnya;
var selesai;
var skor;

function acakMuncul(kacang){
    const i = Math.floor(Math.random() * kacang.length);
    const iAcak = kacang[i];
    if (iAcak == kacangSebelumnya) {
        acakMuncul(kacang);
    }
    kacangSebelumnya = iAcak;
    return iAcak;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function mainkan() {
    const iAcak = acakMuncul(kacang);
    const wAcak = randomWaktu(300, 1000);
    iAcak.classList.add('muncul');

    setTimeout( () => {
        iAcak.classList.remove('muncul');
        if (!selesai) {
            mainkan();
        }
    }, wAcak);
}

function mulai(){
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    mainkan();
    setTimeout(() => {
        selesai = true;
        
    }, 20000);
}

function pukul() {
    skor++;
    papanSkor.textContent = skor;
    this.parentNode.classList.remove('muncul')
    cry.play();

}

tupai.forEach(t => {
    t.addEventListener('click', pukul);
});