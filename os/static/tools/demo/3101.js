htmlstr = "<p>\u70b9\u51fb\u6309\u94ae\uff0c\u8868\u683c name \u5b57\u6bb5\u6309\u5b57\u6bcd\u6392\u5e8f:<\/p>\r\n<p><button onclick=\"sortTable()\">\u6392\u5e8f<\/button><\/p>\r\n\r\n<table border=\"1\" id=\"myTable\">\r\n  <tr>\r\n    <th>Name<\/th>\r\n    <th>Country<\/th>\r\n  <\/tr>\r\n  <tr>\r\n    <td>Berglunds snabbkop<\/td>\r\n    <td>Sweden<\/td>\r\n  <\/tr>\r\n  <tr>\r\n    <td>North\/South<\/td>\r\n    <td>UK<\/td>\r\n  <\/tr>\r\n  <tr>\r\n    <td>Alfreds Futterkiste<\/td>\r\n    <td>Germany<\/td>\r\n  <\/tr>\r\n  <tr>\r\n    <td>Koniglich Essen<\/td>\r\n    <td>Germany<\/td>\r\n  <\/tr>\r\n  <tr>\r\n    <td>Magazzini Alimentari Riuniti<\/td>\r\n    <td>Italy<\/td>\r\n  <\/tr>\r\n  <tr>\r\n    <td>Paris specialites<\/td>\r\n    <td>France<\/td>\r\n  <\/tr>\r\n  <tr>\r\n    <td>Island Trading<\/td>\r\n    <td>UK<\/td>\r\n  <\/tr>\r\n  <tr>\r\n    <td>Laughing Bacchus Winecellars<\/td>\r\n    <td>Canada<\/td>\r\n  <\/tr>\r\n<\/table>";
jsstr = "function sortTable() {\r\n  var table, rows, switching, i, x, y, shouldSwitch;\r\n  table = document.getElementById(\"myTable\");\r\n  switching = true;\r\n  \/*Make a loop that will continue until\r\n  no switching has been done:*\/\r\n  while (switching) {\r\n    \/\/start by saying: no switching is done:\r\n    switching = false;\r\n    rows = table.getElementsByTagName(\"TR\");\r\n    \/*Loop through all table rows (except the\r\n    first, which contains table headers):*\/\r\n    for (i = 1; i < (rows.length - 1); i++) {\r\n      \/\/start by saying there should be no switching:\r\n      shouldSwitch = false;\r\n      \/*Get the two elements you want to compare,\r\n      one from current row and one from the next:*\/\r\n      x = rows[i].getElementsByTagName(\"TD\")[0];\r\n      y = rows[i + 1].getElementsByTagName(\"TD\")[0];\r\n      \/\/check if the two rows should switch place:\r\n      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {\r\n        \/\/if so, mark as a switch and break the loop:\r\n        shouldSwitch= true;\r\n        break;\r\n      }\r\n    }\r\n    if (shouldSwitch) {\r\n      \/*If a switch has been marked, make the switch\r\n      and mark that a switch has been done:*\/\r\n      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);\r\n      switching = true;\r\n    }\r\n  }\r\n}";
