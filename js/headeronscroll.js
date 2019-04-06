window.onscroll = function () { myFunction() };

        var header = document.getElementById("headerPRGH");
        var sticky = 100;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                header.classList.add('sticker');        
            } 
            else {
                header.classList.remove('sticker');
            }
        }