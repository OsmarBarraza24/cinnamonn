function back(){
    window.location.replace('index.html');
}

function sentEmail(){
 var mail = "mailto:algomez@iswug.net?subject=Asesorias ITSON&body="
 var subject = document.getElementById('text').value;
 var res = mail.concat(subject);
 window.open(res);
 window.location.replace('index.html');
}

