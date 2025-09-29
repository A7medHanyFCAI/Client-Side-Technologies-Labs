class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) current = current.next;
    current.next = newNode;
  }

  pop() {
    if (!this.head) return null;
    if (!this.head.next) {
      const val = this.head.value;
      this.head = null;
      return val;
    }
    let current = this.head;
    while (current.next.next) current = current.next;
    const val = current.next.value;
    current.next = null;
    return val;
  }

  insertFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  insert(value, position) {
    if (position < 0) return;
    if (position === 0) {
      this.insertFirst(value);
      return;
    }
    let newNode = new Node(value);
    let current = this.head;
    let index = 0;
   
    while (current && index < position - 1) {
      current = current.next;
      index++;
    }
    if (!current) return;
    newNode.next = current.next;
    current.next = newNode;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

const list = new LinkedList();
const container = document.getElementById("listContainer");
const input = document.getElementById("inputValue");
const posInput = document.getElementById("insertPos");

const pushBtn = document.getElementById("pushBtn");
const popBtn = document.getElementById("popBtn");
const insertFirstBtn = document.getElementById("insertFirstBtn");
const insertBtn = document.getElementById("insertBtn");
const reverseBtn = document.getElementById("reverseBtn");

function animate(newIndex) {
  container.innerHTML = "";
  let current = list.head;
  let index = 0;

  while (current) {
    const nodeHTML = `<div class="node">
        <div class="value ${newIndex === index ? "appear" : ""}">${current.value}</div>
      </div>`;
    container.insertAdjacentHTML("beforeend", nodeHTML);

    if (current.next) {
      const arrowHTML = `<div class="arrow ${newIndex === index ? "appear" : ""}">&rarr;</div>`;
      container.insertAdjacentHTML("beforeend", arrowHTML);
    }

    current = current.next;
    index++;
  }
}


function reverseAnimated() {
  container.innerHTML = "";
  let current = list.head;
  let index = 0;

  while (current) {
    const delay = index * 0.3;
    const nodeHTML = `<div class="node">
        <div class="value appear" style="animation-delay:${delay}s">${current.value}</div>
      </div>`;
    container.insertAdjacentHTML("beforeend", nodeHTML);

    if (current.next) {
      const arrowHTML = `<div class="arrow appear" style="animation-delay:${delay + 0.15}s">&rarr;</div>`;
      container.insertAdjacentHTML("beforeend", arrowHTML);
    }

    current = current.next;
    index++;
  }
}


function popAnimated() {
  if (!list.head) return;
  const removedVal = list.pop();

  const nodes = container.querySelectorAll(".node");
  const arrows = container.querySelectorAll(".arrow");

  if (nodes.length > 0) {
    const lastNode = nodes[nodes.length - 1];
    lastNode.classList.add("disappear");

    if (arrows.length >= nodes.length) {
      const prevArrow = arrows[arrows.length - 1];
      prevArrow.classList.add("disappear");
      prevArrow.addEventListener("animationend", () => prevArrow.remove());
    }

    lastNode.addEventListener("animationend", () => {
      lastNode.remove();
    });
  }

  return removedVal;
}

pushBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") return;
  list.push(value);

  let count = 0, cur = list.head;
  while (cur.next) { cur = cur.next; count++; }
  animate(count);
  input.value = "";
});

popBtn.addEventListener("click", () => {
  popAnimated();
});

insertFirstBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") return;
  list.insertFirst(value);
  animate(0);
  input.value = "";
});

insertBtn.addEventListener("click", () => {
  const value = input.value.trim();
  const pos = Number(posInput.value)-1;
  if (value === "" || isNaN(pos)) return;
  list.insert(value, pos);
  animate(pos);
  input.value = "";
  posInput.value = "";
});

reverseBtn.addEventListener("click", () => {
  list.reverse();
  reverseAnimated();
});
