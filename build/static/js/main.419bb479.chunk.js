(this.webpackJsonpcitas=this.webpackJsonpcitas||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),c=t.n(r),o=(t(14),t(8)),i=t(2),m=t(4),s=t(7),u=t(17),E=function(e){var a=e.crearCita,t=Object(n.useState)({mascota:"",propietario:"",fecha:"",hora:"",sintomas:"",mostrar:!1}),r=Object(i.a)(t,2),c=r[0],o=r[1],E=Object(n.useState)(!1),p=Object(i.a)(E,2),h=p[0],f=p[1],d=function(e){o(Object(s.a)({},c,Object(m.a)({},e.target.name,e.target.value)))},b=c.mascota,N=c.propietario,g=c.fecha,v=c.hora,C=c.sintomas;return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"Crear Cita"),h?l.a.createElement("p",{className:"alerta-error"},"Todos los campos son obligatorios"):null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!=b.trim()&&""!=N.trim()&&""!=g.trim()&&""!=v.trim()&&""!=C.trim()?(f(!1),c.id=Object(u.a)(),a(c),o({mascota:"",propietario:"",fecha:"",hora:"",sintomas:"",mostrar:!1})):f(!0)}},l.a.createElement("label",null,"Nombre de la Mascota"),l.a.createElement("input",{type:"text",name:"mascota",className:"u-full-width",placeholder:"Nombre Mascota",onChange:d,value:b}),l.a.createElement("label",null,"Nombre del Due\xf1o"),l.a.createElement("input",{type:"text",name:"propietario",className:"u-full-width",placeholder:"Nombre Due\xf1o Mascota",onChange:d,value:N}),l.a.createElement("label",null,"Fecha Consulta"),l.a.createElement("input",{type:"date",name:"fecha",className:"u-full-width",onChange:d,value:g}),l.a.createElement("label",null,"Hora Consulta"),l.a.createElement("input",{type:"time",name:"hora",className:"u-full-width",onChange:d,value:v}),l.a.createElement("label",null,"Sintomas Consulta"),l.a.createElement("textarea",{name:"sintomas",className:"u-full-width",onChange:d,value:C}),l.a.createElement("button",{type:"submit",className:"u-full-width button-primary"},"Agregar Cita")))},p=function(e){var a=e.cita,t=e.eliminarCita;return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"cita"},l.a.createElement("p",null,"Mascota: ",l.a.createElement("span",null,a.mascota)),l.a.createElement("p",null,"Propietario: ",l.a.createElement("span",null,a.propietario)),l.a.createElement("p",null,"Fecha: ",l.a.createElement("span",null,a.fecha)),l.a.createElement("p",null,"Hora: ",l.a.createElement("span",null,a.hora)),l.a.createElement("p",null,"Sintomas: ",l.a.createElement("span",null,a.sintomas)),l.a.createElement("button",{className:"button eliminar u-full-width",onClick:function(){return t(a.id)}},"Eliminar")))};var h=function(){var e=JSON.parse(localStorage.getItem("citas"));e||(e=[]);var a=Object(n.useState)(e),t=Object(i.a)(a,2),r=t[0],c=t[1];Object(n.useEffect)((function(){e?localStorage.setItem("citas",JSON.stringify(r)):localStorage.setItem("citas",JSON.stringify([]))}),[r]);var m=function(e){var a=r.filter((function(a){return a.id!==e}));c(a)},s=r.length>0?"ADMINISTRACION DE PACIENTES":"NO TIENE CITAS ASIGNADAS";return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"one-half column"},l.a.createElement(E,{crearCita:function(e){c([].concat(Object(o.a)(r),[e]))}})),l.a.createElement("div",{className:"one-half column"},l.a.createElement("h2",null,s),r.map((function(e){return l.a.createElement(p,{key:e.id,cita:e,eliminarCita:m})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.419bb479.chunk.js.map