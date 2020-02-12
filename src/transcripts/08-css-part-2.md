**Ali** [0:00]
Monday's episode we discussed the foundations of CSS. It’s really great, so go back and listen to it if you haven't already. And today in this special bonus episode, we're going to continue the conversation by covering some more advanced topics and going a little bit more in-depth to some other areas of CSS. Let's jump right in.

**Kelly** [0:25]
Welcome to the Ladybug podcast. I'm Kelly.

**Ali** [0:27]
I'm Ali.

**Emma** [0:28]
I'm Emma.

**Lindsey** [0:29]
And I'm Lindsey, and we're debugging the tech industry.

**Ali** [0:32]
Our first topic today is going to be grid and flexbox. In the last episode, we talked a little bit about how at this point in history, most people are looking at websites on their phone instead of on their desktop. And so flexbox came around because making websites responsive or making it so that different websites looked good on different screen sizes was pretty tricky. And so flexbox was a way of combating that and making it easier to make things responsive. So flexbox is a one-dimensional layout system where you can align things in rows and columns and decide how things wrap if the screens get smaller, and a lot of really great things there.

And then grid is even more recent. And so we're going to talk a little bit later in this episode about Bootstrap and other CSS libraries. But essentially, Bootstrap was really, really popular for making grids for different websites and allowing you to have different things positioned in that way. And so grid came about in order to build that directly into CSS.

So they both have this container and child mindset, you have this container that contains a bunch of different elements. And then you can do certain things to the container and certain things to the items within that container. But grid is a little bit more two dimensional than flex, where you're aligning things, in both rows and columns. And then there are also spaces within those rows and columns so that you can space different elements that way. There's also fractional units or frs, which allow you to essentially say, this is going to take up two thirds the page, this is going to take up one-third of the page and other fractions from there. So that's been really helpful. I really, really liked those fr units.

And essentially, this just makes it so that positioning things is so much easier. And it's no longer a nightmare to get everything aligned, and you can make more complex layouts for your site. You can also use these together, so they're not exclusive. And Jen Simmons has a lot of really great materials on that. So I'd really recommend looking at her stuff. But these have made CSS so much easier for me and make it a lot more enjoyable to work with. Have you all used them too?

**Lindsey** [2:57]
Of course, yes, I love CSS grid and flexbox. I feel like I'm a late adopter to grid. I only started using it a few months ago, because I wasn't doing a lot of CSS at my day job. But it is so much easier. And yes, it does have a learning curve, but I think about the fact that we don't have to have an additional library now to create these grids. And that's a beautiful thing.

**Emma** [3:23]
I think, yeah, we always get the question of like, should I use flexbox or grid? Which one should I use in my application? I'm like the answer is both, you just kind of have to be able to understand the differences and how they function. Right? So you mentioned that flexbox, it's used for one-dimensional layouts. So either you're aligning things vertically along the y-axis or horizontally along the x-axis.

So an example might be trying to space out navigation items in a top navbar. Or if you have a full-page sidebar, like the items within that and getting them to space themselves evenly and whatnot. So that's where flexbox shines. And then grid is definitely more two dimensional. It's let's say you have a full page like the sidebar on the left, it takes up the entire view height. And then let's say we've got a main content area and then a footer, the footer goes from the sidebar to the right viewport edge. This is where grid shines, right. But within there, you can also use flexbox.

And I think it's important to note to you could use flexbox to do everything. The difference is that it’s going to require a lot of like wrapper <div>s. And that's maybe not as accessible, right? So that's why they're good compliments to each other.

**Kelly** [4:28]
And just to be clear, I've been coding for many, many, many years now. And I'm still not using grid yet. And it's something I do want to learn. But if you're not using it yet, that's totally fine.

**Lindsey** [4:40]
Yeah. I mean, it'll, it's one of those things that once you start learning it, though you're really excited about it.

**Kelly** [4:47]
I do have one question about grid, just because I'm not very familiar with it. How is the browser support for it?

**Lindsey** [4:52]
I think it's pretty good. Except actually, I'm going to look it up right now, because may as well on my computer here.

**Ali** [4:58]
I think certain pieces still up in Internet Explorer yet. But a lot of it is just certain pieces of it that aren't there yet. Okay could be wrong with that.

**Lindsey** [5:07]
So I have it up right here. So CSS grid layout is supported in Edge, Firefox, Chrome, Safari Opera, it is partially supported an IE 11 with the prefix ms-. So if you have auto prefixer setup that then it should be pretty good. So yeah, it seems to be very widely supported. Sub-grid on the other hand, which we won't be talking about that much, I think is still in the process of getting support.

**Emma** [5:38]
I think two, there are so many fun games that we’ll link in the show notes where you can actually go learn flexbox and grid. So we've got like Flexbox Froggy. And it walks you through how to move frogs on to different lily pads, using the flexbox attributes and everything. There's also grid garden and all these other fun games that make it very easy to learn.

And I do believe that Sarah Drasner also put together like a grid generator, I think, yes, yes, she did. I'm on Product Hunt at the moment she made this grid generator, which basically allows you in the UI to like go draw this grid, and it'll generate the CSS code for you. So if it is a little intimidating for you, if you're having trouble moving off tables to lay things out, go check out those resources.

**Lindsey** [6:20]
Yeah, I think my favorite part about flexbox is actually centering things vertically, because that was always such a pain point. So being able to center something not just horizontally, but also vertically, is really, really awesome about flexbox - makes it really easy. Instead of having to do all these hacks, I think it's like three lines of code.

**Emma** [6:40]
I always mix up, what does it justify-content and align-items. I always mix them up. And I always have to go and see which one is the main axis and which ones across axis, even though I've written blogs like I still have to go look it up.

**Lindsey** [6:55]
Yeah, I mean, that's a beautiful thing, though is that you have those resources available to look up.

**Kelly** [7:02]
And there's also such a thing as trial and error, which is usually my go-to strategy.

**Lindsey** [7:07]
Totally. Well, anyway, do you want to transition talking about animations?

**Emma** [7:11]
Transition was the perfect word to use there.

**Kelly** [7:15]
That was good.

**Lindsey** [7:17]
I did not even mean that. And now I'm thinking about how much of a genius I am subconsciously.

**Emma** [7:24]
No egos here. So, transitioning into animations, you can do some pretty cool things with CSS, namely, using transitions and transforms to animate pieces of your product and your UI. And this has many benefits, right? We could do a whole episode on animations.

But some of the benefits include actually gaining a little bit of a buffer when it comes to loading resources. If you add an animation that's interactive to something, users are going to be willing to wait a little bit longer in terms of waiting for this resource to load then if you didn't have any animations. So that's one of the benefits and you actually don't even need any libraries to do it, you can go and add vanilla CSS today to create some these animations.

So that's where this concept of transforming transformations comes in. And these are used to modify the appearance of an element through translation or rotation, skewing and other things. So when we talk translation, it's about moving an element along the horizontal or vertical axes. So you can think about a sidebar that moves in and out of the UI if you click the hamburger menu, or the x, right, so if I click the hamburger menu, it slides in from the left. That's a translation, you can use translate, translate X to do this, versus rotate rotates around a fixed point within your two-dimensional plane. And it doesn't actually deform the shape, unlike some of the others, transform functions. So we can rotate a spinner in the UI, for example.

And then skew in contrast actually does distort an element. It's a little bit weird. So if you haven't heard of it, I would recommend go check it out like what it does. But you can actually skew an element on a two-dimensional plane, and completely, I wouldn't say destroyed, but it loses the integrity of the original shape.

So these are some of the basic transforms that you can use, and how do we actually use them? Right? You might have heard of these things called keyframes. And this gives you the steps along the timeline to animate these things.

And so when we think about an animation, we've got a starting point and an ending point. And so there are two ways within this keyframe, which is essentially just like a rapper, right? So you might see it defined as @keyframes, and then like a function name. And it's almost like a function name if you were trying to compare it with like JavaScript syntax, for example. And within these curly braces, you’ve got two options. You can declare from and two keywords. So where am I starting with my animation? What's the starting point? And where do I want this to end up? So if I'm going back to the sidebar, that translates itself in the starting point is off of the viewport. So maybe it's like, the left position is negative 500 pixels, and I want it to come to within the window, right, I want to be able to see it. So then we want to translate it to left of zero. And so you can define it with these values.

But you can also do a little bit more complex, you can define at zero percent of this animation, I want it to be here, and maybe like 30%, I want to rotate it and then at 70%, let's skew it, and then define the end phase of 100.

So this allows you to kind of create this timeline to animate things. And there are libraries you can use to help we've got like Green Sock for animation, which also works with timelines. But that's not actually CSS. It's a JavaScript animation library. But it's pretty cool. Like you can do things animations like this in CSS, and there are lots of fun things that you can do. Have you guys worked a lot with keyframes, do you use them a lot, or?

**Lindsey** [10:45]
I've used them very... I don't want to say rarely, but I have used them to make slideshows. So that's probably my favorite way to make - to use them is to it, especially if the slideshow is automated, and it doesn't have user interaction. I use keyframes to just rotate through those.

I think Cassidy Williams has a really good code pen on that, which is really, really neat. And I was looking through that just to kind of get some research on keyframes, and I thought was really cool. So what about y'all?

**Kelly** [11:19]
I don't really use keyframes that much. But I use animations a lot in you know, just skipping the keyframes component. It's there, they're really useful for like these micro-interactions - enhances the whole user experience. And you know, working in e-commerce, you don't generally notice these things when you're shopping on the store. But when you're the one who's you know, building out the store, it's these little animations that you add to this site for the overall user experience that can actually make or break a purchase. It's they're really fun to work with.

**Ali** [11:53]
Totally going on top of that. We talked a lot about web performance, and the web performance itself is really important. But also on top of that perceived performance is really important. So how fast people think a site is even if it's not actually as fast as it seems to them. And adding some subtle animations can really improve the perceived performance of a site. And so that's definitely something to think about as well, if but if you have a ton of like JavaScript animations, you're actually making it less performant. So

**Emma** [12:22]
Well, I think there's a threshold, right? So if you look at Green Sock animation library, it actually doesn't have too many negative performance implications up to a certain point, right? I think the misconception is, yeah, if you use a JavaScript animation library automatically like you get negative performance, but I think that's untrue up to certain threshold, I honestly don't know it. But I would say like if you can do simple CSS animations, if you're not doing super complex, like SVG animation, on a timeline, stick with CSS, right, one of the ways that you can kind of add your brand personality into your product, is by adding in different timing functions for things.

So you might see transition: background-color, 0.1 seconds linear; And like this, again, goes back to the shorthand, which we discussed in the first episode. But what is linear? It is a transition timing function. So if you think about this timeline, like how do you want your elements to move in regards to velocity or speed along this timeline? And what does that look like? So linear is it's linear, right? So you, your object will transition evenly across the whole animation, ease in and ease out are the opposites of each other. So ease-in starts slowly, and the speed is going to increase until the animation is complete, ease-out, it's just the opposite. So it starts faster, and it slows down to the end. But then you get this cool combination of ease in and out. So it's like, it's like a bell curve, right? It starts slowly speeds up slows down again.

And if none of these are really doing your product justice, you want to add some more personality, you can define these things called cubic beziers, you define your curve, right? What do you want your velocity to look like along your timeline? And there are plenty of tools that can help you declare these cubic busy functions, we can link if you down in the show notes. But a great way to again, enhance your perceived performance, as well as building some brand identity to your products

**Lindsey** [14:07]
Not going to lie, I had no idea about what any of those linear functions meant. And I've literally I, with all those animations, timing functions, I always just like, throw one in and see what happens. I didn't even really think about that. I'm kind of thankful that you went through and explained what all those meant.

**Kelly** [14:24]
Yeah, I'm team ease-in-out for pretty much everything as my default.

**Emma** [14:28]
It's just funny because CSS has this reputation of being easy, right? But then you look a little deeper, and you're like, oh, specificity, oh, cubic bezier functions. There's a lot of math in here that we just kind of take for granted, right? Because we have developed tools in the industry to help us with these things like declaring like linear and he's in and out. But when you really dig down into it, like this is very technical, we don't give it enough credit.

**Lindsey** [14:50]
Yeah, this is super cool. I like I'm really good about I'm gonna play with a lot of these when I'm done just because I never really thought about the differences of them. I just sort of, like I said, play around with them and see what happens.

**Emma** [15:03]
Speaking of math, media queries have to do with some numbers and screen resolutions. So let's jump into that. Lindsey, can you tell us a little bit more about media queries?

**Lindsey** [15:12]
Sure. Um, so media queries, when I first think about media queries, I always think about responsive design. So I always think about having the min-width or max-width to change the styles for certain parameters. But there's also other ones. So there's screen so when you're on a screen, there's also print when you're printing something out, which is how we do like print style sheets. And there's actually two new ones that I'm pretty excited about.

So there's prefers color scheme, which is if your user settings are in dark mode or light mode. And then there's also prefers reduced motion, which is if - I don't know if there's one on Windows, but on Mac, they if you go into the accessibility settings, I think for the most recent update, you can go to the accessibility settings in the system preferences, and then in the display settings, you can check on this reduce motion. And what that does is it helps people who have vestibular disorders, so people who get motion sickness, it's really helpful. So you can take away all of those animations for people who might get sick, or get like a sense of vertigo.

But yeah, so those are two really cool new media queries that I'm super excited about. And there's one more that I just learned about this week when I was at CodeLand. And it was, I went to Jen Simmons’s workshop, and she started talking about something called support. So this isn't a media query, but it is a query. So you can do @supports. And if something supports grid, for example, you can use grid versus using something else. And I was like, holy guacamole that is super cool. Never heard of that before. So but yeah, the most common ones are min-width and max-width and screen. The other two are a little bit newer, I think. And I'm really, really excited about especially those latter two because I think they're going to be big for accessibility. So any questions about media queries or queries in general?

**Emma** [17:19]
I didn't know about the others, other than min-width and max-width actually had heard about supports before, because we've used it for fallbacks with layouts with flexbox, when that was pretty new, but prefer color scheme and prefers reduced motion like that's super cool. Had no idea.

**Lindsey** [17:34]
Yeah, it's based primarily on user preferences, or System Preferences. One disclaimer is we probably should be mindful of honoring what the user selects on a website over the system preferences because some people don't have that available to them.

So if you're going to do like dark mode, or reduce motion on your website, just keep in mind that you might want to provide an option that's user-selected vs. in the system settings. Because for like I said, before, I'm not even sure if reduced motion is even on all operating systems, I don't know if it's on previous versions of Mac, like I'm on Mojave or whatever it's called. So one of the more recent ones. So I think that's a newer one. But if you have that, you'll notice that when you're on your Mac Book, if you have it selected on when you swipe between screens, instead of doing that, like animation effect, it'll just like appear, it'll fade in and out. Instead, it's kind of neat,

**Emma** [18:40]
I actually turned those animations off on my phone. And now it kind of just like fades into the next app. Like it's not like the big zooming in and out when you enter and exit apps. I don't know why I did that. But I kind of like it.

**Lindsey** [18:51]
Yeah, so I just it's a very similar concept to when you're doing it on your, your desktop. So really, really, really neat. And I've been learning a lot about those two in particular recently. And now with like dark mode and designing for dark mode, I've found that prefers color scheme, one very, very interesting, so I can't wait to learn more about that.

So just as a side note, like I recently did a, I don't want to say it redesigned, but a facelift on my website, because I really wanted to make it more friendly to switching between light and dark mode. So that was the main motivation for that. I'm really excited about those last two.

So yeah, let's transition into, like naming conventions and hierarchies because I think we know a lot about the rules of CSS. But there are all these naming mechanisms. So Emma do you want to start talking about those?

**Emma** [19:50]
Yeah, so one of the biggest pain points that people have or developers have with CSS is that specificity is hard. And there's no real hierarchy necessarily, right? We've got the cascade, which kind of determines where elements are within the page structure, but we don't necessarily have a specific way to enforce rules or avoid collisions. And this leads people to add !important all over the place. And I can guarantee you those styles are not important.

So yeah, naming conventions. They help us cope styles from like a, it's not enforceable, it's a superficial level, right. So scoping style superficially to help prevent specific specificity overrides and collisions.
And so we can one of the most popular ways to do this is called BEM, you might have heard of it, it stands for block element modifier. And it is a naming convention for helping to avoid these collisions, and also for helping developers get a better cognitive understanding of what each element is doing. So for example, you might have header, double underscore navigation item, and then two dashes and then selected so header navigation items selected. So header in this instance is the block the navigation item is the element, selected is the modifier. So yeah, modifiers are different states within, so if you have a button, for example, it'd be like disabled or active things like that. And so block element are separated by two underscores an element and modifier are separated by two dashes. And so it looks a little weird. Yeah, the names can get pretty long. But it absolutely helps you create a hierarchy of information. And it also plays really nicely with Sass nesting, we'll talk about SAS one of the next sections, I really like them. I've used it for a long time, but it does help you avoid some of these things. Do you guys work with them? Like, have you heard of it? Do you use it?

**Lindsey** [21:34]
Yeah, I really like using them as a way of naming my classes. Something that I think is super cool is when you create like a modifier, for example, you can just, you can add the normal for example, header class, but you can also add the header dash, dash selected or what, actually, that wouldn't make sense for here. But whatever you can add the modifier after the header item. And with that, it makes it super easy just to change that like one modifier, but you can keep all the other styling. So you can add two classes. And you can separate those out. And I think that actually lends itself to much cleaner CSS.

**Emma** [22:17]
Absolutely. So it goes back to this idea of like, don't repeat yourself, right. In contrast, another popular, it's not even another because it's different. SMAACS is something I haven't personally worked on. But it is quite popular for CSS architecture. And so it's, it's denoted as scalable and modular architecture for CSS. So that's what SMAACS stands for. And it's based on this idea of five different categories, which are base, so any default values you might have or like padding, margin, etc., layout, which is like header, footer, main, any big components in your layout. Module is the third one. So reusable modular parts of your design, such as like a navbar, sidebar, footer, things like that. I said footer within layout, so no footer, but reasonable parts of your design state. So how different modules or layouts look within a particular state. So whether they're active or inactive, expanded. And then lastly, theme, so similar to state rules, and then they kind of describe how your modules or layouts might look, right.

And so this is more of an architecture than a naming convention, but and the goal is not to mix several categories into one file, it should be pretty easy for you to go and say like, Okay, I need to change my footer CSS, I know I have to go into the layout section. And so you're not going to get a ton of redundant code. It's not going to be specificity wars. And it really helps you architect your code that way. So with that, unless there are any comments, I think we can move on into Sass, which is something that we have mentioned already.

**Kelly** [23:47]
Yeah. So let's talk about preprocessors. So if you're unfamiliar with what it is, is a scripting language that extends the default capabilities of CSS. So it gives us all kinds of additional options to use logic and CSS - includes variables and nesting and inheritance and mixins and functions and all kinds of really cool stuff.

So there are three primary types of preprocessors. There's Sass, which I think the four of us are most familiar with. There's Less, and then there is Stylus. So let's talk about Sass first. So that stands for syntactically awesome style sheets. It actually started back in 2006, which kind of blows my mind that it was that long ago at this point. I don't know if you were aware of that.

**Lindsey** [24:31]
I didn't know that. Yeah, while ago.

**Ali** [24:33]
Yeah, that's a while ago. I feel like I thought it was new in like, 2013.

**Kelly** [24:38]
Right. And it's over time, but it's been around for a while now.

**Emma** [24:43]
Yeah, two years ago. Oh my gosh,

**Ali** [24:45]
Yeah. I thought it was like a new shiny thing. And like 2013 2014 when I started using it, no, apparently I was wrong.

**Kelly** [24:53]
So there are two different you know, formats. I guess you can say a Sass there's a CSS which uses you know, your favorite brackets and semicolons, as you're probably already familiar with. And then there's Sass, which you just uses indentation. You don't need these semi-colons, you don't need the brackets. Do you have any preferences on which you use? Yeah,

**Emma** [25:17]
This is one of the most confusing things for people when they get started with Sass is like, it's called Sass, but then the file extension is scss. But I also see .sass, like, what - what's the difference, it's like, it's basically like, I would attribute it to be like the difference between JavaScript syntax for functions versus like Python, where like Python’s more indentation-focused. And I personally don't like that, because I, I miss things very easily. And it's easy to get tripped up over indentation. And then curly braces,

**Kelly** [25:46]
Yeah. And also, if I miss a semicolon, my world just kind of collapses on me. So I will always use .sass as long as I will continue to use a preprocessor. So there are also mixins, which are chunks of code that you can import in, you can reuse them with an import tag.

**Emma** [26:06]
So, for example, Kelly that might be like, if you have buttons. So you've got primary, secondary, and tertiary buttons, right. And so primary buttons are the ones in the UI, they're filled in with a background color, secondary, it's just the border, and then tertiary, they look almost like links, right? And so they're going to be certain things for those that you want to be the same like the min-width, or like the padding and the font size, right? You're going to reuse all of that. But we don't want to repeat ourselves. So you could create like a button mixin that gets imported into them and then just change like, Okay, I'm a primary button, I also need a background color. But on secondary, I don't I just want to border. So would that be that would be like a good use case for that, I think.

**Kelly** [26:46]
Yeah. And also, I don't know if this is actually a good use case or not. But I created a flexbox mixin. So I never have to remember, for the most part, I want to I don't have to write it all out, I can just easily include what I need for flexbox for specific elements. And along with mixins, there are also partials for separating code. So that's going to be prefaced using underscores. And this is something I use pretty regularly on in my codebase. What about you?

**Emma** [27:16]
Do you know what the underscores are used for? Kelly?

**Kelly** [27:19]
Tell me.

**Emma** [27:20]
So when you preface a .scss file or a .sass file with an underscore, it's telling the compiler essentially, don't compile this as a full sass file, it's going to be a partial. And when you include these partials and different files, you can omit that leading underscore, you don't need it when you're importing it. But it's just basically saying like, hey, this is not going to be a full Sass or a full CSS file that gets compiled, it’s going to be used in other things. Right.

So an example of this might be you have a base partial, right. All of your stylings for base elements, like all h1s, or all paragraphs would be in this file. And then maybe you've got a variable partial where you define all of your colors and your type scale and things like that. But you don't want these to be full CSS files at the end of the day. So you can import them, let's say, into an index.css file. And this index.CSS file is what we want, right? We don't care about all the little partials, we just need this one file that gets imported. And it allows you to maintain the separation of jobs, essentially two different files. So you know exactly where you're going to change a color variable, for example, goes back to the architecture we just discussed. But you don't have to import a ton of different CSS files, right? Because we want to maintain performance here. So partials allow you to separate these concerns without having to import a ton of CSS files into your document. Cool.

**Kelly** [28:42]
In my last and personal favorite feature of using SASS is nesting. So you can nest your - how do I explain this. I can visualize it, but I can't explain it.

**Emma** [28:55]
Let's say you've got a navigation, right? So we let's say we have a nav bar, it's a nav element. And inside, you've got an unordered list. And then you've got list items with anchors inside. This is what you would typically see for a navigation bar. And what Sass allows you to do is declare all right on my nav element, you open your curly brace if you're using CSS inside, let's put a <ul> right so all the ordered list inside of this nav element. So not on all unordered lists in the whole document just those that are inside of this nav item, we want to add these styles to you, right, so in a navbar, you would use an unordered list, but you didn't want those bullet points, right. So I only want to set this list style type to none for list items inside the navbar. This is where nesting can come in because it lets you be more specific and intentional with your styles as opposed to saying like classes on absolutely everything.

**Lindsey** [29:48]
Yeah, another really cool feature of nesting is we were talking about nesting and how it's really cool for that. So for example, if you have a header, and then a navigation, underscore, underscore navigation, you can have the underscore, underscore navigation nested under with an & simple so that you don't have to have a string of classes, you could just have that one class and you don't have to have a bunch of classes. So it's also really helpful. And that's - I don't know if that's why that convention came about. But it's super friendly for nesting here. And still keeping your classes with one - one level of specificity. I don't know if I said that right, Emma, but

**Ali** [30:30]
One thing I will say is that over nesting things, and relying on that rather than class names is like one of my biggest pet peeves because it essentially makes it so that you can't reuse your CSS anywhere else in your application. So you have like eight levels deep of classes and classes within classes and all these things, and you can't actually reuse your CSS anywhere else in your application. And so I would definitely try to avoid that and use nothing when it makes sense. But don't just use it instead of class names.

**Emma** [31:02]
I try to cap mine at like three levels deep max, like think about like your file system on your computer, right? Like if you miss things super vertically, it's going to be miserable to try to find things. I try to cap it at three with the exception of like pseudo-classes. So like and :hover or and if we're talking like hover state, your focus state, then I'll make an exception maybe for like a fourth level. But yeah, it's agreed.

**Lindsey** [31:24]
Yeah, totally. Because the point is, is to make it more organized, not make it more disorganized.

**Kelly** [31:30]
Yeah. And if you use VS code, there is an extension called style lints that will yell at you, once you hit that three nested mark, and be like, hey, you're doing too much nesting Stop it. So really useful. If you're like me, and you don't really pay attention, as you're just like mashing your fingers onto the keyboard, you're like, oh, that was like eight nested. Okay, I don't actually do that. But really, really useful extension. It's called style lints.

Alright, so let's talk about Less really fast. So I personally have not used Less. But I know that Bootstrap was originally built with using Less, then I think it was like version four, that Bootstrap switched over to using Sass. Are any of you familiar with less and do you use it?

**Ali** [32:15]
I don't think so. I think that like the second version of Bootstrap move to it or something like that. The ritual was Yes. So I'm not totally sure. But something along those lines,

**Kelly** [32:25]
I don't even know what version of Bootstrap is on at this point. It could be like 16, it could be three. I don't know.

**Lindsey** [32:29]
Yeah. No, I yeah, I think I only use Less during my first year as a web developer. And that's because I was using Bootstrap. So I am definitely not as familiar with it.

**Emma** [32:42]
Yeah, no, I'm not either. I just know it exists. Like that sounds terrible, but

**Kelly** [32:47]
Great. So we're not going to go into detail about Less since none of us really use it. And the third one, which we also don't use is Stylus, which I know exists, but I cannot tell you, anyone anything beyond that.

**Lindsey** [32:59]
I think, doesn't it also use indentation?

**Ali** [33:02]
Oh, it could I think that it doesn't use a semicolon. Maybe too. I was looking at a friend's project that used it. And I was very confused by it and tried to convert it to Sass, and it didn't work. And anyway, that's my only Stylus or

**Kelly** [33:15]
If I remember correctly, the variables instead of being using like \$ sign to define them. It uses in like an @ symbol, which really threw me. Oh, man, that would confuse me. Yeah, me too. So we are not team Stylus. But how do we feel about UI frameworks Ali? Do you want to talk about them?

**Ali** [33:35]
Yeah. So I think that all of us, to some extent, we're kind of brought up in the Bootstrap era. As web developers, at least, I know that I was where I was using Bootstrap before I really even understood CSS for real. So was released in 2011, was originally part of Twitter, and eventually branched off from Twitter and wasn't part of it anymore, but was super, super popular for a while because it had this grid system, where instead of having to use floats or any of the other hacks that you had to use before flexbox in grid, you could use their grid system in order to make things responsive and template it really well.

One of the issues with this is that every website started looking like bootstrapping. And you could immediately tell it a website was using Bootstrap. So another one that I really liked using at this time was Materialize CSS, which used Google's material design style, but had a lot of the same awesome functionality of bootstrap. Did you all use a lot of Bootstrap back in the day? No,

**Emma** [34:39]
Really, it was the only thing I learned. I took one web development course in college. And like, day one was HTML, then was CSS, day three was Bootstrap. And that was like, that was what we used. And but like you said, every app started looking the same. And at some point, it was like, Oh, that's a Bootstrap app.

**Kelly** [34:58]
Honestly, I probably never really used it because I started coding way before UI frameworks really started popping up. And once I started seeing everybody talking about Bootstrap, I was like, this is really overwhelming. I don't want to learn it. So I'm not going to use it.

**Lindsey** [35:13]
I remember learning Bootstrap when I was actually not around a bunch of front end developers. So a fun fact about me is the first year of my web development journey, I thought I was going to be a back end developer. And I think that was because I wasn't around a lot of front end developers. So I didn't, I just heard a bunch of people hating on the front end. But anyway, so they use Bootstrap a lot because they didn't have to do front end that as much. So I was very convinced that Bootstrap was very cool. And I'm sure it is still very cool for a lot of reasons. But I remember going to an interview, and the front end developer super started ragging on it, because of the complaints that you were talking about. Were super obvious that something was bootstrap. And I was like, Oh, what? I guess.

**Emma** [36:02]
This begs the question of like, why did we need UI frameworks, and one of the big benefits was that it provided a grid system, I think that's where Bootstrap really shined for a while. But as we've developed more and more in the CSS world, like we just talked about flexbox and grid, they have almost caused that reasoning behind leveraging and UI framework to become obsolete, right? Because why would you include an entire project like Bootstrap in your product, just for a grid system? Right. So now that we're developing these new things these UI frameworks are maybe becoming a little bit? I wouldn't, I wouldn't say obsolete. They're never going to go away. Right? They're really good. They have good purposes. But if you want the look and feel of a custom website or brand, that's definitely not the way to go.

**Ali** [36:51]
Yeah, I think another thing with it was the cascade was really bizarre with it. Like, it was one of the only times that using !important was actually yeah, you had to some extent Yeah. And so I think that that totally hurt a lot of people's CSS learning process. Going off of that, the one that I hear about most that I personally haven't used, but I see it all the time is Tailwind CSS, which is a more recent one. Have any of you use Tailwind? Nope.

**Emma** [37:21]
My coding coach project. The lead Dev was very adamant about using Tailwind. So our, my project is using telling, but I've never used it. And I don't know much about it.

**Lindsey** [37:32]
I think it allows you to customize it more. Instead of Bootstrap, where you have these pre-styled-components, and you add in the CSS classes, and all of that, it's just for building your own CSS. But it looks really cool. We haven't used it, but it could be something to check out.

**Emma** [37:50]
Yeah, absolutely. Yeah. And so I think with that, I think we can move into our wins for this week. We got some awesome submissions from our listener wins. And I want to share today, one of those with you. So, Bhavani, she made her first code contribution to a big open-source Python project. And it took her about six months, that code review process a little hectic, and she was debating whether or not to continue with it. But she got her first approval and said that it's all worth it. So huge congratulations to you, Lindsey, what was your win for this week?

**Lindsey** [38:23]
So I opened up a few new tiers of my Patreon, I was kind of debating doing that for a while, just because I was kind of nervous, like who's going to pay to do things, but I decided to go ahead and add a couple more tiers. And one was to get a blog post a day early for certain payment levels, and one for one on one accessibility sessions once a quarter. So I'm really excited about that. Because I mostly it's a confidence thing. Like I didn't have the confidence to do that for a while. And I also didn't have that the ability to do that for a while. And I'm very happy that I am going through with it.

**Emma** [39:05]
That's great. Ali, what about you?

**Ali** [39:06]
Yeah, so this weekend was one of the tougher online weekends that I have dealt with. I was seriously seconds away from deleting my Twitter and blog and just being like, I'm done with this whole internet thing. It's over. But I did keep them. And I did make it through this weekend. So I'm pretty proud of that. Even though it's like not a super happy win, how about you, Kelly?

**Kelly** [39:26]
I just want to say, Ali, I know that your weekend was very tough. And I'm very glad that you're sticking around with us to thank you. So my when this week is I have decided to drop the word agency from our name the Taproom Agency. So we're just now the taproom. We've been working on a rebrand for a while. And we officially have an approved logo, and I'm really excited about it. And hopefully, soon I'll be able to show it to the world.

**Emma** [39:57]
That's so exciting. Congratulations. Thank you.

**Lindsey** [40:00]
What's your win, Emma?

**Emma** [40:02]
So I got married again. That sounds weird. We've been legally married for over a year, but we had our wedding, and I said my wedding vows in German, which is super cool because I live in Germany. And I finally felt confident enough to like say my vows in German, which is really a big win.

**Kelly** [40:19]
Not only is saying vows in front of people watching you like nerve-wracking, but the fact that you also did them in like another language is really impressive,

**Emma** [40:30]
Right? No one knew what I was saying. So it was funny. It was like I ended it with saying like I hope you understand what I said because my friends and family like definitely have no idea. But uh, but yeah, so if you are listening today want to get your win featured, please sign up for our newsletter. We always have like really cool and up to date information in there. So, make sure you go do that.

**Lindsey** [40:51]
So yeah, if you enjoyed this episode, make sure to follow us on Twitter for updates, and leave us a review on Apple podcast. So thanks for listening.
