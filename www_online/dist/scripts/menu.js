var map={},item={},language=$("html").attr("lang"),cities=Array(),sec={},secN={},currSect=[];function init(e,s){var t=window.location.pathname,a=t.slice(11);Object.keys(e).forEach((function(s){var t=window.location.search,n=new URLSearchParams(t);e[s].sec_com==n.get("s")&&e[s].id==a&&$("#nameSect").html(e[s].libsec)})),"fr"===t.slice(1,3)?($(".dropLang").css("background-image","url('/dist/assets/french-flag-arrow.svg')"),$(".langchoice").css("background-image","url('/dist/assets/uk-flag.svg')"),$(".langchoice2").css("background-image","url('/dist/assets/es-flag.svg')")):"en"===t.slice(1,3)?($(".dropLang").css("background-image","url('/dist/assets/uk-flag-arrow.svg')"),$(".langchoice").css("background-image","url('/dist/assets/french-flag.svg')"),$(".langchoice2").css("background-image","url('/dist/assets/es-flag.svg')")):($(".dropLang").css("background-image","url('/dist/assets/es-flag-arrow.svg')"),$(".langchoice").css("background-image","url('/dist/assets/uk-flag.svg')"),$(".langchoice2").css("background-image","url('/dist/assets/french-flag.svg')")),$(".niv3 button").click((function(e){$(".niv3 button").closest().css("background-color","red")})),$("#submit").click((function(){alert("The selected Value is "+$("ul").find(".selected").data("value"))})),$(".toggle-nav").on("click",(function(e){$(".full-menu").show("fast",(function(){$(this).toggleClass("active")})),$("#close-menu-btn").click((function(){$(".full-menu").removeClass("active")}))})),$("ul").on("click",".init",(function(){$(this).closest("ul").children("li:not(.init)").slideDown()})),$(".search-input-btn").click((function(e){$("#topbar-search").val(""),$("#topbar-search").hasClass("focus")?($("#topbar-search").removeClass("focus"),$(".search-input-btn").css("background-image","url(/dist/assets/search-black.svg)"),$("#topbar-search").val("")):($("#topbar-search").addClass("focus"),$(".search-input-btn").css("background-image","url(/dist/assets/search-orange.svg)"),$("#topbar-search").val(""));const s=$(window).width();"none"==$("#topbar-search-mobile").css("display")&&s<1024?($("#topbar-search-mobile").css("display","inherit").focus(),$(".twitter-typeahead").css("height","66px")):($("#topbar-search-mobile").css("display","none"),$(".twitter-typeahead").css("height","0px")),e.preventDefault()})),$(".top-search").click((function(e){$("#cityName").toggleClass("hidden"),$(".topbar .top-search-container").toggleClass("down"),$("#search-bar").focus(),e.preventDefault()})),$(".typeahead").typeahead({hint:!1,highlight:!0,minLength:2,accent:!0},{limit:15,name:"cities",source:substringMatcher(e)}),$(".typeahead").bind("typeahead:select",(function(e,s){currSect=[sec[s],secN[s]];var t="/"+language+"/geoviz/"+map[s]+"?m1=2&m2=1&m3=3&m4=nb&t=14&s="+currSect[0];window.location=t})),$(".typeahead").bind("typeahead:active",(function(e,s){$("#topbar-search").attr("autocomplete","new-password"),$("#search-box").attr("autocomplete","new-password")})),s()}$("#scrolling-down").click((function(){$(".topbar .full-menu.active").animate({scrollTop:$("html, body").get(0).scrollHeight},2e3)})),$("#scrolling-up").click((function(){$(".topbar .full-menu.active").animate({scrollTop:0},1e3)})),$("#scrolling-down").on("mouseover",(function(){$(this).find("img").attr("src","/dist/assets/scroll-orange.svg")})),$("#scrolling-up").on("mouseover",(function(){$(this).find("img").attr("src","/dist/assets/scroll-orange.svg")})),$("#scrolling-down").on("mouseleave",(function(){$(this).find("img").attr("src","/dist/assets/scroll.svg")})),$("#scrolling-up").on("mouseleave",(function(){$(this).find("img").attr("src","/dist/assets/scroll.svg")}));var substringMatcher=function(e){return function(s,t){var a;a=[];var n={à:"a",á:"a",â:"a",é:"e",è:"e",ê:"e",ë:"e",É:"e",ï:"i",î:"i",ô:"o",ö:"o",û:"u",ù:"u",ü:"u",ñ:"n","-":" ",ã:"a",Ã:"a",Í:"i",í:"i",Ó:"o",ó:"o",Ú:"u",ú:"u",Á:"a",Ñ:"n"};const o=(c=s,$.each(n,(function(e,s){var t=new RegExp(e,"i");c=(c=c.replace(t,s)).toUpperCase()})),c);var c;substrRegex=new RegExp(o,"i"),$.each(e,(function(e,t){map[t.name]=t.id,sec[t.name]=t.sec_com,secN[t.name]=t.libsec,function(e){return $.each(n,(function(s,t){var a=new RegExp(s,"gi");e=(e=e.replace(a,t)).toUpperCase()})),e}(t.name).substr(0,s.length).toUpperCase()!=s.toUpperCase()&&t.name.substr(0,s.length).toUpperCase()!=s.toUpperCase()||(a.push(t.name),a.sort((function(e,s){return e.localeCompare(s)})))})),t(a)}};function is_touch_device(){var e,s=" -webkit- -moz- -o- -ms- ".split(" ");return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)||(e=["(",s.join("touch-enabled),("),"heartz",")"].join(""),window.matchMedia(e).matches)}function isIE(){return null!==window.navigator.userAgent.match(/MSIE|Trident/)}function ShowIEAlert(){isIE()&&("fr"==language?alert("Désolé, votre navigateur est trop ancien pour consulter le Mobiliscope. Merci d'utiliser une version récente de Firefox ou Chrome"):alert("Sorry your browser is too old to display Mobiliscope. Please use a recent version of Firefox or Chrome."))}$(document).ready((function(){if(ShowIEAlert(),is_touch_device()){var e=d3.select("body");$("svg").length&&(e.on("dblclick.zoom",null).on("touchstart.zoom",null).on("mousewheel.zoom",null).on("MozMousePixelScroll.zoom",null),$("body").keyup((function(s){"17"==s.which&&e.on("wheel.zoom",null)})))}$.getJSON("/cities/cities_list.json",(function(e){init(e,(function(){$.getScript("/dist/scripts/home-layers.js",(function(){"undefined"!=typeof printMap1&&$.isFunction(printMap1)&&printMap1(),"undefined"!=typeof printMap2&&$.isFunction(printMap2)&&printMap2(),"undefined"!=typeof printMap3&&$.isFunction(printMap3)&&printMap3()}))}))})),$("body").on("click",(function(e){"search-input-btn"!=e.target.className&&"typeahead tt-input focus"!=e.target.className&&$("#topbar-search").hasClass("focus")&&($("#topbar-search").removeClass("focus"),$(".search-input-btn").css("background-image","url(/dist/assets/search-black.svg)"))}))}));