**Ali**  0:00  
Normally, we talk more about front end development and our technical episodes. But there's so many other niches within programming out there. I started my career as a Python engineer. And today we're gonna talk about what it's used for why it's great and how it's different than JavaScript.

**Kelly**  0:19  
Welcome to the ladybug podcast. I'm Kelly.

**Ali**  0:21  
I'm Allie.

**Emma**  0:22  
And I'm Emma. And we're debugging the tech industry. Finance is a cloud communications platform that allows developers to integrate voice, video and messaging into their applications using their communication API's. Whether you're wanting to build video calls into your app, create a Facebook bot, or build applications on top of programmable phone numbers. You'll have all the tools you need. They also have open source libraries, code snippets, and demos and Python and more languages, formerly known as nexmo. Vonage has you covered for all API communications projects, sign up for an account at nexmo dot dev slash Ladybug, and use promo code LD bg 10 for 10 euro of free credit. Again, that's nexmo dot dev slash Ladybug, and use code LD bg 10 for 10 year old free credit,

**Kelly**  1:16  
let's dive into it if either of you used Python before, very briefly, um, when I was working at the Centers for Disease Control and Prevention I was working for on a project that was machine learning to basically put like, provide educational materials to people who are in the field in responding to the Ebola virus outbreak, which is a pretty cool project to be working on. And the base of that was Python. And so I worked on that to a brief level, but most of my time was spent on Coursera learning how Python works.

**Emma**  1:53  
Oh, nice. Um, I did my internship, my junior year of college was that IBM for it was Python development was test automation. So I was insulating the way I was automating the installation of WebSphere Application Server on z OS with Python. Well, but good To be honest, I have no idea how it works.

**Ali**  2:16  
Nice, nice. So I started off Python was my first programming language. And it's what kind of got me into programming, I don't think I would be where I'm at, if I had learned something else first, like c++ totally drove me up the wall when I learned it. So Python was a nice on ramp for me. And then the first couple years of my career, I was pretty much just a Python engineer until we lost a couple front end developers at work. And so I had to start taking on that work as well became more full stack. But that's where I really started off my career. And I have also built a lot of Python curriculum for my former employer, I don't use it at work anymore. I get so many people like reaching out about Python stuff now. And I'm like, I don't really professionally do that right now. But I did at one point. So we're gonna talk about the pros and cons of Python today, why you use it, how it's different than some of the other technologies that we've talked about on the podcast. But I'm excited to be talking about this with people who have used it at varying levels, because I think that brings in good perspective. Agree,

**Emma**  3:30  
I'm excited to learn from you because you are so good at it. And I am not. And I am excited to learn

**Ali**  3:37  
lakes. Well, thanks. Um, awesome. So I wanted to talk first about the Zen of Python. And we'll leave this full thing in the show notes. But this is a poem that's actually built into the Python programming language, which is I think it's kind of funny if you type import this in a Python script, this actually gets imported. And so it's this poem about the tenets of Python pretty much. And so it's beautiful is better than ugly, explicit is better than implicit, simple, is better than complex is better than complicated. And it keeps going from there. But I think it's a good introduction to what Python kind of stands for as a language that it tries to be as simple as possible. I personally think that Python really mirrors English in a lot of ways where I think Python is generally one of the more beginner friendly languages if you're an English as a first language, or somebody who fluently speaks English. But I know one of the common critiques of Python is that it's harder for people who are not coming from an English background to learn because it uses so many words in opposed to symbols and a lot of other languages.

**Emma**  4:54  
I've never heard that before, but it's very interesting and to be honest, I had a hard time learning Python because I came from a Java background. And I just want to say I think Java is way more difficult for me personally to learn. But Python was like the complete opposite in a sense, which made it difficult, because it's not using curly brackets and all that stuff. Like the syntax is much simpler. And so I had a hard time with that. And I remember spending hours trying to debug something just to realize I hadn't indented a line. So I had never thought about it from the linguistic side of things. But that path, yeah.

**Kelly**  5:28  
Also, I just love that there's a poem, I feel like every programming language should write a poem for how it works.

**Ali**  5:34  
We do we do. It's kind of the philosophy behind the language, the simplicity and all that. So I think that's cool. It's a nice easter egg. So I wanted to include that and thought it was a good opener. But I very much agree that one of the biggest differences with Python compared to many of the other languages that we use, especially the C based languages, most are a huge number of the programming languages that we commonly use use, like parentheses and curly braces for code blocks, right, like JavaScript does that Java does that. C and c++ do that. And so pythons a little bit different than that. It really depends on meaningful whitespace. And what that means is that your indentation matters. How you say something is a code block is whether it's indented or not. So in order for something to be in a for loop, it needs to be indented one level, if you have like an if statement, the stuff that's indented is part of that if statements seem with a function. And I think for people transitioning into that, it can be really difficult to get used to that, especially that your spacing has to be really consistent. I personally think like, I'm going to indent my code anyways. So I may as well get the code blocks for free and not have to worry about all the curlies. But I know that that's probably one of the most difficult things for people coming from those see family languages, or family of language. formatting,

**Kelly**  7:00  
I like the get the codeblocks for free. I like the way you phrase that.

**Ali**  7:06  
Yeah, like you're gonna format your code, right? For the most Yeah. And so might as well get the the code blocks there for you without having to worry about your your braces and brackets and all that. But I know some people disagree with that. I think it's one of the more controversial pieces of I love

**Kelly**  7:24  
some spicy takes on code.

**Ali**  7:26  
Do you all know what the Python or the naming of Python comes from? No,

**Emma**  7:31  
no.

**Ali**  7:32  
I think most people think it's like the snake because the stink is on a lot of logos, but it's actually named after Monty Python. That's amazing. Oh, yeah.

Unknown Speaker  7:40  
I didn't know that. Yeah.

**Kelly**  7:42  
I am, like gaining so much appreciation for Python right now.

**Ali**  7:47  
Yeah, there's a bunch of random easter eggs built into the language to like, you can look them up. Um, but it does a lot of fun things like the import this for the Zen of Python. And then there's import anti gravity, and it takes you to an XKCD. Or maybe I'm saying those letters wrong. But it takes you to a comic strip about Python. That's amazing. Ah, yeah. So pythons a really fun language because that it was written initially by Guido van Rossum. He wrote it in 1991. But it was based off of a couple of different other languages he had written that hadn't really gained traction. So he took like an iterative approach to this. And there have been three versions of Python. So the ones that most people are using now are Python two, and Python three, Python two is deprecated. But it was a huge transition to move over to Python three, for a lot of people. This was the kind of start of my career when everybody was transfer, transitioning between the two. And it was kind of an early time of having to rewrite code and reformat and all that. So that's

**Kelly**  9:07  
really interesting, um, because I didn't realize like, I didn't know which version I was using. I was probably using Python three. Python three was released in December of 2008. Okay,

**Ali**  9:17  
yeah. So it's been out for a while. Yeah.

Unknown Speaker  9:20  
That was the year I graduated from high school. It's been out for a long time.

**Ali**  9:23  
Yeah. But I learned in college Python two, which is funny because Python three had been out for a while at that point.

**Kelly**  9:34  
And is this one of these situations where the entire language was basically rewritten. So it's not backwards compatible,

**Ali**  9:41  
not all language, but it isn't backwards compatible, that there were some changes to like the names of built in functions and things like that. One of the most interesting changes was the print statement. So that print is like the console log of Python where it prints whatever out in the console, and they moved it from a statement. So see, it wouldn't be like print space, your thing that you want to print to a function. So it's now it's normal function syntax of like parentheses. So that was a big shift and took a lot of getting used to.

**Kelly**  10:17  
That's so interesting. It's like all these like minor tweaks that you think like you don't really think so much into like, the the level of complexity that goes into migrating from one code, like one version to the next business like these basic things like now I have to add parentheses.

**Ali**  10:34  
Yeah, yeah, for sure. I think it makes more sense. But it took some time to get that muscle memory, up and running. I also want to do a shout out to Guido van Rossum because he's been really a good ally for the women in tech community as well, like he has in his keynotes worn t shirts, like Python as for girls, or something like that, and then also has said that he will not mentor white men, he's only going to mentor people from underrepresented groups. So I think that that's a cool thing. And something worth noting.

Unknown Speaker  11:07  
I think that's good. I just

**Emma**  11:09  
as a quick note to that, though, like, I hope that if they come to him like that, there's, in my opinion, there's a difference between a white man saying, like, I will do this, because I can, I don't know how to explain this eloquently. But like, if if he gets people of color, people from underrepresented communities coming to him asking for mentorship. I think that's one thing. And I think that's great, that he's prioritizing them. But I just hope that he's on out there like publicly stating, like, you know, I have so much knowledge that people of color can benefit from because I actually think that's quite harmful. So I just wanted to put that into your exam. Yeah, absolutely. Yeah, for sure.

**Ali**  11:49  
I think he's the writer of a big language, I'm sure if people are reaching out, yeah, non stop. Oh,

**Emma**  11:57  
yeah, to be fair, like, I've made that mistake. And if anyone listening to this can learn from my mistake and learn why that is harmful. You know, I just wanted to throw in there.

**Ali**  12:06  
Yeah. Well, I don't know. Anyway, they also ran under the benevolent dictator for life model for a while to until around last year, and he stepped down from that. And so this is a different model for communities, then we see like in JavaScript, so JavaScript, the decisions for the language come through a council. So those people have meetings, and they decide together their community proposals for what should be added to JavaScript. Whereas in a Python, he is the last word or was up until last year, so it's more like one person instead of a council in charge. But there is the Python foundation and all that too. So just different, or different model for development there. So other Python things. So that's kind of the background of its model and how it was founded, um, other facets of Python is that it's an interpreted language similar to JavaScript. So there are two families of programming languages for the most part, interpreted and compiled languages. So compiled languages, compiled down to bytecode. And your computer reads the zeros and ones that it outputs. So languages like C, c++, Java, all fit under the compiled languages, and then interpreted languages are interpreted by a program in some other language. And that is what is compiled down to bytecode. The language is then interpreted by that program. So Python itself is actually written in, I believe, C. And so that's kind of like a fun fact, as well, that it's written in another language. A lot of Python is written in Python itself, too. But the nice thing about this is it allows you to extend Python in C, if you need something that's really, really fast. JavaScript is similar JavaScript is also an interpreted language. So it falls into that same paradigm if that's what you're used to Ruby is also an interpreted language.

**Emma**  14:20  
I love that you know, all this stuff, because I. So I'm really glad that you compliment No, I'm learning. I can learn from our it's kind of cool.

**Ali**  14:30  
Let me know if some of that's not clear, too, because that could be a new concept for people.

**Emma**  14:35  
No, it is good.

**Ali**  14:37  
Also similar to JavaScript, it is really flexible. So in JavaScript, you can write functional programming scripts, or you can use object oriented programming or you could just write a script top to bottom. Yes. In Python is the same. So it is an object oriented programming language and that it has classes built into it and all that. That being said, You do not need to use them. So it's not a language like Java where you need to put everything inside of a class. They're kind of optional, similar to JavaScript.

**Kelly**  15:08  
By the way, I don't remember, did we do an episode on functional and object oriented programming?

**Ali**  15:15  
I think we have an op episode.

**Kelly**  15:17  
Okay. We should link it to the show notes. Because I feel like that's good stuff to understand. Because it's always been there. They've been confusing concepts to me.

**Ali**  15:27  
Yeah. Let's make sure that we have that before. Saying that we do but I'm pretty sure I remember recording that.

**Kelly**  15:39  
Maybe, maybe we just pretended to record that episode. Who knows?

**Ali**  15:43  
Okay, we have one that's level up with JavaScript on that was one of the

**Kelly**  15:46  
got it. Okay. So Well, yeah, we'll put that in the show notes.

**Ali**  15:50  
Cool, amazing. It's also one of the most used programming language is, if not the most used programming language, I think that's kind of a hard thing to measure, right. But it's definitely up there as one of the top ones. And the reason for that is it's really general purpose. So it's really great for data science, like it is the language that almost all data scientists are using at this point. So if you need to do data visualizations, or data analysis, or data processing, Python is a really great language for that. There's a library called pandas built into it, or not built into it, but it's a library. So you can like install it. And pandas allows you to create what's like called a data frame. And that allows you to almost interact with your data in Python, similar to how you wouldn't Excel, but it's a lot faster. And it's a really, really amazing thing. So if you're interested in Data Science at all, I cannot recommend working with pandas. Enough.

Unknown Speaker  16:54  
I love pandas. So I'm done with that.

**Ali**  16:57  
Yeah, yeah. It's cute naming. It's really powerful. It's

**Kelly**  17:00  
super fluffy animals. You know?

**Ali**  17:03  
Yes. Amazing. It's

**Emma**  17:05  
kind of ironic that it's speedy given that pandas are quite low,

**Kelly**  17:08  
or they aren't like, yeah, yeah.

**Emma**  17:12  
How fast using a panic and run slow. How fast do pandas run? anyone's taking a guess? Mouse? For what?

**Kelly**  17:19  
I don't really appreciate what I actually like search for it, and I get a Stack Overflow answers.

**Emma**  17:25  
Oh, okay. Well, this isn't meters per hour. Give me a number. Let's go well. Alright, Allie, what's your guess? Five. I also don't know how long I'm 26 26.9 meters per hour.

**Ali**  17:42  
Wait, you're like a yard at 80 feet, waiting feet. But

**Emma**  17:49  
that's not in miles. meters per hour, two miles per hour, my goodness. It is 0.01 miles per hour. way. Oh, they're so slow. And I love how informative This podcast is, but

Unknown Speaker  18:08  
not so much about pandas.

**Ali**  18:11  
Amazing. There's also sci fi, which is another really great. I think it's a set of libraries that do a lot of scientific things in Python. So it's really, really general purpose. And then you can also use it for creating backends for your applications. So JavaScript is really the only true programming language that you can use in the browser. But Python is really great for building out like API's. There's two main web development libraries that people use Django and flask Django is a more full fledged framework like Ruby on Rails, or it has all the wheels built in, you can set turn on authentication with just like a line of code or two. Which is really, really nice. And then flask is much more lightweight. It's more like something like Express, where you have to do a lot of the work yourself and have to build all your endpoints and all that, but it's more lightweight. And I know a lot of people use that as well. The third one is pyramid. And I think Reddit is built on pyramid, but I've never used it myself. And I think it's much smaller. But I do know that Reddit is built on it. So there's that. And then it's great for just like general purpose scripting as well. So writing helper codes, do your tasks for you. I think Python is a really great first language because it helps you to it's simple. And it allows you to do a lot of like powerful things with a very few lines of code.

**Emma**  19:49  
Well, yeah. And to be fair, I think the syntax is much easier to learn than Java. I wish I'd learned Python first and I find it to be more relevant to the jobs that I've worked in in the past. But when I was working at IBM on quantum computing, like we, they use Python, I didn't actually use it day to day. But Python was used to create, like the code that was run for these quantum computing experiments, I could just be blabbering about nothing. Whoa, use Python for that. Yeah, it's used to run like quantum code. So if you're going to learn a back end language, this is definitely a great one.

**Ali**  20:26  
Yeah, I so great. Whenever people ask me what their first programming language should be, I always recommend either JavaScript or Python JavaScript, because I think that it's exciting to see something work in the browser. And that's very visual for people to learn. But then I think Python is probably the most straightforward, syntactically, maybe is a little bit more difficult if you're coming from a different programming language. But I think it's a really, really great one if you're just starting out. And it was, for me, for sure. Um, as far as what I used to do, I used to work in politics. And my co workers were mostly data scientists. And my job was to help automate a lot of their jobs in Python. So instead of them having to write out new scripts for every data science workflow that they wanted to do, instead, I'd have tools that they could use that would speed up their work and make it so that they don't have to reinvent the wheel. So there was web development in that where I would build web apps for them. But also, I would build just tools in the command line or through a GUI, or even just processed data manually, too. So Python is really great for all of those different processes. So I think if you're building especially web app for data scientists is a great tool to use because that's what they're going to be used to for the most part.

**Emma**  21:53  
That's a very good point.

**Kelly**  21:58  
Do you have an app in production that's slower than you like? is its performance all over the place? Sometimes fast, sometimes slow? Do you know why? with data dog you will, you can troubleshoot your apps performance with data dogs end to end tracing, and in one click, correlate those Python traces with related logs and metrics, use their detailed flame graphs to identify bottlenecks and latency in your app. start tracking the performance of your apps for the free trial at data dog.com slash Ladybug. If you sign up for a trial and install the agent, data dog will send you a free t shirt. Again, that's data dog.com slash Ladybug. As much as we'd love to pretend we're all perfect developers, the reality is we're going to make some mistakes. And that's why I love that honey badger has my back. Honey Badger makes you a DevOps hero by combining error of time and check in monitoring into a single easy to use platform. And it's super affordable to honey badger monitors and sends error alerts real time with everything you need to see what's causing the error and where it's hiding in the code so you can quickly resolve the issue. You also get uptime and check in monitoring to let you know when your external services are having issues or your background jobs go missing or silently fail. With their collaborative tools. You'll also be able to communicate with your team on specific issues to keep track of where you left off if the same issue occurs again. So go check out honey badger at honey badger.io. Tell them your friends on the ladybug podcast sent you when you sign up, and you'll get 30% off for six months. They'll apply that discount to your account with no credit card required. Again, that's honey badger.io. Should

**Emma**  23:37  
we let's talk about how Python can be different than JavaScript.

**Ali**  23:43  
Yeah, so we talked already about the indentation for code blocks, which is the most controversial I think.

**Emma**  23:51  
I don't think there are no semicolons either.

**Ali**  23:53  
Yeah, no semi colons. I think you can technically use them as well. But it's not Python.

**Kelly**  24:02  
I would just not follow the pythonic way because I like semicolons

**Ali**  24:08  
oh my goodness, we're so opposite. Actually, no,

**Kelly**  24:11  
those recently. It's really frustrating. I kind of switched away from using semicolons. And I keep on inheriting projects for other people are using semi colons. And then I just stop using them halfway

**Ali**  24:23  
through.

**Kelly**  24:26  
I am the wrong person to have on your team to collaborate. I don't follow the rules.

**Emma**  24:30  
Let's also mention the fact that my cat is walking in on paper bag while we're recording and it's very loud. But I'm kidding. But that's what we're saying is the naming conventions between Java and Python versus JavaScript really threw me through loop for loop when I started because I was so used to array and ArrayList in Java. Yeah, Java, and is it great Just list in Python.

Unknown Speaker  25:01  
Yeah, just list.

**Emma**  25:02  
Yeah. And in JavaScript, it's array. So it was all very confusing to me. I didn't understand. I also heard the term dictionary. And I didn't know that it was if it was the same thing as an object. This confused me immensely. Going from like IBM internship doing Python to web development and JavaScript, I didn't understand like, are they just different terms people use to refer to things? Are they physically different, like ArrayList? Have a flexible size versus array? You have to define if I'm not mistaken. So those kinds of things very much confused me.

**Ali**  25:32  
Yeah. I agree. I think the when I learned about link lists, but I already knew Python, I was like, oh, like, we already have lists built into Python. Why would we ever need this, but the list implementation in Python is an ArrayList. It's not a linked list. So that's something to note, the implementation of the two are different between Python and JavaScript, but you can use them pretty much the same in your code. And then a dictionary, I love the naming of dictionary, to be honest, I think that the I even use it when I'm teaching JavaScript, because I think the key value pair is very clear. And that's something that you have within a dictionary. So I really like that terminology. Personally, again, the implementation between a dictionary and an object are kind of different under the hood, but you can use them interchangeably.

**Kelly**  26:25  
Okay, because that was also something that I got really confused by. And I don't know if this was the same thing that I was researching long ago that I was getting stuck on, just the ordering, like the actual order of the items inside of the dictionary matter versus the way that they're set up with an object. That makes sense. Like the key value pairs kind of thing. Yeah. So

**Ali**  26:47  
you're asking, does the order matter? Yeah, Python. Okay. So up until very recently, dictionaries are unordered. And it was not guaranteed that if you put things in in a certain order, they would come in

**Kelly**  27:01  
order. That's what was carrying me. Okay.

**Ali**  27:03  
So up until recently, that was the keys. But then, very recently, they've changed it. So that dictionary do preserve insertion order, okay. Okay. Yeah, there's also a library in Python. So it's actually built into the standard library. But you do need to import it full of other data structures that you can use an order dict has been won the whole time where it's this dictionary that really heavily emphasizes order. So there's that. Yeah, but there's lots of fun data structures built in like a counter. Which, if you've ever done those code challenges, that's like counting the number of letters or instances of each letter in the sentence or something like that. Have you seen that? It's like a? Yeah, so a counter data structure does that for you? By default within bite? That's so cool.

**Kelly**  28:01  
Just like the little little things like that.

**Emma**  28:04  
So speaking of pythons, let's discuss snake case versus camel case. Because like Why? I'm definitely not a snake.

**Ali**  28:15  
Yeah,

**Emma**  28:16  
I had to use that every time I hear that like snake anything. I'm just like, I'm a snake. Does anyone know what I'm talking about? No. One even seen that video. Okay, now it just sounds. there's a there's a video of a guy wearing this like paper hat that has a snake on it. And he is just him sitting there going. I'm a snake. I'm a little snake. And every time I hear about Python or snakes, that's what I think about I'm going to send it to you. We're gonna link it so weirdo, but you know, we're gonna be a weirdo, but

**Kelly**  28:45  
we'll just have some understanding behind your Yeah,

**Ali**  28:48  
it's super funny. So, in JavaScript, you name your variables with camel cased. And camel case is how you have the lowercase word and then a capital letter and then the next word in your variable name. A Python instead of using the uppercase letters uses underscores. That's called snake case. So it's just you could use camel case if you really wanted to, but again, it would be an pythonic

**Emma**  29:16  
I'm a camel case person.

**Kelly**  29:19  
I don't know that takes some getting used to actually go snake case for anything.

**Ali**  29:22  
Yeah, I don't know. It's interesting what different conventions there are across programming languages. And what you get used to depending on what you used, and I

**Emma**  29:33  
don't know if I ever get used to things I still have to look them up every day.

**Ali**  29:38  
Oh, yeah. Yeah. I it's so difficult when you're in a job where you're switching between programming languages like midday every day or multiple times throughout the day, because you just get all the syntax for all of them all scrambled it Yes.

**Emma**  29:53  
That's a good that's like a soft flex right there. You're like, you know, I just hate when you

**Kelly**  29:59  
know, but that was like the whole And why how to stop working both on WordPress and Shopify sites at the same time, because I kept on trying to add PHP into Shopify themes and there was not happy. And of course, I didn't liquid into PHP, I get the beautiful white screen of no meaning in WordPress. So glad that's a thing of the past.

**Ali**  30:20  
Yeah, I used to switch between JavaScript, Python and Ruby, like mid day at work. And I have to be like working in between all three of them. And all three of them are different, but also somewhat similar. So it was just such a mess in my head of what is in what language and like in JavaScript, dot length is an attribute, right? And then in the Python, Len is a function to get the length of something. Oh, that's right. Yeah. And so it was so difficult for me to like, always remember which one was which. And then the different array methods to like push versus append, and all that, like, all the different methods are different things in different languages. So very difficult. Python also has a really great set of style of rules for how to write your code. Pepe is the probably widest used one, and it has all your formatting rules. I think this is another really interesting difference between Python and JavaScript. Because JavaScript, there are so many different style guides out there. There's like different ESP configs, their standard j s, there's Airbnb style guide. Like there's so many that are out there. Whereas Python, it's really coalesced around Pep eight, which is actually built into the language. So those formatting rules are pretty universal. And there won't be debates whether you should have semi colons or not.

**Kelly**  31:58  
exhausting.

**Ali**  32:00  
Yeah, for sure. wheezing. So the other thing that I wanted to shout out was ipython, or Jupiter notebooks. I know this is becoming a more of a thing in other languages as well. But they are these interactive notebooks that you can write code in, and run the code directly from there and see the output right there as well. So if you're learning, I think it's a really great resource to immediately see what just one or two lines of code is doing. So I would highly, highly recommend those, and they're kind of a unique thing to Python.

**Kelly**  32:35  
Cool. So speaking of getting started with, with learning Python, let's discuss some resources where you can get started. Um, I First off, I really enjoyed the Python Coursera course that I took, I feel like it provided me with a really strong baseline of how Python works and why I'm making the certain decisions I'm making, I found the project application to actually be helpful as well.

**Ali**  32:59  
Awesome. I did not learn Python and or traditional, or I learned Python in school. So no different than selfie J. But I really would recommend there is this book. And it's learn Python by automating the boring stuff or something along those lines, and essentially teaches you how to automate your own job in Python, which is how I kind of got my start. And so I would highly recommend that to learn how to do your day to day tasks, but in Python instead of Excel or whatever,

**Kelly**  33:39  
that's cool. And also, I do want to give one more recommendation in It's called The Hitchhiker's Guide to Python, which is wonderful. There's actually a, I think there's an O'Reilly book that's available with the same name, but we'll link to this in the show notes is just from python guide.org. They list based on where your level of expertise is whether you're beginner, intermediate, or advanced and provide so many different links to resources on how you can learn. So learn Python the hard way is the other one that I was thinking of.

**Ali**  34:11  
Amazing. So we'll link a bunch of different resources in the show notes.

**Kelly**  34:15  
Yes. So we're doing our shout outs a little bit differently this time and we're doing one single showing shout out. You may have heard last week that we have a new lady by joining us. We're really excited to have Sydney join us for as a permanent co host.

**Ali**  34:35  
Yeah. So exciting.

**Kelly**  34:37  
He is going to be kicking things off starting with our new season, which will be starting in January. So look forward to that. We're doing all kinds of really great things. And Sydney is going to be a very, very, very welcome addition to the lady crew.

**Ali**  34:52  
Definitely. And she did our episode last week, which was really great on content creation. So if you want to get a preview of What the show look like with her on it, I would definitely check that out. And she is all over social media as well. So we can link her info down in the description or in the show notes too. So

**Kelly**  35:11  
stay tuned for more there. We're doing all kinds of really fun stuff next season. I'm super excited.

Unknown Speaker  35:18  
Yeah. All right, you

**Ali**  35:20  
want to close this out? Awesome. yet. So this was our final episode of the season. We made it through season four. We're really excited to join you again in January for season five, which is a nice round number. We have so many great things planned. If you liked the episode tweet about it. We'd love to read your feedback.

**Kelly**  35:40  
And we'll give a copy of a some Python resource. Maybe that book that you recommended.

**Ali**  35:47  
Yeah. How about the book that I yeah, plugged cool. And we post new podcasts every Monday we won't for the next couple of weeks because we'll be on holiday break. But make sure to subscribe to be notified and leave

**Kelly**  35:58  
us a review if you are based in the US and are celebrating Thanksgiving. This week. Happy Thanksgiving. If you're not happy Thursday. If you're whatever holiday seasons you celebrate since we are taking the month of December off Happy Holidays to you as well. We're really excited to be back in your earholes come January
