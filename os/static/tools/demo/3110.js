htmlstr = "<h2>\u6de1\u5165\u6548\u679c<\/h2>\r\n<p>\u9f20\u6807\u79fb\u52a8\u5230\u56fe\u7247\u4e0a\u67e5\u770b\u6548\u679c<\/p>\r\n\r\n<div class=\"container\">\r\n  <img src=\"https:\/\/static.runoob.com\/images\/mix\/img_avatar.png\" alt=\"Avatar\" class=\"image\">\r\n  <div class=\"overlay\">\r\n    <div class=\"text\">Hello World<\/div>\r\n  <\/div>\r\n<\/div>";
cssstr = ".container {\r\n  position: relative;\r\n  width: 50%;\r\n}\r\n\r\n.image {\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  opacity: 0;\r\n  transition: .5s ease;\r\n  background-color: #008CBA;\r\n}\r\n\r\n.container:hover .overlay {\r\n  opacity: 1;\r\n}\r\n\r\n.text {\r\n  color: white;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n}";
