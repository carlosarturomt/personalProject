<!DOCTYPE html>
<html lang="es">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="Carlos Arturo Miranda Trujano">
    <meta name="DC.creator" content="Miranda Trujano Carlos Arturo">
    <meta name="copyright" content="Carlos Arturo Miranda Trujano">
    <meta name="description" content="Descubre al psicólogo Carlos, un joven que se ha especializado en Educación, con estrategias digitales de aprendizaje que lo han orillado al desarrollo web, enfocándose en el FrontEnd.">
    <title>Contacto|Carlos Arturo Miranda Trujano</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Padauk:wght@400;700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="icon" type="image/png" href="assets/imgs/carlosarturomt_logo.png">
    <link rel="stylesheet" href="css/estilos.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="./css/desktop.css" media="(min-width: 1024px)">
</head>

<body>
    <!------------------------------------------ BARRA DE NAVEGACIÓN ------------------------------------------------>
    <header class="nav_100-fixed">
        <div class="logo">
            <a href="index"><img class="logo" src="assets/imgs/carlosarturomt_logo.png" alt="CarlosArturoMT"></a>
        </div>
        <nav id="menu">
            <ul class="navTop">
                <li><a href="index">Inicio</a></li>
                <li><a href="biografia">Biografía</a></li>
                <li><a rel="noreferrer" target="_blank" href="https://obra.carlosarturomt.com/">Obra</a></li>
                <li><a rel="noreferrer" target="_blank" href="http://learning.carlosarturomt.com/">eLearning</a></li>
                <li><a rel="noreferrer" target="_blank" href="https://news.carlosarturomt.com/">Blog</a></li>
                <li><a href="contacto" style="color:#5b7dbc;">Contacto</a></li>
            </ul>
        </nav>

        <button class="theme buttonStyle" id="theme" aria-label="Dark Theme">
            <span><i class="fas fa-sun"></i></span>
            <span><i class="fas fa-moon"></i></span>
        </button>

        <div class="menu-toggle">
            <i class="fa fa-bars"></i>
        </div>
    </header>
    <main>
    <section class="login">
            <section class="login__container">
                <h2>Contáctame</h2>
                <form class="login__container--form " action="#" method="POST">
                    <div class="login1">
                        <span class="user"></span>
                        <input class="input--register" type="text" name="nombre" placeholder="Nombre" autocomplete="on" required>
                    </div>
                    <div class="login1">
                        <span class="phone"></span>
                        <input class="input--register" type="tel" name="numero" placeholder="Teléfono" autocomplete="tel" required>
                    </div>
                    <div class="login1">
                        <span class="mail   "></span>
                        <input class="input--register" type="email" name="correo" placeholder="Correo" autocomplete="email" required>
                    </div>
                    <div class="login1">
                        <span class="font"></span>
                        <input class="input--register" type="text" name="mensaje" placeholder="Déjame tu mensaje" autocomplete="off" required>
                    </div>
                    <button type="submit" name="btn-submit" class="button">Enviar</button>
                </form>
            </section>
        </section>
    </main>

    <!----------------------------------- BOTÓN FLOTANTE Y PIE DE PÁGINA -------------------------------------------->
    <!-- <div class="button_WhatsApp">
        <a href="https://api.whatsapp.com/send?phone=525610284112" target="_blank" rel="noopener">
            <img src="assets/imgs/logo/Whatsapp.png " alt="boton WhatsApp" class="img_whatsapp-home">
        </a>
    </div> -->

    <footer>
        <article class="container_info">
            <h4>
                <span>&copy;</span>
                <span>2020</span>
                <span>Carlos Arturo MT</span>
            </h4>
        </article>
        <article class="container_social">
            <a href="https://www.facebook.com/psic.carlosarturomt" target="_blank " rel="noreferrer"> <span class="facebook"></span>
            </a>
            <a href="https://www.instagram.com/arturo.kennedy/" target="_blank " rel="noreferrer"> <span class="instagram"></span>
            </a>
            <a href="https://github.com/carlosarturomt" target="_blank " rel="noreferrer">
                <span class="github"></span>
            </a>
            <a href="https://www.linkedin.com/in/carlosarturomt/" target="_blank " rel="noreferrer"> <span class="linkedin"></span>
            </a>
        </article>
    </footer>
</body>
<!-- particles -->
<script src="../particles.js"></script>
<script src="js/app.js"></script>
<script src="js/lib/stats.js"></script>
<!-- scripts -->
<script src="js/theme.js "></script>
<script src="js/toggle.js "></script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js " integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj " crossorigin="anonymous "></script>
<script src="https://kit.fontawesome.com/2c36e9b7b1.js " crossorigin="anonymous " aria-label="Dark Theme "></script>

</html>

<?php
    if (isset($_POST['btn-submit'])) {

        $asunto = "Correo desde la web";
        $mensaje = test_input($_POST['mensaje']);
        $numero = test_input($_POST['numero']);
        $nombre = test_input($_POST['nombre']);
        $correo = test_input($_POST['correo']);


        $destino1 = "amiranda@dna3.com.mx";

        $header = "From: web carlosarturomt" . "\r\n";
        $header = "Reply-To: noreply" . "\r\n";
        $header = "X-Mailer: PHP/" . phpversion();

        $carta = "Mensaje: $mensaje \n";
        $carta .= "Tel. de contacto: $numero \n";
        $carta .= "Nombre del contacto: $nombre \n";
        $carta .= "Correo de contacto: $correo \n";

       
        // $mail1 = mail($destino1, $asunto, $carta, $header);
        $mail1 = mail($destino1, $asunto, $carta, $header);

        if ($mail1) {

            echo "<h2>Mensaje enviado, gracias por contactarnos.</h2>";
            echo "<meta http-equiv='refresh' content='3,url=index.html'>";
        } else {
            echo "No se ha podido enviar tu mensaje, intentalo mas tarde";
        }
    }
    function test_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    ?>