<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Event Management') }}</title>

        <!-- Fonts -->
        <title>Eventiz - Event Conference HTML Templates</title>
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="frontend/assets/images/favicon.png">
    <!-- Bootstrap core CSS -->
    <link href="frontend/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <!--Custom CSS-->
    <link href="frontend/assets/css/style.css" rel="stylesheet" type="text/css">
    <!--Plugin CSS-->
    <link href="frontend/assets/css/plugin.css" rel="stylesheet" type="text/css">

    <!--Font Awesome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.5.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="frontend/assets/fonts/line-icons.css" type="text/css">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    <!-- *Scripts* -->
     <script src="frontend/assets/js/jquery-3.5.1.min.js"></script>
     <script src="frontend/assets/js/bootstrap.min.js"></script>
     <script src="frontend/assets/js/plugin.js"></script>
     <script src="frontend/assets/frontend/assets/js/main.js"></script>
     <script src="frontend/assets/js/custom-nav.js"></script>
    </body>
</html>
