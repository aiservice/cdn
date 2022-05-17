htmlstr = "<p>\u70b9\u51fb\u5404\u4e2a\u9009\u9879\u5361\u67e5\u770b\u5185\u5bb9:<\/p>\n\n<div class=\"tab\">\n  <button class=\"tablinks\" onclick=\"openCity(event, 'London')\">London<\/button>\n  <button class=\"tablinks\" onclick=\"openCity(event, 'Paris')\">Paris<\/button>\n  <button class=\"tablinks\" onclick=\"openCity(event, 'Tokyo')\">Tokyo<\/button>\n<\/div>\n\n<div id=\"London\" class=\"tabcontent\">\n  <h3>London<\/h3>\n  <p>London is the capital city of England.<\/p>\n<\/div>\n\n<div id=\"Paris\" class=\"tabcontent\">\n  <h3>Paris<\/h3>\n  <p>Paris is the capital of France.<\/p> \n<\/div>\n\n<div id=\"Tokyo\" class=\"tabcontent\">\n  <h3>Tokyo<\/h3>\n  <p>Tokyo is the capital of Japan.<\/p>\n<\/div>";
cssstr = "body {font-family: \"Lato\", sans-serif;}\n\n\/* Style the tab *\/\ndiv.tab {\n    overflow: hidden;\n    border: 1px solid #ccc;\n    background-color: #f1f1f1;\n}\n\n\/* Style the buttons inside the tab *\/\ndiv.tab button {\n    background-color: inherit;\n    float: left;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 14px 16px;\n    transition: 0.3s;\n    font-size: 17px;\n}\n\n\/* Change background color of buttons on hover *\/\ndiv.tab button:hover {\n    background-color: #ddd;\n}\n\n\/* Create an active\/current tablink class *\/\ndiv.tab button.active {\n    background-color: #ccc;\n}\n\n\/* Style the tab content *\/\n.tabcontent {\n    display: none;\n    padding: 6px 12px;\n    border: 1px solid #ccc;\n    border-top: none;\n}";
jsstr = "function openCity(evt, cityName) {\n    var i, tabcontent, tablinks;\n    tabcontent = document.getElementsByClassName(\"tabcontent\");\n    for (i = 0; i < tabcontent.length; i++) {\n        tabcontent[i].style.display = \"none\";
