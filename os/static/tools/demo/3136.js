htmlstr = "<h2>\u52a0\u8f7d\u6837\u5f0f<\/h2>\n<p><strong>\u6ce8\u610f:<\/strong>  -webkit- \u548c -ms- \u524d\u7f00\u7528\u4e8e\u90a3\u4e9b\u4e0d\u652f\u6301 animation \u548c transform \u5c5e\u6027\u7684\u6d4f\u89c8\u5668\u3002<\/p>\n\n<div class=\"loader\"><\/div>";
cssstr = ".loader {\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid blue;\n  border-right: 16px solid green;\n  border-bottom: 16px solid red;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}";