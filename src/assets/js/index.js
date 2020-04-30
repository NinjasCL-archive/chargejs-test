// Maybe using https://zeptojs.com/ could help
window.addEventListener("DOMContentLoaded", () => {
  const dataElement = document.querySelector("#custom-data");
  const data = JSON.parse(dataElement.dataset.data);

  console.log(data);

  const fruitButtons = document.querySelectorAll(".btn-fruta");

  fruitButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const fruta = JSON.parse(button.dataset.fruta);
      alert(fruta);
    });
  });
});
