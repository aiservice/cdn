htmlstr = "<div id=\"mySidenav\" class=\"sidenav\">\r\n  <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;<\/a>\r\n  <a href=\"#\">About<\/a>\r\n  <a href=\"#\">Services<\/a>\r\n  <a href=\"#\">Clients<\/a>\r\n  <a href=\"#\">Contact<\/a>\r\n<\/div>\r\n\r\n<h2>\u53f3\u4fa7\u4fa7\u8fb9\u680f<\/h2>\r\n<p>\u70b9\u51fb\u4ee5\u4e0b\u83dc\u5355\u56fe\u6807\u6253\u5f00\u4fa7\u8fb9\u680f\uff0c\u5e76\u663e\u793a\u5728\u53f3\u4fa7\u3002<\/p>\r\n<span style=\"font-size:30px;cursor:pointer\" onclick=\"openNav()\">&#9776; \u6253\u5f00<\/span>";
cssstr = "body {\r\n    font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n.sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n}\r\n\r\n.sidenav a:hover, .offcanvas a:focus{\r\n    color: #f1f1f1;\r\n}\r\n\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {padding-top: 15px;}\r\n  .sidenav a {font-size: 18px;}\r\n}";
jsstr = "function openNav() {\r\n    document.getElementById(\"mySidenav\").style.width = \"250px\";