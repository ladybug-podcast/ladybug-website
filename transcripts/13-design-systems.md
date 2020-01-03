**Kelly** [0:00]  
Design systems are in the world around us from the signs on the side of the highway to the setup of a grocery store and our products are no exception. But what exactly are design systems and how do we build them? In this episode, we'll take a look at the foundations of design systems, the benefits and drawbacks, and the process for creating one from the ground up. Let's get started. Welcome to the Ladybug podcast. I'm Kelly.

**Ali** [0:23]  
I'm Ali.

**Emma** [0:24]  
And I'm Emma. And we're debugging the tech industry.

This week's episode is brought to you by LogRocket. How many times have you struggled to figure out an annoying bug in your app? Well, struggle no more! LogRocket lets you replay what users do on your site, helping you reproduce bugs and fix issues faster. You can see a perfect replay of what your users saw, inspect Redux actions and state at any point in time, view every network request and response, and even inspect console logs and JavaScript errors. LogRocket lets you support your users without the tedious back and forth conversations. Plus it works with React, Angular, plain JavaScript, Redux, Ember and Vue. Check out Logrocket today to improve your debugging workflow.

**Kelly** [1:05]  
Alright, so let's go ahead and get started here. Let's just jump right in: what are design systems? Emma, I know you have a lot of experience with design systems. So why don't you start us off.

**Emma** [1:14]  
So design systems are systems of design.

I'm feeling a little sassy this morning.

Design systems are really a set of standards and patterns and components that allow you to build your brand identity and create consistent user experiences across many different products and endpoints. So yeah, short version is a set of standards of visual assets.

Now, what goes into that is a little bit more complex, because there are three main foundational components. And when you hear designers talk about design systems, they're most often referring to like a Sketch UI Kit, or the foundational design language. When you hear an engineer refer to design systems, they're talking about component library or style guide. In reality, it's all three of these things wrapped up together.

So design language, these are actually the sets of standards and visual assets that guide the creation of your brand within a product. And then include things like accessibility guidelines, content guidelines, spacing, and grid, typography, color, and visual design components. And you can create those with Sketch. Sketch is usually like the most popular option. You can also use Figma or Adobe.

On the component library side, we've got coded components, and they actually bring your design system to life. And you'll often see a lot of design systems build them with both, like, plain JavaScript, and also maybe a framework or library or many frameworks or libraries, you'll often see React components or maybe styled components. And lastly, the style guide is the documentation that kind of encapsulates the language and the component library into one easy to find location.

**Kelly** [2:46]  
Okay, so you just said a lot of words.

**Emma** [2:48]
I did.

**Kelly** [2:49]  
And I understood most of them. But I have one really important question, that's really not that important, but I'm just curious, when did you build your first design system?

**Emma** [2:58]  
So I worked at IBM for three years. And my second year there, I joined a design team working as a frontend engineer with them. And I started by like prototyping a lot in code. And then it quickly switched over to kind of building like a low fidelity design kit for IBM quantum computing, which is really cool, because I noticed that, like, we had a ton of different varying styles, like things were pretty inconsistent. So I started trying to build a design system at IBM for quantum, and it didn't really work out, because as we'll find out, they require dedicated teams. That's generally the most successful way to build one.

But most recently at LogMeIn, I've been pioneering this design system we're building called Chameleon, and we're building it from the ground up. And it serves multiple products like GoToMeeting, GoToWebinar, GoToConnect and products like that. So most recently, I've been really working on it.

**Kelly** [3:48]  
That is so cool. Ali, what is your experience with design systems?

**Ali** [3:52]  
So none professionally. I've been working for early stage startups for pretty much my whole career. So not a huge amount of time, or usually people in order to implement something more formal like that. But I do have them for my personal stuff. So my personal branding stuff, all follows fundamental styling. And so I have the rainbow letters and all that all designed out and my fonts and all that. So like my resume and my portfolio site, and my blog posts, they all follow this kind of style guide. And same with my blog site as well. So not a ton professionally and not to the same level that Emma has by any means. But I definitely try to, at least with my personal branding, keep everything consistent, mostly for fun, but also, it's kind of cool.

**Emma** [4:38]  
Kelly, you said you work with Shopify Polaris, right?

**Kelly** [4:41]  
I do. Yeah, that was actually my first foray into ever using a design system as well. So it was a bit of a learning curve for me to kind of understand what all is included in it, but I think it shed some light on just how useful it is to have a design system. And you know, when talking about early startups and everything, I think it brings up a good point, like answering the question,

Does every company need a design system? And in my opinion, and I'm going to say this because I also have a small company? The answer is no. Because I don't think... when you're you know, when you're working on like a small team, it becomes one extra step that you need to take to add onto your plate when you're probably already wearing about 16 different hats in the first place.

**Emma** [5:24]  
Absolutely. I think that primarily design systems, well there are two things. One, design systems, even the open source ones like Google Material Design and IBM Carbon, who are the primary stakeholders? The stakeholders are the teams that are using these systems. And while they're open source, generally you wouldn't go and consume IBM Carbon and use it to build your portfolio. You can, but primarily they open source it to share their learnings and the way that they build it, right.

The second thing is you absolutely do not need a design system if you're building like your portfolio for example, it's not a necessity by any means. I think where they really shine is when you've got multiple products underneath a brand identity. So for LogMeIn, we have GoToMeeting, GoToConnect, GoToWebinar, and they all have the same brand identity and we want to be consistent across endpoints and products. Well, that's a great use case for a design system. But I personally wouldn't go build, you know, let's say my dad wanted to start a restaurant, I wouldn't go build his restaurant website with a design system, it wouldn't make much... the opportunity cost is a lot, a lot more unbalanced.

**Ali** [6:25]  
Yeah, I used to contract teach at Capital One. And they had massive design systems and a ton of documentation on it. So definitely a big thing for bigger companies, especially one as huge Capital One with tons of product.

**Kelly** [6:40]  
Ali, I think I learn every day another place that you taught at.

**Emma** [6:47]  
Well it's like Ali has worked with so many fun companies, you've opened so many limited liability corporations. What am I collecting?

**Kelly** [6:55]  
I don't know. Passport stamps?

**Emma** [6:57]  
Oh, true. Well, once you're in Europe they don't stamp it. And I live in the EU so now they don't stamp on when I travel.

**Kelly** [7:04]  
And that is true. Depending on where, where in Europe, you go. I know. Last time I went to... No, it was when I went to Canada. This is a side story here. I had a 12 hour layover in Canada when I was flying from Boston to Copenhagen. And somehow I got in and out of the airport without ever getting my passport stamped. And I'm not really sure if I just like accidentally snuck into the country. I just kind of followed the path to exit the airport. But I don't know, I never actually got a passport stamped in Canada, it was kind of sad.

**Emma** [7:35]  
So if you're listening, don't try to avoid customs, it's not advisable.

**Kelly** [7:40]
Getting kicked out of a country is not a fun experience I'm not going to go into that one.

**Emma** [7:46]  
Okay, speaking of benefits of design systems, there are many benefits. And I believe personally that the benefits outweigh the negatives when you have the right use case. And the main benefit of a system is consistency, because when you have multiple products and endpoints under one brand identity, you want to elicit that brand identity in every facet of your user experience. So consistency is definitely a big one.

Accessibility is another one. I don't know how many times I've seen companies have to stop what they're doing and overhaul their products for accessibility. So yeah, accessibility is a big one. I know we had to pause our work and an overhaul our products for accessibility. And now that they're accessible, it's great. But we should be baking accessibility into our products as we build it and not as an afterthought. So that's certainly a big one. I don't know, do you guys know of any other benefits for design systems?

**Kelly** [8:36]  
From my experience of working with Polaris, it definitely speeds up your development time. There's not much that you have to a question about how you need to go about designing something or how you need to go about developing something because the guidelines are already there for you.

And I will just plus want the consistency part of it as well. As a... like on the customer facing side, it's much more satisfying to use a product when you're already familiar with the brand, or you become familiar with the brand over time, you know what to expect even if you're using a second product in that same brand.

**Emma** [9:04]  
I heard a quote once that design system should be boring, they should free you up to focus on the fun aspects of design and development. And it's true when you think about it, you should really take away the conscious thought and effort that goes into, well, how many pixels of padding should my button have? What size font should I have? Those things should be predetermined for you. And you should just be able to import your button and go. So that's definitely one thing. But I think also, one oversight that we don't think about when it comes to benefits is easier onboarding and this is too fast, multifaceted.

The first is that when you have new hires come in is easier to onboard them if you've got documentation in one place, about how to build your products. And the second is, if you have multiple teams working on multiple products, but they're using one design system, that means you can take one person from a team on product A and put them on a, you know, a team working on product B and they'll just be just as efficient. So I think that's a huge benefit.

**Ali** [9:57]  
Something that I read... there was a blog post forever ago about Brigham Young University. And they obviously have a bunch of different websites for athletics and internal stuff and student-facing stuff. So they had pretty much like a different logo on every site, even just the design and the different shades of blue that they were using on every site was different as well. And so then they use web components and built custom web components and used that as their design language across those different sites. So I think that's definitely a huge use case for it. If you have incredibly incohesive styling across different sites,

**Emma** [10:37]  
It's kind of funny that you see certain companies or organizations, you would never expect to have a design system. And they do. NASA is one example. They have a design system, right, because it's not just about building digital products. It's also about building your brand into their spacesuits and how they create, you know, their space shuttles and all of that. Also, political campaigns is another big area for design systems. So yeah, it's literally everywhere. But there are also some drawbacks to design systems. Kelly, have you run into any drawbacks with using Polaris, or just systems in general?

**Kelly** [11:11]  
I wouldn't say I really had any kind of like drawbacks when trying to start using Polaris. But I will kind of touch on, again, that us having our own design system isn't feasible, because when you're a smaller team, and you don't have the kind of resources to dedicate to building a design system, it's very time intensive to actually build one up. And I just don't have that kind of availability to either do myself or have my team build one out. And so that's, that's definitely a drawback of using or creating a design system.

**Ali** [11:42]  
And you also have to have another layer of subject matter experts as well. So you have to have somebody that's good at design and knows how to implement a design system. And a lot of like early stage startups just don't have that capacity and don't have those people along with the time.

**Emma** [11:58]  
Yeah, that's true. And I think... So Nathan Curtis is one person in design systems. He's very well established, he does a lot of research, he does a lot of building design systems. And he listed out a couple of different governance systems or team structures for building them, one of which is the centralized model. So that's where one team is in charge of the system and guides it's evolution. And this is where we are at LogMeIn. And this is kind of what I would suggest, if you're trying to get started is dedicate, you know, resources to building this product, because it's a product, it's not a project. But again, that is a large investment and to get upper management to okay on that is kind of hard, especially when they can't see this tangible fiscal reward right away. There are a couple of other models like the Federated model where like, you have a few different people from different teams in charge of the system. And maybe even a hybrid of these two approaches is great. But, you know, centralized model is the ideal team structure, in my experience. It's just really hard to get buy in. And the thing is to... like, it's never done. This is a product, it's not a project, and it's ever evolving. And there will always be new things on the roadmap, and it's never done. And so the question is, like, how do you measure the success? And how do you know when when it's in a good place to start seeing reward?

**Kelly** [13:11]  
I think you can, I don't know if that's a hypothetical question or a rhetorical question. But I think you can definitely measure success just based on, you know, what teams are actually getting done and how quickly they're able to start implementing, you know, or building something new out or implementing changes to something because they're able to, you know, track that time and progress, hopefully, pre design system versus post design system.

**Emma** [13:34]  
Yeah, I think the hard part with that - I totally agree - I think the hard part with that is it takes time to get there. Especially if you're not working with a dedicated teams. Like IBM Carbon has several teams dedicated just to building their system, versus LogMeIn, we're in the the phase... the ramp up phase, where we're trying to get people on board full time to work on it. And that's the hard part is... it's really easy to communicate the benefits of a design system, to your teams and get them all excited. But when they're not a dedicated team building this thing out and building it quickly, people get discouraged and kind of lose interest.

**Kelly** [14:06]  
It also requires an element of change. And you know how everybody feels about making changes to their workflow, especially when they did not decide to change it. So you know, you also have to have the post creation buy in as well, not only getting people to buy, it's actually having a team to build a design system out and then actually implementing it and utilizing it.

**Emma** [14:24]  
Yeah. And one of the biggest struggles that we're having on our team is... Well, A, when you're working with multiple products and multiple endpoints, there's a lot of opinions that come along with that, and rightfully so. But one of the biggest discussions we're having is, do we take a more operating system native feel to our products? So for example, would we keep the native fonts for Mac versus Windows? Or do we go fully custom branding experience in our applications, like you would see Google? IBM Carbon uses Plex as their font. It's a custom font. So the question is, do we stick with the native paradigms for app development? Or do we actually take a branded custom approach? So there are road bumps along the way. That's just one of them. And again, how do you make decisions as a design team where it doesn't feel like it's one or two people like forcing these decisions upon all products, but you're not overwhelmed by the amount of voices expressing their opinion?

**Kelly** [15:19]  
Sure thing. So let's switch gears a little bit. You know, we talked about the pros and cons of the design system, let's talk about how you build a design system. Emma, I'm going to, again, default to you on this because you have all the experience?

**Emma** [15:34]  
Well, I will preface this with like, I'm still in the ramp up phase of building a system. And I think I'm learning a lot along the way. I wouldn't say I've built a successful system. So I'll preface it with that. But this... these are the things that based on the research I've done, and some of the work we've done thus far these are what are the steps that would take.

So the first thing you should do, and this is assuming that you're already working with existing products, if you're building from the ground up, you have a clean slate, and you can skip this step. The first thing is to take a visual inventory of all components, and all of your applications in every state that they incur. So buttons, for example, you see them all over the place, take screenshots of every button in your UI, primary, secondary, tertiary, all state, so active, hover, focus, disabled, and put them into one location, and you'll be able to see how inconsistent they are across all of your products.

And then once you have this visual inventory, you kind of gotta decide how to prioritize them. And I always like to ask four questions here. How feasible is it to design, develop and test this component? How frequently is this component used within the product? Because buttons are used a lot more frequently than accordions. How much impact is it going to have on the success of our product cohesiveness? And how inconsistent are they throughout your UIs? Buttons are typically an example of something that's extremely inconsistent. And once you've got these four questions answered, then you can kind of prioritize your backlog. And generally you want to focus on things that are very inconsistent, that are going to have a high impact and a low feasibility, or I'm sorry, a high feasibility.

So they're pretty generally easy to come to an agreement on or to actually create. Once you've got this priority backlog, then you can start to build your system. So you can create Sketch and UI assets. Maybe one more preface to that is you need to define your brand identity ahead of time. So you need to understand how you want your products to make your users feel. So do you want your users to feel a sense of trust, this is going to really drive your color palette discussions and your typography, and your font family choices. So like, if I'm building a banking app, I probably don't want to use red as my primary color. And I probably don't want to use like a monospace font. That would elicit some kind of like fear and distrust. There's a lot of psychology behind these things. So yeah, I would maybe stick with green because green is trustworthy, and maybe deals with money or like makes you subconsciously think about money. And I would use maybe a serif font because serifs are typically more, what's the right word, like established fonts. So you need to just establish your brand identity first. And then you can actually start building these things. A lot of teams, use Sketch, you can also use Figma, or Adobe. You you can build out these assets. After that, or simultaneously in parallel, come the coded components and your, you know, your shared repository. And then lastly, you've got to document them in your style guide. So that was a long answer. But that's generally the process I would take.

**Ali** [18:14]  
Do you do like bootstrap style, style sheets, where you can just CDN them in or something?

**Emma** [18:19]  
Yeah, so we're building ours where the styles are separate. So we've got a UI framework that's just Sass compiled or transpiled down to CSS. So you can just import the styles if you want in their own namespaced. So you can use them with existing products and not get naming collisions. And then that gets imported directly into the React library. So yeah, we like to separate those concerns. And we like to have each individual element have its own style sheet. So if I just want to style a button, I don't need to import the entire library.

**Ali** [18:49]  
That's really, really cool. I like that. So we talked a little bit about how you have these style sheets, and then also have components and all that. But you also talked about the documentation. So what kind of tools do you normally use for that documentation?

**Emma** [19:03]  
So we are building a fully custom style guide. And we're doing that to kind of bake our brand identity into our style guide as well and make it feel like our products. And we're using... I'm using Gatsby. I'm the only one building this at the moment. And so I've decided to use Gatsby with MDX and the reason I'm using MDX is so I can include code snippets that are also editable with React Live, which is really cool. So our teams will be able to go in and change the JSX code and actually see the output live of what the component's going to look like. I can change it from like a primary button to a secondary in real time. So Gatsby with MDX is a great solution for that. But if you're not comfortable, or you don't have time building your own custom style guide, you can also use Invision DSM, the design system manual, it's more of like a content management system. So it's more... It has a UI. So it's a little bit more user friendly, and there's less overhead. But I personally am using Gatsby. You can really build it any way that you would build a documentation site.

**Kelly** [19:57]  
I've never heard of Invision DSM before but I Invision for, you know, our clients... showing like the site previews and everything. How does it differ exactly as, like, the unit user interface goes from working with Invision DSM versus regular Invision?

**Emma** [20:12]  
So I'm not fully certain of this, because I haven't worked too much with Invision DSM, because we were building our own custom style guide. But I think it's kind of more of like a CMS in my, like... what I would assume is that it's more like a CMS where you go and, like, add in the fields that you want, you would, like, tell it what you want in the nav bar and you follow the page content.

Or maybe it's much more like Notion, if you use an Notion for note taking, something like that. But Invision itself is meant for creating mood boards and for creating, you know, prototypes and all of that. So I will say Invision is one of the best companies for doing design system work. If you go to their site, they've got a ton of really great resources for design systems in general. So if you're looking to build a style guide, I would highly recommend checking them out.

**Kelly** [20:55]  
And we'll pop a link into our resources section so you can take a look. Okay, so what exactly should a style guide contain? I'm sure you can get pretty detailed as far as everything that can go in there. So what are the general components, everything that you include in yours?

**Emma** [21:09]  
So one of the things that I did before it... we started building, ours was kind of do some research into how other companies were building theirs and what were in their style guides. And I kind of like made a graph or a table. And I kind of, like, checked off the box of what companies were using what things and there are some things that are generally across all of the style guides. So you'll generally have getting started, like how to actually download and use, like the UI kit, if you have a UI kit and the component library. Typically you'll see contribution guidelines. So how can I contribute to a sketch library? How can I contribute to the code repos?

And then foundation is the big one. So foundation includes things like your brand identity, what is your brand? What's your personality and things like that. Accessibility guidelines is a big one. Also, you might even see content. I know Mailchimp's design system is great. They have an entire section just for content. So when I write words in my UI, what tone should the voice have and things like that. That's one that's really useful. Spacing and grid is another one. So what does the padding look like? Where should my elements be laid out on a grid, things like that? Typography or so we're talking typescale, and font families and things like that. And then color. So these are the foundational elements.

Beneath that you'll typically see components. So you'll see like buttons, drop downs, alerts. And if you click into those, oftentimes, what you'll see is twofold. One is the design, so the red line design specs for that component, and also the development side of things. So you'll see a code snippet, maybe a link to a Storybook application, you'll see what properties that you need to set on these React components that are required, which ones are optional, and things like that. And then lastly, something that was really cool that I want to add is component status. So we have a ton of different components that are going to be versioned, typically, you would see like the modules being versioned as opposed to the overall system. Like if I update, like a text on a button, I don't need to reversion the whole entire system. So given that typically you're going to version these components by themselves, you might see a component status page that will list every component and what phase it's in, or what version is in, within your system. So those are generally, like, the foundational elements.

**Kelly** [23:13]  
So you briefly mentioned Storybook, it's kind of a side note, but I'm using it for my first project right now. It is so cool.

**Emma** [23:21]  
Isn't it great?

**Ali** [23:22]  
I love Storybook.

**Kelly** [23:23]  
I can't believe I never came across it before.

**Emma** [23:24]  
Well it's so easy to get started with. Like, I was shocked at how easy it was to use.

**Ali** [23:29]  
So we've been talking about all the awesome benefits of design systems, their pros and cons and all that. But once you actually have a design system in place, how... we've talked about how it can go really well. But can they fail as well?

**Emma** [23:42]  
Absolutely. I think the biggest reason they fail is low adoption. Your primary stakeholders are your teams, your design teams and your engineering teams. And if they don't want to use it, then they're not going to and then who are you building it for. So low adoption rates is the number one reason that they fail. The second reason they fail generally is that you scale too quickly. And this is something we're running into where we're trying to accommodate three different products to four different products, and all of the endpoints. So like Mac, you know, mobile, like Android, and iOS, Windows and web all under one system. And we're starting right now. And we're struggling with this. Because when you scale too quickly, it's just too much. It's way too much. It's there's too many cooks in the kitchen. And it's, you should really prove your MVP first. And then scale if necessary. But let's say like, I'm like, oh, I'm gonna add, I don't know toasts into my design system. Well, why do we need to add every single component and let's add the ones that we're using. And if we need more, let's add them at that point. But don't start scaling because you think you'll need all this things. You're going to be quickly overwhelmed.

**Kelly** [24:49]  
You said toast and now I'm craving toast.

**Emma** [24:53]  
I don't know why everything, everything is food. Kebab case... what else?

**Kelly** [24:58]  
Hamburger menu!

**Emma** [24:59]
Exactly.

**Kelly** [25:00]  
Everything is food because everybody loves food. It's very relatable

**Emma** [25:03]  
We're all Full Snack Developers.

**Kelly** [25:08]  
Okay, so who in a company would be responsible for building out a design system? Like are there certain roles within a company that make the most sense for who would be, like, in charge of this.

**Emma** [25:18]  
So if you're going to have a centralized team, so dedicated team building on the system, you're going to want a multi discipline team - I think that's the word - where you've got designers, you've got engineers, and you have content writers and all of that wrapped up in project management. This is something we're struggling with right now as well, as we don't have a project manager and it's a little bit stressful at the moment. I would... you know, we're going to get one soon. But when you don't have a project manager, it kind of falls onto the team to manage their own projects.

So that's the general makeup of a team in general, maybe even you want a QA person on there, just to kind of put their their voice in. But what's really cool is when we talk engineers we are really talking about almost a new field of engineer because they have to have some knowledge of UX and visual design. And this is where we get into this concept of UX engineer. And it's a very new field. It is being hired for, you know, some of the bigger companies like Google and Etsy and Spotify are all hiring UX engineers. And they're engineers who are frontend focused but have a pretty decent amount of UX and visual design knowledge, which is great, because I was struggling a lot in my career until I found this path. I never was super deep into frontend, in terms of like APIs and analytics, and all of these kinds of things. I was definitely more design focused. And I felt lost until I realized it's actually a career path that you can be hired for. Is this a field that you... any of you have heard of before, or have desire to, like, look into at all?

**Ali** [26:47]  
I think, for me, it's something I've heard of mostly from you.

**Emma** [26:52]
I never talk about this.

**Ali** [26:54]
Never, never ever. And so I think it's an awesome thing. It's something that I was really interested in implementing eventually at Dev, especially because it's an open source project. And so people from all over the world that aren't necessarily working for the team are adding to it and adding to the appearance of the site. And so if there was a really consistent style guide, that would be really, really helpful. I personally probably wouldn't be super interested in working in it full time, just because it's not the side of code that I'm most interested in. But I think it's really important, especially as product scale, and more and more people are working on them. For sure. How about you, Kelly?

**Kelly** [27:32]  
I'm definitely more of the use the design system, as opposed to create the design system. I am full... like fully in on the frontend. All I want to do is code code code, no matter what. I am so sorry.

**Emma** [27:52]  
No that's okay.

Yeah, I think it's nice, though, because I've received a lot of messages from people who also felt a little bit ostracized from frontend development, because it just wasn't clicking with them fully. And then they found this world of UX engineering, and they're like, this makes sense for me. I personally have always been more creative, creative, create, I just had creative, really weird, I... creative, when it comes to like the arts. So like, I was always very musical, I was very creative in those aspects. And so to be able to marry that now with my very technical side is amazing. So it's not for everyone.

**Ali** [28:26]  
Yeah, I think the other interesting thing, for me, at least with design work is that I think that I'm pretty good at designing my own stuff. So according to my own aesthetic, and what I like, but I really, really struggled doing any sort of design work for a company or according to anybody else's vision. So I think that I could never do design professionally to any extent. But I could definitely do it for my own stuff. And I think that's an interesting clarification, as well as that, like, I'm creative, I can make stuff that looks good, according to me, but not necessarily something that like sells her brand well.

**Kelly** [28:57]  
Yeah, definitely. There's a very good reason why I hire designers and I don't do my own design work. You don't want me to do any of your design work, trust me.

**Emma** [29:05]  
I feel like this could be an entire episode, us talking about how hard design is. But we all think it's easy. It's like, I can design anything. And it's like you sit down to try to design something and you're like, I drew a square.

**Kelly** [29:18]  
It's funny, because I was just going to make the same exact joke.

**Emma** [29:20]  
Are we the same person, we're twinning. Let's shift gears real quick and talk about a couple of different tools you can use to build out your design system. So we touched on Storybook a little bit. It allows you to build UI components faster. So it's an open source tool for developing UI components for React, Vue and Angular, and you just simply npm install it and you create little files with your stories inside. And it just... you run it locally, and it has all of the documentation for your components. It's super awesome. Highly recommend it. I actually wrote a blog on using Storybook so we can link that down in the show notes.

**Kelly** [29:51]
It's also used by a lot of really big companies too. Like Dropbox and Airbnb and Lyft and GitHub all use it.

**Emma** [29:55]
IBM as well. Yeah, yeah. And then there are other tools you can use as well. So Pattern Lab. Pattern Lab, I think that's the name. It was created by Brad Frost. And it gives you a way to model your UI components and, like, a very minimalist user interface experience. And Invision. Again, we already touched on Invision. Sketch is a popular tool for creating UI libraries, but it's only for Mac, unfortunately, and it is a paid app. So if you want something free, that works across all computers, or like operating systems, Figma is definitely the way to go. So those are just a few tools that you can use to build a system.

**Ali** [30:32]
This is a total total total tangent, but I just learned that Figma is written in WebAssembly. And I think that that's incredibly fascinating. Because it works super, super fast online, you don't have to download it to your computer. And I think that technologically it's really interesting too.

**Kelly** [30:49]  
I think it's also fascinating that you can import a Sketch file right into Figma and it automatically converts that and you can use it.

**Emma** [30:52]
What?

**Ali** [30:54]
Totally

**Kelly** [30:55]
I know, I just tried to use it this past week for the first time and I was completely blown away by Figma.

**Emma** [31:04]  
Dang. That's awesome.

**Ali** [31:05]  
I'm still a Sketch loyalist and I don't know why that is. I tried to use Figma for a while and I just couldn't get used to it for some reason. But I do think Figma's incredible, especially since it's free and all that but I am a loyalist to Sketch. Mostly because it just time using it. Yeah.

**Emma** [31:21]  
One other tool I just remembered was Framer. Framer X? Yeah. Framer X is super cool. It markets itself is an interactive design tool. So bring your creative ideas to life with Framer X. The best tool for interactive design. So it's meant for prototyping. But what's cool is you can export React components. I don't know if they do other JavaScript libraries and frameworks, but it seems to be super cool. You can do animations with it. And so if you're looking to, like, build out component libraries, or or prototypes, I would highly recommend Framer.

**Ali** [31:51]  
Oh whoa, I wonder how good the React code is.

**Emma** [31:54]  
It's actually... I was super skeptical. I was like, Oh, don't just export React components, like, let an engineer do it. And then I looked at it and like, okay, I'm impressed.

**Ali** [32:05]  
Yeah cause like the SVGs you can export in Sketch, they're gnarly.

**Kelly** [32:09]  
They're terrible.

**Emma** [32:12]  
Well I'm wondering... Because in general, if we're going to build a component library that's extensible, you don't want to have any business logic, obviously, inside of it. So I'm curious how they handle exporting components. Like I'm curious, also, do they update it to include React hooks, like, but there's no business logic? So I'm not really sure. But some components needs state. If you're building like a sidebar, for example, you need to know whether it's, you know, collapsed or expanded, or an accordion. So that has like local stuff. So I'm not really sure. I'd be curious to learn more about that.

**Kelly** [32:40]  
Yeah. Speaking of learning more, there are a number of people in the design system world who definitely deserve a shout out for, you know, their contributions to educating us on design systems. Who do you think of when you think of design systems?

**Emma** [32:54]  
So the first name that comes to mind is Brad Frost. But I feel like he was the pioneer for systems and in an era when there was nothing about design systems. He's one of the most notable, and I think his atomic design principles. So this idea of having atoms versus molecules was really foundational. So atoms would be components like buttons or drop downs, and molecules are made up of atoms, right? When you think about science and nature and biology, molecules could be like a modal and a modal includes buttons. And it might also include an accordion. I don't know why you'd put an accordion in a modal but you know, things happen. So he's, yeah, he's been the one that I gravitated to first, just because he has a lot of material. He wrote a book about atomic design and all of that. But I will say that Tatiana Mac gave a talk called "Systems of Systems". And it really focused on making inclusive design systems. And I thought that was really fascinating. We're going to link that down in the show notes as well. So there are definitely some other people making waves. Have you heard of Clarity conf at all?

**Ali** [33:59]  
A little bit? Yeah, I think I saw stuff on Twitter. Classic.

**Emma** [34:02]  
Yeah. So this is a design systems conference, which is super cool that now it's such a popular concept of building products, or a way of building products, that now we've got conferences for it. So that's pretty neat. Definitely link that down in the show notes as well.

And then one last person I want to shout out is Nathan Curtis. He's also done a ton of research. I mentioned him a little bit earlier. He has a multitude of blog posts on Medium. And I can remember, like, the first blog that I read of his that explained how your team or your company spends $100,000, building buttons, and he broke down how that's possible. And it blew my mind. It's like, when you break down the amount of time it takes to design, build and test a button. Because, you know, you think about we have all the states like primary, secondary, tertiary, active, hover, focus, disabled, large, medium, small buttons, icon buttons, those kinds of things. When you break that down into design, development, and test. Assuming, like, I don't even make, I don't know, how many dollars per hour, he estimated, and you add it all up. It was, like, several thousand dollars. And then it was, like, you as you scale that to how many teams you have building the same kind of buttons. And it's like $100,000, and that for me, that was the first time I was like, holy crud, that is a lot of money to be building buttons.

**Kelly** [35:20]  
As a business owner, that's terrifying.

**Emma** [35:22]  
I know. Is there anyone that you all have heard of in relation to design systems or companies maybe that you've heard building design systems?

**Kelly** [35:32]  
You mentioned MailChimp earlier, that's... their design system, especially since they did the rebrand. It's It's impressive. And they did like a whole article on how they got to where they are, this new design system, something we can link to in the resources. And obviously Shopify is a big one for me. the Polaris was my first foray into design systems. And they made it very easy to walk into as somebody who has no prior knowledge of design systems.

**Emma** [35:58]  
Yeah, I think there are some other companies doing really good work too. I know Trello. I always say it's called Taco, but it's not called Taco, it's called Nachos. I always mix up my Mexican food names. So they're building one called Nachos. That is pretty cool. IBM Carbon was the first experience I had with a system, because my friends were the ones building it. And so it was pretty cool to see that. It was my first experience. Yeah, I think more and more companies are hopping on this design system trend. Spotify and Etsy both have design systems. Slack just released an article about how they were building their system. So it's definitely catching on.

**Kelly** [36:30]  
Yeah. Sounds like it's a nice win for all companies adopting design systems.

**Ali** [36:38]  
Totally. I feel like I learned so much from just recording this episode. So many things about design systems and what they are and how to use them and how they're actually implemented. So definitely, if I work for a bigger company, at some point, that would be a really interesting thing to look into.

So I want to transition into talking about wins. First, we have our community win from Darren and he improved his team's product set up documentation so that other junior developers in his team could get the project running easily. That's a huge one. And super, super important. Documentation is a huge part of making it easier to write the actual code for projects. So thank you for sharing with us, Darren. Emma, what was your win?

**Emma** [37:19]  
So because we haven't talked about design systems enough, I am going to be leading a Frontend Masters workshop on March 12 about design systems. So if you're interested, I'd love for you to check out, like, the live stream or the recording and let me know what you think. But about you Ali?

**Ali** [37:33]  
I wrote an E book all about the things that I wish I knew when I was starting out coding. And so it's my first time writing something a little bit longer than just a blog post. So I'm pretty excited about that. It was a lot of work, but glad that it has come out. And I actually used my personal design system from my site.

**Emma** [37:53]  
Well you wrote in Sketch didn't you?

**Ali** [37:55]  
I wrote it in Google Docs and then copied it over to Sketch because I didn't want to learn, like, an e-book platform.

**Kelly** [38:02]  
I can't believe you... If you already have tools that work, why reinvent the wheel?

**Ali** [38:05]  
Yeah, and I had my design on there already, so could make it pretty. Kelly, How about yours?

**Kelly** [38:09]  
So my company converted our first headless commerce lead, and I talked about headless commerce in previous episodes. It is a really exciting thing for for me and for the Taproom because headless commerce is kind of a new space for Shopify with their releasing the the GraphQl storefront API, and the fact that we're already starting to work with clients who are willing to kind of pioneer this space of going into headless commerce on Shopify is really exciting. And I'm excited to see how... I'm excited to see the final product. Right now it's a it's a bit of a learning curve, because I'm learning Vue.js at the same time. Well, I tried to build this out, and I'm running out of headspace to figure it all out. I will figure it out though. It's still a win.

**Ali** [38:56]  
You got this. That's so awesome.

Okay, so we've got a ton of announcements for you all before we sign off. First off, if you liked this episode, tweet about it. You know the drill, but we'll select one Twitter to win a Ladybug sticker each week. They're super cute. So you definitely want one. And if you want to hear somebody join us on the Ladybug podcast and share their perspectives, fill out our nomination form on our website. You can hear pretty much anybody you want. And we'd love to bring more people on, especially people that we don't hear from every day. And we post new podcasts every Monday so make sure to be subscribed to be notified. And leave a review. We love to see both your feedback and to see that you just love what we're doing. So see you next week.
