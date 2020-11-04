function ymd(){
    var fullDate = new Date();
    var date = fullDate.getFullYear()+"_"+(fullDate.getMonth()+1)+"_"+fullDate.getDate();
    return date;
}
function myFunction() {
    var date = ymd();
    var doc = new jsPDF('landscape');
    var firstName = document.getElementById("prenom").value;
    doc.text(5, 10, firstName);
    doc.text(5, 15, document.getElementById("nom").value);
    doc.save('feuille_de_caisse_'+ date + '.pdf');
}