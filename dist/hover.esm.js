var s=class{constructor(t,e){this.parent=t;this.data=e;this.parentElement=document.querySelector(this.parent),this.inactiveClass=this.data.css,this.parentElement&&(this.targetElements=[...this.parentElement.querySelectorAll(this.data.target)]),this.init()}init(){if(this.targetElements)for(let t of this.targetElements)t.addEventListener("mouseover",()=>this.hover(t)),t.addEventListener("mouseleave",()=>this.remove())}hover(t){if(this.targetElements&&t)for(let e of this.targetElements)e!==t&&this.addClass(e)}remove(){if(this.targetElements)for(let t of this.targetElements)this.removeClass(t)}removeClass(t){if(this.inactiveClass instanceof Array)for(let e of this.inactiveClass)t.classList.remove(e);else t.classList.remove(this.inactiveClass)}addClass(t){if(this.inactiveClass instanceof Array)for(let e of this.inactiveClass)t.classList.add(e);else t.classList.add(this.inactiveClass)}};var n=s;export{n as default};