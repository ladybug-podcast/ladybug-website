**Emma** 0:00  
One of the biggest things that developers struggle with is design. It's super easy to look at an application and know that it looks terrible. But it's harder to explain why. This episode, we're joined by Steve sugar, co author of the hugely popular refactoring UI, will learn some design tips and dive into the story behind the book, as well as other projects hero patterns and hero icon. Let's dive right in.

**Kelly** 0:25  
Welcome to the ladybug podcast. I'm Kelly. I'm Allie. And I'm Emma. And we're debugging tech industry.

**Emma** 0:33  
Hey, Kelly, have you heard about this cool tool called AWS amplify? Tell me about it. It's a suite of tools and services that enables developers to build full stack serverless and cloud based web and mobile apps. You get to use whichever framework or technology you want on the front end.

**Kelly** 0:46  
That sounds cool will help me get up and running with things like hosting. Yeah, authentication. You betcha. Managed graph QL. Totally. How about serverless functions API is machine learning chatbots file storage.

**Emma** 0:58  
Yes to everything. amplifiers built, especially in a ways enabled traditionally, front end developers like yourself, Kelly to be successful because you can use your existing skill set to build real world full stack apps than in the past would require deep knowledge around back end DevOps and scalable infrastructure. The amplifi console also allows you to use a GitHub repository to deploy to a globally available CDN. With ci and CD built in. It's super cool. Where can I learn more if you want to learn more about AWS amplify, visit AWS dash amplified.github.io? First of all, thank you so much for coming on our podcast. you're someone that I've admired in the industry for a long time. So I'm thrilled to be talking with you.

**Steve** 1:38  
Yeah. Thanks for having me core. So I

**Emma** 1:40  
guess we'll just jump right in. And could you just like give us an introduction of who you are. Tell us more about your coding and design journey and just yeah, let's just hear it all. Sure.

**Steve** 1:49  
So I'm a visual designer from Ontario, Canada. Many people know me as sort of the guy who posts pot design tips on Twitter. I post ui refactorings on YouTube, so I take like a user submitted design that's like kind of poorly designed and refactor by the end of the video. It's all like looking nice and polished like something a designer would do. I most recently co wrote the book refactoring UI, like you said, with my friend, Adam Watson, that aims to teach design to developers. My journey into design, I guess, this sort of starts as like when I was a child, I always had a general interest in like art and design. I like to I like illustrating a lot when as a young kid, like if my mom needed a break from like parenting, she's able to just give me like some pencil paper and I was able to spend hours drawing pictures of like my favorite cartoon characters. In high school, I got really into like music and playing guitar and I was like, coming up with like, Cool band name ideas and then making logos for them. And I wasn't quite sure what I wanted to do. After high school. My art teacher, he kind of encouraged me to take this new course that was being offered at Fanshawe College. In London, Ontario, which is called it was called multimedia design and production. It was a brand new program. And it was a really practical hands on program, which is how I learned best. And this covered everything from design. Like we learned a lot, a lot of like Photoshop basics, like a lot of the Adobe basics. We learned some video production, and then some web development. So it was kind of just like a little bit of everything to get my hands dirty. And I mean at the time, this is like in 2004. So we were learning a lot of flash. And flash was still owned by like Macromedia at that at the time. So super dated stuff that I like, you know, I had to like relearn everything after I finished that program. Regardless, when I stick in that program, I was really drawn into the design stuff. I I learned some basic front end development, but I mean, a lot of that was like relying on dream weaver to put a site together, which was fine split, you know, got me started in web. But yeah, I was really interested in making like websites and putting that stuff together. But following that program, I took music industry arts, which is because I really wanted to get into the music business and it was at the same college it was kind of a hard program to get into. I applied to it the first time around and I didn't get in. But then after I had my multimedia diploma, they accepted me into the program. Following that program, I spent a lot of time interning at a few like record labels doing a lot of stuff I was doing from multimedia. So I was like managing websites. And I was designing like MySpace pages, which I really enjoyed, but I wasn't getting paid for anything I did because it was the music industry. So I did want to get a job in design. But I also lack the at this time, I kind of lacked the confidence as a designer, like I understood a bit of web and a bit of design, but I didn't really get really great at either, I was just kind of like a jack of all trades, master of none kind of thing. So I just locked all the comps to that this is also the peak at this time. This is like the peak of the 2009 recession. So this time I thought like it was like really hard to get a job in anything. I thought not about time to go back to school. So I ended up taking advertising copywriting just, you know, to add to my list of things that complemented one another. But you know, they didn't. I don't think I was ever gonna be a great writer either. But regardless, it was like a one year post grad program that this was sort of set up to build your portfolio like he was making making fake ads to go into my portfolio. And by the end of the year, you'd ideally like get a job at an agency, which I thought I wanted to maybe do design I want to I want to go like work in an advertising agency making like, like doing the visuals for ads. But that year, I spent all the time working like on the I spent more time working on the design for the ads, those fake ads I was making, as opposed to actually like writing good copy. And I like that. Yeah, I learned a lot of what type autography a lot of like graphic design basics. And that was all kind of like sort of self taught sort of like I knew where to pick things up from what I previously learned. And I think This just reminded me that I really just wanted to be a designer. And I spent a lot of time working on my personal website to showcase like these fake ads, but also designed a lot of fake websites to practice design I really just wanted to showcase my my web design work in my portfolio. So I did and, and at this point, I was much more confident with my design work and and I just use that as my portfolio and and I started interviewing, like doing informational interviews of companies and that kind of landed me my first job so and then I've been doing that for about 10 years now. So

**Kelly** 6:36  
late your first job is the same company.

**Steve** 6:39  
My first job was at like a small web design agency in downtown Toronto. We worked on more like marketing sites, a lot of like flash games was was working on. Yeah, and then you know, and then I ended up working out like more looks like startups and then I worked at like different companies. Like, sort of a an educational company, like we build like a learning software. And then following that, I got burnt out with that job. Because I was really dedicated to that job. Like I took my work home with me a lot. And I didn't like that. And I really liked working on my own stuff in the evening as well. But I had to get out of that batch job I went to I got a job at like an insurance company. And it was sort of like a job right? didn't really care if I got fired, to be honest. It I work my like eight hours a day. But by the time my day was done, I wasn't stressed out. And I was able to like work on freelance work or just my side hustles right.

**Emma** 7:40  
It wasn't challenging you.

**Steve** 7:42  
Yeah, exactly. And so I did that for a while and sort of built up. I started working on some like little side projects, sort of like start building my audience on Twitter and I thought that might lead to like more exciting fun projects. And then I After working a backdrop for like two years and kind of doing that side hustle for two years, I kind of built up a little bit of a reputation. So I could kind of take the leap and I, I at this, I met my friend, Adam wise and the guy who co wrote the book with and he's kind of building a reputation within the Laravel community. And he started, he was friends with Taylor, who's the creator of Laravel. And he kind of recommended me to him and gave Taylor give me a few projects. And then he also worked in an agency called Titan CO, which is based out of Chicago. And Taylor and Titan, they both needed a designer, but they didn't need one full time. So we worked out something where I worked like one week with Taylor one week with Titan, and I had one week off to kind of do other freelance work or just do side hustles. And during that time, week off, I'd spent a lot of time like just kind of building my audience more and but it was a nice, it was a nice flexible position to be in to do that. to work on side hustle.

**Kelly** 8:57  
That is a dream situation, especially You know, I've spent a lot of time doing the freelance projects and having those like long term solid like clients that you can kind of work from and base your, you know, your salary off of essentially, and then still have that entire week to do your own project. That's amazing.

**Steve** 9:13  
Yeah, it was really it was a really nice I'm really grateful for the guys for like, kind of setting that up. And it worked great for them because like I said, they didn't need a full time designer, but it sort of kind of paved the way for me to like, like, I started growing my artist, but I still had like them kind of like helping me out through that process. So it was great. And then that led to like after after working with him for a while. I started building my audience like me, this is sort of like tells the story of like, when I started working on the book, I spent a lot of time like people like I said no way before like the Hot Tips. I was starting to do those on Twitter. And they started getting more and more popular. It turned into like I started realized I'm gonna like what might work on a book or something I had that ideal A while ago. And the way they kind of they were pretty flexible in the sense that like, they knew I was going to be working on a book. And I said, I need some actual time off to finish this book. And about three months prior to finishing the book. I said, Can I just have the time off unpaid? And, you know, if the book doesn't well, do well, I can come back. If it does do well, we can start that conversation again. So they're really flexible in that sense.

**Emma** 10:21  
That's super great.

**Kelly** 10:22  
Yeah, that's awesome. I'm curious what your typical day to day like is now,

**Steve** 10:26  
right now. I'm kind of working full time with Adam. Like we did the book together. And that kind of gave us like some. They gave me my financial freedom. Adam was already kind of working. He had already had success working on a few courses like video courses. And but after the launch of refactoring UI, we're like I was able to, like just go full time doing my own thing. And what the project we're working on right now is we're building like and does. Adams Why then he's mostly known for creating the 10 CSS framework. Like I said, He's, he's been successful launching video courses on like view and TDD. And he does like a full stack. He does a he does a podcast as well called full stack radio, and he contributes a lot to the Laravel community. But he's been work we've been kind of working full time on tailwind for the past year, on or off. Like I've been doing a lot of other things like I've been doing a lot more conference speaking this year. And I mean, that's worth noting, too, because like I spent a lot of times this year just preparing conference talks, because like conference talks take me like a long time to make like, just my process from making a commerce talk is like writing a talk like and like kind of scripting it in a way even though I don't like read it word for word is sort of a script. Because I'm kind of doing a refactorings on stage and I it needs to be like laid out in a nice flow. So I spent a lot of time doing that this year. We were working on tailwind and we're kind of gonna be releasing another project together. like another commercial project, but sort of attached to the tail end framework. So tailwind is sort of this. It's a CSS framework that takes like a utility first approach. So sort of the elevator pitch to it is like if I wanted to each sort of like CSS property has a class attached to it. And it has sort of a design system attached to it. So let's say if I want to design like a button, right, it would be like, I decided that in the markup, it would be like, I'd have a bunch of classes, utility classes attached to it. So be like, text, white background color would be like whatever color you define border radius, and had a bunch of utilities hash it. And that is kind of it's done pretty well. It's become quite popular. And the But still, people still want the components with that, like, I mean, till it doesn't come with any pre built components. So people still want that. So we thought that's a great way to sort of monetize that project. So we're building prebuilt components there. Designed by me built by Adam, and we're gonna be working on that full time for the past three, four months now.

**Emma** 13:07  
I am excited for that. I've gotta say, as someone who works on design systems like thrilling D here, I'm looking forward to that.

**Steve** 13:15  
That's great yet Do you still one of you kind of dabbled into it yet.

**Emma** 13:18  
So ironically, I started an open source project for coding mentors called coding coach and my lead dev is obsessed with tailwind. Like as someone who runs open source project, like I don't actually develop anything and so like, I haven't used it but everyone keeps coming to me like have you used telling hubby's telling it's awesome so I haven't but I plan to

**Steve** 13:41  
I have a lot of people are a little turned off by it like looking at first glance like all that. They see all those utilities in the marketplace that kind of looks messy but honestly like once you start using it like the only critics I find that are around the tail end or are people who like have just Look out and are played with it. But like once people use it, they're like, I can't go back to anything else. This is the way to write CSS. So

**Emma** 14:07  
I think that goes without saying for most things. I mean, there's going to be a bit of a learning curve, but you have to accept that learning curve. If you're ever going to give like a valid opinion. Like I guess it's not even just like a learning curve. I feel like it's like a paradigm shift almost right. like things like, yeah, the thing is, like we see JavaScript evolving along just because it's such a fast paced lingo, like programming language, right? But CSS doesn't really change very often. What like, we had sass come out, which is great. But then CSS variables came out. But now, you know, tell him was the first big thing that I heard of recently. That was like the next big thing, the next big thing. So it's just a paradigm shift that people are used to.

**Steve** 14:45  
Yeah, definitely tell it sort of like made me more confident as a developer, like I hated sort of managing two files where I had my markup in one file, then I had my CSS file and just, it got so messy for me so quickly, and I was so embarrassed. handing it off to an actual developer, where tell when it's all just in one file. It's like, it's pretty clean if you ask me when I hand it off, and it's like, what I hand off is pretty close to what developer would make until and you know what I mean? So right, I like it in that sense, like SAS quit stuff. So like SAS came out, like that just made it even harder for me cuz it was just like more stuff to like, put on top of this thing that I already don't understand fully. So

**Emma** 15:28  
right, all this syntactical sugar. Yeah, I totally empathize with that. But it seems I tell mine is one tool that's helping bridge the gap between design and engineering. And for me, that's kind of what refactoring you I did. And we'll get into refactoring line in just a second. But I want to quickly touch on hero patterns and hero icons, because those are also two really cool projects that you work on. So could you just give like a high level overview of what those two are?

**Steve** 15:51  
Yeah. So hero patterns is a collection of SVG background patterns. I sort of made that just to fulfill my desire to build things and put them out there into the world. I, this is a time where like I, I built that to sort of help build an audience because I thought it'd be, like I thought would lead to cooler opportunities, like I said, and I think making like free resources like that is it's a great way for any designer to create value, right. And prior to this, like I released like a free open source icon set. So I thought it's just a fun project because there weren't a lot of resources out there like that at the time. Like there was like, there was like subtle patterns calm, which is background patterns, but there's nothing that kind of utilizes the utilize like SVG and SVG use, I think it was kind of like still a little foreign to a lot of people, the whole technology there. So that was a fun project. And you know, that that it's still like all people still visit that to this day. And I don't really update that site at all anymore. I want to start updating again, but you know, time rose icons, there a set of SVG marketing icons that are, they're sort of designed to be easy to customize with CSS, like, so each SVG icon has multiple tasks inside of them. And they each of those paths has like a unique CSS class. So you can easily change the colors. So, like you can divine like an accent color to align with your brand. Again, I sort of made that to fulfill my desire to build things and put them out there into the world.

This is

**Emma** 17:34  
gorgeous. I just want to say for those of you not watching, these are beautiful icons. And like, I haven't seen anything like this personally, we'll link it in the show notes. But the amount of detail in these SPGs is insane to me.

**Steve** 17:44  
Yeah. Well, thanks. Yeah,

**Kelly** 17:45  
yeah. And I think one of the coolest things about about this in particular is we're so like, we visit a website and everything's always fun.

Unknown Speaker 17:53  
Yeah, when it comes to icon, which is like

Unknown Speaker 17:56  
So switching things up as a media and they like

**Steve** 17:59  
the phone Awesome icons are sort of designed to be like more of like in a sort of like within an app like, like a small icon. And then the but like developers, like blow them up to be like three times the size, their intended size, and they look awful. So, I mean, thanks. Like, I mean, we're all cons. I mean, I think I mean, I maybe you can relate, but it's just like, it's something I did a while ago. I'm not proud of them anymore. I think they're ugly. But,

**Emma** 18:24  
but I'm also just purely an engineer. So

**Steve** 18:27  
yeah. But you know, I mean, when it's just like you, you work on something and you just kind of look back at your old work and like, I can't believe I did that kind of thing. So like, I've always thought about like, this, kind of discontinuing them because I really liked the horror cons name, and I like that domain name. They're sort of like the hero cons. Yeah, and I really like the whole brand around that like the heat like I also have a few other domain names that I'm kind of holding on to for like other like hero resources and sort of building a brand around that. Yeah. And I really want to turn hero constantly like a bigger like, thing. Like, much more like work has multiple sets of icons, and but you know, time, maybe Okay,

**Emma** 19:05  
cool. Yeah, for sure. I think that's cool. And just, you know, I think a lot of developers understand why SVG is important, but they don't necessarily understand that. As you scale them, the level of granularity can become more granular like all these simplistic smaller SPGs are not meant to be as detailed as the larger ones like that saying we take for granted but

**Steve** 19:24  
Oregon's was Yeah, it was cool. Like, I was like, the difference being that project and here patterns. This was I made hero cons commercial product. I thought I'd be cool to try and sell something. I think it made like, like 10 k in the first week, which is like it's respectable for like Australian launch online. So I think it's made like, and I was before I had, like, kind of a following. So it's kind of continued selling today. I think it's like I launched like, three, four years ago. And I think it's made like 30 K,

**Emma** 19:50  
oh my gosh, this is just to anyone listening that like if you have something that you're proud of. You can monetize it and make money, like passively and there's no overhead You're doing like chronic goods. And I think even to push it further, even if you're no longer proud of it, it's still

**Steve** 20:08  
just out there and I don't touch it anymore. I haven't touched it since I launched. Yeah. And that's nice. And it just kind of makes passive income. Yeah,

**Emma** 20:15  
it's the dream passive income scenario, you literally don't have to do anything, even as far as maintenance goes, like they're out there. They're ready for you. This is like the perfect idea for somebody who's looking to get into some kind of passive income streaming. Absolutely. So Okay, with that, I want to transition into one of my favorite books of all time, I vaguely I distinctly remember exactly when I read it, sitting at my dining room table. And it was it was completely night out. But I sat there and I read the entire book, from cover to cover in one sitting. And I am just like a huge fan color girl of refactoring UI because until I had found this book, I had struggled with design and I still like my designers will tell you I still struggle with design but not to the extent I used to. It just it made so much sense and If you know some of the it's not just a book, I want to say that right, like you have a series of blog posts, and I'll let you like, discuss that a little bit more. But yeah, sure, sure. Yeah. I mean, you just go to refactoring UI, which will link in the show notes. And some of the articles that come up are seven practical tips for cheating at design, or how to use fewer borders and thinking outside the database. And so all of these are so practical and so actionable, that they're invaluable. So do you want to just give a quick overview of what is refactoring you? i? How did you go about building it? What was that process like?

**Steve** 21:31  
So yeah, refactoring you I sort of aims to teach design to developers using like, you know, sort of, like us, like, do design with tactics and stuff, talent. I mean, a lot of developers, they just want to make their stuff look good without learning all the graphic design theory. They just want to clear actionable knowledge that they can take and apply to the design right away. It's like instant gratification, right? The sort of the inspiration around refactoring always is like, like, like I've been working with Adam, for a few years, and like we've been working together for like, five, six years now. And early on, we started working on a few projects that will probably never see the light of day. But it's sort of God, like we realized we liked working with each other, he would always wear the developer hat. And I would wear the design hat. And we found ourselves working on design together a lot. And he was really interested in design as well. And the way Adams brain works is that he really tried to understand that designs, the design decisions I was making from like a very logical analytical point of view. And like most designers, I was just more of like, sort of the intuitive creative type. And just the fact that I had been doing it for so long. I just sort of relied on my instincts to make a lot of decisions. And sometimes he would like point out something that I did that he thought was interesting, and he would articulate in a very clear logical way of and that made sense to me. Item, like I said he had a lot of success with his course is, with launches getting up into the six figures in sales, which was really inspiring to me. And I thought I could make a book targeted towards developers teaching them design and sort of that logical way that Adam approaches it. I mean, going back, I'm like, really, at this time, like, I mean, this is back when I still was trying to build my audience. And Adam really encouraged me to grow my audience in that sense. And I always had the idea of like, making like a book, but it's become like, sort of this big project, right? Where it's become a series of blog posts and videos and tips. And, and that really helped grow my audience and the tips just went viral. Like they went way bigger than I ever expected. That sort of became like the marketing engine for the book that we we put together at first when I started making tips that would be like working on a project and I might like, notice something I did a few times and I'd be like, Oh, that's a cool little insight there and I took a screenshot of was working on and made a little like wrote a little thing of like what I did and why I did it. And the first few did well like on Twitter like I had maybe, like 1000 followers at the time. And the these tweets were getting like 40 or 50 likes, which was a lot of like Twitter engagement for me at that time. And then each one was getting bigger than last. So eventually they're gonna get 300 likes 400 likes and and then I also like Adam started, like getting involved when I was making like tips so he might share like a little insight and I would spend some time like sometimes up to like a week working on it passively. So he comments like a little tip idea maybe that I didn't really think of like as a tip but it's like he's at developers. He's like, oh, no developers like love this. They will eat that up. Where for me, like like one tip he gave me was like, oh, like, I don't look a little vertical offset to box shadows. Right. And for me, I just always did that. I just thought like, everyone knows that right? And he goes No developers have no idea man. And I'm like, Okay, awesome. So I made that tip and I, you know, put together something and that blew up. I got like 1200 likes when I first posted it. I'm like, okay, there's like something here and we kept on putting tips together. And sometimes we spend like, like two weeks on a tip like from like the birth of an idea to like, like building like they become much more polished after it wasn't just me taking a screenshot anymore, but it's me like making an original little design to communicate that idea right?

**Emma** 25:29  
That's funny and it's funny that box shadow was one of those things because that to me is an enigma. I every box shadow I make looks terrible. I don't know how to use them. And I don't know how to make them look good. So that's Yeah,

**Steve** 25:40  
like developers would like do like equal spread around the entire like container and it would be like a big Well, yeah, yeah.

**Kelly** 25:50  
Yeah, I feel like I'm guessing I like grasping at straws every single time I I use box shadow again every every single time.

**Steve** 25:58  
It was funny. It was like when he pointed out to me, I'm like, Okay, there's like, there's a lot, there's a lot more stuff I know that I didn't think I knew kind of thing. Anyways, like Adam was helping me so much that it only makes, it only seemed fair to like a formal partnership and co write the book. And I think it turned out infinitely better because of that. So, but we wanted to kind of keep that marketing engine going. We did a few blog posts, we did a blog posts together. And the first one we did was sort of like, taking a site that someone sent us and there's a meeting posting, like, but the beginning was the original design they sent us and then we kind of go through the design step by step, improving and by the end, it was like a nice polished design. And we did we thought we're going to do those like every week, but it took us so long to make that one. We're like yeah, let's not do that again. And, but we thought it'd be cool to like, do those do that format in the form of a video. His idea for that was like, like, you should just do like a live stream and like do refactoring and like an hour right or like an hour to write But that didn't really appeal to me. Like, I, I'm not really good at live streaming, I've tried it before, it's just like, especially with design, it's like, I like me designing half the time. I'm just like, like just sitting there thinking like, oh, what should I do here and it's like, that won't be a really good live stream. But like, I thought, what if I do like a more like post production, like, like a nice 15 minute video or, you know, I spend like two weeks making the like, design and, and then kind of taking it from beginning to end and then doing all this post production, like adding music to making it look much more like a fun video. And those did really well like I, I knew like, I also want to spend a lot of time on it and making it really good because I knew like I already started building a following. I already had like a newsletter of like, like 10,000 people on it at this point. And we're going to mail it out to that mailing list. So I want it to be like really high quality because I knew like it was gonna get a lot of eyes on it and if it was really high quality is gonna even do better than that. They did really well it's the second video I posted it it got posted on Reddit I got posted on like on Hacker News and those went all viral so everything was just working out great for us.

**Emma** 28:11  
You have 157,000 views on this one and for those listening we're going to link his screencasts down below in the show notes. And I remember watching some of these it's basically like fixer upper but UI edition and I love it so highly recommend checking those out because I think it's easy to sit and say like oh, instead of a border use you know different spacing or you know, different like maybe use uppercase text and title case text to like section things a little bit easier, but actually watch the process from start to finish. so fascinating.

**Steve** 28:42  
Yeah, there's like little tips throughout the video, but it's just nice to see the the design transformed throughout the entire duration of the video. I think so. Well, I mean, when it came time to write the book like Adam and I, we like worked together like we spent a lot of time like working on an outline for the book. When it came time to write it, the way the work was split up, is Adam would sort of craft all the words and I would put all the images together. And that was like a good, equal distributed distribution of work. And I was like, I think much better at articulating the concepts that I was. It's sort of like taking this a lot of stuff that I knew and sort of filtering it through the developer brain to communicate it better to developers. And, but like, there's also like, it's basically also like a picture, but there's like 300 images in the book, I think I put together they're all like original designs. So it was a lot of work on both of our ends to put that together. But it took us like three months from beginning to end working on it full time. And it was it was exciting and, and it's sort of like when we launched it was sort of this bittersweet, kind of like I really liked the the process of making Something and and when it's out there, it's kind of like, Okay, what do I do now? Right? And, you know, fortunately, Adam and I kept working together and working on another project together. But at the time, I didn't know that was going to happen. I didn't know we're going to continue to work together. I thought that was like, okay, we launched this, and we're going to go do our own things now. So

**Emma** 30:16  
Wow, yeah, that's really cool. And I think that's super inspirational as well. I think writing an E book, in particular, because you don't do physical copies, correct. It's just ebook.

**Steve** 30:26  
Yeah. Like all of you will want the physical copy the keep asking, and it's Oh,

**Emma** 30:30  
I would totally buy that in a heartbeat. Yeah, I know. That's a lot harder to do.

**Steve** 30:35  
It is. And we we are kind of thinking of making not just an E book, but like more of like a web based version. Yeah, that'd be like the next edition. Because we have we have ideas for like a second edition of like, we have a few new tip ideas. And we thought be cool to deliver it in like sort of like a web based version where you can maybe Like maybe we can include some animation chapters in it. And that would really lend itself to the the, the web based version. So please, that's sort of the next phase. But that's, you know, I mean, we got a few projects, though, that we're going to put up there before we do that. So

**Emma** 31:14  
awesome. You know, that's really cool. I I'm looking forward to all of that. I would love to see a web based version of the book. And of course, animation sound incredible.

**Steve** 31:22  
Yeah. And it seems it's more environmentally friendly, I guess, then. Oh,

**Emma** 31:26  
absolutely. Absolutely. I want to maybe switch gears for a second. And I want to talk about some maybe like tangible piece of pieces of advice, like from a design perspective. So like, first of all, like, what do you what do you think? What areas of design Do you developers struggle the most with in terms of maybe like color, typography, spacing, things like that? I think like spacing is always like, probably the most common one.

**Steve** 31:48  
I feel like it's becoming less and less of a problem with when I see it, like developer design. spacing is sort of like when you go to like a blog posts of like the, you know, the five ways to get good at design. It's like spacings always at the top of those those posts and sort of been drilled in, in in the heads of developers, that's like the problem area. So I'm starting to see that improve. When I see developer designs, I think page width is a big one for me. So I can see sites with like, you know, they have a 1280 page width, and like the paragraph texts will stretch the across the entire screen. And I think it's important to understand like, it's okay to constrain your content, even though it's not gonna like you just because you have the real estate on your display. It doesn't mean it doesn't make for an enjoyable reading experience if your eyes have to jump from one end to the other of your huge display. Another thing is fonts. I mean, developers will often rely on like Google fonts, which are okay, yeah, there are a few good ones for sure. It's sort of like it's sort of like Font Awesome. It's like you see developers just using over and over and over again, it's, I see that with fonts to like every developer will use like late toe or Open Sans and it's just like, I think it's really worth investing in a few good fonts or using a font sizes. Like, like Adobe fonts, or it's, I think it's noticeable when you have like, good original fonts, you know? Oh, absolutely.

**Emma** 33:08  
Like that kind of, like sets certain websites apart. Absolutely.

Unknown Speaker 33:13  
Yeah, exactly. Exactly.

**Emma** 33:14  
Well, it's funny going back to like paragraph with it's like as developers, we kind of forget that users exist sometimes because we're, we're kind of far removed from users design has a much, much closer presence to them. And so we forget the fact that people's eyes get tired when they're reading long with paragraphs. Not only that, like if your line spacing is too condensed or like, your characters are too condensed, like all of these things affect the physical ability of someone to read. So while we do have the real estate, like you said, you don't need to use it you should I feel like you should know how to efficiently use the space or given without just trying to fill everything

**Steve** 33:54  
Yeah, yeah, what's like the recommended service there's got there's a recommended like I'm gonna characters you should have a Lion I 20 like I think it's like 80 characters or something like that, or, but, you know, I mean, obviously, like, it's, there's like some guidelines but right?

**Emma** 34:11  
Well, I would love to ask you if you could give like a quick not definition. But like, as a developer when I was starting out, I didn't realize that design has multiple different areas like the difference between UX design versus visual design. So could you briefly just tell our audience maybe what the differences?

**Steve** 34:28  
Yeah, I mean,

it's funny, a lot of designers like are just like, Yeah, I don't really know the differences.

**Kelly** 34:35  
That makes me feel better.

**Steve** 34:37  
No, I mean, there is definitely overlap. UI design is sort of like its user interface. It's sort of like the thing you kind of see and interact with, like UX design is sort of everything like UX design, is UI design, right? Like, it is the user, the UI is the user experience. But UX is sort of like everything. It's sort of like just mine. Just the experience of like sitting at my computer opening the browser before I even get to your site is part of that experience. And so it's just everything around that right. And it's sort of like, like, I think a good UX designer is able to look look at the users day and like, say, like, What does their day look like? And when, when are they like, and what do they do from like, to get from point A to point B, you know what I mean? And that involves everything from like, Yeah, I don't know. It involves everything from just like I said, like just sitting at your desk and like just browsing on the internet and taking a break and going to do the actual the job that needs to get done. I don't know is that

**Emma** 35:38  
well, I threw that curveball question. That was like a special one. I hate when people ask me those kinds of questions and interviews. So I guess I'm sorry that I asked you that. No. No, I think it's, you know, we forget that design is not making things look pretty. Having a nice looking UI is part of the process but at the end of the day, there's a A lot of psychology behind why things are done the way that they're done. When we think about UX heuristics and how people navigate throughout a user interface, and like, for example, if you take the process of checking out on a website, you know, one, one of those is you want to have all the information readily available at every step of the process. So they aren't sitting there. If they're buying a flight, they're not questioning, did I pick the right date? Or, you know, how much is this going to cost? Like, make that information readily available at every step? You know, and making sure your information architecture makes sense, like these are very important things that I think as engineers, we are either unaware that this is important, or that it exists, or we kind of forget.

**Steve** 36:38  
Yeah, and like I said, like, like the UI design is important. Like, it's like the visual design is all it's all part of that user experience. And you know, some things. I think if something's more beautiful, people are willing to spend more time with it. Regardless of really, if the experience is like, perfect or not. So

**Emma** 36:56  
do you have any tips for a developer who is just starting out, they want to learn a little bit more about visual design maybe do you have any tips on when you should use a border versus like spacing or you know, maybe anything like that.

**Steve** 37:10  
Let me just like look at my old my old Twitter tips that I can share.

**Emma** 37:14  
I already figured this out once. Let me just refer back to what I said before

**Kelly** 37:18  
reusing content is the best thing to do. So absolutely. And also, we're definitely going to be linking to these tips as well. Yeah,

**Steve** 37:24  
for sure. For sure. I was trying to think of like the most like radio friendly tips, like some, like, a lot of stuff is like I have to explain to me like it with a visual sometimes. It's like, what's like a good radio friendly?

**Emma** 37:36  
I know that's really hard. Like we just did a we recorded another episode about like algorithms and data structures. And do you know how hard it is to describe those things now?

**Steve** 37:47  
It's sort of funny when you go on these podcasts, and it's just like, explain, like design with open yeah. Oh, yeah. Yeah, like, I mean, just looking at some of my tips here. So my favorite are like, you know, like using your borders, like this borders can make a design work really busy, I tried to replace borders with like more space. You can also use like a different background colors to kind of distinguish two sections of a design instead of like adding a border in between them. If you like a container that's on top of something, instead of like putting a border around it, like maybe just add a box shadow to kind of create that distinction between the the foreground and the background. A narrow tip like I see designers do a lot. It's like don't use great text on a colored background. Like when you use like pure great text like just basically like black, that's just kind of word like instead of like something that's saturated a little bit. It always looks a little bit off on that. So he was a great text on like, like a blue background. It sort of looks kind of flashy, it doesn't really it sort of looks off. So if you have like a blue background instead of making the text great, like saturated with a bit of the background. So it's like sort of like as a little bit of blue hue in it. And I think that's a little bit cleaner.

**Kelly** 39:07  
I mean, you gave the tip about the the length of text on the page. That still counts.

**Steve** 39:12  
Yeah, that's like I think that's a great tip like just sort of be mindful of like you're reading with fent when you read from like, think about like I like when you're reading and when you read from like one end to the other when you like jump from one line to the next is your I kind of getting really strange trying to figure out like, what line you're on. One of my favorite tips is sort of inverting is this it's an accessibility tip. It's sort of like inverting your background colors with like, let's say you have like a red button with white text on it. Sometimes it's like, hard to get like good contrast ratios with that white text on a red button. Or even better examples like like lighter colors like yellow or green right. Sometimes it's really hard to get like good contrast ratios with like yellow if you like a yellow button and white text that yellow to get it like a good contrast ratio, it's no longer gonna look yellow, it's gonna start looking Brown, right. So I find a good way to like treat that as like sort of inverted. So use like a soft light yellow background and make the text like, again, going back to that using like a colored text on a color background. So using like a darker version of that Darker Shade of that yellow on top of the, the yellow button. I think that's, it's sort of like there's a double tip in there. Number one it like looks better. I think it helps get like good contrast ratios. In some cases, if you want to, like de emphasize something to it's a little more subtle. So if you'd like a high severity button, you don't want that big red button like standing out more than your primary action on the page. Like if you want to like if you're gonna like have a like deactivate your account, it might be like a big red button and that's going to like overpower your like primary action on the page. You might want De emphasized that a bit. So again, using that like soft red background with the darker red text to makes it more accessible and makes it more aesthetically pleasing. I find.

**Emma** 41:10  
Yeah, it's like, what is the most important thing on this page right now? And that's what needs to be emphasized the most. Exactly.

Unknown Speaker 41:17  
Yeah, definitely. Awesome.

**Steve** 41:20  
I hope that came across clear on the radio. I was gonna say like, I'm like, I released I just been communicated clearly.

**Kelly** 41:27  
It does. Yeah. It does. So illusio to listeners who got it. Yeah. So I have one final question for you. And that's, that's where can we find you on the internet, website, social media, shout out to whatever you want.

**Steve** 41:40  
I can be found on twitter at Steve sugar. You can go to refactoring UI. com. That's where we kind of share all of our refactoring UI resources. refactoring comm slash book is where you can find the book. Like I said, I'm heavily involved in the tail end project. So you can check up tail and CSS com if you're interested in learning what that framework is. Check it out there. The components we're releasing for that project which we're hoping to launch in February is telling you I so it's telling you I calm and yeah, and I guess you'll have in the show notes the guilty we talked about hero patterns records, I guess they're all worth checking out. So yeah, that's all I can think of at the moment. I have a YouTube channel, so just

**Emma** 42:22  
go check him out and he has like 30,000 subscribers. He's great. Do I Wow, yeah. Oh, you know what? I don't

**Steve** 42:30  
I don't go I saw those videos like burnt me out. I stopped making them. Yeah, I want to make more. It just takes so long to produce one. And I don't really I'm not super active on YouTube, but clearly I should be more because

that's a lot of subscribers.

**Kelly** 42:48  
Awesome. So thank you, Steve, so much for taking the time to talk with us today. I know Emma's been fangirling about this, this particular episode for ever since it was scheduled What's up? So yeah, thank you. Thanks again so much. And we'll have all these things linked in the show notes. So Okay, awesome. Yeah, thank you. If you liked this episode tweet about it. We're actually going to be giving away one copy of refactoring UI. So we'll be picking one tweeter to win, and we post new episodes every Monday so make sure you subscribe to be notified and leave us a review
