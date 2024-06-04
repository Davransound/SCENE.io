// Получаем модальное окно
var modal = document.getElementById("myModal");

// Получаем кнопку, которая открывает модальное окно
var btn = document.querySelector(".u-btn-1");

// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, открываем модальное окно
btn.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закрываем модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь нажимает в любом месте за пределами модального окна, закрываем его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Обрабатываем отправку формы
document.getElementById("signupForm").onsubmit = function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    alert("Имя: " + name + "\nНомер телефона: " + phone);
    modal.style.display = "none";
}
