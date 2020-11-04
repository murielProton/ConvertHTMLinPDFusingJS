function ymd(){
    var fullDate = new Date();
    var date = fullDate.getFullYear()+"_"+(fullDate.getMonth()+1)+"_"+fullDate.getDate();
    return date;
}
function myFunction() {
    var date = ymd();
    var doc = new jsPDF('landscape');
    doc.text(20, 20, 'Hello world!' + $("#nom").first().val());
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');

    doc.save('feuille_de_caisse' + date + '.pdf');
}