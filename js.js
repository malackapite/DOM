window.addEventListener('load',init)

function init(){
    kep();
}

function kep()
{
    var tomb=['https://http.cat/401',
    'https://http.cat/400',
    'https://http.cat/404',
    'https://http.cat/407',
    'https://http.cat/411',
    'https://http.cat/402',
    'https://http.cat/202',
    'https://http.cat/102'];
    document.getElementById('galeria').style.display="grid";
    document.getElementById('galeria').style.gridTemplateColumns="repeat(4,1fr)";
    for(var ix=0; ix<tomb.length;ix++)
        document.getElementById('galeria').innerHTML+="<img src='"+tomb[ix]+ "' alt='kep' width='400px'>";
}
