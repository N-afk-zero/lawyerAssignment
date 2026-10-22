/* abdallah law firm - shared behaviour */
(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const root=document.documentElement;root.classList.add('js');
try{const t=localStorage.getItem('theme');if(t)root.dataset.theme=t}catch(e){}
const PAGES=[['index.html','Home'],['lawyer.html','Meet the Lawyer'],['expertise.html','Expertise'],['articles.html','Articles'],['contact.html','Contact Us']];
const AREAS=[
['Family Law','Divorce, custody, maintenance and family disputes handled with discretion and care.'],
['Criminal Law','Robust defence at every stage, from police enquiry to trial and appeal.'],
['Labour/Employment Law','Unjustified dismissal, contracts, redundancy and workplace disputes for employers and employees.'],
['Tenancy and Rental Law','Lease drafting, evictions, arrears and landlord-tenant disputes.'],
['Commercial Law','Practical advice on company, trading and business transactions.'],
['Contractual Disputes','Resolving breach, damages and enforcement before they escalate.'],
['Litigation and Arbitration','Advocacy before all levels of court and in international arbitrations.'],
['Mediation','Constructive, confidential settlement that saves time, cost and relationships.'],
['Contract Drafting','Clear, enforceable agreements tailored to your commercial reality.']];
const ARTICLES=[
['Family Law','Understanding Your Rights in a Tenancy Dispute','Involves being aware of the legal protections and obligations that apply to tenants and landlords, helping to resolve rental disagreements fairly and effectively.','01 Jan 2026'],
['Arbitration & Litigation','Arbitration or Litigation: Which Route Fits?','Two methods of resolving legal disputes. Arbitration is usually faster and more private, while litigation offers a formal court process with greater legal protections and appeals.','01 Feb 2026'],
['Contract','What to Include in a Solid Commercial Contract','Solid commercial contract clearly outlines the rights, responsibilities, and expectations of all parties, helping to reduce risks and ensure smooth business transactions.','01 Mar 2026']];
const slug=s=>s.toLowerCase().replace(/[^a-z]+/g,'-');
const cur=location.pathname.split('/').pop()||'index.html';
/* header + footer */
document.body.insertAdjacentHTML('afterbegin','<a class="skip" href="#main">Skip to content</a>');
const hd=$('#site-header');
hd.innerHTML=`<div class="side-in"><a class="brand" href="index.html" aria-label="Abdallah law firm, home"><span class="mono" aria-hidden="true">A</span><span><b>Abdallah</b><small>Law Firm</small></span></a><button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="nav"><i></i><i></i><i></i></button><nav id="nav" aria-label="Main"><ul>${PAGES.map(p=>`<li><a href="${p[0]}"${p[0]===cur?' class="active" aria-current="page"':''}>${p[1]}${p[0]===cur?'<i class="ind"></i>':''}</a></li>`).join('')}</ul><p class="side-foot">+230 5799 5620<br>abdallah@gmail.com<br>Cyber Tower 1, Port Louis</p></nav><button class="theme" aria-label="Toggle dark mode">◐</button></div>`;
$('#site-footer').innerHTML=`<div class="wrap"><div class="fgrid"><div><h3>Abdallah Law Firm</h3><p>Legal services with high professionalism and outstanding results.</p></div><div><h3>Explore</h3><ul>${PAGES.map(p=>`<li><a href="${p[0]}">${p[1]}</a></li>`).join('')}</ul></div><div><h3>Contact</h3><ul><li><a href="tel:+23057995620">+230 5799 5620</a></li><li><a href="mailto:abdallah@gmail.com">abdallah@gmail.com</a></li><li>Cyber Tower 1, Ebene</li></ul></div></div><p class="disc">Information on this website is general in nature and does not constitute legal advice.<br>© ${new Date().getFullYear()} Abdallah Law Firm. All rights reserved.</p></div>`;
const nav=$('#nav'),bg=$('.burger');
bg.onclick=()=>{const o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Close menu':'Open menu')};
$$('#nav a').forEach(a=>a.onclick=()=>{nav.classList.remove('open');bg.setAttribute('aria-expanded',false)});
$('.theme').onclick=()=>{const d=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=d;try{localStorage.setItem('theme',d)}catch(e){}};
/* generated content */
const sv=$('#services');if(sv)sv.innerHTML=AREAS.map((a,i)=>`<a class="card reveal" href="expertise.html#${slug(a[0])}"><span class="no">0${i+1}</span><h3>${a[0]}</h3><p>${a[1]}</p></a>`).join('');
const ar=$('#areas');if(ar)ar.innerHTML=AREAS.map((a,i)=>`<article class="row reveal" id="${slug(a[0])}"><span class="no">0${i+1}</span><div><h2>${a[0]}</h2><p>${a[1]} Contact the firm for a confidential first discussion about your situation.</p><a class="more" href="contact.html">Schedule a consultation →</a></div></article>`).join('');
const al=$('#articles');if(al)al.innerHTML=ARTICLES.map((a,i)=>`<article class="card reveal"><div class="thumb"><img src="images/article-${i+1}.jpg" width="960" height="600" loading="lazy" alt="${a[1]}"></div><span class="tag">${a[0]}</span><p class="meta">${a[3]}</p><h3>${a[1]}</h3><p>${a[2]}</p><span class="more">Read more →</span></article>`).join('');
const mq=$('.mq');if(mq)mq.innerHTML=[...AREAS,...AREAS].map(a=>`<span>${a[0]}</span>`).join('');
const ix=$('#idx');if(ix){ix.innerHTML=AREAS.map(a=>`<a href="#${slug(a[0])}">${a[0]}</a>`).join('');const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$('a',ix).forEach(a=>a.classList.toggle('on',a.hash==='#'+e.target.id))}),{rootMargin:'-40% 0px -55% 0px'});$$('#areas>.row').forEach(r=>so.observe(r))}
/* slider */
const sl=$('.slider');if(sl){const tr=$('.track',sl),n=tr.children.length,dots=$('.dots');let i=0,t;
dots.innerHTML=[...tr.children].map((_,k)=>`<button aria-label="Show testimonial ${k+1}"></button>`).join('');
const go=k=>{i=(k+n)%n;tr.style.transform=`translateX(-${i*100}%)`;$$('button',dots).forEach((b,j)=>b.classList.toggle('on',j===i))};
const play=()=>{clearInterval(t);t=setInterval(()=>go(i+1),6000)};
$$('button',dots).forEach((b,k)=>b.onclick=()=>{go(k);play()});go(0);play()}
/* faq */
$$('.faq-item button').forEach(b=>b.onclick=()=>{const a=b.nextElementSibling,o=b.getAttribute('aria-expanded')==='true';$$('.faq-item button').forEach(x=>{x.setAttribute('aria-expanded',false);x.nextElementSibling.style.maxHeight=0});if(!o){b.setAttribute('aria-expanded',true);a.style.maxHeight=a.scrollHeight+'px'}});
/* reveal + counters */
$$('.grid>.reveal').forEach((e,i)=>e.style.transitionDelay=(i%3)*.12+'s');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;io.unobserve(el);el.classList.add('in');
if(el.dataset.count){const end=+el.dataset.count,s=performance.now();const f=now=>{const p=Math.min((now-s)/1800,1);el.textContent=Math.round(end*(1-Math.pow(1-p,3)))+(p===1?(el.dataset.suffix||''):'');if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)}}),{threshold:.2});
$$('.reveal,[data-count]').forEach(e=>io.observe(e));
/* back to top + header shadow */
const up=document.createElement('button');up.className='top';up.setAttribute('aria-label','Back to top');up.textContent='↑';up.onclick=()=>scrollTo({top:0});document.body.append(up);
addEventListener('scroll',()=>{up.classList.toggle('show',scrollY>500);hd.classList.toggle('scrolled',scrollY>10)},{passive:true});
/* contact form */
const f=$('#cform');if(f){
$('#area').innerHTML='<option value="">Select a practice area</option>'+AREAS.map(a=>`<option>${a[0]}</option>`).join('')+'<option>Other</option>';
const R={name:v=>v.trim().length>=2||'Please enter your full name.',email:v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())||'Please enter a valid email address.',phone:v=>/^\+?[\d\s-]{7,15}$/.test(v.trim())||'Please enter a valid phone number.',area:v=>!!v||'Please choose a practice area.',message:v=>v.trim().length>=10||'Please tell us a little more (at least 10 characters).',consent:(v,el)=>el.checked||'Please give your consent so we can contact you.'};
const chk=k=>{const el=f.elements[k],r=R[k](el.value,el),ok=r===true;el.classList.toggle('invalid',!ok);el.setAttribute('aria-invalid',!ok);$('#e-'+k).textContent=ok?'':r;return ok};
Object.keys(R).forEach(k=>f.elements[k].addEventListener('blur',()=>chk(k)));
f.onsubmit=e=>{e.preventDefault();const res=Object.keys(R).map(chk);const ok=$('.ok');
if(res.every(Boolean)){f.reset();ok.classList.add('show');ok.focus()}else{ok.classList.remove('show');f.elements[Object.keys(R)[res.indexOf(false)]].focus()}}}
/* scroll progress (page transitions are native View Transitions in CSS) */
const pg=document.createElement('div');pg.className='progress';document.body.append(pg);
addEventListener('scroll',()=>{pg.style.width=(scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100)+'%'},{passive:true});
})();
