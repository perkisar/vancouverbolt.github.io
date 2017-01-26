<?php
require "config.php";
?>

<html>

<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Home | VBS&trade;</title>
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/font-awesome.min.css" rel="stylesheet">
    <link href="../css/animate.min.css" rel="stylesheet"> 
    <link href="../css/lightbox.css" rel="stylesheet"> 
	<link href="../css/main.css" rel="stylesheet">
	<link href="../css/responsive.css" rel="stylesheet">
    <link href="../css/entryForm.css" rel="stylesheet">
	<link rel="shortcut icon" href="images/ico/favicon.ico">

<title>VBS&trade; | Sales Entry Form</title>
</head>
<body>
<header id="header">      
        <div class="navbar navbar-inverse" role="banner">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <a class="navbar-brand" href="index.html">
                    	<h1><img class="logo" src="../images/logo/vbs-bolt.png" alt="logo"></h1>
                    </a>
                    
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="active"><a href="../index.html">Home</a></li>
                        <li><a href="../directory.html">Directory</a></li>  
                        <li class="dropdown">
                            <a href="../benefits.html">Benefits <i class="fa fa-angle-down"></i></a>
                            <ul role="menu" class="sub-menu">
                                <li><a target="_blank" href="https://paychecks.intuit.com/">View My Paycheck</a></li>
                                <li><a target="_self" href="../401k/">401K Empowerment</a></li>
                                <li><a target="_blank" href="https://www.myuhc.com/">Medical Insurance</a></li>
                                <li><a target="_blank" href="https://www.metlife.com/">Dental Insurance</a></li>
                                <li><a href="../vision/">Vision Insurance</a></li>
                            </ul>
                        </li>  
                        <li class="dropdown">
                            <a href="../resources/resources.html">Resources <i class="fa fa-angle-down"></i></a>
                            <ul role="menu" class="sub-menu">
                                <li><a  href="../resources/employeeManual.html">Employee Manual</a></li>
                                <li><a target="_blank" href="http://hr.vancouverbolt.int/orangehrm-3.3.1/">Timeclock (IN/OUT)</a></li>
                                <li><a target="_self" href="../itinerary/index.html"> Sales Itinerary</a></li>
                            </ul>
                        </li>  
                        <li class="dropdown"><a href="../videos.html">Training Videos</a></li>  
                         
                    </ul>
                </div>
            </div>
        </div>
    </header>

	<section id="page-breadcrumb">
        <div class="vertical-center sun">
             <div class="container">
                <div class="row">
                    <div class="action">
                        <div class="col-sm-12">
                            <h1 class="title">VBS Sales Itinerary Entry Form</h1>
                            <p>Entry form for members of the outside sales team to input their activities.</p>
							<p class="viewCal"><a href="listitems.php">View Calendar</a></p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
   </section>

	<section id="entryForm">
        <div class="container">
            <form action="" method="POST">
                <div class="col-md-6">
                    <select required id="name" name="name">
                        <option value="" disabled selected>Select Your Name: </option>
                        <option id="Ralph" name="name" value="Ralph">Ralph</option>
                        <option id="Dan" name="name" value="Dan">Dan</option>
                        <option id="Brady" name="name" value="Brady">Brady</option>
                        <option id="Abby" name="name" value="Abby">Abby</option>
                    </select><br />
                    <select required id="day" name="day">
                        <option value="" disabled selected>Day of the Week: </option>
                        <option id="mon" name="day" value="Monday">Monday</option>
                        <option id="tue" name="day" value="Tuesday">Tuesday</option>
                        <option id="wed" name="day" value="Wednesday">Wednesday</option>
                        <option id="thur" name="day" value="Thursday">Thursday</option>
                        <option id="fri" name="day" value="Friday">Friday</option>
                    </select><br />
                    <select required id="acctType" name="acctType">
                        <option value="" disabled selected>Account Type: </option>
                        <option id="coldCall" name="acctType" value="Cold Call">Cold Call/Prospect</option>
                        <option id="existAcct" name="acctType" value="Existing Account">Existing Account</option>
                    </select><br />

                    <input required type="text" id="acctName" name="acctName" placeholder="Account Name" /><br />
                    <input required type="text" id="contName" name="contName" placeholder="Contact Name" /><br />
                </div>
                
                <div class="col-md-6">
                    <input required type="text" id="location" name="location" placeholder="Location" /><br />
                    <textarea type="text" id="notes" name="notes" placeholder="Notes (optional)..."></textarea>
                </div>

                <div class="col-xs-12">
					<div id="incomplete" class="alert alert-danger fade in hidden">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">x</button>
                        <h4>Incomplete Entry!</h4>
                        <p>All inputs are required (not including the notes). Please ensure that your form is completely filled out. If you are still having issues, please <a href="mailto:sarah@vancouverbolt.com"><u>contact your web administrator</u></a><br/></p>
                    </div>
                    <input class="btn btn-primary" id="doit" type="submit" name="Submit" value="Submit">
                    <div id="entrySuccess" class="alert alert-success fade in hidden">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">x</button>
                        <h4>Entry Added Successfully</h4>
                        <p>Add another, <a href="listitems.php"><u>view the calendar</u></a>, or you can now safely exit the browser if you're done.</p>
                    </div>
                    <div id="entryFailure" class="alert alert-danger fade in hidden">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">x</button>
                        <h4>Oh Snap!</h4>
                        <p>Something went wrong. Please refresh the page to try again. If the problem persists, please <a href="mailto:sarah@vancouverbolt.com"><u>contact your web administrator</u></a>.</p>
                    </div>
					
                </div>
            </form>
        </div><br />
    </section>

<footer id="footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center bottom-separator">
                    <img src="../images/home/under.png" class="img-responsive inline" alt="">
                </div>
                <div class="col-sm-12">
                    <div class="copyright-text text-center">
                        <p>&copy; Vancouver Bolt and Supply, Inc. 2016 All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
</footer>
<!--/#footer-->

	<script type="text/javascript" src="../itinerary/entry.js"><script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="../js/scrollbarContentFix.js"></script>
    <script type="text/javascript" src="../js/jquery.js"></script>
    <script type="text/javascript" src="../js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../js/lightbox.min.js"></script>
    <script type="text/javascript" src="../js/wow.min.js"></script>
    <script type="text/javascript" src="../js/main.js"></script>   

<?php

if(isset($_POST['Submit'])) {


$name = $_POST["name"];
$day = $_POST["day"];
$acctType = $_POST["acctType"];
$acctName = $_POST["acctName"];
$contName = $_POST["contName"];
$location = $_POST["location"];
$prospect = $_POST["prospect"];
$notes = $_POST["notes"];

if (empty($_POST["notes"])) {
    $order = "INSERT INTO $table (name, day, acctType, acctName, location, notes, contName) VALUES ('$name', '$day', '$acctType', '$acctName', '$location', NULL, '$contName')";
}

else {
	$order = "INSERT INTO $table (name, day, acctType, acctName, location, notes, contName) VALUES ('$name', '$day', '$acctType', '$acctName', '$location', '$notes', '$contName')";
}


$stmt = $conn->prepare($order);
$stmt->execute();

if($stmt->rowCount() == 1){
	echo '<script type="text/javascript">$("#entrySuccess").removeClass("hidden");</script>';
}

else {
	echo '<script type="text/javascript">$("#entryFailure").removeClass("hidden");</script>';
}

}
?>

</body>
</html>