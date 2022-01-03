let main = true;
let skor = 0;
do {
  // pilihan player
  let p = prompt('pilih : gunting, batu, kertas');

  // pilihan komputer
  let comp = Math.random();
  if (comp < 0.34) {
    comp = 'gunting';
  } else if (comp >= 0.34 && comp <= 0.67) {
    comp = 'batu';
  } else {
    comp = 'kertas';
  }

  // rules
  if (comp === p) {
    alert('Kamu memilih "' + p + '" dan komputer memilih "' + comp + '". SERI');
  } else if ((comp === 'gunting' && p === 'kertas') || (comp === 'kertas' && p === 'batu') || (comp === 'batu' && p === 'gunting')) {
    alert('Kamu memilih "' + p + '" dan komputer memilih "' + comp + '". KAMU KALAH!');
  } else if ((p === 'gunting' && comp === 'kertas') || (p === 'kertas' && comp === 'batu') || (p === 'batu' && comp === 'gunting')) {
    skor++;
    alert('Kamu memilih "' + p + '" dan komputer memilih "' + comp + '". KAMU MENANG!');
  }
  main = confirm('Skor kamu : '+ skor + ', lagi?');
} while (main === true)