"use strict";
let navList;
let desc = false;
const getNavData = async () => {
    const fetchNavData = await fetch("http://localhost:3000/nav");
    navList = await fetchNavData.json();
};
const sortNavList = (data, desc) => {
    const newNavList = data.sort((a, b) => {
        let compare = 0;
        if (a.displayText.toLowerCase() < b.displayText.toLowerCase()) {
            compare = -1;
        }
        if (a.displayText.toLowerCase() > b.displayText.toLowerCase()) {
            compare = 1;
        }
        if (desc) {
            return compare * -1;
        }
        else {
            return compare;
        }
    });
    return newNavList;
};
const addActiveClass = (data, i) => {
    data.forEach((item) => {
        item.class = "";
    });
    data[i].class = "active";
    const frame = document.querySelector("#frame");
    frame.setAttribute("src", `Task-${data[i].id}/index.html`);
};
const createNav = (data) => {
    const ul = document.querySelector("#nav-list");
    if (data.length !== 0) {
        const navElements = data
            .map((item) => `<li><a href="#" id="${item.id}" class="nav-link  ${item.class}">${item.displayText}</a></li>`)
            .join("");
        ul.innerHTML = navElements;
    }
    else {
        ul.style.fontSize = "30px";
        ul.style.textAlign = "center";
        ul.innerHTML = "No Data Found";
    }
};
const controlNav = () => {
    const navItemList = document.querySelectorAll(".nav-link");
    const frame = document.querySelector("#frame");
    navItemList.forEach((item) => {
        item.addEventListener("click", () => {
            const index = navList.findIndex((object) => {
                return object.id.toString() == item.id;
            });
            const myInput = document.querySelector("#myInput");
            myInput.value = "";
            addActiveClass(navList, index);
            navFun(navList);
            frame.src = `Task-${item.id}/index.html`;
        });
    });
};
const navFun = (data) => {
    createNav(data);
    controlNav();
};
const startFun = async () => {
    try {
        await getNavData();
        addActiveClass(navList, 0);
        navFun(navList);
        ascDesc();
    }
    catch (err) {
        console.log("Error: " + err);
    }
};
const searchFun = () => {
    const myInput = document.querySelector("#myInput");
    const keyword = myInput.value.trim().toLowerCase();
    const newNavList = navList.filter((item) => {
        const textValue = item.displayText.split(" ");
        const contains = textValue.some((text) => text.toLowerCase().startsWith(keyword));
        if (contains)
            return item;
    });
    navFun(newNavList);
};
const ascDesc = () => {
    const radioBtns = document.querySelectorAll("input[name='radio']");
    radioBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.value == "asc") {
                desc = false;
            }
            else {
                desc = true;
            }
            const newNavList = sortNavList(navList, desc);
            navFun(newNavList);
        });
    });
};
startFun();
