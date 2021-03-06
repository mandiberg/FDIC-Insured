<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="vendor/css/normalize.css">
        <link rel="stylesheet" href="vendor/css/main.css">
        <link rel="stylesheet" href="assets/css/main.css">
        <script src="vendor/js/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
				<div id="content">
					<?php require("base.php") ?>
				</div>

				<a id="nextDataFile" href="assets/_datafile_0.json"></a>


        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="vendor/js/jquery-1.10.2.min.js"><\/script>')</script>
				<script type="text/html" id="tmpl-bank">
					<?php require('bank.js.tmpl') ?>
				</script>
				<script type="text/html" id="tmpl-spinner">
					<?php require('spinner.js.tmpl') ?>
				</script>
				<script>
					window.g = {};
					g.constants = {
						SCROLLER: "#main #fdic-banks",
						LOADER_PATH: "assets/img/spinner.gif",
						IMG_DIR: "assets/img",
						DATA_PATH: function(page){
							return "assets/datafile_" + page + ".json"
						},
						ITEM_WIDTH: 272
					};

					g.tmpl = function(name){
						return _.template( 
							$( '#tmpl-' + name ).html(), 
							{variable: 'c'}
						);
					}
				</script>
					

        <script src="vendor/js/underscore.js"></script>
        <script src="vendor/js/plugins.js"></script>
				<script src="vendor/js/infinity.js"></script>
        <script src="assets/js/scroll.js"></script>
        <script src="assets/js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
    </body>
</html>
