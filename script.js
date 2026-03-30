//your JS code here. If required.
function convertKeyboardLayout(layout1, layout2, text) {
  let map = {};

  for (let i = 0; i < 26; i++) {
    map[layout1[i]] = layout2[i];
  }

  let result = "";

  for (let ch of text) {
    if (ch >= 'a' && ch <= 'z') {
      result += map[ch];
    } else if (ch >= 'A' && ch <= 'Z') {
      let lower = ch.toLowerCase();
      result += map[lower].toUpperCase();
    } else {
      result += ch;
    }
  }

  return result;
}

// 👉 Fixed layouts (as per problem)
const layout1 = "qwertyuiopasdfghjklzxcvbnm";
const layout2 = "veamhjsgqocnrbfxdtwkylupzi";

const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  const text = document.getElementById("text").value;
  const delay = Number(document.getElementById("delay").value);

  if (!text || !delay) {
    output.textContent = "Please enter valid input";
    return;
  }

  // Promise with delay
  new Promise((resolve) => {
    setTimeout(() => {
      const result = convertKeyboardLayout(layout1, layout2, text);
      resolve(result);
    }, delay);
  }).then((res) => {
    output.textContent = res;
  });
});
