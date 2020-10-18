**Emma** 0:00  
Accessibility is the process of creating applications that are usable by people with various abilities and situations. As web developers, it's important that we design and build our applications to be usable by everyone. So in today's episode, we're joined by Wendy Fox, the design systems lead at LogMeIn to discuss nine common pitfalls of application accessibility and what you can do to fix them.

**Unknown Speaker** 0:22  
Let's get started.

**Unknown Speaker** 0:28  
Welcome to the ladybug podcast. I'm Kelly. I'm Allie. And I'm Emma and

**Emma** 0:32  
we're debugging the tech industry.

Vonage is a cloud communications platform that allows developers to integrate voice video and messaging into their applications using their communication API's. Whether you're wanting to build video calls into your app, create a Facebook bot, or build applications on top of programmable phone numbers. You'll have all the tools you need, formerly known as nexmo. Vonage has you covered for all API communications projects, sign up for an account at nexmo dot dev slash Ladybug and use promo code LD bu g 10 for 10 euro of free credit. Again, that's nexmo dot dev slash Ladybug and use code LDBU G 10 for 10 euro of free credit. Hey, Kelly, have you heard about this cool tool called AWS amplify? Tell me about it. It's a suite of tools and services that enables developers to build full stack serverless and cloud based web and mobile apps. You get to use whichever framework or technology you want on the front end.

**Unknown Speaker** 1:32  
That sounds cool will help me get up and running with things like hosting. Yeah, authentication. You betcha. Manage graph QL. Totally. How about serverless functions API is machine learning chatbots. file storage?

**Emma** 1:44  
Yes to everything. amplify is built, especially in a ways enable traditionally, front end developers like yourself, Kelly to be successful, because you can use your existing skill set to build a real world full stack apps done in the past would require deep knowledge around backend DevOps and scalable infrastructure. The amplify console also allows you to use a GitHub repository to deploy to a globally available CDN with ci NCD built in.

**Unknown Speaker** 2:08  
It's super cool. Where can

**Emma** 2:10  
I learn more, you can learn more about building applications with amplify at AWS amplify dot info slash Ladybug. Again, that's AWS amplify dot info slash Ladybug. So thank you so much for joining us. I'm super excited to have you here. Because for everyone listening, Wendy and I have been friends for quite quite a few years now, because we work together at LogMeIn when I was living in Germany had the air it's good. Good to be here, Chris, I'm on a podcast for you and something serious. That's so exciting. Yeah, never. You've never seen the serious side of me before. I would love to open the conversation just by having you introduce yourself and tell us a little bit about your experience working on accessibility.

**Wendy Fox** 2:54  
Yeah, sure. So um, my education is all over the place. So it's always a bit fun and complicated to explain where it come from, but I'll give it a shot. So nowadays, I'm a senior UX designer and delivery design system. And pretty much our accessibility efforts at LogMeIn and bu I workout which is like communication and collaboration. So I actually started out with applied linguistics, which usually is just a nice term for becoming an interpreter or a translator. And I learned a lot about how communication works and did my PhD and improving subtitles for audiences such as how to hearing or deaf audiences. So that was super interesting and got me actually interested in Yeah, understanding the visual communication side as well. So try to Yeah, learn more about that added a German diploma, which is pretty much like a master's degree in Communication Design. And after some time, as a researcher and teach our university, I really wanted to get out into the field. So I went to an agency that some of the good old groundwork visual design but design, learned a lot about that accessibility there we build a lot of websites were really had like clear client requests to build a make it accessible to all their users and customers. And now he logged me in being a researcher and designer, I try to really push accessibility to not be like a feature that we add, but just a Yeah, approach that everything we build is usable and accessible for all our users. And yeah, that's pretty much I guess, where I'm at now. And

**Unknown Speaker** 4:34  
I love that I love also that both you and Emma have worked together. I just want to turn this into an episode of you telling me all the weird things that Ms. Done, but I guess we should stay on topic we don't have.

**Unknown Speaker** 4:46  
So why should we care about accessibility?

**Wendy Fox** 4:49  
Oh, there's so many things and usually it would be great if you could stop right after saying because it's the right thing to do. Right? You just want to say it's the right thing to do. I don't need to give you a examples like, stop actively excluding people, it's, as I said, not about adding features. It's, it's a civil right. And in the States or in Germany, it's, um, if you look at, I think, who says it's about 1 billion people nowadays that live with at least a basic disability or something minor, and that's about 15% of everyone around the world. So it's not like a tiny target group. It's like everyone, especially if you look at aging population, it's more and more people that might not even be visible. And some statistics, of course, you can save important because you can minimize legal risk, or it just improves best practices. It proves your SEO, it improves responsive, responsiveness, usability, but it just benefits everyone. So if you look at like guidelines and stuff, most of those, I'd say 80 90%, they just benefit every user, they are not specific to all that that audience that might be blind, or that audience that has issues with hearing. It's just building really inclusive, and well designed, usable products. And that gives me like, back to like, going back to that thing. It's just the right thing to do. And it should not even be a question, right? I think

**Unknown Speaker** 6:16  
you made a really important point there. Because I feel like we always default to accessibility being about blind users. And that's absolutely not the case.

**Unknown Speaker** 6:24  
Yes, there's, oh,

**Emma** 6:26  
yeah, I think people forget that. It's, it can be a physical disability where, you know, this could be temporary, it could be permanent, you might have a permanent physical disability that requires use a keyboard only, or if you don't have a mouse, or the ability to use a trackpad, like that's a temporary disability. You know, if your arm is in a cast, that is considered a temporary disability, and then we even get into cognitive disabilities. And the this affects things you wouldn't even think about one of the tips, you know, later in the episode, we'll discuss a little more, but there are users who have difficulty remembering what tasks that they are trying to complete. So if you're popping up modals, or toasting everywhere, or if you are using your placeholder text is a label and they're typing and the placeholder is gone, they can't remember what they're doing. So I'm looking forward to kind of diving a little bit deeper into some of the common pitfalls web developers make, and how we can fix them.

**Wendy Fox** 7:18  
And that is not even like specific to someone who has a disability like that, like not ever happened to you that you start filling in a form. And you have no idea what that field was about. Because your focus is all over the place, you have like 20, tabs open. So so many things are just common usability and good user experience design. And you can go even even further and yeah, there's like permanent disabilities and temporary, but there's even this random stuff, like you want to use your device outside in the bright sunlight. So dark mode, or high contrast mode is super useful, or, like, I don't know how it is for you. But whenever I'm on a plane, and I watch a movie, I'm sometimes so exhausted or having that you're you're in so just like what should be subtitles and don't deal with noise at all. It's too exhausting. So there are all these great innovations and things that we already benefit from that came from accessibility features. So to say so, yeah, they just scale. It's just like all these things. They scale to population, and we all benefit.

**Emma** 8:22  
Yeah, I was watching, like the iOS 14 release. And they were talking about, there's a lot of new accessibility features that came out, one of which is like the back tap on the phone that you can set to different controls. And it's like, you know, like, I heard people saying, like, Oh, it's an accessibility feature. But it's useful for everyone. Like, well, you know, let's make our web apps or all apps usable for everyone.

**Unknown Speaker** 8:43  
So let's talk through some specific types of accessibility. Because I think I personally, I am very much like a keyboard navigator. whenever I can. I use the Mail app superhuman, because I can do everything with keyboard shortcuts. But there's more to it, obviously, then, than just that four types of accessibility.

**Emma** 9:05  
Yeah, I think the three biggest that we as web developers need to concern ourselves. Those when we're physically coding something, are screen reader, accessibility, high contrast mode and keyboard navigation. And I would say high contrast mode is one that people don't necessarily learn about. But it's definitely important. And I think I don't want to talk too deeply about them. All right now, because I think that in these next nine tips that we discuss, they'll pop up in conversation, but those are generally the three that we as web developers need to be concerned with. Where do you think motion falls in that list? Whoo, good one. I just I think about it all the time because I'm constantly trying to convince clients against using like parallax scrolling and things like that.

So I think a lot of this comes from the design side. So you know, we could do many hours worth of work, or podcasting about all types of accessibility from design Inception through testing. Motion to me is something that developers typically work on with designers. And I think that's something that

we're definitely definitely should be talking about. That'd be really cool episode to talk about design accessibility. I personally think it comes a combination or collaboration between design and development

**Wendy Fox** 10:20  
that makes sense. And it ties back in with like, awareness and empathy and being aware of what kind of disabilities are out there, what kind of requirements are out there from users. So if a designer starts thinking about motion at the same time, they should be aware of that, okay, someone might get sick from the fact or someone might feel not just or if you start adding stuff like flashing lights, those might even induce seizures. So it's all about being aware and empathetic and knowing like okay, even though we have this, this great motion I want to add, I'm also thinking about the version if someone disables the added that browser on their native system, allow them to experience my product or website without motion sickness, definitely.

**Emma** 11:03  
So I want to transition us we're gonna start talking about these tips now. But before we get into that, I wanted to find two different things. The first is WIC ag. The first of all, there are a lot of apps that how you

**Unknown Speaker** 11:13  
pronounce it in regards to or is that like a very Swedish thing to do to just pronounce the acronym?

**Emma** 11:18  
No, no, no, people say that we CAG. At least I do, like we did IBM when I was there. But there are ironically a lot of acronyms and accessibility, which in and of themselves can be inaccessible, especially when you see the truncation of accessibility, the long word from from that to a 11. Why, because there are 11 letters between A and Y. I just find it a little ironic. But WIC ag is the Web Content Accessibility Guidelines. And they're published by the web, or the Web Accessibility Initiative of the World Wide Web Consortium, they basically govern on the standards for what is accessible, how accessible is it, you might hear double A, you might hear triple A, these are different levels of accessibility that may or may not need to be legally met. Aria is what we as developers need to be very familiar with. And we're going to talk about this in our first tip. Aria stands for accessible, rich internet applications, it's really hard for me to slow down. But they are attributes that you can add to your HTML to make it more semantic for screen readers. They're not just attributes, they're also states, and whatnot. This is going to bring us into tip number one, let me kick this off. And then I'll see how Wendy feels about this one, because this is a big fight with developers using semantic HTML, semantic HTML or HTML elements. And if you haven't listened to our episode on HTML, go do that. It's already published from the season. But essentially, semantic means there's some underlying meaning. So I as a developer can look at an a tag or Scrivener can look at an HTML tag and tell you what it's used for. So this could be a main or a body tag or head or a header, things of that nature. The non semantic elements are going to be things like given spam that are generally just wrappers you can attach things to and we see a lot of that with frameworks like react, there are instances where you need to build something, for example, design systems one day, you know, you build custom components. And often we can't use the native HTML elements and select a drop down select is one example where if you want to style a select drop down, you actually can't use the native HTML element at the moment. So you need to use a combination of unordered lists and list items. But unfortunately, what that means is our screen reader would go to that and say, Oh, this is a list, which technically it is, but it's it's also with form input. And so Aria comes into play here. With Aria roles, we can actually tell a screen reader, hey, this is actually a select drop down. And it's expanded, we can give it its state, we should be hooking up state. So if it's expanded, it needs an aria expanded attribute, and things of that nature. Wendy, I'm sure you can attest to the I don't know the right word for this. But often this is one of the biggest culprits of inaccessible applications is, you know, developers, especially with react Another popular libraries and frameworks, you see a lot of divs floating around and not a whole lot of ARIA attributes.

**Wendy Fox** 14:09  
Yeah, no, definitely, you're perfectly right. And I feel like it's one of the main goals and making something accessible is just like, make it readable and readable. In this case means for screen readers, for example, is that at every point, wherever you are on a website, or on a product,

**Emma** 14:27  
the person using it has to know what this is, how to interact with it, what's the status? What can I do also being warned what could happen next, and you can easily assure this, which is using really semantic HTML. So yeah, I think like you want your user to know where they are, what they can do and what happens. And if you don't do that, they they will get lost or we get frustrated, they might stop using it. And that's something you don't want to happen. And that's again, kind of scales to everyone, right? You want to know what happens when you interact with something The page and if you imagine every website was just like a big block of text and you don't know what's going to happen when you click on it or interact, you're not going to use it, you're going to leave and find something else that is actually usable, like people using assistive technology and screeners aren't just sitting there tabbing through your UI, they actually have shortcuts to get to landmark regions. So we can think of like a webpage as having an anatomy, it has a head, it has a body, it has a main content area, it has navigation. And these are all major landmark roles that people who use screen readers don't sit and tab through, they actually have keys that will take them there. But if you're using divs, for everything, they can't do that. And they actually imagine trying to drive on a road and not know it, like not being able to see what's in front of you. Like how horrible would that be

**Wendy Fox** 15:44  
also dangerous? Or imagine reading a newspaper and you have to read the content of every article. And usually you just want to start skipping through the headlines. And that's pretty similar. I guess

**Emma** 15:54  
that's a way better analogy than mine.

**Unknown Speaker** 15:57  
But question, didn't semantic HTML replace some of the ARIA roles that used to exist? And that semantic jazz preferred? Okay.

**Emma** 16:06  
Yeah, for sure. Like, they used to have like, role equals main, but now they have a main tag, right? Um, that's the other thing. Like if you're using a semantic tag, and I've seen this done, like, you don't need to add an aria role. Unless the which I don't know why you would do this, like, you could technically have a semantic tag like me, and and set role equals navigation. Like, you can do that. And a screen reader will see that as a navigation element. But why would you? So my point is, if you're using a semantic element, use the right one. And you don't need to use roll. It's just redundant.

**Unknown Speaker** 16:37  
It makes sense. All right, so let's go on to tip two, which is learn how to and when to visually hide content. So I'm going to cover one piece of this and then hand it over. And pieces, images must have alt tags. And one of my friends, Ilana Davis, basically explained this as your your alt text, or the alt tag should be like you were describing something as if you're talking to somebody over the phone. So you're describing a certain item, a shirt you're wearing or your phone, whatever it might be, they cannot see it. So you need to be descriptive about what that thing actually is, as opposed to just saying phone.

**Wendy Fox** 17:15  
Yeah, totally agree. And I think that also ties back into to being good at user experience design, being aware of what is what is decoration, and what is relevant to be able to use the product or page and if an image has a clear meaning, and a purpose. And this needs to be explained in a way where it's not just like, Hey, there is a phone was actually like, Hey, this is the place where you click if you want, like, I don't know, have an incoming phone call displayed or something like that. But then of course, there's also like all these icons combined with text, where the text is already explaining what the icon is about. And then you just want the screen reader to skip it. And not say like phone phone. Alright. And yeah, so

**Emma** 17:56  
that's the thing. Like, I see this as a huge mistake, where I will see Aria labels on everything. Okay, let me explain the difference between Aria label Aria labeled by and one you shouldn't be using them. So first of all, if your image is decorative, so an icon next to a label, a screener doesn't need to know about it necessarily, because it's decorative, right. And that's kind of when he was just stating I believe, you need to use Aria label, if you have a, let's say you have a context menu. And there are only icons, there's no text in the UI, and it does some kind of action, you need to tell the screen reader, hey, here's the label. So like, make a phone call, right? That might be an aria label for a phone icon that actually would execute a call when you click it. If your if your image has visible text in the UI, and the image is relevant. At that point, that's where you use Aria labeled by and it just accepts the ID of the element that labels it. This is very similar to described by as well if you need additional context. But yeah, if you're if your icon is decorative, please, you don't need an aria label on it. And also, just maybe try not to put icons as actions that don't have visible texts. And the Y is just bad for all users.

**Wendy Fox** 19:12  
So yeah, definitely, there's so little icons and visuals that are shared across all cultures in the world. So you might think yourself all this is like everyone uses it like that. And then you easily find a culture or area was not used in that context and super unclear. But it's something that just came to my mind. That is I think also a good recommendation is to to never think of users with disabilities as an isolated target group. They don't all sit in the same company and work together, they usually spread everywhere and might be working with someone who is sighted. So if there's something an icon or action where it is important, irrelevant what it looks like, for example, like storing something having a star is a favorite. And there might be a situation where they talk about like blind user and a sighted user and it might be Be just common to say, Oh yeah, use the star or click on the star. Then of course, you want to mention, this is the thing that looks like a star. So never think of someone being isolated. And they just sit in their dark room and tab through stuff and listen to it, they're interacting with people that might have other disabilities, or most people are none of them. So there's always this context of different people using the same interfaces. Having the same experience, even though the access might be different.

**Emma** 20:27  
Definitely. There are two other issues that I've seen. And I've been a culprit of doing myself. One is, do not place code snippets inside of images, there's a beautiful website called carbon that allows you to create super nice code snippets and share them. But unfortunately, they're just static images. Actually, I think you can download them as an SVG, in which case they would be more accessible. But you should use something like just which interacts with GitHub. So if you're trying to share code snippets, use just it's also copyable. versus just having a static image. And also, understanding how to visually hide an element without removing it completely from your document object model is very important. display none will actually remove your content from your accessibility tree.

And your accessibility tree. Wendy, do. Have you learned about this? Like, do you know what it is?

**Unknown Speaker** 21:21  
I noted?

**Emma** 21:23  
I think it's I think it's basically like the DOM or like what gets constructed from HTML, but it's for blind users with assistive technology. And the accessibility tree looks a little bit different than the DOM. And so you know, when you're using display nine, just be aware, no one's gonna be able to access your content if you want to visually hide something. So here's an example, if you need an RA, if you need a description, let's say, and you don't want it to appear on the screen, but people using screen readers need some additional context. So you want to use Aria described by to link to that text. But you don't want it shown in your UI. Some people might put display none on that. But screen readers have no access to that. So don't do that. Instead, what you can do is you can play with your z index, you can set it to be at the bottom of the stack, you can set opacity to nine, you can set width and height to zero, all of those things combined will not remove it from your DOM. So it's still accessible, but it's just not visually shown.

**Unknown Speaker** 22:17  
Google has a pretty cool guide on the accessibility tree. It's not super long. But my favorite part is that they have a screenshot of Google from 1998.

**Emma** 22:28  
Nice. I was a small child. Let's, uh, let's shift let's talk about using Aria. Again, let's talk about updating state. Why is it important to update state? Well, as visually sighted users, it's pretty apparent to us when a modal is open, or when a drop down menu is expanded. But unfortunately, HTML, these states don't get reflected to our users or visually impaired users, or our blind users when they're interacting with our sites. And this is where Aria is going to come back into play. So for example, if you've got a drop down menu, and you want to use the ARIA expanded attribute, and what you can do is just link it in with your state link and with your react state, and just have it update, you know, use a ternary and say, Hey, if this is open, you know, Aria expanded is true. Whatever you need to do to get that working with, it definitely needs to be apparent. Same with modals. Aria visible is true, very important.

**Wendy Fox** 23:24  
Yeah. And I guess there's just imagine something that we're not in a video call right now. So someone would start tabbing through the interface and reach like the mute unmute button or the shirt or your camera button, you want to ideally communicated like, are you muted or not? Are you showing your camera or not? And that's also I think, a state that you would add as an attribute. Oh, that's a

**Emma** 23:45  
good one. Yeah, building meeting software, you know, that's an important one.

**Kelly** 23:50  
All right. Tip number four, don't disable focus dates, unless you have clear alternative styling. I'm going to be entirely honest, this is something that I struggled with when I was earlier on in my development career because I was like, This outlines really ugly, I don't want it, but it serves a very important purpose. So if you're not restyling those elements to show some kind of focus date, you really really need to keep that outline there.

**Wendy Fox** 24:19  
Yeah, and that's something where usually love to to challenge designers because there's like, also with colors and contrast. They're often like, oh, but that's like, not enough. It doesn't even have choice and I cannot properly design and usually I would reply with like, if you're a good designer, you can you can design within limitations, and you can come up with a design that looks great and is still usable. So I feel like that is one of those like okay, that's a great challenge for you to come up with with a focus day that looks really cool and really fits your product or website.

**Emma** 24:51  
I love that straightforward approach. Like we have also recorded an episode this season on like, cross cultural communication and I feel like me I have worked with German colleagues long enough and other European cultures long enough to like, you know, understand the straightforward feedback. But I can only imagine, like being a designer working on a cross cultural team and, and saying like, Oh, you know, when do you like, I don't have enough colors like I just having you come up to me and be like, if you're a good designer.

I love it. I love it so much. But it's true. It's absolutely true.

Yeah, this is something I have, I've definitely done incorrectly for a long time. And the way I like to think about it is, if I were to come up to a web page and have focused somewhere on the webpage, I should instantly be able to see where it is, you know, if someone came over and looked at my screen, they should be able to instantly tell you where my keyboard focuses. And if they can't, that's a huge problem. And you need to fix it.

I love to test my my dev team on that as well. So when they submit something new, I just sit there and I tab through the site, and I'm like, Do I know where I am? Can I see where I am? If not, you need to fix that. Also, it has to be in a logical sequence. We're going to talk about that in just a couple of tips. But yeah, so many things. And they all I've seen

**Unknown Speaker** 26:05  
the word

**Wendy Fox** 26:07  
focus stayed all over the place. How do they do that? What does the code look like to produce an outcome like that? I can

**Emma** 26:13  
tell you, I can tell you, I'm going to tell you when we get to Tip number six, because that's where we're going to talk about it. But let's take a really quick break. And when we come back, we're going to talk a little bit more about color contrast. Kelly, remember how we talked about AWS amplify, at the beginning of this episode,

you mean a suite of tools and services that enables developers to build full stack serverless and cloud based web and mobile apps? Yeah, and you can use your framework or technology of choice on the front end. And since we're talking about react, we want to be sure to point out that there's a free react tutorial offered by amplify

what will that tutorial show me,

you'll learn how to build a react app and quickly get up and running with things like hosting authentication and manage graph QL. What else you'll also learn how to build serverless functions, API's, machine learning chat bots, and storage for files, like images, videos and PDFs. That sounds great. It seems like amplify is built in a way to enable traditionally front end developers to be successful. That's because you can use your existing skill set to build real world full stack apps that in the past would require deep knowledge around back end DevOps and scalable infrastructure. You can learn more about building applications with amplify at AWS amplify dot info slash Ladybug. Again, that's AWS amplify dot info slash Ladybug. Okay, so now let's go into tip number five, which is talking about color contrast. And I think we can go pretty deep into this, but it is, you know, not using a super light color texts on a semi light colored background, this difficult to read. And I know, this is not my area of expertise, but I know when it comes to like their ratios that exist, and I think there are different scales where the ratios exist as well, depending on like the rating you want to go for. Am I making any sense whatsoever? Yeah, but I think Wendy should explain them. Yeah, that's why I'm just like, I can't do this.

Just so people know, when I was at LogMeIn, Wendy created an accessible color palette, among other things like you started the accessibility champions group within LogMeIn to champion accessibility. And one of your first big tasks was creating a an accessible color palette. So I would love for you to explain this.

**Wendy Fox** 28:20  
Yeah, so color is really a complicated, but super interesting topic. So the one thing you need to know is color contrast. There is some discussions around it if it's the best solution ever. And some examples show that okay, it's maybe there might be other measures out there. But the fact is, it's the one we have right now, it's the one that's mentioned in guidelines, and it's the one that can help you to build a more accessible product. So the request is that there's a minimum ratio of luminosity between the two colors you use for the text and its background. And usually, you say you go like three to one or 4.5 to one, there's something for for small tags that will make it readable. So yeah, the color manual that we build is actually just like, okay, here's the color blue, if you want to use it for tox. This is how you can combine it with white background or black background. So it really gives you a do's and don'ts list. And this is something that is just yeah, it can benefit users all over the place. So for designers, it's super important to check their designs, if they work without color at all, they should check if it works. Um, if it gives enough contrast. There's some cool plugins that you can use, for example, in sketch on browsers to check this. But the general goal is to just create enough contrast that will not blur into like a mix of colors. So does that make any sense? Yeah,

**Emma** 29:48  
yeah, and I think I'm so bad. This is the one area of accessibility I I like this is the one I have the hardest time complying with because when I create my conference talk slides, I always Want the prettiest color palettes with like pink and orange as my theme? And guess what, they're never contrast accessible. And this is the one I just fight with all the time, because you'll get a lot of arguments of people being like, Well, you know, you can't create nice looking design, it's just gonna be like black background and white. Like, yeah, I think you're gonna have to give up a little bit of your design creativity, depending upon, you know, how, like what you would envisioned. But what's the trade off, right. And there are a ton of different chrome and I believe Firefox plugins that you can use to simulate grayscale and other visual impairments as well. And additionally, now at least Chrome, I think Firefox as well, they have built in color contrast. So if you're using, if you are checking out your UI and your dev tools, they will actually tell you if it's double A or triple A compliant,

**Unknown Speaker** 30:52  
that's what I was looking for the double A and triple A, that's what I was missing. Okay, so I think this is really something that that developers can champion as well. Because if I am not the one who's making the decisions on the colors, I receive a design from a designer. And yes, the design, the designer should know about this. But at the end of the day, I'm the one who's building it, I need to push back on on color contrast, if it's not there. Absolutely. Those are some great tools, where you can check in. Also for color blindness, there are some checkers, where you can make sure that your great green and red buttons are actually being perceived as different colors and understandable. And of course, you shouldn't use color as a differentiator. So always have something else that explains the difference might be a label, for example. So yeah, I think just looking for the tools in your environment, there are definitely there might be a browser, Chrome, Firefox, or sketch plugin, and just do a quick chat before we release anything,

**Emma** 31:53  
for sure. Yeah, I feel like there are way more than nine tips that we could go into. But if you want more than that, you'll have to follow Wendy on Twitter, which we'll plug at the end. Anyway.

Let's move on to tip six, because we had touched a little bit on this earlier, but keyboard traps, the bane of my existence. So basically, if you are navigating through your UI with the tab key, at no point in your journey, should you ever be trapped. I see this a lot in modals. If you have a modal that's open, sometimes you'll be able to tap in and you will never be able to leave and then it's just horrifying. And you're stuck there. I live here now. Yeah, for real. But the other thing is not only should you not have traps, but they need to be logically ordered. So here's the real problem. Often we're using CSS Grid, CSS Flexbox. As we have different viewport sizes, as you know, we're, we're designing mobile first. And then we go to iPad size. And then we do portrait, iPad, and whatever we're getting these big displays, we're often shifting around our grid layout. And the issue with this is we are not actually changing the layout of the elements in our DOM. And so when we're navigating with our tab, it's going in logical order of the DOM order. And if your Dom order is not the same as your UI order, because you've changed your CSS Grid or your Flexbox layouts, it's not going to flow logically and your tab in your focus is going to jump all around the UI. And this is a huge problem. I haven't been able to fix some of these issues that I've run into in the past. But if you do want to create a logical order, you might want to look into tab index, which is an attribute that you can add on to your elements that explicitly will prevent focus, but it can also logically correct them. So a tab index of negative one will prevent focus from ever being set on an HTML element. tabindex of zero, I believe is the default. And it'll basically say, focus this element in the logical order of where it falls in your DOM. And anything above a zero is going to flow in order of its numerical value. So you know, a tab index of one will be focused on before tab index of five. So just be really aware of that any native form elements. This is again, why semantic HTML is so important, because any native form elements will automatically receive focus.

But yeah, if you're creating custom widgets, custom components, and you have a div wrapper, you might have to set explicit tab index on those just be very careful about that

**Unknown Speaker** 34:24  
especially with forms I think that's like I Nothing is more infuriating. When I'm filling out a form I'm like, first name I just want I just to last name, city, and just like jumping all around and like, please, tab index is your friend, please use it.

**Wendy Fox** 34:37  
Yeah, and I think this especially keyboard accessibility, it's one of the easiest one to test. You don't need a plug in and you don't need to learn how to use a screen reader. You can just sit down and do it yourself and just check for can I reach everything? Does the order Make sense? And do I not get trapped? For sure?

**Emma** 34:53  
No, I've tapped and I can't get out.

Oh my gosh. We need to create a meme. I'm gonna tweet that out for now.

All right, let's talk about tip number seven. Okay, so what we talked about motion earlier, but guess I put this in our outline. So let's talk about animations. When did you have to explain why motion can be so damaging to some of our users?

**Wendy Fox** 35:20  
Yeah. So it became clearer and clearer that they're quite some people that can become motion sick just from things that are moving around. But it's not only that, it's also, if you're struggling a bit with pocus, it might be because you're multitasking like crazy. But it might just be that you have a disability that makes it hard for you to focus on content, you might prepare, prepare to Yeah, disable all motion on a website or in a product. And that's why you should always, whenever you implement a motion, allow users to disable it, there are settings in a browser and native desktop that I think they are just like, yeah, reduce motion on Mac, for example, and your animations and motions to just react to that and turn off if the user does not want them.

**Emma** 36:09  
They can also be for performance reasons, like if you're on an older device, and your G your graphics card, or like your CPU or whatever you're using, cannot handle the that amount of action, I guess I don't know, right word that can be harmful to users. And they might want to disable that.

**Wendy Fox** 36:28  
Yeah, oh, they're just bad. And you don't want to see them.

**Unknown Speaker** 36:31  
parallax.

**Emma** 36:32  
I okay, I'm sorry, when parallax is done, well, it's done really well, and I will die on this hill. But it shouldn't be done in every single section of your website. As you're scrolling down a page, I'm gonna redo my portfolio to be everything parallax. And it's gonna haunt you. I'll just never visit your portfolio. Congratulations. Oh, yeah, Wendy, that's a great idea, you should be able to scroll in all four directions. Oh, my God, our experience in the browser,

**Wendy Fox** 36:58  
we build a website like that once where you could go up and down, but also to the sides, and it felt like you could really get lost. And then you would need like, directions to go back to the homepage.

**Emma** 37:08  
I'm going to make that after this call. I'm going to make this little troll site. And I'm going to put Kelly's name all over it because she was my inspiration. Ah,

**Unknown Speaker** 37:15  
what's your portfolio?

**Unknown Speaker** 37:16  
Yeah, for sure. It's now my portfolio.

**Emma** 37:19  
I work at and Parsons companies I know how to code. Alright, so now that I'm done being weird, Kelly, why don't you tell us about you're done being weird for the next five minutes.

**Unknown Speaker** 37:30  
Um, speaking of next five minutes, let's go into Tip Number eight.

**Emma** 37:38  
Thank you, I'm really good at that. provide alternatives for time based content if it's like video content, or audio content, so closed captioning and transcripts for audio of hot content. If you're hosting a podcast, please create transcripts and also just unplug this, I'm going to let Wendy speak in a second because she has an absurd amount of knowledge on this working at a time based media company. But we as a podcast use otter.ai to automatically transcribe all of our episodes. And then what we do is we put them up on GitHub, we merge in our pull request, and we link to them on every show. And then what's nice is the community can go in and edit because you know, it's just an automated translation tool. So you will get mistakes. But it's still it's better than nothing better than nothing.

**Wendy Fox** 38:24  
So whenever you provide any content that's auditive, or visual, you want to provide the other one as well. So if you provide something that's a video, you want to provide captions, or transcript as well. And if you're really fancy, you can also think about sign language interpretation. So if you really want to cover all bases, think about something that is written that can be read by a screen reader or someone that just prefers to read. Or for something that is video based. So that for example, could be sign language interpretation. Or you're just offering the audio directly. And if you have at least two, two of them, usually,

**Emma** 39:00  
yeah, have a good it's like a compliment. It's the compliment of your primary media source. You need. If you have audio, you need visual. Did you see two on the iOS 14? release that on group facetimes? Now if they can detect someone's doing sign language, they'll move them to the front of the slides? Yeah, super cool.

**Wendy Fox** 39:18  
Yes, I was super excited when I saw that feature. And it's also something we sometimes hear about his requests about our video meeting tools is like, mostly, it only reacts to the voice to show the the speaker and what is someone using sign language, it's not detected. So that's definitely a feature I was waiting for. And I'm super keen to to hear that. So cool.

**Unknown Speaker** 39:40  
I wonder how that was done. Just like the technology behind it. motion detection. And I guess like, yeah,

**Emma** 39:46  
I think they definitely have, yeah, they have AI that can detect sign language now like because they're playing around with auto captioning on Sign Language participants, which is really neat. I'm curious if that's open source or not.

**Wendy Fox** 39:58  
Yeah, that's a whole lot of different space in super interesting to think about how can you perfectly integrate someone who's dependent on sign language into a meeting where they want to watch the speaker, then they all want to watch the slides. And they also want to watch the sign language interpretation. So there's so much space for innovation. And I think AI will, will help a lot to really make stuff accessible and easy to communicate.

**Emma** 40:21  
The first conference talk I ever gave was react girls in London, and they have live captioning, as well as a sign language interpreter, I believe maybe not, but they definitely live captioning, which is super cool. And I feel like especially now that we're in the age of virtual conferences, please look into that as an option because live captioning is super useful. Also, I just want to say to the auto generated transcript grips that I've seen are absurdly funny sometimes, like, they think that you're saying, especially when you get into like technical terms,

**Wendy Fox** 40:54  
it gets really speak another language. So your English transcripts of German conversation, which I think also relates to to accessibility, because you always want to make sure that if there is another language on your page that you define the language of like a word or a phrase, or, um, I don't know, a short piece of tax, because it will sound really weird when a screen reader will try to, I don't know read something French in English.

**Emma** 41:21  
I would love to hear that just for shits and giggles. But let's let's move into our last tip. This is one that I see all over the interweb. And this is not relying on form placeholders use labels. When you can you explain why it's it can be harmful to users when we rely solely on placeholders? Yeah, I think it's ties back into the whole focus thing. And all of us multitasking like crazy and you start putting something into a form, maybe do something in between or get lost. And then you come back and you have no idea because the label disappeared. And you don't know what the forum is expecting of you to fill in. I wonder if someone's ever built the worst website. Like they explicitly tried to build the worst website in the world. Worst website in the world www Wow. Okay, I'm gonna go look for a domain after we're done recording today, cuz I mean, it's funny. But no, like, imagine Can you imagine a website where like, you're trying to complete a task and like, like, everything's moving and you're getting toast notifications, and like, your UI is changing color, like, oh, my goodness, that'd be such a fun little like, horrible project. One of my favorite ones is entering in your phone number where it's like a start stop timer, and you have to stop at the right time to enter the correct number. Have you ever seen that? Well, no. Oh, yeah, it exists. Again, it's on that same line of intentionally bad user experiences.

**Wendy Fox** 42:41  
Yeah, there's some good ones out there.

**Emma** 42:43  
Yeah. What are some other funny like, I've had this issue a lot, especially moving to to foreign countries now on trying to fill out forms and stuff. Like, I get so frustrated when they told me that like, like, my, my phone number is not a valid format, or like, Oh, I get so angry. Every time I see a form validation, that's like, um, your name is not a real name, because it's too short. Or it's too long.

**Unknown Speaker** 43:06  
That That one I was just going to call it specifically like, yeah, your your last name, being two characters means that it's not actually a real last name, for example, is not cool.

**Wendy Fox** 43:16  
even happened to me with three letters? Oh, yeah, that's and that's, I think also ties in relevant with accessibility that you want to have like real great and clear arrow validation and feedback. And, like, you actually want to prevent users from getting that info after the fact that they put in something like a name or a phone number. If there's anything any limitations, or clear like guidelines, then give them upfront. Like with passwords, you don't want to learn afterwards that it's missing this one sign and this one letter, or it's one too short, tell them beforehand, and help them succeed and not just constantly forced them to go back and create all this frustration and forms are already frustrating from the start. So that's I'm making worse phone number forms in particular, like if they require, like a certain format for like, the area code for us numbers being in parentheses, and then having a hyphen later, but they make you enter that in yourself. And they don't actually, they just they just tell you that the form fails unless you entered into a very specific format. Yeah, we'll try to enter a foreign number in America.

**Unknown Speaker** 44:18  
Yeah, exactly. Oh,

**Emma** 44:20  
I have this problem too, because I sub bank accounts in the US and I don't have a US number. And even if I were to, like I tried to buy a Skype number, just to have one for all of these two, factor authentications. And they're like, it won't even accept it. Not only that I was buying a camera online the other day, and I was filling out my zip code. And so we just have codes. It's like three digit or two digits, space, three digits. But that space is evidently very important. All form and click Submit. It was like, Please enter your zip code in a valid format and like you, why can't you parse like a zip code without space like I just I don't get it. I don't get it. I think that's another thing. valid form labels, especially if you haven't international audience, they use different name conventions for like zip code versus the postal code, like having that kind of the the length of the choice of language being upfront as well. Oh, we could go off on this. I have. Yeah. I think as like someone living in a foreign country, I've experienced so many headaches. Yeah, just everything. I mean, like, this makes me so mad. Because going back to my bank accounts, like I, I have very prominent banks that I use. And let me tell you that some of them do not accept foreign numbers. So I have to add my mom's phone number, the one that does add a foreign number you can't get two factor authentication to and there's no other way to get two factor authentication, like through email. So anytime I want to do anything with my bank account, I have to have, make sure my mom's awake, and that she can tell me what my code is. It is horrifying. I'm like, you're an International Bank, where it's a Travel Card. And I like, I'm not the kind of person but like, you get pissed off at someone who's working or whatever. And I always preface my conversation to them as like, this isn't personal, but I'm just venting, because, you know, you're a Travel Card, and like, I should probably use you abroad, but like, I can't enter and I just like totally went off on them. And I felt really bad about it. But let me tell you, you know, you got to make your stuff accessible.

**Wendy Fox** 46:19  
But which country had the worst forums?

**Unknown Speaker** 46:22  
That's, that's a good question, which have you from your experience, which has had the worst forms?

**Emma** 46:26  
Capital One, I can't, I can't Well, not the worst forms, but like the worst policies for like, making yourself accessible. What's weird to me is like, they accept my foreign address, like, they'll send me mail internationally, but like they won't accept my foreign phone number. So it's just like inconsistency is with grabbing data from your users. I mean, we don't think about that, and how that even in and of itself, makes that certain aspects inaccessible to people. Yeah, that was I was not happy about that. In any case, let's wrap things up. Let's let's just mention a couple tools. If you are looking to just very quickly test out some of the code that you're writing, there are a couple tools that you can use to do. So Google lighthouse is one it's very easy, you just like open Chrome, you run you know, a search on your page. It can be your local dev environment, too. And it will give you a little bit of a report. Just be aware, it doesn't catch everything. They are some high level quick wins. There's also x, which is an accessibility tool, and color contrast checker from the W. I don't know it's one of the acronyms it might be WIC AG, it might be WCC, not super sure. But we're gonna link all these in the show notes for you to check out. You know, the thing is people hear accessibility and they think it's boring or not interesting. But like, it's important, and it can be very interesting. If, like, this conversation for me was very interesting. I enjoyed it.

**Wendy Fox** 47:51  
I agree. I really appreciated that you guys invited me and I agree that accessibility is really not a boring topic. And I nowadays I rather see does inclusion, it's Yeah, just make sure it's something you do from the start. Just focus on building a product that's usable and accessible to everyone or your users. And have fun learning about like all these stories and experiences and yeah, don't feel limited rather see it as a challenge and opportunity to build a really kick ass product. I love that

**Unknown Speaker** 48:20  
especially seeing it as a challenge in particular.

**Emma** 48:24  
Awesome. So let's just wrap things up talking about shout outs. Kelly, what's your shout out for this

**Kelly** 48:29  
week. So my shout out is my one of my pandemic purchases was buying an exercise bike. I did not buy a peloton because I don't like spending that much money. So I got a Schwinn IC for which was \$800 versus 2400. And I just used my iPad to stream the peloton app, which is total as a month and it's the amazing half going like around the circle. The only difference is that I don't get to join on like the leaderboard or whatever, but I just passed 25 rides on my bike using the peloton app. So that's my shout out good job me.

**Emma** 49:02  
That's amazing. Wendy How about you? Do you have a shout out for this week? I was not prepared for a shout out Come on anyway person. It could be a book it could be a place you've been to you've been on lots of fun trips. Give a country a shout out a country Oh my god. Yes,

**Wendy Fox** 49:14  
it's a that's a bit of Don't tell anyone. It's the first time I've been to Austria in August. It was our neighboring country, but I guess I always thought I can still visit those when I'm old and don't want to sit on planes anymore. So yes, it actually was my first time in Austria and it was amazing and fantastic and the landscape is breathtaking. And I'll definitely be back and hike all them. I love Austria and I don't know if you ski but I relearned to ski in Austria a couple years ago and it was one of my favorite trips that I've ever taken. I can only imagine.

**Emma** 49:51  
I want to shout out to max Strieber who lives in Austria. That's not my shot for the week, but he's only he's the only Austrian I know. So like shout out here. heading to a shout out. Wow, cheating.

Ha. Um, anyway, so mine is that I met my Goodreads goal for the year. I read 50 books so far this year. For me that's not a lot. But I've been reading a lot of hefty big books like I just finished a little life and another 500 page books called the fountain of silence, I believe. Really, really awesome. I like to read I don't have a social life. But yeah, anyway, that is this week's episode. I want to thank you again for joining us. I'm congratulations on now completing your first podcast experience.

**Wendy Fox** 50:34  
super appreciate being here. And that was definitely fun and happy to be back. Especially with the two of you super.

**Emma** 50:42  
Oh my god stuff. I'm gonna cry. But yeah, make sure to go follow me on Twitter. She is getting into the Twitter game and she always retweets great accessibility content and also top level tweets, great accessibility content. If you liked this episode, tweet about it. We read everything that you post. And this week we're giving away a licensed different and masters where you can take a course on accessibility and much more. We also post new podcasts every Monday so make sure to subscribe to be notified and leave us a review and with that, have a great week. Bye

**Unknown Speaker** 51:13  
bye bye
