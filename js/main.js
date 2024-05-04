
$(document).ready(function() {
//Off Canvas Menu Slide
       $(".menu-toggle").click(function() {
           $('nav').toggleClass('nav-hide')
       });

//Page Scroll To
       $('a[href^="#"]').on('click', function(e) {
           e.preventDefault();

           var target = this.hash;
           var $target = $(target);

           $('html, body').animate({
             'scrollTop': $target.offset().top
           }, 900, 'swing', function() {
             window.location.hash = target;
           });
         });
// Extra Portfolio Gallery
          $(".show-more-btn").click(function () {
          $(".hidden-gallery").toggle("slow");
          });
   });

   document.addEventListener("DOMContentLoaded", function() {
    var signupBtn = document.getElementById("signupBtn");
    var modal = document.getElementById("signupModal");
    var closeBtn = document.getElementsByClassName("close")[0];
    var signupForm = document.getElementById("signupForm");
    var sendBtn = document.getElementById("sendBtn");

    // Открываем модальное окно при клике на кнопку "Записаться"
    signupBtn.onclick = function() {
        modal.style.display = "block";
        sendBtn.style.display = "inline-block"; // Показываем кнопку "Отправить"
    }

    // Закрываем модальное окно при клике на кнопку "Закрыть" (X)
    closeBtn.onclick = function() {
        modal.style.display = "none";
        sendBtn.style.display = "none"; // Скрываем кнопку "Отправить"
    }

    // Закрываем модальное окно при клике вне его области
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            sendBtn.style.display = "none"; // Скрываем кнопку "Отправить"
        }
    }

    // Обработка отправки формы
    signupForm.onsubmit = function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        // Получаем данные из формы
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;

        // Отправляем данные на сервер (например, с помощью AJAX)
        // Ваш код для отправки данных на сервер может быть здесь

        // Закрываем модальное окно
        modal.style.display = "none";
        sendBtn.style.display = "none"; // Скрываем кнопку "Отправить"
    }

    // Добавляем обработчик события для клика по кнопке "Отправить" в модальном окне
    sendBtn.onclick = function() {
        // Ваша логика для отправки данных с формы
        // В данном примере мы просто закрываем модальное окно при клике на кнопку "Отправить"
        modal.style.display = "none";
    }
});




   // Hide #MagicMenu on on scroll down
   var didScroll;
   var lastScrollTop = 0;
   var delta = 5;
   var navbarHeight = $('#MagicMenu').outerHeight();

   $(window).scroll(function(event){
       didScroll = true;
   });

   setInterval(function() {
       if (didScroll) {
           hasScrolled();
           didScroll = false;
       }
   }, 250);

   function hasScrolled() {
       var st = $(this).scrollTop();

       // Make sure they scroll more than delta
       if(Math.abs(lastScrollTop - st) <= delta)
           return;

       // If they scrolled down and are past the navbar, add class .MagicMenu-up.
       // This is necessary so you never see what is "behind" the navbar.
       if (st > lastScrollTop && st > navbarHeight){
           // Scroll Down
           $('#MagicMenu').fadeOut(500);
       } else {
           // Scroll Up
           if(st + $(window).height() < $(document).height()) {
               $('#MagicMenu').fadeIn(500);
           }
       }
       lastScrollTop = st;
   }
