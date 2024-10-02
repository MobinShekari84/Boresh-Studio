function changeMenuIcon() {
    this.classList.toggle('xmenu');
    const dropDownMenu = document.querySelectorAll('.dropDownMenu');
    if (dropDownMenu[0].style.visibility == "visible") {
        dropDownMenu[0].style.visibility = "hidden";
        dropDownMenu[0].style.opacity = "0";
    }
    else {
        dropDownMenu[0].style.visibility = "visible";
        dropDownMenu[0].style.opacity = "1";
    }
}

function changeDisplayDropDown() {
    this.style.display = "block";
    console.log(this);
}

const menuicon = document.querySelectorAll('.menuicon');
menuicon.forEach(el => el.addEventListener('click', changeMenuIcon));