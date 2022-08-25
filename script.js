function eng(){
    loadHtml("./src/index_en.html","container");
}

function jpn(){
    loadHtml("./src/index_ja.html","container");
}

function style(){
    loadHtml("./src/index_ja.html","__style__");
}

function load_header(){
    var html = document.getElementById("box");
    var str = '<header><h1>プライバシーポリシー / Privacypolicy</h1>'
    str += '<input type="button" value="English" onclick="eng()">'
    str += '<input type="button" value="Japanese" onclick="jpn()">'
    str += '</header><main><div id="container"></div></main>'
    html.innerHTML = str

    loadHtml("./src/index_ja.html","container")
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
