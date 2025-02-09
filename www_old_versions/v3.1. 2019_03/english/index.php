<?php
  $section = 'home';
  include ('./settings.php');
?>
<!DOCTYPE html>
<meta charset="utf-8">

<head>

	<title><?php echo $curPage['pageTitle']; ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="<?php echo $curPage['pageMeta']; ?>" />
	<meta name="author" content="Constance Lecomte & Aurélie Douet">

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-52XSNMZ');</script>
    <!-- End Google Tag Manager -->

	<script src="scripts/d3.v3.min.js"></script>

	<link rel="icon" href="/pictos/favicon.png">
	<link rel="stylesheet" href="https://cdn.rawgit.com/Chalarangelo/mini.css/v3.0.1/dist/mini-default.min.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="/styles/style.css">
    <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css" />

    <meta property="og:locale" content="en_EN" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="<?php echo $curPage['pageTitle']; ?>" />
    <meta property="og:description" content="<?php echo $curPage['pageMeta']; ?><?php echo $curPage['pageMeta']; ?>" />
    <meta property="og:url" content="https://mobiliscope.parisgeo.cnrs.fr" />
    <meta property="og:site_name" content="Mobiliscope" />
    <meta property="og:image" content="http://mobiliscope.parisgeo.cnrs.fr/pictos/mobiliscope-fb.png" />
    <meta property="og:image:secure_url" content="https://mobiliscope.parisgeo.cnrs.fr/pictos/mobiliscope-fb.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="<?php echo $curPage['pageTitle']; ?>" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="<?php echo $curPage['pageTitle']; ?>" />
    <meta name="twitter:description" content="<?php echo $curPage['pageMeta']; ?>" />
    <meta name="twitter:image" content="https://mobiliscope.parisgeo.cnrs.fr/pictos/mobiliscope-tw.png" />


</head>

<body lang="<?php echo $language; ?>">
<?php
  include ('./topbar.php');
?>

<div class="home container">
    <div class="row sectionTitle section" >
    	<div class="col-sm-12 col-md-12">
    			<section>
    				<h1>Cities around the clock !</h1>
                    <div class="greySeparator"></div>
					<h4>Cities are not static. People move daily to go working, studying, shopping, playing etc.</br>
					Mobiliscope is a geovisualization platform to explore how cities, neighborhoods and social segregation change throughout the day.</h4>
    			</section>
    	</div>
	</div>


     <div class="row picto-raw section">
    	<div class="col-sm-6 col-md-3 col-lg-2 col-lg-offset-2">
			<i class="fas fa-shoe-prints"></i>
    		<h4>1&nbsp;000&nbsp;000 daily trips</h4>
    	</div>
    	<div class="col-sm-6 col-md-3 col-lg-2">
    		<i class="fas fa-users"></i>
    		<h4>224&nbsp;000 people</h4>
    	</div>
    	<div class="col-sm-6 col-md-3 col-lg-2">
    		<i class="fas fa-map-marked-alt"></i>
    		<h4>22 city regions</h4>
    	</div>
    	<div class="col-sm-6 col-md-3 col-lg-2">
    		<i class="far fa-clock"></i>
    		<h4>24 hours</h4>
    	</div>
    </div>

    <div class="row sectionTitle section fullWidth" >
        <div class="col-sm-12 col-md-7 sectionSearch">
            <span class="sectionSearchText"><i class="fas fa-search"></i>Choose your city region</span>
            <input placeholder="Enter a city name in France.."type="search" id="search-bar" class = "typeahead">

            <div class="sectionSearchSubText">
                <p>Issued from <a href="/en/info/methods/datas">large public transportation surveys</a>
                and processed by a French <a href="/en/info/about/team">public research laboratory</a>,
                daily people's locations have been implemented into the Mobiliscope plaform
                to make urban science more accessible to large public.</p>
                <figure class="inline">
                    <img src="/logos/cnrs.png" alt="cnrs" width="50"/>
                </figure>
            </div>
        </div>
        <div class="col-sm-12 col-md-5">
            <div id="map-container"> <div id="loader"><div class="spinner tertiary"></div></div></div>
        </div>
    </div>


    <div class = "row sectionTitle section">
    	<div class="col-sm-12 col-md-12">
			<section>
				<h2>List of french city regions</h2>
                <div class="greySeparator"></div>
			</section>
		</div>
	</div>


    <div class = "row sectionCities">

        <?php
            $len = sizeof($cities);
            $numpercol = (int) ($len / 4) + 1;

            for($i = 0; $i < 4; $i++){
                echo "<div class='col-sm-6 col-md-3 '><section>";
                    echo "<ul>";
                    for($j = 0; $j < $numpercol; $j++){
                        $theCity = !empty(array_values($cities)[$numpercol*$i+$j]) ? array_values($cities)[$numpercol*$i+$j] : '';
                        $citiesSlugs = array_keys($cities);
                        if(!empty($theCity))
                            echo "<li><a href='/" . $language . '/geoviz/' . $citiesSlugs[$numpercol*$i+$j] . "'>" . array_values($cities)[$numpercol*$i+$j] . "</a></li>  ";
                    }

                    echo "</ul><br>";
                echo "</section></div>";
            }
        ?>

    </div>

    <div class = "row">
        <div class="sectionSpacerSmall">
        </div>
    </div>

</div>

<?php include('./footer.php'); ?>

<script type="text/javascript" charset="utf-8" src="scripts/jquery.min.js"></script>
<script type="text/javascript" src="/scripts/typeahead.bundle.min.js"></script>
<script type="text/javascript" src="/scripts/menu.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js"></script>
<script>

//Geoviz
function printMap(){
    var width = 1066,
    height = 830;

    var projection =  d3.geo.mercator()
            .center([2, 46.3])
            .scale(3000)
            .translate([width / 2, height / 2]);

    var path = d3.geo.path()
            .projection(projection);

    var svg = d3.select("#map-container").append("svg")
            .attr("id", "svg")
            .attr("width", width/1.2)
            .attr("height", height/1.2)
            .classed("svg-container", true)
            .attr("viewBox", "180 0 700 780")
            .classed("svg-content-responsive", true);

    // var europe = svg.append("g");
    var franceDep = svg.append("g");
    var ed = svg.append("g");
    var edPtBis = svg.append("g");
    var edPt = svg.append("g");

    var infoBulle = d3.select("#map-container").append("div")
        .attr("class", "infoBulle")
        .style("opacity", 0);

    var source = d3.select("#map-container").append("div")
        .html("<h6>Source: CEREMA</h6>");

    function format(nbr) {
        var nombre = ''+nbr;
        var retour = '';
        var count=0;
        for(var i=nombre.length-1 ; i>=0 ; i--)
        {
            if(count!=0 && count % 3 == 0)
                retour = nombre[i]+','+retour ;
            else
                retour = nombre[i]+retour ;
            count++;
        }
        return retour;
    }



    franceDep.selectAll("path")
        .data(depJson.features)
        .enter()
        .append("path")
        .attr("d", path)
        .style("fill", " #cfcfcf")
        .style("stroke", "white")
        .style("stroke-width", 0.4);



    ed.selectAll("path")
        .data(ed22Json.features)
        .enter()
        .append("path")
        .attr("d", path)
        .style("fill", "#e29424")
        .style("fill-opacity", 0.2);



    edPtBis.selectAll(".centroid")
        .data(edpt22Json.features)
        .enter()
        .append("circle")
        .attr("class", "centroid")
        .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
        .attr("r", 8 + "px")
        .style("fill", "none")
        .style("stroke", "#e29424")
        .style("stroke-width", 4);



    edPt.selectAll(".centroid")
        .data(edpt22Json.features)
        .enter()
        .append("circle")
        .attr("class", "centroid")
        .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
        .attr("r", 8 + "px")
        .style("fill", "#e29424")
        .style("stroke", "white")
        .style("stroke-width", 2)
        .on("mouseover", function(d) {
            d3.select(this).attr("r", 10 + "px");
            d3.select(this).style({"cursor" : "pointer"}) ;
            infoBulle.transition()
                .duration(100)
                .style("opacity", .8);
            infoBulle.html("<span style = 'font-family: JBold; font-size: 1.5em; line-height: 1em;'>"
                            + d.properties.NAME_ED + "</span><br/>" + "(" + d.properties.DATE_ED + ")<br/>"
                            + format(d.properties.nbrespondent) + " respondents")
                .style("top", (d3.event.layerY - 30) + "px")
                .style("position", "absolute")
                .style("background-color", "white")
                .style("display", "block")
                .style("width", "auto")
                .style("left", (d3.event.layerX - d3.select(".infoBulle").node().getBoundingClientRect().width) - 20 + "px");
            })
        .on("mouseout", function(d) {
            d3.select(this).attr("r", 8 + "px");
            infoBulle.transition()
                .duration(500)
                .style("opacity", 0 );
        })
        .on("click", function(d){
            var enq = d.properties.enquete;
            if(enq == "ALBI"){
                document.location.href = "/en/geoviz/albi"
            }
            if(enq == "ANGERS"){
                document.location.href = "/en/geoviz/angers"
            }
            if(enq == "ANGOULEME"){
                document.location.href = "/en/geoviz/angouleme"
            }
            if(enq == "BEZIERS"){
                document.location.href = "/en/geoviz/beziers"
            }
            if(enq == "BORDEAUX"){
                document.location.href = "/en/geoviz/bordeaux"
            }
            if(enq == "CAEN"){
                document.location.href = "/en/geoviz/caen"
            }
            if(enq == "CLERMONT FERRAND"){
                document.location.href = "/en/geoviz/clermont-ferrand"
            }
            if(enq == "GRENOBLE"){
                document.location.href = "/en/geoviz/grenoble"
            }
            if(enq == "LA ROCHELLE"){
                document.location.href = "/en/geoviz/la-rochelle"
            }
            if(enq == "LILLE"){
                document.location.href = "/en/geoviz/lille"
            }
            if(enq == "LYON"){
                document.location.href = "/en/geoviz/lyon"
            }
            if(enq == "MARSEILLE"){
                document.location.href = "/en/geoviz/marseille"
            }
            if(enq == "MONTPELLIER"){
                document.location.href = "/en/geoviz/montpellier"
            }
            if(enq == "NANCY"){
                document.location.href = "/en/geoviz/nancy"
            }
            if(enq == "NANTES"){
                document.location.href = "/en/geoviz/nantes"
            }
            if(enq == "NICE"){
                document.location.href = "/en/geoviz/nice"
            }
            if(enq == "IDF"){
                document.location.href = "/en/geoviz/idf"
            }
            if(enq == "QUIMPER"){
                document.location.href = "/en/geoviz/quimper"
            }
            if(enq == "RENNES"){
                document.location.href = "/en/geoviz/rennes"
            }
            if(enq == "SAINT ETIENNE"){
                document.location.href = "/en/geoviz/saint-etienne"
            }
            if(enq == "STRASBOURG"){
                document.location.href = "/en/geoviz/strasbourg"
            }
            if(enq == "TOULOUSE"){
                document.location.href = "/en/geoviz/toulouse"
            }
            if(enq == "VALENCIENNES"){
                document.location.href = "/en/geoviz/valenciennes"
            }
        });



        $('#loader').hide();

    }


</script>

</body>

</html>
