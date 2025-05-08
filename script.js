function clock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  document.getElementById('jam-digital').textContent = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds}`;

  const body = document.body;

  if (hours >= 5 && hours < 11) {
    body.style.background = "linear-gradient(135deg, #FFEFBA, #FFFFFF)";
  } else if (hours >= 11 && hours < 15) {
    body.style.background = "linear-gradient(135deg, #00c6ff, #0072ff)";
  } else if (hours >= 15 && hours < 18) {
    body.style.background = "linear-gradient(135deg, #f3904f, #3b4371)";
  } else {
    body.style.background = "linear-gradient(135deg, #141e30, #243b55)";
  }
}


setInterval(clock, 1000);
clock();