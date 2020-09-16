**Kelly**  0:00  
Today we're talking about everyone's favorite programming language, HTML. Hypertext Markup Language is the structure of a webpage. And while it's not necessarily the hardest syntax to learn, it's vital to your web applications. Let's get started.

Welcome to the ladybug podcast. I'm Kelly.

**Emma**  0:22  
I'm Allie. And I'm Emma, and we're debugging the tech industry.

**Kelly**  0:27  
AWS amplify is a suite of tools and services that enables developers to build full stack serverless and cloud based web and mobile apps using their framework or technology of choice on the front end. Using amplify, you can quickly get up and running with things like hosting authentication, managed graph qL serverless, functions API's, machine learning chat bots, and storage for files like images, videos and PDFs amplify is built especially in a way to enable traditionally front end developers like myself to be successful because they can use their existing skill set to build real world full stack apps that in the past would require deep knowledge. back end DevOps and scalable infrastructure. The amplify console then allows you to use the GitHub repository to deploy a globally available CDN with ci NCD built in, learn more visit AWS dash amplified.github.io Hypertext Markup Language. Is this a programming language or not? This is one of my favorite arguments. And by favorite, I mean I get really annoyed by people being like HTML is not a programming language, because it's technically a markup language is according to the name but Emma according

**Emma**  1:28  
to the freakin name, I'm sorry, but yeah, you're writing a program that programming is the act of writing a program. So I'm just

**Kelly**  1:38  
gonna leave it there. Fine by me, but actually, I do want you to discuss the history a little bit since you did a little bit of research on this.

**Emma**  1:46  
I literally copy and pasted a paragraph from the interweb. But the paragraph that I have copied basically stated that in 1980s, Tim berners Lee, who was a physicist, and also a contractor at CERN, he proposed and prototyped choir, which it seems like he just worked on a lot of acronyms, companies and things true and choir seems either it's like a really enthusiastic name and all caps, or it is a, an acronym, we'll never know, because I'm not gonna care enough to Google it. But basically, it was a system for certain researchers to use and share documents. And then in 1989, he wrote a memo, which proposed an internet based hypertext system. And I think the whole concept here was to link from one document to another like that was the goal of the internet. In the beginning, it was for file sharing, if I'm not mistaken. So that's why things were linked together. And the internet was simply just, it was there were documents and they were linked to each other. And so you know, berners Lee specified HTML, he brought the browser and server software and that happened all in the late 1990s when I was a

**Ali**  2:54  
small child. Yeah, and to go even further, like, we can break down the name of each tml like hypertext just means link from one page to another, we see that or it might even count for links within the same page, too. So that's what hypertext says things that you can our text that you can click on and get taken to a different part of the page or a different page. And markup means that there is different meaning associated with different parts of the content, I think.

**Kelly**  3:25  
And what does language mean?

**Emma**  3:29  
No, no forever. No. words, if you if you've ever heard of XML, it's very similar to XML, which is Extensible Markup Language. Obviously, they're both markup languages. And XML is just defined sets of rules for encoding documents, but it's both human readable and machine readable, which is it makes it really nice.

**Ali**  3:50  
Have any of you worked with an XML API?

**Emma**  3:52  
Have not No, my dad was like, super into XML. I'm not really sure why like seems like a weird thing to fanboy.

**Kelly**  4:00  
Never heard somebody falling into XML. But yeah,

**Ali**  4:03  
it's so painful. I had to work with the XML API cuz it was less expensive than a JSON API for this one company, even though it had the same data, which I think is fascinating. Because there's no reason why it should be cheaper for them to have an XML API than a JSON API. But it was so painful. And so talking about XML, it gives me a hangover to that.

**Kelly**  4:25  
Also, there's maybe worth noting that there's x HTML, which is literally extensible Hypertext Markup Language. So XML based version of HTML, which is basically like a stricter version of an HTML based website,

**Emma**  4:42  
or application. Very confusing. I don't know any other Markup Language except for markdown, which is not markup. It's

**Kelly**  4:48  
quite min. Mark. Okay.

**Emma**  4:51  
I mean, it's similar. It uses tags to create hierarchies. It's just different. But in any case,

**Kelly**  4:56  
so I think it's worth talking about this. stigma of learning HTML, like people say it's like a, like, a very basic beginner's thing to learn, and that it's not hard.

**Emma**  5:09  
Yeah, they're not wrong. But the thing is, it's not hard to do, right. But it's important to do, right. And we'll talk about this later. But how you structure your webpages has massive implications on who can use it. So we'll get into that a little bit. But I think the root I don't know, do you all have? It makes me so angry when I think about this, because you're getting all like the gatekeeping bros, who are just like, it's just not a programming language, which they're technically right. It's not hard. It's like they're also technically right. But that doesn't mean it's not important. And

**Kelly**  5:47  
yeah, especially like understanding like semantic HTML and how to accurately you know how to set it up appropriately for screen readers and all the accessibility parts. It's not just simple, you know? Writing tags and carrying on with your day like there is a right way to do it.

**Emma**  6:05  
I also want to mention, I would not have gotten my job at Spotify, if I didn't have an understanding of HTML. And you won't either. I mean, like a lot of jobs. Now, they used to be super JavaScript heavy in the interview process. And now a lot of front end development roles are realizing that you need to be well versed in CSS and HTML as well. And they are asking explicit questions about HTML and CSS. So make sure that you know it. So let's learn about it. I know

**Kelly**  6:29  
this is a very basic episode, because we're talking about basically the structure of HTML, but I don't know, I feel like there's something to learn for everybody in here. And even if you've been programming for 20 years,

**Ali**  6:44  
do we want to start off with how we learned HTML because I feel like that could be an interesting story for some of us.

**Kelly**  6:50  
Totally. That's a good

**Ali**  6:52  
that's a good thing. Why don't you start early? Oh, my name is not very interesting. I just was trying to add like skills to my resume and so I'd learned HTML on Code Academy. And I love

**Emma**  7:03  
how you were like, this is gonna be interesting for people. Oh, my

**Ali**  7:07  
mind is not but I feel like Kelly and Emma, yours might be more interesting. So Kelly, how about you?

**Kelly**  7:13  
Yeah, so I wanted to learn how to code because I wanted to customize my guild on Neopets, which is basically just like a community. And in order to do so, he needs to know basic HTML. So my dad bought me a book that's called HTML goodies. And I basically learned how to code from a book. And this book came out in 1999, which I think 99 would have been like, a HTML for, I guess. So. We've been I mean, html5 came out in 2014. So I was learning how to build websites using HTML with like frame sets and stuff like that.

**Emma**  7:55  
Let's also very quickly mention the fact that while JavaScript has more free My updates to their standards. html doesn't like as long as I've been a web developer. So like I graduated in 2015. And it wasn't really until my real first run in with HTML and like a professional setting was not until like 2016. Like I had used it in my space, like to customize my my space without recognizing that's what I was doing. But yeah, it wasn't until I joined IBM as a web developer. And I had to teach myself web development, essentially, through code, CAD me, like alley, which I think is a great platform, by the way. I think I use treehouse, teamtreehouse and codeacademy. And yeah, it's one of those things people take for granted. Yeah. Should we kind of get into the syntax of it?

**Kelly**  8:46  
Let's do it. Also, I wonder if there's going to be an HTML six at some point.

**Ali**  8:52  
There's got to be right.

**Emma**  8:53  
Well, oh, yeah, this was me like going off my tangent. So like JavaScript has more frequent updates, like the last big release of JavaScript. Yes, 2015 or ESX. So I guess it was five years ago versus if html5 came out in 2014. It's only a year difference. So it makes me feel like,

**Kelly**  9:09  
but there was one major. I mean, yeah, that's true. Even the minor releases are still things that we are actively using in our day to day even though we're, you know, we might not be totally aware that it is a minor release. But I mean, HTML five was the last, I think, like pretty significant release of any sense. And HTML. I don't know how much it's actually changed over time since then.

**Emma**  9:34  
You know, what's also funny to me, I don't know if you do this, but when I was creating my resume is I would always add, like html5. Yes, six, like I would add the version number on there to be like, I'm proficient and the newest one.

**Kelly**  9:45  
Oh, yeah, I definitely did with the CSS three.

Unknown Speaker  9:48  
Oh, yeah.

**Emma**  9:51  
Anyway, let's get elemental.

**Kelly**  9:54  
Ah, why don't you explain elements to us.

**Emma**  9:57  
Okay, so I love the analogy. It's a little creepy, but I love the analogy of comparing web technologies to the human body. So I guess I could also be like if you're building a house, but I'm going to go with the body because I feel like everyone knows what bodies are. I guess. In any case, you can think of HTML as like your skeleton, it's, it makes up the structure of you as a human CSS is gonna be like your skin your eyes think that sounds so creepy. It's almost it's gonna be almost Halloween, right? Like it's fine. It's like your visual characteristics on top of your skeleton. JavaScript is like your your functionality maybe like your voice and how you speak and your mannerisms. And an element you can think of as maybe like a limb on your body, so an arm or a leg, or ahead. Um, so yeah, an HTML element is like a, an encapsulated element, or I'm trying to think of another like a synonym for element because I hate defining the With the same word, it's like a component essentially. So if when you look at a webpage, you have navigation, you have a main content area, you have a footer, those things are elements. And they are defined by start tags and end tags. So anything in between that is encapsulated within that element. So if you've navigation within your nav element, you might put an unordered list with list items. But there are just a couple of elements that are self closing. I'm not sure why like why are some self closing? Why are some not I'm not really sure, I guess because you can't place anything inside of them. Maybe like image. Okay, images. Ah, okay, that makes sense. Yeah, images, like a self closing tag. And though you would have an opening bracket, the word or the letters IMG and then like the closing, there's a Ford slash or a backslash, I can never remember forward slash, okay, forward slash and then the closing bracket and I will try To include visuals with this, so make sure you're checking out our Twitter in our website, because it's a little hard to explain these technical concepts. But um, yeah, that's the that's the basis of it.

**Kelly**  12:10  
That's good. I like the the human body analogy. You're right, a little creepy, but we're going to go with it. So going a little bit deeper, we then get to attributes. So attributes are going to provide some kind of additional information about the elements. And they're always specified in the start tag. So they usually come in name value pairs, so name equals value. And these are going to be things like classes or ideas, or let's say you have a video tag, you could say, like autoplay, or you had an input tag that's going to be like the type of input tag it is like input type equals radio or input type equals text. So you're always using these attributes to define the elements or also it's not really doing too much. I guess you can just have div div, div, div or whatever. But that's kind of boring

Unknown Speaker  12:58  
and useless. Yeah.

**Ali**  13:00  
Wild web.

**Emma**  13:01  
All this. So speaking of attributes, you mentioned classes and IDs. And I think this is a really important distinction. We use these for a few different things. We can use them to style our components with CSS, we can also use them to dynamically generate things with JavaScript as well, we can use them to select elements. And so what is the difference between a class and ID, but a class is for a group of elements, an ID is for

**Ali**  13:29  
just one element, it's unique. You can only have one element with a specific ID,

**Emma**  13:35  
I think it's important to note, you should only have one with the idea. Like it's not technically gonna, like blow up your app. Actually, we did try this I think on j. s party, maybe where like, we added a couple of ideas. I think it will only return the first one, but it's still not semantically correct to to add, and they should really add some sort of error prevention on that. But

**Ali**  13:55  
yeah, I mean, that's the thing with HTML and CSS is it silently fails? Oh, yeah, yeah. Didn't think about your page just doesn't work the way that you want it to. Whereas JavaScript, it'll actually throw a full error message. Whereas something like HTML or CSS, it just doesn't look the way you want it to, or doesn't work the way you want it to. The browser can actually fix a lot of issues with HTML itself, too, like so if you have missing close tags, a lot of times the browser can figure that out and add in those closing or that missing index.

**Emma**  14:25  
I think it's also like, I like the analogy of thinking about humans. Let's keep going with the skeleton thing. It's not skeleton related. It's actually human related this time, but like, if you have a class full of students, you could have three students with the same first name, right? And you can think of that as a class like it's okay if you have three students named. I don't know. I'm trying to think of a cool name, but like, that's not cool.

**Ali**  14:51  
It's cool. anybody involved listening please?

**Emma**  15:00  
Anyway, but in terms of ideas, you can think of that maybe as like your social security number, where only one person should have that number. Like, if you have two people the same social security number, that's a huge issue. But that you can also have multiple classes too. So like, you know, you might have two people with the same last name in the same class. So they might have a class with their first name and a class with their second name is you can chain these classes on. And that's, it's nice if you have like, for example, like if you have two different buttons, they might each have a class of button, but then the first one might have a class of Button Red, and then the second one might have a class of button green. So they can have multiple classes that mean different things. And we do a deep dive into CSS on some previous episodes that might be worth listening to, if you want to

**Kelly**  15:45  
learn a little bit more about classes and ideas, and there are some other things that we like, I guess we cover more than just classes and IDs in those episodes, so might be worth listening to.

**Emma**  15:54  
It is worth listening to. I hope I'm alright. Let's talk about the structure of a web page. Allie, why don't you kick us off talking about headings? Okay.

**Ali**  16:06  
Looking at this, like, Are you talking about the head? Like, what are we okay? Or it's like a header, you know, you know the, okay, so lots of different things with head in it and HTML. So I got a little bit confused here. But a heading is like a title for either the page itself or the sections. And there's lots of different ones with different numbers. Each one each two h3 h4, I think he goes to each seven that is, Ah, no, maybe I usually go to h6. I thought, okay, it might be each next. Okay, I added another one, what

**Kelly**  16:38  
it'd be like super teeny, tiny text,

**Ali**  16:42  
baby ducks. Um, but these are supposed to go in order. So you have one h1 tag at the top of your page. And that's the title of the whole entire page. And then you might have some h2 tags. But then within there, you'd have each three tags and then within the h3 tags, you'd have each four tags you And they are used to title different sections of your page.

**Kelly**  17:03  
It's worth also noting that there used to be a lot more of an emphasis on proper ordering for these heading tags for SEO, but I think over the you know, as as Google has changed their algorithms, there's been less of a focus on, on that structure that architecture, but I still think it's good practice to have the heading the h1 tag at the top of the page and kind of work your way down to, you know, go into sub headings, and then those those smaller headings. So,

**Ali**  17:35  
worth note, I always thought it was really important for accessibility to but I could be totally wrong on that.

**Emma**  17:39  
That's the only reason it's important. It has nothing to do with the text size or anything of that nature. It's solely for accessibility and screen readers because when someone's using a screen reader, they're using the accessibility tree to navigate your document and if you don't use headings, they can't jump to different sections and they have no idea what your webpage looks like the same way that landmark roles, landmark regions, landmark regions being the main content area navigation footer aside things of that nature.

**Ali**  18:07  
Glad to have that confirmed.

**Emma**  18:09  
Also, too, I want to make like just very clear that like your h four and your h five. While an h4 is a larger in terms of semantics more important, they could be the same font size, like it has nothing to do with the visuals

**Kelly**  18:25  
or the I think the default unstyled version, it goes from largest to smallest in terms of font size. But you can totally change that. I think

**Ali**  18:33  
it's important to go back to Emma's analogy of the body being HTML, and how the styling you can make it look however you want, you can make it so your h fives are the biggest ones on the page. That doesn't matter. It's more for the meaning of the tag. That's what we're using these for. The

**Emma**  18:53  
things that come underneath headings are known as paragraphs. Now I want to make this really important note as well because when I was starting out and so web developer, I threw everything into divs and spans and we'll talk more about those a little bit later. It's very, very important if you have textual content that it comes inside of a text element, meaning a header tag, h1 through h6, or a paragraph, or I think there are a couple others for textual content. But if you have like, if you're writing a blog, your blog content must be in paragraphs like otherwise, it's just not semantic. Like just it's not that hard. It's one letter, you can do it.

**Ali**  19:28  
In fact, the shorter less text and diverse band one letter instead of three or four, we just got so awkward,

**Emma**  19:34  
and I love it. So one thing that really tripped me up when I was beginning HTML was block versus inline elements because they confuse the literal shit out of me. So all elements in a webpage are either going to be a block or they're going to be in line. The, I don't know the curated definition block starts on a new line and takes the full width. These are things like div form heading tags, ordered and unordered lists, which we'll talk about in a little bit. inline elements in contrast, they only take up as much width as they need. These are elements like span, anchor tags, buttons, labels, and images. But there are also implications to inline elements such as like you can't set margins on them, for example, and we talked about this in our CSS episode, where you if you need to set like margin or add spacing to an inline element, you can set the display to inline block where it gives it the ability to inherit some block properties like being able to have spatial recognition. But it maintains in line flow. And yeah, it was just really confusing to be learning this originally. And you can think of block elements is like if you boarded a plane, and let's say it's a three by three configuration where every row can sit six people, well you've two rows of three. If you are doing a block level format, you can only one person in each row because every new person is a block element, they're going to shift to the next line versus if You've inline elements, you can fill every single seat in that plane, which I don't recommend doing right now where you're masking. So that's kind of the high level analogy of block versus then line.

**Kelly**  21:10  
I agree. Like that was something that was very confusing to me at first. And especially once I started using divs. And then I hopped on this train to use divs for literally everything because I finally understood what a div was, which is obviously not the right thing to do. I think it's also worth noting, though, was something we didn't touch on with paragraphs is there are certain elements that cannot nest inside others. So you can't put a div tag inside a paragraph tag, for example, it'll break the paragraph.

**Ali**  21:36  
Yeah, and if you are want to check these rules, run an HTML validator on your code. So you can just search them like HTML validator and I think w three has one, and it will make sure that your HTML is running is following all the HTML rules.

**Kelly**  21:55  
Le Ellie, do you want to talk to us about formatting?

**Ali**  21:59  
Yeah, so There are also some HTML tags that you can use to format your text. So for example, B makes your text bold, kind of just like bolding something and everybody knows what exclaim is. Strong is for important text is for talyc text m with an E M is emphasized text. There's a bunch of different ones for formatting your text in different ways. There were also some fun ones like marquee that uses your text, scroll across the page, rip to the marquee tag.

**Kelly**  22:45  
There's like blink, blink.

Unknown Speaker  22:47  
Yeah,

**Emma**  22:48  
I just wanted to make this very clear that a lot of these formats have specific meanings. So don't use bold when you really mean to use strong emphasis or more. So the strong element represents texts of a certain importance. I'm trying to think like, I don't know, maybe this is an error message in your webpage. If you're filling out a form that's important to someone, the M tag or for emphasis puts emphasis on some sort of text. And then mark represents a text of certain relevance. The B tag doesn't really have much semantic information. And in all honesty, I would recommend using CSS to bold your text with font weight bold, or changing the font weight to a higher increment of 100. If, if you plan to bold your texts, like the B tags, I don't want to see deprecated. But I would use CSS it was

**Kelly**  23:36  
something that I always found and that's exactly what I was actually going to talk about is I always thought that they could be used interchangeably. I didn't understand the difference between the two. I think another example of since we were already on this, this path of talking about wearing a mask, you would put please wear a mask in strong as opposed to be because it's very important to emphasize that point. think the same thing. goes for like the E M versus AI as well. Providing the emphasis versus just italicize in the text. did the same thing? Definitely,

**Emma**  24:10  
definitely, I wonder if they're gonna remove the default styling for those types of tags because they aren't really meant for screen readers.

**Kelly**  24:16  
So let's talk lists. Because again, this is one of the things that I just always used on ordered lists for everything. Before I understood that there are other types of lists. So talking here about three types ordered on ordered and description lists. Order lists are marked with numbers by default, you can change it by declaring the type that is an attribute unordered lists are marked by bullets by default. And you can change the type actually by declaring the style so I wonder why that's the case for unordered lists that requires style change as opposed to an attribute.

**Emma**  24:52  
Well, what do you mean

**Kelly**  24:54  
like list style type is yes style that you're changing whereas the order list is literally declaring an A type, which is an attribute within the element. For ordered lists. There are different types of types. So you can do the default decimal numbers 1234. You can do alphabetical list. So ABCD or lowercase ABCD, you define that as like, Oh, well type equals one or, which is the default or type equals a, capital A, if you want to do capital ABCDE for the list, but for unordered lists is actually a style that you change from like the default bullet to like a disk or something like that, where you change list style type, which is a style attribute, not an actual Element Attribute.

**Ali**  25:42  
I feel like for the order to kind of changes the meaning to have ABC versus 123.

**Kelly**  25:47  
Yeah, it's also I mean, it's worth noting that order lists also have like the support the list style type CSS attribute as well for declaring different types of like lists for various Like in Hebrew, or there are weird examples lower Greek, lower Latin. So I mean, point B list style type is still supported for ordered lists, but it's like the requirement for unordered lists. I don't know, it could be because you're it does change the meaning that could very well be yet. Anyway, third type being description lists, and I actually, don't ever remember using description lists. But I actually one of the depth tests we recently received for something that we are building out for FAQs as part of our like building out like a FAQ section on a Shopify theme is one of the things that we do during our dev test, and one of the developers used a description list instead. And it kind of makes sense because description being a list of terms with a description for each term, so you'd use dl to declare a new list d T for the term and d d for the description. So No,

**Emma**  27:01  
that's really cool if you're writing like a book using a website, and you need to have a glossary of terms. Yeah,

**Kelly**  27:07  
that's a that's a very good example.

**Emma**  27:10  
Thank you.

**Kelly**  27:11  
You're welcome. Now, for your reward, please discuss semantic elements.

**Emma**  27:17  
Okay, cool. So, before you reach for a div or a span, which we're going to talk about in a second, you should absolutely look to see if there is a semantic element that kind of describes the type of content you're going to write. They mean things to visually impaired or blind users that are leveraging assistive technology like a screen reader. So like, if you're using a screen reader to navigate a website, you would say like Submit button, you know, type submit, or article and it'll allow the users to jump around to different sections of your webpage. These are semantic elements because they tell screen readers something not just screeners, but like programmers and other people looking at source code. It tells people what this type of element is and why it's being used. There are around 100 elements. And you probably have heard of things like footer header article aside, things like that. You can find full lists out there on like, you know, different websites. And you know, on the internet, if you google like HTML tags, you can find lists. I think the WC the Worldwide Web Consortium, has a good list. Mozilla also has a good list. You should definitely be reaching for these as much as possible. But we are going to talk about divin span which are definitely useful. We'll talk about those a little so don't skip ahead. It's all really important. Just keep listening.

**Ali**  28:46  
I feel like we keep bringing them up and should just spoil it for our listeners at this point. Okay.

**Emma**  28:51  
First of all, I don't know where they got these names from. I'm not really sure where divx came from. I don't know if it can someone look this up while I explain what it is. I'm doing right now. So div and span div is a block element, meaning it's going to every new div will break into a new line spans are inline elements so you can use them. One thing I use spans for is within a paragraph. For example, if I need to make a certain word, a certain color, or if I have inline code snippets or something, and I want to give it some extra styling, and I don't want it to break out of the paragraph, you can use a span to do that. It just gives you the ability to select a certain word in a paragraph, for example. Why would you even use div and span This is a great question. Sometimes you need additional wrappers for things to create Flexbox or grid layouts, you want to group certain elements together. But there's not necessarily a semantic element that you can use to create this differentiation and grouping. That's where you would use div and span. But yeah, screen readers don't understand the content within it. And we'll mention Aria and a little bit. I guess I can mention it. I should just stop deferring things because No, it's relevant. Aria is accessible rich internet applications, I think is what it stands for. And there are a series of different attributes and tags that you can use to make your non semantic elements like div and span semantic. You can do this by setting roles on a div to indicate what type of an element This is, if it's relevant, you can indicate just for editors that, hey, this is an accordion, it's expanded, so the content is available or it's not visible or things of that nature. It just tells screeners additional information. And you should be doing this with your HTML elements as much as you can. Now that being said, like you wouldn't add a role and Aria role on to semantic elements. So like if I have a navbar, and I've used the nav semantic HTML element, you don't need to tell Aria or a screen reader that hey, this is an app it knows that by default, but if you are creating a custom component, and you have to use a div, and let's say it's a navigation, you need to add role of navigation on there to let them know that Hey, this isn't navigation. Don't do that. Please don't do that. But I'm saying you should if you need to use a diverse band, you should be telling a screen reader what it's for, if it's relevant,

**Kelly**  31:09  
and going back to what I did is the name came from HTML content division elements.

**Ali**  31:17  
Well,

**Emma**  31:18  
Oh, that makes that makes so much sense.

**Kelly**  31:21  
It's amazing that we've been using divs. For so long. We're just like, yes, this is a div. No idea what it means, but we're going to use them. So alley links versus buttons. Do you want to kind of explain the difference between the two and how to properly use them?

**Ali**  31:35  
Yeah. So link is eat hypertext. So a link allows you can go from one page to another or navigate within a page to jump down to another spot in it, versus a button that is for doing clickable action. So if you want to have something to happen, when you click on something, then you should use a button for that. And that doesn't mean you move to another page. They have different meanings. So really To honor that, and to use a link to move from one piece of content to another and to use a button if you want to have some other action, such as download, or maybe sign up or submit a form, or some other fancy JavaScript thing,

**Emma**  32:17  
I think to this is important that styling and semantics are two separate problems to solve. So you'll see a lot of anchor tags or links that are styled like a button. And that's okay, just make sure that you're using the proper HTML element for it. And you can style it to look like a button or style it took like a link, like buttons that look like links are actually called tertiary buttons in general. So we have like primary secondary and tertiary buttons that you know, I'm not going to go into the full semantics of you know, styling of them, but just make sure that you're not picking a button, because you want it styled like a button like make sure using the appropriate tag.

**Kelly**  32:51  
This is a very interesting episode once again, because it's we're spending over 30 minutes talking about HTML, and it's something that ages tend to use on a daily basis. I never actually sit here and think about it and talk about it, I just do it.

**Emma**  33:04  
One of the things I was really confused about when I was beginning of my web dev journey was how to actually include CSS and JavaScript into my HTML files. I know it's not that difficult, but it definitely was confusing for me how to like link to different things and how to include different things. So in terms of styling, you have three different options to include CSS, in your webpages. The first is going to be inline styling. So this would be setting a style attribute on your HTML elements and including CSS that way. I highly, highly discouraged this, you can go to listen to our CSS episodes, if you're interested in learning a little bit more about that. But it all comes down to CSS specificity and how styles are applied. So I'd recommend listening to that episode. So you can do it in line. It's not recommended. The second way you can do it is by adding a style tag to your head, the head of your HTML doc is not rendered visually for the users to see. But it includes things like links to CSS stylesheets, or metadata or things of that nature. So it's more for, I think, the browser than for the user. So you can just include an opening and closing style tag and write your CSS directly in the head of your document. But this can also get a little bit messy and large if you're including large amounts of styling. So the way that I would recommend including CSS in your HTML documents is to use external stylesheets. So you would just create a new file with a dot CSS extension, and you can write all of your CSS in that file. And then you can just import it into the head of your document using a link tag. So I think it's the link REL equals stylesheet href equals and then the path the relative path to your CSS file. This is a self closing tag, which confused me because when we talk next about how you can add JavaScript, it's a little bit different. That always confused the crap out of me how like the JavaScript script tags Not self closing, but the CSS ones are.

**Ali**  35:02  
But I think it's because even Well, no, that doesn't make sense. Okay, my explanation wasn't gonna make sense. Um, because you

**Emma**  35:09  
can put stuff between the JavaScript ones,

**Ali**  35:10  
but you can also with the style tag, but not the link tag.

**Emma**  35:15  
Yeah, exactly. So, Allie, do you want to tell us a little bit more about how to include JavaScript in your HTML files?

**Ali**  35:21  
Yeah. So for JavaScript, you can link them just like you can with styles. You can also and you can use the script tag for that with a source. You can also write your JavaScript in line by using a script tag and just writing your JavaScript code in there. But again, that's going to get really long. So normally, you would use that script tag and include it. one really important thing to note is with your CSS, you normally include it in the head, because you want your page to be styled when it's loaded for the user. But JavaScript is going to take a while for your browser to parse And if you put it in the head, then it may make the rest of the page loading slower. So for JavaScript, we're going to put it at the bottom of the body instead of in the head tag usually, or you can use like defer, which is an attribute. And that would make it so that it loads in event as well. And the other important piece for this is if you have JavaScript code that manipulates your DOM, or your HTML, you need that HTML to actually load first before that JavaScript runs. Or else it's not going to be able to find these HTML elements that haven't that don't exist yet.

**Kelly**  36:39  
For the longest time, I struggled with adding JavaScript to like, like, as far as making a site performance. That was probably one of the hardest things I were one of the things that took me longest to figure out in terms of like different scripts and where to actually put it and what makes the most sense. So that is the I think I just struggled learning JavaScript for a really long time. In general, so I don't know if that's something specific. So no,

**Emma**  37:03  
no, I struggle to learn to be

**Ali**  37:05  
okay. One other thing is how to run an HTML file. And you can just create a file with dot html and then open it in your browser. This is something that I did not understand at all, because I was writing Python and c++ before I learned HTML. And so I always had had, like, run the script from the command line. And I was like, how do you run an HTML file from like, family? Like, how does this work? And I was so confused by it was googling it over and over again, like, how do I run an HTML file? And obviously, there's not a good source for that, because I think most people, it's pretty apparent, but I don't know. Just gotta put that out there for anybody.

**Emma**  37:47  
No, that's really important because what we today or what some people might deem is, like, easy and how could you possibly and I know that a lot of people don't know and like there's no shame in that. So yeah, one other thing too. If you're using VS code or sublime or atom or another cool text editor, code editor, a lot of them will do like open in browser and a lot of them will do hot reloading, where if you make a change to HTML or CSS, it'll auto refresh your browser for you. But yeah, it was Charlie's point. Like, once I figured out I could open it in the browser. You'll notice too, that the URL is obviously different. It's a local file. So you'll see like file colon forward slash forward slash and then the path to your to your file. B. Yeah, that could be really tricky for people.

**Ali**  38:27  
What's for me,

**Kelly**  38:28  
speaking of really tricky for people, I think one of the things that's worth talking about is course because this I think I run into cores issues all the time. And I, it took me a really long time to understand kind of what was going on. So cores stands for cross origin resource sharing. And basically it's this mechanism that allows restricted access to resources on on one domain when it's coming from a separate domain, like just a different domain. And for most, most things like images and scripts and iframes for you know, they're still useful. sprite frames, I guess you can freely embed that kind of cross origin content. But let's say you're doing like an AJAX request, if you don't enable the, like the cross origin, by default, same origin. So if you try to do an AJAX request to a different domain, you're going to get a cause error. Understanding the difference between like the pre flight requests versus like some more simple example. I'm just going to add a link to the Mozilla documents for this because it's a it could be an entire episode explaining exactly how course works.

**Emma**  39:36  
I think we should like maybe next season because it's really tricky. I remember the first time I encountered a corps error. I was at IBM and like, it confused the living daylights out of me. And, you know, I think like you have to go and like get a special header to allow resource, your resource to x. It's like so confusing. I think that'd be a good episode to do. Let us know if you're listening and even like an episode on course, because it's very confusing.

**Kelly**  39:59  
You Yeah, like even now, like, it takes me a moment when I, when I find or experience some kind of error, I'll be like, Oh, yeah, of course. So it still doesn't immediately register with me when that's always the issue.

**Emma**  40:12  
For sure, let's talk, let's kind of start to wrap things up. by discussing templating languages and different ways to generate HTML. I remember, um, you know, one of my first jobs out of college like they were using pug and handlebars, which is very confusing to me, if you've never seen the syntax for this, it's like there are no opening and closing tags. It's just like the name of the element that you want to use. And like you can append classes with just adding like a dot class name. I recommend checking out like the syntax for this, but their templating languages. I'm not sure really the benefit to using these other than maybe developer preference, like, Is there an actual use case for these?

**Ali**  40:49  
Yeah, so whenever you're working with a back end, you can actually have that back end generate dynamic HTML content. So instead of having a hard coded HTML page that your developer writes from scratch, you can plug different values into that HTML document. And that's really where these templating languages shine. So you could almost use variables and loops and things like that within your HTML. Okay,

**Emma**  41:12  
that's super cool. The other thing to note is like static site generators, so there are several out there. I think Jekyll is one they have them for different languages, like there's um, Gatsby as a notable one, but there's also next and next one is view and one is react, and I honestly don't know, which is which view is that allows react, okay. I despise the people that did that mean to them so similarly. But essentially, they allow you to create, like react or view or whatever language you're using with that framework, applications and then they kind of almost dehydrate word compile down into basic or static HTML, CSS and JavaScript files, which can be just uploaded to a server. right as you do it. I'll upload it to like GitHub page. For example, you can host your static sites, or simple HTML, CSS and JavaScript through GitHub Pages for free. And it's super nice. But they also, I think, at least Gatsby rehydrates back into a react application in the browser, which is nice.

**Ali**  42:12  
Yeah, this is kind of like the modern version of Putnam handlebars. I'm not saying that those are completely deprecated or anything like that. But like most modern web apps are using a lot of JavaScript and server side rendering would be the way to usually do it. Now.

**Kelly**  42:29  
I don't really have that much experience with power handlebars. Like I've occasionally seen it in so late in code that I've inherited from somebody else, but I've never thought like, yes, I'm going to use one of these in building out, you know, one of our one of my sites that I built out,

**Ali**  42:45  
I don't know, I used to use them all the time back in the day, but I haven't been the dawn of react and view and such. That's kind of taking the place of them. For me.

**Kelly**  42:58  
It's always just strange. Thinking about how, like, libraries and frameworks just evolve over time. And it's because I learned and HTML for and the things that I'm building today, I'm still using something like the basic framework because obviously HTML still HTML, but like the general structure of how I code has just changed so much over time, because somebody created something that I'm now using. I don't know. It's just super weird to think about, because the whole thing about how the internet works that we talked about in the first episode, just kind of, I don't know, it all baffles me.

**Ali**  43:35  
Yeah, things change so fast. I feel that like a old person with development. Now, a lot of times where I'm just like, I remember the previous six days when we couldn't use classes for react components, we had to just use objects. But

**Kelly**  43:53  
way back, way,

**Ali**  43:54  
way back went back in my day. Oh my goodness. Let's also talk About one of my favorite tools, I think we've talked about this before, but Emmet, which makes writing HTML so much more enjoyable. Instead of having to write out all the tags from scratch, it allows you to use shortcuts and such to generate your HTML. Such a nice tool.

**Emma**  44:17  
This is really nice. If you're trying to do like, I use this for navigation a lot, because navigation when I build one, it's usually a nav tag with an unordered list inside with list items inside those list items or anchors and generally want to add classes these things. And Emmet allows me to just type like nav and then a bracket and then ul and a bracket and Li with the asterisk times five, for example, say five list items. And then inside of that, I need an anchor. And you just write this out in one line, like a few characters, and then you hit tab and it'll auto generate things for you. And you can even add classes, ideas, things of that nature attributes, using the shorthand and it's really, really useful. So nice.

**Kelly**  44:57  
I think the more and honestly like I could Probably look up all the things that you can do with Emmet. But I feel like I enjoy just kind of like playing in VS code to see what actually ends up working in the end. And I was like, oh, okay, so a lot of trial and error when I'm using Emmet. But I use it a lot. Okay, so I think that's enough talking about HTML, we can, I don't want to do a deep dive into all the all of the HTML things. So we'll just leave it at that. So let's kind of shift into shoutouts for this week. Ama, what is your shout out?

**Emma**  45:28  
My shadow is an old shout out, but it's a good one is this book by john jacket. I use this to learn HTML CSS back in the day. It's called HTML and CSS. But it's a visual guide. And it explains things that were previously extremely foreign to me like including padding margin, the box model from CSS, things like that. It does so beautifully. So that is going to be my shout out for this week.

**Kelly**  45:51  
I have I have the JavaScript and jQuery version of this book.

**Emma**  45:55  
Yeah, I use that one too. It was really good. I mean, I didn't use the jQuery portion of it, but the JavaScript was really, really useful I hope. I hope they updated it though for like ESX agree.

**Kelly**  46:04  
All right, la was here start at

**Ali**  46:06  
minus four Egghead. I have been making a lot of videos with them recently and also just using their content and Time to get up to speed with new job. So been really enjoying the little videos and having fun with it. So they're my shout out.

**Kelly**  46:22  
How are you, Kelly? So I was not on last week's episode, because we don't have all three of us on a guest episode. But I want to give a shout out to Daniel for I don't know staying married to me for five years because we celebrated our fifth anniversary on September 12. So that's a long time. It's a long time. I like waiting in the same room as somebody

**Emma**  46:46  
that's so cute because my anniversary with Thomas is September 11. Oh, we're one day apart. It's cute.

**Kelly**  46:53  
My dad got remarried on September 11 as well.

**Emma**  46:56  
Oh, wow. Are you? Are you gonna send you an answer of so many anniversary? Yes.

**Ali**  47:00  
I haven't we don't know any of them. Just

**Kelly**  47:04  
I don't know. Do you just like wake up one morning? Like we're gonna celebrate our anniversary today?

**Ali**  47:09  
No, we just have never done them.

**Emma**  47:11  
Yeah, I feel like it's really uncommon these days, I guess less common to have like a proper date because I feel the same way where it was like one of those things we talked about after the fact of like, let's just pick a day like that we think was around the time. I

**Kelly**  47:23  
think it's only like a specific date for us because we got married on that day, but like our dating anniversary is just, you know,

**Ali**  47:31  
the marriage one. Yeah, that's important.

**Kelly**  47:34  
So this was fine. If you liked this episode, tweet about it. We'd love to read your feedback. And we always read all of the tweets that come in, and this week, we'll be giving one tweeter a copy of HTML and CSS by john Duckett because Emma loves this book so much. And that is exactly why we post new podcasts every Monday so make sure to subscribe to be notified and leave us a review. See you next week.

**Emma**  48:13  
If you have multiple people editing the same Google Doc, it gets confusing.
