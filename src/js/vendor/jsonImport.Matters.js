
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
   "Matter": "Accumsan Convallis Inc.",
   "Closing Date": "03/12/20",
   "Current Budget": "$29,078",
   "Lead Attorney": "Zia E. Howell",
   "Client Attorney": "Orla L. Rollins"
 },
 {
   "Matter": "Ante Blandit Viverra Company",
   "Closing Date": "05/20/20",
   "Current Budget": "$40,117",
   "Lead Attorney": "Zelenia Z. Perez",
   "Client Attorney": "Ross T. Wyatt"
 },
 {
   "Matter": "Augue Inc.",
   "Closing Date": "05/06/18",
   "Current Budget": "$86,502",
   "Lead Attorney": "Kadeem K. Jacobson",
   "Client Attorney": "Brielle U. Hopper"
 },
 {
   "Matter": "Blandit Viverra PC",
   "Closing Date": "12/08/18",
   "Current Budget": "$87,254",
   "Lead Attorney": "Hiroko G. Patrick",
   "Client Attorney": "Cherokee M. Benson"
 },
 {
   "Matter": "Cras Eget Nisi PC",
   "Closing Date": "02/20/19",
   "Current Budget": "$88,121",
   "Lead Attorney": "Erasmus T. Garrison",
   "Client Attorney": "Abbot T. Travis"
 },
 {
   "Matter": "Cum Sociis Natoque Limited",
   "Closing Date": "05/20/20",
   "Current Budget": "$99,939",
   "Lead Attorney": "Shad N. Obrien",
   "Client Attorney": "Hilel Q. Hooper"
 },
 {
   "Matter": "Curabitur Egestas Nunc LLP",
   "Closing Date": "06/18/18",
   "Current Budget": "$62,131",
   "Lead Attorney": "Alexa G. Rowland",
   "Client Attorney": "Nathaniel V. Richmond"
 },
 {
   "Matter": "Eget Dictum LLP",
   "Closing Date": "12/21/19",
   "Current Budget": "$44,664",
   "Lead Attorney": "Arden D. Kane",
   "Client Attorney": "Camilla F. Pacheco"
 },
 {
   "Matter": "Enim Gravida Corporation",
   "Closing Date": "05/05/20",
   "Current Budget": "$70,275",
   "Lead Attorney": "Xenos J. Clemons",
   "Client Attorney": "Clementine B. Morton"
 },
 {
   "Matter": "Enim Mauris Foundation",
   "Closing Date": "09/25/18",
   "Current Budget": "$80,800",
   "Lead Attorney": "Bo W. Richards",
   "Client Attorney": "Jasper A. Ward"
 },
 {
   "Matter": "Et Foundation",
   "Closing Date": "06/08/19",
   "Current Budget": "$29,350",
   "Lead Attorney": "Jennifer O. Glover",
   "Client Attorney": "Ulric A. Simmons"
 },
 {
   "Matter": "Et Lacinia Vitae Corporation",
   "Closing Date": "05/06/19",
   "Current Budget": "$25,325",
   "Lead Attorney": "Galena B. Wiley",
   "Client Attorney": "Hedy Z. Stokes"
 },
 {
   "Matter": "Et Rutrum Eu LLC",
   "Closing Date": "11/09/19",
   "Current Budget": "$21,998",
   "Lead Attorney": "Ocean P. Moody",
   "Client Attorney": "Garrison R. Michael"
 },
 {
   "Matter": "Eu Limited",
   "Closing Date": "11/30/19",
   "Current Budget": "$75,488",
   "Lead Attorney": "Jennifer K. Meyer",
   "Client Attorney": "Shaeleigh V. Harrell"
 },
 {
   "Matter": "Eu LLP",
   "Closing Date": "10/09/18",
   "Current Budget": "$55,384",
   "Lead Attorney": "Cassandra R. Hammond",
   "Client Attorney": "Nina J. Higgins"
 },
 {
   "Matter": "Eu PC",
   "Closing Date": "08/03/18",
   "Current Budget": "$31,328",
   "Lead Attorney": "Marny R. Fisher",
   "Client Attorney": "Callie T. Gill"
 },
 {
   "Matter": "Euismod Industries",
   "Closing Date": "07/19/19",
   "Current Budget": "$33,509",
   "Lead Attorney": "Cameron K. Turner",
   "Client Attorney": "Donna I. Bentley"
 },
 {
   "Matter": "Euismod Urna Nullam Associates",
   "Closing Date": "10/12/19",
   "Current Budget": "$59,439",
   "Lead Attorney": "Roth S. Gates",
   "Client Attorney": "Warren B. Camacho"
 },
 {
   "Matter": "Felis Orci Corp.",
   "Closing Date": "03/26/19",
   "Current Budget": "$44,532",
   "Lead Attorney": "Ulric Y. Singleton",
   "Client Attorney": "Haley N. Lewis"
 },
 {
   "Matter": "Fermentum Arcu Vestibulum Limited",
   "Closing Date": "02/26/20",
   "Current Budget": "$54,336",
   "Lead Attorney": "Imelda T. Hayden",
   "Client Attorney": "Hyacinth P. Sweet"
 },
 {
   "Matter": "Fusce LLC",
   "Closing Date": "07/05/19",
   "Current Budget": "$24,460",
   "Lead Attorney": "Ingrid B. Henderson",
   "Client Attorney": "Kadeem V. Pittman"
 },
 {
   "Matter": "In Condimentum Donec Incorporated",
   "Closing Date": "05/08/18",
   "Current Budget": "$80,528",
   "Lead Attorney": "Gillian W. Parks",
   "Client Attorney": "Denise T. Cook"
 },
 {
   "Matter": "Justo Proin Consulting",
   "Closing Date": "05/19/19",
   "Current Budget": "$95,201",
   "Lead Attorney": "Maggie I. Morrow",
   "Client Attorney": "Carly C. Porter"
 },
 {
   "Matter": "Lacinia At LLP",
   "Closing Date": "10/05/19",
   "Current Budget": "$34,617",
   "Lead Attorney": "Jena B. Wheeler",
   "Client Attorney": "Damian L. Hines"
 },
 {
   "Matter": "Lacus PC",
   "Closing Date": "11/27/19",
   "Current Budget": "$84,566",
   "Lead Attorney": "Silas A. Adkins",
   "Client Attorney": "Dora P. Martinez"
 },
 {
   "Matter": "Lobortis Quis Pede Industries",
   "Closing Date": "06/23/20",
   "Current Budget": "$50,257",
   "Lead Attorney": "Mohammad L. Norman",
   "Client Attorney": "Nasim Q. Hooper"
 },
 {
   "Matter": "Maecenas Iaculis Aliquet Corp.",
   "Closing Date": "04/20/18",
   "Current Budget": "$44,105",
   "Lead Attorney": "Daniel N. Branch",
   "Client Attorney": "Ronan F. Chandler"
 },
 {
   "Matter": "Magnis Dis Corporation",
   "Closing Date": "07/02/19",
   "Current Budget": "$16,288",
   "Lead Attorney": "Elizabeth M. Moody",
   "Client Attorney": "Yael M. Gross"
 },
 {
   "Matter": "Malesuada Foundation",
   "Closing Date": "07/19/19",
   "Current Budget": "$28,853",
   "Lead Attorney": "Calvin T. Harrington",
   "Client Attorney": "Adara Q. Richard"
 },
 {
   "Matter": "Molestie Company",
   "Closing Date": "05/13/20",
   "Current Budget": "$69,426",
   "Lead Attorney": "Karly O. Malone",
   "Client Attorney": "Tyler M. Gray"
 },
 {
   "Matter": "Molestie Tellus Aenean Foundation",
   "Closing Date": "04/30/20",
   "Current Budget": "$33,657",
   "Lead Attorney": "Jason G. Mcleod",
   "Client Attorney": "Julian L. Mullins"
 },
 {
   "Matter": "Nisl Elementum Incorporated",
   "Closing Date": "07/14/18",
   "Current Budget": "$85,289",
   "Lead Attorney": "Hector V. Oneal",
   "Client Attorney": "Cody G. Melendez"
 },
 {
   "Matter": "Orci Ut Corporation",
   "Closing Date": "04/27/18",
   "Current Budget": "$33,706",
   "Lead Attorney": "Ursula Y. Ruiz",
   "Client Attorney": "Ronan S. Norman"
 },
 {
   "Matter": "Pede LLP",
   "Closing Date": "07/16/19",
   "Current Budget": "$31,413",
   "Lead Attorney": "Lani X. Nicholson",
   "Client Attorney": "Basia L. Keith"
 },
 {
   "Matter": "Penatibus Et Corp.",
   "Closing Date": "03/11/18",
   "Current Budget": "$20,484",
   "Lead Attorney": "Zorita E. Barrett",
   "Client Attorney": "Allegra V. Blake"
 },
 {
   "Matter": "Penatibus Et Industries",
   "Closing Date": "07/18/18",
   "Current Budget": "$97,497",
   "Lead Attorney": "Wynne Y. Bauer",
   "Client Attorney": "Kato K. Daniel"
 },
 {
   "Matter": "Pharetra Industries",
   "Closing Date": "09/07/19",
   "Current Budget": "$44,574",
   "Lead Attorney": "Indigo O. Holloway",
   "Client Attorney": "Shay I. Mcdowell"
 },
 {
   "Matter": "Sagittis Felis Corporation",
   "Closing Date": "12/28/19",
   "Current Budget": "$25,824",
   "Lead Attorney": "Dante U. Hayden",
   "Client Attorney": "Nash H. Holt"
 },
 {
   "Matter": "Sed Dictum LLC",
   "Closing Date": "11/18/18",
   "Current Budget": "$62,055",
   "Lead Attorney": "Nevada R. Bell",
   "Client Attorney": "Jena D. Lancaster"
 },
 {
   "Matter": "Sit Amet Ante Incorporated",
   "Closing Date": "03/17/19",
   "Current Budget": "$44,724",
   "Lead Attorney": "Dawn O. Frazier",
   "Client Attorney": "Neve L. Ferrell"
 },
 {
   "Matter": "Sit Amet Consectetuer Company",
   "Closing Date": "05/20/19",
   "Current Budget": "$38,296",
   "Lead Attorney": "Tarik N. Lancaster",
   "Client Attorney": "Jelani W. Delacruz"
 },
 {
   "Matter": "Sit Amet Risus Corporation",
   "Closing Date": "01/09/19",
   "Current Budget": "$68,102",
   "Lead Attorney": "Orlando L. Quinn",
   "Client Attorney": "Victoria L. Schneider"
 },
 {
   "Matter": "Sit Amet Risus Foundation",
   "Closing Date": "04/19/18",
   "Current Budget": "$36,857",
   "Lead Attorney": "Wallace X. Brown",
   "Client Attorney": "Upton P. Johnson"
 },
 {
   "Matter": "Ullamcorper Duis At Limited",
   "Closing Date": "03/02/20",
   "Current Budget": "$70,023",
   "Lead Attorney": "Yoko P. Hammond",
   "Client Attorney": "Brody K. Walls"
 },
 {
   "Matter": "Vel Quam Dignissim Consulting",
   "Closing Date": "12/17/18",
   "Current Budget": "$78,946",
   "Lead Attorney": "Nyssa T. Barnes",
   "Client Attorney": "Belle M. Webb"
 },
 {
   "Matter": "Vestibulum Massa LLC",
   "Closing Date": "07/07/19",
   "Current Budget": "$88,119",
   "Lead Attorney": "Merrill V. Adkins",
   "Client Attorney": "Sylvia K. Obrien"
 },
 {
   "Matter": "Vitae Inc.",
   "Closing Date": "12/12/19",
   "Current Budget": "$98,491",
   "Lead Attorney": "Sacha X. Barrera",
   "Client Attorney": "Ronan L. Mcknight"
 },
 {
   "Matter": "Vitae Ltd",
   "Closing Date": "09/06/18",
   "Current Budget": "$85,608",
   "Lead Attorney": "John Z. Singleton",
   "Client Attorney": "Anjolie M. Dickerson"
 },
 {
   "Matter": "Vulputate Risus Inc.",
   "Closing Date": "12/25/18",
   "Current Budget": "$21,937",
   "Lead Attorney": "Nell Y. Wooten",
   "Client Attorney": "Theodore I. Lawson"
 }
]


document.getElementById('matterTable').innerHTML += json2table(defaultData, 'table table-striped dt-responsive nowrap', 'basic-datatable');
