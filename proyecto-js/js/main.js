
$(document).ready(function(){
    // Slider
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
        pager: true
        });
    }
    // Posts
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatum quos dolores dolorum eum voluptates corporis necessitatibus, quaerat reiciendis dolor excepturi impedit explicabo dignissimos. Perspiciatis ullam voluptatibus quas impedit ab!'
            },
            {         
                title: 'Prueba de titulo 2',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatum quos dolores dolorum eum voluptates corporis necessitatibus, quaerat reiciendis dolor excepturi impedit explicabo dignissimos. Perspiciatis ullam voluptatibus quas impedit ab!'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatum quos dolores dolorum eum voluptates corporis necessitatibus, quaerat reiciendis dolor excepturi impedit explicabo dignissimos. Perspiciatis ullam voluptatibus quas impedit ab!'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatum quos dolores dolorum eum voluptates corporis necessitatibus, quaerat reiciendis dolor excepturi impedit explicabo dignissimos. Perspiciatis ullam voluptatibus quas impedit ab!'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatum quos dolores dolorum eum voluptates corporis necessitatibus, quaerat reiciendis dolor excepturi impedit explicabo dignissimos. Perspiciatis ullam voluptatibus quas impedit ab!'
            },
        ];
        posts.forEach((item, index) => {
            // var post es una plantilla de javascript
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>        
            `;
            
            $("#posts").append(post);
        });    
    }

    // Selector de tema
    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });
    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });
    // Scroll arriba de la web
    $(".subir").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // Login falso
    $("#login form").submit(function(){
        let form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);
    });

    let form_name = localStorage.getItem("form_name");
    if(form_name != null && form_name != "undefined"){
        let about_parrafo = $("#about p");

        about_parrafo.html("Bienvenido, " + form_name);
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();

        });
    }
    // Acordeon
    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }
    // Reloj
    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
    }

    // Validacion
    // tengo un error en la validacion es por el plugin que estoy usando 
    // puede que no lo este bien cargado o que este descontinuado
    // igual lo voy a dejar aca
    if (window.location.href.indexOf('contact') > -1) {
        $.validate({
            lang: 'es'
        });
    }
});