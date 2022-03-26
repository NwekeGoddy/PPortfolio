const text1 = "Hi,\nI'm, Nweke Chidi";

let index = 0;

function eachText1() {
  document.getElementById("hero__wrapper--hi").innerText = text1.slice(
    0,
    index
  );
  index++;
}
setInterval(eachText1, 300);
