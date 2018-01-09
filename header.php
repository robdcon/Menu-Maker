<!doctype html>
<html>
<head>
	<title>Menu Creator</title>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<!--scripts-->
	<!--JQUERY  SCRIPTS-->
	<script type="text/javascript" src="js/plugin-js/jquery-3.1.1.min.js"></script>
	<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>-->
	<!--BOOTSTRAP SCRIPTS-->
	<script type="text/javascript" src="js/plugin-js/bootstrap.min.js"></script>
	<!--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>-->

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

<!--scripts-->
	
	<script src="js/init.js?version=1"></script>
	<script src="js/template.js"></script>
	<script src="js/template-setup.js"></script>
	<script src="js/menu.js"></script>
	<script src="js/menuitem.js"></script>
	<script src="js/dailymenu.js"></script>
	<script src="js/daydate.js"></script>
	<script src="js/ajax.js"></script>
	<script src="js/resultslist.js"></script>
	<script src="js/recipe.js"></script>
	<script src="js/autocreatemenu.js"></script>
	<script src="js/datepicker.js"></script>
	

<!--styles-->
	<!--BOOTSTRAP STYLES-->
	<link rel="stylesheet" type="text/css" href="css/bootstrap/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap/bootstrap-grid.min.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap/tether-theme-arrows-dark.min.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap/tether-theme-arrows-min.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap/tether-theme-basic.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">-->
	
	<link rel="stylesheet" type="text/css" href="css/styles.css" media="screen">
	<link rel="stylesheet" type="text/css" href="css/printstyles.css" media="print">


</head>

<body>

<!--Skip Link Navigation for screen readers-->

<div id="skiplinks-container" tabindex="0" class="hide">
	<ul>
		<li><a href="#main" class="skiplink">main content</a></li> 
		<li><a href="#menucontrols" class="skiplink">menu controls</a></li> 
		<li><a href="#resultslist" class="skiplink">results section</a></li> 
		<li><a href="#menucontrols" class="skiplink">recipes page</a></li>
	</ul>
</div>

	<header role="banner">

		<!-- Collapsible Navigation -->
		<!--Built using Bootstrap Framework-->
	    <nav class="navbar" role="navigation">
		  <div class="container-fluid">
		    <div class="navbar-header">
		      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>                        
		      </button>
		      <a class="navbar-brand" href="#">MenuCreator</a>
		    </div>
		     <div class="collapse navbar-collapse" id="myNavbar">
		      <ul class="nav navbar-nav">
		        <li class="active"><a href="#">Home</a></li>
		        <li><a href="recipecard.php">Recipes</a></li>
		        <li><a href="index.php">Menu</a></li>
		      </ul>
		      <ul class="nav navbar-nav navbar-right">
		      	<?php
						if(isset($_SESSION['username'])) 
						{
							$username = ($_SESSION['username']);
							echo "<li><a  class='login' tabindex='0'>&nbsp;<span class='glyphicon glyphicon-user'></span>&nbsp;$username</a></li>";
							echo "<li><a href='php/logout.php' id='logout' class='logout' tabindex='0'>logout</a></li>";
							
						}
						else 
						{
							echo '<li><a href="register-ui.php"><span class="glyphicon glyphicon-user"></span> Register</a></li>';
		        			echo '<li><a href="login-ui.php"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>';
							echo '<li><a href="login-ui.php"><span>You are not logged in</span></a></li>';
							
						}
					?>
		        
		      </ul>
		    </div>
		  </div>
		</nav>
	</header>

