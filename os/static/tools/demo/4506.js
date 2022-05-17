htmlstr = "<script src=\"https:\/\/cdn.staticfile.org\/jquery\/1.10.2\/jquery.min.js\"><\/script>\r\n<div id=\"jsi-particle-container\" class=\"container\"><\/div>";
cssstr = "html,body {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n}\r\n.container{\r\n    width: 100\uff05;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: #000000;\r\n}";
jsstr = "var RENDERER = {\r\n\tPARTICLE_COUNT : 1000,\r\n\tPARTICLE_RADIUS : 1,\r\n\tMAX_ROTATION_ANGLE : Math.PI \/ 60,\r\n\tTRANSLATION_COUNT : 500,\r\n\t\r\n\tinit : function(strategy){\r\n\t\tthis.setParameters(strategy);\r\n\t\tthis.createParticles();\r\n\t\tthis.setupFigure();\r\n\t\tthis.reconstructMethod();\r\n\t\tthis.bindEvent();\r\n\t\tthis.drawFigure();\r\n\t},\r\n\tsetParameters : function(strategy){\r\n\t\tthis.$window = $(window);\r\n\t\t\r\n\t\tthis.$container = $('#jsi-particle-container');\r\n\t\tthis.width = this.$container.width();\r\n\t\tthis.height = this.$container.height();\r\n\t\t\r\n\t\tthis.$canvas = $('<canvas \/>').attr({width : this.width, height : this.height}).appendTo(this.$container);\r\n\t\tthis.context = this.$canvas.get(0).getContext('2d');\r\n\t\t\r\n\t\tthis.center = {x : this.width \/ 2, y : this.height \/ 2};\r\n\t\t\r\n\t\tthis.rotationX = this.MAX_ROTATION_ANGLE;\r\n\t\tthis.rotationY = this.MAX_ROTATION_ANGLE;\r\n\t\tthis.strategyIndex = 0;\r\n\t\tthis.translationCount = 0;\r\n\t\tthis.theta = 0;\r\n\t\t\r\n\t\tthis.strategies = strategy.getStrategies();\r\n\t\tthis.particles = [];\r\n\t},\r\n\tcreateParticles : function(){\r\n\t\tfor(var i = 0; i < this.PARTICLE_COUNT; i ++){\r\n\t\t\tthis.particles.push(new PARTICLE(this.center));\r\n\t\t}\r\n\t},\r\n\treconstructMethod : function(){\r\n\t\tthis.setupFigure = this.setupFigure.bind(this);\r\n\t\tthis.drawFigure = this.drawFigure.bind(this);\r\n\t\tthis.changeAngle = this.changeAngle.bind(this);\r\n\t},\r\n\tbindEvent : function(){\r\n\t\tthis.$container.on('click', this.setupFigure);\r\n\t\tthis.$container.on('mousemove', this.changeAngle);\r\n\t},\r\n\tchangeAngle : function(event){\r\n\t\tvar offset = this.$container.offset(),\r\n\t\t\tx = event.clientX - offset.left + this.$window.scrollLeft(),\r\n\t\t\ty = event.clientY - offset.top + this.$window.scrollTop();\r\n\t\t\r\n\t\tthis.rotationX = (this.center.y - y) \/ this.center.y * this.MAX_ROTATION_ANGLE;\r\n\t\tthis.rotationY = (this.center.x - x) \/ this.center.x * this.MAX_ROTATION_ANGLE;\r\n\t},\r\n\tsetupFigure : function(){\r\n\t\tfor(var i = 0, length = this.particles.length; i < length; i++){\r\n\t\t\tthis.particles[i].setAxis(this.strategies[this.strategyIndex]());\r\n\t\t}\r\n\t\tif(++this.strategyIndex == this.strategies.length){\r\n\t\t\tthis.strategyIndex = 0;\r\n\t\t}\r\n\t\tthis.translationCount = 0;\r\n\t},\r\n\tdrawFigure : function(){\r\n\t\trequestAnimationFrame(this.drawFigure);\r\n\t\t\r\n\t\tthis.context.fillStyle = 'rgba(0, 0, 0, 0.2)';\r\n\t\tthis.context.fillRect(0, 0, this.width, this.height);\r\n\t\t\r\n\t\tfor(var i = 0, length = this.particles.length; i < length; i++){\r\n\t\t\tvar axis = this.particles[i].getAxis2D(this.theta);\r\n\t\t\t\r\n\t\t\tthis.context.beginPath();\r\n\t\t\tthis.context.fillStyle = axis.color;\r\n\t\t\tthis.context.arc(axis.x, axis.y, this.PARTICLE_RADIUS, 0, Math.PI * 2, false);\r\n\t\t\tthis.context.fill();\r\n\t\t}\r\n\t\tthis.theta++;\r\n\t\tthis.theta %= 360;\r\n\t\t\r\n\t\tfor(var i = 0, length = this.particles.length; i < length; i++){\r\n\t\t\tthis.particles[i].rotateX(this.rotationX);\r\n\t\t\tthis.particles[i].rotateY(this.rotationY);\r\n\t\t}\r\n\t\tthis.translationCount++;\r\n\t\tthis.translationCount %= this.TRANSLATION_COUNT;\r\n\t\t\r\n\t\tif(this.translationCount == 0){\r\n\t\t\tthis.setupFigure();\r\n\t\t}\r\n\t}\r\n};\r\nvar STRATEGY = {\r\n\tSCATTER_RADIUS :150,\r\n\tCONE_ASPECT_RATIO : 1.5,\r\n\tRING_COUNT : 5,\r\n\t\r\n\tgetStrategies : function(){\r\n\t\tvar strategies = [];\r\n\t\t\r\n\t\tfor(var i in this){\r\n\t\t\tif(this[i] == arguments.callee || typeof this[i] != 'function'){\r\n\t\t\t\tcontinue;\r\n\t\t\t}\r\n\t\t\tstrategies.push(this[i].bind(this));\r\n\t\t}\r\n\t\treturn strategies;\r\n\t},\r\n\tcreateSphere : function(){\r\n\t\tvar cosTheta = Math.random() * 2 - 1,\r\n\t\t\tsinTheta = Math.sqrt(1 - cosTheta * cosTheta),\r\n\t\t\tphi = Math.random() * 2 * Math.PI;\r\n\t\t\t\r\n\t\treturn {\r\n\t\t\tx : this.SCATTER_RADIUS * sinTheta * Math.cos(phi),\r\n\t\t\ty : this.SCATTER_RADIUS * sinTheta * Math.sin(phi),\r\n\t\t\tz : this.SCATTER_RADIUS * cosTheta,\r\n\t\t\thue : Math.round(phi \/ Math.PI * 30)\r\n\t\t};\r\n\t},\r\n\tcreateTorus : function(){\r\n\t\tvar theta = Math.random() * Math.PI * 2,\r\n\t\t\tx = this.SCATTER_RADIUS + this.SCATTER_RADIUS \/ 6 * Math.cos(theta),\r\n\t\t\ty = this.SCATTER_RADIUS \/ 6 * Math.sin(theta),\r\n\t\t\tphi = Math.random() * Math.PI * 2;\r\n\t\t\r\n\t\treturn {\r\n\t\t\tx : x * Math.cos(phi),\r\n\t\t\ty : y,\r\n\t\t\tz : x * Math.sin(phi),\r\n\t\t\thue : Math.round(phi \/ Math.PI * 30)\r\n\t\t};\r\n\t},\r\n\tcreateCone : function(){\r\n\t\tvar status = Math.random() > 1 \/ 3,\r\n\t\t\tx,\r\n\t\t\ty,\r\n\t\t\tphi = Math.random() * Math.PI * 2,\r\n\t\t\trate = Math.tan(30 \/ 180 * Math.PI) \/ this.CONE_ASPECT_RATIO;\r\n\t\t\r\n\t\tif(status){\r\n\t\t\ty = this.SCATTER_RADIUS * (1 - Math.random() * 2);\r\n\t\t\tx = (this.SCATTER_RADIUS - y) * rate;\r\n\t\t}else{\r\n\t\t\ty = -this.SCATTER_RADIUS;\r\n\t\t\tx = this.SCATTER_RADIUS * 2 * rate * Math.random();\r\n\t\t}\r\n\t\treturn {\r\n\t\t\tx : x * Math.cos(phi),\r\n\t\t\ty : y,\r\n\t\t\tz : x * Math.sin(phi),\r\n\t\t\thue : Math.round(phi \/ Math.PI * 30)\r\n\t\t};\r\n\t},\r\n\tcreateVase : function(){\r\n\t\tvar theta = Math.random() * Math.PI,\r\n\t\t\tx = Math.abs(this.SCATTER_RADIUS * Math.cos(theta) \/ 2) + this.SCATTER_RADIUS \/ 8,\r\n\t\t\ty = this.SCATTER_RADIUS * Math.cos(theta) * 1.2,\r\n\t\t\tphi = Math.random() * Math.PI * 2;\r\n\t\t\r\n\t\treturn {\r\n\t\t\tx : x * Math.cos(phi),\r\n\t\t\ty : y,\r\n\t\t\tz : x * Math.sin(phi),\r\n\t\t\thue : Math.round(phi \/ Math.PI * 30)\r\n\t\t};\r\n\t}\r\n};\r\nvar PARTICLE = function(center){\r\n\tthis.center = center;\r\n\tthis.init();\r\n};\r\nPARTICLE.prototype = {\r\n\tSPRING : 0.01,\r\n\tFRICTION : 0.9,\r\n\tFOCUS_POSITION : 300,\r\n\tCOLOR : 'hsl(%hue, 100%, 70%)',\r\n\t\r\n\tinit : function(){\r\n\t\tthis.x = 0;\r\n\t\tthis.y = 0;\r\n\t\tthis.z = 0;\r\n\t\tthis.vx = 0;\r\n\t\tthis.vy = 0;\r\n\t\tthis.vz = 0;\r\n\t\tthis.color;\r\n\t},\r\n\tsetAxis : function(axis){\r\n\t\tthis.translating = true;\r\n\t\tthis.nextX = axis.x;\r\n\t\tthis.nextY = axis.y;\r\n\t\tthis.nextZ = axis.z;\r\n\t\tthis.hue = axis.hue;\r\n\t},\r\n\trotateX : function(angle){\r\n\t\tvar sin = Math.sin(angle),\r\n\t\t\tcos = Math.cos(angle),\r\n\t\t\tnextY = this.nextY * cos - this.nextZ * sin,\r\n\t\t\tnextZ = this.nextZ * cos + this.nextY * sin,\r\n\t\t\ty = this.y * cos - this.z * sin,\r\n\t\t\tz = this.z * cos + this.y * sin;\r\n\t\t\t\r\n\t\tthis.nextY = nextY;\r\n\t\tthis.nextZ = nextZ;\r\n\t\tthis.y = y;\r\n\t\tthis.z = z;\r\n\t},\r\n\trotateY : function(angle){\r\n\t\tvar sin = Math.sin(angle),\r\n\t\t\tcos = Math.cos(angle),\r\n\t\t\tnextX = this.nextX * cos - this.nextZ * sin,\r\n\t\t\tnextZ = this.nextZ * cos + this.nextX * sin,\r\n\t\t\tx = this.x * cos - this.z * sin,\r\n\t\t\tz = this.z * cos + this.x * sin;\r\n\t\t\t\r\n\t\tthis.nextX = nextX;\r\n\t\tthis.nextZ = nextZ;\r\n\t\tthis.x = x;\r\n\t\tthis.z = z;\r\n\t},\r\n\trotateZ : function(angle){\r\n\t\tvar sin = Math.sin(angle),\r\n\t\t\tcos = Math.cos(angle),\r\n\t\t\tnextX = this.nextX * cos - this.nextY * sin,\r\n\t\t\tnextY = this.nextY * cos + this.nextX * sin,\r\n\t\t\tx = this.x * cos - this.y * sin,\r\n\t\t\ty = this.y * cos + this.x * sin;\r\n\t\t\t\r\n\t\tthis.nextX = nextX;\r\n\t\tthis.nextY = nextY;\r\n\t\tthis.x = x;\r\n\t\tthis.y = y;\r\n\t},\r\n\tgetAxis3D : function(){\r\n\t\tthis.vx += (this.nextX - this.x) * this.SPRING;\r\n\t\tthis.vy += (this.nextY - this.y) * this.SPRING;\r\n\t\tthis.vz += (this.nextZ - this.z) * this.SPRING;\r\n\t\t\r\n\t\tthis.vx *= this.FRICTION;\r\n\t\tthis.vy *= this.FRICTION;\r\n\t\tthis.vz *= this.FRICTION;\r\n\t\t\r\n\t\tthis.x += this.vx;\r\n\t\tthis.y += this.vy;\r\n\t\tthis.z += this.vz;\r\n\t\t\r\n\t\treturn {x : this.x, y : this.y, z : this.z};\r\n\t},\r\n\tgetAxis2D : function(theta){\r\n\t\tvar axis = this.getAxis3D(),\r\n\t\t\tscale = this.FOCUS_POSITION \/ (this.FOCUS_POSITION + axis.z);\r\n\t\t\t\r\n\t\treturn {x : this.center.x + axis.x * scale, y : this.center.y - axis.y * scale, color : this.COLOR.replace('%hue', this.hue + theta)};\r\n\t}\r\n};\r\n$(function(){\r\n\tRENDERER.init(STRATEGY);\r\n});";
