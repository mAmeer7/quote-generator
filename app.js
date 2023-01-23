let btn = document.querySelector('#newQuote');
let person= document.querySelector('.person');
let quote= document.querySelector('.quote');
//map creation
const quotes=[{
    quote: `"Everybody hates me because I'm so universally liked."`,
    person:`Peter Vries`
},{
    quote:`"We feel in one world, we think and name in another. Between the two we can set up a system of references, but we cannot fill in the gap."`,
    person:`Marcel Proust`
},{
    quote:`"Most of the time I don't have much fun. The rest of the time I don't have any fun at all."`,
    person:`Woody Allen`
},{
    quote:`“Allah is He who created death and life to test you as to which of you is best in deed.”`,
    person:`Quran 67:2`
},{
    quote:`"Do not lose hope, nor be sad."`,
    person:`Quran 3:139`
},{
    quote:`"When you forget that you need Allah (God), He puts you in a situation that causes you to call upon Him. And that's for your own good."`,
    person:`Omar Suleiman`
},{
    quote:`"Never underestimate the power of Dua (supplication)."`,
    person:`Anonymous`
},{
    quote:`"Don't develop friendship with the enemy of your friend; otherwise your friend will turn into an enemy."`,
    person:`Hazrat Imam Ali`
},{
    quote:`"There is no good in silence when it comes to knowledge, just as there is no good in speaking when it comes to ignorance."`,
    person:`Hazrat Imam Ali`
},{
    quote:`"Don't show pleasure in somebody's downfall, for you have no knowledge of what the future holds in store for you."`,
    person:`Hazrat Imam Ali`
},{
    quote:`"Be patient, you noble ones. Death is only a bridge which takes you from misery and loss to the vast Paradise and the eternal graces"`,
    person:`Imam Hussain a.s. on Ashura`
},{
    quote:`"Death with dignity is better than a life of abasement."`,
    person:`Imam Hussain a.s.`
},{
    quote:`"Feed the hungry, Visit the sick, Set free captives."`,
    person:`Hazrat Muhammad (saw)`
},{
    quote:`"There will come a time when holding on to your Deen will be like holding on to hot coals"`,
    person:`Hazrat Muhammad (saw)`
},{
    quote:`"Who honors himself dishonors worldly things."`,
    person:`Imam Sajjad a.s.`
}];

btn.addEventListener('click',show)

function show(){
    let r= Math.floor(Math.random()*quotes.length);
    quote.innerText= quotes[r].quote;
    person.innerText=quotes[r].person;
}