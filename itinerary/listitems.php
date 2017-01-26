<?php
require "config.php";
$array = array();
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

<title>VBS&trade; | Sales Calendar</title>
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
							<p class="viewCal"><a href="enteritems.php">Enter Information</a></p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
   </section>

	<section id="listItems">
        <div class="container">
		<br />
			<div class="names col-sm-12">
				<form name="filterDB" action="POST">
					<select id="filterName" name="filterName">
						<option value="" disabled selected>Filter by Employee: </option>
						<option id="All" name="name" value="All">All</option>
						<option id="Ralph" name="name" value="Ralph">Ralph</option>
						<option id="Dan" name="name" value="Dan">Dan</option>
						<option id="Brady" name="name" value="Brady">Brady</option>
						<option id="Abby" name="name" value="Abby">Abby</option>
					</select>
				</form>
			</div>

            <div class="col-md-2 col-md-offset-1"><h4 class="titles">Monday</h4><hr />
				<?php
					require "config.php";
					$sql1 = "SELECT * FROM $table WHERE day LIKE 'Monday' ORDER by name ASC";
					foreach($conn->query($sql1) as $row) {
						echo "<span onclick='moreInfo(this)' title='Click for more info'><div class='alert alert-info fade in people " 
						. $row[name] . "'>" 
						. $row[name] . "<br />"
						. $row[acctName]	. "<br /> " .
						"<div class='subText hidden'><hr />" . 
						"Type: "	. $row[acctType]	. "<br />" .
						"Contact: " . $row[contName]	. "<br />" .
						"Loc: "		. $row[location]	. "<br />" .
						"Pros: "	. $row[prospect]	. "<br />" .
						"Notes: "	. $row[notes] . 
						"<a href='editEntry.php?id=" . $row[id] . "'><h3>Edit</h3></a></div>"
						
						
						. "</div></span>";
					}

					if($conn->query($sql1)->rowCount() == 0){
						array_push($array, 0);
					}

					else {
						array_push($array, 1);
					}
				?>

			</div>
            <div class="col-md-2"><h4 class="titles">Tuesday</h4><hr />
				<?php
					require "config.php";
					$sql1 = "SELECT * FROM $table WHERE day LIKE 'Tuesday' ORDER by name ASC";
					foreach($conn->query($sql1) as $row) {
						echo "<span onclick='moreInfo(this)' title='Click for more info'><div class='alert alert-info fade in people " 
						. $row[name] . "'>" 
						. $row[name] . "<br />"
						. $row[acctName]	. "<br /> " .
						"<div class='subText hidden'><hr />" . 
						"Type: "	. $row[acctType]	. "<br />" .
						"Contact: " . $row[contName]	. "<br />" .
						"Loc: "		. $row[location]	. "<br />" .
						"Pros: "	. $row[prospect]	. "<br />" .
						"Notes: "	. $row[notes] . 
						"<a href='editEntry.php?id=" . $row[id] . "'><h3>Edit</h3></a></div>"
						
						
						. "</div></span>";
					}

					if($conn->query($sql1)->rowCount() == 0){
						array_push($array, 0);
					}

					else {
						array_push($array, 1);
					}
				?>

			</div>
            <div class="col-md-2"><h4 class="titles">Wednesday</h4><hr />
				<?php
					require "config.php";
					$sql1 = "SELECT * FROM $table WHERE day LIKE 'Wednesday' ORDER by name ASC";
					foreach($conn->query($sql1) as $row) {
						echo "<span onclick='moreInfo(this)' title='Click for more info'><div class='alert alert-info fade in people " 
						. $row[name] . "'>" 
						. $row[name] . "<br />"
						. $row[acctName]	. "<br /> " .
						"<div class='subText hidden'><hr />" . 
						"Type: "	. $row[acctType]	. "<br />" .
						"Contact: " . $row[contName]	. "<br />" .
						"Loc: "		. $row[location]	. "<br />" .
						"Pros: "	. $row[prospect]	. "<br />" .
						"Notes: "	. $row[notes] . 
						"<a href='editEntry.php?id=" . $row[id] . "'><h3>Edit</h3></a></div>"
						
						
						. "</div></span>";
					}

					if($conn->query($sql1)->rowCount() == 0){
						array_push($array, 0);
					}

					else {
						array_push($array, 1);
					}
				?>

			</div>
            <div class="col-md-2"><h4 class="titles">Thursday</h4><hr />
				<?php
					require "config.php";
					$sql1 = "SELECT * FROM $table WHERE day LIKE 'Thursday' ORDER by name ASC";
					foreach($conn->query($sql1) as $row) {
						echo "<span onclick='moreInfo(this)' title='Click for more info'><div class='alert alert-info fade in people " 
						. $row[name] . "'>" 
						. $row[name] . "<br />"
						. $row[acctName]	. "<br /> " .
						"<div class='subText hidden'><hr />" . 
						"Type: "	. $row[acctType]	. "<br />" .
						"Contact: " . $row[contName]	. "<br />" .
						"Loc: "		. $row[location]	. "<br />" .
						"Pros: "	. $row[prospect]	. "<br />" .
						"Notes: "	. $row[notes] . 
						"<a href='editEntry.php?id=" . $row[id] . "'><h3>Edit</h3></a></div>"
						
						
						. "</div></span>";
					}

					if($conn->query($sql1)->rowCount() == 0){
						array_push($array, 0);
					}

					else {
						array_push($array, 1);
					}
				?>

			</div>
            <div class="col-md-2"><h4 class="titles">Friday</h4><hr />
				<?php
					require "config.php";
					$sql1 = "SELECT * FROM $table WHERE day LIKE 'Friday' ORDER by name ASC";
					foreach($conn->query($sql1) as $row) {
						echo "<span onclick='moreInfo(this)' title='Click for more info'><div class='alert alert-info fade in people " 
						. $row[name] . "'>" 
						. $row[name] . "<br />"
						. $row[acctName]	. "<br /> " .
						"<div class='subText hidden'><hr />" . 
						"Type: "	. $row[acctType]	. "<br />" .
						"Contact: " . $row[contName]	. "<br />" .
						"Loc: "		. $row[location]	. "<br />" .
						"Pros: "	. $row[prospect]	. "<br />" .
						"Notes: "	. $row[notes] . 
						"<a href='editEntry.php?id=" . $row[id] . "'><h3>Edit</h3></a></div>"
						
						
						. "</div></span>";
					}

					if($conn->query($sql1)->rowCount() == 0){
						array_push($array, 0);
					}

					else {
						array_push($array, 1);
					}
				?>

			</div>

            <div class="clearfix"></div>

			<div id="emptyDB" class="hidden alert alert-info fade in">
				<h3>No entries for the week have been submitted yet.</h3>
				<p>If you are seeing this message in error (i.e. there should be data inputted for this week already), please contact your <a href="mailto:webmin@vancouverbolt.com?subject=Empty%20Calendar%20Error">web administrator</a>.</p>
			</div>

			<div id="emptyPerson" class="hidden alert alert-info fade in">
				<h3>There are no entries for <b id="pInsert"></b> this week.</h3>
				<p>If you think you are seeing this message in error, please contact your <a href="mailto:webmin@vancouverbolt.com?subject=Empty%20Calendar%20Error">web administrator</a>.
			</div>

        </div>
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

	<script type="text/javascript" src="../itinerary/view.js"><script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="../js/scrollbarContentFix.js"></script>
    <script type="text/javascript" src="../js/jquery.js"></script>
    <script type="text/javascript" src="../js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../js/lightbox.min.js"></script>
    <script type="text/javascript" src="../js/wow.min.js"></script>
    <script type="text/javascript" src="../js/main.js"></script>   

<?php 
	if ($array[0] == 0 && $array[1] == 0 && $array[2] == 0 && $array[3] == 0 && $array[4] == 0){

		echo '<script type="text/javascript">$("#emptyDB").removeClass("hidden");</script>';
		echo '<script type="text/javascript">$("#filterName").addClass("hidden");</script>';
	}
	
	else {

	}
?>

</body>
</html>