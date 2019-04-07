
 /* The function */

function json2table(json, classes, id) {
  var cols = Object.keys(json[0]);
  
  var headerRow = '';
  var bodyRows = '';
  
  classes = classes || '';

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  cols.map(function(col) {
    headerRow += '<th>' + capitalizeFirstLetter(col) + '</th>';
  });

  json.map(function(row) {
    bodyRows += '<tr>';

    cols.map(function(colName) {
      bodyRows += '<td>' + row[colName] + '</td>';
    })

    bodyRows += '<td><a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a><a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a></td></tr>';
  });

  return '<table id="'+id+'" class="' +
         classes +
         '"><thead><tr>' +
         headerRow +
         '<th style="width: 75px;">Action</th></tr></thead><tbody>' +
         bodyRows +
         '</tbody></table>';
}

/* Client Billings Data */

var defaultData = [
 {
   "Lead Attorney": "Alexa G. Rowland"
 },
 {
   "Lead Attorney": "Arden D. Kane"
 },
 {
   "Lead Attorney": "Bo W. Richards"
 },
 {
   "Lead Attorney": "Calvin T. Harrington"
 },
 {
   "Lead Attorney": "Cameron K. Turner"
 },
 {
   "Lead Attorney": "Cassandra R. Hammond"
 },
 {
   "Lead Attorney": "Daniel N. Branch"
 },
 {
   "Lead Attorney": "Dante U. Hayden"
 },
 {
   "Lead Attorney": "Dawn O. Frazier"
 },
 {
   "Lead Attorney": "Elizabeth M. Moody"
 },
 {
   "Lead Attorney": "Erasmus T. Garrison"
 },
 {
   "Lead Attorney": "Galena B. Wiley"
 },
 {
   "Lead Attorney": "Gillian W. Parks"
 },
 {
   "Lead Attorney": "Hector V. Oneal"
 },
 {
   "Lead Attorney": "Hiroko G. Patrick"
 },
 {
   "Lead Attorney": "Imelda T. Hayden"
 },
 {
   "Lead Attorney": "Indigo O. Holloway"
 },
 {
   "Lead Attorney": "Ingrid B. Henderson"
 },
 {
   "Lead Attorney": "Jason G. Mcleod"
 },
 {
   "Lead Attorney": "Jena B. Wheeler"
 },
 {
   "Lead Attorney": "Jennifer K. Meyer"
 },
 {
   "Lead Attorney": "Jennifer O. Glover"
 },
 {
   "Lead Attorney": "John Z. Singleton"
 },
 {
   "Lead Attorney": "Kadeem K. Jacobson"
 },
 {
   "Lead Attorney": "Karly O. Malone"
 },
 {
   "Lead Attorney": "Lani X. Nicholson"
 },
 {
   "Lead Attorney": "Maggie I. Morrow"
 },
 {
   "Lead Attorney": "Marny R. Fisher"
 },
 {
   "Lead Attorney": "Merrill V. Adkins"
 },
 {
   "Lead Attorney": "Mohammad L. Norman"
 },
 {
   "Lead Attorney": "Nell Y. Wooten"
 },
 {
   "Lead Attorney": "Nevada R. Bell"
 },
 {
   "Lead Attorney": "Nyssa T. Barnes"
 },
 {
   "Lead Attorney": "Ocean P. Moody"
 },
 {
   "Lead Attorney": "Orlando L. Quinn"
 },
 {
   "Lead Attorney": "Roth S. Gates"
 },
 {
   "Lead Attorney": "Sacha X. Barrera"
 },
 {
   "Lead Attorney": "Shad N. Obrien"
 },
 {
   "Lead Attorney": "Silas A. Adkins"
 },
 {
   "Lead Attorney": "Tarik N. Lancaster"
 },
 {
   "Lead Attorney": "Ulric Y. Singleton"
 },
 {
   "Lead Attorney": "Ursula Y. Ruiz"
 },
 {
   "Lead Attorney": "Wallace X. Brown"
 },
 {
   "Lead Attorney": "Wynne Y. Bauer"
 },
 {
   "Lead Attorney": "Xenos J. Clemons"
 },
 {
   "Lead Attorney": "Yoko P. Hammond"
 },
 {
   "Lead Attorney": "Zelenia Z. Perez"
 },
 {
   "Lead Attorney": "Zia E. Howell"
 },
 {
   "Lead Attorney": "Zorita E. Barrett"
 }
];


document.getElementById('leadAttorneyTable').innerHTML += json2table(defaultData, 'table table-striped dt-responsive nowrap', 'basic-datatable');
