// Indicators

$(document).mouseup(function (e)
{

var container = $("#popup");

if (!container.is(e.target) // if the target of the click isn't the container...
    && container.has(e.target).length === 0) // ... nor a descendant of the container
{
    container.css("display", "none") ;
		$(".popup-container").css("display", "none") ;
}
});

// Whole population
function popup_pop0(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Población total</h3><p>La <span style='color:" + gammePop[0] + "'><strong>población total</strong></span> se refiere a todas las personas de 16 años o más</b>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// Resident population
function popup_respop(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Residentes/No residentes</h3><p>La población presente se ha dividido en dos categorías en función de la localización de su domicilio: <ul><li>personas <span style='color:" + gammeRespop[1] + "'><strong>residentes</strong></span> del sector ;</li><li>personas <span style='color:" + gammeRespop[0] + "'><strong>no residentes</strong></span> del sector.</li>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// DEMO PROFILE - Age groups
function popup_age(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Grupo de edad</h3><p>Se consideran cuatro grupos de edad: <span style='color:" + gammeAge[0] + "'><strong>16-24 años</strong></span> ; <span style='color:" + gammeAge[1] + "'><strong>25-34 años</strong></span> ; <span style='color:" + gammeAge[2] + "'><strong>35-64 años</strong></span> et <span style='color:" + gammeAge[3] + "'><strong>65 años o más</strong></span>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}
function popup_age_ca(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Grupo de edad</h3><p>Se consideran cuatro grupos de edad: <span style='color:" + gammeAge[0] + "'><strong>15-24 años</strong></span> ; <span style='color:" + gammeAge[1] + "'><strong>25-34 años</strong></span> ; <span style='color:" + gammeAge[2] + "'><strong>35-64 años</strong></span> et <span style='color:" + gammeAge[3] + "'><strong>65 años o más</strong></span>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_ageb(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Groupes d'âge</h3><p>Se consideran cuatro grupos de edad: <span style='color:" + gammeAge[0] + "'><strong>16-25 años</strong></span> ; <span style='color:" + gammeAge[1] + "'><strong>26-40 años</strong></span> ; <span style='color:" + gammeAge[2] + "'><strong>41-60 años</strong></span> et <span style='color:" + gammeAge[3] + "'><strong>61 años o más</strong></span>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// DEMO PROFILE - sex
function popup_sex(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Sexo</h3><p><span style='color:" + gammeSex[1] + "'><strong>Mujeres</strong></span> y <span style='color:" + gammeSex[0] + "'><strong>hombres</strong></span>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// DEMO PROFILE - composition ménage
function popup_strm(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Composición del hogar</h3><p>Se han definido 5 tipos de hogares según la presencia o ausencia de niños. Para nuestra clasificación, consideramos '<b>niños</b>' a los menores de 16 años y '<b>adultos</b>' a las personas de 16 años o más:<ul><li><span style='color:" + 
		gammeStrm[4] + 
		"'><strong>Hogar compuesto con niño</strong></span>: hogares formados por uno o más adultos con niño(s), en los que al menos uno de los miembros no es miembro del núcleo familiar (que no sean los padres/hijos) ;</li><li><span style='color:" + 
		gammeStrm[3] + 
		"'><strong>Familia con niño</strong></span>: hogares de uno o dos padres con hijo(s) ;</li><li><span style='color:" + 
		gammeStrm[2] +
		"'><strong>Hogar compuesto sin niño</strong></span>: hogares formados únicamente por adultos con al menos un miembro fuera del núcleo familiar (que no sean los padres/hijos) ;</li><li><span style='color:" + 
		gammeStrm[1] +
		"'><strong>Familia sin niño</strong></span>: hogares formados únicamente por adultos con una relación de 1ro grado (pareja sin hijo, pareja/monoparental con hijo(s) de 16 años o más) ;</li><li><span style='color:" + 
		gammeStrm[0] + 
		"'><strong>Hogar de una persona sola</strong></span>.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// DEMO PROFILE - Composition du ménage - France
function popup_strmfr(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Composición del hogar</h3><p>Se han definido 4 tipos de hogares según la presencia o ausencia de niños. Para nuestra clasificación, consideramos '<b>niños</b>' a los menores de 16 años y '<b>adultos</b>' a las personas de 16 años o más:<ul><li><span style='color:" + 
		gammeStrmfr[3] + 
		"'><strong>Hogar con niño</strong></span>: hogar compuesto por uno o más adultos con niño(s). Los miembros del hogar no son necesariamente parientes ;</li><li><span style='color:" + 
		gammeStrmfr[2] +
		"'><strong>Hogar (excepto pareja) sin niño</strong></span>: hogar compuesto únicamente por adultos. Esta categoría incluye a las familias nucleares (uno o dos padres con hijo(s) mayor(es) de 16 años), los hogares extensos o compuestos en las que todos los miembros son adultos, los compañeros de piso, etc ;</li><li><span style='color:" + 
		gammeStrmfr[1] +
		"'><strong>pareja sin niño</strong></span>: hogar de dos adultos que conviven como pareja ;</li><li><span style='color:" + 
		gammeStrmfr[0] + 
		"'><strong>Hogar de una persona sola</strong></span>.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}


// DEMO PROFILE - Composition du ménage - Québec
function popup_strmqc(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Composición del hogar</h3><p>Se han definido 3 tipos de hogares según la presencia o ausencia de niños. Para nuestra clasificación, consideramos '<b>niños</b>' a los menores de 15 años y '<b>adultos</b>' a las personas de 15 años o más:<ul><li><span style='color:" + 
		gammeStrmqc[2] +
		"'><strong>Hogar con niño</strong></span>: hogar formado por uno o más adultos con niño(s). Los miembros del hogar no son necesariamente parientes ;</li><li><span style='color:" + 
		gammeStrmqc[1] +
		"'><strong>Hogar sin niño</strong></span>: hogar compuesto únicamente por adultos. Esta categoría incluye a las familias nucleares (pareja, uno o dos parientes con hijo(s) de 15 años o más), los hogares extensos o compuestos en las que todos los miembros son adultos, los compañeros de piso... ;</li><li><span style='color:" + 
		gammeStrmqc[0] + 
		"'><strong>Hogar de una persona sola</strong></span>.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - individual educational level
function popup_cleduc(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Nivel educativo</h3><p>Sobre la base del último título obtenido declarado por los encuestados, distinguimos cuatro niveles de educación</strong>:<ul><li><span style='color:" + gammeSP[0] + "'><strong>Bajo</strong></span> (<i>collège</i> o menos) ;</li><li><span style='color:" + gammeSP[1] + "'><strong>Medio</strong></span> (secundaria, enseñanzas medias sin <i>Baccalauréat</i>) ;</li><li><span style='color:" + gammeSP[2] + "'><strong>Alto</strong></span> (hasta 2 años más a partir del <i>Baccalauréat</i>) ;</li><li><span style='color:" + gammeSP[3] + "'><strong>Muy alto</strong></span> (3 años y más a partir del <i>Baccalauréat</i>).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

function popup_cleduc_as(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Nivel educativo</h3><p>Basándonos en el nivel máximo de educación alcanzado según los encuestados, distinguimos cuatro <strong>niveles de educación</strong>:<ul><li><span style='color:" + gammeSP[0] + "'><strong>Bajo</strong></span>: menos de 9 años de estudios (sin educación hasta primaria completa) ;</li><li><span style='color:" + gammeSP[1] + "'><strong>Medio</strong></span>: entre 9 y 11 años de estudios (educación secundaria completa o incompleta) ;</li><li><span style='color:" + gammeSP[2] + "'><strong>Alto</strong></span>: entre 12 y 15 años de estudios (educación superior técnica/tecnológica completa o incompleta, educación universitaria incompleta) ;</li><li><span style='color:" + gammeSP[3] + "'><strong>Muy alto</strong></span>: al menos 16 años de estudios (educación universitaria completa, estudios de postgrado).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - household educational level
function popup_educmen(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Nivel educativo del hogar</h3><p>Basándonos en el último título obtenido declarado por los encuestados, asignamos el <strong>nivel educativo más bajo del hogar</strong> a todos los adultos del hogar.</br> Distinguimos cuatro grupos: <ul><li><span style='color:" + gammeSP[0] + "'><strong>Bajo</strong></span> (<i>collège</i> o menos) ;</li><li><span style='color:" + gammeSP[1] + "'><strong>Medio</strong></span> (secundaria, enseñanzas medias sin <i>Baccalauréat</i>) ;</li><li><span style='color:" + gammeSP[2] + "'><strong>Alto</strong></span> (hasta 2 años más a partir del <i>Baccalauréat</i>) ;</li><li><span style='color:" + gammeSP[3] + "'><strong>Muy alto</strong></span> (3 años y más a partir del <i>Baccalauréat</i>).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

function popup_educmen_as(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Nivel educativo del hogar</h3><p>Basándonos en el último título obtenido declarado por los encuestados, asignamos el <strong>nivel educativo más alto del hogar</strong> a todos los adultos del hogar.</br> Distinguimos cuatro grupos:<ul><li><span style='color:" + gammeSP[0] + "'><strong>Bajo</strong></span>: menos de 9 años de estudios (sin educación hasta primaria completa) ;</li><li><span style='color:" + gammeSP[1] + "'><strong>Medio</strong></span>: entre 9 y 11 años de estudios (educación secundaria completa o incompleta) ;</li><li><span style='color:" + gammeSP[2] + "'><strong>Alto</strong></span>: entre 12 y 15 años de estudios (educación superior técnica/tecnológica completa o incompleta, educación universitaria incompleta) ;</li><li><span style='color:" + gammeSP[3] + "'><strong>Muy alto</strong></span>: al menos 16 años de estudios (educación universitaria completa, estudios de postgrado).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - Household income
function popup_rev_idf(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Ingresos del hogar</h3><p>Los <strong>ingresos</strong> mensuales de los miembros del hogar se dividieron por el número de adultos y niños del hogar para obtener los ingresos del hogar por unidad de consumo (UC).</br>Se distinguen cuatro clases de ingresos mensuales:<ul><li><span style='color:" + gammeRev_fr[0] + "'><strong>Bajos</strong></span> (<1084€/UC);</li><li><span style='color:" + gammeRev_fr[1] + "'><strong>Medios-bajos</strong></span> (1084-1806€/UC);</li><li><span style='color:" + gammeRev_fr[2] + "'><strong>Medios-altos</strong></span> (1806-2890€/UC);</li><li><span style='color:" + gammeRev_fr[3] + "'><strong>Altos</strong></span> (>2890€/UC).</li></ul><p>Estos intervalos se han definido en función de los ingresos medianos en Île-de-France, que equivale a 1806€/UC en 2010: el primer unmbral (1084€/UC) o \"umbral de pobreza\" corresponde al 60% de los ingresos medianos; el segundo (1806€/UC) corresponde a los ingresos medianos; el tercero (2890€/UC) corresponde al 160% de los ingresos medianos.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_rev_can(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Ingresos del hogar</h3><p>Los <strong>ingresos</strong> anuales de los miembros del hogar se dividieron por el número de adultos y niños del hogar. Se distinguen cinco clases de ingresos mensuales:<ul><li><span style='color:" + gammeRev_can[1] + "'><strong>Bajos</strong></span> (<19669$/año) ;</li><li><span style='color:" + gammeRev_can[2] + "'><strong>Medios-bajos</strong></span> (19669-39337$/año) ;</li><li><span style='color:" + gammeRev_can[3] + "'><strong>Medios-altos</strong></span> (39337-68840$/año) ;</li><li><span style='color:" + gammeRev_can[4] + "'><strong>Altos</strong></span> (>68840$/año) ;</li><li><span style='color:" + gammeRev_can[0] + "'><strong>No informa</strong></span> (no rellenados por los encuestados);</li></ul><p>Estos intervalos se han definido en función de los ingresos medianos en Quebec para un hogar unipersonal, que equivalen a 39337 $/año en 2015: el primer umbral (19669 $/año) o \"Medida de bajos ingresos\" corresponde al 50% de los ingresos medianos; el segundo (39337 $/año) corresponde a los ingresos medianos; el tercero (68840 $/año) corresponde al 175% de los ingresos medianos.</p> <p>El primer umbral (19669 $/año) corresponde al 50% de los ingresos medianos.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
 }

 function popup_rev_bo(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Ingresos del hogar</h3><p>Los <strong>ingresos</strong> mensuales de los miembros del hogar se dividieron por el número de adultos y niños del hogar para obtener los ingresos del hogar por unidad de consumo (UC).</br>Se distinguen cinco clases de ingresos mensuales:<ul><li><span style='color:" + gammeRev_as[0] + "'><strong>Muy bajos</strong></span> (< $414 000/UC)</li><li><span style='color:" + gammeRev_as[1] + "'><strong>Bajos</strong></span> ($414 000-$827 999/UC)</li><li><span style='color:" + gammeRev_as[2] + "'><strong>Medios</strong></span> ($828 000-$1 655 999/UC)</li><li><span style='color:" + gammeRev_as[3] + "'><strong>Altos</strong></span> ($1 656 000-3 311 999/UC)</li><li><span style='color:" + gammeRev_as[4] + "'><strong>Muy altos</strong></span> (>= $3 312 000/UC)</li></ul><p>Estos intervalos se han definido en función del salario mínimo nacional (SMN) en Colombia, que equivale a 828.000 pesos en 2019 (220 euros): el primer umbral ($414.000) corresponde a 0,5 SMN; el segundo umbral ($828.000) corresponde al salario mínimo; el tercer umbral ($1656.000) corresponde a 2 SMN; el cuarto umbral ($3312.000) corresponde a 4 SMN.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_rev_sa(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Ingresos del hogar</h3><p>Los <strong>ingresos</strong> mensuales de los miembros del hogar se dividieron por el número de adultos y niños del hogar para obtener los ingresos del hogar por unidad de consumo (UC).</br>Se distinguen cinco clases de ingresos mensuales:<ul><li><span style='color:" + gammeRev_as[0] + "'><strong>Muy bajos</strong></span> (< $187 500/UC)</li><li><span style='color:" + gammeRev_as[1] + "'><strong>Bajos</strong></span> ($187 500-$281 249/UC)</li><li><span style='color:" + gammeRev_as[2] + "'><strong>Medios</strong></span> ($281 250-$374 999/UC)</li><li><span style='color:" + gammeRev_as[3] + "'><strong>Altos</strong></span> ($375 000-$562 499/UC)</li><li><span style='color:" + gammeRev_as[4] + "'><strong>Muy altos</strong></span> (>= $562 500/UC)</li></ul><p>Estos intervalos se han definido en función del salario mínimo nacional (SMN) en Chile, que equivale a 187 500 pesos en 2012 (278 euros): el primer umbral ($187500) corresponde al SMN ; el segundo umbral ($281250) corresponde a 1,5 SMN ; el tercer umbral ($375000) corresponde a 2 SMN ; el cuarto umbral ($562500) corresponde a 3 SMN.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_rev_sp(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Ingresos del hogar</h3><p>Los <strong>ingresos</strong> mensuales de los miembros del hogar se dividieron por el número de adultos y niños del hogar para obtener los ingresos del hogar por unidad de consumo (UC).</br>Se distinguen cinco clases de ingresos mensuales:<ul><li><span style='color:" + gammeRev_as[0] + "'><strong>Muy bajos</strong></span> (< 937R$/UC)</li><li><span style='color:" + gammeRev_as[1] + "'><strong>Bajos</strong></span> (937R$-1 873R$/UC)</li><li><span style='color:" + gammeRev_as[2] + "'><strong>Medios</strong></span> (1 874R$-2 810R$/UC)</li><li><span style='color:" + gammeRev_as[3] + "'><strong>Altos</strong></span> (2 811R$-4 684R$/UC)</li><li><span style='color:" + gammeRev_as[4] + "'><strong>Muy altos</strong></span> (>= 4 685R$/UC)</li></ul><p>Estos intervalos se han definido en función del salario mínimo nacional (SMN) en Brasil, que equivale a 937 reais en 2017 (273 euros): el primer umbral (937R$) corresponde al SMN ; el segundo umbral (1874R$) corresponde a 2 SMN ; el tercer umbral (2811R$) corresponde a 3 SMN ; el cuarto umbral (4685R$) corresponde a 5 SMN.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// SOCIAL PROFILE - individual socioprofessional status
function popup_cs(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Categoría socioprofesional (CSP) individual</h3><p>La población se ha dividido en cinco grupos según su <strong>CSP</strong>:<ul><li><span style='color:" + 
		gammeCs[0] + "'><strong>Inactivos</strong></span> (desempleado de larga duración, amo de casa) ;</li><li><span style='color:" + 
		gammeCs[1] + "'><strong>Obreros</strong></span> ;</li><li><span style='color:" + 
		gammeCs[2] + "'><strong>Empleados</strong></span> ;</li><li><span style='color:" + 
		gammeCs[3] + "'><strong>Categorías intermedias</strong></span> (ocupaciones intermedias, artesanos, comerciantes y empresarios con más de diez empleados, agricultores);</li><li><span style='color:" + 
		gammeCs[4] + "'><strong>Directivos y profesionales</strong></span>.</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - CSO
function popup_cso(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Categoría socio-ocupacional (CSO) de los activos</h3><p>La población activa con empleo se ha dividido en cuatro grupos según el tipo de trabajo declarado:<ul><li><span style='color:" + gammeCso[0] + "'><strong>Trabajadores no cualificados</strong></span></li><li><span style='color:" + gammeCso[1] + "'><strong>Trabajadores cualificados</strong></span></li><li><span style='color:" + gammeCso[2] + "'><strong>Independientes</strong></span></li><li><span style='color:" + gammeCso[3] + "'><strong>Directivos y profesionales</strong></span></li></ul><p>Cuando el tipo de empleo declarado no permitía determinar con precisión el grupo socio-ocupacional al que pertenecía el encuestado (en particular la separación entre trabajadores cualificados y no cualificados), se utilizó el sector económico de la empresa empleadora y el nivel educativo de los encuestados.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - household socioprofessional status
function popup_cspmen(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Categoría socioprofesional (CSP) del hogar</h3><p>Se ha definido sobre la base de la <strong>categoría socioprofesional más baja</strong> de los adultos del hogar. Se ha clasificado en cinco grupos:</p><ul><li><span style='color:" + 
		gammeCs[0] + "'><strong>Inactivos</strong></span> (desempleado de larga duración, amo de casa) ;</li><li><span style='color:" + 
		gammeCs[1] + "'><strong>Obreros</strong></span> ;</li><li><span style='color:" + 
		gammeCs[2] + "'><strong>Empleados</strong></span> ;</li><li><span style='color:" + 
		gammeCs[3] + "'><strong>Categorías intermedias</strong></span> (ocupaciones intermedias, artesanos, comerciantes y empresarios con más de diez empleados, agricultores) ;</li><li><span style='color:" + 
		gammeCs[4] + "'><strong>Directivos y profesionales</strong></span>.</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// SOCIAL PROFILE - informalité
function popup_inf(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Informalidad laboral de los activos</h3><p>El trabajo informal se estimó combinando el tipo de empleo y el sector económico de la empresa empleadora, basándose en los métodos propuestos por la Organización Internacional del Trabajo (OIT). Los encuestados se dividieron en dos grupos: </p><ul><li><span style='color:" + 
		gammeInf[0] + 
		"'><strong>Activos con empleo informal</strong></span></li><li><span style='color:" + 
		gammeInf[1] + 
		"'><strong>Activos con empleo formal</strong></span></li></ul><p>En los casos en que la información era insuficiente para seguir las reglas de decisión de la OIT, también se utilizaron los niveles de educación e ingresos de los trabajadores encuestados.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// SOCIAL PROFILE - Occupational status
function popup_occ(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Ocupación principal</h3><p>La población se ha dividido en cinco grupos: <span style='color:" + gammeOcc[4] + "'><strong>Inactivos</strong></span> ; <span style='color:" + gammeOcc[3] + "'><strong>Jubilados</strong></span> ; <span style='color:" + gammeOcc[2] + "'><strong>Desempleados</strong></span> ; <span style='color:" + gammeOcc[1] + "'><strong>Estudiantes</strong></span> et <span style='color:" + gammeOcc[0] + "'><strong>Activos</strong></span>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// RESIDENTIAL PROFILE - residential area
function popup_resarea(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Zonificación en <i>Aires Urbaines</i></h3><p>Los sectores de residencia se han dividido en tres grupos basados en la Zonificación en Areas Urbanas - ZAU (2010) del INSEE:</p><ul><li>La <span style='color:" + gammeRes[2] + "'><strong>ciudad central</strong></span> corresponde al municipio central encargado de la encuesta origen-destino.</li><li>La <span style='color:" + gammeRes[1] + "'><strong>zona urbana</strong></span> corresponde a sectores pertenecientes a un polo urbano (grande, mediano o pequeño). Las regiones de Carcasona y Besançon no tienen ningún sector en esta categoría.</li><li>La <span style='color:" + gammeRes[0] + "'><strong>zona periférica</strong></span> agrupa a los restantes sectores, tanto si están situados en el anillo periurbano como si están compuestos por municipios multipolarizados o aislados.</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// RESIDENTIAL PROFILE - residential area (QPV)
function popup_qpv(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Barrios Prioritarios - France</h3><p>Los encuestados se han dividido en dos grupos según su zona fina (ZF) de residencia y la geografía prioritaria en Políticas Urbanas: <span style='color:" + gammeQpv[1] + "'><strong>Residente de un barrio prioritario</strong></span> y <span style='color:" + gammeQpv[0] + "'><strong>Residente fuera de un barrio prioritario</strong></span>.</br></br>Como la información sobre la residencia -o no- en un barrios prioritarios no existía en las encuestas, fue reconstruida <i>a posteriori</i> por el equipo de Mobiliscope a partir de las Zonas Finas de residencia (la malla más fina de la que disponemos). Elegimos definir como residentes de un barrios prioritarios a los encuestados cuya \"Zona Fina\" de residencia contenía una mayoría (> 51%) de habitantes de barrios prioritarios según los datos del censo de 2013.</br> Los barrios prioritarios están presentes en todas las ciudades francesas incluidas en Mobiliscope, excepto Annecy y su región.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// RESIDENTIAL PROFILE - departement of residence
// ce pop-up est seulement pour Paris
function popup_dep(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Departamento de residencia</h3><p>En Île-de-France, se distingue entre:<ul><li><span style='color:" + gammeDep[0] + "'><strong>Paris</strong></span> ;</li><li>La <span style='color:" + gammeDep[1] + "'><strong>Seine-Saint-Denis</strong></span> ;</li><li>Le <span style='color:" + gammeDep[2] + "'><strong>Val-de-Marne</strong></span> ;</li><li>Les <span style='color:" + gammeDep[3] + "'><strong>Hauts-de-Seine</strong></span> ;</li><li>La <span style='color:" + gammeDep[4] + "'><strong><i>Grande couronne</i></strong></span> (Essonne, Seine-et-Marne, Yvelines y Val-d'Oise).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// RESIDENTIAL PROFILE - zonage METAL de résidence
// Amérique latine
function popup_zona(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Anillo de residencia</h3><p>Los sectores de residencia se han dividido en 4 grupos: <ul><li><span style='color:" + gammeZona[3] + "'><strong>Centro</strong></span> ;</li><li><span style='color:" + gammeZona[2] + "'><strong>Pericentro</strong></span></li><li><span style='color:" + gammeZona[1] + "'><strong>Periferia cercana</strong></span></li><li><span style='color:" + gammeZona[0] + "'><strong>Periferia lejana</strong></span></li></ul><p>Esta división se basa en la división propuesta en el libro <em>Mobilidades y cambio urbano. Bogotá, Santiago y São Paulo</em> editado por F.Dureau, T.Lulle, S.Souchaud e Y.Contreras (2014)</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// RESIDENTIAL PROFILE - strate socio-économique
// ce pop-up est seulement pour Bogota
function popup_sse(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>•	Estrato socioeconómico</h3><p>La estratificación socioeconómica es una <a href='https://datosabiertos.bogota.gov.co/dataset/manzana-estratificacion-bogota-d-c' target='_blank'>tipología</a> de la acción pública colombiana cuyo objetivo es establecer las tarifas de los servicios públicos domiciliarios aplicadas a los hogares según el lugar de residencia a partir de una clasificación de las viviendas en función de sus características y de su entorno (calidad de la construcción, de las vías públicas, presencia de equipamientos, etc). La población se ha dividido en cuatro grupos en función del estrato de su vivienda: <ul><li><span style='color:" + gammeRev_fr[3] + "'><strong>Estrato 4, 5 o 6</strong></span>: niveles medio-alto y alto;</li><li><span style='color:" + gammeRev_fr[2] + "'><strong>Estrato 3</strong></span>: nivel medio-bajo</li><li><span style='color:" + gammeRev_fr[1] + "'><strong>Estrato 2</strong></span>: nivel bajo</li><li><span style='color:" + gammeRev_fr[0] + "'><strong>Estrato 1 o sin estrato</strong></span>: nivel muy bajo</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// RESIDENTIAL PROFILE - statut d'occupation dans le logement
// Amérique latine
function popup_log(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Tenencia de la vivienda</h3><p>Se atribuye cruzando la tenencia de la vivienda (propiedad, alquiler, usufructo, etc.) y la relación del encuestado con el referente del hogar con el fin de obtener tres tipos de tenencia relativos a la persona encuestada:<ul><li><span style='color:" + 
		gammeLog[2] + 
		"'><strong>Propietarios</strong></span>: el encuestado - o su cónyuge - es propietaria de la vivienda;</li><li><span style='color:" + 
		gammeLog[1] +
		"'><strong>Arrendatarios</strong></span>: el encuestado - o su cónyuge - alquila la vivienda ;</li><li><span style='color:" + 		
		gammeLog[0] +
		"'><strong>Personas albergadas</strong></span>: el encuestado - o su cónyuge- vive en una vivienda sin ser propietaria ni alquilarla. Se incluyen en esta categoría los usufructuarios, las personas que ocupan una vivienda de forma gratuita o que se alojan en una vivienda ocupada por el propietario o por el arrendatario.</li></ul>" +
		"<p>Para los encuestados menores de 25 años que viven con sus padres, se tiene en cuenta la situación de tenencia de sus padres.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// ACTIVITY/TRAVEL BEHAVIOUR - Activity type
function popup_act(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Actividad realizada</h3><p>La información proviene de de los motivos de viajes declarados por los encuestados. Se consideraron cinco grupos de actividades agregando las categorías de origen:</p><ul><li><span style='color:" + gammeAct[0] + "'><strong>En casa</strong></span></li><li><span style='color:" + gammeAct[1] + "'><strong>Trabajo</strong></span></li><li><span style='color:" + gammeAct[2] + "'><strong>Estudios</strong></span></li><li><span style='color:" + gammeAct[3] + "'><strong>Compras</strong></span></li><li><span style='color:" + gammeAct[4] + "'><strong>Recreo</strong></span> (actividades recreativas, culturales o deportivas, visitas a familiares).</li></ul><p>Las \"actividades no especificadas\" y las \"actividades de acompañamiento\" han sido excluidas por la escasa frecuencia como para ser analizadas aparte, y por la excesiva especificidad como para ser reagrupadas con otros tipos de actividades.</p>" ) ;
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_act_as(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Actividad realizada</h3><p>La información proviene de de los motivos de viajes declarados por los encuestados. Se consideraron seis grupos de actividades agregando las categorías de origen:</p><ul><li><span style='color:" + gammeAct[0] + "'><strong>En casa</strong></span></li><li><span style='color:" + gammeAct[1] + "'><strong>Trabajo</strong></span></li><li><span style='color:" + gammeAct[2] + "'><strong>Estudios</strong></span></li><li><span style='color:" + gammeAct[3] + "'><strong>Compras</strong></span></li><li><span style='color:" + gammeAct[4] + "'><strong>Recreo</strong></span> (actividades recreativas, culturales o deportivas, visitas a familiares).</li><li><span style='color:" + gammeAct[5] + "'><strong>Trámites administrativos o personales</strong></span> (incluyendo las actividades de acompañamiento)</li></ul>" ) ;
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// ACTIVITY/TRAVEL BEHAVIOUR - travel mode
function popup_mode(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Último modo de transporte utilizado</h3><p>Se distinguen tres modos de transporte principales:<ul><li><span style='color:" +
	 gammeMode[2] + 
	 "'><strong>Modo suave</strong></span> (caminar, bicicleta, etc.);</li><li><span style='color:" + 
	 gammeMode[1] + 
	 "'><strong>Vehículo motorizado individual</strong></span> (automóvil o motocicleta personal, taxi) ; </li><li><span style='color:" + 
	 gammeMode[0] + 
	 "'><strong>Transporte colectivo</strong></span>.</li></ul>" + 
	 "<p>Se trata del modo de transporte <b>principal</b> utilizado. Si varios modos de transporte han sido utilizados para un mismo viaje, el modo <b>principal</b> de transporte se define en este <b>orden de prioridad</b>: 1) Transporte colectivo ; 2) Vehiculo motorizado individual y 3) Modo suave. Así, un viaje en el que el individuo hubiera utilizado el transporte colectivo y su propio coche se clasificará como un viaje realizado principalmente en transporte colectivo.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// Bogota
function popup_mode_bo(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Último modo de transporte utilizado</h3><p>En Bogotá se distinguen cuatro modos de transporte principales:<ul><li><span style='color:" + 
		gammeMode_b[3] + 
		"'><strong>Modo suave</strong></span> (caminar, bicicleta, etc.)</li><li><span style='color:" + 
		gammeMode_b[2] + 
		"'><strong>Vehículo motorizado individual</strong></span> (automóvil o motocicleta personal, taxi)</li><li><span style='color:" + 
		gammeMode_b[1] + 
		"'><strong>Transporte colectivo</strong></span></li><li><span style='color:" + 
		gammeMode_b[0] + 
		"'><strong>TransMilenio</strong></span> (incluyendo alimentadores)</li></ul>" + 
	 "<p>Se trata del modo de transporte <b>principal</b> utilizado. Si varios modos de transporte han sido utilizados para un mismo viaje, el modo <b>principal</b> de transporte se define en este <b>orden de prioridad</b>: 1) TransMilenio ; 2) Transporte colectivo ; 3) Vehículo motorizado individual y 4) Modo suave. Así, un viaje en el que el individuo hubiera utilizado el TransMilenio y su propio coche se clasificará como un viaje realizado principalmente en TransMilenio.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}



// Other popups
function popup_mapTitle1(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Estimaciones de la población presente por hora y por sector</h3><p>Los valores indicados corresponden a un <strong>día laborable</strong> (lunes a viernes) \"ficticio\" para la población <b>mayor de 16 años</b>.</br></br>El tamaño de los <strong>sectores</strong> varía según la densidad de población: son más pequeños en el centro de las ciudades y más grandes en la periferia. En <b>Francia</b>, los sectores corresponden a la unidad espacial mínima para difundir los resultados de las encuestas de viajes de hogares. En las ciudades centrales, los sectores corresponden a grandes distritos (o <i>arrondissements</i> para París, Lyon y Marsella). En el exterior, los sectores corresponden a un municipio o a un grupo de municipios (si hay más de tres municipios en un sector, Mobiliscope sólo muestra los nombres de los tres municipios más poblados al pasar el cursor). En <b>Canadá</b>, los sectores corresponden a sectores municipales.</br></br>Los valores mostrados en Mobiliscope son estimaciones sujetas a un <strong>margen de error estadístico</strong>. Estos valores se han estimado teniendo en cuenta los factores de expansión de las personas encuestadas.<ul><li>Para <b>Île-de-France</b> (EGT, 2010): los factores se han calculado a nivel de individuos y hogares para garantizar para cada sector una distribución de los hogares (tamaño y tipo de vivienda) y de los individuos (edad, sexo, ocupación y categoría socioprofesional) similar a la observada en el censo de población de 2008. </li><li>Para las demás <b>ciudades francesas</b> (Cerema): los factores de expansión se calcularon con el fin de garantizar para cada sector una distribución de los hogares (tamaño) y de los individuos (edad) similar a la observada en los censos de población.</li><li>Para las <b>ciudades de Quebec</b>: los factores de expansión se calcularon en relación con la población total de individuos por cohorte de edad y sexo, a partir de los datos del censo de 2011.</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_duncan(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Mediciones de la distribución espacial en toda la zona de estudio</h3><p>Los cálculos se hicieron para cada hora (de las 4 a las 3) teniendo en cuenta los factores de expansión.</br><strong>Índice de disimilitud de Duncan</strong> informa sobre la dispersión de cada grupo de población en las unidades espaciales. Se suele utilizar para medir la segregación entre dos grupos (por ejemplo, población negra y blanca), pero también puede utilizarse para un indicador dividido en más de dos grupos. En este caso, el índice de Duncan expresa la proporción de individuos de un grupo determinado que habría que desplazar para que la distribución del grupo fuera igual en la población total.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
}

function popup_moran(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Mediciones de la distribución espacial en toda la zona de estudio</h3><p>Los cálculos se hicieron para cada hora (de las 4 a las 3) teniendo en cuenta los factores de expansión.</br><strong>Índice de Moran</strong> mide la intensidad de la relación entre la proximidad de los lugares y su grado de similitud (autocorrelación espacial). Varía de -1 (los lugares cercanos tienden a ser más diferentes que los lejanos - autocorrelación negativa) a 1 (los lugares cercanos tienden a ser más similares que los lejanos - autocorrelación positiva). La autocorrelación es cero cuando no existe ninguna relación entre la proximidad y la similitud.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
}

function popup_source_fr(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Encuesta \"origen-destino\"</h3><p>Mobiliscope utiliza los datos de las <i>Enquêtes Ménages Déplacements</i> del Cerema (y de la <i>Enquête Globale Transport</i> DRIEA-STIF-OMNIL para la región de Île-de-France). La mayoría de estas encuestas están disponibles a través de ADISP (Archivos de Datos Emitidos por la Estadística Pública).</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_source_can(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Encuesta \"origen-destino\"</h3><p>Mobiliscope Quebec utiliza los datos de las Encuestas Origen-Destino proporcionadas por el <i>Ministère des Transports du Québec</i>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_source_sa(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Encuesta \"origen-destino\"</h3><p>Mobiliscope Santiago utiliza los datos de la <i>Encuesta Origen-Destino de Viajes (EOD) 2012</i> proporcionadas por el Ministerio de Transportes y Telecomunicaciones, Programa de Vialidad y Transporte Urbano: SECTRA.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_source_bo(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Encuesta \"origen-destino\"</h3><p>Le Mobiliscope Bogotá utiliza los datos de la Encuesta Origen-Destino de Hogares (EODH) 2019 proporcionadas por el Sistema Integrado de información sobre Movilidad Urbana Regional (SIMUR).</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_source_sp(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Encuesta \"origen-destino\"</h3><p>Le Mobiliscope São Paulo utiliza los datos de la encuesta <i>Pesquisa Origem e Destino (OD) 2017</i> proporcionadas por la <i>Companhia do Metrô de São Paulo</i>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}