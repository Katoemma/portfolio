// js to change navbar bg on scroll



//js to automatically type the hero text
function autoType(element, texts, delay = 150) {
    let textIndex = 0;
    let charIndex = 0;
    function type() {
      if (charIndex < texts[textIndex].length) {
        element.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, delay);
      } else {
        setTimeout(erase, delay);
      }
    }
    function erase() {
      if (charIndex > 0) {
        element.innerHTML = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, delay);
      } else {
        textIndex++;
        if (textIndex >= texts.length) {
          textIndex = 0;
        }
        setTimeout(type, delay);
      }
    }
    setTimeout(type, delay);
  }
  
  const typedText = document.querySelector("#Ctext");
  autoType(typedText, ["a developer.", "a designer.", "Kato Emma"]);
  