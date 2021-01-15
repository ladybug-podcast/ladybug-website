Ali  0:00  
One of the new hottest technologies in the front end ecosystem is next j. s. Why is it so awesome? And what can you use it for? In this episode, we'll be talking all about it. Let's dive in.

Kelly  0:18  
Welcome to the ladybug podcast. I'm Kelly.

Unknown Speaker  0:21  
I'm sitting.

Ali  0:22  
I'm Allie.

Emma  0:22  
And I'm Emma. We're debugging tech industry. Vonage is a cloud communications platform that allows developers to integrate voice, video and messaging into their applications using their communication API's. Whether you're wanting to build video calls into your app, create a Facebook bot, or build applications on top of programmable phone numbers. You'll have all the tools you need. use promo code Ladybug for 10 euro of free credit when signing up at Vonage dot dev slash Ladybug. Again, that's promo code Ladybug for 10 euro a free credit Are you developing an application with graph qL, but don't know where to start. Or maybe you're building a graph qL back end and you're overwhelmed with boilerplate code and performance problems. save yourself time and effort and check out the grand stack. The grand stack consists of four technologies that capture the best of modern web application development, graph qL, React Apollo, and Neo forge a database, the most widely used graph database. Together, they enable developers to build complex data intensive applications at scale with graphs all the way down by leveraging graph QL. To get started with grant stack, use the latest version of the Create grant stack app, see Li and download the free Manning ebook, full stack graph qL applications at Grant stack.io.

Ali  1:45  
So ness j. s is a technology I've been using a ton recently, it's kind of become my go to, if I'm going to use react, like for years create react app was by default, that I was going to build a react app, I would go to create react app. But now next has kind of taken that place for me. So it's a meta framework. And we've had this discussion on the podcast before of what is a library versus what is a framework. And a library is something that adds new features that you have to reuse less code. So something like jQuery would clearly would clearly fit into the definition of a library, or as a framework is something that defines how your code is structured. And so something like Ruby on Rails very much falls into frameworks. And there's always been this debate of whether react and view and the similar have or fall into the library or framework category. React calls itself a library. But a lot of developers are like, well, it really does define how you write your front end code. So maybe it falls into a framework. And this isn't a debate that I like to have, I think that it's a little bit pedantic did doesn't really matter. I'm just, yeah, just putting that kind of framing there. But there has been all of these frameworks that are built on top of react, or on top of another one of these front end library framework, whatever you want to call it. So well, some of the ones that you may have heard of would be Gatsby, which we actually did the original Ladybug site in and we can talk a little bit more about that.

Unknown Speaker  3:34  
Oh, that was a fun fact. I

Ali  3:35  
did. Yeah. Yeah, we definitely decided to move off of it. But I guess we was pretty hot for a while. I used to use it for a lot of sites. Kelly in Sydney. Did you too?

Kelly  3:48  
Yeah, I actually did my first headless commerce site on Gatsby.

Sidney  3:52  
No, I actually haven't done anything specifically on Gatsby. I've been in the angular world for so long. And it's always just something that like, it's either working perfectly, or it's like not working. And so now I'm like, slowly making that transition to react. So this is super great. I'm gonna have a ton of questions for you guys.

Kelly  4:15  
I'm going to direct every single question to Allie.

Ali  4:20  
So we've talked a little bit about Gatsby before on the show as well, I think we went through like a really big honeymoon phase with it, like a bunch of us did on the podcast. And again, at the time, it was the only thing really out there, like it. And then a lot of alternatives kind of came out and maybe highlighted some of the things that I like less about Gatsby. That being said, and this isn't a shout out rag on Gatsby or anything like that, because I think that I've set cool precedents for what the front end ecosystem is evolving to be. But there are a bunch of these meta frameworks now and so you may have heard of nothing. Which Kelly really likes. And so we'll be Yep, bringing that into the conversation throughout the show. There's also remix, which is one that is created by the founders of react router. And it's closed source and embedded beta. I just totally mispronounce that. But it's not fully fully fledged yet. But it's something that's kind of exciting in this similar space. And then another one that I've heard great things about is toast, which I haven't used personally, but no, I do like, Oh, really?

Kelly  5:39  
I mean, the food,

Ali  5:40  
oh, the food, okay. I was like, You were like toast, why leading edge? Kelly?

Unknown Speaker  5:48  
Not the food toast, what is the other toast.

Ali  5:51  
It's another one of these jam stack meta frameworks. But I believe that it's like built on top of rust. And I'm not sure how that completely fits in. But sounds really cool. And I know people are talking about it and really liking it. So I just wanted to put that out there as like it'd be in the ecosystem, even though I don't know too much about it personally. But

Kelly  6:13  
I might link to this post in our show notes. But it's just, it's called a it's on dev is a bite of toast the new gem stack meta framework. But what makes me laugh is it has a quote that says current stability status, somewhere between a yeat and a yellow.

Ali  6:27  
That's amazing. That's amazing. I love it.

Unknown Speaker  6:29  
Oh,

Unknown Speaker  6:33  
I'm gonna read that definitely.

Kelly  6:35  
Up. There we go. Okay, there's a new repo, I'll leave to the toast repo as well. The best place to stacker jam.

Ali  6:41  
Love it. I love all these like jam stack references. I think it's so funny how like Pawnee, the GM can be fit into things.

Sidney  6:51  
I know. It's like so dad jokey just, I'm shaking my head right now guys just like it creeps me out. And it makes me laugh. All right, what's going on here?

Kelly  7:05  
So what if we dig into the developer experience a little bit of what it's like to use next?

Ali  7:10  
Yeah. So there's a lot of really, really nice things built into next that is in react development. And I was saying that originally, when you wrote react, so I've been writing react before ESX was out. So before there was even like classes built into JavaScript, I was writing react code. And so I way back in my day, way back in my day, you had to write your like Webpack config from scratch yourself every time and it was a nightmare. And so you writing react code, required a ton of work instead of just like jQuery, which you could link the script tag and it was done right? You had it included. With react, you had to build in a build process and set that up yourself. And web pack config is where the bane of my existence back in like 2015 2016,

Kelly  8:01  
I don't think anybody enjoyed doing a web form.

Ali  8:05  
No, it was a nightmare. It was an utter nightmare. And then I think in like 2017 2018, I found out about create react dot. And what create react app did what or does it create reactive is still amazing, I still use it so often. But it generates that Webpack config for you. It generates all your starter files for you. It has your development server, all of those things that you need to write an app that you start to configure yourself, create react app does that for you. So great. And then next j s is almost an evolution of fat, where it has that same experience of writing your Webpack config and all that for you. But it also has static and server side rendering, which we'll talk a lot about in this show. But a static site rendering is it's going to make it essentially so that your end user is using has like HTML delivered to them instead of a site that's written purely in JavaScript, which is really nice. And it's going to make it so that your site is more performant. We've talked about this before on the show that anytime you load JavaScript onto a page, that's a performance hit for your end user. And if they are in an area where they maybe don't have great cell phone service, or Wi Fi or something along that those lines, that can be a really bad experience for them. And so having this static site rendering makes it so that it's going to be a lot more performant for them to use it. But you can still use react as a development tool, because react makes your development experience better, at least in my opinion, than writing a site and just HTML and CSS and a little bit of JavaScript, right?

Kelly  9:54  
Oh, I think it also makes the site more accessible as well. Absolutely. So also win.

Ali  10:00  
Yes, yeah. And SEO as well. Yeah. So all of these reasons are great, why you might not want to use react. But it's still really nice as a developer to write react. So

Sidney  10:11  
using react like, much less than like having to use like next to maybe or just like some of these other like fun tools, maybe,

Ali  10:20  
yeah. And then it also has server side rendering, which is really cool. And back in the day, we used to do server side rendering with templating languages like uj s, or handlebars, or like, er, B, if you were in Ruby,

Sidney  10:36  
take a minute to like, throw up because you said ej s. And now I'm thinking like, what is it JSP to like, for Java? Gross. We're using that right now. So I'm just like, no,

Ali  10:49  
yeah, so essentially, those would allow you to plug variables into your HTML. So HTML, by default is like static, you can't write dry HTML, it's always something that I used to say to my students, that they would, you know, write some code and try to like write dry HTML. And we were like, that's not a thing, you can't do that you have to write all the HTML from scratch. That's just how HTML works. But using something like a j s, or something along those lines would allow you to get data from your server, plug that data into that HTML template, and then render it to that end user, you could also do some things like loops and things like that. But again, they're not the most developer friendly thing that I've ever used in my life. And I think we're even like groaning about talking about them. They just serve their purpose, for sure. But you can do something similar with next j. s, where you have these variables that you plug in, and it's rendered on the server instead of in the client. So that's again, going to make your site more performant. But you can use react for it.

Sidney  12:00  
That's so dope. Oh, yes. Okay, this is really dope, like, I'm definitely like, after this, I'm gonna start playing around with very glad that we're gonna have this, their GitHub page and their documentation in the show notes, guys, this is some pretty cool stuff. It's

Ali  12:18  
amazing, the developer experience is so great. The other thing that I really love about it is routing. So react router is great react router allows you to do single page routing within a react app, or a client side routing. So it's just in the browser, rather than using a server to create different pages for your website. And so react router is great. But you do have to write kind of a little bit of boilerplate code, you have to create these routes and all of that, well, guess B, which we've been talking about a little bit, allows you to just create a file, and Gatsby transforms that file into a route for you. So you could make like about dot j s, and that'll make it so that you can go to your website and slash about and whatever's in that react file will render on that page. And next j s does this as well. It is so nice to work with, you can just create like about j s, and write a react component in there. And that's your about page. You don't need to create all these like routes with different components that render or anything like that. It is a huge pain.

Kelly  13:26  
I for whatever reason, when we started rebuilding the taproom site, we it's a view site, because we use view or react. We decided not to use nuxt for it for some reason, or one of the developers decided not to use knucks. And I'm like looking at all the routes that he's creating. And this and I'm like, my eyes are just like, not happy at the moment. We might get rewritten again. It's okay. It hasn't launched yet.

Ali  13:53  
But these types of sites are for

Sidney  13:55  
ya. Is there like a difference? Do you know and the performance of how like Gatsby does with routes compared to next at all?

Ali  14:03  
It depends on if you use the static side, or the static site rendering or use the server side rendering. When these pages are built. If you're building a static site, the pages are built at build time. So you won't run NPM run build or whatever the command is to build your site. That is when the pages are actually created. Nice.

Unknown Speaker  14:25  
super nice.

Ali  14:26  
Yes. server side rendering, I think it performs a little bit differently. That one, dynamic routing would be created for those servers.

Sidney  14:38  
Okay, that makes sense. It does sound like it'll take a little bit more time like for both for server side. So I mean, again, guys, if you're looking to kind of figure out what you're wanting to use, like make sure that you do your comparisons make sure that you're looking at the documentation and stuff so yeah,

Kelly  15:00  
Building full stack applications can sometimes be overwhelming but so many different technologies to think about. live streams are a great way to see how the pieces fit together by joining other developers as they build applications from scratch. The new 4g live stream features developers building applications with technologies like graph qL, react, view, graph algorithms, Gatsby, next Js goaling, TypeScript, data visualization, and much more. You'll see how a graph database fits into modern development workflows, and how other developers tackle problems like authorization, cloud deployments, data import, and analytics, covering how to use the technologies needed to build and deploy full stack applications. Follow neo 4g on Twitch or YouTube to join the regular neo 4g live streams focus on building full stack applications and graph data science.

Ali  15:55  
Okay, one huge thing about developer experience that I want to highlight is error messages. I think nothing breaks, developer experience like error messages that point to the wrong place, or they are unrelated to the error that's actually happening. Like I think we've all spent too many times as developers working off of an error message that makes no sense or looking to try to fix something that wasn't actually broken because the error message was pointing us to the wrong place. It's like one of the most annoying pieces of being developer. I think.

Kelly  16:28  
It's also annoying when you encounter somebody else's site that just has terrible error messaging. Yeah, I was I was removing myself from a bunch of Facebook groups last night. And I think like for every, like every fifth group that I thought I was in way too many groups. I was seeing like this, like an error is an error has occurred. And that was the heading and then the message was like, there was an error.

Ali  16:51  
Oh, my God, thank you.

Kelly  16:53  
So I guess for Facebook, it might confuse people, though, on so

Ali  16:57  
like, so many websites do this, too. Like, something's broken on their end. And they're like, Oh, you might be offline, make sure that you're not offline like, no, it's your problem. Like,

Kelly  17:06  
do you need to find a promise online? Yes,

Unknown Speaker  17:10  
you,

Ali  17:11  
but why I bring this up is I want to give the biggest shout out to next for this because they have great error messages, the logs point you to where the error is, they have syntax highlighting of the lines of code that may have an error in them. And in my experience, those error messages that have been descriptive, they have pointed to what is actually the error, and they've gotten you very close to fixing it. They're also warnings for things that you probably should fix, but aren't necessarily breaking your code. So I really, really enjoy this piece of it. And I know that it's something that has broken my developer experience with some other similar frameworks. So I definitely wanted to put that on the radar that it's done really, really well with next.

Kelly  18:04  
Yeah, I agree. It's the same with nuxt as well. I like that, you know, it'll it'll warn you like, hey, you're referencing a property you never actually defined or things like that. Were doesn't actually break anything. But that was a really good warning. And then yeah, the error messaging of being able to point to actually where the error exists is, it saves developers a lot of time. Oh, it's

Ali  18:24  
so does. Oh, yeah. Yeah. And there's so many tools that don't do that, too. So most don't, most don't. So having that. Um, another thing that I want to shout out for developer experience is documentation. So the documentation is really great. And they have a getting started guide that actually has interactive quiz questions as you go. And in teaching lessons I've talked to, or teaching episodes, I've talked about checks for understanding, which is when you be sure that you learn something by quizzing yourself, or somebody else quizzing you, if you're in a classroom, and they have this built in, so you have to answer trivia questions at the end of each section in this getting started guide. And as a teacher, I'm like, this is amazing. Why do more people not do this because you're really having to read and making sure that you are grasping what they're telling you in these different sections of the documentation.

Sidney  19:29  
Oh, wow, I'm looking at this right now. Actually, on the website, this is incredible. This would have been so much easier and just like, faster to learn with some of the other like, frameworks that I've been working on previously like with node and just just Angular like that would have been so nice. If I had had this with

Ali  19:52  
Angular Don't even get me started. Oh, my goodness. The the superheroes isn't there. Their whole getting started guide superheroes in has been a healer one.

Sidney  20:01  
Yeah. Just I don't want to be that person. But yeah, it makes me sad. It really does. It isn't. I don't feel like that for my learning style. It's that great. So I would be much more interested in learning, like how next does more of their documentation as I go along. So there's that hot take.

Kelly  20:21  
This is really cool. This is really cool. Yeah, like everyone should do this. So if you're in charge of writing documentation, even it's like a fun thing to add. Like, it's just fun, a fun little interactive piece to see how many people are like landing on the page and actually interacting with the questions. Yeah,

Ali  20:39  
yeah. It's such a great tool. I think knucks has really great experience in that that realm as well, who Brian, I think she's in charge of their developer advocacy and developer education. She is super great. We can link some of her social links in the show notes. But she's she's really awesome. And so I'm sure everything I've experienced on nexts. learning paths are great as well.

Kelly  21:11  
Yeah, I completely agree. And I think that their documentation is open source. And so they let anybody contribute to it. And they actually list the names of the contributors.

Ali  21:22  
I haven't one of those contributors.

Unknown Speaker  21:27  
No, one,

Ali  21:28  
I just added a guide for deploying to AWS amplify, which is the product that I worked on.

Sidney  21:34  
Fancy, so awesome, like, hype yourself up for that. Amazing. No, it's

Kelly  21:40  
just something Exactly. I don't know, I don't know.

Ali  21:45  
We touched on this at the beginning of the episode. But I want to dive a little bit deeper on the fact that you can choose between static site generation or server side rendering. So you can choose when you are building and deploying your site, which path you want to go down. Let's talk about the difference. So static site generation is going to fetch all your data at build time. So when you run NPM, run, build or whatever it's going to create your pages, it's going to plug the data into your pages when you are doing that build step. So that is the static site generation. This is amazing. If you have a documentation site, if you have a portfolio site, that doesn't change a lot, if you have a blog that you are pushing new blog posts to or something along those lines, a site without a huge amount of interaction with data that see is pretty consistent. The other option is server side rendering. And this is going to fetch your data on each request. So your page is going to be rendered on the server every single time your user makes a request to a page. And this is really helpful if you have a website with more dynamic data. So maybe something that's more ecommerce focused, where things are changing on a more regular basis. You know,

Kelly  23:09  
I'm going to be entirely honest, and I get these two confused all the time. I just think they're the letters are too close to each other.

Ali  23:16  
Yeah. Yeah, the letters are very similar.

Unknown Speaker  23:19  
SSJ I do as well. There's almost a little bit of shame going like with that, but I'm glad that you also admitted that

Kelly  23:28  
there's no shame in it honestly, like, in the world of e commerce is it's like acronym hell. There's so many things between like ao v CAC sdtv. LTV, like they're they're all very, like, close to each other. So getting to acronyms that are literally one letter differences, not something to be ashamed of. Okay,

Unknown Speaker  23:50  
I feel better about the big

Ali  23:53  
O acronyms are so hard in general.

Kelly  23:55  
SSR so I just made up CTV that's not actually an acronym.

Unknown Speaker  24:00  
What is your making up shit on here? Well,

Kelly  24:03  
you could do like LTV and cltv which is lifetime value and customer lifetime value, which are basically the same but like CAC is customer acquisition cost, or CRC customer retention.

Ali  24:16  
Well, CTV is Canadian news. So

Kelly  24:19  
there we go.

Ali  24:20  
That's why Oh, yeah, it's not ecommerce, but it is a thing.

Kelly  24:25  
You're correct. I think CRC is also made up so well, this letter acronyms now,

Ali  24:31  
but have different permutations of different letters mean different things.

Kelly  24:35  
What's Next on our list?

Ali  24:37  
Yeah, both of those are really, really helpful. Um, and it does change the way that you deploy your app pretty significantly, whether you use static site generation or server side rendering. If you use something like SS G, so the static site you can deploy to a static site hosts so it is easy AWS amplify console for cell netlify. Even GitHub Pages is a really simple site. So you could deploy it pretty much anywhere. And it's just front end. So you can use front end hosting, very, very much supported by pretty much any front end hosting provider. In contrast, server side rendering is a little bit more complex and something that you have to do a little bit more to deploy. So there are different options for this versatile, who has written next js, they have a deployment platform, so that you can deploy with SSR pretty straightforwardly. Or you can set up any sort of server to deploy it. So the serverless framework has deployment mechanisms, so that you can deploy to something like AWS, you could deploy to something like Heroku, but you do need to deploy to something that has a server instead of just hosting your static site. So it's a little bit more complex. You get some really awesome features from doing that. But it's not necessarily just NPM, run, build, and then you have this site up in the wild.

Sidney  26:17  
Thank you for the distinction because I I've definitely caught myself in that kind of spin on like where I need to make sure that I deploy my static websites and what actually needs to go when it comes to how dynamically complex that it is like, I've definitely gotten like my sites mixed between the two, like, what do I do with netlify? And then what do I do with Heroku? Like, which one needs to go where and everything? It's, it's been hell. So I've done that.

Kelly  26:48  
And, of course, I'm speaking from the knucks perspective here. But I think one of the things that also gets me confused is when you're working with scripts, you might have a site that sets that is server side rendered, but certain scripts need to be actually set to SSR. False in loaded after the fact in order to actually work. Well, it's the most confusing thing when I'm just like trying to dip my toes into knucks. And I'm like, I need to do what no, yeah. And I could have my reasoning, like completely wrong. That's just what my assumption is, is why you know why it needs to happen. All I know, is that I had to do set it to false. And I learned where to put that

Unknown Speaker  27:26  
as long as it works exactly as long as it works,

Kelly  27:30  
as long as the clients not going to ask me why this is set. But thankfully, the client is not a developer. So

Ali  27:38  
along similar lines, there's also routing, we talked about the routing, where you can just create a file. And that will create a page for you pretty much if you put a react component in it. So you can create like about dot j s within the route directory, and that's going to create an about page for you. But you can also do dynamic routing. So you could in square brackets do ID dot j s, so it'd be like open square bracket, ID, close square bracket, dot j, s, and that's going to allow you to create a route that would catch any ID. So if you do slash 123, that will take you to the page for item with id 1230. Okay, that's smart, that's smart. So if you're doing something like e commerce, and you want to have a separate page for each of your items, that would be how you would do that, which is really, really a nice thing to have built in.

Kelly  28:34  
You can also kind of like layer them as well. So yes, you know, for example, in e commerce, you have a collection of products and your products within that collection. So you can have like slash collection slash be dynamic collection, handle, and then slash products, and then have the actual product handle. So it's pretty cool.

Ali  28:53  
Yeah, you can even to API route as well. So there's this API directory, and say you want to have a JSON rendered or something along those lines, you can put that in an API route, they look like Express routes. And, for example, I rewrote my portfolio site index js. I haven't deployed it yet. I need to do that probably before this episode airs. I'll have it deployed. We'll

Kelly  29:19  
see. Now you have a goal. Now, after I'm done recording this, you have one week. Oh, my God, Kelly.

Ali  29:30  
Yeah, um, but what I did is I made a JSON with all my experiences. And then I have that being served from an API route so that I don't have to have all that code in that same file or anything like that. But that also would be the place where you could make a request to your API or something along those lines. If you wanted to do something fancy there. So Find that feature really nice to work with as well. I don't

Kelly  30:03  
know if there's something without like that with nuxt. Or if it's just called something different. A question, because I never heard of that before. But that is really cool.

Ali  30:17  
This server middleware property. Yeah. Okay. It says that there is epi routes. Oh, hey, my work a little bit differently. It looks like, yeah, you might have to do some more configuration to get them working. not trusting.

Kelly  30:39  
I like that. It's like written like, Express.

Ali  30:43  
Yeah. Now I'm wondering if it is actually express her so just looks like Express. Because it sounds like

Kelly  30:50  
a custom API endpoint. A server middleware can also extend Express. So literally references expressing this. Yeah. Isn't this great? everyone listening to the podcast gets to learn alongside us? Yeah.

Sidney  31:04  
Yeah. This makes me think that like, it's not necessarily expressed. I don't know if you were trying to like, be technical with it or not, but it Yeah, this makes sense to me.

Ali  31:16  
So it actually is Express, I believe, but you said different resolvers.

Sidney  31:23  
Okay, that that also makes sense. Okay. I got Yes.

Ali  31:27  
Yeah, I should look this up before the episode. But I was writing them. And I was like, this looks exactly like Express. So I don't really have to look it up. Because I've written a million in one Express server so far.

Sidney  31:39  
But are always learning on the ladybug podcast? Yeah.

Ali  31:43  
It looks like an express route. Because that is one

Unknown Speaker  31:46  
bear. Imagine that.

Kelly  31:48  
I do like just kind of touching back on routing, though, using something like next and knucks. This is one of the biggest benefits. And we touched on this during the developer experience. So it's like it gets, it becomes a huge pain to have to do like the the more manual routing, if you're going like, if you're if you're manually, well, manually setting up the routes. Yeah, having these dynamic routings and that I don't know everything with with routing with nuxt index was way better.

Ali  32:16  
Yeah. When working with something like Gatsby, it feels like you're writing a Gatsby app, like you have to do everything in Gatsby. Whereas at least with my experience, and next, you can almost use it as like a create react app where it scaffold your project for you, and you have this great routing built in. But it doesn't really necessarily dramatically change every single other piece of your development process. At least it doesn't for me, for sure, I agree on other things that it has hot reloading, which most better frameworks have built in at this point. But it is nice, it's fast. It works. dependently dependably, also, CSS modules are built in. And you can use sass really quickly as well, which I know you can now with create react app. But that was a big limitation for a while that you couldn't. So that's a really nice feature to have that you can pretty much use sass out of the box. I think you have to like npm install sass. But other than that, you're good to go.

Kelly  33:13  
Yeah. And yeah, and being I don't know if this is actually like a next and next thing or if this is just react slash view is like, the scoping that sass to us particular component gets really, really handy when you're just being able to build things out quickly.

Ali  33:33  
And then the last thing that I wanted to shout out is that next has these really amazing starters for sites. So they have specifically an e commerce one that they have built out. And it is gorgeous. And it has so many amazing features built into it. It would definitely be something that I would look into if I were to build a ecommerce app, which I don't necessarily do that often. But, Kelly, that seems to be your your e commerce your world. Yes. They have another one that they released two, I think it was a video or conference site, I believe. Let me look this up. Yes, there's the next JS commerce. Maybe not maybe there's just the next JS commerce. Maybe I was wrong on that. But while I was looking at the site, I saw that so many companies are already using next JS so they've got Tick Tock on here. They've got Twitch, they've got Hulu. They've got Nike. Oh, it's not like this is this brand new thing that nobody's using yet. A lot a lot of companies are already using next

Sidney  34:49  
maybe it is gotten a little bit more popular because of like, everyone's kind of recent like website upgrades. I know that I've noticed like a complete stark difference and how like who loses It has been over the past couple of months. And I'm just going to assume that it's because of next. How about that?

Ali  35:05  
Maybe, maybe.

Unknown Speaker  35:09  
Cool.

Kelly  35:10  
I want to play with this.

Unknown Speaker  35:17  
Yeah,

Sidney  35:18  
just everything is we can learn lessons here all altogether.

Kelly  35:22  
Yeah, I mean, every headless commerce that I have built has been built with view, with the exception of the six months, I built my headless site on Gatsby. But I would definitely love to kind of play around with this and see, see how it works such

Ali  35:39  
a great developer experience.

Sidney  35:41  
This will definitely be like my next little project as I go along and build another project that I'm super interested in for my portfolio. So you've you've basically convinced me this was all about me, like listening to like, what the benefits are of this. And like, you've already convinced me sign me up? Where can people like find all of this, like nice documentation? I feel like we should just make it obvious for everybody.

Ali  36:09  
Yeah. Next j s.org. Bands awesome. And

Kelly  36:13  
you want to be very specific as next gs.org slash Doc's?

Ali  36:17  
There you go. There you go. Just to summarize, again, why next js is so great developer experience, the documentation is great. The coding experience is really great as well. But then it's also super performance. So performance comes first. And so your end users going to have a really great time on your application as well.

Kelly  36:39  
So you should play around with it. And let us know what you think. And I don't think I have anything else to say about that.

Sidney  36:48  
I would love to hear alley. Okay, I'm gonna be devil's advocate for like two seconds. What do you not like about next right now? Okay.

Ali  36:57  
I was trying to think of things while I was building a couple next apps recently. And honestly, for me, I can't think of any that are next specific. I think that there are definitely drawbacks to react as a whole, like react can be pretty complex to learn, and all of those complications. But that being said, I have not come across anything with next j. s, specifically, where I'm like, this is a big problem on their end, I think there are a ton of really great resources. There's great tooling, there's great features built into it. And I can't wait to see how it evolves too, because it's relatively new.

Kelly  37:40  
I have one.

Ali  37:42  
Yeah.

Kelly  37:42  
The name is too close to nuxt.

Ali  37:45  
They should all diversify their names.

Kelly  37:47  
Yeah. I mean, I have the same complaint about not wanting to be there. So yeah, yeah. That's mentioning, hey, we have to find some kind of downside, right?

Ali  37:55  
Yeah, that's true. I've just known or named as the n star star t family of frameworks, which makes a lot more sense written, but it's like two wildcard letters and then T. There's unrest j. s two, and I'm not really sure what that one does, but it's

Sidney  38:15  
about this that is that's grow. Yeah.

Kelly  38:17  
Um, and we also talked Yeah, we talked about toast. Toast. Oh, yes. But that doesn't follow the same naming convention. But yeah, um, you want to do some shout outs?

Ali  38:28  
Let's do it.

Kelly  38:30  
Cindy, why don't you go first?

Sidney  38:31  
Yeah, okay, let me think about this. So last time, we had actually talked about this guys. I miss Kelly had like, totally ruined my night and said that the Netflix show teenage bounty hunters was actually cancelled after one season. So thanks for that, Kelly. I appreciate it. But my shout out, I think, let me see. I am so grateful. This is a shameless plug. I'm grateful shout out to myself that I have been able to with the help of you awesome, ladies. We have our Ladybug podcast, YouTube channel, finally, up and running. So if you guys are looking for a little bit of nostalgia, as well as our new episodes, make sure that you check out our YouTube channel. We will link that in the description box description box, we will link that in the show notes. button. Make sure that you press that subscribe button notification bell blah, blah, okay, Allie do it.

Ali  39:33  
My shout out is to our editor Chris, he is amazing. He always gets the things that we need done even when we are very difficult clients and he also does my YouTube videos as well. So I have Chris hired on the side as well, but and Kelly does too.

Kelly  39:54  
Yep. Chris is both Ladybug podcast and commerce team.

Ali  39:58  
Nice Chris is doing a lot of hours for us and he just always gets everything done better than we expected. So, my shout out goes to him. Kelly, How about yours,

Kelly  40:09  
though my shout out was spoiled by Sidney.

Unknown Speaker  40:12  
My Sorry, my

Kelly  40:14  
shout out is totally fine. his teenage bounty hunters it is a one season series on Netflix that is really fun to watch. It's 10 episodes. Highly recommend it's like a like a coming of age slash comedy slash action ish drama that is all

Unknown Speaker  40:36  
full of action like just

Kelly  40:38  
It is very good bounty hunters. So it's, it's a it's a fun watch. And I even though it got cancelled after one season, which really should not have got cancelled after one season, but it's well worth the watch. So, so highly recommend.

Sidney  40:52  
I wonder if we'd be able to start a petition on that is not something that we could successfully do with our listeners. Dear Netflix, right. The Ladybug podcast demands that you bring that teenage

Ali  41:06  
pull what Emma happens to me all the time, whenever anything happens with like Spotify, where everybody DMS her and ask her looks engineers, like yeah, Hey, yo, Netflix. We need to show bagha

Kelly  41:23  
I know you're purely focused on the front end experience of the website, but I really need you to get this show.

Ali  41:29  
Yeah. Contact your coworkers. You're

Kelly  41:33  
so funny. Amazing. Hey, Sydney, do you want to close this out?

Sidney  41:36  
I do. If you liked this episode, tweet about it. We'll select one tweeter to win a copy of Dave ceti. His book pure react this week. We also post new podcasts every Monday, so make sure that you subscribe to be notified. And I would love if you would leave us a five star review. That's on Apple podcasts on Spotify or wherever else you get our podcasts. Also, make sure that you subscribe to our YouTube channel. I'm just going to shamelessly plug that in as well because there's no

Kelly  42:07  
shame.

Sidney  42:09  
We are up here running. I am so excited to be here. I'm always just gonna say I'm grateful and excited to be here with you guys. This has been Sydney this has been Allie and this has been Kelly, thank you so much for being here and listening to us. This is the ladybug podcast and we'll see you next week.
