// const starterBtn = document.getElementById('starter_btn');
const starterItem = document.getElementById('starter_item');
const starterPrice = document.getElementById('starter_pricing');
const starterWrap = document.getElementById('starter_wrap');

// const premiumBtn = document.getElementById('premium_btn');
const premiumItem = document.getElementById('premium_item');
const premiumPrice = document.getElementById('premium_pricing');
const premiumWrap = document.getElementById('premium_wrap');

// const businessBtn = document.getElementById('business_btn');
const businessItem = document.getElementById('business_item');
const businessPrice = document.getElementById('business_pricing');
const businessWrap = document.getElementById('business_wrap');

////////////////////////////////////////////////////////////////////////////

const imgOureteam1 = document.getElementById('img_oureteam1');
const hoverPics1 = document.getElementById('hover_pics1');

const imgOureteam2 = document.getElementById('img_oureteam2');
const hoverPics2 = document.getElementById('hover_pics2');

const imgOureteam3 = document.getElementById('img_oureteam3');
const hoverPics3 = document.getElementById('hover_pics3');

const imgOureteam4 = document.getElementById('img_oureteam4');
const hoverPics4 = document.getElementById('hover_pics4');

const imgOureteam5 = document.getElementById('img_oureteam5');
const hoverPics5 = document.getElementById('hover_pics5');

function onColor (wrap, val1, val2) {
    wrap.addEventListener ('mouseover', function() {
        val1.style.background='#e74c3c';
        val2.style.color='#e74c3c';
        // btn.style.background='#e74c3c';
    });
}

function offColor (wrap, val1, val2) {
    wrap.addEventListener ('mouseout', function() {
        val1.style.background='';
        val2.style.color='';
        // btn.style.background='';
    });
}

function ourteamOn (block1, block2) {
    block1.addEventListener ('mouseover', function() {
        block2.style.opacity='1';
        block2.style.top='45px';
        block2.style.left='-66%';
    });
}


function ourteamOut (block1, block2) {
    block1.addEventListener ('mouseout', function() {
        block2.style.opacity='0';
        block2.style.top='';
        block2.style.left='';
    });
}


onColor (starterWrap, starterItem, starterPrice);
offColor (starterWrap, starterItem, starterPrice);

onColor (premiumWrap, premiumItem, premiumPrice);
offColor (premiumWrap, premiumItem, premiumPrice);

onColor (businessWrap, businessItem, businessPrice);
offColor (businessWrap, businessItem, businessPrice);
/////////////////////////////////////////////////////////

ourteamOn (imgOureteam1, hoverPics1);
ourteamOut (imgOureteam1, hoverPics1);

ourteamOn (imgOureteam2, hoverPics2);
ourteamOut (imgOureteam2, hoverPics2);

ourteamOn (imgOureteam3, hoverPics3);
ourteamOut (imgOureteam3, hoverPics3);

ourteamOn (imgOureteam4, hoverPics4);
ourteamOut (imgOureteam4, hoverPics4);

ourteamOn (imgOureteam5, hoverPics5);
ourteamOut (imgOureteam5, hoverPics5);