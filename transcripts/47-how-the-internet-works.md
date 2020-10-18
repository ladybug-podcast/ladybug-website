**Ali**  0:00  
There's a classic interview question what happens when you type a URL into the browser? And to answer this question, we need to explore how the internet works. In this episode, our first is season four, we'll dive into URLs, DNS basic networking and how the browser works.

**Kelly**  0:21  
Welcome to the ladybug podcast. I'm Kelly.

**Emma**  0:24  
I'm Allie. And I'm Emma. And we're debugging the tech industry. Hey, Kelly, have you heard about this cool tool called AWS amplify? Tell me about it. It's a suite of tools and services that enables developers to build full stack serverless and cloud based web and mobile apps. You get to use whichever framework or technology you want on the front end.

**Kelly**  0:43  
That sounds cool will help me get up and running with things like hosting. Yeah, authentication. You betcha. Manage graph QL. Totally. How about serverless functions API is machine learning chatbots file storage. Yes to

**Emma**  0:56  
everything amplifies, especially in a ways and it will traditionally And developers like yourself Kelly to be successful because you can use your existing skill set to build real world full stack apps than in the past would require deep knowledge around backend DevOps and scalable infrastructure. The amplify console also allows you to use a GitHub repository to deploy to a globally available CDN with ci NCD built in.

**Kelly**  1:20  
It's super cool. Where can I learn more if you want to learn more about

**Emma**  1:23  
AWS amplify, visit AWS amplify.github.io

**Ali**  1:29  
Vonage is a cloud communications platform that allows developers to integrate voice video and messaging into their applications using their communication API's. Whether you're wanting to build video calls into your app, create a Facebook bot or build applications on top of programmable phone numbers. You'll have all the tools you need, formerly known as nexmo. Vonage has you covered for all epi communications projects. Sign up for an account at nexmo dot dev slash Ladybug and use promo code LD bg 10 four euros are free credit. Again that's nexmo dot dev slash Ladybug and use code LD bg 10 for 10 euros of free credit.

**Kelly**  2:08  
Hi Friends a

**Emma**  2:09  
long time to talk. Welcome back to season four. Yeah got new content and some new countries and states.

**Ali**  2:17  
Yeah in new Yeah.

**Emma**  2:20  
No yeah we have lots of new things. Yeah, life has changed

**Kelly**  2:23  
Allah you go first what is your? What all has changed with you? Yeah,

**Ali**  2:27  
well due to the Coronavirus I now live in Chicago with my boyfriend. So that's a big difference between I feel like it's lol season three, I just moved to New York. So definitely unexpected. But I also moved to working for AWS at Amazon Web Services. And I'm working on the amplifi team as a senior developer advocate, which is really exciting. So I'm learning a ton. I'm still in the first couple weeks of that.

**Emma**  2:55  
That's awesome. Is Blair enjoying her New York City penthouse alone then?

**Ali**  2:59  
No, she Here.

Unknown Speaker  3:01  
Oh, that's good. Yeah.

Unknown Speaker  3:02  
Yeah. I'm glad.

**Emma**  3:06  
Blair Waldorf in New York City. Yeah. fits the story. Emma, what about you? What's your life story? So I moved to Stockholm from Germany. So that's been interesting. I've been here almost two months, I think, yeah, almost two months. I joined Spotify as a software engineer. So I get to anytime you're interacting with like, the Web Player via the desktop, or the mobile web player, I build that it's been really fun. I've been working on some accessibility and you UX things. Don't send me your bugs. I seriously have gotten emails from people with bug reports. And also like people will quote tweet and DM me I'm like, I just because you sent this to me. I'm not gonna fix it. Like

**Ali**  3:49  
oh, my goodness, That's so annoying. You

**Emma**  3:50  
Kelly, What's up with you?

**Kelly**  3:52  
Uh, you know, everything has changed. I now live in Atlanta, I now run a company called the taproom. Literally nothing I am the same person I was six months ago. I just am still inside my house. Living the dream.

**Emma**  4:08  
I guess I feel like we need to do a road show once life has come down and people can safely travel again. I think we should take the show on the road. I agree.

**Kelly**  4:19  
I think it'd be super fun. Agreed. All right. So let's kick off this first episode of this season. We're talking about how the internet works. So let's start here. How much do each of us know about the internet?

**Emma**  4:35  
There were crickets in the background in case you didn't hear that? I don't know. No one answered, because it's a hard topic. It's not something that we learn necessarily. I never learned this in school. Any new listeners like I went to school for computer science and that's not something that taught me in like computer science school. So I never learned about it and the only way I like studied some simple of how the internet works was for technical interviews. So if you were to ask me like what happens when you type an address into the Google search bar and hit enter, which is a very common interview question, I can give you like a preschoolers answer.

**Kelly**  5:17  
I think my answer would be it hopefully loads the page if it exists, and it's good to load. So I don't know anything about this. I just let the magic happen and hit refresh. Yeah,

**Ali**  5:27  
I think before researching this episode, I could have said could explain the request response cycle to you and what happens in each phase of that, but not necessarily all the DNS stuff or anything like that. So I did a lot of research for this episode. Now, I'm excited to know a little bit more about how that works.

**Emma**  5:45  
Let's just before we get into this, there's gonna be a shitload of acronyms in this episode. Is that the right word acronym?

**Kelly**  5:53  
Yes, I got it.

**Emma**  5:55  
I'm still living in Europe. So I've been losing my English Although everyone in Sweden speaks English. Yeah, I can never remember if it's abbreviation or acronym. But in any case, lots of acronyms that we will define for you in this episode,

**Ali**  6:07  
or Sure.

**Kelly**  6:08  
All right, Allie, teach us everything. Oh my goodness, that's

**Ali**  6:11  
a lot to ask. Okay, well, I think the first thing that we should talk about our first web servers are because they kind of control a lot of this and it sounds fancy, but pretty much they're just powerful computers and they aren't able to host websites.

**Emma**  6:30  
They're like big metal boxes. I think of a big metal refrigerator with like pizza boxes inside of it. Because I think that's where all like the things that inside Okay, I'm doing a terrible job. But let me there pizza inside the pizza box, I wish but unfortunately, it's just like wires and stuff, which is kind of boring. worse. Um, no, I my first job straight out of college was working in an IBM storage. I worked on spectrum control and given that I was working on enterprise storage systems. I had to With servers and fabrics and clusters, and all these like terms floating around, and I had no idea what any of them are. And to be honest, I still don't know what any of them are. And I was there for two years. But I do remember going into the server room and there were just like, there were just like rows and rows of basically, if you watch any kind of a movie, where there's a hacking scene, and they walk into this big room full of big metal boxes, that's essentially like, what servers look like, right? Like those are servers, right? I'm not an idiot.

**Ali**  7:26  
Oh, yeah, yeah, for sure. That being said, it's really just a computer. So if you have like an old laptop laying around, you could turn that into a server if you really wanted to, or you can do like a Raspberry Pi. I know some people who have Raspberry Pi's set up to serve their portfolios or whatever. But for the most part, you're gonna have these massive computers that are in boxes and a lot of companies don't even do their own. They use a service like AWS to control their servers.

**Kelly**  7:56  
You're so good at your job.

**Emma**  8:00  
I also want to just voice my disdain for the fact that many terms and programming and computer science are food. And it makes me really hungry all the time. So I'm not a fan. Can we like abolish raspberry pie and cookies, please, because

**Ali**  8:14  
I didn't even think of that. Because it's like pie. But yeah, that makes sense. I had never made that

**Emma**  8:21  
comment right now.

**Ali**  8:22  
Yeah, it is a food term, but I didn't realize that.

**Emma**  8:26  
Well, there raspberries like a fruit. But yeah,

**Ali**  8:29  
but the poi?

**Emma**  8:32  
Yeah. Nice. Cool. So yeah, um, it took me a really long time to conceptualize what a server was. And I honestly for so long felt so uncomfortable with the fact that I didn't understand hardware. I didn't understand how the internet works or anything like that. I didn't understand how the front end connected to the back end, none of it. I didn't know what a REST API was until I was like two years into like my career like, okay, I knew what it was. I was aware of it but like I didn't fully understand it. And so if you're listening and you Don't understand any of this stuff too. Like I feel you, for sure

**Kelly**  9:03  
you're in good company.

**Emma**  9:04  
So let's talk about this infamous interview question that I have gotten multiple times during technical interviews. And let's let's, let's like mock an interview right now. So I'm gonna ask Allie because Allie research this episode. So Allie, when you type a URL into the URL bar, and you press enter, what happens?

**Ali**  9:22  
Well, first, you end up making a request to that server. And again, that servers that fancy computer that we can use to host websites. And then that server is going to give you a response back. And this is known collectively as the request response cycle. In websites are really just combinations of text files, they render HTML, with some styling with just CSS and some interactivity. But that's really all that goes on in that request response cycle. And you'll hear about that a lot when you're learning about API's for the first time or making an AJAX call because that's what you're doing is you're making a request, but this time instead of typing the URL into the URL bar, You're doing it explicitly within your code. So that's at a high level What's going on? But we're gonna dive deeper into this throughout this episode.

**Kelly**  10:09  
What does URL stand for?

**Ali**  10:12  
Yeah, so a URL stands for Uniform Resource Locator. And you've seen these all the time. Even if you're non technical have you to take like facebook.com or twitter.com into your bar and Chrome, then that's a URL. And it's like an address for a website. And usually these have a are pretty much always have a domain name attached to them, which is a nickname something that will make sense to an average user something like Facebook or Twitter. But it's really masking an IP address. And an IP address is a bunch of numbers that is used to identify that server and the domain name is easier to type and much prettier than the IP address.

**Kelly**  10:59  
Can you imagine If we all use the web, just typing in IP addresses to get everywhere would be wild.

**Emma**  11:04  
I mean, it's just like phone numbers, right? Like when I was younger, and I had the awesome phones that I kind of miss, like I had so many people's numbers memorized. I think it's all about chunking, right? Because what what's the format for an IP address? It's 3.2 point 3.1 characters ish. Like it's one. Oh, yeah. And can we also talk about sub domains for a second? Because is that what they're called sub domains like the.com dot dev? Like, I don't

**Kelly**  11:31  
know, those are those are tlds top level domains.

**Emma**  11:35  
I always think of it is like too long, didn't read.

**Ali**  11:39  
Very close, the sub

**Kelly**  11:40  
domain goes on front of it. So instead of using www dot, you'd say like, my cool website.kelly.com it's a really bad example. So

**Emma**  11:49  
for like shopping,

**Kelly**  11:50  
a lot of a lot of like, on the on the commerce side of things. You might have a blog on let's say WordPress, your website is called my website.com and you want to open up a store to alongside of it, that's not on WordPress. Let's say it's on Shopify. So you put the store on a subdomain, which would be like shop.my site.com.

**Emma**  12:08  
Interesting. We have these things called IP addresses, we have these things called domain names. But what is this acronym known as DNS,

**Ali**  12:18  
though DNS lookup is the process that your browser has to go through in order to match up that IP address all those numbers and such up to the domain name, which is the human formatted one that we can remember, remember pretty easily. So the DNS process looks something like this. First, it checks your browser cache to see if the DNS record is cached for a while. And if you've been to the site before, it might be if it's not in that local cache on your browser, it'll also check your operating system and your router cache to see if it's there. If it's not in there, then the query is sent to the internet service provider, which you'll often hear as ISP instead of internet service provider. And it's going to run the query in the ISP cache. And if it doesn't find it there, then it's going to look at the DNS servers. And so the first thing it's going to look at is the root server, which has all of those tlds. So those top level domain servers, so these are like the.com dotnet.gov. My personal site is dot tel. And each of those tlds have different rules associated with them. And each one has its own server. And so that top level root server is going to say, okay, you have a.com domain, we're going to look@the.com server to try to find that domain name, so Facebook or Twitter or whatever your site's name So it's going to look on that next server, the TLD server for that domain, which then will map your IP address to that full domain name. And you'll be able to hit the actual website. that make any sense.

**Emma**  14:14  
Yeah, and I think one episode I want us to link to in the shownotes is our system design episode, which was the last episode in season three, because by separating out the dot coms the devs to different servers, it's essentially partitioning them so that hopefully we're not going to get like misses and whatnot. So if you are interested in learning more about like, systems architecture, definitely go check out our systems design interview, it'll teach you a little bit more about how servers and load balancers and all these kinds of things are partitioned which does actually have to do a lot with the internet and how that works.

**Kelly**  14:55  
I think the conversation around tlds is kind of interesting. If you You know that you have like the typical.com dot nets and of the world, but you also have countries specific tlds as well. But I hear based in the US can't go buy a domain that has the TLD of.com.au. Because you have to have like a physical location in that country to be able to purchase that domain. And it varies from country to country. But like I have clients who sell to Australia, and they can't have the.com.au domain, they have to use a subdomain for it, because they don't have a physical location there. So they can't purchase the domain. Oh, it's kind of interesting. That interesting minus tell from my portfolio site. It's for like telecom companies. And they do allow everybody to use them now, but there are some fancy rules with it. And this was a big thing when I worked for dev two as well as they had like the.to domain and there were some situation with that, the more difficult you were

**Emma**  15:58  
just talking about, like I've done Tell him sitting here like why, like, why would you select that?

**Kelly**  16:04  
person? I thought the same thing I was like, that's a really weird one to call out on our notes. But you know you you have

**Ali**  16:09  
Yeah, because it's alley spit, tell. So it's my full name.

**Kelly**  16:13  
I think a few. I can't get Kelly vaughn.com. So I'm just saw my Twitter handle.

**Emma**  16:19  
That's all like shame ourselves. And let's quickly mention the one single domain that we've purchased that we're most embarrassed proud of, because mine is it's time for dot wine. Like I haven't, I haven't built anything on it. But the one that I have built on was random cat generator at comment was basically like you just go and click a button and it gives you a new picture of a cat.

Unknown Speaker  16:41  
That's a good one.

**Ali**  16:42  
I own Echo Echo Dot Dev, which is for a potential side project with one of my friends. And I think that's kind of a cute one. It was a more expensive one too. So gotta use it. Okay.

**Kelly**  16:55  
I have a different kind of embarrassing story. Um, when I was younger, let's say I was like 13 years old. My uncle calls me and he says, Do you I'm gonna buy you a domain sees he's been developing websites for a very long time. And I'm like, sure. And he got me Kelly calm was available. And I didn't know how domains work at the time and I didn't use it. And he didn't review it. And then I lost Kelly calm as a domain like, would it be to have that I would have been a mean,

**Emma**  17:32  
like your single biggest life mistake.

**Kelly**  17:35  
I know. I I think ay. Hopefully that means I can't do anything worse.

**Ali**  17:40  
Yeah. So I feel like a millionaire now. Right? Because there was an era where domain names were like the hot commodity and I guess to some extent, they still are. There are some that go for a lot of money. Now, but

**Kelly**  17:54  
yeah, the people who are the worst are the ones who squat under domain names and then never let you buy it. They only let you rent a domain. So bad, um, I couldn't get taproom calm, I could only get the taproom calm because taproom calm is only available to rent for like $1,000 a month is.

**Ali**  18:14  
Another interesting thing to mention too is that they're still releasing new tlds like Dev came out a year or two ago, there

**Emma**  18:22  
are so many like, I didn't realize if you go to namecheap.com, which is where I buy all of my No, you there are an absurd amount of different What did you call them? tlds. And you can filter by genre. So they have like food ones they have. Literature ones is like kind of insane.

**Kelly**  18:43  
I remember like the fiasco that happened when dot dev became a CLD because everyone had mapped dot dev to be their local development. Instead of using just localhost they you can type in like my site dot Dev. And so if you had that map for local development, you couldn't access any dotnet website Oh my goodness. That's funny. Anyway, tangents

**Ali**  19:04  
isn't fun tangent, though, and on topic to some extent. So that's a little bit about how this DNS lookup works where it looks in a bunch of catches. If it doesn't find the cache, then it traverses this tree of servers to find your actual IP address, and then sends the request to your correct IP address for your server. And it's really convenient to have this nice donate me name, because you can change your server address in the future. And it'll still work. So instead of them having to memorize new IP address, because you got a new server, it will still work. So you made that request. And now you're mapped to that IP address. And that request had more than just the domain name associated with it. It also has the method. So you may have heard of get post, put, delete, and those are requests. methods. So those are HTTP methods. And those specify what type of operation you're trying to do with data, whether you're trying to read that data, you're trying to create new data, edit it or get rid of it. There's also the path. So instead of just facebook.com, it could be facebook.com, slash a profile name, or twitter.com, slash your profile name. There's also potentially headers with authentication data, that type of data that you want to get back, whether that's JSON or XML or HTML or text. There's a lot that comes with that request.

**Kelly**  20:37  
Can I go back on our tangent for just one second? Because I just looked up the Whois information for Kelly calm, and I feel like my entire life has been a lie. Because this domain was, it looks like it was registered in 1993. Which means I don't think I ever actually had Kelly con uncle I had an uncle. I think I think that's still the case but the domain, I am now very confused because I definitely did not ask for a domain name when I was three years old. I mean, maybe I did. But anyway, I just needed to get that out there just in case anyone decided to look it up like Eli. I'm also learning My life is a lie today, too. So Oh, no. Anyway, Emma, your question? Mine was a little bit more relevant. I'm not sure throw too much.

**Emma**  21:28  
Okay, no, um, one question that I've gotten in interviews too, is the difference between put and POST requests, like in the headers. So do either of you know the difference?

**Kelly**  21:38  
I've always imagined posts to be creating and put to be updating.

**Ali**  21:44  
Yeah, is it what I thought? Maybe the difference between put and patch? That's another one.

Unknown Speaker  21:51  
I've never know what patches

**Ali**  21:52  
Okay, so, point is for overwriting data. So if you want to replace the whole entire information about something and patches for Only updating one or two fields?

**Emma**  22:02  
Can you tell as a teacher?

**Kelly**  22:05  
No random things? That was a good question, though. I mean, do you know the answer? Was that correct? Or

**Emma**  22:11  
I was looking it up, and there's something about item potent and whatnot, um, put versus post. Let's Google it, we can learn together ready? w three schools coming in for the win here. So, post is used to send data to a server to create an update or resource. POST requests are never cached. They don't remain in the browser history, which I'm pretty sure that's exactly what cached means, right? I guess that could refer to this server two, but like, all right, W three schools can't be bookmarked. They have no restrictions on data link. Put is used to send data to a server to create an update or resource. Wait, that's exactly the same definition. Okay. All I've learned from this is don't use w three schools.

**Kelly**  22:53  
There is it I reached Stack Overflow at this point, but I don't think this is going to help either.

**Emma**  23:01  
Well, are you going to tell us I see, but

**Kelly**  23:03  
Okay, so with this says post is used to create, put is used to create or replace?

**Ali**  23:10  
Yeah, I thought, I've always thought that put is for replacing data that's already in there.

**Kelly**  23:16  
Both can be used for creating, you have to ask What are you performing the action to, to distinguish what you should be using. And then it has a really long description that I'm not going to read out here. But I just use Stack Overflow to answer the question. So,

**Ali**  23:32  
look, I'm a developer. There you go. Should we also talk about HTTP and HTTPS and all that?

**Emma**  23:40  
No, I don't think it's that relevant.

**Ali**  23:43  
Okay. Then we can pass.

**Kelly**  23:46  
I was going to make an insecurity joke about it. I decided

**Ali**  23:50  
for the listeners. HTTP HTTPS. There's also alternatives like FTP. It's the protocol to use and then protocol is the set of rules that your browsers used to make that request and the s on there for HTTP is secure or safe. Is it secure? Yes. Okay. Okay, good. I second

**Emma**  24:10  
guess my I don't know why they even offer non secure anymore like honestly, why is that even it's so

**Kelly**  24:15  
easy to get a certificate. But but I think it's like it's so some some things we'll handle it for you. I think Squarespace handles it for you shop for hands that for you like a lot of web builders Software as a Service kind of platforms do it for you. But if you're still self hosting, you have to get your own. But I mean, I'm blanking on the name of the certificate. It's free.

**Ali**  24:38  
Doesn't chrome not allow you to do real HTTP anymore? Or, or it like gives you this warning? Like it's insecure.

**Kelly**  24:45  
It gives you Yeah, and you have to click through Yeah,

**Emma**  24:48  
but there's also SSH, which I feel like I've used and like still don't fully understand it. It's. So basically SSH is a secure shell which is really hard for me to say Right now Secure Shell say, though really fast. It's a cryptographic network protocol for operating network services securely over an unsecured network. So maybe this is where, I don't know. I'm just shooting in the dark. But I don't know, maybe this is like if you don't have a secure network like no HTTPS connection. I don't know. They're so different. Oh, my God, I have no idea what I'm talking about.

**Kelly**  25:22  
I can't wait for all the replies we're going to get about SSH.

**Ali**  25:25  
Yeah, usually you use SSH, at least in my experience to connect to a remote server. So you can

**Emma**  25:32  
Yeah, so that's what the hackers use in all the movies. Like I got SSH into the

**Kelly**  25:36  
server. I remember early on in my development days where I had to use FTP for everything for changing and uploading files to my website throwback, I can you can explain what it is. It's like File Transfer Protocol. Yeah, there's also SFTP for the secure version of it as well.

**Emma**  25:54  
And I just remember being in college and like, I had like file Zilla or was like there was a yellow Duck one two hyperdoc site is cute. And like you would literally just drag your files to like your server. And that's how I got all of my websites up and running. But now like we have things like static site generators and things like that, which I use more often, but yeah, that used to be the good old days. It's still probably the reality for people. But

**Ali**  26:19  
yeah, well, it's I don't think we ever said what HTTP stands for either. So it's hypertext transfer protocol. Right. So I thought we should just say that because we're saying all the other ones and I realized I had not said that. So

**Kelly**  26:35  
you were okay. You said What does HTTP stand for? And I was like, ah, we could do this.

**Emma**  26:43  
Oh, my gosh. Okay. Well, speaking of really complex acronyms, acronyms, yeah, I'm gonna do this every time. Let's talk about TCP IP because this is a very important one. Also. Okay. This is a very small tangent, but it's very important because moving to Sweden, what I have noticed is that they do Don't spell out their acronyms. they pronounce them. And so like I was ordering Uber Eats one night and there's this grocery store chain that is three letters. It's I see a, I assume it's like the international grocery Association, kind of a thing, grocery. And I was talking to this Uber driver, and I'm like, yeah, I'm outside the ICA. And he rolls up. And he's like, Where are you from? And I was like, New York. And he was like, we don't say that here. We say iica. And I noticed this again, when I was at the bar, and people were ordering IPAs or India Pale Ale, and they would say, Eva, I need an iba. So I'm just like, imagine if we to pronounce all of these acronyms like to Kip up.

**Kelly**  27:44  
I print my personal favorite one though, is

**Emma**  27:48  
we're gonna say to all of the reply guys in the comments to the girls don't hang up okay, TCP IP. So this is stands for the Transmission Control Protocol slide. Internet Protocol. And it specifies how data is exchanged over the internet by providing end to end communications that identify how it should be broken into packets addressed, transmitted, routed and received. And that's a mouthful, but I've watched this video once. Maybe we can link it in the show notes if we can find it. And it talks about TCP IP, you can think of that as your ups driver, if you live in the US or they have ups in Europe, where you order, let's say one big order from IKEA. You know, because I live in Sweden. And it comes in like a bunch of different, let's say, four different shipments will TCP IP is like the delivery driver. And really, they make sure that all of your packages will get to your house, even though they're not set at the same time. And that's, yeah, that's the responsibility. And that's how I've always thought of TCP IP.

**Ali**  28:46  
And so I think that links into the response. So we talked a little bit about the request, and the request has a bunch of information associated with it in addition to the address, but then the server needs to process that request. And usually you'll have a back end written out that has a controller or functions that receive certain data. And then it decides what data to send back to the browser or the client. And so we send back a response. And that response has first is satisfied with the status code. So you may have seen like 400 404 500, I'm a t 300 t bot. And then it also has data. So if it's a 200, that means it's a good request, you are getting a response back. It's like a 400. That means usually user error. So 404 means that you went to a page that doesn't exist, for example, 500 means that they're just server error. So the programmer usually did something wrong.

**Emma**  29:50  
That never happens, though. never happens.

**Ali**  29:53  
Who does that? 300 zero redirects, I believe?

**Kelly**  29:56  
Yep. 301 as permanent 302 Temporary,

**Ali**  30:01  
there you go. And so has that status line, the status code and then the data. And usually there's HTML and other resources, text files, and the browser will have to parse and render that HTML content. Let's give it in the response. And I think that that links into the packets. That's what sent

**Emma**  30:26  
noise noise. Yeah, it seems like there's a lot that this browser has to do. It's kind of a big deal.

**Ali**  30:31  
Oh, my goodness, the browser has to do so much. I feel like we way undervalue the browser. At least that's my personal opinion.

**Kelly**  30:40  
I don't know why. Brave Sorry, I wasn't seeing all the reply, guys.

**Emma**  30:45  
I just want them to implement colors the same way I'm so peeved, every time I I haven't used the word peeved in years. I'm so peeved every time I like pull up a side by side of Firefox and Chrome and they have different colors like visually bothers me. Well You didn't know that like differences. Yeah, it's so annoying.

**Kelly**  31:05  
ever so slight differences. Yeah. It's very annoying. Yeah. But speaking of web browsers, finally no longer supporting iE 11

**Ali**  31:15  
exciting like the world are you?

**Kelly**  31:17  
Microsoft? Okay, I got one. Yeah, they they have officially No, they officially have like an end of life date for supporting iE 11

**Emma**  31:27  
and see what it says. It's a little sad.

**Kelly**  31:30  
Seriously, like, I mean, like, what the end of an era. That's the most frustrating bane of every developer's existence.

**Emma**  31:36  
I mean, I never supported it anyway. It's been dead to me for years.

**Kelly**  31:43  
It's very frustrating as a JavaScript developer, if you have to still support iE 11 because it does not like ESX so you have to only use the ES five if you're going

**Emma**  31:53  
sorry, that came out five years ago. Get your shit together. Yeah, yeah. So,

**Kelly**  32:01  
um, yeah, it is. teams, the teams web app, stop supporting iE 11, November 30. all remaining Microsoft 365 apps and services will no longer support iE 11. Beginning August 17 2021.

Unknown Speaker  32:15  
Oh, it's still your way though.

**Kelly**  32:17  
I don't care. We have a deadline. And there's a date. So I can be like, hey, clients, no, we're not supporting I 11 because Microsoft doesn't support it.

**Emma**  32:25  
I'm sorry, who? I guess. Okay, that was kind of naive of me to say who still uses it? Because I guess there are definitely people who can't upgrade hardware software in particular. Yeah,

**Kelly**  32:37  
yeah. For sure. But I mean, we're seeing like, I mean, a very, it definitely varies from client to client. We have gotten some screenshots from clients that look like they're still using like I nine, which is a whole thing, but I mean, we see usage like less than 2% of traffic less than 1% usually on iE 11. So I don't know wasting too much time

**Ali**  33:02  
at the wild.

**Emma**  33:03  
Um, so one thing we like didn't talk about, and I'm totally going like off the rails here, but I think this is important

**Kelly**  33:11  
Docker it.

**Emma**  33:13  
So yeah, we didn't really talk much about how the internet was created, how it got so popular what it was originally intended for. And Kelly had mentioned this kind of in a sidebar that it was originally intended for military purposes, which totally makes a lot of sense. But I do think it's important to note that, if I'm not mistaken, it was actually the porn industry that got the internet off the ground, essentially like it that really streamlined the usage of the internet and the development of the internet. I know that honey pie Oh, who does all of these amazing documentaries. They were just here with me actually a few days ago and my filmmaker Guillermo was talking about how they're working on a video. Project discussing this history of the internet as it relates to the porn industry. And it's very interesting. And I just think that's really fascinating how one taboo industry can isn't like it's solely responsible for the internet really taking off and we don't talk about that. It sounds like we're taught, obviously, I went to like a Catholic college. So I don't think they would have taught that. But I do think that's an important thing to mention.

**Kelly**  34:31  
I think it's also important to mention that it wouldn't you know, people talk about Tim berners Lee inventing the internet, he did not invent the internet. He invented the World Wide Web, which is it utilizes the internet but the the engineering of the actual internet itself was it predates Tim berners Lee. So all these things that we've discussed. How important is it to know any of this for a job interview?

**Emma**  34:58  
I just want to say I don't think I'm Important walk in it into an interview knowing that like, the porn industry got the internet up and running. But I would say like I have been asked multiple times explained to me how the internet works or what happens when you type an address into a bar and press Enter. And I've been asked directly, what is TCP IP? What does that do? What is a dumb, like a top level domain and things like that? I would highly recommend knowing the basics. And I think anything that we addressed in this episode, I think it's important to at a high level understand,

**Ali**  35:28  
yeah, I think the requesters bond cycle and knowing a high level is probably the most important thing of just being like, Yeah, when you type it in, it makes the request, and then your server processes that request and sends back a response.

**Kelly**  35:42  
I'll be honest, though, I've never asked this in an interview.

**Ali**  35:47  
So I've never been asked to do either, but you Google it and it feels like there's even a blog post about this interview question. So

**Emma**  35:56  
I've been asked it multiple times. So yeah, I would just I would say you should definitely be aware of this if you're applying for a full stack web front end dev role, or like any tech coding role.

**Kelly**  36:09  
Okay, so we talked a lot about how the internet works. If you're new here, we like to end each of our episodes, but shout out for something that we liked in the past week, or just something in general, we want to shout out. So Emma, you go first, what's your shout out this week?

**Emma**  36:28  
So my shout out this week is to all of my amazing co workers that I've met in the past two months of Spotify. Everyone's been super, super welcoming, very helpful. It's really nice that we have this like, open call policy where if it's during the workday, and you need help, especially being remote an onboarding remotely, if you need help, you can just at any time, like start, like a slack call with someone and they'll pair program with you. So I just wanted to just shout out my new co workers. What about you, Allie? I'm gonna just jump on that bandwagon and see the same it's Really great to move on to AWS and my amplifi team on there. I've had a lot of fun so far, and I'm just starting, but it's been amazing. So just gonna copy you. Okay, Kelly, how are your new coworkers?

**Kelly**  37:17  
Oh, my new coworkers are great. So kind of funny. I am speaking at a conference pretty soon here. And when they listed the announcement that I'm one of the speakers, they put me down as co founder of the chat room. I'm like, Oh, cool. I'm getting a co founder and it was it.

**Emma**  37:37  
A little offensive?

**Kelly**  37:38  
Yeah. I was I'm sure it was just done an error. So no, no harm. But no, I mean, my team has been growing pretty quickly. And I'm really excited. And we've been bringing out a lot of really great people and our most recent hires, just any of our hires really have been phenomenal in balancing like our workload, and

**Emma**  37:58  
only the new hires that Fantastic. So

**Kelly**  38:01  
I wanted to clarify I love all of it.

**Ali**  38:06  
Awesome. So, if you liked this episode, please tweet about it with love to read your feedback, and we'll be giving away three copies of Julia Evans is how does the internet work, which is an illustrated Digital's Internet's a lot of fun and very informative. We post new podcasts every single Monday so make sure to subscribe to be notified and leave us a review
