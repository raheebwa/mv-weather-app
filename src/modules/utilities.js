
const utilities = {
  createEl(el, classes = []) {
    const myEl = document.createElement(el);
    if (classes !== []) {
      classes.forEach(el => {
        myEl.classList.add(el);
      });
    }
    return myEl;
  },
  getEl(id) {
    const myEl = document.getElementById(id);
    return myEl;
  },
};

export default utilities;