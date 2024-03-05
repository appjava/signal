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
one.addEventListener('click', () => {
    guide.innerHTML=``
    guide.innerHTML=`
    <span class="close">X</span>
    <fieldset>
    <legend>ONE</legend>
    <iframe id="calender" src="https://www.gatotv.com/canal/hbo_latinoamerica"></iframe>
    </fieldset>
    `;
    guide.style.display = 'block';
});
two.addEventListener('click', () => {
    guide.innerHTML=``
    guide.innerHTML=`
    <span class="close">X</span>
    <fieldset>
    <legend>TWO</legend>
    <iframe id="calender" src="https://www.gatotv.com/canal/hbo_2_latinoamerica"></iframe>
    </fieldset>
    `;
    guide.style.display = 'block';
});
plus.addEventListener('click', () => {
    guide.innerHTML=``
    guide.innerHTML=`
    <span class="close">X</span>
    <fieldset>
    <legend>PLUS</legend>
    <iframe id="calender" src="https://www.gatotv.com/canal/hbo_plus"></iframe>
    </fieldset>
    `;
    guide.style.display = 'block';
});
extreme.addEventListener('click', () => {
    guide.innerHTML=``
    guide.innerHTML=`
    <span class="close">X</span>
    <fieldset>
    <legend>EXTREME</legend>
    <iframe id="calender" src="https://www.gatotv.com/canal/hbo_xtreme"></iframe>
    </fieldset>
    `;
    guide.style.display = 'block';
});
family.addEventListener('click', () => {
    guide.innerHTML=``
    guide.innerHTML=`
    <span class="close">X</span>
    <fieldset>
    <legend>FAMILY</legend>
    <iframe id="calender" src="https://www.gatotv.com/canal/hbo_family_latinoamerica"></iframe>
    </fieldset>
    `;
    guide.style.display = 'block';
});
signature.addEventListener('click', () => {
    guide.innerHTML=``
    guide.innerHTML=`
    <span class="close">X</span>
    <fieldset>
    <legend>SIGNATURE</legend>
    <iframe id="calender" src="https://www.gatotv.com/canal/hbo_signature_latinoamerica"></iframe>
    </fieldset>
    `;
    guide.style.display = 'block';
});
mundi.addEventListener('click', () => {
    guide.innerHTML=``
    guide.innerHTML=`
    <span class="close">X</span>
    <fieldset>
    <legend>MUNDI</legend>
    <iframe id="calender" src="https://www.gatotv.com/canal/hbo_mundi"></iframe>
    </fieldset>
    `;
    guide.style.display = 'block';
});
pop.addEventListener('click', () => {
    guide.innerHTML=``
    guide.innerHTML=`
    <span class="close">X</span>
    <fieldset>
    <legend>POP</legend>
    <iframe id="calender" src="https://www.gatotv.com/canal/hbo_pop"></iframe>
    </fieldset>
    `;
    guide.style.display = 'block';
});
cx.addEventListener('click', () => {
    guide.innerHTML=``
    guide.innerHTML=`
    <span class="close">X</span>
    <fieldset>
    <legend>CX</legend>
    <iframe id="calender" src="https://www.gatotv.com/canal/cinemax_mexico"></iframe>
    </fieldset>
    `;
    guide.style.display = 'block';
});


// Hide guide
guide.addEventListener('click', () => {
    guide.style.display = 'none';
    guide.innerHTML=``;

  });
