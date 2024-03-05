console.log("Welcome You!")

const guide = document.getElementById('guide');

const one = document.getElementById('one');
const two = document.getElementById('two');
const plus = document.getElementById('plus');
const extreme = document.getElementById('extreme');
const family = document.getElementById('family');
const signature = document.getElementById('signature');
const mundi = document.getElementById('mundi');
const pop = document.getElementById('pop');
const cx = document.getElementById('cx');


//Show guide
one.addEventListener('mouseover', function handleMouseOver() {
    guide.innerHTML=``
    guide.innerHTML=`<iframe id="calender" src="https://www.gatotv.com/canal/hbo_latinoamerica"></iframe>`;
    guide.style.display = 'block';
});
two.addEventListener('mouseover', function handleMouseOver() {
    guide.innerHTML=``
    guide.innerHTML=`<iframe id="calender" src="https://www.gatotv.com/canal/hbo_2_latinoamerica"></iframe>`;
    guide.style.display = 'block';
});
plus.addEventListener('mouseover', function handleMouseOver() {
    guide.innerHTML=``
    guide.innerHTML=`<iframe id="calender" src="https://www.gatotv.com/canal/hbo_plus"></iframe>`;
    guide.style.display = 'block';
});
extreme.addEventListener('mouseover', function handleMouseOver() {
    guide.innerHTML=``
    guide.innerHTML=`<iframe id="calender" src="https://www.gatotv.com/canal/hbo_xtreme"></iframe>`;
    guide.style.display = 'block';
});
family.addEventListener('mouseover', function handleMouseOver() {
    guide.innerHTML=``
    guide.innerHTML=`<iframe id="calender" src="https://www.gatotv.com/canal/hbo_family_latinoamerica"></iframe>`;
    guide.style.display = 'block';
});
signature.addEventListener('mouseover', function handleMouseOver() {
    guide.innerHTML=``
    guide.innerHTML=`<iframe id="calender" src="https://www.gatotv.com/canal/hbo_signature_latinoamerica"></iframe>`;
    guide.style.display = 'block';
});
mundi.addEventListener('mouseover', function handleMouseOver() {
    guide.innerHTML=``
    guide.innerHTML=`<iframe id="calender" src="https://www.gatotv.com/canal/hbo_mundi"></iframe>`;
    guide.style.display = 'block';
});
pop.addEventListener('mouseover', function handleMouseOver() {
    guide.innerHTML=``
    guide.innerHTML=`<iframe id="calender" src="https://www.gatotv.com/canal/hbo_pop"></iframe>`;
    guide.style.display = 'block';
});
cx.addEventListener('mouseover', function handleMouseOver() {
    guide.innerHTML=``
    guide.innerHTML=`<iframe id="calender" src="https://www.gatotv.com/canal/cinemax_mexico"></iframe>`;
    guide.style.display = 'block';
});



// Hide guide
window.addEventListener('click', function handleMouseOut() {
    guide.style.display = 'none';
    guide.innerHTML=``;

    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'hidden';
  });