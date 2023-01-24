jsonData =JSON.stringify({"menu": {
    "id": "file",
    "value": "File",
    "popup": {
      "menuitem": [
        {"value": "New", "onclick": "CreateNewDoc()"},
        {"value": "Open", "onclick": "OpenDoc()"},
        {"value": "Close", "onclick": "CloseDoc()"}
      ]
    }
  }})

fetch('http://127.0.0.1:5000/updateitems', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: jsonData
    })
    .then(response => response.json())
    .then(data => console.log(data))

// fetch('http://127.0.0.1:5000/items', {
//         method: 'GET',
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))