**Emma** 0:00  
One of the biggest things that developers struggle with is design. It's super easy to look at an application and know that it looks terrible. But it's harder to explain why. This episode, we're joined by Steve Schoger, co-author of the hugely popular _Refactoring UI_. We'll learn some design tips and dive into the story behind the book, as well as his other projects, Hero Patterns and Heroicon. Let's dive right in.

**Kelly** 0:25  
Welcome to the Ladybug Podcast. I'm Kelly.

**Ali** 0:27
I'm Ali.

**Emma** 0:28
And I'm Emma. And we're debugging tech industry.

**Emma** 0:33  
Hey, Kelly, have you heard about this cool tool called AWS Amplify?

**Kelly** 0:37
Tell me about it.

**Emma** 0:38
It's a suite of tools and services that enables developers to build full stack serverless and cloud-based web and mobile apps. You get to use whichever framework or technology you want on the frontend.

**Kelly** 0:46  
That sounds cool. Will it help me get up and running with things like hosting.

**Emma** 0:50
Yeah.

**Kelly** 0:51
Authentication?

**Emma** 0:52
You betcha.

**Kelly** 0:53
Managed GraphQL?

**Emma** 0:54
Totally.

**Kelly** 0:55
How about serverless functions, APIs, machine learning, chatbots, file storage?

**Emma** 0:58  
Yes to everything. Amplify is built especially in a way to enable traditionally frontend developers like yourself, Kelly, to be successful because you can use your existing skill set to build real world fullstack apps than in the past would require deep knowledge around backend, devops and scalable infrastructure. The Amplify console also allows you to use a GitHub repository to deploy to a globally available CDN, with CI and CD built in.

**Kelly** 1:24
That's super cool. Where can I learn more?

**Emma** 1:25
If you want to learn more about AWS amplify, visit aws-amplify.github.io.

First of all, thank you so much for coming on our podcast. You're someone that I've admired in the industry for a long time. So I'm thrilled to be talking with you.

**Steve** 1:38  
Yeah. Thanks for having me.

**Emma** 1:40  
Of course. So I guess we'll just jump right in. And could you just, like, give us an introduction to who you are, tell us more about your coding and design journey, and just, yeah, let's just hear it all.

**Steve** 1:49  
Sure. So I'm a visual designer from Ontario, Canada. Many people know me as sort of the guy who posts hot design tips on Twitter. I post ui refactorings on YouTube. So I take, like, a user-submitted design that's, like, kind of poorly designed and refactor it. By the end of the video, it's all, like, looking nice and polished like something a designer would do. I most recently co-wrote the book _Refactoring UI_, like you said, with my friend, Adam Wathan. That aims to teach design to developers.

My journey into design... I guess, it sort of starts as, like, when I was a child. I always had a general interest in, like, art and design. I liked to... I liked illustrating a lot when I was a young kid. Like if my mom needed a break from, like, parenting, she was able to just give me like some pencil and a paper and I was able to spend hours drawing pictures of, like, my favorite cartoon characters. In high school, I got really into, like, music and playing guitar and I was, like, coming up with, like, cool band name ideas and then making logos for them. And I wasn't quite sure what I wanted to do after high school. My art teacher, he kind of encouraged me to take this new course that was being offered at Fanshawe College in London, Ontario, which is called... it was called multimedia design and production. It was a brand new program. And it was a really practical hands on program, which is how I learn best. And this covered everything from design... Like we learned a lot, a lot of, like, Photoshop basics, like a lot of the Adobe basics. We learned some video production, and then some web development. So it was kind of just like a little bit of everything to get my hands dirty. And I mean at the time, this is like in 2004, so we were learning a lot of Flash. And Flash was still owned by, like, Macromedia at the time. So super dated stuff that I like, you know, I had to like relearn everything after I finished that program.

Regardless, when I was taking that program, I was really drawn into the design stuff. I I learned some basic frontend development, but I mean, a lot of that was like relying on Dreamweaver to put a site together, which was fine. But, you know, it got me started in web. But, yeah, I was really interested in making, like, websites and putting that stuff together. But following that program, I took music industry arts, which is... because I really wanted to get into the music business and it was at the same college. It was kind of a hard program to get into. I applied to it the first time around and I didn't get in. But then after I had my multimedia diploma, they accepted me into the program.

Following that program, I spent a lot of time interning at a few, like, record labels, doing a lot of stuff I was doing from multimedia. So I was, like, managing websites. And I was designing like MySpace pages. Which I really enjoyed, but I wasn't getting paid for anything I did because it was the music industry. So I did want to get a job in design. But I also lacked the... At this time, I kind of lacked the confidence as a designer. Like, I understood a bit of web and a bit of design, but I didn't really get really great at either. I was just kind of like a jack of all trades, master of none kind of thing. So I just lacked all the cofidence to do that.

This was also the peak... At this time, this was like the peak of the 2009 recession. So this time I thought like... It was like really hard to get a job in anything. I thought not a bad time to go back to school. So I ended up taking advertising copywriting. Just, you know, to add to my list of things that complemented one another. But you know, they didn't. I don't think I was ever gonna be a great writer either. But regardless, it was like a one year postgrad program that... It was sort of set up to build your portfolio. Like I was making making fake ads to go into my portfolio. And by the end of the year, you'd ideally like get a job at an agency. Which I thought I wanted to maybe do design. I wanted to go, like, work in an advertising agency making like... doing the visuals for ads. But that year, I spent all the time working like on the... I spent more time working on the design for the ads, those fake ads I was making, as opposed to actually like writing good copy. And that year I learned a lot about typography, a lot of like graphic design basics. And that was all kind of like sort of self-taught, sort of like I knew where to pick things up from what I previously learned. And I think this just reminded me that I really just wanted to be a designer. And I spent a lot of time working on my personal website to showcase like these fake ads, but I also designed a lot of fake websites to practice design. I really just wanted to showcase my web design work in my portfolio. So I did... And at this point, I was much more confident with my design work and I just used that as my portfolio. And I started interviewing, like doing informational interviews of companies. And that kind of landed me my first job so and then I've been doing that for about 10 years now.

**Kelly** 6:36  
Wait your first job was the same company?

**Steve** 6:39  
My first job was at like a small web design agency in downtown Toronto. We worked on more like marketing sites, a lot of like Flash games that I was working on. Yeah, and then, you know, and then I ended up working at, like, more like startups and then I worked at like different companies. I worked at, like, sort of an educational company. Like we build like e-learning software. And then following that... I got burnt out with that job. Because I was really dedicated to that job. Like I took my work home with me a lot. And I didn't like that. And I really liked working on my own stuff in the evening as well. But I had to get out of that job. I went to... I got a job at like an insurance company. And it was sort of like a job where didn't really care if I got fired, to be honest. I'd work my like eight hours a day. But by the time my day was done, I wasn't stressed out. And I was able to like work on freelance work or just my side hustles right.

**Emma** 7:40  
It wasn't challenging you.

**Steve** 7:42  
Yeah, exactly. And so I did that for a while and sort of built up. I started working on some, like, little side projects. Sort of like started building my audience on Twitter and I thought that might lead to like more exciting fun projects. And then after working at that job for like two years and kind of doing that side hustle for two years, I kind of built up a little bit of a reputation. So I could kind of take the leap and I... At this time, I met my friend, Adam Wathan, the guy I co-wrote the book with, and he was kind of building a reputation within the Laravel community. And he started... He was friends with Taylor, who's the creator of Laravel. And he kind of recommended me to him, and Taylor give me a few projects. And then he also worked in an agency called Titan Co, which is based out of Chicago. And Taylor and Titan, they both needed a designer, but they didn't need one full time. So we worked out something where I worked like one week with Taylor, one week with Titan, and I had one week off to kind of do other freelance work or just do side hustles. And during that time, week off, I'd spent a lot of time like just kind of building my audience more and... But it was a nice flexible position to be in. To do that. To work on side hustle.

**Kelly** 8:57  
That is a dream situation. Especially, you know... I've spent a lot of time doing the freelance projects and having those like long term solid like clients that you can kind of work from and base your, you know, your salary off of essentially, and then still have that entire week to do your own project. That's amazing.

**Steve** 9:13  
Yeah, it was really nice. I'm really grateful for the guys for like, kind of setting that up. And it worked great for them because like I said, they didn't need a full time designer, but it sort of kind of paved the way for me to. Like, I started growing my audience, but I also still had like them kind of like helping me out through that process. So it was great. And then that led to like... After working with him for a while, I started building my audience. Like I mean this is sort of like tells the story of like, when I started working on the book. I spent a lot of time... like people... like I said know me before like from the hot tips. I was starting to do those on Twitter. And they started getting more and more popular. It turned into like I started realized I'm gonna like... I might work on a book or something. I had that idea a while ago. And the way they kind of... they were pretty flexible in the sense that like, they knew I was going to be working on a book. And I said, I need some actual time off to finish this book. And about three months prior to finishing the book I said, Can I just have the time off unpaid? And, you know, if the book doesn't do well, I can come back. If it does do well, we can start that conversation again. So they were really flexible in that sense.

**Emma** 10:21  
That's super great.

**Kelly** 10:22  
Yeah, that's awesome. I'm curious what your typical day to day, like, is now.

**Steve** 10:26  
Right now, I'm kind of working full time with Adam. Like we did the book together. And that kind of gave us like some... They gave me my financial freedom. Adam was already kind of working. He had already had success working on a few courses, like video courses. And... but after the launch of _Refactoring UI_, we were... Like I was able to, like, just go full time doing my own thing. And what... The project we're working on right now is we're building... Like Adam does... Adam Wathan, he's mostly known for creating the Tailwind CSS framework. Like I said, he's been successful launching video courses on like Vue and TDD. And he does like a fullstack... He does a podcast as well called Full Stack Radio, and he contributes a lot to the Laravel community. But he's been working... We've been kind of working full time on Tailwind for the past year, on and off. Like I've been doing a lot of other things. Like I've been doing a lot more conference speaking this year. And I mean, that's worth noting, too, because like I spent a lot of times this year just preparing conference talks, because like conference talks take me like a long time to make. like, just my process for making a conference talk is like writing a talk. And like kind of scripting it in a way. Even though I don't like read it word for word, it is sort of a script. Because I'm kind of doing a refactorings on stage and it needs to be like laid out in a nice flow. So I spent a lot of time doing that this year.

We were working on Tailwind and we're kind of gonna be releasing another project together. Like another commercial project, but sort of attached to the Tailwind framework. So Tailwind is sort of this... It's a CSS framework that takes like a utility first approach. So sort of the elevator pitch to it is like if I wanted to... Each sort of like CSS property has a class attached to it. And it has sort of a design system attached to it. So let's say if I want to design like a button, right, it would be like, I decide... In the markup, it would be like, I'd have a bunch of classes, utility classes, attached to it. So it would be like, text, white, background color would be like whatever color you define, border radius, and it had a bunch of utilities attached to it. And that is kind of... It's done pretty well. It's become quite popular. And the... But still, people still want the components with that, like, I mean, Tailwind doesn't come with any prebuilt components. So people still want that. So we thought that's a great way to sort of monetize that project. So we're building prebuilt components. They're designed by me, built by Adam. And we're gonna... we've been working on that full time for the past three, four months now.

**Emma** 13:07  
I am excited for that. I've gotta say, as someone who works on design systems, like, that's thrilling to hear. I'm looking forward to that.

**Steve** 13:15  
That's great. Do you use Tailwind? Have you kind of dabbled in Tailwind yet.

**Emma** 13:18  
So, ironically, I started an open source project for coding mentors called Coding Coach and my lead dev is obsessed with Tailwind. Like as someone who runs the open source project, like, I don't actually develop anything. And so, like, I haven't used it but everyone keeps coming to me like, Have you used Tailwind? Have you used Tailwind? It's awesome. So I haven't but I plan to.

**Steve** 13:41  
I have. A lot of people are a little turned off by it. Like, looking at first glance. Like all the... They see all those utilities in the markup and that kind of looks messy. But honestly, like, once you start using it... Like, the only critics I find that are around the Tailwind are people who like have just looked at it and never played with it. But like once people use it, they're like, I can't go back to anything else. This is the way to write CSS. So...

**Emma** 14:07  
I think that goes without saying for most things. I mean, there's going to be a bit of a learning curve, but you have to accept that learning curve. If you're ever going to give like a valid opinion. Like I guess.

**Emma** 14:16
It's not even just like a learning curve. I feel like it's like a paradigm shift almost, right? Like things like...

**Kelly** 14:22
Yeah.

**Emma** 14:23
The thing is, like, we see JavaScript evolving alot just because it's such a fast paced language, like programming language, right? But CSS doesn't really change very often. What, like, we had Sass come out, which is great. But then CSS variables came out. But now, you know, Tailwind was the first big thing that I heard of recently. That was like the next big thing. So it's just a paradigm shift that people have to get used to.

**Steve** 14:45  
Yeah, definitely. Tailwind sort of, like, made me more confident as a developer. Like I hated sort of managing two files, where I had my markup in one file, then I had my CSS file and just, it got so messy for me so quickly. And I was so embarrassed handing it off to an actual developer. Where Tailwind, it's all just in one file. It's like... it's pretty clean if you ask me. When I hand it off, and it's... Like, what I hand off is pretty close to what a developer would make in Tailwind, you know what I mean? So...

**Emma** 15:16
Right.

**Steve** 15:16
I like it in that sense. Like Sass with stuff.... So like when Sass came out, like that just made it even harder for me 'cause it was just, like, more stuff to, like, put on top of this thing that I already don't understand fully. So...

**Emma** 15:28  
Right, all this syntactical sugar. Yeah, I totally empathize with that. But it seems like Tailwind is one tool that's helping bridge the gap between design and engineering. And for me, that's kind of what _Refactoring UI_ did. And we'll get into _Refactoring UI_ in just a second. But I want to quickly touch on Hero Patterns and Heroicons, because those are also two really cool projects that you work on. So could you just give like a high level overview of what those two are?

**Steve** 15:51  
Yeah. So Hero Patterns is a collection of SVG background patterns. I sort of made that just to fulfill my desire to build things and put them out there into the world. I... This was a time where like I... I built that to sort of help build an audience because I thought it'd be... like I thought would lead to cooler opportunities, like I said. And I think making, like, free resources like that is... It's a great way for any designer to create value, right? And prior to this, like I released like a free open source icon set. So I thought it'd just be a fun project because there weren't a lot of resources out there like that at the time. Like there was, like, there was like subtlepatterns.com, which is background patterns, but there's nothing that kind of utilizes the... utilize like SVG. And SVG was... I think it was kind of like still a little foreign to a lot of people, the whole technology there. So that was a fun project. And you know, that... it's still like a lot of people still visit that to this day. And I don't really update that site at all anymore. I want to start updating again, but you know, time.

Heroicons, they're a set of SVG marketing icons that are... They're sort of designed to be easy to customize with CSS, like, so each SVG icon has multiple paths inside of them. And they each of those paths has like a unique CSS class. So you can easily change the colors. So, like you can divine like an accent color to align with your brand. Again, I sort of made that to fulfill my desire to build things and put them out there into the world. This is...

**Emma** 17:34  
These are gorgeous. I just want to say for those of you not watching, these are beautiful icons. And like, I haven't seen anything like this personally. We'll link it in the show notes. But the amount of detail in these SVGs is insane to me.

**Steve** 17:44  
Yeah. Well, thanks. Yeah.

**Kelly** 17:45  
Yeah. And I think one of the coolest things about this in particular is we're so like... we visit a website and everything's always Font Awesome when it comes to icons.

**Steve** 17:53  
Yeah, which is like...

**Kelly** 17:56  
So switching things up is amazing.

**Steve** 17:59  
Yeah and they like... The Font Awesome icons are sort of designed to be like more of like in a sort of like within an app like, like a small icon. And then the... but like developers will like blow them up to be like three times the size, their intended size, and they look awful. So, I mean, thanks. Like, I mean, Heroicons. I mean... I think... I mean, maybe you can relate, but it's just like, it's something I did a while ago. I'm not proud of them anymore. I think they're ugly. But... They're a little dated.

**Emma** 18:24  
Oh I like them but I'm also just purely an engineer. So...

**Steve** 18:27  
Yeah. But you know what I mean, when it's just like you work on something and you just kind of look back at your old work and you're like, I can't believe I did that, kind of thing. So, like, I've always thought about like, kind of discontinuing them because I really liked the Heroicons name, and I like that domain name. They're sort of like the hero icons. Yeah, and I really like the whole brand around that like the... Like I also have a few other domain names that I'm kind of holding on to for like other like hero resources and sort of building a brand around that. Yeah. And I really want to turn Heroicons into like a bigger, like, thing. Like, much more like where it has multiple sets of icons, and... But you know, time. Maybe I'll get to it eventually.

**Kelly** 19:04
Tat's super cool.

**Emma** 19:05  
Yeah, for sure. I think that's cool. And just, you know, I think a lot of developers understand why SVG is important, but they don't necessarily understand that as you scale them, the level of granularity can become more granular. Like all these simplistic smaller SVGs are not meant to be as detailed as the larger ones. Like that's something we take for granted.

**Steve** 19:24  
But Heroicons was... Yeah, it was cool. Like, I was like... The difference being that project and Hero Patterns was I made Heroicons a commercial product. I thought I'd be cool to try and sell something. I think it made like, like 10K in the first week, which is like....

**Emma** 19:36
Holy heck.

**Kelly** 19:37
That's awesome

**Steve** 19:38
It's respectable for like a first time launch online. So I think it's made like... And that was before I had, like, kind of a following. So it's kind of continued selling today. I think it's... Like I launched it like, three, four years ago. And I think it's made like 30K.

**Emma** 19:50  
Oh my gosh, this is just to anyone listening that like if you have something that you're proud of, you can monetize it and make money, like passively, and there's no overhead. If you're doing like electronic goods.

**Kelly** 20:01
And I think even to push it further, even if you're no longer proud of it, it's still going to make you money.

**Steve** 20:08  
Well it's just out there and I don't touch it anymore. I haven't touched it since I launched it.

**Kelly** 20:12
Yeah.

**Steve** 20:13
And that's nice. And it just kind of makes passive income. Yeah...

**Kelly** 20:15  
It's the dream passive income scenario. You literally don't have to do anything, even as far as maintenance goes, like they're out there. They're ready for you. This is like the perfect idea for somebody who's looking to get into some kind of passive income stream.

**Emma** 20:28
Absolutely. So, okay, with that, I want to transition into one of my favorite books of all time. I vaguely... I distinctly remember exactly when I read it, sitting at my dining room table. And it was completely night out. But I sat there and I read the entire book, from cover to cover in one sitting. And I am just like a huge fan girl of _Refactoring UI_ because until I had found this book, I had struggled with design and I still... Like my designers will tell you I still struggle with design but not to the extent I used to. It just... It made so much sense and if, you know, some of the... It's not just a book. I want to say that. Right? Like you have a series of blog posts, and I'll let you like, discuss that a little bit more. But...

**Steve** 21:08
Yeah, sure, sure.

**Emma** 21:10
Yeah. I mean, you just go to _Refactoring UI_, which we'll link in the show notes. And some of the articles that come up are seven practical tips for cheating at design, or how to use fewer borders, and thinking outside the database. And so all of these are so practical and so actionable, that they're invaluable. So do you want to just give a quick overview of what is _Refactoring UI_? How did you go about building it? What was that process like?

**Steve** 21:31  
So yeah, _Refactoring UI_, it sort of aims to teach design to developers using like, you know, sort of aims to like use... Do design with tactics instead of talent. I mean, a lot of developers, they just want to make their stuff look good without learning all the graphic design theory. They just want clear, actionable knowledge that they can take and apply to their design right away. It's like instant gratification, right? The sort of the inspiration around _Refactoring UI_ always is like... I've been working with Adam for a few years, and like we've been working together for like, five, six years now. And early on, we started working on a few projects that will probably never see the light of day. But it's sort of... God, like we realized we liked working with each other. He would always wear the developer hat. And I would wear the design hat. And we found ourselves working on design together a lot. And he was really interested in design as well. And the way Adam's brain works is that he'd really try to understand that designs, the design decisions I was making, from like a very logical, analytical point of view. And like most designers, I was just more of like, sort of the intuitive creative type. And just the fact that I had been doing it for so long. I just sort of relied on my instincts to make a lot of decisions. And sometimes he would like point out something that I did that he thought was interesting, and he would articulate in a very clear logical way... and that made sense to me.

Adam, like I said, he had a lot of success with his courses. With launches getting up into the six figures in sales, which was really inspiring to me. And I thought I could make a book targeted towards developers teaching them design in sort of that logical way that Adam approaches it. I mean, going back, I'm like, really... At this time, like, I mean, this is back when I still was trying to build my audience. And Adam really encouraged me to grow my audience in that sense. And I always had the idea of like, making like a book, but it's become like, sort of this big project, right? Where it's become a series of blog posts and videos and tips. And that really helped grow my audience and the tips just went viral. Like they went way bigger than I ever expected. That sort of became like the marketing engine for the book that we put together. At first, when I started making tips, I would be like working on a project and I might like, notice something I did a few times and I'd be like, Oh, that's a cool little insight there and I took a screenshot of what I was working on and made a little... like wrote a little thing of like what I did and why I did it. And the first few did well like on Twitter. Like I had maybe, like 1,000 followers at the time. And the these tweets were getting like 40 or 50 likes, which was a lot of like Twitter engagement for me at that time. And then each one was getting bigger than last. So eventually they're gonna get 300 likes, 400 likes, and and then... Also like Adam started, like getting involved when I was making like tips. So he might share like a little insight and I would spend some time... Like sometimes up to like a week working on it passively. So he'd come up with like a little tip idea. Maybe that I didn't really think of like as a tip but it's like he's at developers. He's like, oh, no developers like love this. They will eat that up. Where for me, like like one tip he gave me was like, Oh, like, add like a little vertical offset to box shadows. Right? And for me, I just always did that. I just thought like, yeah everyone knows that right? And he goes, No, developers have no idea man. And I'm like, Okay, awesome. So I made that tip and I, you know, put together something and that blew up. That got like 1,200 likes when I first posted it. I'm like, okay, there's like something here and we kept on putting tips together. And sometimes we spend like, like two weeks on a tip. Like from like the birth of an idea to like building... Like they become much more polished after. It wasn't just me taking a screenshot anymore, but it's me like making an original little design to communicate that idea right?

**Emma** 25:29  
That's funny and it's funny that box shadow was one of those things, because that to me is an enigma. I... Every box shadow I make looks terrible. I don't know how to use them. And I don't know how to make them look good. So that's...

**Steve** 25:40  
Yeah, like developers would like do like equal spread around the entire like container and it would be like a big heavy..

**Emma** 25:48
Yeah, it's glowing.

**Steve** 25:49
Yeah.

**Kelly** 25:50  
Yeah, I feel like I'm guessing and like grasping at straws every single time I use box shadow. Again, every single time.

**Steve** 25:58  
It was funny. It was like when he pointed out to me, I'm like, Okay, there's like... There's a lot more stuff I know that I didn't think I knew, kind of thing. Anyways, like Adam was helping me so much that it only made sense, it only seemed fair to like a formal partnership and co-write the book. And I think it turned out infinitely better because of that. So... But we wanted to kind of keep that marketing engine going. We did a few blog posts. We did a blog post together. And the first one we did was sort of like, taking a site that someone sent us. And it was a Medium posting, like, but the beginning was the original design they sent us and then we kind of go through the design step by step, improving and by the end, it was like a nice polished design. And we did... We thought we're going to do those like every week. But it took us so long to make that one. We're like yeah, let's not do that again. And, but we thought it'd be cool to like, do those... Do that format in the form of a video. His idea for that was like, like, you should just do like a livestream and like do refactoring in like an hour, right? Or like an hour or two, right? But that didn't really appeal to me. Like, I'm not really good at live streaming, I've tried it before, it's just like, especially with design, it's like... Like me designing, half the time I'm just like, just sitting there thinking like, Oh, what should I do here and it's like, that won't be a really good livestream. But like, I thought, what if I do like a more like post production, like, like a nice 15 minute video or, you know, I spend like two weeks making the like, design and then kind of taking it from beginning to end and then doing all this post production, like adding music to... Making it look much more like a fun video. And those did really well. Like I knew like I also wanted to spend a lot of time on it and making it really good. Because I knew like I already started building a following. I already had like a newsletter of like 10,000 people on it at this point. And we're going to mail it out to that mailing list. So I want it to be like really high quality because I knew like it was gonna get a lot of eyes on it and if it was really high quality it was gonna do even better than that. And they did really well. It's... The second video I posted, it got posted on Reddit, it got posted on like on Hacker News and those went all viral. So everything was just working out great for us.

**Emma** 28:11  
You have 157,000 views on this one and for those listening we're going to link his screencasts down below in the show notes. And I remember watching some of these. It's basically like Fixer Upper but UI edition and I love it. So highly recommend checking those out because I think it's easy to sit and say like, Oh, instead of a border use you know different spacing or you know, different... Like maybe use uppercase text and titlecase text to like section things a little bit easier, but to actually watch the process from start to finish is so fascinating.

**Steve** 28:42  
Yeah, there's, like, little tips throughout the video, but it's just nice to see the design transformed throughout the entire duration of the video. I think so. Well, I mean, when it came time to write the book, like, Adam and I, we, like, worked together, like, we spent a lot of time, like, working on an outline for the book. When it came time to write it, the way the work was split up, is... Adam would sort of craft all the words and I would put all the images together. And that was like a good, equal distribution of work. Adam was like, I think much better at articulating the concepts than I was. It's sort of like taking this... a lot of stuff that I knew and sort of filtering it through the developer brain to communicate it better to developers. And, but, like, there's also, like... It's basically also like a picture book, there's like 300 images in the book. I think I put together... They're all, like, original designs. So it was a lot of work on both of our ends to put that together. But it took us like three months from beginning to end working on it full time. And it was exciting and... It's sort of like... When we launched, it was sort of this bittersweet, kind of... Like, I really liked the process of making something and when it's out there, it's kind of like, Okay, what do I do now? Right? And, you know, fortunately, Adam and I kept working together and working on other projects together. But at the time, I didn't know that was going to happen. I didn't know we were going to continue to work together. I thought that was like, okay, we launched this, and we're going to go do our own things now. So...

**Emma** 30:16  
Wow. Yeah, that's really cool. And I think that's super inspirational as well. I think writing an ebook, in particular, because you don't do physical copies, correct? It's just ebook.

**Steve** 30:26  
Yeah. Like, a lot of people want the physical copy. They keep asking, and it's...

**Emma** 30:30  
Oh, I would totally buy that in a heartbeat.

**Steve** 30:32
Yeah, I know.

**Emma** 30:33
But that's a lot harder to do.

**Steve** 30:35  
It is. And we we are kind of thinking of making not just an ebook, but like more of like a web-based version.

**Emma** 30:45
Yeah

**Steve** 30:46
That'd be like the next edition. Because we have we have ideas for like a second edition of... Like, we have a few new tip ideas. And we thought it would be cool to deliver it in like... sort of like a web-based version where you can maybe... Like maybe we can include some animation chapters in it. And that would really lend itself to the web-based version. So...

**Emma** 31:06
Yes, please.

**Steve** 31:07
That's sort of the next phase. But that's... You know, I mean, we got a few projects, though, that we're going to put up there before we do that. So...

**Emma** 31:14  
Awesome. You know, that's really cool. I'm looking forward to all of that. I would love to see a web-based version of the book. And of course, animations sound incredible.

**Steve** 31:22  
Yeah. And it seems... It's just more environmentally friendly, I guess, than a physical...

**Emma** 31:26  
Oh, absolutely. Absolutely. I want to maybe switch gears for a second. And I want to talk about some maybe like tangible piece of advice, like, from a design perspective. So, like, first of all, like, what do you what do you think... What areas of design do developers struggle the most with? In terms of maybe like color, typography, spacing, things like that?

**Steve** 31:45
I think like spacing is always like... It's probably the most common one. I feel like it's becoming less and less of a problem with... When I see it, like, developer's design. Spacing is sort of like when you go to like a blog posts of like the, you know, the five ways to get good at design. It's like spacing is always at the top of those posts and so it's sort of been drilled in the heads of developers. That's like the problem area. So I'm starting to see that improve.

When I see developer designs, I think page width is a big one for me. So I can see sites with like, you know, they have a 1280 page width, and like the paragraph texts will stretch the... across the entire screen. And I think it's important to understand like, it's okay to constrain your content, even though it's not gonna... Like you... Just because you have the real estate on your display, it doesn't mean... It doesn't make for an enjoyable reading experience if your eyes have to jump from one end to the other of your huge display.

Another thing is fonts. I mean, developers will often rely on like Google Fonts, which are okay.

**Emma** 32:40
Yeah.

**Steve** 32:41
There are a few good ones for sure. It's sort of like Font Awesome. It's like you see developers just using over and over and over again. It's... I see that with fonts too. Like every developer will use like Lato or Open Sans and it's just like... I think it's really worth investing in a few good fonts, or using a font service like Adobe Fonts or... It's... I think it's noticeable when you have like, good original fonts, you know?

**Emma** 33:07
Oh, absolutely.Like that kind of... It, like, sets certain websites apart. Absolutely.

**Steve** 33:13  
Yeah, exactly. Exactly.

**Emma** 33:14  
Well, it's funny going back to like paragraph width. It's like, as developers, we kind of forget that users exist sometimes because we're kind of far removed from users. Design has a much, much closer presence to them. And so we forget the fact that people's eyes get tired when they're reading long width paragraphs. Not only that, like if your line spacing is too condensed or like, your characters are too condensed, like all of these things affect the physical ability of someone to read. So while we do have the real estate, like you said, you don't need to use it. You should... I feel like you should know how to efficiently use the space your given without just trying to fill everything.

**Steve** 33:54  
Yeah, yeah, what's like the recommended? So there's a recommended like amlount of characters you should have on a line. I... It's funny. Like I think it's like 80 characters or something like that, or... But, you know what I mean. Obviously, like, it's... There's like some guidelines but...

**Emma** 34:11  
Right. Well, I would love to ask you if you could give like a quick, not definition, but like, as a developer when I was starting out, I didn't realize that design has multiple different areas. Like the difference between UX design versus visual design. So could you briefly just tell our audience maybe what the difference is?

**Steve** 34:28  
Yeah, I mean, it's funny, a lot of designers like are just like, Yeah, I don't really know what the difference is.

**Emma** 34:34
Oh.

**Kelly** 34:35  
That makes me feel better.

**Steve** 34:37  
No, I mean, there is definitely overlap. UI design is sort of like... It's user interface. It's sort of like the thing you kind of see and interact with. Like UX design is sort of everything. Like, UX design, is UI design, right? Like, it is the user... The UI is the user experience. But UX is sort of like everything. It's sort of like just my... Just the experience of like sitting at my computer, opening the browser, before I even get to your site is part of that experience. And so it's just everything around that right. And it's sort of like... Like, I think a good UX designer is able to almost like look at the user's day and like, say, like, What does their day look like? And when, when are they like... And what do they do from like, to get from point A to point B, you know what I mean? And that involves everything from like, Yeah, I don't know. It involves everything from just like I said, like just sitting at your desk and like just browsing on the internet and taking a break and going to do the actual the job that needs to get done. I don't know is that a...

**Emma** 35:38  
Well, I threw that curveball question. That was like a special one. I hate when people ask me those kinds of questions in interviews. So I guess I'm sorry that I asked you that.

**Steve** 35:49
No, no, it's ok.

**Emma** 35:50
No, I think it's, you know, we forget that design is not making things look pretty. Having a nice looking UI is part of the process but at the end of the day, there's a lot of psychology behind why things are done the way that they're done. When we think about UX heuristics and how people navigate throughout a user interface, and... Like, for example, if you take the process of checking out on a website, you know, one of those is you want to have all the information readily available at every step of the process. So they aren't sitting there. If they're buying a flight, they're not questioning, did I pick the right date? Or, you know, how much is this going to cost? Like, make that information readily available at every step? You know, and making sure your information architecture makes sense, like these are very important things that I think as engineers, we are either unaware that this is important, or that it exists, or we kind of forget.

**Steve** 36:38  
Yeah, and like I said, like, the UI design is important. Like, it's, like, the visual design is all... It's all part of that user experience. And you know, some things... I think if something's more beautiful, people are willing to spend more time with it, regardless of if the experience is like, perfect or not. So...

**Emma** 36:56  
do you have any tips for a developer who is just starting out, they want to learn a little bit more about visual design maybe do you have any tips on when you should use a border versus like spacing or you know, maybe anything like that.

**Steve** 37:10  
Let me just like look at my old Twitter tips that I can share.

**Emma** 37:14  
I already figured this out once. Let me just refer back to what I said before.

**Kelly** 37:18  
Reusing content is the best thing to do. So, absolutely. And also, we're definitely going to be linking to these tips as well.

**Steve** 37:24  
Yeah, for sure. For sure. I was just trying to think of like the most like radio friendly tips. Like some... Like, a lot of stuff is, like, I have to explain to people, like, with a visual sometimes. It's like, what's like a good radio friendly tip?

**Emma** 37:36  
I know that's really hard. Like we just did a... We recorded another episode about, like, algorithms and data structures. And do you know how hard it is to describe those things without having visual diagrams?

**Steve** 37:47  
It's sort of funny when you go on these podcasts, and it's just like, explain, like design without visuals.

**Emma** 37:53
Yeah.

**Steve** 37:54
Oh, yeah. Yeah, like, I mean, just looking at some of my tips here. Some of my favorite are like, you know, like using fewer borders, like this... Borders can make a design look really busy. I try to replace borders with like more space. You can also use like a different background colors to kind of distinguish two sections of a design instead of like adding a border in between them. If you have like a container that's on top of something, instead of like putting a border around it, like maybe just add a box shadow to kind of create that distinction between the the foreground and the background. Another tip like I see designers do a lot, it's, like, don't use gray text on a colored background. Like when you use like pure gray text like just basically like black, that's just kind of where... Like instead of like something that's saturated a little bit. It always looks a little bit off on that. So if you use a gray text on like a blue background. It sort of looks kind of clashy. It doesn't really... It sort of looks off. So if you have like a blue background, instead of making the text gray, like saturate it with a bit of the background. So it's like sort of like has a little bit of blue hue in it. And I think that looks a little bit cleaner.

**Kelly** 39:07  
I mean, you gave the tip about the the length of text on the page. That still counts.

**Steve** 39:12  
Yeah, that's like... I think that's a great tip. Like just sort of be mindful of like your reading width when you read from like... Think about like when you're reading and when you read from like one end to the other, when you like jump from one line to the next, is your eye kind of getting really strained trying to figure out like, what line you're on.

One of my favorite tips is sort of inverting... It's an accessibility tip. It's sort of like inverting your background colors with like... Let's say you have like a red button with white text on it. Sometimes it's like, hard to get like good contrast ratios with that white text on a red button. Or even a better example is like like lighter colors like yellow or green right. Sometimes it's really hard to get like good contrast ratios with like yellow. If you like a yellow button and white text, that yellow... To get it like a good contrast ratio, it's no longer gonna look yellow, it's gonna start looking brown, right? So I find a good way to like treat that is like sort of invert it. So use like a soft light yellow background and make the text like, again, going back to that using like a colored text on a color background. So using like a darker version of that... darker shade of that yellow on top of the yellow button. I think that's... It's sort of like there's a double tip in there. Number one it like looks better, I think. It helps get like good contrast ratios. In some cases, if you want to, like de-emphasize something too, it's a little more subtle. So if you'd like a high severity button, you don't want that big red button like standing out more than your primary action on the page. Like if you want to... Like if you're gonna like have a like deactivate your account, it might be like a big red button and that's going to like overpower your like primary action on the page. You might want to de-emphasize that a bit. So again, using that like soft red background with the darker red text to... makes it more accessible and makes it more aesthetically pleasing, I find.

**Emma** 41:10  
Yeah, it's like, what is the most important thing on this page right now? And that's what needs to be emphasized the most.

**Steve** 41:15
Exactly. Yeah.

**Emma** 41:17  
Definitely. Awesome.

**Steve** 41:20  
I hope that came across clear on the radio. I was gonna say like, I'm like... At least, has this been communicated clearly?

**Emma** 41:27  
It did.

**Kelly** 41:28
Yeah. It made sense to us. So at least you had two listeners who got it. Yeah. So I have one final question for you. And that's where can we find you on the internet, website, social media, shout out to whatever you want.

**Steve** 41:40  
I can be found on Twitter, @steveschoger. You can go to refactoringui.com. That's where we kind of share all of our _Refactoring UI_ resources. refactoringui.com/book is where you can find the book. Like I said, I'm heavily involved in the Tailwind project. So you can check out tailwindcss.com, if you're interested in learning what that framework is. You can check it out there. The components we're releasing for that project, which we're hoping to launch in February, is Tailwind UI. So it's tailwindui.com and... Yeah, and I guess you'll have in the show notes, we talked about Hero Patterns, Heroicons, I guess they're all worth checking out. So yeah, that's all I can think of at the moment. I have a YouTube channel, so just...

**Emma** 42:22  
Go check him out and he has like 30,000 subscribers. He's great.

**Steve** 42:25
Do I?

**Kelly** 42:26
Wow.

**Emma** 42:27
Yeah. Oh, you didn't know that?

**Steve** 42:30  
You know what, I don't go... Those videos like burnt me out. I stopped making them.

**Emma** 42:35
Yeah.

**Steve** 42:36
I want to make more. It just takes so long to produce one. And I don't really... I'm not super active on YouTube, but clearly I should be more because that's a lot of subscribers.

**Kelly** 42:48  
Awesome. So thank you, Steve, so much for taking the time to talk with us today. I know Emma's been fangirling about this particular episode for... ever since it was scheduled. Let's say that. So yeah, thank you. Thanks again so much. And we'll have all these things linked in the show notes. So, yeah.

**Steve** 43:06
Okay, awesome.

**Kelly** 43:07
Yeah, thank you. If you liked this episode tweet about it. We're actually going to be giving away one copy of Refactoring UI. So we'll be picking one tweeter to win. And we post new episodes every Monday so make sure you subscribe to be notified and leave us a review.
