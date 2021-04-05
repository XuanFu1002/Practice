var demo = document.getElementById("demo");

var characters = demo.innerHTML.split("");

function charToHTML(char, index) {
  return `<span class="move" style="animation-delay: ${index}s">${char}</span>`;
}

var content = characters.map(charToHTML).join("");

demo.innerHTML = content;