var xlsx = require('xlsx');
var json2xls = require('json2xls');

var wb = xlsx.readFile('./excel_test_file.xls');

var sheetName = wb.SheetNames[0];

var getSheet = wb.Sheets[sheetName]

var json = xlsx.utils.sheet_to_json(getSheet);
var parsed = JSON.parse(JSON.stringify(json));


function checkDuplicate() {
    // this.method = function(json) {
    //     for(var i = 0; i <= json.length; i++) {
    //         for(var j = i; j <= json.length; j++) {
    //             if( i != j && json[i] == json[j]) {
    //                 return true;
    //             }
    //         }
    //     }
    //     return false;
    // }
    this.method1 = function(parsed) {
        var count = [];
        for( var i = 0; i <= parsed.length; i++) {
            if(count[parsed[i]] === undefined) {
                count[parsed[i]] = 1;
            } else {
                return console.log("Duplicate exists" + JSON.stringify(parsed[i]));
                
            }
        }
        return console.log("There are no duplicates");
    }
}

function editDup(old, young) {
        var index = parsed.indexOf(old);
        if (~index) {
            parsed[index] = JSON.stringify(young);
        }
}


var check = new checkDuplicate();

var methodOutput = check.method1(parsed);

console.log(methodOutput);

console.log(editDup(methodOutput, "Hello World"));









// var removeDuplicate=((worksheet)=> {

// for (let i = 0; i < json.length; i++) {
//     for(let j=i+1;j<json.length; j++) {
//         if(json[i]['First Name']===json[j]['First Name'] 
//             && json[i]['Last Name']===json[j]['Last Name'] 
//             && json[i]['Gender']===json[j]['Gender']
//             && json[i]['Country']===json[j]['Country']
//             && json[i]['Age']===json[j]['Age']
//             && json[i]['Date']==json[i]['Date']) {
//                 json[j]=" "; // Mark row as duplicate
//         }
//         else if((json[i]['First Name']===json[j]['First Name']
//         && json[i]['Last Name']===json[j]['Last Name']) 
//         && (json[i]['Gender']===json[j]['Gender']
//         || json[i]['Country']===json[j]['Country']
//         || json[i]['Age']===json[j]['Age']
//         || json[i]['Date']==json[i]['Date'])) {
//             json[i]=json[j]
//             json[j]=" "; // Mark row as duplicate
//         }
//         else {
//             continue;
//         }
//     }

// }

// json = json.filter(row => (row + "").trim());
// return json;

// })

// const input = "excel_test_files.xls";
// const sheetDuNom = "Sheet1"

// console.log(json);

// function find_duplicate_in_array(arra1) {
//     var object = {};
//     var result = [];

//     arra1.forEach(function (item) {
//       if(!object[item])
//           object[item] = 0;
//         object[item] += 1;
//     })

//     for (var prop in object) {
//        if(object[prop] >= 2) {
//            result.push(prop);
//        }
//     }

//     return result;

// }