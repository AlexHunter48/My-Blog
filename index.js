import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))


const blogPosts = [

   {
     id : 1,

     title : "The Shape of the Essay Field",

     excerpt: "Thoughts on the evolution of good essays, and ways to encourage people to write them.",

     content: ` <p style="margin-bottom: 2rem; color: #64748B;"> June 2025 </p>


  <p>  An essay has to tell people something they don't already know. But there are three different reasons people might not know something, and they yield three very different kinds of essays. </p>

  <p> One reason people won't know something is if it's not important to know. That doesn't mean it will make a bad essay. For example, you might write a good essay about a particular model of car. Readers would learn something from it. It would add to their picture of the world. For a handful of readers it might even spur some kind of epiphany. But unless this is a very unusual car it's not critical for everyone to know about it. [1] </p>

  <p> If something isn't important to know, there's no answer to the question of why people don't know it. Not knowing random facts is the default. But if you're going to write about things that are important to know, you have to ask why your readers don't already know them. Is it because they're inexperienced, or because they're obtuse? </p>

 <p>So the three reasons readers might not already know what you tell them are (a) that it's not important, (b) that they're obtuse, or (c) that they're inexperienced.</p>

  <p> The reason I did this breakdown was to get at the following fact, which might have seemed controversial if I'd led with it, but should be obvious now. If you're writing for smart people about important things, you're writing for the young.</p>

 <p> Or more precisely, that's where you'll have the most effect. Whatever you say should also be at least somewhat novel to you, however old you are. It's not an essay otherwise, because an essay is something you write to figure something out. But whatever you figure out will presumably be more of a surprise to younger readers than it is to you.</p>

 <p> There's a continuum of surprise. At one extreme, something you read can change your whole way of thinking. The Selfish Gene did this to me. It was like suddenly seeing the other interpretation of an ambiguous image: you can treat genes rather than organisms as the protagonists, and evolution becomes easier to understand when you do. At the other extreme, writing merely puts into words something readers were already thinking — or thought they were.</p>

  <p> The impact of an essay is how much it changes readers' thinking multiplied by the importance of the topic. But it's hard to do well at both. It's hard to have big new ideas about important topics. So in practice there's a tradeoff: you can change readers' thinking a lot about moderately important things, or change it a little about very important ones. But with younger readers the tradeoff shifts. There's more room to change their thinking, so there's a bigger payoff for writing about important things.</p>

 <p> The tradeoff isn't a conscious one, at least not for me. It's more like a kind of gravitational field that writers work in. But every essayist works in it, whether they realize it or not.

 <p> This seems obvious once you state it, but it took me a long time to understand. I knew I wanted to write for smart people about important topics. I noticed empirically that I seemed to be writing for the young. But it took me years to understand that the latter was an automatic consequence of the former. In fact I only really figured it out as I was writing this essay.</p>

  <p> Now that I know it, should I change anything? I don't think so. In fact seeing the shape of the field that writers work in has reminded me that I'm not optimizing for returns in it. I'm not trying to surprise readers of any particular age; I'm trying to surprise myself.

 <p> The way I usually decide what to write about is by following curiosity. I notice something new and dig into it. It would probably be a mistake to change that. But seeing the shape of the essay field has set me thinking. What would surprise young readers? Which important things do people tend to learn late? Interesting question. I should think about that.</p>  `
  
},

  

{

     id : 2,

     title :  "Good Writing",

     excerpt:  "What makes writing good? Here are some thoughts on what makes prose clear and effective.",
     
     content: ` <p style="margin-bottom: 2rem; color: #64748B;"> May 2025 </P>



<P>There are two senses in which writing can be good: it can sound good, and the ideas can be right. It can have nice, flowing sentences, and it can draw correct conclusions about important things. It might seem as if these two kinds of good would be unrelated, like the speed of a car and the color it's painted. And yet I don't think they are. I think writing that sounds good is more likely to be right.</P>

<P>So here we have the most exciting kind of idea: one that seems both preposterous and true. Let's examine it. How can this possibly be true?</P>

<P>I know it's true from writing. You can't simultaneously optimize two unrelated things; when you push one far enough, you always end up sacrificing the other. And yet no matter how hard I push, I never find myself having to choose between the sentence that sounds best and the one that expresses an idea best. If I did, it would be frivolous to care how sentences sound. But in practice it feels the opposite of frivolous. Fixing sentences that sound bad seems to help get the ideas right. [1]</P>

<P>By right I mean more than just true. Getting the ideas right means developing them well — drawing the conclusions that matter most, and exploring each one to the right level of detail. So getting the ideas right is not just a matter of saying true things, but saying the right true things.</P>

<P>How could trying to make sentences sound good help you do that? The clue to the answer is something I noticed 30 years ago when I was doing the layout for my first book. Sometimes when you're laying out text you have bad luck. For example, you get a section that runs one line longer than the page. I don't know what ordinary typesetters do in this situation, but what I did was rewrite the section to make it a line shorter. You'd expect such an arbitrary constraint to make the writing worse. But I found, to my surprise, that it never did. I always ended up with something I liked better.</P>

<P>I don't think this was because my writing was especially careless. I think if you pointed to a random paragraph in anything written by anyone and told them to make it slightly shorter (or longer), they'd probably be able to come up with something better.</P>

<P>The best analogy for this phenomenon is when you shake a bin full of different objects. The shakes are arbitrary motions. Or more precisely, they're not calculated to make any two specific objects fit more closely together. And yet repeated shaking inevitably makes the objects discover brilliantly clever ways of packing themselves. Gravity won't let them become less tightly packed, so any change has to be a change for the better. [2]</P>

<P>So it is with writing. If you have to rewrite an awkward passage, you'll never do it in a way that makes it less true. You couldn't bear it, any more than gravity could bear things floating upward. So any change in the ideas has to be a change for the better.</P>

<P>It's obvious once you think about it. Writing that sounds good is more likely to be right for the same reason that a well-shaken bin is more likely to be tightly packed. But there's something else going on as well. Sounding good isn't just a random external force that leaves the ideas in an essay better off. It actually helps you to get them right.</P>

<P>The reason is that it makes the essay easier to read. It's less work to read writing that flows well. How does that help the writer? Because the writer is the first reader. When I'm working on an essay, I spend far more time reading than writing. I'll reread some parts 50 or 100 times, replaying the thoughts in them and asking myself, like someone sanding a piece of wood, does anything catch? Does anything feel wrong? And the easier the essay is to read, the easier it is to notice if something catches.</P>

<P>So yes, the two senses of good writing are connected in at least two ways. Trying to make writing sound good makes you fix mistakes unconsciously, and also helps you fix them consciously; it shakes the bin of ideas, and also makes mistakes easier to see. But now that we've dissolved one layer of preposterousness, I can't resist adding another. Does sounding good do more than just help you get the ideas right? Is writing that sounds good inherently more likely to be right? Crazy as it may seem, I think that's true too.</P>

<P>Obviously there's a connection at the level of individual words. There are lots of words in English that sound like what they mean, often in wonderfully subtle ways. Glitter. Round. Scrape. Prim. Cavalcade. But the sound of good writing depends even more on the way you put words together, and there's a connection at that level too.</P>

<P>When writing sounds good, it's mostly because it has good rhythm. But the rhythm of good writing is not the rhythm of music, or the meter of verse. It's not so regular. If it were, it wouldn't be good, because the rhythm of good writing has to match the ideas in it, and ideas have all kinds of different shapes. Sometimes they're simple and you just state them. But other times they're more subtle, and you need longer, more complicated sentences to tease out all the implications.</P>

<P>An essay is a cleaned up train of thought, in the same way dialogue is cleaned up conversation, and a train of thought has a natural rhythm. So when an essay sounds good, it's not merely because it has a pleasing rhythm, but because it has its natural one. Which means you can use getting the rhythm right as a heuristic for getting the ideas right. And not just in principle: good writers do both simultaneously as a matter of course. Often I don't even distinguish between the two problems. I just think Ugh, this doesn't sound right; what do I mean to say here? [3]</P>

<P>The sound of writing turns out to be more like the shape of a plane than the color of a car. If it looks good, as Kelly Johnson used to say, it will fly well.</P>

<P>This is only true of writing that's used to develop ideas, though. It doesn't apply when you have ideas in some other way and then write about them afterward — for example, if you build something, or conduct an experiment, and then write a paper about it. In such cases the ideas often live more in the work than the writing, so the writing can be bad even though the ideas are good. The writing in textbooks and popular surveys can be bad for the same reason: the author isn't developing the ideas, merely describing other people's. It's only when you're writing to develop ideas that there's such a close connection between the two senses of doing it well.</P>

<P>Ok, many people will be thinking, this seems plausible so far, but what about liars? Is it not notoriously possible for a smooth-tongued liar to write something beautiful that's completely false?</P>

<P>It is, of course. But not without method acting. The way to write something beautiful and false is to begin by making yourself almost believe it. So just like someone writing something beautiful and true, you're presenting a perfectly-formed train of thought. The difference is the point where it attaches to the world. You're saying something that would be true if certain false premises were. If for some bizarre reason the number of jobs in a country were fixed, then immigrants really would be taking our jobs.</P>

<P>So it's not quite right to say that better sounding writing is more likely to be true. Better sounding writing is more likely to be internally consistent. If the writer is honest, internal consistency and truth converge.</P>

<P>But while we can't safely conclude that beautiful writing is true, it's usually safe to conclude the converse: something that seems clumsily written will usually have gotten the ideas wrong too.</P>

<P>Indeed, the two senses of good writing are more like two ends of the same thing. The connection between them is not a rigid one; the goodness of good writing is not a rod but a rope, with multiple overlapping connections running through it. But it's hard to move one end without moving the other. It's hard to be right without sounding right.</P>`
},

   {

     id : 3,

     title : "What to Do",

     excerpt: "Here are my thoughts on making decisions about what to do with your life and career.",
     
     content: ` <P style="margin-bottom: 2rem; color: #64748B;">March 2025</p>



<P>What should one do? That may seem a strange question, but it's not meaningless or unanswerable. It's the sort of question kids ask before they learn not to ask big questions. I only came across it myself in the process of investigating something else. But once I did, I thought I should at least try to answer it.</p>

<P>So what should one do? One should help people, and take care of the world. Those two are obvious. But is there anything else? When I ask that, the answer that pops up is Make good new things.</p>

<P>I can't prove that one should do this, any more than I can prove that one should help people or take care of the world. We're talking about first principles here. But I can explain why this principle makes sense. The most impressive thing humans can do is to think. It may be the most impressive thing that can be done. And the best kind of thinking, or more precisely the best proof that one has thought well, is to make good new things.</p>

<P>I mean new things in a very general sense. Newton's physics was a good new thing. Indeed, the first version of this principle was to have good new ideas. But that didn't seem general enough: it didn't include making art or music, for example, except insofar as they embody new ideas. And while they may embody new ideas, that's not all they embody, unless you stretch the word "idea" so uselessly thin that it includes everything that goes through your nervous system.</p>

<P>Even for ideas that one has consciously, though, I prefer the phrasing "make good new things." There are other ways to describe the best kind of thinking. To make discoveries, for example, or to understand something more deeply than others have. But how well do you understand something if you can't make a model of it, or write about it? Indeed, trying to express what you understand is not just a way to prove that you understand it, but a way to understand it better.</p>

<P>Another reason I like this phrasing is that it biases us toward creation. It causes us to prefer the kind of ideas that are naturally seen as making things rather than, say, making critical observations about things other people have made. Those are ideas too, and sometimes valuable ones, but it's easy to trick oneself into believing they're more valuable than they are. Criticism seems sophisticated, and making new things often seems awkward, especially at first; and yet it's precisely those first steps that are most rare and valuable.</p>

<P>Is newness essential? I think so. Obviously it's essential in science. If you copied a paper of someone else's and published it as your own, it would seem not merely unimpressive but dishonest. And it's similar in the arts. A copy of a good painting can be a pleasing thing, but it's not impressive in the way the original was. Which in turn implies it's not impressive to make the same thing over and over, however well; you're just copying yourself.</p>

<P>Note though that we're talking about a different kind of should with this principle. Taking care of people and the world are shoulds in the sense that they're one's duty, but making good new things is a should in the sense that this is how to live to one's full potential. Historically most rules about how to live have been a mix of both kinds of should, though usually with more of the former than the latter. [1]</p>

<P>For most of history the question "What should one do?" got much the same answer everywhere, whether you asked Cicero or Confucius. You should be wise, brave, honest, temperate, and just, uphold tradition, and serve the public interest. There was a long stretch where in some parts of the world the answer became "Serve God," but in practice it was still considered good to be wise, brave, honest, temperate, and just, uphold tradition, and serve the public interest. And indeed this recipe would have seemed right to most Victorians. But there's nothing in it about taking care of the world or making new things, and that's a bit worrying, because it seems like this question should be a timeless one. The answer shouldn't change much.</p>

<P>I'm not too worried that the traditional answers don't mention taking care of the world. Obviously people only started to care about that once it became clear we could ruin it. But how can making good new things be important if the traditional answers don't mention it?</p>

<P>The traditional answers were answers to a slightly different question. They were answers to the question of how to be, rather than what to do. The audience didn't have a lot of choice about what to do. The audience up till recent centuries was the landowning class, which was also the political class. They weren't choosing between doing physics and writing novels. Their work was foreordained: manage their estates, participate in politics, fight when necessary. It was ok to do certain other kinds of work in one's spare time, but ideally one didn't have any. Cicero's De Officiis is one of the great classical answers to the question of how to live, and in it he explicitly says that he wouldn't even be writing it if he hadn't been excluded from public life by recent political upheavals. [2]</p>

<P>There were of course people doing what we would now call "original work," and they were often admired for it, but they weren't seen as models. Archimedes knew that he was the first to prove that a sphere has 2/3 the volume of the smallest enclosing cylinder and was very pleased about it. But you don't find ancient writers urging their readers to emulate him. They regarded him more as a prodigy than a model.</p>

<P>Now many more of us can follow Archimedes's example and devote most of our attention to one kind of work. He turned out to be a model after all, along with a collection of other people that his contemporaries would have found it strange to treat as a distinct group, because the vein of people making new things ran at right angles to the social hierarchy.</p>

<P>What kinds of new things count? I'd rather leave that question to the makers of them. It would be a risky business to try to define any kind of threshold, because new kinds of work are often despised at first. Raymond Chandler was writing literal pulp fiction, and he's now recognized as one of the best writers of the twentieth century. Indeed this pattern is so common that you can use it as a recipe: if you're excited about some kind of work that's not considered prestigious and you can explain what everyone else is overlooking about it, then this is not merely a kind of work that's ok to do, but one to seek out.</p>

<P>The other reason I wouldn't want to define any thresholds is that we don't need them. The kind of people who make good new things don't need rules to keep them honest.</p>

<P>So there's my guess at a set of principles to live by: take care of people and the world, and make good new things. Different people will do these to varying degrees. There will presumably be lots who focus entirely on taking care of people. There will be a few who focus mostly on making new things. But even if you're one of those, you should at least make sure that the new things you make don't net harm people or the world. And if you go a step further and try to make things that help them, you may find you're ahead on the trade. You'll be more constrained in what you can make, but you'll make it with more energy.</p>

<P>On the other hand, if you make something amazing, you'll often be helping people or the world even if you didn't mean to. Newton was driven by curiosity and ambition, not by any practical effect his work might have, and yet the practical effect of his work has been enormous. And this seems the rule rather than the exception. So if you think you can make something amazing, you should probably just go ahead and do it.</p>

`

   },

    {

     id : 4,

     title : "The Origins of Wokeness",

     excerpt: "Exploring the historical and cultural roots of contemporary social movements.",
     
     content: ` <P style="margin-bottom: 2rem; color: #64748B;">January 2026</P>



       <P>The word "prig" isn't very common now, but if you look up the definition, it will sound familiar. Google's isn't bad:</P>
        <P>A self-righteously moralistic person who behaves as if superior to others.</P>
<P>This sense of the word originated in the 18th century, and its age is an important clue: it shows that although wokeness is a comparatively recent phenomenon, it's an instance of a much older one.</P>

<P>There's a certain kind of person who's attracted to a shallow, exacting kind of moral purity, and who demonstrates his purity by attacking anyone who breaks the rules. Every society has these people. All that changes is the rules they enforce. In Victorian England it was Christian virtue. In Stalin's Russia it was orthodox Marxism-Leninism. For the woke, it's social justice.</P>

<P>So if you want to understand wokeness, the question to ask is not why people behave this way. Every society has prigs. The question to ask is why our prigs are priggish about these ideas, at this moment. And to answer that we have to ask when and where wokeness began.</P>

<P>The answer to the first question is the 1980s. Wokeness is a second, more aggressive wave of political correctness, which started in the late 1980s, died down in the late 1990s, and then returned with a vengeance in the early 2010s, finally peaking after the riots of 2020.</P>

<P>What was political correctness, exactly? I'm often asked to define both this term and wokeness by people who think they're meaningless labels, so I will. They both have the same definition:</P>
<P>An aggressively performative focus on social justice.
<P>In other words, it's people being prigs about social justice. And that's the real problem — the performativeness, not the social justice. [0]</P>

<P>Racism, for example, is a genuine problem. Not a problem on the scale that the woke believe it to be, but a genuine one. I don't think any reasonable person would deny that. The problem with political correctness was not that it focused on marginalized groups, but the shallow, aggressive way in which it did so. Instead of going out into the world and quietly helping members of marginalized groups, the politically correct focused on getting people in trouble for using the wrong words to talk about them.</P>

<P>As for where political correctness began, if you think about it, you probably already know the answer. Did it begin outside universities and spread to them from this external source? Obviously not; it has always been most extreme in universities. So where in universities did it begin? Did it begin in math, or the hard sciences, or engineering, and spread from there to the humanities and social sciences? Those are amusing images, but no, obviously it began in the humanities and social sciences.</P>

<P>Why there? And why then? What happened in the humanities and social sciences in the 1980s?</P>

<P>A successful theory of the origin of political correctness has to be able to explain why it didn't happen earlier. Why didn't it happen during the protest movements of the 1960s, for example? They were concerned with much the same issues. [1]</P>

<P>The reason the student protests of the 1960s didn't lead to political correctness was precisely that — they were student movements. They didn't have any real power. The students may have been talking a lot about women's liberation and black power, but it was not what they were being taught in their classes. Not yet.</P>

<P>But in the early 1970s the student protestors of the 1960s began to finish their dissertations and get hired as professors. At first they were neither powerful nor numerous. But as more of their peers joined them and the previous generation of professors started to retire, they gradually became both.</P>

<P>The reason political correctness began in the humanities and social sciences was that these fields offered more scope for the injection of politics. A 1960s radical who got a job as a physics professor could still attend protests, but his political beliefs wouldn't affect his work. Whereas research in sociology and modern literature can be made as political as you like. [2]</P>

<P>I saw political correctness arise. When I started college in 1982 it was not yet a thing. Female students might object if someone said something they considered sexist, but no one was getting reported for it. It was still not a thing when I started grad school in 1986. It was definitely a thing in 1988 though, and by the early 1990s it seemed to pervade campus life.</P>

<P>What happened? How did protest become punishment? Why were the late 1980s the point at which protests against male chauvinism (as it used to be called) morphed into formal complaints to university authorities about sexism? Basically, the 1960s radicals got tenure. They became the Establishment they'd protested against two decades before. Now they were in a position not just to speak out about their ideas, but to enforce them.</P>

<P>A new set of moral rules to enforce was exciting news to a certain kind of student. What made it particularly exciting was that they were allowed to attack professors. I remember noticing that aspect of political correctness at the time. It wasn't simply a grass-roots student movement. It was faculty members encouraging students to attack other faculty members. In that respect it was like the Cultural Revolution. That wasn't a grass-roots movement either; that was Mao unleashing the younger generation on his political opponents. And in fact when Roderick MacFarquhar started teaching a class on the Cultural Revolution at Harvard in the late 1980s, many saw it as a comment on current events. I don't know if it actually was, but people thought it was, and that means the similarities were obvious. [3]</P>

<P>College students larp. It's their nature. It's usually harmless. But larping morality turned out to be a poisonous combination. The result was a kind of moral etiquette, superficial but very complicated. Imagine having to explain to a well-meaning visitor from another planet why using the phrase "people of color" is considered particularly enlightened, but saying "colored people" gets you fired. And why exactly one isn't supposed to use the word "negro" now, even though Martin Luther King used it constantly in his speeches. There are no underlying principles. You'd just have to give him a long list of rules to memorize. [4]</P>

<P>The danger of these rules was not just that they created land mines for the unwary, but that their elaborateness made them an effective substitute for virtue. Whenever a society has a concept of heresy and orthodoxy, orthodoxy becomes a substitute for virtue. You can be the worst person in the world, but as long as you're orthodox you're better than everyone who isn't. This makes orthodoxy very attractive to bad people.</P>

<P>But for it to work as a substitute for virtue, orthodoxy must be difficult. If all you have to do to be orthodox is wear some garment or avoid saying some word, everyone knows to do it, and the only way to seem more virtuous than other people is to actually be virtuous. The shallow, complicated, and frequently changing rules of political correctness made it the perfect substitute for actual virtue. And the result was a world in which good people who weren't up to date on current moral fashions were brought down by people whose characters would make you recoil in horror if you could see them.</P>

<P>One big contributing factor in the rise of political correctness was the lack of other things to be morally pure about. Previous generations of prigs had been prigs mostly about religion and sex. But among the cultural elite these were the deadest of dead letters by the 1980s; if you were religious, or a virgin, this was something you tended to conceal rather than advertise. So the sort of people who enjoy being moral enforcers had become starved of things to enforce. A new set of rules was just what they'd been waiting for.</P>

<P>Curiously enough, the tolerant side of the 1960s left helped create the conditions in which the intolerant side prevailed. The relaxed social rules advocated by the old, easy-going hippy left became the dominant ones, at least among the elite, and this left nothing for the naturally intolerant to be intolerant about.</P>

<P>Another possibly contributing factor was the fall of the Soviet empire. Marxism had been a popular focus of moral purity on the left before political correctness emerged as a competitor, but the pro-democracy movements in Eastern Bloc countries took most of the shine off it. Especially the fall of the Berlin Wall in 1989. You couldn't be on the side of the Stasi. I remember looking at the moribund Soviet Studies section of a used bookshop in Cambridge in the late 1980s and thinking "what will those people go on about now?" As it turned out the answer was right under my nose.</P>

<P>One thing I noticed at the time about the first phase of political correctness was that it was more popular with women than men. As many writers (perhaps most eloquently George Orwell) have observed, women seem more attracted than men to the idea of being moral enforcers. But there was another more specific reason women tended to be the enforcers of political correctness. There was at this time a great backlash against sexual harassment; the mid 1980s were the point when the definition of sexual harassment was expanded from explicit sexual advances to creating a "hostile environment." Within universities the classic form of accusation was for a (female) student to say that a professor made her "feel uncomfortable." But the vagueness of this accusation allowed the radius of forbidden behavior to expand to include talking about heterodox ideas. Those make people uncomfortable too. [5]</P>

<P>Was it sexist to propose that Darwin's greater male variability hypothesis might explain some variation in human performance? Sexist enough to get Larry Summers pushed out as president of Harvard, apparently. One woman who heard the talk in which he mentioned this idea said it made her feel "physically ill" and that she had to leave halfway through. If the test of a hostile environment is how it makes people feel, this certainly sounds like one. And yet it does seem plausible that greater male variability explains some of the variation in human performance. So which should prevail, comfort or truth? Surely if truth should prevail anywhere, it should be in universities; that's supposed to be their specialty; but for decades starting in the late 1980s the politically correct tried to pretend this conflict didn't exist. [6]</P>

<P>Political correctness seemed to burn out in the second half of the 1990s. One reason, perhaps the main reason, was that it literally became a joke. It offered rich material for comedians, who performed their usual disinfectant action upon it. Humor is one of the most powerful weapons against priggishness of any sort, because prigs, being humorless, can't respond in kind. Humor was what defeated Victorian prudishness, and by 2000 it seemed to have done the same thing to political correctness.</P>

<P>Unfortunately this was an illusion. Within universities the embers of political correctness were still glowing brightly. After all, the forces that created it were still there. The professors who started it were now becoming deans and department heads. And in addition to their departments there were now a bunch of new ones explicitly focused on social justice. Students were still hungry for things to be morally pure about. And there had been an explosion in the number of university administrators, many of whose jobs involved enforcing various forms of political correctness.</P>

<P>In the early 2010s the embers of political correctness burst into flame anew. There were several differences between this new phase and the original one. It was more virulent. It spread further into the real world, although it still burned hottest within universities. And it was concerned with a wider variety of sins. In the first phase of political correctness there were really only three things people got accused of: sexism, racism, and homophobia (which at the time was a neologism invented for the purpose). But between then and 2010 a lot of people had spent a lot of time trying to invent new kinds of -isms and -phobias and seeing which could be made to stick.</P>

<P>The second phase was, in multiple senses, political correctness metastasized. Why did it happen when it did? My guess is that it was due to the rise of social media, particularly Tumblr and Twitter, because one of the most distinctive features of the second wave of political correctness was the cancel mob: a mob of angry people uniting on social media to get someone ostracized or fired. Indeed this second wave of political correctness was originally called "cancel culture"; it didn't start to be called "wokeness" till the 2020s.</P>

<P>One aspect of social media that surprised almost everyone at first was the popularity of outrage. Users seemed to like being outraged. We're so used to this idea now that we take it for granted, but really it's pretty strange. Being outraged is not a pleasant feeling. You wouldn't expect people to seek it out. But they do. And above all, they want to share it. I happened to be running a forum from 2007 to 2014, so I can actually quantify how much they want to share it: our users were about three times more likely to upvote something if it outraged them.</P>

<P>This tilt toward outrage wasn't due to wokeness. It's an inherent feature of social media, or at least this generation of it. But it did make social media the perfect mechanism for fanning the flames of wokeness. [7]

<P>It wasn't just public social networks that drove the rise of wokeness though. Group chat apps were also critical, especially in the final step, cancellation. Imagine if a group of employees trying to get someone fired had to do it using only email. It would be hard to organize a mob. But once you have group chat, mobs form naturally.</P>

<P>Another contributing factor in this second wave of political correctness was the dramatic increase in the polarization of the press. In the print era, newspapers were constrained to be, or at least seem, politically neutral. The department stores that ran ads in the New York Times wanted to reach everyone in the region, both liberal and conservative, so the Times had to serve both. But the Times didn't regard this neutrality as something forced upon them. They embraced it as their duty as a paper of record — as one of the big newspapers that aimed to be chronicles of their times, reporting every sufficiently important story from a neutral point of view.</P>

<P>When I grew up the papers of record seemed timeless, almost sacred institutions. Papers like the New York Times and Washington Post had immense prestige, partly because other sources of news were limited, but also because they did make some effort to be neutral.

<P>Unfortunately it turned out that the paper of record was mostly an artifact of the constraints imposed by print. [8] When your market was determined by geography, you had to be neutral. But publishing online enabled — in fact probably forced — newspapers to switch to serving markets defined by ideology instead of geography. Most that remained in business fell in the direction they'd already been leaning: left. On October 11, 2020 the New York Times announced that "The paper is in the midst of an evolution from the stodgy paper of record into a juicy collection of great narratives." [9] Meanwhile journalists, of a sort, had arisen to serve the right as well. And so journalism, which in the previous era had been one of the great centralizing forces, now became one of the great polarizing ones.</P>

<P>The rise of social media and the increasing polarization of journalism reinforced one another. In fact there arose a new variety of journalism involving a loop through social media. Someone would say something controversial on social media. Within hours it would become a news story. Outraged readers would then post links to the story on social media, driving further arguments online. It was the cheapest source of clicks imaginable. You didn't have to maintain overseas news bureaus or pay for month-long investigations. All you had to do was watch Twitter for controversial remarks and repost them on your site, with some additional comments to inflame readers further.</P>

<P>For the press there was money in wokeness. But they weren't the only ones. That was one of the biggest differences between the two waves of political correctness: the first was driven almost entirely by amateurs, but the second was often driven by professionals. For some it was their whole job. By 2010 a new class of administrators had arisen whose job was basically to enforce wokeness. They played a role similar to that of the political commissars who got attached to military and industrial organizations in the USSR: they weren't directly in the flow of the organization's work, but watched from the side to ensure that nothing improper happened in the doing of it. These new administrators could often be recognized by the word "inclusion" in their titles. Within institutions this was the preferred euphemism for wokeness; a new list of banned words, for example, would usually be called an "inclusive language guide." [10]</P>

<P>This new class of bureaucrats pursued a woke agenda as if their jobs depended on it, because they did. If you hire people to keep watch for a particular type of problem, they're going to find it, because otherwise there's no justification for their existence. [11] But these bureaucrats also represented a second and possibly even greater danger. Many were involved in hiring, and when possible they tried to ensure their employers hired only people who shared their political beliefs. The most egregious cases were the new "DEI statements" that some universities started to require from faculty candidates, proving their commitment to wokeness. Some universities used these statements as the initial filter and only even considered candidates who scored high enough on them. You're not hiring Einstein that way; imagine what you get instead.</P>

<P>Another factor in the rise of wokeness was the Black Lives Matter movement, which started in 2013 when a white man was acquitted after killing a black teenager in Florida. But this didn't launch wokeness; it was well underway by 2013.</P>

<P>Similarly for the Me Too Movement, which took off in 2017 after the first news stories about Harvey Weinstein's history of raping women. It accelerated wokeness, but didn't play the same role in launching it that the 80s version did in launching political correctness.</P>

<P>The election of Donald Trump in 2016 also accelerated wokeness, particularly in the press, where outrage now meant traffic. Trump made the New York Times a lot of money: headlines during his first administration mentioned his name at about four times the rate of previous presidents.</P>

<P>In 2020 we saw the biggest accelerant of all, after a white police officer asphyxiated a black suspect on video. At this point the metaphorical fire became a literal one, as violent protests broke out across America. But in retrospect this turned out to be peak woke, or close to it. By every measure I've seen, wokeness peaked in 2020 or 2021.</P>

<P>Wokeness is sometimes described as a mind-virus. What makes it viral is that it defines new types of impropriety. Most people are afraid of impropriety; they're never exactly sure what the social rules are or which ones they might be breaking. Especially if the rules change rapidly. And since most people already worry that they might be breaking rules they don't know about, if you tell them they're breaking a rule, their default reaction is to believe you. Especially if multiple people tell them. Which in turn is a recipe for exponential growth. Zealots invent some new impropriety to avoid. The first people to adopt it are fellow zealots, eager for new ways to signal their virtue. If there are enough of these, the initial group of zealots is followed by a much larger group, motivated by fear. They're not trying to signal virtue; they're just trying to avoid getting in trouble. At this point the new impropriety is now firmly established. Plus its success has increased the rate of change in social rules, which, remember, is one of the reasons people are nervous about which rules they might be breaking. So the cycle accelerates. [12]</P>

<P>What's true of individuals is even more true of organizations. Especially organizations without a powerful leader. Such organizations do everything based on "best practices." There's no higher authority; if some new "best practice" achieves critical mass, they must adopt it. And in this case the organization can't do what it usually does when it's uncertain: delay. It might be committing improprieties right now! So it's surprisingly easy for a small group of zealots to capture this type of organization by describing new improprieties it might be guilty of. [13]</P>

<P>How does this kind of cycle ever end? Eventually it leads to disaster, and people start to say enough is enough. The excesses of 2020 made a lot of people say that.</P>

<P>Since then wokeness has been in gradual but continual retreat. Corporate CEOs, starting with Brian Armstrong, have openly rejected it. Universities, led by the University of Chicago and MIT, have explicitly confirmed their commitment to free speech. Twitter, which was arguably the hub of wokeness, was bought by Elon Musk in order to neutralize it, and he seems to have succeeded — and not, incidentally, by censoring left-wing users the way Twitter used to censor right-wing ones, but without censoring either. [14] Consumers have emphatically rejected brands that ventured too far into wokeness. The Bud Light brand may have been permanently damaged by it. I'm not going to claim Trump's second victory in 2024 was a referendum on wokeness; I think he won, as presidential candidates always do, because he was more charismatic; but voters' disgust with wokeness must have helped.</P>

<P>So what do we do now? Wokeness is already in retreat. Obviously we should help it along. What's the best way to do that? And more importantly, how do we avoid a third outbreak? After all, it seemed to be dead once, but came back worse than ever.

<P>In fact there's an even more ambitious goal: is there a way to prevent any similar outbreak of aggressively performative moralism in the future — not just a third outbreak of political correctness, but the next thing like it? Because there will be a next thing. Prigs are prigs by nature. They need rules to obey and enforce, and now that Darwin has cut off their traditional supply of rules, they're constantly hungry for new ones. All they need is someone to meet them halfway by defining a new way to be morally pure, and we'll see the same phenomenon again.</P>

<P>Let's start with the easier problem. Is there a simple, principled way to deal with wokeness? I think there is: to use the customs we already have for dealing with religion. Wokeness is effectively a religion, just with God replaced by protected classes. It's not even the first religion of this kind; Marxism had a similar form, with God replaced by the masses. [15] And we already have well-established customs for dealing with religion within organizations. You can express your own religious identity and explain your beliefs, but you can't call your coworkers infidels if they disagree, or try to ban them from saying things that contradict its doctrines, or insist that the organization adopt yours as its official religion.</P>

<P>If we're not sure what to do about any particular manifestation of wokeness, imagine we were dealing with some other religion, like Christianity. Should we have people within organizations whose jobs are to enforce woke orthodoxy? No, because we wouldn't have people whose jobs were to enforce Christian orthodoxy. Should we censor writers or scientists whose work contradicts woke doctrines? No, because we wouldn't do this to people whose work contradicted Christian teachings. Should job candidates be required to write DEI statements? Of course not; imagine an employer requiring proof of one's religious beliefs. Should students and employees have to participate in woke indoctrination sessions in which they're required to answer questions about their beliefs to ensure compliance? No, because we wouldn't dream of catechizing people in this way about their religion. [16]</P>

<P>One shouldn't feel bad about not wanting to watch woke movies any more than one would feel bad about not wanting to listen to Christian rock. In my twenties I drove across America several times, listening to local radio stations. Occasionally I'd turn the dial and hear some new song. But the moment anyone mentioned Jesus I'd turn the dial again. Even the tiniest bit of being preached to was enough to make me lose interest.</P>

<P>But by the same token we should not automatically reject everything the woke believe. I'm not a Christian, but I can see that many Christian principles are good ones. It would be a mistake to discard them all just because one didn't share the religion that espoused them. It would be the sort of thing a religious zealot would do.</P>

<P>If we have genuine pluralism, I think we'll be safe from future outbreaks of woke intolerance. Wokeness itself won't go away. There will for the foreseeable future continue to be pockets of woke zealots inventing new moral fashions. The key is not to let them treat their fashions as normative. They can change what their coreligionists are allowed to say every few months if they like, but they mustn't be allowed to change what we're allowed to say. [17]</P>

<P>The more general problem — how to prevent similar outbreaks of aggressively performative moralism — is of course harder. Here we're up against human nature. There will always be prigs. And in particular there will always be the enforcers among them, the aggressively conventional-minded. These people are born that way. Every society has them. So the best we can do is to keep them bottled up.</P>

<P>The aggressively conventional-minded aren't always on the rampage. Usually they just enforce whatever random rules are nearest to hand. They only become dangerous when some new ideology gets a lot of them pointed in the same direction at once. That's what happened during the Cultural Revolution, and to a lesser extent (thank God) in the two waves of political correctness we've experienced.</P>

<P>We can't get rid of the aggressively conventional-minded. [18] And we couldn't prevent people from creating new ideologies that appealed to them even if we wanted to. So if we want to keep them bottled up, we have to do it one step downstream. Fortunately when the aggressively conventional-minded go on the rampage they always do one thing that gives them away: they define new heresies to punish people for. So the best way to protect ourselves from future outbreaks of things like wokeness is to have powerful antibodies against the concept of heresy.</P>

<P>We should have a conscious bias against defining new forms of heresy. Whenever anyone tries to ban saying something that we'd previously been able to say, our initial assumption should be that they're wrong. Only our initial assumption of course. If they can prove we should stop saying it, then we should. But the burden of proof is on them. In liberal democracies, people trying to prevent something from being said will usually claim they're not merely engaging in censorship, but trying to prevent some form of "harm". And maybe they're right. But once again, the burden of proof is on them. It's not enough to claim harm; they have to prove it.</P>

<P>As long as the aggressively conventional-minded continue to give themselves away by banning heresies, we'll always be able to notice when they become aligned behind some new ideology. And if we always fight back at that point, with any luck we can stop them in their tracks.</P>

<P>The number of true things we can't say should not increase. If it does, something is wrong.</P>
`

    },

   
    {

     id : 5,

     title : "Writes and Write-Nots",

     excerpt: "On the divide between those who write and those who don't, and what it means.",
     
     content: ` <p style="margin-bottom: 2rem; color: #64748B;"> October 2025 </P>



 <p>I'm usually reluctant to make predictions about technology, but I feel fairly confident about this one: in a couple decades there won't be many people who can write.</P>

 <p>One of the strangest things you learn if you're a writer is how many people have trouble writing. Doctors know how many people have a mole they're worried about; people who are good at setting up computers know how many people aren't; writers know how many people need help writing.</P>

 <p>The reason so many people have trouble writing is that it's fundamentally difficult. To write well you have to think clearly, and thinking clearly is hard.</P>

 <p>And yet writing pervades many jobs, and the more prestigious the job, the more writing it tends to require.</P>

 <p>These two powerful opposing forces, the pervasive expectation of writing and the irreducible difficulty of doing it, create enormous pressure. This is why eminent professors often turn out to have resorted to plagiarism. The most striking thing to me about these cases is the pettiness of the thefts. The stuff they steal is usually the most mundane boilerplate — the sort of thing that anyone who was even halfway decent at writing could turn out with no effort at all. Which means they're not even halfway decent at writing.</P>

 <p>Till recently there was no convenient escape valve for the pressure created by these opposing forces. You could pay someone to write for you, like JFK, or plagiarize, like MLK, but if you couldn't buy or steal words, you had to write them yourself. And as a result nearly everyone who was expected to write had to learn how.</P>

 <p>Not anymore. AI has blown this world open. Almost all pressure to write has dissipated. You can have AI do it for you, both in school and at work.</P>

 <p>The result will be a world divided into writes and write-nots. There will still be some people who can write. Some of us like it. But the middle ground between those who are good at writing and those who can't write at all will disappear. Instead of good writers, ok writers, and people who can't write, there will just be good writers and people who can't write.</P>

 <p>Is that so bad? Isn't it common for skills to disappear when technology makes them obsolete? There aren't many blacksmiths left, and it doesn't seem to be a problem.</P>

 <p>Yes, it's bad. The reason is something I mentioned earlier: writing is thinking. In fact there's a kind of thinking that can only be done by writing. You can't make this point better than Leslie Lamport did:</P>
 If you're thinking without writing, you only think you're thinking.
 So a world divided into writes and write-nots is more dangerous than it sounds. It will be a world of thinks and think-nots. I know which half I want to be in, and I bet you do too.

 <p>This situation is not unprecedented. In preindustrial times most people's jobs made them strong. Now if you want to be strong, you work out. So there are still strong people, but only those who choose to be.</P>

 <p>It will be the same with writing. There will still be smart people, but only those who choose to be.</P>
`
   }

   


];

function getpostbyid(id) {
    return blogPosts.find(post=>post.id==id)
}

app.get("/", (req,res)=>{

res.render('index.ejs', {blogPosts:blogPosts})
})

app.get("/new", (req,res)=>{
    res.render('new.ejs')
})
app.get("/post/:id", (req,res)=>{

    const post = getpostbyid(req.params.id)
    
    if (post) {
  
        res.render("post.ejs", {post:post})

    }

    else{
       
     res.status(404).send('Post not found');
    
    }

})


app.post("/create-post", (req,res)=>{
const newPost = {
id : blogPosts.length+ 1,
title : req.body.title,
excerpt: req.body.content.substring(0, 150) + "...",
content : req.body. content

};

blogPosts.push(newPost)

res.redirect('/')
})








app.listen( port, ()=>{
 console.log(`Server is running on ${port}`)   
})
