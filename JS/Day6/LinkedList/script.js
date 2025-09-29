function Node(value) {
    this.value = value;
    this.next = null;
}


const LinkedList = function () {
    this.head = null;  
};

LinkedList.prototype.push = function (elem) {
    const newNode = new Node(elem);

    if (!this.head) {
        this.head = newNode;
        return;
    }

    let current = this.head;
    while(current.next){
        current = current.next
    }
    current.next = newNode

};


LinkedList.prototype.pop = function () {
    if (!this.head) {
        console.log("List is empty");
        return null;
    }

    if (!this.head.next) {
    const val = this.head.value;
    this.head = null;
    return val;
  }
    let current = this.head;
    while(current.next.next){
        current = current.next
    }
    const val = current.next.value;
    current.next = null;
    return val;
};

LinkedList.prototype.length = function(){
    if(!this.head){
        return 0
    }
    let current = this.head;
    let count = 0
    while(current){
        count++;
        current = current.next
    }
    return count
}
LinkedList.prototype.print = function () {
    let current = this.head;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
};
let list = new LinkedList()

// console.log(list.length());
// list.push(5)
// list.push(2)
// list.push(3)
// list.push(1)
// console.log(list.length());
// list.print()

// let removed = list.pop()
// console.log(removed);
// list.print()



const container = document.getElementById("listContainer");
const input = document.getElementById("inputValue");
const pushBtn = document.getElementById("pushBtn");
const popBtn = document.getElementById("popBtn");

pushBtn.addEventListener("click", () => {
    
      const value = Number(input.value);
      if (!value) return;

      if (list.length() > 0) {
        container.insertAdjacentHTML("beforeend", `<div class="arrow">&rarr;</div>`);
      }
      
      container.insertAdjacentHTML("beforeend", `
        <div class="node"><div class="value">${value}</div></div>
      `);
        list.push(value)
        list.print();
      input.value = "";
});

popBtn.addEventListener("click", () => {
      const nodes = container.querySelectorAll(".node");
      const arrows = container.querySelectorAll(".arrow");

      if (nodes.length === 0) return;

   
      nodes[nodes.length - 1].remove();

     
      if (arrows.length > 0) {
        arrows[arrows.length - 1].remove();
      }
      list.pop()
     list.print();
    });