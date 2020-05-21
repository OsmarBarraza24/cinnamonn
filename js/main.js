function back(){
    window.location.replace('index.html');
}

function addAdvisoryToTable(){

}

function sentEmail(){
 var mail = "mailto:algomez@iswug.net?subject=Asesorias ITSON&body="
 var subject = document.getElementById('text').value;
 var res = mail.concat(subject);
 window.open(res);
 window.location.replace('index.html');
}
    
function goToAsesorias(){
    document.getElementById('asesoria');
    window.location.replace('coursesView.html');    
}

function goToAsesor(){
    document.getElementById('asesor');
    window.location.replace('formAsesor.html');
}

function quitApp(){
        sessionStorage.clear();
        window.location.replace("login.html");
}