function eng(){
    loadHtml("./src/index_en.html","container");
}

function jpn(){
    loadHtml("./src/index_ja.html","container");
}

function loadHtml(html_,place){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET",html_,true);
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState==4&&xmlhttp.status==200){
            var data = xmlhttp.responseText;
            var element = document.getElementById(place);
            element.innerHTML = data;
        }
        return data;
    }
    xmlhttp.send(null);
}
