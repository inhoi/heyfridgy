(function(){
  var saved=null;try{saved=localStorage.getItem('lang')}catch(e){}
  var lang=saved||((navigator.language||'').toLowerCase().indexOf('ko')===0?'ko':'en');
  function apply(l){document.documentElement.lang=l;document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l===l)});try{localStorage.setItem('lang',l)}catch(e){}}
  apply(lang);
  document.addEventListener('click',function(e){var b=e.target.closest('.lang button');if(b)apply(b.dataset.l)});
})();
