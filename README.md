# MUI Autocomplete using Django Rest API and Google Spreadsheet API

I made this task(this is not project) for learning purpose where I converted Google Spreadsheed to REST API, then converted data formation using python django and after that I used it on React MUI autocomplete.

## What you will learn: 
___
* How to make Google Spreadsheet to REST API?
* How to use Google Spreadsheet API in Python Django?
* How to Install React JS with vite js according new official Documents?
* How to Connect Django and Reactjs using Django Rest Framework and Fetch API?
* How to Show API data to Material UI or MUI Autocomplete?
* How to Post MUI Autocomplete to Django through API?
* Throttle Time set using loading function

### Tutorial

[![YouTube Tutorial](https://img.youtube.com/vi/XRjLqDjeHjY/0.jpg)](https://www.youtube.com/watch?v=XRjLqDjeHjY)

____


 [Google Spreadsheet Link](https://docs.google.com/spreadsheets/d/1RbnStR4xLjHkSoDsGCO7xHwCl3WhASFZDHGQIY8OdvQ/edit?usp=sharing)


Which `code` I have use at `apps script` of Google spreadsheet:

__Apps Script__

> If you use below code then your data will show

```javascript
function doGet(req) {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getSheetByName('q3');
  var values = sheet.getDataRange().getValues();


  var output = [];
  for(var i = 0; i< values.length; i++) {
    var row = {};
    row['Item ID '] = values[i][0];
    row['Item'] = values[i][1];
    row['tag 1'] = values[i][2];
    row['tag 2'] = values[i][3];
    row['tag 3'] = values[i][4];

    output.push(row);
  }

  return ContentService.createTextOutput(JSON.stringify(output)).setMimeType(ContentService.MimeType.JSON);
}
```
__output__

```json
[
  {
    "Item ID ": "Item ID",
    "Item": "Item",
    "tag 1": "tag 1",
    "tag 2": "tag 2",
    "tag 3": "tag 3"
  },
  {
    "Item ID ": 30003,
    "Item": "Thesis",
    "tag 1": 101,
    "tag 2": 103,
    "tag 3": ""
  },
  {
    "Item ID ": 30004,
    "Item": "Meditation",
    "tag 1": 110,
    "tag 2": 101,
    "tag 3": 111
  },
  {
    "Item ID ": 30005,
    "Item": "Helping",
    "tag 1": 403,
    "tag 2": 203,
    "tag 3": 120
  },
  {
    "Item ID ": 200669,
    "Item": "YouTube",
    "tag 1": 542,
    "tag 2": 87,
    "tag 3": ""
  }
]

```
> here is the problem is spreadheet all columns has not values. For this problem I used below code.


```javascript
function doGet(req) {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getSheetByName('q3');
  var values = sheet.getDataRange().getValues();

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
Output:
```json
[
  [
    "Item ID",
    "Item",
    "tag 1",
    "tag 2",
    "tag 3"
  ],
  [
    "1001",
    "Malaysia",
    "101",
    "102",
    "103"
  ],
  [
    "1002",
    "Turkey",
    "201",
    "202",
    "203"
  ],
  [
    "1003",
    "Bangladesh",
    "301",
    "302",
    "303"
  ]
]
```
___

__For frontend setup__

```bash script
$ git clone https://github.com/mushfiqur-rahman/google_spreadhseetapi_mui_autocomplete.git
```
```bash script
$ cd frontend
```
```bash script
$ frontent> npm install & npm run dev
```
Now open your browser & got to the url
```url
 http://127.0.0.1:5173/
```
___

__For Backend setup__
```bash script
$ cd backend
```
```bash script
$ backend > py -m venv venv
```
```bash script
$ backend > venv\scripts\activate
```
```bash script
$ backend > venv\scripts\activate
```

```python
(venv) PS D:\backend> python -m pip install -r requirements.txt
```
```bash script
(venv) PS D:\backend> py manage.py migrate
```


```bash script
(venv) PS D:\backend> py manage.py runserver
```

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

![mui autocomplete](https://github.com/mushfiqur-rahman/google_spreadhseetapi_mui_autocomplete/assets/26889268/5b477642-14d2-4f06-9263-9331539322d9)

