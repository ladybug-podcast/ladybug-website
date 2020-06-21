Emma 0:00  
Micro interactions are small animations that delight our users. And they're changing the way that we design and build our applications. Micro interactions have many benefits, like enhancing perceived performance, indicating a state change and drawing users attention to something on the page. Today, we'll dive into micro interactions and the animation libraries that you can build them with. Let's get started.

Kelly 0:26  
Welcome to the ladybug podcast. I'm Kelly.

Unknown Speaker 0:29  
I'm Allie. And I'm Emma. And we're debugging the tech

Unknown Speaker 0:31  
industry.

Unknown Speaker 0:35  
Hey, Kelly, have you heard about this cool tool called AWS amplify? Tell me about it.

Emma 0:39  
It's a suite of tools and services that enables developers to build full stack serverless and cloud based web and mobile apps. You get to use whichever framework or technology you want on the front

Kelly 0:48  
end. That sounds cool will help me get up and running with things like hosting. Yeah, authentication. You betcha. Managed graph QL. Totally. How about serverless functions API is machine learning chatbot file storage

Emma 1:01  
yes to everything amplifiers built, especially in a way to enable traditionally front end developers like yourself Kelly to be successful because you can use your existing skill set to build a real world full stack apps than in the past would require deep knowledge around back end DevOps and scalable infrastructure. The amplify console also allows you to use a GitHub repository to deploy to a globally available CDN with ci NCD built in. It's super cool. Where can I learn more? If you want to learn more about AWS amplify, visit AWS amplify.github.io How often have you struggled to learn programming because you just couldn't find the right resource to suit your learning style. I struggled for nearly a year before stumbling upon a website known as front end masters. I've been a longtime paid user of the online learning platform simply because I find the courses to be comprehensive and beginner friendly. They have the best teachers in the tech industry, and they're one of the reasons I was able to land my dream job with Fern master You can learn web development, responsive design, back end development, animations, testing algorithms, data structures and more. You can pick a course you're interested in or follow one of the learning paths like react, view, angular data visualization with d3, node j. s and more. To learn more head to front and masters comm so I guess we'll start by discussing micro interactions. And I'm curious if either of you have ever heard this term before? I have,

Kelly 2:28  
yes. It's something that's especially like in the e commerce space. These are the kinds of user experience improvements that you can use to you don't really hate that word, use the word improve again, but honestly, it's something that I'm very closely looking at when when I'm doing like UX audits on on e commerce sites.

Ali 2:48  
Yeah, I've also heard of them, but this is a little bit out of my wheelhouse. I'm into performance, but I'm more of like a JavaScript Python kind of person. So I don't do as much with the Ui Ui stuff. So this one's a little bit different for me.

Emma 3:09  
Nice, nice. So I hope that you all learned something today.

Kelly 3:14  
That sounds condescending, I know. The kind of, I hope you guys can learn. It's like,

Emma 3:19  
so yeah, so let's talk about kind of the psychology behind these small interactions. First of all, a couple of examples. You know, when you hover over the like button on Facebook, if you still use Facebook, they like pop up this little menu with different reactions. That's a micro interaction. So you're seeing like these little like, it basically is a response to you hovering over it saying, oh, okay, let's pop up menu and show these cute little animations. And they innately make you feel good, and they actually can get you addicted to products. So when you double tap on an Instagram photo, and you see the heart enemy, that's a micro interaction. And they're really, really important because while For several reasons, let's talk about the first one anally, you might have some thoughts on this, but they enhance perceived performance. And there's a really great quote that I love. That says there are two kinds of time clock time and brain time. So the first is the objective measure of time. But the second is how a person actually perceives time, do you want to give a small, like definition or example of what perceived performances?

Ali 4:22  
Yes, the perceived performance is how fast somebody feels like the page is. So we can have timers to check how long a page actually takes to first paint or to load or anything like that. We can have objective time and performance, actual performance, but you, the user is going to still perceive that as either being slow or fast. And there are ways that you can make it so that it feels faster to the user, even if an API call takes a little bit of time or the page takes a little bit of time to render. So things like transitions. And even just adding like a spinner so that they know that something is happening on the page that will make it feel like the website is faster than it is Eli Fitch, who is just one of the smartest people I've ever met. And he has an amazing talk on perceived performance. So I'll link that in the show notes.

Unknown Speaker 5:21  
I think he actually

Emma 5:22  
spoke at Kraft comp and Budapest about this when I was there a couple of years ago, if I'm not mistaken. But I it was one of those conferences where they had multiple tracks. And at the time, I was attending a different talk, which ironically turned out not to be so great. And I'm a little sad that I didn't go see his performance talk because I heard it was great. I just

Ali 5:41  
put a link to the presentation with speaker notes in our show notes. Lots of notes going on. That's a lot of notes.

Emma 5:48  
Yeah, so users are actually willing to wait a longer amount of time. If they perceive or think that something is happening in the UI like tallies point a loading spinner. a progress bar is even better if something is loading Because you actually get a finite number on where they are in the state of this progress. But they micro interactions can also be used to draw attention to something. So if you here's a good example, the typing indicator on an iPhone, so when someone is typing in iMessage, you see that little typing bubble. You also see this on like Twitter, DMS and Facebook Messenger, like all the messaging apps are doing it, although I really feel like iMessage was kind of the first like app to do it. But it can be used to draw your attention to and say, Oh, hey, like someone's typing. Or if you have a notification, these are those called those flying notifications that come in the top right, like toast notifications. Those can actually draw your attention and say, Hey, something really relevant is going on right now. And this is what's this is what's up and it's a lot less jarring to users if you animated in and out. Because otherwise they're totally just thrown out of context taken out of whatever context they were, they were in. So one other thing that they can do is indicates a change. So again, progress bars, what state is this API request, and at the moment, it can be used to indicate the form that you're currently filling out is incorrect. So if you've entered the wrong password, or if you haven't put in a proper email address to sign up for a new account, you can actually use these little micro interactions where maybe the border kind of animates in as red and text appears and says, Hey, this is not a valid email address, and you need to fix it. So that can indicate a success or an error state. They can also be used to inform users again about the status of a task. But they can also really be used to build habits. We see a lot of gamifying going on in this day and age and also these little interactions, whether you realize it or not, this this heart animation on Instagram, it really does get you to come back, like subconsciously, your brain likes to see that and it's a reward essentially for triggering an action. And so it's kind of like the dark side of UX, almost where you're intentionally going Getting your users hooked on your product by incorporating these fun little animations.

Kelly 8:04  
You know, one of the ones that I always think about is I play this game called flow free on my phone. And as soon as you complete in a level, it like does this nice little like page flipping animation, and it keeps me on the app. And then next thing I know, I've completed 40 levels, and I've been staring at my phone for I don't know how long, it's addictive. I feel like all

Ali 8:26  
of our episodes come back to atomic habits. Because this is another one that it's a habit, and it makes it so you keep doing that habit. It's the same thing here. So I feel like that's our most crucial episode all of our other ones branch out from it. I have a recommendation if you want to see a bunch of examples of these micro interactions. There is this newsletter called UI movement that I have been subscribed to for years and years, and it sends you like examples of five really, really Really nice animation each week. So I would recommend, I will also put that in the show notes.

Emma 9:07  
I feel like I'm sure Kelly, at the very least I'm sure I'll you know, too but Pavlov's dog. That experiment. Where was it? Isaac Pavlov was that his name, he is a psychologist. And he essentially said apparently condition these dogs are was a classical conditioning. I can't remember classical conditioning, classical conditioning where basically he would, he would ring a bell. And every time he would ring the bell, like the dogs would get a treat. And it got to the point where he would ring the bell, but he wouldn't give them a treat, but their mouths would start to salivate because they expected it so they were conditioned to expect something in return. So you know, when you are liking someone's post, and you see this little animation, you expect to see it like if you were to like someone's photo and you didn't get this animation all of a sudden you would be it would bother you I think subconsciously so for Pavlov's humans. It's Ivan

Kelly 9:57  
Pavlov by the way.

Emma 10:00  
I was so close. You remember I took I took IB psychology in high school, like my junior year. So this is what like, Oh my gosh, I've been out of college for five years. So about seven years ago. It's pretty good. It was got the letter, right. Yeah, I'm

Kelly 10:14  
not the last name, you got the important parts out of it. nobody really cares about his first name. Sorry,

Ali 10:19  
right.

Emma 10:21  
And I think the most obvious benefit of these little animations is that they just delight our users. They can take a task as menial as filling out a form for your dentist and make it really fun. There's a really cute example I found on dribble. Maybe we can link it in the show notes, but it's like this little. It's I think it's a pediatric dentist. So it's for children. And it's this cute, interactive form with little monsters and their teeth. And it's really cute. So we'll link that in the show notes as well. But yeah, we can definitely use these animations to our benefit. And so now that we kind of understand why we can use them, how to actually build them. And so I've kind of come up with these three different phases of building a micro interaction I couldn't find too much documentation on, I still think that this is a relatively new field. And so these are three steps that I came up with. But the first step is to define your interaction. So what is actually going to be like triggering this animation is that you're hovering over an element is that you've tried to submit a form and we need to check, you know, if it's complete or not, is it that the user receives a notification? So define your interaction? What does the user have to do? or What does the system have to do to get this animation to run? The second is going to be a state definition. So what are the different states of our animation? If we think about like a mobile nav sign signing in, is it visible or is it not visible? So those are the two states if we're thinking about maybe a photo gallery, for example, it could be in many different states in regards to which photo it's showing. So if we have five photos, it could be in state zero through four if we're starting at base zero. So first, define what triggers your animation and secondly, define what states that can be in. And once we have our states, we can actually define our animation And what things do we want? What properties we want to be changing across time? And what duration Do we want those to take? So those are the three basic steps that I've kind of come up with, to building these interactions. And while these are really great, there are definitely some do's and don'ts. can either of you think of some do's and don'ts that you may or may not want to think about when you're building these animations?

Ali 12:22  
Something that I think about, like right off the bat is accessibility with animations is making sure that your markup is still going to make sense to a screen reader and it doesn't give anybody a seizure, all those important things

Kelly 12:37  
performance as well as important, you know, you know, we talked about perceived performance here, but if your animations are super cool, but they also completely destroy the for the performance of the site, then there's a that's not really a great trade off.

Emma 12:53  
Yeah, definitely. I totally just made me think about a post that I had found about the 12 principles of Agile animation. And I just remember this, we'll link this in the show notes as well. But in the 1981 book, the illusion of life, the Disney animators, to Disney animators actually introduced these 12 principles. And there's a bunch of them there's ease in ease out anticipation staging, you can take a look from the shownotes. But this reminds me of the fact that thinking about how long our animations need to take, the longer or I'm sorry, the farther an element has to move across your UI, the longer it needs to take. And the shorter amount of time or the shorter distance, the shorter amount of time users are very impatient. And I hate nothing more than when you go to a website and you know that the site is loaded. And instead, they make you sit there and watch their really cool progress bar, like load up their site. I'm like, Oh, nothing is loading. There's no data, like, Can you stop making me wait four seconds for this. And, you know, Allie briefly mentioned in seizures. So if we have a media query, for prefers reduce motion, just make sure that you're not actually showing this enter to users that have disabilities that actually cause them to have seizures, or, you know, ensure that you're essentially catering to everyone. And some people just cannot handle motion and they're you in your UI. So you need to be really careful. We also need to make our animations relatable, in the sense that things don't move linearly. I don't know if you've noticed, but things have mass things have weight. And as such, they don't, if you drop a ball, it's not going to drop in a linear state. And actually, it's going to have some I was really bad at physics, so it's not speed. It's like accelerate LA City.

Ali 14:44  
high school physics. Well,

Emma 14:47  
I actually like almost failed physics. It's fine. Yeah, completely dropped out of physics. So but gravity exists whether we want it to or not. It's pretty useless. Anyway, objects have gravitational pull if you drop them. And so as such, we want our animations to kind of mimic that, which we'll talk about one of my favorite libraries in just a few minutes. And then as a physics space library, but just be careful when you're building these, a lot of libraries use cubic Bezier functions. So you actually have to manually go in and set the duration and set the transition timing function and things like that. So just make sure it kind of mimics the real world because otherwise, it's going to be really weird for your users if things are either linear or they're too fast or too slow, things like that. The last is just to be intentional. So I don't know if you realize, but animations tend to draw your eye. And what that means is, you need to be careful and not put them on absolutely everything. If you've got animations and everything in your UI, your users not going to know what to focus on. So if they're filling out a form, for example, and you do some kind of crazy animation to let them know that there is an update or something thing like that, it's going to pull their context to that notification. And they could potentially forget what they're doing, especially if they have cognitive disabilities. Like a lot of people with cognitive disabilities cannot remember what they were doing. And so we need to be really careful about these animations and ensure that they do not break their train of thought.

Kelly 16:18  
I'm just trying to picture a site now that has completely unnecessary animations while trying to fill out a form. That's just like moving things around for the hell of it. And

Ali 16:29  
there is a subreddit that's all like bad UX or something like that. I don't know I have to look up the exact name but it's all things like that. Like where things are moving around the page when you're trying to fill out the form or you have to do like a dial to type in a phone number or whatever.

Unknown Speaker 16:49  
That's always my favorite one, like the stopwatch for a phone number that you have to like, stop it at the right number or reset it and then go to the next number. I love when people put those, what do they select boxes. On the date you were born, but they start. They start you at like 1900. Yeah and crazy. And you've to like scroll all the way is like who was born in 1900? Please,

Kelly 17:10  
I would, I would love to look at their database and just see how many people selected 1900 for the birth, or like the current year, what baby is

Emma 17:19  
what baby is born, go sign up for a Facebook account. Can you not start it at 2020? Like, seriously, your fetus is not going to go on there. Anyway. So maybe now that we've talked about the do's and don'ts of animations, we can actually talk about some libraries to build them. Have either of you used a lot of CSS animations in your code?

Kelly 17:41  
I you know, I use CSS animations as far as like hover states for for buttons and links and drop downs like for mega menus and stuff like that, but I haven't gotten too too fancy with it, and it's an area that I definitely want to explore. It's something that we included in the design For the new taproom site, so we're gonna have to figure it out. I'm pretty excited. That's awesome. I have done like fun

Ali 18:05  
animations, I do a lot of like visual art with code, or at least I used to, I just don't really anymore. life gets busy. Um, but with that I used to do a bunch of animations. And then also on top of that, when I'm building example, apps for students, or whatever, I'll sometimes add fun animations and, or whatever, just so that they're exposed to something, even if we're not teaching it directly. So that's mostly and also when I was a software engineer, sometimes you put animations on stuff like mostly fade ins or whatever. But

Emma 18:40  
yeah, let me tell you that doing complex timeline animations with CSS is the biggest pain in the ass of a task I've ever had to do, especially mounting and unmounting is really painful because it's like, you have to work with appending and is d pending a word appending I'd like to sing but that's okay. It totally does, but I'm going to use it. So depending on depending classes on your DOM elements to get these animations to, like happen on the timeline is really painful. You can use keyframes that can either take a percentage of the duration. So at zero percent of the duration, I want the element to be in this state. So maybe opacity zero, transform translate x negative hundred percent. So it starts off the screen is completely transparent. And then by 100%, I want it to be fully opaque. I want to be able to see it and I wanted to transform translate x 100%, or to zero so that it's actually in your UI now. But you can also take to and from values. But yeah, these are not super great for doing complex animations. CSS animations are good for things like changing or like animating the background color on a button if you hover over it,

Kelly 19:55  
or

Unknown Speaker 19:57  
I don't know smaller tasks in my opinion, but once you have To do these complex timeline animations, I would recommend at that point to pick up a library.

Emma 20:07  
Now there is this argument that, well, aren't these libraries really performance heavy? And the short answer is no, I really don't think that they have massive performance implications when you compare them with CSS. I don't think that's a very strong argument. I think Sarah dresner talked about this in one of her front end masters courses. So I don't want to say it's a fact. But I'm pretty sure that the performance implications of using a library like green sock are very negligible, they're really not going to have a massive impact on your performance. That being said, if you're animating things that you shouldn't be animating, sorry about that. What property Shouldn't we animate? Does anybody know?

Ali 20:44  
Pretty much anything that causes repeat, right?

Emma 20:46  
Yeah. So you win a cookie. I don't have any. So yeah, anything that causes a repaint what kinds of things cause repaint sizes

Ali 20:56  
of things, positions of things? Those are the ones that are no off.

Emma 21:01  
Yes, I think position in the sense that like if you're changing from like, Yeah, well it says absolute. Yeah. shunning anything that disturbs the document flow. But so here's an example. Let's say you're building a mobile nav, let's say it's about 400 pixels in width, and it spans your full viewport height. And let's say its position fixed. So regardless of where you are scrolling, it's going to stay in the same place on your UI. If the bars collapse, so your menu is hidden, you might think, oh, let me just set width to zero and when it's visible, I'll make with 400. What's going to cause repaint I think, like 400 times because I don't think that I don't know if that's an accurate number, but it's gonna cause a lot of repeats because you're actually changing the width it's going to well I guess technically position fixed does take it out of the document flow so I'm not sure if that

Kelly 21:50  
but the element itself though you would watch like if you have Yeah, sense in it. It's going to be like super cramped and then it's going to you know,

Emma 21:57  
yes. And that's also very true. You Yeah, as opposed to animating this with, you can actually just have it be the full 400 pixel with already. But just transform, the trim transform translate is what I'm saying. But translate this negative 100% of its width off of the screen. So it'll start at negative 400 pixels to the left. And when it's active, or when the menu should be shown, it'll translate form translate to its origin, or zero percent. That's much more performant than animating within. Hello.

Ali 22:26  
So one thing that I wanted to bring up and now I'm going to ask you actually, if this is true or not, but something that I was told is if you can use CSS for something, you 100% should for performance reasons. Like if you have the choice between doing CSS and JS for an animation, pick CSS hundred percent of the time, because the way that the browser optimized the CSS, it will be a lot more performant than doing it in JavaScript, especially because some of the CSS operations can go to the GPU. But now I'm like, is that even true or not?

Emma 23:01  
Well, I think for certain things, absolutely. So like if you're trying to put a hover on a button or if you're trying to, like I think the point here is use, like pseudo selectors use pseudo elements like before and after, animate things in CSS that you can, as opposed to using dynamic programming or dynamically generating these types of things. Because, yeah, I think it is more performance heavy to actually query for the DOM nodes and then find the one you're looking for and then do additional things. But that's only to a certain point, right? Like if you're doing complex timeline animation, at that point, yeah. should absolutely be a library CSS. You shouldn't

Ali 23:35  
be writing your JavaScript from scratch shoot, either. I don't think

Kelly 23:40  
I have a I have a weird Yeah. Have you ever attended to browse the web with JavaScript disabled sort of adventure? It is an experience that you're not going to like? Yeah.

Emma 23:57  
Like we should segue out of that, because I'm just gonna get sad.

Ali 24:00  
So if you're interested in performance, we did a whole episode on this. So I don't know, shameless self promotion of that

Emma 24:08  
willings on the show notes. Cool. So let's actually, so you got to the point in your UI where you know, you need to use the library. So which one do you go to, I am going to promote my favorite library in the whole entire world, because it's the only one that I use. And that's react spring. So in case you couldn't guess it is a react library, which is a pain in the ass if you're a view developer or an Angular developer. But let me tell you why react spring is so great. It's great because it's physics based. So you're not getting this. These, you don't have to think about an object's mass intention, it does it for you. You can still kind of customize these things, but it takes away the pain of having to make your animation. Like if you don't have a designer to work with to design these keep you busy functions for you. It takes that away. You don't need to understand it to use it, but it also works with react hooks. So It is super easy to hook into your application. And there I have a few talks conference talks that I've given about this topic that are, I think they're online. So if you want to go watch it, we should link that in the show notes as well. But the basic premise is there like five main hooks. And you can just essentially use them to mountain unmount elements from the DOM. So if you have a modal that needs to animate in, you don't need this modal in your Dom at all times, you only need it there if it's being shown. This is where use transition can come in handy, because this actually can mount and unmount elements from the DOM. You can also use this hook to cycle through different elements depending on state. So if you are creating a photo, a photo application, I'm totally losing my English now. A photo album like an online photo album, and it's, you can just cycle through your photos, I can actually mountain unmount these different images depending upon what your state is which photo you want to be showing. The other cool thing that I really like variax As you can chain things together, there is use trail and use chain. I've only worked with use trail. But basically, you can have animations in an order like you can order your animations. So the example that I have is this full page navigation, where you click the hamburger menu, you get the full page animating in the background of your menu. And then your menu items will successively animate in one after the other. And then when you want this menu item to go away, first, the menu items will fade out and then the whole menu background will fade out, like slide up. That's a really good use case for these complex animations. And it's super easy to set up. Have you guys heard of react spring other than that?

Kelly 26:44  
No, I've literally heard of it from you. Well, to be fair, I don't really do that much with react. So I spend more time in Vue JS than I do. Yeah. So that's why I wouldn't have spent

Ali 26:58  
a lot of my life in Korea. Just not a lot with animations.

Emma 27:03  
Nice. Cool. I think I don't want to go too deep into too many more libraries. I will mention a few that I know are great. But I don't necessarily have experience with all of them. So green sock animation library is one that has been around for a while Sarah dresner has a friend and Master's Course on advanced SVG animations with green sock. And I know a lot of people use it, especially for Web GL, and three j s projects. So both of those are 3d graphics libraries. Web GL also just 2d Interactive renderings. So it's really popular with people doing like data visualizations and things like that. But personally, I found it really difficult to use I didn't understand tweening at all. Still confuses me to this day, but that is definitely an option if you are looking for an animation library.

Ali 27:52  
Yeah, I feel like that's like the classic one in my mind is green sock is the oh geez.

Kelly 27:57  
Oh gee,

Ali 27:58  
the catches on I also agree that it is super complicated and totally confused me. So much math. Like, I think a question that people often have is that our new programmers have is how much math do you actually need to be a programmer? And I would say that in depends on the niche that you pick. And if you are really into animations, it's gonna be way more math heavy, though. Almost any other subfield of programming that I have seen, especially if you use something like green sock? Mm hmm. Absolutely.

Emma 28:34  
Yeah, it was just one of those libraries. I always wanted to learn, but I just found it way too confusing. And then once I found react spring, I was like, Oh my gosh, it's possible for an animation library to be easy to use. And I want to just give a shout out to Scott kolinsky for his react spring course I've taken it twice and I love every second of it. Yeah, we'll definitely also link back again

Ali 28:55  
is also paid like you have to pay for a license for it.

Unknown Speaker 29:01  
I saw

Ali 29:03  
something that you had to pay for that was another reason that I didn't learn it back in the day.

Emma 29:07  
Yeah, I'm not sure. But uh, it's worth looking into, I guess I think it probably works again, with multiple frameworks. It was just one of those things that I never took the time to learn. One of the new kids on the block, it's kind of the hot thing is framer motion. And I know I just mentioned Scott's course level up tutorials did react spring course he's also in the works. He's creating. What about framer motion. This is also a react library, but it's open source and it works on desktop and mobile. What's really cool with framer motion is that you can take these design elements from your canvas and actually turn them into react components. So like your designers can actually create these components and export them as react components. They don't even know how to code. They don't have to. So that's really, really great, especially for collaborating with your designers. Just a couple of things that can do you can make your elements draggable and works really well on scroll. I know this is something That I struggled to do in the past was like, how do I animate things depending on the scroll position, supposed to be pretty good with that you can animate your SVG paths. So it can actually like trace around an SVG and then color it in works with CSS variables. And again, it helps you mountain unmount elements from your DOM. So if you're looking for an animation library, I would definitely recommend framer motion, it would be interesting to kind of do like a comparison of framer motion and react spring and kind of see which one is maybe more robust. That'd be an interesting thing to look into. I also feel

Kelly 30:32  
like Vue JS doesn't get enough love in these libraries because forever motion is for react and react spring is obviously for react Greenstock can be used for

Ali 30:42  
I did just add view to our outline though, because view has a bunch of built in supports to just view itself for animations, which I think is really cool.

Emma 30:55  
Yeah, that doesn't surprise me since Sara's on the core team and she has been really, really great. To kind of advocating for these Yeah, animation libraries for sure. Definitely. So I don't really want to talk too much about other ones. And I'll just mention a couple hover dot CSS is just a collection of CSS hover effects that you can use in your UI. But again, it's one of those things where like, if you're doing something really simple, and you can write it in plain CSS, I would just recommend doing that. Lahti is a library created by Airbnb that's really really cool. However it basically you need to know after effects to be able to use it in should really have to be Yeah, it kind of sucks because it looks like a really cool technology, but basically will render After Effects animations so that your developers can use them. It sucks because it's something I wanted to try out but I don't know after effects that kind of stopped me from checking it out. I'm sure there's a course on after

Kelly 31:45  
effects if you wanted to learn it.

Unknown Speaker 31:47  
Yeah, ain't nobody got time for that.

Emma 31:50  
Yeah, just a couple others to name are three j s anime j s mo j s. I love how they all have j s in their name. I guess for SEO purposes that would Make sense? velocity and then view bulletin animation support who wrote that? Oh, I just,

Ali 32:07  
I put it in there. That view has a lot of stuff built in.

Emma 32:12  
Oh built in. I was like, What is the bulletin anime? stillson Sorry, guys. Yeah, I was like, Okay, cool. No, no, it's all good. My English is deteriorating, the longer I'm abroad. So, um, yeah, those are just kind of like the basic libraries that I'm familiar with. If you have any others, like, feel free to let us know like what you've been playing around with. There's so many out there. I feel like there's a new library.

Ali 32:35  
Anime JS has super fun animations on their site. I like looking at them. A lot of these again the math intimidates me. It's a lot.

Emma 32:47  
Yeah, I'm not good at math. Like I am. But I'm not like I'm not good at Calculus. I'm good at like, discrete mathematics like all these logic, tables and automata and things that you would learn in computer science degree about like Logic math. I'm good at that. But that's going to do calculus.

Ali 33:03  
Geometry for me is hard. It's been so many years since I've had to do actual geometry. So I should really study up on that. If anybody has good resources for learning math things, let us know.

Kelly 33:16  
You know, I think this is a really good opportunity to segue into shout outs, because I want to shout out to all the parents at home who have been homeschooling their kids, and having to learn all these things all over again to make sure that the kids can you know, do their homework or, you know, whatever it is like that is a lot of work on top of, you know, working and doing house stuff and everything else that happens.

Ali 33:41  
That's an awesome one. Mine is for also, I feel like all of ours are like quarantine related if things dramatically change in the world before these episodes come out, which I doubt that they will, but we're recording these all in most of these early episodes. In early May, and so, that's why all of these shout outs are quarantine related. Mine is also quarantine related. Bon appetit has this YouTube channel called Test Kitchen and it is so much fun. Is

Emma 34:16  
that where they recreate common like pizza rolls but like gourmet

Ali 34:20  
Yeah, so that's one of the the shows on there is Claire's gourmet eats or something like that gourmet makes and she tries to recreate like candy and junk food and all these things and it's so much fun. So she'll do like recreating Twizzlers or making instant ramen or any of these things that you buy packaged. I think that it's a really fun thing to watch. They've got so many fun shows on there and I don't even really have a kitchen in my apartment. I live in like a 300 square foot studio, but it's fun to watch even though I don't cook things about what's yours.

Emma 35:00  
gonna say like, this is a total like brain tangent. But what do you think chefs do when they go home? Like if I cooked all day for other people, the last thing I want to do is come home and cook for myself like I would either order takeout or just easily they love it. I have come to a cook.

Kelly 35:15  
Yeah, I have a friend who is married to a chef who owns a couple of restaurants and I see on Instagram, all the things that he's cooking at home and I'm like, this is stupid. There. Meanwhile, I'm just still making spaghetti like 40 Oh, Roderick, you can't have dinosaur chicken nuggets.

Emma 35:36  
Okay, my shadows. I wrote this wrong and it's funny. It's this book that I read Qatar called humble pie. It's so good. I bought this on a whim. It markets itself as a comedy of math errors, and it walks through. The first example it opens up with is I think it was Pepsi. It's 1995. Pepsi ran a promotion where people could actually collect Pepsi points. And trade them in for things. And so like a T shirt was 75 points and sunglasses were 175 points. And basically they want to do something totally crazy. And so they were like, Okay, well, for 7 million Pepsi points, you can actually get a private jet like a military group private jet, and they were like totally fine. But what they didn't realize is that that's actually an achievable amount of points to get. They just picked a randomly high number that we're like, oh, no one can actually get that. Well, some guy did. So basically, he had to spend $700,000, to achieve that point status, but to buy a $20 million aircraft. That's a good deal. So anyway, they ended up they ended up going to court for it and settling a lawsuit. It goes through all these different examples of math errors that have happened in whether it's in the airline industry, with programming. There's a lot of really good programming, like the y2k issues, and also there's going to be one in several years with our computers. We're like things stop working for some reason. It's very Very good. It was super funny. And I cannot recommend it enough. Well, I'm gonna check that out. Yeah, highly recommend. And it's really funny too. This is less than I promise I'm not sponsored. The he put through different math errors in his own book. So one of the examples is he starts his page numbering at the highest page count. So it starts at page 313 and goes all the way down to zero. And then it has like the rollover error at the back. So once it hits page zero, then it goes to what is it like fourth out 4 million to 290 4000 they get it follows the same programming rollover errors that you might hit. It's really really good.

Ali 37:37  
I added it to my good reads to read. Yeah, I'm trying to binge buy books a little bit less. Because it's become a problem. Yeah, same.

Emma 37:47  
I keep finding books about pandemics like I went to the bookstore and bought a book about a virus that takes over the whole world and the lady checking me out was laughing at me. I'm like, oh no. I like to read about pandemics apparently No, it's fine. Anyway, if you like this episode, tweet about it. We really like reading all of your tweets we find them really encouraging. We actually got a really fun Apple podcast review that said that we were What did it say? We were like,

Kelly 38:11  
Spice Girls. Yeah, I mean my like grabbing like that is the best compliment somebody could ever give

Emma 38:17  
you but the question is what Spice Girl are we like Who am I? I feel like I'm baby spice.

Kelly 38:22  
Yeah, I'm Sporty Spice because I work out all the time. Just kidding. Posh Spice then.

Emma 38:28  
Yeah, what were the other ones ginger and Scary Spice. Oh, ginger. Yeah, I don't think I'm either of them.

Unknown Speaker 38:34  
I don't know.

Kelly 38:35  
I like to think of the Spice Girls. It's like the Seven Dwarves instead. So I'm like sleepy spice. I'm cumin. Anyway.

Emma 38:44  
This episode we're gonna be giving away a subscription for front end masters, which is my absolute favorite platform to learn on. And you can if you want to learn more about SVG animation, Sarah dresner has a course advanced it SVG animations on there that you can watch. So if you tweet about Are episode we will pick a winner to give that subscription to. We also have a Patreon so if you want to actually support us and help us pay our guests help us keep doing what we're doing. You can go to patreon.com slash Ladybug podcast. This month Ladybug book club book, speaking books is make it stick by Peter C. Brown. So if you want to join in on the discussion and talk about how we learn and how we should teach, it was Ali's book club pick of the month and I'm halfway through it really enjoying it. You can go to our Goodreads group, you can find that through our website Ladybug Dev, we're just search us on Goodreads. We post new podcasts every Monday so make sure you subscribe to be notified and leave us a review. And with that, hope y'all have a great day.

Kelly 39:46  
Bye
