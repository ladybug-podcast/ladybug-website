**Emma** [0:00]
We all know that Peter Griffin Family Guy gif of him unable to work some blinds. And if you don't, I highly recommend you check it out. Because this gif has always associated with the frustrations of CSS. You change one thing, and then something completely different breaks. And why do people have these issues? How can you improve your CSS skills? And what are the key concepts that you need to understand in order to write clean, maintainable styles? There are three fundamental building blocks for every website. HTML, which is the content, JavaScript, which adds interactivity and CSS, which makes your websites look really great. So today, we're going to talk about all the nuances of CSS, what it is, how it works, and how to get better at it. This week will be a two-part episode. But instead of having to wait another week to hear part two, you're going to get a bonus episode this Thursday. So with that, let's just jump right in.

**Kelly** [0:56]
Welcome to the Ladybug podcast. I'm Kelly.

**Ali** [0:59]
I'm Ali.

**Emma** [1:00]
I'm Emma.

**Lindsey** [1:01]
I'm Lindsey, and we're debugging the tech industry.

**Lindsey** [1:07]
This week’s episode is brought to you by LogRocket. How many times have you struggled to figure out an annoying bug in your app? Well struggle no more! Log Rocket lets you replay what users do on your site, helping you reproduce bugs and fix issues faster. You can see a perfect replay of what your users saw, inspect Redux actions and state at any point in time, view every network request and response, and even inspect console logs and JavaScript errors. Log Rocket lets you support your users without the tedious back and forth conversations. Plus it works with React, Angular, vanilla JavaScript, Redux, Ember, and Vue! Check out Log Rocket today to improve your debugging workflow.

**Emma** [1:50]
Let's kick things off with the pain points. CSS is great. But there are definitely some pain points that come with writing CSS. So let's just kind of talk about the pain points that we experience

**Emma** [2:02]
One of the biggest things that I see is that, especially in large codebases, it's nearly impossible to remove styling, right. So as you're trying to maintain these large applications, you generally just don't remove styles, you just add more importance on the things. And so it's really hard to remove code, and then you get really confused and don't understand why none of your style that you're trying to write a new or not being applied.

**Lindsey** [2:27]
Hard to remove code is one of the biggest things that I found when people write overly specific CSS, if you remove something things break, or if you make if you write your CSS in a way that becomes almost intermingled with each other that every single time you change something, something else breaks. And it makes it really difficult to clean up code as well.

**Kelly** [2:51]
And on the same note of cleaning up code, it can be difficult to find what you're looking for. If there's no commonality in the way that you're naming your IDs and classes. So the naming collisions is definitely a pain point that I've experienced, especially when you're working with a team of developers who are all touching the code.

**Ali** [3:11]
Totally, especially when you have your CSS broken into a bunch of different files, or you're using his dialing library or something along those lines, finding where style is coming from and either undoing that or adding to it can be kind of a challenge as well sometimes

**Lindsey** [3:26]
I had a lot more trouble with CSS when I first got it got started as a web developer. And that's because I didn't have any front end developers that I was working with. So I think also not having any mentorship to know the fundamentals. And I was just hacking at things and hoping it worked. And quite frankly, yes, playing around with something and exploring is really good. But when you don't know the fundamentals of CSS, and you're playing around with it, you can easily break things. So you think you fix something and then a client comes in is like this new thing was introduced?

**Emma** [4:02]
Yeah, I just think it's funny because when you compare CSS with other areas of web development, it typically gets the short end of the stick as being something that's overlooked or deemed as easy, right. But writing efficient CSS can be a little bit more complex. And I think without we should just jump right into how do we actually write CSS? So Ali, can you explain kind of the syntax of CSS?

**Ali** [4:23]
Can I put one more difficulty? I think something that, especially back in the day it was really difficult was positioning things. And so there are always these viral tweets about how hard it is to center your things and all that. And that has all gotten way easier and more recently, but I definitely still think that laying things out on the pages, the hardest part of CSS and can be a huge challenge. So I wanted to add that before we get started. But that being said, let's dive into the syntax. So the first piece of CSS is selectors. And essentially what we're doing with selectors is grabbing an element from the HTML in order to apply some sort of style to it. So we're telling the CSS, which elements to actually apply styles to. Sometimes this will be every single element on the page. Other times, we only want certain elements to be styled. So for example, if we only wanted certain paragraphs to be bolded or certain headers to have certain colors and other ones to have other ones, or we wanted to lay out certain elements on the page, we can use something called classes, which we've put right into our HTML to differentiate between those different items that we want to style different ways. So you can use these classes, you can use the elements themselves as and select the goes to apply styles to. You can also use IDs, we could probably talk about this later. But I have always been given the advice to not use IDs for CSS because using IDs, you're just adding styles to one individual element rather than a group of them. So it's less, we talked about DRY in coding, so don't repeat yourself. And so it would be less DRY. And it can lead to unreadable CSS. But I don't know if you, do any of you have opinions on that?

**Lindsey** [6:13]
I totally do. And I don't know if this is a right or wrong opinion. But I always had the mindset that IDs were not meant for CSS and IDs were meant for JavaScript, and targeting things in JavaScript and having landmarks on the page for your HTML. So I never really thought of them as styling mechanisms. And I thought of them more as if you need a landmark in your HTML to so for example, you want to have a link in your HTML. So index dot HTML slash, or pound, something some link or whatever, you can link to that within your HTML. So I always use it that way. Or if I'm targeting something super specific in JavaScript, those are the two times I used IDs the most. And I very, very rarely use them for styling. I don't remember the last time I used it for styling.

**Ali** [7:05]
Yeah, very much agree there were I don't use IDs for styling whatsoever, because then you're only styling one element. But I guess it's good to just say that you could use IDs for CSS if you really want to do for some reason, but generally not the best practice and not something that we necessarily recommend.

**Emma** [7:23]
And it really quickly if you're completely new to CSS or web development, the difference between the two is that classes can be applied to multiple elements versus IDs can only be, they should only be allowed to be added to one nothing is going to stop you from adding into multiple elements. But it'll only grab the first element and apply that style.

**Lindsey** [7:38]
Yeah, and this is a quick note, if you have multiple IDs, it's usually going to screw up things with accessibility, because you usually use IDs to link things on forms associate form labels and whatnot. But we could always that's a tangent, and I'm not going to go too deep into that. But just there's a lot like you've technically could, you shouldn't though,

**Ali** [7:59]
Yep, totally agree there. So now we've talked about selectors. So again, selectors are how we decide what elements are actually styled in our CSS: what we're applying styles to. The next piece of this is declarations. So these are the actual styles that are going to be applied to the elements that were selected. And these are essentially anything within the curly braces when you see a CSS selector. Within those declarations, there are properties and values. So properties are the type of style that we're applying. Some examples of this would be color, background color, text, there's a lot of different things that go into text, like font, text, spacing, and size. But these are the kind of categories of things that we're styling. And then there's values. So the values are the actual styles that we're applying to an element. So this text is blue, this text is 20 pixels tall, all those sorts of things go into values. So together a property and value make up a declaration. There's also shorthand for CSS. So instead of declaring each property separately for things like margin, or order, all that you can combine multiple things, and that will be more efficient. So one that you may see pretty frequently is margin: 0 auto, and what that's going to do is essentially center something on a page. So instead of doing margin-top: 0, margin-bottom: 0, margin-left: auto margin-right: auto, this margin: 0 auto is saying that, on the top of the bottom, add zero margin, and then on the sides add automatic, which will center it on the page. The shorthand is more efficient, both for you as the developer and the browser will also handle this in a more efficient way as well. And we'll talk more about border and margin and all that down the road in the same episode.

**Lindsey** [9:58]
And a quick note with that, too, is you can't make up values or properties like they're like I get that question a lot when I'm teaching and is that we basically, we can't just say, oh, we're going to make up text color, that's not a property, we need to use color. So

**Ali** [10:15]
So we can put all this together. So if we wanted to make all the first-level headers on the page blue, we could select the h1, that would be the selector, the declaration would be everything in between the braces, so any styles that we're applying, the property would be the color, and then the value would be blue. So that just puts all these pieces together.

**Emma** [10:40]
And that's awesome. So thanks for that overview on the syntax of CSS. But we haven't fully defined what exactly the cascade is. And since CSS stands for Cascading Style Sheets, let's go ahead and do that. So the cascade is an algorithm that defines how we combine property values from all these different sources, right. And it's all governed by this thing called CSS specificity. And a lot of web developers who maybe aren't super versed in CSS might not realize that there is a mathematical formula behind how that all of these styles are applied. So yes, specificity is the set of rules applied to determine which one which style wins, right, the more specific your style selectors, the higher point value is going to accrue. So if you take a piece of paper, and you write down four lines on it, it's a little cheat sheet for how you can actually calculate the specificity. And there are three main buckets of specificity that your code will fall into. So the first bucket is type selectors, and pseudo-elements will which we will talk about a little bit later. So examples of this might be an h1 selector, or then you'll see a double colon with the word before, that's a pseudo-element. And these are the first bucket of selectors or of specificity. The second is class electors, attributes selectors, and pseudo-classes. So examples of a class selector would be .cat. So if you apply a class to an HTML element, an attribute selector, when you get these really hard brackets, and inside, it would say type=" radio," for example. And this will select all of the radio elements on the page. And then the third pseudo-classes, you might see :hover, right. So these are classes that are, we'll talk about a little bit later, pseudo-classes. And the last big bucket that your specificity can fall into is ID selectors. So if you have an ID on your element, which we talked about briefly before, like a #cat, this is the most specific in terms of selectors. But universal selectors, or combinators, which we'll talk about later, they actually don't have an effect on your specificity. So that was the last point of this. But when we talk about inline styles, which is also a heated topic, inline styles directly in your HTML will always override any styles you've declared in your external style sheet. And this is generally not good practice, you really want to keep things where they're defined. And then, of course, we've seen all of these memes. And everything about this important, right, !important overrides all other styles. And again, this is bad practice. And it's generally done because developers have a hard time understanding specificity and working with it. If you want to learn a little bit more about CSS specificity, and actually how to go calculate it, I wrote an article that you can go reference, and we'll link it down in the show notes. But let's move on to the box model, right, because that kind of governs how things are laid out on a page. So Ali, can you help us understand this box model?

**Ali** [13:38]
Totally. So CSS operates within the box model. So first, you're going to have your content, so your text, that's what your content is. And then a lot of times, you'll want to add spacing around that content, so that it has more space to it. So if it's a button, you want to add space around the text, so it's a little bit bigger. And that's going to be your padding. Outside your padding, then you have a border around that, you can color that border, different colors, you can make it a different pattern, etc. And then outside that border, you're going to have the margin. And that's the spacing between your element and the other elements on the page. So making it so that your headers are far away from your button or something along those lines. So that's kind of a high-level overview of what the box model looks like.

**Lindsey** [14:31]
I think with the box model at something that helped me a lot is actually understanding the border because I remember using not being sure when to use padding and when to use margin to space things out. But understanding that that border is between them really helped me because I'm like, oh, it's within that little box. And then everything outside is the margin.

**Emma** [14:52]
And I think too, if you forget this, you can always open your browser dev tools. And actually, like, if you go to Chrome, if you scroll all the way to the bottom, they've got the box model and shows you all the values that are being applied. It's a great way if you keep forgetting, because like you Lindsey, I completely messed that up every time.

**Lindsey** [15:08]
Yeah, I will do a screenshot and put that in the show notes. So you know, we're talking about.

**Ali** [15:12]
Totally, I also have a long blog post that has a lot of these with like visual cues and stuff. And so that might help too because podcasts aren't the most visual format.

**Lindsey** [15:23]
So let's go ahead and get talking about pseudo-elements and classes. Emma was talking about them a little bit earlier. But we're going to go into a slightly deeper dive and define the special cases for an element. So first, let's talk about the difference between pseudo-classes and pseudo-elements. So pseudo-classes is a keyword added to a selector that specifies a special state to the selected element. So for example, you've seen hover, or maybe you haven't, but hover is a state. So when you hover over an element, when you focus on an element, using your keyboard, there is one for radio buttons and checkboxes. That's called checked. So anything, there's a huge list, which we'll also include in the show notes of all the different types of state. But basically, it covers all of those, there's also the not selector, like there's so many, but the best thing to understand is that a lot of times there are the state of the element, whether it's a child or hovering over something, or if something's like an active link and stuff like that. So then we have pseudo-elements, which are selectors that apply sales to parts of your document content scenarios where there isn't HTML. So you may have seen something that's like, ::before and ::after those are probably the most common. And we use those to create little elements that aren't technically part of the HTML document. So that's a quick, quick overview. But any questions on those from I think the learning what the difference between pseudo-elements and pseudo-classes was always super helpful. For me,

**Emma** [17:03]
What's a good use case for a pseudo-element like when would I use before or after?

**Lindsey** [17:07]
So I actually do this a lot when I'm making accessible checkboxes and accessible radio buttons. So I actually combine those I use the before element and the after element and check. So I use both pseudo-classes and pseudo-elements. So a big thing that happens is people will create like, they'll kind of hack the input checkbox, and they'll make their own. And they'll use the before element, and then they'll use the after element when it's checked. So they can use the checked element to make that checked style a little bit different. Then they can also use the focus style. So when you're focused on that new pseudo-element, that you can still be able to see what you're focused on. So it's pretty cool

**Kelly** [17:56]
Before we continue discussing CSS, I want to put in a quick shoutout to one of our sponsors. Sanity.io is a platform for structured content that comes with an open source editor that you can customize with React. We made one for Ladybug and it is gorgeous. Sanity.io also comes with tooling that lets you build with structured content in React, Vue, and other frontend technologies like Svelte, which I haven't played with yet. It also has powerful APIs for reading and writing so that you can use the same content across any device, channel, or product. You also get powerful APIs for querying your content, you can even listen for changes in real-time, and use the write APIs to patch and make new documents from code. It is super cool, I've been so impressed while playing with it this week. We are even refactoring the ladybug website to use Sanity.io! You can get started for free on the standard plan, and add a credit card to pay as you go for usage over the generous standard quotas. If you need advanced features like SSL and Single-Sign-On you can find all the prices and details on Sanity.io's fully transparent pricing page. Listeners of the Ladybug Podcast get a extra special plan with double the usage. Go to sanity.io/ladybug or use "ladybug" where you fill in the coupon code.

**Lindsey** [19:06]
Let's move on to what a combinator is Emma, do you want to take this one on?

**Emma** [19:09]
Yeah, so this is probably something that you've seen in a CSS file and had no idea there was actually a name for it. So combinators allow you to select specific elements within your HTML document, right. And if you've ever seen like a greater than sign, or a plus sign, or a tilde or space, these are all examples of combinators. So space is the most widely used right, so we use it to select a descender. So let's say you've got a div, a space and then a paragraph. And this is going to select all paragraphs that are living inside of a div, whether that's a direct child or grandchild, if you have a paragraph inside of a div, it's going to select it. The greater than symbol is called a child selector. So if you have div than a greater than symbol, and then a paragraph or a P is going to select all elements that are immediate children inside of this div. So all paragraphs that are immediate children means top level, right? So let's say I have a div and then a section. And then inside of that section, I have a P, it's not going to select that because it's not an immediate child, right? So again, greater than symbol is a child selector, then we've got the plus sign. So the plus sign is a combinator for adjacent sibling selectors. So what does that mean? Right, so let's say we have div plus and P, this is going to select all paragraphs that are adjacent siblings of div. So immediately following. So if you're in your HTML document, and let's say we've got a section and inside of the section, we have div, and P at the same level, it's going to select those. And lastly, we've got our tilde that little squiggly line that you also might not have known had a word and this is the general sibling selector. So div tilde P select all elements inside of that our siblings have a div. So combinators can be a little bit confusing, but I hope that was a good overview of them. I don't know, do you guys use combinators day to day?

**Kelly** [21:07]
All the time, yeah, combinators were there one of the most confusing things for me to learn and kind of understand the difference between them. But now that I understand them, I totally use them to my advantage. In an example of a useful use case here is when you have a multi-tiered drop-down menu, you have a lot of different elements for like, look for lists. So you may have a UL element inside of a <li> element inside of a <ul> element, and being able to style those differently, because you know, your primary navigation may rest horizontally, whereas the drop-down menus are going to rest vertically. So being able to specify which style should apply to a certain level is really useful.

**Lindsey** [21:48]
Yeah. Also, I was talking about like the pseudo-classes and pseudo-elements before I also with the checkboxes, the custom checkboxes, and custom radio buttons, I always use the plus sign for the adjacent sibling selector to target the label and create a pseudo-element on the label. So that's a that's another way I go into it and using them and all combining the other little tricks into one solid thing. So

**Emma** [22:18]
That's really interesting because I never use that one. I never use the adjacent sibling selector. I feel like I always use the child selector or the direct descendant selector. But just as a reminder, like these things don't contribute to specificity rules. So like, if you think that they do, they don't. And that was actually news to me like I forgot about that. And so if you see it, it's just to really help you select specific elements, and you know, and apply styles that way, but it really does not affect the specificity.

**Ali** [22:44]
My favorite resource for learning. This is called CSS diner. And they have different things on plates. And you can select them using these different selectors. So I guess selectors is a whole but also combinators. So I highly, highly, highly recommend that resource for kind of gamifying learning CSS selectors.

**Lindsey** [23:01]
Yeah, I love playing games to learn CSS to because it just makes it way more fun. And for some reason, it cements it in my brain a little bit better.

**Kelly** [23:11]
Cool. So we're going to talk about positioning now. And it's very cleverly named because it specifies where something is positioned on a page. There are I know, right?

**Emma** [23:25]
Everyone's favorite subject is positioning,

**Kelly** [23:27]
It's something very, very, very useful to learn. So the default position is static. So there's no specified position in the CSS, it's static, it just means that it's just going in its normal order. The next is absolute. And position absolute is where it's relative to the nearest positioned ancestor. So if you have another parent elements or grandparent element that has a specified position relative, which I'm going to talk about it in a moment, the absolute positioning will be relative to that previous ancestor. If there is no other element on the page that has a specified position, it defaults to the document body.

**Emma** [24:09]
What's really useful for that, I think, is positioning tooltips like that's one of the hardest things to do is position a tool against its parent, and that is a perfect use case, right? So you would define, let's say, we've got a div that is the parent wrapping it that has like the little icon, you hover over, and you would set position relative on that parent. And then you would set position absolute on the tooltip itself. And it'll position itself against this parent. And that's a really great way to layout tooltips.

**Kelly** [24:37]
Absolutely. And it's also a really great way to layout drop-down menus and also styled input buttons, as well as, as Lindsey was discussing. So the next one is relative position relative. So that's going to be positioned relative to its normal position. Do you have a good way of explaining that one?

**Emma** [24:55]
Yeah. So like, if you want, let's say, we have an image on our page, and we're like, um, I wish it was 50 pixels to the left of you know where it is in the cascade or in the DOM, right? Then you could just say, 50 pixels, that's where you can set the left position to be negative 50 pixels. And relative to where it's natural flow is in the DOM, it will position left negative 50 pixels or right and you can set-top and bottom, and it's just relative to where it naturally would display in the page.

**Lindsey** [25:25]
That's interesting. I never really thought of using top left, bottom and right, with relative positioning, I always think about doing it with absolute.

**Emma** [25:34]
You know what I use this for, I use this for, like sidebars that are collapsible. So like, if I have a sidebar with a hamburger menu, one way to do this, and I don't know that this is the most performant way. But instead of changing the width of this element from zero to let's say, 350 pixels, when you click the menu, that maybe I don't think that is as performant as changing the actual like transforming the actual left position of it, right. So you could say like, okay, in its natural state, when the menu is hidden, the sidebar is hidden, I want left to be negative 350 pixels, so it's not visible. And then when I click this hamburger menu, set, left, zero, right, so that's where maybe a relative positioning could come in handy.

**Kelly** [26:14]
That's a really good use case. And also brings me to the final one, which is position fixed, which is relative to the viewport itself. So when an element has position fixed associated with it, you will scroll down the page, and it's still going to stay in that same spot in the viewport. And you know, Emma, you talked about using this for for sidebars as well, I actually use position fixed for sidebars, too, because if it's like a full, like a full-height sidebar that just slides in, you can you know still scroll down the page and everything kind of stays in place. So I use that one pretty frequently as well.

**Emma** [26:48]
Yeah, and so one thing that confused me when I started looking into positioning was A) the difference between absolute and fixed. And when you would use one over the other, and then B) the fact that it removes it from the document flow that really confused me. What does that mean? It basically means that if I set position fixed on a navbar, let's say we have a top fully- spanned nav bar, and I set position fixed, it's going to take it out of the document flow. So if we have the main content section underneath it, it's gonna pretend like that nav or the header is not there at all. And it's going to position itself at the very top of the document. So fixed will keep it in the same exact spot regardless of how far down you scroll, and it removes it from the document flow. In contrast, position absolute again removes it from the flow. So all the sibling elements pretend like it's not there when they're laying themselves out. But it's going to scroll with the page.

**Kelly** [27:39]
Great. So one last thing to talk about with positioning when you're moving these elements around, it's important to talk about z-index to Ali, do you want to explain what that is.

**Ali** [27:49]
So normally, when we're positioning things on the page, we're doing the x and y-axis. So we're moving things around horizontally and vertically. But also sometimes we want to stack elements on top of each other. And so z index is used for working on the Z-axis or stacking one element on top of another in that direction. So if you want something to be displayed on top of something else you would use as a z-index. And kind of tangential to all of this. I really learned all this really well by building the CSS art that you may see on code pen or whatever, where people are taking CSS to its total extreme, and building art with it. And that really helped me learn all these positioning things really well because you have to do that in order to build these CSS art things. So something that might be fun to try out. Cool. Lindsey, you want to talk about the different display attributes?

**Lindsey** [28:48]
Sure. So there's three different display properties, we have grid and flex which we're going to talk about later, but we're going to talk about the difference between block inline and inline-block. So block respects all the inline properties and forces a line break after the element. So for example, if we have an h1, it defaults to display block, and that takes up the entire width if the width is not specified. So display inline is the opposite of that. So those are like things like links when you have a link within a paragraph, it does not take up its own line, it flows within the document, it's a lot about document flow. So it respects the left and the right margin and padding, but not the top and bottom. So that used to trip me up a lot. And it cannot have a width and height it is its natural width and height of whatever it automatically would be. And it allows other elements to left and right of them. So inline-block is a little bit of a combination of both. So you can take you can have the padding on the margin on the top and the bottom. And it allows it to flow within the document. But it still has those margins. And so this is really helpful for things like navigation when you want to have like bigger on the top and the bottom navigation. So bigger buttons in the navigation. But yeah, so those are the three main things. Did I miss anything?

**Emma** [30:30]
No, I think that's good. I think maybe one example of where you might see inline-block is when you have an image, and you want the text to flow around it, for example. And those instances, you could you'd set like display inline-block, and then it'll still allow you to set width and height and have all these properties, but it will be able to sit next to other elements on a page. And this used to be the way that we position things in the UI, right? And like you said, we will be talking about flexbox and grid. And in the next part, which I really revolutionize the way that we layout elements on a page, which was previously like super painful to do. We didn't even talk about floats, right? Like I don't honestly know how to use floats appropriately because like they're so painful to use. But yeah, I'm just what do you think? Do you guys still use floats? Or...

**Lindsey** [31:20]
I think the biggest thing is, before we had all these advocates making CSS better, we had to sort of hack things. So with float: left, like floating is not meant to be for layout. Floating is meant to kind of have something wrapped within something. So if you have like an image float left, like the text will be wrapping around it sort of like in copy when you see like that first image, and then things start wrapping around it. So that was never meant for layout. And that's why we had to have hacks to clear things. Because when, like, if you ever heard of the clear fix hack, like that's always something you had to have after the float so I think because like we've had so much advocacy for CSS, a lot of this has become so much better.

**Emma** [32:10]
Well, do you remember when we used to have to position things with tables, which has so many problems? I know, Lindsey, you're probably like, But I'm like back in the day like you had to position that. Maybe I don't know, did you have to? Or did people like not know how to use float or?

**Lindsey** [32:25]
Yeah, it's I think it's just like, as the web has evolved and gotten better, there's been become better ways of building those things into the browser, and how to, let's say how to make layouts a lot more friendly to things because the problem with tables is a data table is not meant to display like it's not meant layout things it's meant to order data, like and layout data. So layout display. So

**Kelly** [32:57]
And it's important to note that as CSS is evolving, so are the resources that are available to learn what's new in the more up to date recommendations of how to approach something. So definitely lookout for buying or, or taking a look at free resources that are a little bit more modern. And thankfully, there's no shortage of finding modern resources. And we'll be linking to a number of them in our show notes.

**Emma** [33:22]
One thing I do want to mention, and just quickly talking about the fact that all web browsers, like add their own style formatting to HTML, in order to make it readable. But not all browsers are treating HTML the same way. Right. So this is a problem. And as a result, you get this inconsistency across browsers. And I just quickly want to mention, like if you've heard of reset, and normalize, these are really great tools for kind of resetting and normalizing the way that browsers are going to be rendering your elements and your styles, right. So really quickly, Rest is a is a template that wipes out all built-in styling for HTML. And then you know, you can cut customize this and add in your preferred styling choices. And then normalize actually removes these inconsistencies for HTML. But instead of removing everything, it's just going to preserve some of the normal or useful defaults, right? So we need to be careful when we develop that we're not just working in one browser and testing our CSS and HTML in one browser. If you're building a robust product that many people are going to be using, you got to make sure that you test it in all browsers and potentially even use a tool like reset and normalize to make sure that things are consistent.

**Kelly** [34:31]
And it's not only testing in browsers is testing and different viewport widths as well. Like the iPhone 7 is it maxes out at 320 pixels in width? And making sure we talk in-depth about making sure your website is responsive with mobile-first design and the number of customers and visitors to your website who are browsing from a mobile device versus using a desktop, right. So you know, it's very important to keep in mind when you're building out your site testing different browsers, but also testing different devices as well.

**Ali** [35:03]
Can I use is another great resource as well for checking to see if certain CSS things work in different browsers to

**Emma** [35:09]
Right just because something is supported in Chrome does not mean it's supported and Opera or Safari, right. And to that point, I just want to say like one of the things that really helped me in my dev career was learning how to use the developer tools in the browser, the big ones. So Chrome and Firefox each have their own benefits, I still always go back to Chrome for like positioning and figuring out why like my spacing isn't working, because the box model that they have in their developer tools is incredible. So I recommend learning how to use that appropriately. And yeah, that's if I can leave you with one tip it's learning how to use your browser developer tools to help debug your CSS.

**Lindsey** [35:45]
Absolutely, that's probably how I started learning about all these concepts that we talked about here today is through the browser developer tools. Like that's how I learned what Martin was. That's how I learned about the box model. That's how I learned about the display inline and display, inline-block and all that stuff. So definitely recommend playing around because quite frankly, the best way to explore CSS is to explore. That was very profound.

**Kelly** [36:11]
That's beautiful. And on that note, we are going to now discuss some wins. So we have a very exciting group win this time, and that is that we officially launched the Ladybug merch store. Yay. So you can buy if you want to support us and you want to have stickers and bugs and shirts, and we're going to have all kinds of really awesome stuff available for you. We ship to all but six countries around the world I believe, and shipping is very affordable, you can visit our merch store at shop.ladybug.dev. Very excited for this.

**Emma** [36:49]
I just want to give Kelly props because she did this and I want to learn how she made this merch store and props to you because that's not a skill that I have acquired.

**Kelly** [36:59]
All I do with my life now is e-commerce. I've now turned my full-time job into my side job and my side job into my side-side job. So I love it though I love everything about e-commerce. So we're also going to share a listener win this time, and we absolutely love this one. John signed out of his workplace Slack during his vacation. So he completely disconnected and I don't know about you, but that is something I very much struggle with doing.

**Emma** [35:30]
I have never done that in my entire life.

**Ali** [35:32]
Yeah, that's wild. That's super cool. So props to you.

**Lindsey** [35:36]
When I first started my current job, I just decided to be a rebel, and I did not log into my work slack on my phone. And it's been nine months, and I still haven't. Yeah, nobody's yelled at me. So I guess it's cool.

**Lindsey** [37:47]
Before we conclude today, we want to give one last shout out to our sponsors: LogRocket and Sanity. Sponsors allow us to continue giving you this show for free, while showcasing some incredible technologies. Thank you again LogRocket and Sanity for sponsoring this episode.

**Kelly** [38:02]
Awesome. So if you enjoyed this episode, make sure to tune in this Thursday for part two. For a bonus episode. We're going to talk a little bit more in-depth on some additional CSS. Awesomeness. Whatever you want to call it, make sure you follow us on Twitter for updates, and you leave us a review on Apple podcasts if you enjoyed today's episode and each week we're sending a listener from Twitter some stickers for giving us a little shout out. So if you want some free stickers, you know what to do. So thank you so much for listening.
