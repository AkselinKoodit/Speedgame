(this.webpackJsonpspeedgame=this.webpackJsonpspeedgame||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var r=c(1),a=c(3),n=c.n(a),s=(c(12),c(4)),o=c(5),i=c(7),l=c(6),d=(c(13),c(0)),u=function(e){return Object(d.jsx)("div",{className:"circle ".concat(e.color," ").concat(e.active?" active":""),onClick:e.click,style:{pointerEvents:e.disabled?"auto":"none"}})},b=(c(15),function(){window.location.reload()}),j=function(e){return Object(d.jsx)("div",{className:"overlay",children:Object(d.jsxs)("div",{className:"gameover",children:[Object(d.jsx)("h2",{children:"Game over"}),Object(d.jsxs)("p",{children:["Your score was: ",e.score," "]}),Object(d.jsx)("p",{children:(t=e.score,t<5?"Pathetic!":t<10?"You can do better.":t<15?"Not bad at all!":t<20?"Awesome!":"YOU MUST BE THE CHOSEN ONE!!")}),Object(d.jsx)("button",{onClick:b,children:"Close"})]})});var t},h=(c(16),c.p+"static/media/guerrillaRadio.6574547c.mp3"),m=c.p+"static/media/mistake.3e2b8a36.wav",p=c.p+"static/media/ballBlib.03ee3acc.wav",v=new Audio(h),O=new Audio(m),g=new Audio(p);function f(e,t){return Math.floor(Math.random()*(t-e+1))+e}console.log("Random number between 1-4:"+f(1,4));var w=function(e){Object(i.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(s.a)(this,c);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={score:0,current:0,circles:[{id:1,color:"green"},{id:2,color:"brown"},{id:3,color:"orange"},{id:4,color:"blue"}],showGameOver:!1,rounds:0,gameStart:!1,disableStop:!0,clicked:!1,gameStop:!0},e.timer=void 0,e.pace=1500,e.clickHandler=function(t){e.state.current===t?!1===e.state.clicked&&(g.play(),e.setState({score:e.state.score+1,rounds:0,clicked:!0})):e.endHandler()},e.targetCircle=function(){if(e.state.rounds>=3)e.endHandler();else{var t=void 0;do{t=f(1,4)}while(t===e.state.current);e.setState({current:t,rounds:e.state.rounds+1,clicked:!1}),console.log("round: "+e.state.rounds),e.pace*=.95,e.timer=setTimeout(e.targetCircle,e.pace),console.log("Target is: "+e.state.current)}},e.startHandler=function(){v.play(),e.targetCircle(),e.setState({gameStart:!0,gameStop:!1})},e.endHandler=function(){v.pause(),O.play(),clearTimeout(e.timer),e.setState({showGameOver:!0})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.circles.map((function(t){return Object(d.jsx)(u,{id:t.id,color:t.color,click:function(){return e.clickHandler(t.id)},active:e.state.current===t.id,disabled:e.state.gameStart},t.id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Speedtest"}),Object(d.jsxs)("p",{children:["Your score: ",this.state.score]}),Object(d.jsx)("div",{className:"circles",children:t}),Object(d.jsxs)("div",{className:"controls",children:[Object(d.jsx)("button",{onClick:this.startHandler,disabled:this.state.gameStart,children:"Start"}),Object(d.jsx)("button",{onClick:this.endHandler,disabled:this.state.gameStop,children:"Stop"})]}),this.state.showGameOver&&Object(d.jsx)(j,{score:this.state.score})]})}}]),c}(r.Component);n.a.render(Object(d.jsx)(w,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.6f7bfa1c.chunk.js.map