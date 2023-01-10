(()=>{"use strict";function e(){return document.querySelector(".popup_opened")}function t(t){"Escape"===t.key&&c(e())}function n(t){t.target.classList.contains("popup_opened")&&c(e())}function o(){c(e())}function r(e){var r=e.querySelector(".popup__close-button");e.classList.add("popup_opened"),document.addEventListener("keydown",t),document.addEventListener("mousedown",n),r.addEventListener("click",o)}function c(e){var r=e.querySelector(".popup__close-button");e.classList.remove("popup_opened"),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",n),r.removeEventListener("click",o)}var u=document.querySelector(".profile"),a=u.querySelector(".profile__username"),i=u.querySelector(".profile__user-position"),s=u.querySelector(".profile__avatar"),l=document.querySelector(".popup_type_img"),d=l.querySelector(".popup__photo"),p=l.querySelector(".popup__heading");function m(e,t){var n=e.querySelector(".popup__button"),o=n.textContent;n.textContent=t?"Сохранение...":o}var f={baseUrl:"https://nomoreparties.co/v1/plus-cohort-18/",headers:{authorization:"d95e8e0f-5717-4536-87da-f10af028f83a","Content-Type":"application/json; charset=UTF-8"}},_=document.querySelector("#element-template").content,v=document.querySelector(".elements");function h(e,t,n,o,c,u){var a,i,s=_.querySelector(".element").cloneNode(!0),m=s.querySelector(".element__photo"),v=s.querySelector(".element__likes-counter"),h=s.querySelector(".element__delete-button");return s.dataset.cardId=o,m.src=t,m.alt="Фото. "+e,v.textContent=n,s.querySelector(".element__heading").textContent=e,s.querySelector(".element__like").addEventListener("click",(function(e){return function(e){var t,n=e.closest(".element"),o=n.querySelector(".element__likes-counter");e.classList.contains("element__like_active")?(t=n.dataset.cardId,fetch("".concat(f.baseUrl,"cards/likes/").concat(t),{method:"DELETE",headers:f.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))).then((function(t){o.textContent=t.likes.length,e.classList.remove("element__like_active")})):function(e){return fetch("".concat(f.baseUrl,"cards/likes/").concat(e),{method:"PUT",headers:f.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}(n.dataset.cardId).then((function(t){o.textContent=t.likes.length,e.classList.add("element__like_active")}))}(e.target)})),m.addEventListener("click",(a=t,i=e,function(){d.setAttribute("src",a),d.setAttribute("alt",i),p.textContent=i,r(l)})),c===u&&(h.style.display="block",h.addEventListener("click",(function(e){return function(e){var t,n=e.closest(".element");(t=n.dataset.cardId,fetch("".concat(f.baseUrl,"cards/").concat(t),{method:"DELETE",headers:f.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))).then((function(){n.remove()})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}(e.target)}))),s}function y(e){v.prepend(e)}var S,q={formSelector:".popup__input-container",inputSelector:".popup__item",submitButtonSelector:".popup__button",inputErrorClass:"popup__item_type_error",inputErrorActiveClass:"popup__item-error_active"},b=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.textContent="",o.classList.remove(n.inputErrorActiveClass)},k=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.disabled=!1:t.disabled=!0},E=function(e,t){Array.from(e.querySelectorAll(t.inputSelector)).forEach((function(n){b(e,n,t)}))},L=document.querySelector(".profile__edit-button"),C=document.querySelector(".profile__add-button"),g=document.querySelector(".popup_type_card"),j=document.querySelector(".popup_type_profile"),x=j.querySelector(".popup__item_el_name"),A=j.querySelector(".popup__item_el_position"),P=document.querySelector(".profile__username"),U=document.querySelector(".profile__user-position"),T=g.querySelector(".popup__item_el_name"),w=g.querySelector(".popup__item_el_position"),I=g.querySelector(".popup__button"),N=j.querySelector(".popup__button"),O=document.forms.cardCreateForm,D=document.forms.userprofileform,J=document.querySelector(".profile__avatar-container"),M=document.querySelector(".popup_type_avatar"),B=document.forms.useravatarform,F=M.querySelector(".popup__button"),G=B.elements.position,H=1;L.addEventListener("click",(function(){x.value=P.textContent,A.value=U.textContent,E(j,q),r(j)})),D.addEventListener("submit",(function(){var e,t;N.disabled||(m(j,!0),(e=x.value,t=A.value,fetch("".concat(f.baseUrl,"users/me"),{method:"PATCH",body:JSON.stringify({name:e,about:t}),headers:f.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))).then((function(e){P.textContent=e.name,U.textContent=e.about})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){m(j,!1),c(j)})))})),C.addEventListener("click",(function(){T.value="",w.value="",E(g,q),I.disabled=!0,r(g)})),O.addEventListener("submit",(function(){var e,t;I.disabled||(m(g,!0),(e=T.value,t=w.value,fetch("".concat(f.baseUrl,"cards"),{method:"POST",body:JSON.stringify({name:e,link:t}),headers:f.headers})).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).then((function(e){y(h(e.name,e.link,e.likes.length,e._id,e.owner._id,H))})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){m(g,!1),c(g)})))})),J.addEventListener("click",(function(){r(M)})),B.addEventListener("submit",(function(){var e;F.disabled||(m(M,!0),(e=G.value,fetch("".concat(f.baseUrl,"users/me/avatar"),{method:"PATCH",body:JSON.stringify({avatar:e}),headers:f.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))).then((function(e){s.src=G.value,G.value=""})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){m(M,!1),c(M)})))})),S=q,Array.from(document.querySelectorAll(S.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);k(n,o),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?b(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.inputErrorActiveClass)}(e,t,t.validationMessage,n)}(e,r,t),k(n,o)}))}))}(e,S)})),fetch("".concat(f.baseUrl,"users/me"),{method:"GET",headers:f.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).then((function(e){var t;t=e,a.textContent=t.name,i.textContent=t.about,s.src=t.avatar,s.alt="фотография ".concat(t.name),H=e._id,console.log(H)})).catch((function(e){return console.log("Ошибка: ".concat(e))})),fetch("".concat(f.baseUrl,"cards"),{method:"GET",headers:f.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).then((function(e){e.forEach((function(e){var t=h(e.name,e.link,e.likes.length,e._id,e.owner._id,H);y(t),-1!==e.likes.findIndex((function(e){return e._id===H}))&&t.querySelector(".element__like").classList.add("element__like_active")}))})).catch((function(e){return console.log("Ошибка: ".concat(e))}))})();