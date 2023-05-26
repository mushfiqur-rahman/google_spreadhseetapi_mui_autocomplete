# MUI Autocomplete using Django Rest API and Google Spreadsheet API

I made this project for learning purpose where I converted Google Spreadsheed to REST API, then converted data formation using python django and after that I used it on React MUI autocomplete. 

### Tutorial

[![YouTube Tutorial](https://img.youtube.com/vi/XRjLqDjeHjY/0.jpg)](https://www.youtube.com/watch?v=XRjLqDjeHjY)


__For frontend__

```bash script
$ git clone https://github.com/mushfiqur-rahman/google_spreadhseetapi_mui_autocomplete.git
```
```bash script
$ cd frontend
```
```bash script
$ frontent> npm install & npm run dev
```
__For Backend__
```bash script
$ cd backend
```
```bash script
$ backend > py -m venv venv
```
```bash script
$ backend > venv\scripts\activate
```
```python
(venv) PS D:\backend> python -m pip install -r requirements.txt
```
```bash script
(venv) PS D:\backend> py manage.py runserver
```

__Apps Script__

```javascript
function doGet(req) {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getSheetByName('q3');
  var values = sheet.getDataRange().getValues();

  // var output = [];
  // for(var i = 0; i< values.length; i++) {
  //   var row = {};
  //   row['Item ID '] = values[i][0];
  //   row['Item'] = values[i][1];
  //   row['tag 1'] = values[i][2];
  //   row['tag 2'] = values[i][3];
  //   row['tag 3'] = values[i][4];

  //   output.push(row);
  // }

  var studentQ3 = values.map(function(row){
    var formattedRow = [];
    for( var i =0; i<row.length; i++){
      var cellValue = row[i].toString().trim();
      if (cellValue !== ""){
        formattedRow.push(cellValue);
      }
    }
    return formattedRow;
  });

  return ContentService.createTextOutput(JSON.stringify(studentQ3)).setMimeType(ContentService.MimeType.JSON);
}
```
____
### Student Needs API URL
```
http://127.0.0.1:8000/q1/
http://127.0.0.1:8000/q2/
http://127.0.0.1:8000/q3/
```

**Post URL**
```
http://127.0.0.1:8000/api/services/
```


### Material UI Autocomplete
![mui autocomplete](https://github.com/mushfiqur-rahman/GS_2_REST_2_DRF_2_MUIAutocomplete/assets/26889268/aa482a6d-5be4-455d-8b17-59463e19edb9)

