function changeMenuIcon() {
    this.classList.toggle('xmenu');
}

const menuicon = document.querySelectorAll('.menuicon');

menuicon.forEach(el => el.addEventListener('click', changeMenuIcon));