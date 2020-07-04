**Ali**  0:00  
Have you ever written code to add a new feature that ended up breaking a existing feature? Or have you ever written code that works in one scenario, but breaks in a bunch of others? I think we can all admit to this as developers, myself included. Well, this is where testing shines. We write code to test our other code that we can immediately get warned if our code breaks something else, or if it doesn't work in every scenario. In this episode, we'll talk about a bunch of different types of testing and why they're helpful. Let's dive in.

**Kelly**  0:33  
Welcome to the ladybug podcast. I'm Kelly. I'm Allie. And I'm Emma. And we're

**Emma**  0:37  
debugging the tech industry.

**Unknown Speaker**  0:40  
Hey, Kelly, have

**Emma**  0:41  
you heard about this cool tool called AWS amplify? Tell me about it. It's a suite of tools and services that enables developers to build full stack serverless and cloud based web and mobile apps. You get to use whichever framework or technology you want on the front end does sounds cool.

**Kelly**  0:54  
Well help me get up and running with things like hosting Yeah, authentication. You betcha managed graph QL. Totally, how about serverless functions API is machine learning chatbots file storage,

**Emma**  1:05  
yes to everything amplifies built, especially in a way to enable traditionally front end developers like yourself, Kelly to be successful, because you can use your existing skill set to build a real world full stack apps than in the past would require deep knowledge around back end DevOps and scalable infrastructure. The amplifi console also allows you to use a GitHub repository to deploy to a globally available CDN with ci NCD built in. It's super cool. Where can I learn more if you want to learn more about AWS amplify Miss AWS?

**Kelly**  1:36  
amplify.github.io.

**Ali**  1:39  
Awesome. So the first thing that I want to talk about is our experiences with testing. And like, do you tend to write tests for your code?

**Emma**  1:47  
I don't know if I want to answer this question. Can I plead the fifth? I'm just kidding. I work primarily on design systems and the documentation of those components. So I don't write tests on a regular basis. However, history with testing has been in my senior year of college, I did an internship with IBM where I automated the installation of WebSphere on z OS using Python. So like I actually did do a test automation internship. I also used a little bit of selenium but let's be real. I didn't know what the heck I was doing. And then when I joined logged me in for my first year, so we were testing with just an enzyme. So I have written unit tests. But to be honest, I would need to really relearn testing if I was going to do it in production, which will happen this July so I better start learning again. What are you killing?

**Kelly**  2:39  
So I hire people to write the tests. I don't really do it much myself. I Okay, so I'm less involved in the day to day of development at this point. I just don't have time for it anymore. But I will also say that testing and Shopify is particularly difficult. So Something we're now starting to do. We're figuring it out as we go. But we're using Cypress for all of our testing. I'm hoping that by the time we, I don't know, by the time the end of the year comes, let's say that we'll have like a really good handle on it. But we're also doing a lot more back in development now as well like writing Shopify apps. So those definitely need tests too. So we're going to be doing a lot more testing than we currently are doing.

**Ali**  3:26  
So for me, I actually learned testing I worked for an early stage startup that had no tests whatsoever. And towards the end of my time there I had been writing so many are working on so many different applications with similar stack and so I like to challenge myself by making myself learned something new for everything that I worked on. And so I for a while challenged myself to do all of Sandi Metz is rules for programming, which was really difficult if we can link those in show notes if anybody's curious about those, but it's like, every function can only be five lines of code. And you can only pass a couple arguments. And they're pretty strict. And then my next one after that was to write tests for all my code to do complete test coverage and test driven development. So I taught myself for that. And then, when I started teaching, we didn't have testing in our curriculum too much. And it's something that I've pushed really hard for, because I think that first is a teaching tool, it helps people to really think about their code in detail and break it down into smaller pieces, because you have to test each piece of your code independently. And then the other piece of it is that most companies, at this point you are going to have to write tests. And so having them have that background is important. Then when I worked at Dev, we had very high test coverage for our code. It was something that they were super passionate about. So I used it there as well. Just an enzyme at least for Front End testing is my normal stack. But I'm really interested in learning from other things as well, which we can talk about down the road.

**Kelly**  5:08  
So, in other words, you are our resident expert.

**Ali**  5:12  
Yeah, not not really at all, I just have written curriculum on it, which helps me to be able to talk about it a little bit better. Even though I'm in no way shape, or form an expert on on this at all, I think we had this conversation at some point. And I'm not sure if it was off air or on air. But we were talking about the rise of front end testing and how when we all started writing front end code, if we hadn't really heard too much of front end testing, but it's progressively become more and more of a thing. And testing JavaScript code has become a huge subset of the industry, I would say. So have you all seen that kind of progression over time as well?

**Emma**  5:56  
Yeah, I've definitely Yeah, absolutely more discussion and more education coming out about front end testing. But I don't feel like in the recent past within like the last five years, like when I started, I didn't feel like there was a huge emphasis on front end testing. But now it's definitely more of a priority. Agreed. Agreed,

**Ali**  6:17  
like back end testing, I think has been a huge part of everything for

**Emma**  6:22  
Absolutely. I had to write tests in Java. I don't remember anything about it. I think I've kind of repressed those memories, because it's traumatic for me.

**Ali**  6:33  
I do not miss writing Java code at all. I

**Kelly**  6:36  
mean, either. Neither.

**Ali**  6:38  
Awesome. Well, I just wanted to have that quick conversation about whether front end testing has risen over time. So we're mostly going to talk about unit testing in this episode, which is when you write tests for a small chunk of your code at a time, but there's also other types Testing as well. There's integration testing, which is making sure that all of your code works together. Well, there's performance testing and load testing the performance testing checks to see if your web page loads in a quick manner, load testing, make sure that your website can handle a lot of people on it. There's usability testing, recovery testing, so if something crashes if your system will recover from that, and then there's also non automated testing, so just testing when you refresh a page and look at it, or the testing that QA people do as well,

**Emma**  7:39  
we've called those smoke tests. I don't know why they were called smoke test Exactly. But like saying we would always post in our selection and be like, Hey, can we can people smoke test this just to make sure everything works on like the release candidate server before it was published to our customers. My favorite version of load testing is posting a link to a link A website on a Reddit comments or Reddit posts and seeing if it survives, oh my gosh, um, there are a couple other types to regression testing is one. So making sure that what you're publishing doesn't break something that currently or exists or existed previously. But there's also a unit or you're not unit testing, snapshot testing, which is really cool. So snapshot testing, literally takes a snapshot of your UI, and test whether any visual changes have been made. So this is really good, because you wouldn't want to write a unit test to say, Hey, is my button blue? Like there are some there's a limitation on some of the things that you should be testing. So you, you shouldn't necessarily have 100% code coverage for unit tests, because some things are just too menial to be writing these tests for it's not worth the time. But snapshot testing is a really great way to test your UI.

**Ali**  8:45  
Yeah, it's such a cool tool. It'll give you this warning. Oh, you changed this class name. Did you really want to do that? And if so, then you retake the snapshot, the snapshots really just a JSON file that's storing your component or JavaScript code or Whatever in text format and checking to see if that text format stays the same across versions. But it's a really, really awesome tool that just has built into it. And it's so easy to implement to it's just the same line of code a couple different times, which is awesome. Yeah,

**Emma**  9:17  
it's super nice. What's in it. So just thinking about like an example of something you would want to write a unit test for? And when you wouldn't, the first thing that comes to mind for me is like a modal. For example, like let's say you have a, like a signup, modal, you have a call to action button. And when the user clicks the button, the modal appears. And then when you click the Close button, it disappears. So testing that functionality that that works is really, really important. But it's not something you would want a quality assurance engineer to necessarily go through this flow every single time to make sure nothing is broken. So that's where we can kind of automate those menial things. But something you maybe wouldn't want to automate. I don't know Do you have an example?

**Kelly**  9:55  
I have an example. I work in e commerce Do you want to make sure that you can add an item To the cart, and it actually takes you to the cart so you can actually check out. I only say this because we didn't have tests for something like this. And we ended up completely ruining the sale for a company for like four hours until we realized our mistake and figured out what happened. Oh, no, that's a solution. Yes.

**Unknown Speaker**  10:20  
Okay, cool. Cuz I think Emma had just first he did that was like, what should we not?

**Kelly**  10:25  
I thought you asked you. I thought you asked if you I thought you asked for an example that you would have a test for.

**Ali**  10:32  
So I wanted to clarify on your talk, like sounds like something that you would want to test? Oh,

**Kelly**  10:36  
well, in that case, no, don't test your Add To Cart functionality. That's a terrible. Just let everything break.

**Emma**  10:42  
I think that the main focus here is like you want to test the core functionality of your application to make sure it's working. You want to test visibility to make sure things appear when they should appear and disappear when they should disappear. But you wouldn't necessarily care to test that my button has 16 pixels of padding on each side or my modal has this class. name like those are things that are so like there's an opportunity cost when it comes to testing where like, I can't even explain it. It's just something that you'll be you'll be learning on the job. And if you have a mentor or other team members, they can help you. But I remember being at LogMeIn and, you know, I said, Well, why don't we have 100% test coverage on this file? Because it can show you what percentage coverage you have on what files. And you know, there are just certain things you don't necessarily need to write unit tests for.

**Kelly**  11:29  
I'm still laughing at myself.

**Emma**  11:31  
Yeah, should be that was ridiculous.

**Kelly**  11:33  
That was ridiculous.

**Ali**  11:35  
Um, but yeah, if you checked every class name, there'd be a bajillion tests. If you change the class name, then you would have to change it in both your tests in your code and it would get really ridiculous and that's where snapshot testing really shines is that it will just tell you, hey, you changed this thing. Did you really want to change it and then you press Yeah, I think why. Right, and then it regenerates your snapshot for you.

**Emma**  12:00  
or something like that. But it's nice because Okay, let me tell you a little embarrassing story. So I didn't know testing was a thing in college because believe it or not, even though I went through a computer science degree, I was never informed that testing existed.

**Unknown Speaker**  12:14  
Classic, yeah,

**Emma**  12:14  
classic. And so what that meant was I showed up to IBM and my first week and, you know, that gave me a piece of work, which I normally college graduates should be able to handle and I was not prepared. And in any case, I pushed my changes to like I had my code review, push changes to master and broke the environment for everyone on the product. And I got a call from a very angry Scottish man who told me that it was absolutely absurd that I didn't write tests. I should have known about this, and it traumatized me. But it's just it's not something that I was ever taught in colleges. Now. We're seeing you know, boot camps and other things like I'm sure you're more prepared on a practical level, at least from from looking at the curriculum. I think I would have done better in a boot Camp style program then taking a computer science degree because I don't touch data structures and algorithms on a day to day basis, but I wasn't taught testing. And the benefit of adding tests is you make sure it works before you push it. But it's nice because you can add like with your continuous integration. So if you'd like circle ci or Travis to integrate the I don't know exactly what, you know, all this stuff does, but you can add checks. You know, I'm just talking about what you can add these checks to make sure that all of your tests are passing before someone pushes to masters that people don't do what I did and break the entire environ

**Kelly**  13:34  
ent. On the bright side, you now I always have the question to ask yourself, what would an angry Scottish man say about my code? And it really puts it in perspec

**Ali**  13:45  
ive. No, so I don't want to brag too much about or anything like that. But, uh, one of the things that I'm most proud of is that for most of our homework assignments, the students have tests written for them already. So they're trying to write the homework have matched those tests. And so they are seeing that real world development environment from like day one, essentially where as soon as they have a homework, they're doing NPM, run dev tests and checking to see if everything's matching. And then they learn how to write the tests themselves. And week four of the program, so they see that a lot, I feel like I s

**Emma**  14:23  
ould go thr

**Ali**  14:26  
ugh. You all are super advanced, but it's, it is cool. It is a, I'm proud of it. And so then they do have to write tests for their projects after that, too. So let's talk about why testing is important. And we've given a couple examples of this already, Kelly with a broken shopping cart, Emma with the Scottish man yelling at her. But essentially, it makes your code more predictable and maintainable. So instead of when you change code in one place, having to manually then test every single other piece of your application to make sure that that all is still working. You have this test suite is doing those checks for you. So that as soon as you break something in a PC or code you have this warning up now for your tests are failing or something along those lines. It also makes it so that it's easier to update your code and versioning. So if you are trying to upgrade from react 15 or 16, or something along those lines, and it breaks everything, you have that test suite that is there for you, when you're going through that upgrade process. You still do need manual testing, though this is an important piece of the puzzle. Your tests are not perfect, it is still code. And so you still need to have some sort of manual testing, as well for your proj

**Kelly**  15:41  
cts. That's usually what we do just manual testing. So that's why I'm hoping to automate some of the same things that we're doing on a daily basis. I think it's really interesting. Also, you know, kind of kind of touching back on on the way that you're teaching people how to write these tests, and always test your code and everything. Coming from a development process, a development workflow that didn't include testing and realizing just how many things were slipping through the cracks. It really it's it's really been eye opening about just how many mistakes that we've made over time that could have been prevented with tests. I swear that we do good work. Like I feel like I'm just like, completely shitting on the work th

**Emma**  16:22  
t we do. You're not but let me hea

**Kelly**  16:24  
 and you know, I think it's I think it's worth acknowledging your your weaknesses, so you do something abou

**Emma**  16:29  
 it. I also want to say to like, there are many people who get very excited and passionate about testing. I'm not one of those people, I understand the importance I you know, I obviously I will write tests if I'm writing production code, but it honestly does not excite me almost the louder like, I just, I don't know, it's just not my passion. So it's okay, if you're not super passionate about it. It's great if you are, but it is necessary. So if you are writing production code, it's a pain that you don't have to Love, but you need to, you need to incorporate 

**Ali**  17:04  
eah. I think that there are so many amazing people, though in the industry now who are super passionate about it. So Angie Jones, who we had on to talk about actually teaching is a super expert in testing, especially in Java. And she has a whole platform test automation, you I think we can link that in the show notes, but it's a really great resource. And then Kent C. Dodds is another great one. He has so many resources on testing, especially in the front end with JavaScript. So he is another great reso

**Emma**  17:35  
rce. He just puts together a testing JavaScript course two. I'm not sure if it's published, or if it was just yeah, I think yeah, it's totally published. He has like three different tiers I bought and link that in the show notes. I'm really excited to go throug

**Kelly**  17:47  
 it. Oh, you know, so on my stack of stack of courses

**Unknown Speaker**  17:52  
 two data structures. Yeah, I have one

**Ali**  17:55  
day. I'm trying to be better about it, though. But I have all these really cool Coursera ones on coding topics like happiness and business and stuff. I don't know. That's what's getting me excited right now. Okay. And so speaking of Kent, C Dodds, he has this really awesome blog post about knowing what to test. Because I think especially when you're starting out, that's one of the most difficult questions. And he said that we write tests to be confident that our application will work when users use them. And some people write tests to enhance their workflow as well. And that's great. But ultimately, I'm interested in confidence. That being the case, when we test we should map directly to enhancing our confidence. Here's the key point I want you to consider when writing tests, think less about the code you're testing and more about the use cases that could support. So I think that that's a great summary of what you should be testing. And going back to the question that Emma had earlier of, what should we be writing tests for whether a class name is changed or whatever, I think that this really addresses that. Another thing thing that I want to talk about is test driven development versus adding tests to your code after you write your code. So test driven development is a paradigm where you identify a behavior you want in your code, you write a test, you make sure that that test fails, then you write the minimum amount of code your application to make that test pass, then you refactor the code and repeat the whole cycle. So for example, say I want to build a counter application. So a counter application is one that you add one, two things and then you can subtract as well. So you have like a button to go up and a button showdown I make a lot of use at work because they're usually the Hello World of writing actually code that does something. So you would identify a behavior that when you click on a button that you want the number to increase, and you would write a test to see if that number in state increases, so maybe checking to make sure that it's zero. At the beginning of the applications lifecycle, then you could simulate that a user clicks on the button. And then you could make it so that the, you want to check to see if the number in state then increase, you want to make sure that that test fails at first. So before you write the code that makes that test pass, you want to make sure that it fails because a test that passes what it's not supposed to pass is just as bad as a test that fails when it's not supposed to. So you need to make sure that your test is actually failing when it needs to fail, then you would write the React code or your application code to make it so that when you click on the button, it actually makes the number increase. And then you refactor the code to make it nice, and then repeat the whole cycle all over a

**Kelly**  20:46  
ain. So is this the way Is this what you prefer to do? Do you prefer test driven develop

**Ali**  20:51  
ent? I actually like both. I probably in my personal code, do the writing tests after approach, but I think it's important to talk about their feelings. to different approaches and different companies taking different approaches and different people taking different approaches to think Pivotal Labs is an example of a company that does all test driven development. They write their tests first and then write their code. Most environments that I've worked at they we've done the writing tests after you write your code. So I don't know, anybody have different opinions on this or different experie

**Emma**  21:24  
ces. I don't like test driven development. I understand that this is one of those things like, I don't know, I feel like there are people listening to this, who maybe identify with me were like testing is not the most interesting topics. That's maybe why I don't enjoy test driven development because I just kind of want to jump in and get started. Yeah, coding a feature or fixing a bug, but I definitely see the advantages t

**Ali**  21:52  
 it. I totally feel that as well. I also think test driven development can be tough to visualize, it can be difficult to get in that mindset, and so I definitely see both sides of this. And so I willing to go with whichever To be honest, I'm fine with y

**Kelly**  22:10  
u. I can't help but read all the steps involved in test driven development and just like fall asleep halfway through. It just feels like it's so much 

**Emma**  22:20  
ork. Yeah, it seems like it's placing more of an emphasis on testing and then more of an emphasis on development. That being said, to me, it feels more like making sure you meet all the functional requirements of a new feature. And I would personally rather just write down all the functional requirements, build it and then test the things that need to be tested then like Kelly's point and go through this entire huge process. So but at the same time, I think it kind of depends maybe on the product you're working on. If you're working on something that is very consumer heavy. There are major accessibility implications, things like that. Maybe test driven development is a better choice than if you're just building a smaller application. Like I think the use cases definitely For sure, you're starting 

**Ali**  23:01  
ast. I also think that mission critical applications may be something for the medical field or for NASA, or something along those lines, those fields having really, really, really, really solid tests and doing test driven development might be more important than even something that's front end foc

**Kelly**  23:21  
sed. That's what that's the point I was gonna make. Like, I wonder if test driven development is more popular with back end development than front end? Or if it's really, you know, you can even get it is it? 

**Ali**  23:33  
kay, I teach it on the front end, do I teach them both test driven development and how to write tests after the fact. So I think it is the thing on the front end, but I think it's much more heavy thing on the back end. Cool. Let's also talk about the tools that we can use for testing. So we did a whole episode on performance. And we talked a lot about lighthouse testing, which you use for performance testing. If you're interested in that, there's a whole episode about it which you can link in the show notes, but it's an amazing tool. It's one of my favo

**Emma**  24:03  
ites lighthouse also test accessibility, although I will say, I think accessibility tooling is only good up to a certain threshold. And then it still requires a lot of knowledge and or manual testing. So just be aware that like, if you run a lighthouse test, I haven't used x, but if you run a lighthouse test, they can be decently inconsistent for accessibility and not cover everyt

**Ali**  24:23  
ing. Yeah, I think that's true with anyt

**Kelly**  24:25  
ing. Yeah. I mean, lighthouse is I think it's a great overview. But I think using the specific tools that are built for that particular testing, like accessibility testing, I think is when you're going to have a lot more, a lot more consistent results from t

**Ali**  24:39  
ose. Yeah, in but in testing, in general, doing manual tests of all of these things is still important as well, making sure that it actually does work the way that it's supposed to. So, I wanted to also talk about accessibility testing, which you already hit on back end testing frameworks, there are so many of these are going to be very language specific. So spec is a huge one for the Ruby in the rails community. And then there's Django test client, which is built into Django for Python. Python has other frameworks, there's so many different ones for back end, that's a whole huge ecosystem in and of itself, but we're more front end focused on the show. And so I think the biggest ones are just enzyme react testing library, and enzyme and react testing library would be alternatives to one another. So just is what's called your test runner. So that's the thing that actually has your test suite is up and running it retest things when you change your code. It has your assertion statements and your blocks and all that. And then you use enzyme or react testing library to interface with your react code. So it makes it so that you can interact with your react code a lot easier. For example, enzyme, it gives you a jQuery like API for interacting With react elements, which is pretty safe, jQuery made things so nice back in the day, enzyme makes testing pretty nice as 

**Emma**  26:09  
ell. I love Justin enzyme. I find them super intuitive. I think my only heart The only difficult thing that I found was first of all, Redux was hard for me to learn now that I know it, I love it. But at the time, it was really difficult. And then understanding how stores work like mocks. How do you mock your Redux store that was pretty confusing, but in general, just an enzyme together are really quite intui

**Ali**  26:31  
ive. Yeah. And then react testing library is now the one that the React team endorses. I believe it's built into create react app now, instead of enzyme. And I've heard just amazing things about it again, Kent C. Dodds is involved with it. And so I'm really interested in trying that one but I think what I was starting to do testing enzyme was a lot bigger. So I started with enzyme but I'm really interested in looking into react testing lib

**Emma**  26:59  
ary. Yeah, definitely. I think also one other tool. I don't know if you've mentioned this, but Cyprus, I think we, I had a Karlsruhe jazz talk on them. A few months back, someone gave a talk about Cyprus and how you can essentially playback errors that your customers are having, and walk through it. And it was super, super cool. I haven't used it because I think it's a paid service. But in all honesty, if you're building a production app, it's, I highly recommend checkin

**Kelly**  27:27  
 it. It's one of those things that's worth paying for. Yeah, we've really enjoyed using Cypress Yeah, for writing our tests for the Shopify th

**Ali**  27:34  
ngs. Cool. Let's wrap up this episode by talking about new developers. And so I personally think that testing is something that you're almost guaranteed to see at work. And so if you're self teaching, or if you're a bootcamp grad and you didn't learn about testing at boot camp, it would be something that I would personally recommend learning and as somebody who has done hiring in the past Just having testing on your portfolio projects really shows your attention to detail and your willingness to go above and beyond on them. So it's something that I think really, really shines. If you have that on your portfolio somewhere. It's not mandatory. Nothing in this show that we talked about is by any means, but I think it is a great thing to learn. And it's a great thing to have on your pro

**Emma**  28:27  
ect. Definitely. And I think if you're doing a take home project for technical interview, testing is a really great thing to add. If you have the time, right, a lot of us don't have time to spend absorbing them as Hova absorbent amount. I can't say that word. Lots. Many of us don't have a lot of time to spend on coding projects because we have families or other commitments or 95 job. But if you can add in testing to your project, even just a couple of unit tests, definitely shows like Allah said, your attention to de

**Ali**  28:57  
ail. Yes, that's a huge one. It's such a good Such a good observa

**Emma**  29:02  
ion. You can also um, I'm not sure if there are any testing courses on like Coursera or LinkedIn. But both of those platforms offer certificates you can put on your LinkedIn profile to show that you've completed them. And so if there are, I would recommend taking one and having that badge on your profile. Awe

**Ali**  29:19  
ome. I will link some awesome courses on testing as well. Let's do our shout outs. And you want to go first? No, because I don't know 

**Emma**  29:29  
ine. Yeah, I got to think abou

**Kelly**  29:32  
 it. Okay, Kelly, Do you have one? Oh, I do have one. So we bought this vinyl art like this vinyl mural that is basically like wallpaper, but it's super cute. It's from society. Six. We have a large wall downstairs. We're like, what should we do with this and instead of paying thousands of dollars for a massive painting, we decided to spend $200 on a wall mural and putting up wallpaper was really Challenging I know know this especially when you have to follow like specific lines for making everything line up. But it looks super cute and I can't wait to show a picture of it once that's done. That's awesome. So

**Ali**  30:10  
iety six is my favorite. They've got such amazing things for 

**Kelly**  30:14  
eal. There's such good art on their alley. What's y

**Ali**  30:17  
urs? Yeah, I also got sticky wallpaper from Target and I love Ooh. So if you're looking for a super budget option tar

**Kelly**  30:25  
et I think I've seen people use that sticky wallpaper for decorating like shelves and stuff

**Ali**  30:30  
too. Yeah, so I have it on my wall in my bedroom and it is so cute. Okay, I can do mine If Emma you're still thinking about your Oh, 

**Emma**  30:40  
kay. Yeah, well, no, I have my my brain my um, my shout out is going to be to Microsoft diversity day in Germany. I'm speaking on it tomorrow morning, about how to build high performing teams across cultures which again, a lot of sentence sentiments are coming kind of from or inspired from The culture map by Aaron Meyer, which is a great book. But yeah, I'm speaking at Microsoft Germany's diversity day tomorrow morning. I'm very exc

**Kelly**  31:06  
ted. That's super fun. Yeah. That's fine. How about you 

**Ali**  31:12  
lley biters, so random so friggin random. Um, at the time of recording, I am still living in Manhattan. So quarantine probably will be for a while there are rumors that work is not going to be until the fall like it's like a little bit wild here. So my shout out is to Stardew Valley, which is this game that I just started playing I am way behind on the bandwagon and never actually play games at all. But it is so much fun. You have this little village and you get to go fishing and farming and mining and it's incredible and so low pressure. It's not like you win or anything like that. You just get achievement. So reall

**Kelly**  31:54  
 big fan. I downloaded it like a month or so ago when I got my iPhone. I'm like what game should I download? somebody suggested Stardew Valley. I just realized I never actually opened it up

**Ali**  32:04  
 So, okay, if you can get the Steam version of it for your computer, I feel like that's gonna be a lot better than the mobile one. 

**Kelly**  32:10  
kay, 

**Ali**  32:12  
ool. That's my two cents. Okay. Or if you have some sort of gaming system, I don't, I'm not on the Animal Crossing bandwagon because I don't want to buy a switch because I know that I like will not use it once quaranti

**Kelly**  32:24  
e is exactly in the same boat. 

**Ali**  32:26  
eah, yeah. Okay. But it's a really great alternative to that. And it's really well thought out. It's also built by one developer, which is mind blowing to me. So it's one guy that built this whole entire thing. He did all the art himself. It took him four years and he like taught himself how to do everything for it. It's like the coolest thing ever. Anyw

**Unknown Speaker**  32:45  
y, I wonder if he wrote tests fo

**Ali**  32:49  
 it. I wonder I bet it's in C sharp though. So different world. Okay. If you liked this episode, tweet about it. We'll pick one Twitter to win a subscription to egghead IO. We've also started a book club. This month's book is make it stick which is one of my favorites all about how people learn. If you're interested in learning more head over to Ladybug Dev slash books. We post new episodes every single Monday so make sure to subscribe to be notified and leave us a r

