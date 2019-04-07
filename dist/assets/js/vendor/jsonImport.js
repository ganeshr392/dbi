
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
   "Client": "Eros Nec Industries",
   "Open invoices": "$58,040",
   "Billable hours": 447,
   "Total Collected": "$2,253",
   "Unbilled Inventory": "$48,874",
   "Unpaid Inventory": "$3,273"
 },
 {
   "Client": "Nullam Corporation",
   "Open invoices": "$49,794",
   "Billable hours": 589,
   "Total Collected": "$3,937",
   "Unbilled Inventory": "$18,938",
   "Unpaid Inventory": "$80,815"
 },
 {
   "Client": "Sodales LLP",
   "Open invoices": "$21,217",
   "Billable hours": 893,
   "Total Collected": "$7,295",
   "Unbilled Inventory": "$72,943",
   "Unpaid Inventory": "$25,938"
 },
 {
   "Client": "Vulputate Corporation",
   "Open invoices": "$52,789",
   "Billable hours": 258,
   "Total Collected": "$2,749",
   "Unbilled Inventory": "$16,444",
   "Unpaid Inventory": "$13,586"
 },
 {
   "Client": "Nisi Dictum Incorporated",
   "Open invoices": "$4,827",
   "Billable hours": 719,
   "Total Collected": "$7,189",
   "Unbilled Inventory": "$55,829",
   "Unpaid Inventory": "$67,676"
 },
 {
   "Client": "Nunc Institute",
   "Open invoices": "$70,212",
   "Billable hours": 961,
   "Total Collected": "$7,715",
   "Unbilled Inventory": "$15,011",
   "Unpaid Inventory": "$37,826"
 },
 {
   "Client": "Risus Corp.",
   "Open invoices": "$81,703",
   "Billable hours": 356,
   "Total Collected": "$2,356",
   "Unbilled Inventory": "$39,354",
   "Unpaid Inventory": "$8,015"
 },
 {
   "Client": "Auctor Limited",
   "Open invoices": "$18,678",
   "Billable hours": 815,
   "Total Collected": "$4,572",
   "Unbilled Inventory": "$29,881",
   "Unpaid Inventory": "$75,898"
 },
 {
   "Client": "Maecenas Ornare Consulting",
   "Open invoices": "$65,698",
   "Billable hours": 526,
   "Total Collected": "$2,691",
   "Unbilled Inventory": "$80,572",
   "Unpaid Inventory": "$49,447"
 },
 {
   "Client": "Donec Company",
   "Open invoices": "$5,031",
   "Billable hours": 426,
   "Total Collected": "$6,177",
   "Unbilled Inventory": "$40,778",
   "Unpaid Inventory": "$77,928"
 },
 {
   "Client": "Egestas Inc.",
   "Open invoices": "$74,490",
   "Billable hours": 625,
   "Total Collected": "$6,602",
   "Unbilled Inventory": "$90,302",
   "Unpaid Inventory": "$86,170"
 },
 {
   "Client": "Orci Phasellus Company",
   "Open invoices": "$52,914",
   "Billable hours": 613,
   "Total Collected": "$5,586",
   "Unbilled Inventory": "$28,181",
   "Unpaid Inventory": "$41,144"
 },
 {
   "Client": "Gravida Praesent Eu LLP",
   "Open invoices": "$74,516",
   "Billable hours": 122,
   "Total Collected": "$8,525",
   "Unbilled Inventory": "$77,397",
   "Unpaid Inventory": "$68,324"
 },
 {
   "Client": "Sodales Purus In LLP",
   "Open invoices": "$77,324",
   "Billable hours": 818,
   "Total Collected": "$4,257",
   "Unbilled Inventory": "$6,411",
   "Unpaid Inventory": "$53,991"
 },
 {
   "Client": "Proin Vel Corp.",
   "Open invoices": "$3,224",
   "Billable hours": 353,
   "Total Collected": "$9,657",
   "Unbilled Inventory": "$39,147",
   "Unpaid Inventory": "$26,992"
 },
 {
   "Client": "Lacinia Foundation",
   "Open invoices": "$77,461",
   "Billable hours": 624,
   "Total Collected": "$9,337",
   "Unbilled Inventory": "$91,948",
   "Unpaid Inventory": "$64,342"
 },
 {
   "Client": "Quam Curabitur Vel Limited",
   "Open invoices": "$44,965",
   "Billable hours": 180,
   "Total Collected": "$4,546",
   "Unbilled Inventory": "$46,475",
   "Unpaid Inventory": "$76,227"
 },
 {
   "Client": "Integer Incorporated",
   "Open invoices": "$91,730",
   "Billable hours": 402,
   "Total Collected": "$5,968",
   "Unbilled Inventory": "$41,668",
   "Unpaid Inventory": "$74,580"
 },
 {
   "Client": "Rhoncus Proin PC",
   "Open invoices": "$28,514",
   "Billable hours": 379,
   "Total Collected": "$4,976",
   "Unbilled Inventory": "$14,562",
   "Unpaid Inventory": "$75,354"
 },
 {
   "Client": "Morbi Tristique LLC",
   "Open invoices": "$30,585",
   "Billable hours": 794,
   "Total Collected": "$9,462",
   "Unbilled Inventory": "$59,794",
   "Unpaid Inventory": "$84,581"
 },
 {
   "Client": "Justo Sit Inc.",
   "Open invoices": "$14,822",
   "Billable hours": 648,
   "Total Collected": "$9,053",
   "Unbilled Inventory": "$80,038",
   "Unpaid Inventory": "$76,256"
 },
 {
   "Client": "Vulputate Risus A LLP",
   "Open invoices": "$85,445",
   "Billable hours": 789,
   "Total Collected": "$1,385",
   "Unbilled Inventory": "$73,745",
   "Unpaid Inventory": "$72,216"
 },
 {
   "Client": "Risus Donec Institute",
   "Open invoices": "$58,221",
   "Billable hours": 492,
   "Total Collected": "$9,956",
   "Unbilled Inventory": "$4,045",
   "Unpaid Inventory": "$17,908"
 },
 {
   "Client": "Aenean Gravida Industries",
   "Open invoices": "$18,980",
   "Billable hours": 215,
   "Total Collected": "$828",
   "Unbilled Inventory": "$29,037",
   "Unpaid Inventory": "$36,008"
 },
 {
   "Client": "Sit Amet Ornare PC",
   "Open invoices": "$30,745",
   "Billable hours": 865,
   "Total Collected": "$7,357",
   "Unbilled Inventory": "$19,073",
   "Unpaid Inventory": "$89,537"
 },
 {
   "Client": "Metus Vitae LLC",
   "Open invoices": "$13,862",
   "Billable hours": 164,
   "Total Collected": "$3,667",
   "Unbilled Inventory": "$16,887",
   "Unpaid Inventory": "$21,934"
 },
 {
   "Client": "Nam Ac Nulla Ltd",
   "Open invoices": "$4,422",
   "Billable hours": 582,
   "Total Collected": "$5,219",
   "Unbilled Inventory": "$78,131",
   "Unpaid Inventory": "$91,322"
 },
 {
   "Client": "Tristique Incorporated",
   "Open invoices": "$80,684",
   "Billable hours": 103,
   "Total Collected": "$1,339",
   "Unbilled Inventory": "$39,092",
   "Unpaid Inventory": "$81,919"
 },
 {
   "Client": "Eu Elit Associates",
   "Open invoices": "$89,781",
   "Billable hours": 586,
   "Total Collected": "$4,790",
   "Unbilled Inventory": "$76,298",
   "Unpaid Inventory": "$82,426"
 },
 {
   "Client": "Dui Industries",
   "Open invoices": "$64,009",
   "Billable hours": 179,
   "Total Collected": "$2,787",
   "Unbilled Inventory": "$23,715",
   "Unpaid Inventory": "$32,482"
 },
 {
   "Client": "Enim Nec Inc.",
   "Open invoices": "$83,332",
   "Billable hours": 825,
   "Total Collected": "$3,062",
   "Unbilled Inventory": "$17,503",
   "Unpaid Inventory": "$77,901"
 },
 {
   "Client": "Quisque Ac Libero Corporation",
   "Open invoices": "$41,292",
   "Billable hours": 811,
   "Total Collected": "$392",
   "Unbilled Inventory": "$35,417",
   "Unpaid Inventory": "$25,469"
 },
 {
   "Client": "Imperdiet Nec Limited",
   "Open invoices": "$64,646",
   "Billable hours": 627,
   "Total Collected": "$7,192",
   "Unbilled Inventory": "$73,961",
   "Unpaid Inventory": "$98,766"
 },
 {
   "Client": "Nibh Phasellus PC",
   "Open invoices": "$5,906",
   "Billable hours": 587,
   "Total Collected": "$4,021",
   "Unbilled Inventory": "$14,015",
   "Unpaid Inventory": "$74,616"
 },
 {
   "Client": "Lobortis Ultrices Consulting",
   "Open invoices": "$3,351",
   "Billable hours": 185,
   "Total Collected": "$9,599",
   "Unbilled Inventory": "$67,558",
   "Unpaid Inventory": "$96,325"
 },
 {
   "Client": "Arcu Eu Ltd",
   "Open invoices": "$4,793",
   "Billable hours": 888,
   "Total Collected": "$9,858",
   "Unbilled Inventory": "$53,892",
   "Unpaid Inventory": "$88,137"
 },
 {
   "Client": "Gravida Praesent Inc.",
   "Open invoices": "$23,326",
   "Billable hours": 865,
   "Total Collected": "$3,172",
   "Unbilled Inventory": "$57,079",
   "Unpaid Inventory": "$53,919"
 },
 {
   "Client": "Semper LLC",
   "Open invoices": "$84,486",
   "Billable hours": 610,
   "Total Collected": "$5,858",
   "Unbilled Inventory": "$26,780",
   "Unpaid Inventory": "$60,066"
 },
 {
   "Client": "Elementum At Egestas LLC",
   "Open invoices": "$66",
   "Billable hours": 402,
   "Total Collected": "$4,021",
   "Unbilled Inventory": "$12,916",
   "Unpaid Inventory": "$44,953"
 },
 {
   "Client": "Tortor At Company",
   "Open invoices": "$53,980",
   "Billable hours": 524,
   "Total Collected": "$4,900",
   "Unbilled Inventory": "$19,186",
   "Unpaid Inventory": "$72,150"
 },
 {
   "Client": "Nulla Foundation",
   "Open invoices": "$93,752",
   "Billable hours": 357,
   "Total Collected": "$461",
   "Unbilled Inventory": "$25,114",
   "Unpaid Inventory": "$34,667"
 },
 {
   "Client": "Ipsum LLP",
   "Open invoices": "$15,940",
   "Billable hours": 357,
   "Total Collected": "$7,744",
   "Unbilled Inventory": "$11,863",
   "Unpaid Inventory": "$15,542"
 },
 {
   "Client": "Suscipit Nonummy LLC",
   "Open invoices": "$34,775",
   "Billable hours": 317,
   "Total Collected": "$7,003",
   "Unbilled Inventory": "$4,368",
   "Unpaid Inventory": "$91,178"
 },
 {
   "Client": "Amet PC",
   "Open invoices": "$95,151",
   "Billable hours": 923,
   "Total Collected": "$7,945",
   "Unbilled Inventory": "$190",
   "Unpaid Inventory": "$5,800"
 },
 {
   "Client": "Justo Eu Arcu Company",
   "Open invoices": "$28,389",
   "Billable hours": 916,
   "Total Collected": "$198",
   "Unbilled Inventory": "$11,714",
   "Unpaid Inventory": "$99,966"
 },
 {
   "Client": "Metus Company",
   "Open invoices": "$1,948",
   "Billable hours": 850,
   "Total Collected": "$7,835",
   "Unbilled Inventory": "$335",
   "Unpaid Inventory": "$67,177"
 },
 {
   "Client": "Duis Industries",
   "Open invoices": "$61,354",
   "Billable hours": 566,
   "Total Collected": "$3,502",
   "Unbilled Inventory": "$18,957",
   "Unpaid Inventory": "$7,504"
 },
 {
   "Client": "Eu Dolor Egestas LLC",
   "Open invoices": "$12,885",
   "Billable hours": 257,
   "Total Collected": "$3,829",
   "Unbilled Inventory": "$36,880",
   "Unpaid Inventory": "$76,776"
 },
 {
   "Client": "Ornare Lectus Ante Consulting",
   "Open invoices": "$67,839",
   "Billable hours": 861,
   "Total Collected": "$137",
   "Unbilled Inventory": "$50,932",
   "Unpaid Inventory": "$24,105"
 }
];


document.getElementById('clientTable').innerHTML += json2table(defaultData, 'table table-striped dt-responsive nowrap', 'basic-datatable');
