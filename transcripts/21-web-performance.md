**Ali** [0:00]  
Today we're talking about web performance. Did you know that 40% of users abandon sites that take more than three seconds to load? Turns out making your site's fast is pretty important. In this episode, we'll talk about what web performance is why you should care, and we'll give you tips for optimizing performance and measuring it. Let's get started.

**Kelly** [0:22]  
Welcome to the Ladybug podcast. I'm Kelly.

**Ali** [0:24]  
I'm Ali.

**Emma** [0:25]
And I'm Emma. And we're debugging the tech industry.

**Kelly** [0:27]  
Are you a developer looking for your next challenge meet Shopify, they're on a mission to make commerce better for everyone. And they do things a bit differently. They don't tell you how to solve problems. They give you the tools, trust and autonomy to build new solutions. They don't want you to work alone, their structures so you can leverage the diverse perspectives across teams and everything you do, and they don't pretend to have all the answers. They're big enough for you to tackle problems at scale, but small enough for you to discover and solve new problems. If you're a builder at heart who wants to solve highly technical problems, if you want to take all of your life experiences and apply them to a blank canvas. Or if you want to access really powerful tools, Shopify is the place for you visit shopify.com slash careers today.

**Ali** [1:09]  
So what is a web performance?

**Kelly** [1:12]  
I'm going to defer to the resident performance expert here, which Ali yours going to keep on talking?

**Ali** [1:18]  
Who's gonna keep on talking? Okay. So when we're talking about what performance, we're talking about how fast it is for your website, or your script to run, so how fast it's going to be for your user to type in a URL, press enter, and then see a site and then also have it be interactive. So there's both the time to paint, which is how long it takes for stuff to actually show up on the page. And then also time to interactivity. So how long it takes for them to actually be able to interact with that website and have it be fully working. So I think that's a big part of web performance is how quickly people can actually interact with your site and even Do you have anything to add on to that?

**Kelly** [2:02]  
I think in a previous episode, you also touched on perceived versus actual performance, which I think is interesting, because there's nothing I really, really thought about before, but it's absolutely true. So a perceived performance, you know, refers to how how fast you users gonna, like thinks your website is, regardless of how fast it actually says. So in the like the technical stats. So when it comes to a website optimization, what your user things is, what matters is not really with the, you know, the technical stuff that happens in the on the behind the scenes, it's how about as long as the user is having a good experience, that's what ends up converting, that's what ends up making a good experience overall, for the for the website, the app, the script, the business, whatever we're really talking about here.

**Ali** [2:44]  
Yeah, definitely. We want the user to think the pages fast. And so things that you can do to make them think it's faster than it actually is, is like adding nice animations that make the page feel slick or having a loading page so that they know that it's supposed to be loading They're just not hitting a white screen or something along those lines, all of those little touches make it so that your user think that the site is actually faster than it is. Of course, the real performance is super important as well, especially because users from around the world who are coming to your site, who maybe have less than perfect internet, I live in rural America right now. And the Wi Fi, right where I am is pretty good. But if you go outside of where I'm at, there's pretty much no cell phone service. So I can definitely relate to some people there for sure with those issues. There's also two others that I also want to talk a little bit about how you can do a lot on the back end, and also the front end for optimizing performance. So we'll talk about things that you can do on both sides throughout this episode.

**Emma** [3:48]  
I think we forget that performance is about people and it's about user experience. And we get wrapped up in the whole like, how is this technically achievable? How do I make my site performance We forget the why. And the Why is not so things load faster. I mean, yeah, I guess technically that is I think the Y is more about so our users have the best possible experience that they can have.

**Kelly** [4:13]  
And I think we really need to put a lot more a lot more weight on this, as you know, not only as developers, but as bringing it up with development teams as well to remind them that this is at the end of the day, the users what's most important here. And you know, we actually touched previously on on the ethics of performance, you know, not not everybody has the privilege of having high speed internet or having a modern device that's going to be fast to load and knowing what the experience is going to be like for for somebody else using a slower internet or slower device. it's it's it's key to having an overall performance website. It's not just what you personally experience as you're building it out. I

**Emma** [4:50]  
think this is really important and depends on the type of software you're making as well, right? Like if you're making a banking application that people use every day. transfer money to pay their bills that had better be performant and accessible by people all over the world because at the end of the day performance directly correlates to accessibility accessibility is not just about people who are maybe have visual impairments or you know, navigate just using a keyboard. It's also about can I access this information? Is it physically accessible to me. And if you're building something, such as a banking application or something that governs people's lives day to day lives and can have severe implications if they can't access it, you have, you know, an ethical obligation to make sure that anyone anywhere can access it.

**Ali** [5:34]  
Yeah, definitely. I went to a really interesting conference talk recently enough like and link it in the show notes, but just about how much of web traffic is coming from, especially India and Indonesia, where they're the devices that most people have there are not brand new iPhones, their devices that are a little bit slower and Also their network speed is slower as well. And so that's a huge percentage of the world and the web traffic that you may be getting even just in general, more than half of web traffic is from mobile and desktop, I, again, where I live in New Hampshire, or where I grew up, a lot of people don't have computers, they just have phones. And I think that that's definitely a very true story throughout the world, not just here.

**Emma** [6:24]
Not only that, like what we forget to, and I'm so guilty of this is when I test my software or my applications, I typically test it on my own device. And it's like, not everyone has the same device that I have that it's a privilege that I am lucky to have. I'm lucky to have the devices that I have, but not everyone has that. And so when you're testing your applications, it's really important to test performance across all types of maybe it's not an iPhone, maybe it's an older generation. And so we just need to be conscientious of these things.

**Kelly** [6:52]  
And we're going to touch on this later. But that's why I really love the lighthouse tool and how you can throttle the network speed totally

**Ali** [6:59]  
and Even that introductory statistic that 40% of users abandoned sites to take more than three seconds to load. That's pretty dramatic statistic. And there's also the Amazon statistic, I always forget exactly what it is, but that Amazon sped up their site by like a second. And it dramatically changed how many people purchase from their site? I think Kelly, you probably know more about that.

**Kelly** [7:27]  
Yeah, yeah. And it's not even like specifically for Amazon, you know, working working an e commerce site speed is everything. So if you have a slow a slow loading site, people are not going to add anything to the cart, they're not going to shop around because the site is too slow to actually do so. So we do a lot with site speed optimization, and there are small changes that you can make that have a significant impact on the monthly revenue for these merchants.

**Ali** [7:52]  
Yeah, okay. I found the Amazon statistic. So, point one second of load time impacts their sales one percent. So wild, which is wild. That's not even a perceptible amount of time. But apparently, is that important that we have our sights both for the users, which are obviously the most important piece of the puzzle, but then also, if you're trying to sell anything on that site, another piece as well is that search engine algorithms take performance into account now to especially Google. So if you ever really on performance site, I know that a lot of people who were using base level WordPress with a bunch of plugins, and it had a lot of issues with a recent Google algorithm update because their performance was not good. And so that really devalued them in the ranking. So that's another thing as well, people most important part making sure that we're making websites accessible for everybody. But then there are also those additional business reasons that we wanted to bring up as well.

**Kelly** [8:51]  
I let one side tangent on the on the WordPress side of things. And this kind of goes for anybody who uses any kind of platform that involves installing plugins or apps or whatever it might be. A lot of these apps like they're not talking to each other. So the app developers are not like, I'm going to load these things, oh, you're loading these things. I'm not going to load them, you end up loading the same scripts over time. And it really bogs down your site. And we're about to get into the our favorite topic about JavaScript. But yeah, it's something to definitely be mindful of, if like, when you're when you're working on a website that's installing a bunch of plugins, you got to be very careful about the site speed. Yeah,

**Ali** [9:30]
definitely, for sure, especially using other people's code, like you write so much code yourself. And, I mean, that is important. But if you're looking at a bajillion third party libraries, then you're going to probably have a lot of issues. So I think we were going to talk about the cost of JavaScript and so adios Moni has this amazing article about the costs of JavaScript and how expensive JavaScript is for load times. On your websites. So he says that JavaScript is still the most expensive resource we send to mobile phones because it can delay interactivity in large ways. And so it's really, really important to think about, especially how much JavaScript you're loading onto the page, especially since so many sites are just built in JavaScript with Yeah, just filled in JavaScript. Yeah. And so thinking about that is super, super important. Well think about we'll talk about different strategies for optimizing that later in this episode. But I think that that's the number one thing that you can think about when you're building these sites is how much JavaScript Are you loading onto the page.

**Emma** [10:34]  
So fun, a couple interesting things. So the first I found a statistic that Pinterest increase their search engine traffic and their signups for new accounts by 15%, which is a lot when they reduce their perceived wait times by 40%. So they were reducing their actual performance, but they were reducing perceived wait time and maybe they were doing that with loading animations or other interactive things. That's just that blows my mind. It's like they most likely didn't even reduce their perform. are like their actual load time, just their perceived load time. So I thought that was bananas. And then the second thing I found, which will link in the show notes to, there is this impact calculator that calculates the impact of performance on your website. And so for example, you can type in a domain, so the default was home depot.com, you can type in the current speed, you know, estimate some average monthly visitors and your average order value, and potentially your conversion rate. And it will actually calculate the impact of like, speeding up over you know, slowing down the speed of your site. So for example, like with Home Depot having about 500,000 average monthly visitors, maybe an average order of like \$150 that people are spending with the current speed of three seconds, the impact calculator of that. So for annual revenue impacted from improving the speed by one second, so by improving their overall performance by one second in one year, that'll have an impact of 763,000 US dollars, which I find to be insane

**Kelly** [12:00]  
It's wild. This I love this calculator because at the end of the day, you need to show people the numbers especially in the e commerce space. And we have all this data available to us we can we have their conversion rate, their average order value, how many monthly visitors they're getting. And of course, we have their their current page speed, and being able to show them just how much their current page speed impacts their sales is like, Is it really a great driver for sales for us? Because we'd be like, Look, if we just improve your page speed time by, you know, 5% it's, look how much money more money you could be making. I love this impact calculator.

**Ali** [12:36]  
Totally. I think all these statistics are just mind blowing about how important performance really is, and how much it impacts users but be leads to decrease profits and people on pages. So topic.

**Kelly** [12:52]  
When's the last time you work on that side project? You're always thinking about how much progress could you make if you had three months to work and learn in a room full of smart friendly intellect Curious programmers. If you're thinking I can make a lot of progress, you should check out the Resource Center. The resource centers like a writer's retreat. But for programmers, there are no classes or teachers, you direct your own learning and time and it can explore what interests you in a supportive community of 1600 programmers from all over the world. Whether you've been programming for six months or 30 years recruit centers for you. Maybe you want to recreate vintage computer art, make contributions to rest, learn computer science best practices, or start developing a new programming language. Those are all things people have done at recur center. You can attend a retreat in Brooklyn for one six or 12 weeks. Ricoh center is free for everyone and offers living expense grants of up to \$7,000 to people from underrepresented groups. They have an integrated recruiting agency and offer career support whether you're looking for your first programming job, or you want to find a senior role at a great company. Learn more about recruit center and how to apply@www.recurs.com so Allie, you touched on this briefly at the very beginning, but what what should we be measuring when we're reading performance. So I think the

**Ali** [14:02]  
two biggest metrics are first paint. So that's how long it takes for instead of the person to be looking at a white page there, how long it takes for the actual content above the fold. So their initial content on the page to

**Kelly** [14:19]  
show up for the

**Ali** [14:20]  
second piece is the time to interactive. So how much time does it take to make it so that your page is something that they can interact with and can type into inputs and click on models or whatever? So that is the second metric to think about. And then, so those are the two big on page things that you should measure. But then the things that impact that would be what frameworks are, you're using your bundle size. And then another big thing, especially on front ends of websites is your images and thinking about how big those are because we've all been on sites where this image is loading in pixel by pixel. Potentially blocking everything below it. So definitely worth thinking about that as well.

**Kelly** [15:06]  
Image one is one of my favorite topics, because we'll have clients come to us be like, why is my site so slow? And I'm like, well, you just uploaded eight images for this product. And each image is about four megabytes. That might be the issue. It is not only just like the actual file size is also loading the appropriate size image in the space that it's filling. So you know, if you're, if you're putting an image in in a space that's maybe like 300 pixels wide, you don't need to be loading an image that's 1200 pixels in width. That's not it, there's no reason to upload that large size of an image. So just another thing to consider and obviously, I can go on and on and on about optimization for ecommerce, but that's not why we're here.

**Ali** [15:47]  
Yeah, but I think it is important to mention, because so many sites are ecommerce sites. So I think my number one takeaway from this whole entire episode is to run a lighthouse test on whatever site that you're running This is such an easy step, but almost nobody knows about it. Yeah, I bring this up in my blogging talk, because performance is important for SEO. And so many people learn about this from that talk. So all you have to do is use your Chrome Inspector, go over to the audits tab and just click like the audit button there and it will run a lighthouse tests on it. It'll tell you all the things that you can do to improve the performance on your site. It'll tell you how to boost accessibility, boost SEO. And then also whether your site's a progressive web app or not, which we'll talk about in a little bit as well. So this latest testing, it will mock different environments to sotto pretend that you're in really, really bad Wi Fi, it'll pretend that you blocked JavaScript or something along those lines as well. And so if you do one thing, because this absence so go run lighthouse tests on your sites because it is going to give you step by step how to fix everything to not just what's broken but how to fix it. So Definitely a super, super valuable resource.

**Kelly** [17:03]  
I also love this resource much more than like just google standard Page Speed Test, you get so much more information out of this than you do from just like a basic Page Speed Test. This will help you to run but they're not always like all the tips that they're giving all the advice they're giving is not always applicable in the in whatever it is that you're building, they're going to be things that you're not able to fix that they say are incorrect. So just be mindful of that when you're when you are reading through the feedback and the recommendations that are being made, you're not going to be able to make all of them. Yeah,

**Ali** [17:32]  
that's true. And also there may be other things that you can do as well, especially to boost as performant perceived performance, that those aren't going to show up on the White House test. But you can do those to make it even better. But that being said, lighthouse testing is like a great place to start.

**Emma** [17:46]  
So if you want to get started, like I just ran lighthouse on my personal website. So I went to my website in Chrome and I open the developer tools and I went to the audit tab and I ran an audit and that's where you can kind of select like the throttle and all those things. And we can talk more about this in just a little bit. But basically I built my site using gossipy, which is static site generator for react. And one of the benefits of that is having really, really great performance. They're really known for loading images quickly and having great accessibility and SEO. And so like, I ran my lighthouse, and I swear, so I got 99% for performance 97 accessibility 93 best practices and 100%. Seo out of the box, which I think is really cool. So if you have a portfolio, like it's a fun thing to just like run your lighthouse test and see how it does totally, and it'll

**Ali** [18:30]  
prevent you from sending something out into the world that people can't really load do. So definitely highly, highly recommend that 12. So let's talk about some of the things that you can do to improve performance on your site. So the first thing well, we just talked about Gatsby, so Gatsby is an incredible tool and it has a ton of performance optimizations built in a lot of them that we're going to talk about here, but if you're looking for something that's performant out of the box, using A tool like XP is a great thing to do. Another thing to think about is caching both on your back end and your front end. So caching is storing resources. So instead of having to refresh them every single time, or to recreate them every single time, they're there for you. So on the back end, if you're really, really heavy query, what you can do is you can cash the results of that query, so that instead of having to rerun it every single time on your database, it's stored somewhere that's easier to retrieve. So using something like Redis, you can even use like a JSON field in a Postgres database, or something along those lines. So that instead of rerunning that every single time, it just runs once and you can pull from there. There's also friend caching, so storing your resources on the front end, using the browser for that or tools like cloud flare, so that instead of every single time you load the page, it's like refreshing your CSS and all that that's loaded for you.

**Kelly** [19:57]  
Absolutely. I think another interesting topic is the next generation image formats like progressive JPG and web P. Have you worked with those much?

**Ali** [20:08]  
Yes, mostly in order to pass lighthouse test. But yeah, they're, they're awesome. And you can use tools. So the different next gen images, not all of them work across browsers. So it's something to think about for sure. But there are different services out there that will make it so that it will give you the right image type for the browser that you're on. And so using tools like that is awesome.

**Kelly** [20:31]  
Yeah, I Shopify is automatically serving up YP images. Now, it's awesome, unless you're trying to save the image, because Google Chrome automatically serves up YP and it tries to save the image image in YP format, which is really fun to try to open. So I have to open up that image URL in Safari which does not support web P and say it that way. So kind of a this is more of a side little This is frustrating and kind of annoying, but I'm going to deal with it because performance is great kind of thing. But next day images are awesome,

**Emma** [21:06]  
I think to another fun thing that, well, fun, fun, I think it's fun, I'm sure it thinks it's fun to is is the bigger runtime of your code. So in analyzing the algorithms that you're using, if you can do something with two, top level four loops, don't use nested for loops, right? So learning to understand why one algorithm or one piece of code is more performant than another is really important, right? Because if you have events squared, I'm in terms of bigger runtime for your code, that's going to be much less gonna have a lot higher performance implications, then oh of login. And so understanding these core like foundational computer science concepts can really help improve how you write your code. And I think that we both posted blogs on Pico runtime if I'm not mistaken, le or maybe I didn't, I don't know.

**Ali** [21:54]  
I don't have a real blog post but I have a cheat sheet on it. Okay, but

**Ali** [22:00]  
No, I totally agree with that. So I am probably an extreme case of this where I used to work mostly with data science processes. So data science processes take a long time to run, because it's a lot of data that you're manipulating. But using bingo and thinking about the optimizing runtime there and easier, more efficient data structures, I was able to take a 10 minute task down to 16 seconds. So something that took 10 minutes to run down to 16 seconds just by thinking about bigger, so big Oh, I think it's something that people think about for interviews, and they think about it, that it's just important there. But it's really important in real life as a developer to a lot of ways. It might not be something that you see explicitly every day, but thinking about the performance of different algorithms, and optimizing those is something that can really make your site more efficient.

**Kelly** [22:49]  
I would like to ask the audience a question. What is why is it called bingo? Let's do an episode on this.

**Emma** [22:58]  
Yeah. So in general Bingo is like how we analyze the runtime of our algorithms. And, and so there are a few different ways to do this. Because the most common, there's also big data and big omega and these analyze the runtime of your algorithm against bounds. So when I say bounds, I mean an upper bound a lower bound. So how fast is your algorithm in regards to increasing input size, so as the scale of your data increases, how performant is your algorithm essentially. And big O is one way that we do that. So when we tune us at four loops, as an increases, the runtime of that is going to be Oh of n squared, because we have to do end times and calculations for every piece of data that we're inputting versus just a single for loop is going to run Oh of n times because we're iterating once over every end. And when I say nested for loops, let me clarify that if we're we're using, you know from zero to end with it both right? And so it's just about how the performance of your code handles a growing inputting data, I believe

**Ali** [24:01]  
yet. So it's a way of generic sizing, the performance of algorithms because if I were to say that this algorithm takes one second to run, then that means that it takes one second to run on my MacBook Pro with this certain input with the the ray that I ran it on. But you want that to be more generic, right? So how is this going to be running across computers and across different inputs? So if my hundred item array versus my million item or right how's it going to scale to those bigger algorithm, bigger input sizes, so bingo is just a way of making that measurement more generic than like one second, essentially. So there are different families of Big O like n, which is super performant and super efficient and have one which is what you're looking for as well, and then really, really optimize something like n factorial which you don't want to have happen.

**Kelly** [24:59]  
Okay? We're going to be linking to both alleys cheat sheet and and this blog on these on this topic in the resources and then I'm going to read them so I understand whatever we was just talking about.

**Emma** [25:12]  
I think we need to do like computer science concepts for beginners episode. So that's me I'm a BIA,

**Ali** [25:18]  
I think we should do that. It's super fun. teaching computer science stuff is fun. Awesome. Okay, so back to like the web stuff well, because important, but also some of the stuff is as well. So I think one generic or one general theme is making your bundle size smaller. So instead of loading massive amounts of JavaScript onto your page, or massive amounts of CSS onto your page, if you're using a CSS framework or something along those lines, instead thinking about that and making it so that it is smaller, so you can use different strategies for that. So first of all, minimize your code. You can use scripts to modify your code All of that, definitely important to do that. Also the idea of tree shaking. So making it sure that only the pieces of code that you're actually running and using are showing up in here code. So instead of loading in the whole entire library, and you're only using one method from it, you're only loading in that one method that you're using, and not MPM installing everything under the sun instead of being smart about that, and thinking through what you're actually using, and only loading what you're actually using for page two. So if you're only using certain script on one page, make it so that it only loads on that one page instead of on every single page of your site.

**Kelly** [26:45]  
Can we talk about progressive web apps?

**Ali** [26:47]  
Totally

**Kelly** [26:49]  
cool. Let's talk about progressive web apps. This is something this is something like I do in the in the headless commerce space, but I've been Something I've never really been able to like, really define. So Can somebody please define it for me, so I can write it down and tell other people what it is.

**Emma** [27:08]  
I'm not a progressive web app expert. I just think it's a fancy word that people like to use. I'm kidding. I want I know, it's a web site that you can also download and use as if it were a native app on your mobile device. I'm not competent in that answer. Like if I was betting money on that, I don't I don't know if I would bet my house yet. So

**Ali** [27:30]  
that's totally it. So you can download the site to essentially be an app on your phone or on your desktop as well. And another piece of it is making sure that pieces of this site are available if the user is offline, so you're really heavily caching things so that they can still use that site if it if they don't have internet. So Dev two is a really, really great example of a progressive web app. So If you go to the Dev to site, and you are offline, you get an offline page. And that offline page, you can draw pictures on. So I felt that it's pretty adorable. But there's still something that shows up even if the user isn't online. So you can have totally no internet net go to Dev too. And you'll still see something there. Other progressive web apps may have it so that you can read articles that you've read before offline, or that the whole site is loaded into progressive web app, which is obviously going to take up more space on whatever device it's been downloaded to. So there's definitely pros and cons of that, or maybe that they're able to save certain things so that they can view it offline. So that's kind of an introduction to what progressive web apps are, but making it so that there's still some sort of experience that people can use even if they are not online.

**Kelly** [28:51]  
Okay, that was really helpful. Usually, I'm not even gonna say what it is that I say because I'll probably just go on a tangent for like five minutes and start talking about spaghetti. So we're just going to play that entire topic

**Ali** [29:04]  
is important to see it is very important. Yeah, I think two other things to really, really think about, and we talked about this before is plugins. So if you are using like a WordPress site, I have seen so many of those that are very not performant. So making sure that you're thinking about that. And then ads and user tracking scripts, those slow down sites like no other. And so make sure that you really, really think about that.

**Kelly** [29:32]  
I was talking to one of my colleagues in the e commerce space who is helping somebody with their site, and the client was complaining about the slow site speed. He was loading that the client was loading, I think 45 different user tracking scripts in the header. Wow. Just like any, like if a service exists to track users, they were loading a script for it.

**Ali** [29:57]  
I mean, first there's like the privacy concerns with that. performance. So, yeah, to issues going on there. Other things to think about our lazy loading, which is something that I think is getting built into the browsers now, which is really cool. But lazy loading is essentially making it so that instead of all the images loading, on page load, they may load after that page that they're not blocking everything else from loading. So that maybe they show this like, blurry image until they come in or something along those lines. But that's definitely something to look at, for sure.

**Kelly** [30:33]  
Is there anything else? I think we've talked a lot about these things.

**Ali** [30:37]  
Oh, in server side rendering. Uh huh. So that's definitely a big thing to think about too, especially if you're using one of these JavaScript libraries. There are tools built in for all of them, like next JS next for view. Next is for react, and that will make it so that instead of your whole entire page being loaded as JavaScript, every time that you HTML is actually there. So that all of that processing is done on the server side instead of the client side. And that's going to make your site more performant, as well. So I would definitely recommend that if you're using a big front end framework that's going to make it so that essentially, that's just for developers to use. But your users are getting HTML, and a minimal amount of JavaScript instead of all JavaScript.

**Kelly** [31:26]  
It's amazing how much goes into doing all this work for having a very performant site, or performant app that the users never actually see us doing. And meanwhile, like our heads are exploding from all the things that we could possibly do to improve this, like I'm learning a lot from this episode.

**Ali** [31:44]  
Yeah, there's so much to do. It's a really, really cool topic. And there are so many people that are total experts on this to like, it's something that I've worked on to some extent, but it's not something that I've built my career off of. So we'll definitely link a bunch of resources for This so that you can learn even more and have checklists and please run lighthouse tests for this episode,

**Kelly** [32:09]  
awesome. Okay, so I think we've covered enough. At this point. This has been a really awesome episode. Again resources on our website, please check them out. I will be checking them out so we can read them together. So if you liked this episode, tweet about it will select one tweeter to win Ladybug stickers each week. If you know somebody who should be a guest on our podcast, you can visit our contact page at Ladybug Dev to submit a name. You can also submit your own name if there's something that you're super passionate about you want to talk about. We'd love to hear from you. We post new podcast episodes every Monday, so make sure you're subscribed to be notified and leave us a review. We love to read them. And once again, thank you to Shopify for sponsoring this episode. We'll see you next week.
