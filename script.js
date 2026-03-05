const text = `Chaichilam na je tomar farewell hok.
Tomake r amra school e pabo na.
Sotti I tomake khub miss korbo.

Jani tomar songe mela mesha sobe 2 years hoyeche
but these 2 years feel like 2 decades.

Ami sotti I chaina tumi school charo
but jerom tumi bolle —
"Every ending starts a new beginning."

Chai tumi jeno tomar sob sopno puron koro.
Tumi tomar best dao.
Ace everything.

School will feel a little empty without you.

Tumi sotti I khub bhalo.
Age tomar theke bhoi petam khub
but then u showed that what u really are
and I became fond of u.

Tumi ekjon senior thik
but tumi "Senior attitude"
amader konodin dekhao ni.

Tumi friendly behave korecho sobsomoi
and I just really loved it.

Not all seniors become special…
but you did.

Jani school theke tomader farewell dicche na
but ami chaina je TUMI,
amr SPECIAL DIDII farewell na peye chole jao.

Tai ami ei chotto ekta gift banalam.
Hope u really liked it.

Always remember
kichu dorkar hole
ei tomar bhai or junior
sobsomoi tomar jonno available.

Ami je tuku parbo help korbo.

Distance may increase,
but respect and memories never decrease.

HAPPY FAREWELL AISHANI DIII…
MY FAVOURITE DIDII 🌟`;

let i = 0;

function typeWriter(){
if(i < text.length){
document.getElementById("typewriter").innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter,90);
}
}

if(document.getElementById("typewriter")){
typeWriter();
}

function smile(){
document.getElementById("smileText").innerHTML =
"Her smile = mission successful ❤️";
}

/* Sakura petals */

setInterval(()=>{
let petal=document.createElement("div")
petal.classList.add("petal")

petal.style.left=Math.random()*window.innerWidth+"px"
petal.style.animationDuration=(5+Math.random()*5)+"s"

document.body.appendChild(petal)

setTimeout(()=>{petal.remove()},9000)

},250)

/* Cursor sparkle */

document.addEventListener("mousemove",e=>{

let spark=document.createElement("div")

spark.style.position="fixed"
spark.style.left=e.clientX+"px"
spark.style.top=e.clientY+"px"
spark.style.width="6px"
spark.style.height="6px"
spark.style.background="white"
spark.style.borderRadius="50%"
spark.style.pointerEvents="none"
spark.style.boxShadow="0 0 10px white"

document.body.appendChild(spark)

setTimeout(()=>spark.remove(),400)

})

/* Fireworks */

const canvas=document.getElementById("fireworks")

if(canvas){

const ctx=canvas.getContext("2d")
canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

function firework(){

let x=Math.random()*canvas.width
let y=Math.random()*canvas.height/2

for(let i=0;i<60;i++){

particles.push({
x:x,
y:y,
vx:(Math.random()-0.5)*6,
vy:(Math.random()-0.5)*6,
life:100
})

}

}

function animate(){

ctx.fillStyle="rgba(0,0,0,0.2)"
ctx.fillRect(0,0,canvas.width,canvas.height)

particles.forEach((p,index)=>{

p.x+=p.vx
p.y+=p.vy
p.life--

ctx.fillStyle="hsl("+Math.random()*360+",100%,70%)"
ctx.fillRect(p.x,p.y,3,3)

if(p.life<=0){
particles.splice(index,1)
}

})

requestAnimationFrame(animate)

}

setInterval(firework,1500)

animate()

}
