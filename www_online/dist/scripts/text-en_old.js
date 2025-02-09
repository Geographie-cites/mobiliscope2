//Stockage des titres

// Titres des cartes
var tMap = [
			//Whole population
			"<strong>Population</strong> density (people per km²) at district level",
			"Estimated number of <strong>people</strong> at district level",
			"Estimated number of non resident <strong>population</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Resident population
			"Estimated proportion of <strong>resident</strong> population at district level",
			"Estimated number of <strong>resident</strong> population at district level",
			"Estimated proportion of <strong>non resident</strong> population at district level",
			"Estimated number of <strong>non resident</strong> population at district level",
			//Age group
			"Estimated proportion of people <strong>aged 65 and more</strong> at district level",
			"Estimated number of people <strong>aged 65 and more</strong> at district level",
			"Estimated number of non resident people <strong>aged 65 and more</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>aged 35 to 64</strong> at district level",
			"Estimated number of people <strong>aged 35 to 64</strong> at district level",
			"Estimated number of non resident people <strong>aged 35 to 64</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>aged 25 to 34</strong> at district level",
			"Estimated number of people <strong>aged 25 to 34</strong> at district level",
			"Estimated number of non resident people <strong>aged 25 to 34</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>aged 16 to 24</strong> at district level",
			"Estimated number of people <strong>aged 16 to 24</strong> at district level",
			"Estimated number of non resident people <strong>aged 16 to 24</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Sex
			"Estimated proportion of <strong>women</strong> at district level",
			"Estimated number of <strong>women</strong> at district level",
			"Estimated number of non resident <strong>women</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>men</strong> at district level",
			"Estimated number of <strong>men</strong> at district level",
			"Estimated number of non resident <strong>men</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Educationnal level (ind)
			"Estimated proportion of people with <strong>high educational level</strong> at district level",
			"Estimated number of people with <strong>high educational level</strong> at district level",
			"Estimated number of non resident people with <strong>high educational level</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>middle-high educational level</strong> at district level",
			"Estimated number of people with <strong>middle-high educational level</strong> at district level",
			"Estimated number of non resident people with <strong>middle-high educational level</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>middle-low educational level</strong> at district level",
			"Estimated number of people with <strong>middle-low educational level</strong> at district level",
			"Estimated number of non resident people with <strong>middle-low educational level</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>low educational level</strong> at district level",
			"Estimated number of people with <strong>low educational level</strong> at district level",
			"Estimated number of non resident people with <strong>low educational level</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Educationnal level (men)
			"Estimated proportion of people with <strong>high educational h. level</strong> at district level",
			"Estimated number of people with <strong>high educational h. level</strong> at district level",
			"Estimated number of non resident people with <strong>high educational h. level</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>middle-high educational h. level</strong> at district level",
			"Estimated number of people with <strong>middle-high educational h. level</strong> at district level",
			"Estimated number of non resident people with <strong>middle-high educational h. level</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>middle-low educational h. level</strong> at district level",
			"Estimated number of people with <strong>middle-low educational h. level</strong> at district level",
			"Estimated number of non resident people with <strong>middle-low educational h. level</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>low educational h. level</strong> at district level",
			"Estimated number of people with <strong>low educational h. level</strong> at district level",
			"Estimated number of non resident people with <strong>low educational h. level</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Household income
			"Estimated proportion of people with <strong>high household income</strong> at district level",
			"Estimated number of people with <strong>high household income</strong> at district level",
			"Estimated number of non resident people with <strong>high household income</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>middle-high household income</strong> at district level",
			"Estimated number of people with <strong>middle-high household income</strong> at district level",
			"Estimated number of non resident people with <strong>middle-high household income</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>middle-low household income</strong> at district level",
			"Estimated number of people with <strong>middle-low household income</strong> at district level",
			"Estimated number of non resident people with <strong>middle-low household income</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>low household income</strong> at district level",
			"Estimated number of people with <strong>low household income</strong> at district level",
			"Estimated number of non resident people with <strong>low household income</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>missing income</strong> at district level",
			"Estimated number of people with <strong>missing income</strong> at district level",
			"Estimated number of non resident people with <strong>missing income</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//CSP
			"Estimated proportion of <strong>managers and intellectual professionals</strong> at district level",
			"Estimated number of <strong>managers and intellectual professionals</strong> at district level",
			"Estimated number of non resident <strong>managers and intellectual professionals</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>intermediate occupations</strong> at district level",
			"Estimated number of people with <strong>intermediate occupations</strong> at district level",
			"Estimated number of non resident people with <strong>intermediate occupations</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>employees</strong> at district level",
			"Estimated number of <strong>employees</strong> at district level",
			"Estimated number of non resident <strong>employees</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>workers</strong> at district level",
			"Estimated number of <strong>workers</strong> at district level",
			"Estimated number of non resident <strong>workers</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>inactive</strong> people at district level",
			"Estimated number of <strong>inactive</strong> people at district level",
			"Estimated number of non resident <strong>inactive</strong> people at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//CSP
			"Estimated proportion of <strong>managers and intellectual professionals (household)</strong> at district level",
			"Estimated number of <strong>managers and intellectual professionals (household)</strong> at district level",
			"Estimated number of non resident <strong>managers and intellectual professionals (household)</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>intermediate occupations (household)</strong> at district level",
			"Estimated number of people with <strong>intermediate occupations (household)</strong> at district level",
			"Estimated number of non resident people with <strong>intermediate occupations (household)</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>employees (household)</strong> at district level",
			"Estimated number of <strong>employees (household)</strong> at district level",
			"Estimated number of non resident <strong>employees (household)</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>workers (household)</strong> at district level",
			"Estimated number of <strong>workers (household)</strong> at district level",
			"Estimated number of non resident <strong>workers (household)</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>inactive (household)</strong> people at district level",
			"Estimated number of <strong>inactive (household)</strong> people at district level",
			"Estimated number of non resident <strong>inactive (household)</strong> people at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Occupationnal status
			"Estimated proportion of <strong>inactive</strong> people at district level",
			"Estimated number of <strong>inactive</strong> people at district level",
			"Estimated number of non resident <strong>inactive</strong> people at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>retired</strong> people at district level",
			"Estimated number of <strong>retired</strong> people at district level",
			"Estimated number of non resident <strong>retired</strong> people at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>unemployed</strong> people at district level",
			"Estimated number of <strong>unemployed</strong> people at district level",
			"Estimated number of non resident <strong>unemployed</strong> people at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>    ", // laisser les espaces, pour occ3_flow2()
			"Estimated proportion of <strong>students</strong> at district level",
			"Estimated number of <strong>students</strong> at district level",
			"Estimated number of non resident <strong>students</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>active</strong> people at district level",
			"Estimated number of <strong>active</strong> people at district level",
			"Estimated number of non resident <strong>active</strong> people at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Department of residence
			"Estimated proportion of people <strong>living in greater Paris</strong> at district level",
			"Estimated number of people <strong>living in greater Paris</strong> at district level",
			"Estimated number of non resident people <strong>living in greater Paris</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living in Hauts-de-Seine</strong> at district level",
			"Estimated number of people <strong>living in Hauts-de-Seine</strong> at district level",
			"Estimated number of non resident people <strong>living in Hauts-de-Seine</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living in Val-de-Marne</strong> at district level",
			"Estimated number of people <strong>living in Val-de-Marne</strong> at district level",
			"Estimated number of non resident people <strong>living in Val-de-Marne</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living in Seine-Saint-Denis</strong> at district level",
			"Estimated number of people <strong>living in Seine-Saint-Denis</strong> at district level",
			"Estimated number of non resident people <strong>living in Seine-Saint-Denis</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living in Paris</strong> at district level",
			"Estimated number of people <strong>living in Paris</strong> at district level",
			"Estimated number of non resident people <strong>living in Paris</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Residential rings
			"Estimated proportion of people <strong>living in</strong> ", " at district level",
			"Estimated number of people <strong>living in</strong> ", " at district level",
			"Estimated number of non resident people <strong>living in</strong> ", " at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living in urban areas</strong> at district level",
			"Estimated number of people <strong>living in urban areas</strong> at district level",
			"Estimated number of non resident people <strong>living in urban areas</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living in suburban/peripheral areas</strong> at district level",
			"Estimated number of people <strong>living in suburban/peripheral areas</strong> at district level",
			"Estimated number of non resident people <strong>living in suburban/peripheral areas</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//QPV
			"Estimated proportion of people <strong>living in 'Poverty Areas'</strong> at district level",
			"Estimated number of people <strong>living in 'Poverty Areas'</strong> at district level",
			"Estimated number of non resident people <strong>living in 'Poverty Areas'</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living outside 'Poverty Areas'</strong> at district level",
			"Estimated number of people <strong>living outside 'Poverty Areas'</strong> at district level",
			"Estimated number of non resident people <strong>living outside 'Poverty Areas'</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Activity
			"Estimated proportion of people <strong>on leisure</strong> at district level",
			"Estimated number of people <strong>on leisure</strong> at district level",
			"Estimated number of non resident people <strong>on leisure</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>shopping</strong> at district level",
			"Estimated number of people <strong>shopping</strong> at district level",
			"Estimated number of non resident people <strong>shopping</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>studying</strong> at district level",
			"Estimated number of people <strong>studying</strong> at district level",
			"Estimated number of non resident people <strong>studying</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>at work</strong> at district level",
			"Estimated number of people <strong>at work</strong> at district level",
			"Estimated number of non resident people <strong>at work</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>at home</strong> at district level",
			"Estimated number of people <strong>at home</strong> at district level",
			// Travel mode
			"Estimated proportion of people who used <strong>soft mobility</strong> at district level",
			"Estimated number of people who used <strong>soft mobility</strong> at district level",
			"Estimated number of non resident people who used <strong>soft mobility</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people who used <strong>individual motor vehicle</strong> at district level",
			"Estimated number of people who used <strong>individual motor vehicle</strong> at district level",
			"Estimated number of non resident people who used <strong>individual motor vehicle</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people who used <strong>collective transportation</strong> at district level",
			"Estimated number of people who used <strong>collective transportation</strong> at district level",
			"Estimated number of non resident people who used <strong>collective transportation</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Groupe d'âge bis (Amérique du Sud)
			"Estimated proportion of people <strong>aged 61 and more</strong> at district level", //165
			"Estimated number of people <strong>aged 61 and more</strong> at district level",
			"Estimated number of non resident people <strong>aged 61 and more</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>aged 41 to 60</strong> at district level",
			"Estimated number of people <strong>aged 41 to 60</strong> at district level",
			"Estimated number of non resident people <strong>aged 41 to 60</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>aged 26 to 40</strong> at district level",
			"Estimated number of people <strong>aged 26 to 40</strong> at district level",
			"Estimated number of non resident people <strong>aged 26 to 40</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>aged 16 to 25</strong> at district level",
			"Estimated number of people <strong>aged 16 to 25</strong> at district level", //175
			"Estimated number of non resident people <strong>aged 16 to 25</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Revenu du ménage (Amérique du Sud)
			"Estimated proportion of people with <strong>very high household income</strong> at district level", //177
			"Estimated number of people with <strong>very high household income</strong> at district level",
			"Estimated number of non resident people with <strong>very high household income</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>high household income</strong> at district level", //180
			"Estimated number of people with <strong>high household income</strong> at district level",
			"Estimated number of non resident people with <strong>high household income</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>intermediate household income</strong> at district level",
			"Estimated number of people with <strong>intermediate household income</strong> at district level",
			"Estimated number of non resident people with <strong>intermediate household income</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>low household income</strong> at district level", //186
			"Estimated number of people with <strong>low household income</strong> at district level",
			"Estimated number of non resident people with <strong>low household income</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>very low household income</strong> at district level",
			"Estimated number of people with <strong>very low household income</strong> at district level", //190
			"Estimated number of non resident people with <strong>very low household income</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//CSO (Amérique du Sud)
			"Estimated proportion of <strong>executives and professionals</strong> at district level", //192
			"Estimated number of <strong>executives and professionals</strong> at district level",
			"Estimated number of non resident <strong>executives and professionals</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>independents</strong> at district level", //195
			"Estimated number of <strong>independents</strong> at district level",
			"Estimated number of non resident <strong>independents</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>skilled workers</strong> at district level",
			"Estimated number of <strong>skilled workers</strong> at district level",
			"Estimated number of non resident <strong>skilled workers</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>unskilled workers</strong> at district level", //201
			"Estimated number of <strong>unskilled workers</strong> at district level",
			"Estimated number of non resident <strong>unskilled workers</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Informalité (Bogota et Sao Paulo)
			"Estimated proportion of <strong>workers in the informal sector</strong> at district level", //204
			"Estimated number of <strong>workers in the informal sector</strong> at district level",
			"Estimated number of non resident <strong>workers in the informal sector</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>workers in the formal sector</strong> at district level",
			"Estimated number of <strong>workers in the formal sector</strong> at district level", //208
			"Estimated number of non resident <strong>workers in the formal sector</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Zonage METAL (Bogota)
			"Estimated proportion of people <strong>living in the center</strong> at district level", //210
			"Estimated number of people <strong>living in the center</strong> at district level",
			"Estimated number of non resident people <strong>living in the center</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living in the pericenter</strong> at district level",
			"Estimated number of people <strong>living in the pericenter</strong> at district level",
			"Estimated number of non resident people <strong>living in the pericenter</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living in the close periphery</strong> at district level", //216
			"Estimated number of people <strong>living in the close periphery</strong> at district level",
			"Estimated number of non resident people <strong>living in the close periphery</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living in the distant periphery</strong> at district level",
			"Estimated number of people <strong>living in the distant periphery</strong> at district level", //220
			"Estimated number of non resident people <strong>living in the distant periphery</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Strate socio-éco (Bogota)
			"Estimated proportion of people <strong>living in layer 4, 5 or 6</strong> at district level", //222
			"Estimated number of people <strong>living in layer 4, 5 or 6</strong> at district level",
			"Estimated number of non resident people <strong>living in layer 4, 5 or 6</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living in layer 3</strong> at district level", //225
			"Estimated number of people <strong>living in layer 3</strong> at district level",
			"Estimated number of non resident people <strong>living in layer 3</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living in layer 2</strong> at district level",
			"Estimated number of people <strong>living in layer 2</strong> at district level",
			"Estimated number of non resident people <strong>living in layer 2</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living in layer 1 or in outlayer block</strong> at district level", //231
			"Estimated number of people <strong>living in layer 1 or in outlayer block</strong> at district level",
			"Estimated number of non resident people <strong>living in layer 1 or in outlayer block</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Activité 6 : démarches admin./perso (Amérique du Sud)
			"Estimated proportion of people <strong>on administrative/personal procedures</strong> at district level", //234
			"Estimated number of people <strong>on administrative/personal procedures</strong> at district level",
			"Estimated number of non resident people <strong>on administrative/personal procedures</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Mode 4 : TransMilenio (Bogota)
			"Estimated proportion of people who used <strong>TransMilenio</strong> at district level", //237
			"Estimated number of people who used <strong>TransMilenio</strong> at district level",
			"Estimated number of non resident people who used <strong>TransMilenio</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Composition du ménage (Amérique du Sud)
			"Estimated proportion of people living in a <strong>complex household with children</strong> at district level", //240
			"Estimated number of people living in a <strong>complex household with children</strong> at district level",
			"Estimated number of non resident people living in a <strong>complex household with children</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people living in a <strong>family with children</strong> at district level", //243
			"Estimated number of people living in a <strong>family with children</strong> at district level",
			"Estimated number of non resident people living in a <strong>family with children</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people living in a <strong>complex household without children</strong> at district level", //246
			"Estimated number of people living in a <strong>complex household young children</strong> at district level",
			"Estimated number of non resident people living in a <strong>complex household without children</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people living in a <strong>family without children</strong> at district level", //249
			"Estimated number of people living in a <strong>family without children</strong> at district level",
			"Estimated number of non resident people living in a <strong>family without children</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living alone</strong> at district level", //252
			"Estimated number of people <strong>living alone</strong> at district level",
			"Estimated number of non resident people <strong>living alone</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Statut d'occupation du logement (Amérique du Sud)
			"Estimated proportion of <strong>owners</strong> present at district level", //255
			"Estimated number of <strong>owners</strong> present at district level",
			"Estimated number of non resident <strong>owners</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>tenants</strong> present at district level", //258
			"Estimated number of <strong>tenants</strong> present at district level",
			"Estimated number of non resident <strong>tenants</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>rent-free tenants</strong> present at district level", //261
			"Estimated number of <strong>rent-free tenants</strong> present at district level",
			"Estimated number of non resident <strong>rent-free tenants</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			// âge 15-24 canada
			"Estimated proportion of people <strong>aged 15 to 24</strong> at district level", //264
			"Estimated number of people <strong>aged 15 to 24</strong> at district level",
			"Estimated number of non resident people <strong>aged 15 to 24</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Composition du ménage (France)
			"Estimated proportion of people living in a <strong>household with children</strong> at district level", //267
			"Estimated number of people living in a <strong>household with children</strong> at district level",
			"Estimated proportion of people living in a <strong>household with children</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people living in a <strong>household (excluding couple) without children</strong> at district level", //270
			"Estimated number of people living in a <strong>household (excluding couple) without children</strong> at district level",
			"Estimated proportion of people living in a <strong>household (excluding couple) without children</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people living in <strong>couple without children</strong> at district level", //273
			"Estimated number of people living in <strong>couple without children</strong> at district level",
			"Estimated proportion of people living in <strong>couple without children</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			// composition du ménage (Québec)
			"Estimated proportion of people living in a <strong>household without children</strong> at district level", //276
			"Estimated number of people living in a <strong>household without children</strong> at district level",
			"Estimated proportion of people living in a <strong>household without children</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>"
			];


//Titre des graphiques simples
var tUnique = [
			//Whole population
			"<strong>Population</strong> density (people per km²)",
			"Estimated number of <strong>people</strong>",
			"Estimated number of non resident <strong>people</strong>",
			//Residential population
			"Estimated proportion (%) of <strong>resident</strong> population",
			"Estimated number of <strong>resident</strong> population",
			"Estimated proportion (%) of <strong>non resident</strong> population",
			"Estimated number of <strong>non resident</strong> population",
			//Age group
			"Estimated proportion (%) of people <strong>aged 65 and more</strong>",
			"Estimated number of people <strong>aged 65 and more</strong>",
			"Estimated number of non resident people <strong>aged 65 and more</strong>",
			"Estimated proportion (%) of people <strong>aged 35 to 64</strong>", //10
			"Estimated number of people <strong>aged 35 to 64</strong>",
			"Estimated number of non resident people <strong>aged 35 to 64</strong>",
			"Estimated proportion (%) of people <strong>aged 25 to 34</strong>",
			"Estimated number of people <strong>aged 25 to 34</strong>",
			"Estimated number of non resident people <strong>aged 25 to 34</strong>",
			"Estimated proportion (%) of people <strong>aged 16 to 24</strong>",
			"Estimated number of people <strong>aged 16 to 24</strong>",
			"Estimated number of non resident people <strong>aged 16 to 24</strong>",
			//Sex
			"Estimated proportion (%) of <strong>women</strong>",
			"Estimated number of <strong>women</strong>", //20
			"Estimated number of non resident <strong>women</strong>",
			"Estimated proportion (%) of <strong>men</strong>",
			"Estimated number of <strong>men</strong>",
			"Estimated number of non resident <strong>men</strong>",
			//Educationnal level (ind)
			"Estimated proportion (%) of people with <strong>high educational level</strong>",
			"Estimated number of people with <strong>high educational level</strong>",
			"Estimated number of non resident people with <strong>high educational level</strong>",
			"Estimated proportion (%) of people with <strong>middle-high educational level</strong>",
			"Estimated number of people with <strong>middle-high educational level</strong>",
			"Estimated number of non resident people with <strong>middle-high educational level</strong>", //30
			"Estimated proportion (%) of people with <strong>middle-low educational level</strong>",
			"Estimated number of people with <strong>middle-low educational level</strong>",
			"Estimated number of non resident people with <strong>middle-low educational level</strong>",
			"Estimated proportion (%) of people with <strong>low educational level</strong>",
			"Estimated number of people with <strong>low educational level</strong>",
			"Estimated number of non resident people with <strong>low educational level</strong>",
			//Educationnal level (men)
			"Estimated proportion (%) of people with <strong>high educational h. level</strong>",
			"Estimated number of people with <strong>high educational h. level</strong>",
			"Estimated number of non resident people with <strong>high educational h. level</strong>",
			"Estimated proportion (%) of people with <strong>middle-high educational h. level</strong>", //40
			"Estimated number of people with <strong>middle-high educational h. level</strong>",
			"Estimated number of non resident people with <strong>middle-high educational h. level</strong>",
			"Estimated proportion (%) of people with <strong>middle-low educational h. level</strong>",
			"Estimated number of people with <strong>middle-low educational h. level</strong>",
			"Estimated number of non resident people with <strong>middle-low educational h. level</strong>",
			"Estimated proportion (%) of people with <strong>low educational h. level</strong>",
			"Estimated number of people with <strong>low educational h. level</strong>",
			"Estimated number of non resident people with <strong>low educational h. level</strong>",
			//Household income
			"Estimated proportion (%) of people with <strong>high household income</strong>",
			"Estimated number of people with <strong>high household income</strong>", //50
			"Estimated number of non resident people with <strong>high household income</strong>",
			"Estimated proportion (%) of people with <strong>middle-high household income</strong>",
			"Estimated number of people with <strong>middle-high household income</strong>",
			"Estimated number of non resident people with <strong>middle-high household income</strong>",
			"Estimated proportion (%) of people with <strong>middle-low household income</strong>",
			"Estimated number of people with <strong>middle-low household income</strong>",
			"Estimated number of non resident people with <strong>middle-low household income</strong>",
			"Estimated proportion (%) of people with <strong>low household income</strong>",
			"Estimated number of people with <strong>low household income</strong>",
			"Estimated number of non resident people with <strong>low household income</strong>", //60
			"Estimated proportion (%) of people with <strong>missing income</strong>",
			"Estimated number of people with <strong>missing income</strong>",
			"Estimated number of non resident people with <strong>missing income</strong>",
			//CSP
			"Estimated proportion (%) of <strong>managers and intellectual professionals</strong>",
			"Estimated number of <strong>managers and intellectual professionals</strong>",
			"Estimated number of non resident <strong>managers and intellectual professionals</strong>",
			"Estimated proportion (%) of people with <strong>intermediate occupations</strong>",
			"Estimated number of people with <strong>intermediate occupations</strong>",
			"Estimated number of non resident people with <strong>intermediate occupations</strong>",
			"Estimated proportion (%) of <strong>employees</strong>", //70
			"Estimated number of <strong>employees</strong>",
			"Estimated number of non resident <strong>employees</strong>",
			"Estimated proportion (%) of <strong>workers</strong>",
			"Estimated number of <strong>workers</strong>",
			"Estimated number of non resident <strong>workers</strong>",
			"Estimated proportion (%) of <strong>inactive</strong> people",
			"Estimated number of <strong>inactive</strong> people",
			"Estimated number of non resident <strong>inactive</strong> people",
			//CSP ménage
			"Estimated proportion (%) of <strong>managers and intellectual professionals (household)</strong>",
			"Estimated number of <strong>managers and intellectual professionals (household)</strong>", //80
			"Estimated number of non resident <strong>managers and intellectual professionals (household)</strong>",
			"Estimated proportion (%) of people with <strong>intermediate occupations (household)</strong>",
			"Estimated number of people with <strong>intermediate occupations (household)</strong>",
			"Estimated number of non resident people with <strong>intermediate occupations (household)</strong>",
			"Estimated proportion (%) of <strong>employees (household)</strong>",
			"Estimated number of <strong>employees (household)</strong>",
			"Estimated number of non resident <strong>employees (household)</strong>",
			"Estimated proportion (%) of <strong>workers (household)</strong>",
			"Estimated number of <strong>workers (household)</strong>",
			"Estimated number of non resident <strong>workers (household)</strong>", //90
			"Estimated proportion (%) of <strong>inactive (household)</strong> people",
			"Estimated number of <strong>inactive (household)</strong> people",
			"Estimated number of non resident <strong>inactive (household)</strong> people",
			//Occupationnal status
			"Estimated proportion (%) of <strong>inactive</strong> people",
			"Estimated number of <strong>inactive</strong> people",
			"Estimated number of non resident <strong>inactive</strong> people",
			"Estimated proportion (%) of <strong>retired</strong> people",
			"Estimated number of <strong>retired</strong> people",
			"Estimated number of non resident <strong>retired</strong> people",
			"Estimated proportion (%) of <strong>unemployed</strong> people", //100
			"Estimated number of <strong>unemployed</strong> people",
			"Estimated number of non resident <strong>unemployed</strong> people",
			"Estimated proportion (%) of <strong>students</strong>",
			"Estimated number of <strong>students</strong>",
			"Estimated number of non resident <strong>students</strong>",
			"Estimated proportion (%) of <strong>active</strong> people",
			"Estimated number of <strong>active</strong> people",
			"Estimated number of non resident <strong>active</strong> people",
			//Department of residence
			"Estimated proportion (%) of people <strong>living in greater Paris</strong>",
			"Estimated number of people <strong>living in greater Paris</strong>", //110
			"Estimated number of non resident people <strong>living in greater Paris</strong>",
			"Estimated proportion (%) of people <strong>living in Hauts-de-Seine</strong>",
			"Estimated number of people <strong>living in Hauts-de-Seine</strong>",
			"Estimated number of non resident people <strong>living in Hauts-de-Seine</strong>",
			"Estimated proportion (%) of people <strong>living in Val-de-Marne</strong>",
			"Estimated number of people <strong>living in Val-de-Marne</strong>",
			"Estimated number of non resident people <strong>living in Val-de-Marne</strong>",
			"Estimated proportion (%) of people <strong>living in Seine-Saint-Denis</strong>",
			"Estimated number of people <strong>living in Seine-Saint-Denis</strong>",
			"Estimated number of non resident people <strong>living in Seine-Saint-Denis</strong>", //120
			"Estimated proportion (%) of people <strong>living in Paris</strong>",
			"Estimated number of people <strong>living in Paris</strong>",
			"Estimated number of non resident people <strong>living in Paris</strong>",
			//Residential rings
			"Estimated proportion (%) of people <strong>living in</strong> ",
			"Estimated number of people <strong>living in</strong> ",
			"Estimated number of non resident people <strong>living in</strong> ",
			"Estimated proportion (%) of people <strong>living in urban areas</strong>",
			"Estimated number of people <strong>living in urban areas</strong>",
			"Estimated number of non resident people <strong>living in urban areas</strong>",
			"Estimated proportion (%) of people <strong>living in suburban/peripheral areas</strong>", //130
			"Estimated number of people <strong>living in suburban/peripheral areas</strong>",
			"Estimated number of non resident people <strong>living in suburban/peripheral areas</strong>",
			//QPV
			"Estimated proportion (%) of people <strong>living in 'Poverty Areas'</strong>",
			"Estimated number of people <strong>living in 'Poverty Areas'</strong>",
			"Estimated number of non resident people <strong>living inside 'Poverty Areas'</strong>",
			"Estimated proportion (%) of people <strong>residing outside QPV</strong>",
			"Estimated number of people <strong>residing outside 'Poverty Areas'</strong>",
			"Estimated number of non resident people <strong>living outside 'Poverty Areas'</strong>",
			//Activity
			"Estimated proportion (%) of people <strong>on leisure</strong>",
			"Estimated number of people <strong>on leisure</strong>",  //140
			"Estimated number of non resident people <strong>on leisure</strong>",
			"Estimated proportion (%) of people <strong>shopping</strong>",
			"Estimated number of people <strong>shopping</strong>",
			"Estimated number of non resident people <strong>shopping</strong>",
			"Estimated proportion (%) of people <strong>studying</strong>",
			"Estimated number of people <strong>studying</strong>",
			"Estimated number of non resident people <strong>studying</strong>",
			"Estimated proportion (%) of people <strong>at work</strong>",
			"Estimated number of people <strong>at work</strong>",
			"Estimated number of non resident people <strong>at work</strong>",  //150
			"Estimated proportion (%) of people <strong>at home</strong>",
			"Estimated number of people <strong>at home</strong>",
			// Travel mode
			"Estimated proportion (%) of people who used <strong>soft mobility</strong>",
			"Estimated number of people who used <strong>soft mobility</strong>",
			"Estimated number of non resident people who used <strong>soft mobility</strong>",
			"Estimated proportion (%) of people who used <strong>individual motor vehicle</strong>",
			"Estimated number of people who used <strong>individual motor vehicle</strong>",
			"Estimated number of non resident people who used <strong>individual motor vehicle</strong>",
			"Estimated proportion (%) of people who used <strong>collective transportation</strong>",
			"Estimated number of people who used <strong>collective transportation</strong>",  //160
			"Estimated number of non resident people who used <strong>collective transportation</strong>",
			//Groupe d'âge bis (Amérique du Sud)
			"Estimated proportion (%) of people <strong>aged 61 and more</strong>",
			"Estimated number of people <strong>aged 61 and more</strong>",
			"Estimated number of non resident people <strong>aged 61 and more</strong>",
			"Estimated proportion (%) of people <strong>aged 41 à 60</strong>", //165
			"Estimated number of people <strong>aged 41 to 60</strong>",
			"Estimated number of non resident people <strong>aged 41 to 60</strong>",
			"Estimated proportion (%) of people <strong>aged 26 to 40</strong>",
			"Estimated number of people <strong>aged 26 to 40</strong>",
			"Estimated number of non resident people <strong>aged 26 to 40</strong>", //170
			"Estimated proportion (%) of people <strong>aged 16 to 25</strong>",
			"Estimated number of people <strong>aged 16 to 25</strong>",
			"Estimated number of non resident people <strong>aged 16 to 25</strong>",
			//Revenu du ménage (Amérique du Sud)
			    "Estimated proportion (%) of people with <strong>very high household income</strong>",
			    "Estimated number of people with <strong>very high household income</strong>", // 175
			    "Estimated number of non resident people with <strong>very high household income</strong>",
			    "Estimated proportion (%) of people with <strong>high household income</strong>",
			    "Estimated number of people with <strong>high household income</strong>",
			    "Estimated number of non resident people with <strong>high household income</strong>",
			    "Estimated proportion (%) of people with <strong>intermediate household income</strong>", //180
			    "Estimated number of people with <strong>intermediate household income</strong>",
			    "Estimated number of non resident people with <strong>intermediate household income</strong>",
			    "Estimated proportion (%) of people with <strong>low household income</strong>",
			    "Estimated number of people with <strong>low household income</strong>",
			    "Estimated number of non resident people with <strong>low household income</strong>", // 185
			    "Estimated proportion (%) of people with <strong>very low household income</strong>",
			    "Estimated number of people with <strong>very low household income</strong>",
			    "Estimated number of non resident people with <strong>very low household income</strong>",
			    //CSO (Amérique du Sud)
			    "Estimated proportion (%) of <strong>executives and professionals</strong>", //189
			    "Estimated number of <strong>executives and professionals</strong>",
			    "Estimated number of non resident <strong>executives and professionals</strong>",
			    "Estimated proportion (%) of<strong>independents</strong>",
			    "Estimated number of<strong>independents</strong>",
			    "Estimated number of non resident <strong>independents</strong>",
			    "Estimated proportion (%) of <strong>skilled workers</strong>", //195
			    "Estimated number of <strong>skilled workers</strong>",
			    "Estimated number of non resident <strong>skilled workers</strong>",
			    "Estimated proportion (%) of <strong>unskilled workers</strong>",
			    "Estimated number of <strong>unskilled workers</strong>",
			    "Estimated number of non resident <strong>unskilled workers</strong>", //200
			    // informalité (Bogota et Sao Paulo)
			    "Estimated proportion (%) of <strong>workers in the informal sector</strong> ", //201
			    "Estimated number of <strong>workers in the informal sector</strong> ",
			    "Estimated number of non resident <strong>workers in the informal sector</strong> ",
			    "Estimated proportion (%) of <strong>workers in the formal sector</strong>",
			    "Estimated number of <strong>workers in the formal sector</strong> ", //205
			    "Estimated number of non resident <strong>workers in the formal sector</strong>",
			    //Zona METAL
			    "Estimated proportion (%) of people <strong>living in the center</strong>", //207
			    "Estimated number of people <strong>living in the center</strong>",
			    "Estimated number of non resident people <strong>living in the center</strong>",
			    "Estimated proportion (%) of people <strong>living in the pericenter</strong>", //210
			    "Estimated number of people <strong>living in the pericenter</strong>",
			    "Estimated number of non resident people <strong>living in the pericenter</strong>",
			    "Estimated proportion (%) of people <strong>living in the close periphery</strong>",
			    "Estimated number of people <strong>living in the close periphery</strong>",
			    "Estimated number of non resident people <strong>living in the close periphery</strong>", //215
			    "Estimated proportion (%) of people <strong>living in the distant periphery</strong>",
			    "Estimated number of people <strong>living in the distant periphery</strong>",
			    "Estimated number of non resident people <strong>living in the distant periphery</strong>",
			    //Strate socio-éco (Bogota)
			    "Estimated proportion (%) of people <strong>living in layer 4, 5 or 6</strong>", //219
			    "Estimated number of people <strong>living in layer 4, 5 or 6</strong>",
			    "Estimated number of non resident people <strong>living in layer 4, 5 or 6</strong>",
			    "Estimated proportion (%) of people <strong>living in layer 3</strong>",
			    "Estimated number of people <strong>living in layer 3</strong>",
			    "Estimated number of non resident people <strong>living in layer 3</strong>",
			    "Estimated proportion (%) of people <strong>living in layer 2</strong>", //225
			    "Estimated number of people <strong>living in layer 2</strong>",
			    "Estimated number of non resident people <strong>living in layer 2</strong>",
			    "Estimated proportion (%) of people <strong>living in layer 1 or in outlayer block</strong>",
			    "Estimated number of people <strong>living in layer 1 or in outlayer block</strong>",
			    "Estimated number of non resident people <strong>living in layer 1 or in outlayer block</strong>", //230
			    //Activité 6 : démarches admin./perso (Amérique du Sud)
			    "Estimated proportion (%) of people <strong>on administrative/personal procedures</strong> ",
				"Estimated number of people <strong>on administrative/personal procedures</strong> ",
				"Estimated number of non resident people <strong>on administrative/personal procedures</strong>",
				//Mode 4 : TransMilenio (Bogota)
				"Estimated proportion (%) of people who used <strong>TransMilenio</strong> ", //234
				"Estimated number of people who used <strong>TransMilenio</strong> ",
				"Estimated number of non resident people who used <strong>TransMilenio</strong>",
				//composition du ménage (Amérique latine)
				"Estimated proportion (%) of people living in an <strong>complex household with children</strong>", //237
			   "Estimated number of people living in an <strong>complex household with children</strong>",
			   "Estimated number of non resident people living in an <strong>complex household with children</strong>",
			   "Estimated proportion (%) of people living in a <strong>family with children</strong>", //240
			   "Estimated number of people living in a <strong>family with children</strong>",
			   "Estimated number of non resident people living in a <strong>family with children</strong>",
			   "Estimated proportion (%) of people living in an <strong>complex household without children</strong>", //243
			   "Estimated number of people living in an <strong>complex household without children</strong>",
			   "Estimated number of non resident people living in an <strong>complex household without children</strong>",
			   "Estimated proportion (%) of people living in a <strong>family without children</strong>", //246
			   "Estimated number of people living in a <strong>family without children</strong>",
			   "Estimated number of non resident people living in a <strong>family without children</strong>",
			   "Estimated proportion (%) of people <strong>living alone</strong>", //249
			   "Estimated number of non resident people <strong>living alone</strong>",
			   "Estimated number of non resident people <strong>living alone</strong>",
			   //statut d'occupation dans le logement
			   "Estimated proportion (%) of <strong>owners</strong> present", //252
				"Estimated number of <strong>owners</strong> present",
				"Estimated number of non resident <strong>owners</strong>",
				"Estimated proportion (%) of <strong>tenants</strong> present", //255
				"Estimated number of <strong>tenants</strong> present",
				"Estimated number of non resident <strong>tenants</strong>",
				"Estimated proportion (%) of <strong>rent-free tenants</strong> present", //258
				"Estimated number of <strong>rent-free tenants</strong> present",
				"Estimated number of non resident <strong>rent-free tenants</strong>",
				// âge 1 QC
				"Estimated proportion (%) of people <strong>aged 15 to 24</strong>", //261
				"Estimated number of people <strong>aged 15 to 24</strong>",
				"Estimated number of non resident people <strong>aged 15 to 24</strong>",
				//composition du ménage (France)
				"Estimated proportion (%) of people living in a <strong>household with children</strong>", //264
			   "Estimated number of people living in a <strong>household with children</strong>",
			   "Estimated number of non resident people living in a <strong>household with children</strong>",
			   "Estimated proportion (%) of people living in a <strong>household (excluding couple) without children</strong>", //267
			   "Estimated number of people living in a <strong>household (excluding couple) without children</strong>",
			   "Estimated number of non resident people living in a <strong>household (excluding couple) without children</strong>",
			   "Estimated proportion (%) of people living in <strong>couple without children</strong>", //270
			   "Estimated number of people living in <strong>couple without children</strong>",
			   "Estimated number of non resident people living in a <strong>couple without children</strong>",
			   //composition du ménage (Québec)
			   "Estimated proportion (%) of people living in a <strong>household without children</strong>", //273
			   "Estimated number of people living in a <strong>household without children</strong>",
			   "Estimated number of non resident people living in a <strong>household without children</strong>"
			];


// Titres des graphiques empilés
var titleStacked =["Estimated proportion (%) of people by <strong>socioprofessional status</strong>",
				   "Estimated number of people by <strong>socioprofessional status</strong>",
				   "Estimated number of non resident people by <strong>socioprofessional status</strong>",

				   "Estimated proportion (%) of people by <strong>socioprofessional h. status</strong>",
				   "Estimated number of people by <strong>socioprofessional h. status</strong>",
				   "Estimated number of non resident people by <strong>socioprofessional h. status</strong>", //5

				   "Estimated number of people by <strong>educational level</strong>",
				   "Estimated proportion (%) of people by <strong>educational level</strong>",
				   "Estimated number of non resident people by <strong>educational level</strong>",
				   "Estimated number of people by <strong>educational h. level</strong>",
				   "Estimated proportion (%) of people by <strong>educational h. level</strong>", //10
				   "Estimated number of non resident people by <strong>educational h. level</strong>",
				   "Estimated number of people by <strong>current activity</strong>",
				   "Estimated proportion (%) of people by <strong>current activity</strong>",
				   "Estimated number of non resident people by <strong>current activity</strong>",
				   "Estimated number of people by <strong>residential rings</strong>", //15
				   "Estimated proportion (%) of people by <strong>residential rings</strong>",
				   "Estimated number of non resident people by <strong>residential rings</strong>",
				   "Estimated number of people by <strong>age groups</strong>",
				   "Estimated proportion (%) of people by <strong>age groups</strong>",
				   "Estimated number of non resident people by <strong>age groups</strong>", //20
				   "Estimated number of people by <strong>occupational status</strong>",
				   "Estimated proportion (%) of people by <strong>occupational status</strong>",
				   "Estimated number of non resident people by <strong>occupational status</strong>",
				   "Estimated number of people by <strong>sex</strong>",
				   "Estimated proportion (%) of people by <strong>sex</strong>", //25
				   "Estimated number of non resident people by <strong>sex</strong>",
				   "Estimated number of people by <strong>last mode of transport</strong>",
				   "Estimated proportion (%) of people by <strong>last mode of transport</strong>",
				   "Estimated number of non resident people by <strong>last mode of transport</strong>",
				   "Estimated number of people by <strong>household income</strong>", //30
				   "Estimated proportion (%) of people by <strong>household income</strong>",
				   "Estimated number of non resident people by <strong>household income</strong>",
				   "Estimated number of people by <strong>departement of residence</strong>",
				   "Estimated proportion (%) of people by <strong>departement of residence</strong>",
				   "Estimated number of non resident people by <strong>departement of residence</strong>", //35
				   "Estimated proportion (%) of people according to their residence in/outside <strong>'Poverty Areas'</strong>",
				   "Estimated number of people according to their residence in/outside <strong>'Poverty Areas'</strong>",
				   "Estimated number of non resident people according to their residence in/outside <strong>'Poverty Areas'</strong>",
				   "Estimated proportion (%) of people according to their original <strong> district of residence</strong>",
				   "Estimated number of people according to to their original <strong> district of residence</strong>", //40
				   "Estimated number of people by <strong>age group bis</strong>",
				   "Estimated proportion (%) of people by <strong>age group bis</strong>",
				   "Estimated number of non residents by <strong>age group bis</strong>",
				   "Estimated number of people according their belonging to the <strong>(in)formal sector</strong>",
				   "Estimated proportion (%) of people their belonging to the <strong>(in)formal sector</strong>", //45
				   "Estimated number of non residents their belonging to the <strong>(in)formal sector</strong>",
				   "Estimated number of people by <strong>residential rings</strong>",
				   "Estimated proportion (%) of people by <strong>residential rings</strong>",
				   "Estimated number of non residents by <strong>residential rings</strong>", //49
				   "Estimated number of people according to their residence in the <strong>socio-economic layer</strong>",
				   "Estimated proportion (%) of people according to their residence in the <strong>socio-economic layer</strong>",
				   "Estimated number of non residents according to their residence in the <strong>socio-economic layer</strong>", //52

				   "Estimated proportion (%) of people according to their <strong>household composition</strong>", //53
				   "Estimated number of people according to their <strong>household composition</strong>",
				   "Estimated number of non resident people according to their <strong>household composition</strong>",

				   "Estimated proportion (%) of people according to their <strong>housing tenure status</strong>", //56
				   "Estimated number of people according to their <strong>housing tenure status</strong>",
				   "Estimated number of non resident people according to their <strong>housing tenure status</strong>",

				   // cso
				   "Estimated proportion (%) of people by <strong>socioprofessional status</strong>", //59
				   "Estimated number of people by <strong>socioprofessional status</strong>",
				   "Estimated number of non resident people by <strong>socioprofessional status</strong>",
				   ];


var spanPopup = ["<span class = 'help' onclick = 'popup_mapTitle1()'></span>"];

//Nom des indicateurs
var indicator = ["age groups", "sex", "educational level", "educational h. level",
				"socioprofessional status", "socioprofessional h. status", "occupational status",
				"residential rings", "current activity", "last mode of transport",
				"household income", "departement of residence", "living in/outside 'Poverty Areas'",
				"age groups bis", "professional informality", "residential rings",
				"socio-economic layer of residence", "household composition", "housing tenure status",
				"socioprofessional status"];

// Titres de Duncan et de Moran
var titleSegreg = ["Segregation related to",
				   ": Duncan index <span class = 'help' onclick = 'popup_duncan()'></span>",
                   ": Moran index <span class = 'help' onclick = 'popup_moran()'></span>",
                   "Spatial proximity of population with same"];






// Déclaration des variables appelées dans load.js

//Nom des couches OSM
var overlayName = ['Simple base map', 'Detailed base map', 'Poverty Areas - France',
				   'Municipalities/districts', 'Mobiliscope map', 'Urban/peripheral rings', 
				   'Aerial photo', 'Dark base map'];
var lcHover = ['Layers'];

// Sous-titre du bandeau entête
var subTitle = "Cities around the clock";

// Checkbox
var layersName = ["Main roads", "Main rivers", "Main cities"]

// Copyright
window.copy = "Mobiliscope (" + "<a href='/en/info/open/evolution' target='_blank'>v4.1</a>" + ")";

// Main title des graphiques
var titleGraph1 = "IN THE WHOLE REGION";
var titleGraph2 = "IN THE SELECTED DISTRICT";

// Messages des graphiques
var graph1Message = "Spatial distribution indices are not available for this indicator or this representation mode";
var graph2Message = "Click a district in the map</br>to get local information";

//Nom des onglets des graphiques
var titleAltGr1 = ["Duncan", "Moran"];
var titleAltGr2 = ["Unique", "Stacked"];

// Textes des légendes
var discretMethod = {quintiles:'</br>Discretization in quintiles. ',
					 manuelle:'</br>Manual discretization. ',
					 amplEg:'</br>Equal amplitude discretization. ',
					 seuilNat:'</br>Discretization according to natural thresholds (Jenks). ',
					 sd:"</br>Discretization by mean and standard deviation. ",
					 nestedAve:'Discretization by nested averages. ',
					 arithmProg:'</br>Discretization by arithmetic progression. '};
var textCompar = ["Class intervals remain unchanged over the 24h and in the same region.",
				  "For each group, same class intervals apply over the 24h period in the same region.",
				  "Class intervals remain unchanged over the 24h and for every region.",
				  "Same class intervals apply over the 24 period for all groups of this indicator."
				 ];

var textLegProp = "Circle proportionality remain unchanged for all maps of the same region.";
var textLegFlow = ["Circle proportionality remain unchanged for all maps of the same region.",
				   "Main link thickness represents people flow between districts where they are located and their districts of residence."];
var textLeg = ["Mean:",
			   " or less",
			   "% to ",
			   " or more"];


var Xgraph = ["4am", "6am", "8am", "10am", "12am", "2pm", "4pm", "6pm", "8pm", "10pm", "12pm", "2am"];

var sliderValue = ["4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am"];

var sliderValueDomX = ["4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am"];

// city name "et sa région" + tooltips
var endof = " region";
var tooltipProp = "proportion";
var tooltipDens = "density";
var tooltipNb = "number";
var tooltipFlux = "flow";
var tooltipPlay = "Start animation";
var tooltipPause = "Stop animation";
var alClose = "Close charts";
var alDisplay = "Display charts";

// système de partage de lien
var shareLocalText = ['around the clock','Copied to clipboard!','Copy page url'];
