let box = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newg = document.querySelector(".game");
let msgc = document.querySelector(".msg");
let msg = document.querySelector("#msg");
let playerO = true;
let count = 0;

let winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
];
box.forEach((b) => {
  b.addEventListener("click", () => {
    if (playerO) {
      b.innerText = "O";
      playerO = false;
    } else {
      b.innerText = "X";
      playerO = true;
    }
    b.disabled = true;
    count++;
    let win = checkwin();
    if (count === 9 && !win) {
      msg.innerText = "Game was draw!";
      msgc.classList.remove("hide");
      boxdisable();
    }
  });
});

let boxdisable = () => {
  for (let b of box) {
    b.disabled = true;
  }
};
let boxenable = () => {
  for (let b of box) {
    b.disabled = false;
    b.innerText = "";
  }
};
let showWinner = (winner) => {
  msg.innerText = `winner is ${winner}`;
  msgc.classList.remove("hide");
  boxdisable();
};
let checkwin = () => {
  for (let pat of winpattern) {
    let key1 = box[pat[0]].innerText;
    let key2 = box[pat[1]].innerText;
    let key3 = box[pat[2]].innerText;
    if (key1 != "" && key2 != "" && key3 != "") {
      if (key1 === key2 && key1 === key3) {
        showWinner(key1);
      }
    }
  }
};

let resetg = () => {
  playerO = true;
  count = 0;
  boxenable();
  msgc.classList.add("hide");
};
newg.addEventListener("click", resetg);
reset.addEventListener("click", resetg);
