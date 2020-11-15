DIALOG.intro = [
1,

`you wake up. there are three women looking down at you.
[just a child,] the first woman whispers.
[dirty and beat,] the second woman mutters.
[who are you?] the third woman asks.
<input type="text" placeholder="your name" id="name" />`,

`[hello, $name. and where are you from?]
{you don't know.}`,

`the woman frowns.
[then, where are you going?]
{you don't know.}`,

`the woman takes pity on you. props you up onto her lap. wipes grime off your cheek.
[well, then,] she says, [you'll have to figure out {your story}.]`,

`the first woman has {her story}.`,

`the first woman's name is {Marda}.`,

`Marda was {a housewife} before losing everything to this war.`,

`now, Marda heads toward {the Silent Greens}, toward a place to grieve and grow.`,

`the second woman has {her story}.`,

`Serena, a painter, searches for the thief who stole {her last painting}.`,

`[and me,] the third woman tells you, [i have {a story} as well.]`,

`[my name is {Cacho}.]`,

`[i was {a soldier} guarding a relatively safe but important fort.]`,

`[still, my unit heard gunshots and bombs going off every night. and every night, we were {afraid} the war would come to us.]`,

`[so, in our sleepless nights, we began to tell each other {stories}.]`,

`she smiles. you notice, for the first time, that {her eyes are a murky gray}.`,

`[these were stories of {love},]`,

`[these were stories of {heroes},]`,

`[these were stories of {loss},]`,

`[these were stories of {foolery}.]`,

`[these were stories that brought us light. that light helped me through darker days. and now, i seek to pass on that light.]
Cacho looks at you, though her eyes don't focus. [you must have a good story, $name. it is {waiting to be found}.]`,

`the three women are wanderers. they take you under their wing. you follow them as they go places, meet people, tell stories and listen to stories.
then you're leaving the Silent Greens, waving goodbye to Marda.
then you're leaving the House of Art, but not before being given a tight hug by Serena.
before you know it, you are wandering with Cacho {alone}.`,

`Cacho grows slow. {weak}.`,

`you find yourself at the steps of a desert infirmary. you take a step forward and try not to look back. you take another step, and then another, and you don't stop.
{you wander}.`,

`you wander.
the desert stretches on as far as the eye can see. you've been wandering for 5 days. you're running out of food. you're running out of drink.
{you wander}.`,

`you wander.
your footsteps wash away in the sandy breeze. you can't tell north from south. you've been wandering for 6 days. you're running out of food. you're running out of drink.
{you wander}.`,

`you wander.
you wander until <a onclick="DIALOG.log('desert')">you can't wander anymore</a>.`
];

INPUT.name = function(t) {
	data.name = t;
}

DIALOG.desert = [
	1,
`you wake up.
your hands are tied behind your back. face pressed against the cold sand. a fireplace crackles nearby. two voices, one low, one soft.
[we're not taking him,] the low one says.
[he's awake,] the soft one says.
you hear {footsteps}.`,

`a young boy turns you over. [sit.] his voice is soft.
you do. the desert is dark, a black void beyond the circle of light the fireplace provides. across it sits an older boy.
he glares at you. [half a million square kilometers of dry desert and you don't have {a single useful thing} on you.]`,

`the young boy studies you. [who are you?]
> {$name.}
> {a wanderer.}
> {a storyteller.}`,

`the older boy comes closer. [what are you doing here?]
> {wandering.}
> {looking for a story.}
> {looking for my story.}`,
];