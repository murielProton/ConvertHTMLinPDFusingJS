function myFunction()
{
    var doc = new jsPDF('landscape');
    doc.text(20, 20, 'Hello world!'+ $("#nom").first().val());
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');

    doc.save('Test.pdf');
}