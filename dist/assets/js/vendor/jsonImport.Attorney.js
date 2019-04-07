
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
   "Client": "Aenean Gravida Industries",
   "Client Attorney": "Orla L. Rollins"
 },
 {
   "Client": "Amet PC",
   "Client Attorney": "Ross T. Wyatt"
 },
 {
   "Client": "Arcu Eu Ltd",
   "Client Attorney": "Brielle U. Hopper"
 },
 {
   "Client": "Auctor Limited",
   "Client Attorney": "Cherokee M. Benson"
 },
 {
   "Client": "Donec Company",
   "Client Attorney": "Abbot T. Travis"
 },
 {
   "Client": "Dui Industries",
   "Client Attorney": "Hilel Q. Hooper"
 },
 {
   "Client": "Duis Industries",
   "Client Attorney": "Nathaniel V. Richmond"
 },
 {
   "Client": "Egestas Inc.",
   "Client Attorney": "Camilla F. Pacheco"
 },
 {
   "Client": "Elementum At Egestas LLC",
   "Client Attorney": "Clementine B. Morton"
 },
 {
   "Client": "Enim Nec Inc.",
   "Client Attorney": "Jasper A. Ward"
 },
 {
   "Client": "Eros Nec Industries",
   "Client Attorney": "Ulric A. Simmons"
 },
 {
   "Client": "Eu Dolor Egestas LLC",
   "Client Attorney": "Hedy Z. Stokes"
 },
 {
   "Client": "Eu Elit Associates",
   "Client Attorney": "Garrison R. Michael"
 },
 {
   "Client": "Gravida Praesent Eu LLP",
   "Client Attorney": "Shaeleigh V. Harrell"
 },
 {
   "Client": "Gravida Praesent Inc.",
   "Client Attorney": "Nina J. Higgins"
 },
 {
   "Client": "Imperdiet Nec Limited",
   "Client Attorney": "Callie T. Gill"
 },
 {
   "Client": "Integer Incorporated",
   "Client Attorney": "Donna I. Bentley"
 },
 {
   "Client": "Ipsum LLP",
   "Client Attorney": "Warren B. Camacho"
 },
 {
   "Client": "Justo Eu Arcu Company",
   "Client Attorney": "Haley N. Lewis"
 },
 {
   "Client": "Justo Sit Inc.",
   "Client Attorney": "Hyacinth P. Sweet"
 },
 {
   "Client": "Lacinia Foundation",
   "Client Attorney": "Kadeem V. Pittman"
 },
 {
   "Client": "Lobortis Ultrices Consulting",
   "Client Attorney": "Denise T. Cook"
 },
 {
   "Client": "Maecenas Ornare Consulting",
   "Client Attorney": "Carly C. Porter"
 },
 {
   "Client": "Metus Company",
   "Client Attorney": "Damian L. Hines"
 },
 {
   "Client": "Metus Vitae LLC",
   "Client Attorney": "Dora P. Martinez"
 },
 {
   "Client": "Morbi Tristique LLC",
   "Client Attorney": "Nasim Q. Hooper"
 },
 {
   "Client": "Nam Ac Nulla Ltd",
   "Client Attorney": "Ronan F. Chandler"
 },
 {
   "Client": "Nibh Phasellus PC",
   "Client Attorney": "Yael M. Gross"
 },
 {
   "Client": "Nisi Dictum Incorporated",
   "Client Attorney": "Adara Q. Richard"
 },
 {
   "Client": "Nulla Foundation",
   "Client Attorney": "Tyler M. Gray"
 },
 {
   "Client": "Nullam Corporation",
   "Client Attorney": "Julian L. Mullins"
 },
 {
   "Client": "Nunc Institute",
   "Client Attorney": "Cody G. Melendez"
 },
 {
   "Client": "Orci Phasellus Company",
   "Client Attorney": "Ronan S. Norman"
 },
 {
   "Client": "Ornare Lectus Ante Consulting",
   "Client Attorney": "Basia L. Keith"
 },
 {
   "Client": "Proin Vel Corp.",
   "Client Attorney": "Allegra V. Blake"
 },
 {
   "Client": "Quam Curabitur Vel Limited",
   "Client Attorney": "Kato K. Daniel"
 },
 {
   "Client": "Quisque Ac Libero Corporation",
   "Client Attorney": "Shay I. Mcdowell"
 },
 {
   "Client": "Rhoncus Proin PC",
   "Client Attorney": "Nash H. Holt"
 },
 {
   "Client": "Risus Corp.",
   "Client Attorney": "Jena D. Lancaster"
 },
 {
   "Client": "Risus Donec Institute",
   "Client Attorney": "Neve L. Ferrell"
 },
 {
   "Client": "Semper LLC",
   "Client Attorney": "Jelani W. Delacruz"
 },
 {
   "Client": "Sit Amet Ornare PC",
   "Client Attorney": "Victoria L. Schneider"
 },
 {
   "Client": "Sodales LLP",
   "Client Attorney": "Upton P. Johnson"
 },
 {
   "Client": "Sodales Purus In LLP",
   "Client Attorney": "Brody K. Walls"
 },
 {
   "Client": "Suscipit Nonummy LLC",
   "Client Attorney": "Belle M. Webb"
 },
 {
   "Client": "Tortor At Company",
   "Client Attorney": "Sylvia K. Obrien"
 },
 {
   "Client": "Tristique Incorporated",
   "Client Attorney": "Ronan L. Mcknight"
 },
 {
   "Client": "Vulputate Corporation",
   "Client Attorney": "Anjolie M. Dickerson"
 },
 {
   "Client": "Vulputate Risus A LLP",
   "Client Attorney": "Theodore I. Lawson"
 }
];


document.getElementById('clientAttorneyTable').innerHTML += json2table(defaultData, 'table table-striped dt-responsive nowrap', 'basic-datatable');
