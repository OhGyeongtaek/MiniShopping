'use strict'

const items = [
    { type:"t", color:"blue", sex:"Male", size:"large" },
    { type:"s", color:"blue", sex:"Female", size:"small" },
    { type:"p", color:"blue", sex:"Male", size:"small" },
    { type:"t", color:"pink", sex:"Female", size:"large"  },
    { type:"s", color:"blue", sex:"Female", size:"small" },
    { type:"s", color:"yellow", sex:"Female", size:"large" },
    { type:"s", color:"pink", sex:"Female", size:"small" },
    { type:"s", color:"blue", sex:"Female", size:"small" },
    { type:"t", color:"blue", sex:"Male", size:"large" },
    { type:"p", color:"yellow", sex:"Male", size:"large" },
    { type:"p", color:"blue", sex:"Male", size:"small" },
    { type:"p", color:"pink", sex:"Female", size:"small" },
    { type:"t", color:"yellow", sex:"Male", size:"large" },
    { type:"s", color:"pink", sex:"Female", size:"small" },
    { type:"t", color:"pink", sex:"Female", size:"large"  },
    { type:"s", color:"blue", sex:"Female", size:"small" },
    { type:"t", color:"yellow", sex:"Male", size:"large" },
    { type:"s", color:"yellow", sex:"Female", size:"large" },
    { type:"s", color:"blue", sex:"Female", size:"small" },
    { type:"p", color:"yellow", sex:"Male", size:"large" }
];

class ShoppingItem{
    data = null;
    description = "";

    img = document.createElement("img");
    item = document.createElement("li");
    descriptionItem = document.createElement("span");

    constructor(clothes) {
        this.data = clothes;

        this.createDescription();
        this.createImage();

        this.item.appendChild(this.img); 
        this.item.appendChild(this.descriptionItem);

        this.appendItem();
    }

    /* Image 생성 */
    createImage() {
        this.img.src = `./imgs/${this.data.color}_${this.data.type}.png`;
        this.img.alt = this.description;
        this.img.title = this.description;
    }

    /* 설명 생성 */
    createDescription() {
        this.description = `${this.data.sex}, ${this.data.size} size`;
        this.descriptionItem.append(`${this.description}`);
    }

    /* Item UL 객체에 추가 */
    appendItem() {
        document.querySelector("#items").append(this.item);
    }

    show() {
        this.item.style="display:flex";
    }

    hide() {
        this.item.style="display:none";
    }
}

/* 클릭한 Element를 가져오기 위해 function 사용 */
const itemTypeFiltering = function() {
    itemFiltering("type", this.getAttribute("data-type"));
}

/* 클릭한 Element를 가져오기 위해 function 사용 */
const itemColorFiltering = function() {
    itemFiltering("color", this.getAttribute("data-color"));
}

/* Element 필터링 */
const itemFiltering = function(check, target) {
    items.forEach(element => {
        element[check] === target ? element.obj.show() : element.obj.hide();
    });
}

/* Item 생성 */
items.forEach(element => {
    element.obj = new ShoppingItem(element);
});

/* 옷 필터링 이벤트 적용 */
document.querySelectorAll("[data-type]").forEach(element => {
    element.onclick = itemTypeFiltering;
});

/* 색상 필터링 이벤트 적용 */
document.querySelectorAll("[data-color]").forEach(element => {
    element.onclick = itemColorFiltering;
});

/* 초기화 이벤트 적용 */
document.querySelector(".reset").onclick = () => {
    items.forEach(element => {
        element.obj.show();
    });
}