function e(e,n){return new Promise(function(t,c){e.addEventListener(n,function(c){t("It was ".concat(n,"\n        on the element: ").concat(e.nodeName,",\n        id: ").concat(e.id,"."))})})}document.querySelector("body").style.columnGap="5px";var n=function(e){var n=document.createElement("div");n.className="message",n.textContent=e,document.querySelector("body").append(n)},t=document.getElementById("login"),c=document.getElementById("password"),o=document.getElementById("submit");e(t,"click").then(n),e(c,"click").then(n),e(o,"click").then(n),e(t,"input").then(n),e(c,"input").then(n),e(t,"blur").then(n),e(c,"blur").then(n),e(o,"blur").then(n);//# sourceMappingURL=index.55d51d9c.js.map

//# sourceMappingURL=index.55d51d9c.js.map