function convert() {
  c = document.getElementById("c").value
  f = document.getElementById("f").value
  if (c != '') {
        f = (parseFloat(c) * 1.8) + 32;    
    
    } else {
        c = (parseFloat(f) - 32) / 1.8;
    }
  document.getElementById('f').value = parseFloat(f).toFixed(1);
  document.getElementById('c').value = parseFloat(c).toFixed(1);
}
