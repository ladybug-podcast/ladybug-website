Emma  0:00  
It's more important than ever to build secure web applications, but many developers forget to account for web security. In this episode, we're joined by Taylor rrta, an infosec engineer, cybersecurity career consultant, beauty ambassador and content creator under the moniker the digital Empress. Today, we're discussing types of web security, the dangerous of lacking security, and a few things you can do to keep your site secure. Let's get started.

Kelly  0:34  
Welcome to the ladybug podcast.

Unknown Speaker  0:35  
I'm Kelly. I'm Allie.

Emma  0:37  
And I'm Emma. And we're debugging the tech industry. Are you developing an application with graph qL but don't know where to start? Or maybe you're building a graph qL back end and you're overwhelmed with boilerplate code and performance problems. save yourself time and effort and check out the grand stack. The grand stack consists of four technologies that capture the best of modern web application development, graph qL, react, Apollo, and Neo forge a database, the most widely used graph database. Together, they enable developers to build complex data intensive applications at scale with graphs all the way down by leveraging graph QL. To get started with grand stack, use the latest version of the Create grand stack app see Li and download the free Manning ebook, full stack graph qL applications at Grant stack.io.

Kelly  1:29  
What do cats drinking wine and a woman making wigs have in common? A lot? Actually. They're both the result of someone starting their own business doing things their own way, and pursuing their independence. Just like a million others who started this journey, these entrepreneurs found the support they needed from Shopify. Are you interested in supporting entrepreneurs? Do you want to solve highly technical problems that support treasured local shops? Are you interested in really powerful tooling to change the retail experience with your favorite big brands? Join Shopify. Now digital by default, you'll have the freedom to work from anywhere and the opportunity to build solutions to help Shopify merchants and partners innovate through chaos, and emerge stronger and more adaptable than ever before. Help Shopify make commerce better for everyone. Visit shopify.com slash careers to learn more.

Emma  2:20  
So welcome, Tailor. We're super excited that you took the time out of your busy schedule to join us. How are you doing 

Tailor  2:26  
today? Thank you green. Glad to be on. Just like let me

Sidney  2:32  
just like geek the fuck out for a minute because I am just like, thank God that you're like, Yes, I want to be on the podcast today. I am fucking hype. I am so hype. I've never talked to you in person before. I am so incredibly lucky in love with the digital Empire. Just thank you so much for being here. I'm gonna get you up the whole fucking time.

Unknown Speaker  2:57  
Just before lunch. We haven't like really taught at all.

Unknown Speaker  3:03  
I know like how's your 2020 been? Like, I know it's 2021 now but just the beginning. Like how is that going for you?

Unknown Speaker  3:10  
Um, it's smooth. Yeah, I mean, even despite, you know, the stuff, and I'm in the DMV area. So like, I'm literally near, you know, DC, the Capitol. So just hearing about bed and net going on. It's just like, but other than that, pretty good.

Sidney  3:34  
I'm so glad that you're safe. First off, making sure that you and your family are just prayers up for you just making sure that you guys are okay. We're glad that you're secure.

Unknown Speaker  3:48  
That way, because we still have next week in we're hoping that these you know, yeah, people don't get too crazy. You know, what they've already been? Yeah,

Emma  4:01  
we'll keep you on our thoughts for sure. It's hard for me being in Europe. I'm in Sweden, actually. So it's kind of hard being an immigrant here and having to watch everything going on at home. But we could do a whole episode on that currently. But today we're talking about cyber security, which is one of your niches. But first I'd love for you to introduce yourself to our listeners.

Unknown Speaker  4:21  
Yes, my name is Tailor enter thing I was previously k nown as married for over a year. And I'm also known as the digital influence. I've been going under the digital influence since 2015. And I got in you know after changing my degree to cybersecurity isn't undergrad, and I've noticed you know, when I would go online and research you know, people to kind of like, follow and look up to you naturally look for people that look like you and I didn't really See that? So I was like, Well, what if I do it myself. So I just kind of started putting myself out there. And then over time, I started to realize the importance of providing representation. for, you know, women that look like me black women, because we don't really have it in this field. So it's great to see Sydney, you know, somebody that looks similar to me, and we have all these other women that are coming up, that are blacking other women of color that are coming into this field, just women in general, like, you know, I wanted to see more of that. And we're getting you over time. And we've been doing that. And then now I've kind of like, transitioned into being an entrepreneur and selling beauty products. Because I do like my beauty. I like my lip gloss. I like to look cute. So I think it's it shouldn't be something strange to look cute. Even though we're in the tech industry. We're still women at the end of the day. So we have our things that we like so I wanted to share with my audience something that you know, they would feel good wearing, while also being bad actors in the tech industry. Three

Unknown Speaker  6:18  
priests,

Emma  6:20  
find your beauty products are

Unknown Speaker  6:22  
they linked on your website are all on my website. So I sell lip gloss lashes. And also Epstein covers. So you know, keep the whole security thing going and have webcam covers, as well.

Emma  6:42  
So those as well. I love that y'all. We're gonna link all of Taylor's stuff in the show notes. So feel free to go check out her lip gloss on her eyelashes. I just checked him out. They look fabulous. So y'all should check it out, too. Yeah. That's awesome. So I don't know, Cindy, do you have any knowledge about cybersecurity or security in general?

Sidney  7:05  
I really don't. And so I think that this is why it's just so great to just be in the digital and Bruce's presence because she first saw you Taylor, in 2020. Like I was very fearful of actually like starting my youtube channel up again, and just having to see your videos, just kind of collaborating with Ari Hale, a couple of other people like that really just gave me so much more confidence to do more with like what I want to do in the tech space. I don't personally have any experience with any type of web or cybersecurity. I've definitely thought of diving into it. But I haven't gotten to that point yet in my career. I don't do you have any Emma?

Emma  7:50  
I have none. I don't have cybersecurity experience. But I do have cryptography experience. I turned in the tog Rafi course when I was in college, and I enjoyed that. I think we're doing an episode on that this season. But that's very much different than cybersecurity. So I'm looking forward to learning

Unknown Speaker  8:07  
it with that though. I that's one of my favorite subjects of cybersecurity, like cracking, actually trying to find out hidden messages. I love that

Emma  8:21  
I almost failed that class. Don't tell anyone. It's fine. It's really good that I'm teaching that episode. Okay, cool. So let's move into talking about different types of web security. I think one that most developers are going to be familiar with, if any are is going to be cross site scripting attacks, or Xs s attacks. These are pretty common, especially if you're working with forms right. Tailor Do you mind? like can you give us a better understanding of what this is because I'm still kind of new to this area.

Sidney  8:49  
And even like a summary of just like web security in general, even before we like go into this because I know that a lot of listeners like me personally, I know what it is. I have a very like mere bare minimum of like understanding of this. So definitely start with web security first, before we go into good call.

Unknown Speaker  9:08  
Yes. Basically, it's in the name, you know, we want to make sure that everything that we're putting on our websites, everything that's online is secure. Especially now that you know we're all getting into e commerce, we're buying things online, we're buying food, things are getting delivered to us, you want all of your information to be secured, you know, depending on who you're sending it to. So with me, running my online business, I have to make sure that whatever platform that I'm using, the users are my audience, my customers feel safe giving me that information. And that whatever platform that I'm using is keeping your information safe. So if you have an unsecured platform, and you're hosting no private information or taking it in private information. And it's not necessarily secure, it's out in the open, anybody can get it. All their social security numbers, passwords, credit card numbers, everything will be out in the open. Yeah, so everything on the OSI model model from the application layer to the physical layer is completely secure. Because if anything on that, you know, pyramid is broken or unsecure, you know, we're all screwed.

Emma  10:34  
I'm really interesting Romania, Sweden is their system of security, especially with data is so much more secure than the US. So we have this thing called Swish, which is essentially like the country's version of PayPal or Venmo. And you really use it to pay for things. Anytime you log in to your doctor's application, or your you make a payment or you do anything, it requires you to use this thing called bank ID where you have a PIN code or use face ID and you have to, to factor out authenticate into anything here. I'm like, why is the US not doing this? I

Unknown Speaker  11:05  
mean, because we're slow thing, like, I see some times on Twitter. Like I just recently saw a girl say, like her router kept getting or her her login to her internet provider, you know, the logging. She kept getting hacked. And he said that she was like, I don't want I asked her. I'm like, Okay, let me go. And, you know, hope and see what's going on. I keep getting hacked. And I'm like, well, contact your internet provider. But do you have two factor authentication setup? She's like, No, I'm like, Oh, God.

Emma  11:42  
anyone listening right now, if you don't have two factor authentication on all of your specifically social media apps to like, yeah, you want to do Oh my god, this is incredibly easy to get hacked that way. Oh, my God,

Unknown Speaker  11:56  
is so many people like you wouldn't even for me, it's just second nature to set that up on everything. But people everyday people, they don't set it up. And that's usually the first way that they get hacked. So

Emma  12:10  
yeah, that's a huge one. I was also not I'm not gonna lie, I use the same password for everything. Not now. But a while back before I just saw her funny because I worked claimer. I worked at LastPass or like the same company who built LastPass. And I'm over here using the same password for everything I'm like.

Unknown Speaker  12:29  
Anyway, I'm gonna

Unknown Speaker  12:30  
give her a lesson in cybersecurity.

Emma  12:33  
Let's talk about the different kinds of attacks that I could suffer from. Let's start with content security or CSP.

Unknown Speaker  12:41  
I look into that further because I know that you know, a lot of people are getting into like WordPress, we're not really building our websites anymore. Like I use Squarespace to host everything. I know a lot of people use WordPress, people are getting into Shopify and stuff like that. So WordPress, though, I saw has like a Content Security Policy Manager that you can, you know, basically go in and turn on, and they do everything for you, which I think is awesome. But for me, where is Squarespace and Wix were kind of like this cloud based closed off platform is awesome now because I just pay a fee, and they go in and handle all of that. So makes my job easier. But I still have to go in and make sure like, as I see that you guys have you know, the list that to ESL or T what is the TLS TLS Transport Layer Security and SSL. They use that to make sure that's an APR. Because if it's not then basically putting myself and my customers at risk. So yeah, we have all of that. Basically automated now we just have to pay a fee.

Emma  13:55  
Yeah, that's really awesome. That's one of the benefits of using these third party platforms. We use Squarespace. I use it for everything, to be honest. Who cares if you're a developer, and you use these things? I've said it once. I'll say it again. Like, we should never be shaming developers for using content management systems.

Sidney  14:08  
Yeah. Especially since like, the whole point is to be like a lazy developers, like you're trying to make sure that we solve problems automatically. So I'm shocked that anybody would just be like, you shouldn't be using Squarespace. Right?

Unknown Speaker  14:20  
Shut up, like,

Sidney  14:21  
just okay, you'll be fine as well.

Unknown Speaker  14:23  
Like, I'm in security. I'm not a developer, like all of a site. Like I'm trying to do that. It's it's up and it looks nice. And then I go back. Well, I go in and then I made sure the securities right, you know, they're doing what they're supposed to do on the end. There is and then good, but I can't ask you guys like I always have the concern about like developers, do they? I know. They give you guys like a small overview of like security and like what you like they're supposed to get your code like they Don't give you guys like an intensive like, no.

Unknown Speaker  15:03  
D Yeah. Do you want to do that?

Emma  15:06  
Well, I think it's beneficial for both of us because you went to a boot camp. Yeah. So when I was in computer science school, we didn't learn about cybersecurity. We didn't learn about cross. That's crazy, didn't learn cross site scripting didn't learn about TLS SSL, I mean, this and just for those listening, we will define what these terms are, you know, in just a little bit, so don't feel left out. I the only course I took was cryptography. And that was an elective course, it was not mandatory. But yeah, it's kind of insane. Then I took a web development course. And I went through four years of computer science, and they didn't teach us anything about, okay, your building forms, you have to make sure that they're secure. No, there was none of it.

Sidney  15:43  
No, like, even professionally, right now, I went to boot camps. And they didn't say anything about like, any type of cyber security, web security. And even like, as I'm in a professional setting, right now, we have training courses from like other cyber security engineers, where they're saying like, these are the types of things that you need to make sure that you're including in your code as much as possible. Is it followed, necessarily all the time? No, are there checks that like, makes sure that that's happening? Also know? So I don't know how we haven't gotten hacked? I won't say anything else about that. But know that that's not something that's like a main thing that happens

Unknown Speaker  16:23  
at all. And you guys do have the code? Like, is there a process to kind of send it to the security team? Or send it to someone that? No, you know,

Sidney  16:32  
I don't even know if we do that? I Oh, that's very interesting.

Unknown Speaker  16:37  
Like, do you have, you know, you guys go through, you know, test or debug or debugging or running like it against like, pin testing, basically, what we would do is come in and test the code like you guys,

Emma  16:52  
I'm not sure what

Unknown Speaker  16:52  
we do, I need it.

Emma  16:55  
I am gonna sit here and state publicly that I am 99.9%, certain, Spotify has put in place many measures for security. I know like I was developing the Edit playlists modal on our desktop player. And we had, it was three form elements to form elements, text boxes, and we took special measures with our regular expressions to ensure that no code was being entered into these forms. And so you know, for those listening, if you don't know what a cross site scripting attack is, this can often happen. If someone is injecting code into your website specifically in forms. For example, if they enter a script tag into one of your form elements, like a text area, and they hit submit, it can actually go and destroy a lot of things. So anyway, when we were developing this, you know, we heavily relied on regular expressions on the client side to validate our data prior to sanitize it, prior to sending anything to the database. But I'm sure that they have measures in place.

Sidney  17:50  
I'm sure that we also have measures in place, but it's not a thing where we are face to face with any of these like cybersecurity engineers at all. So they're doing a lot of stuff like either before it goes into production, or after to make sure that there's like nothing crazy going on when it comes to getting any data in and out of our site. So I've no i no clue.

Emma  18:09  
Well, we so we just mentioned cross site scripting. And I don't know, Taylor, if you added this outline. I don't think I did, but I don't know who cares. According to the open web application security project, cross site scripting was the seventh most common web app vulnerability in 2017. That is not scary.

Unknown Speaker  18:28  
That's super freakin scary. But that's

Unknown Speaker  18:31  
the thing though. Like, you guys are still like, you don't really pay attention to security when you're coding. You don't have that, that baseline. So my drag us Yes.

Unknown Speaker  18:44  
It's not.

Unknown Speaker  18:49  
It's not you that I'm dragging. I'm dragging like, the professors are like, yeah, the guy, the people that are teaching you this, you would think that they would be like, okay, we have this knowledge. And it's the most, you know, common theme in, you know, website security. When it comes to hacking. Let's prepare these developers are just not even like if they're not going to teach you like a process. And it's just someone to send it to us. And we kind of go through that's what I've been seeing, like, um, what they'll do is they'll put it out. And then they'll, maybe they privately send it to like a security team or pentesting. You guys don't know about it. Yeah. And then they'll find some vulnerabilities. But then still, at the end of the day, everything is still hackable. So I just feel as though they they still put it out when there's known bugs are there's still a node hole. And then you'll have like a grey hat hacker come in, and he's like, Oh, I did. I found another hole and then you guys kind of get it. after the fact, right? It's reactionary? It's not. Yeah, yes, yes. Yeah.

Emma  20:05  
It's quite interesting how security is seen isn't. It's not even seen as an afterthought in web development it like I was gonna compare it to accessibility. In a sense, we're playing catch up almost like in terms of your learning path. But security even still is not gaining traction and web development is something that needs to be known. Yeah,

Unknown Speaker  20:24  
I don't see it is we're trying to push it. But when it pops up, it's like a brief conversation. Yeah. That's the problem over here, the US like, it's, we want every like everything to be out so quickly.

Emma  20:39  
I wonder if, because, you know, TypeScript is one language has been gaining notoriety in the past several years, and TypeScript, I think does actually help to ensure that the data that we're receiving is the data that we're expecting. I think that's actually one benefit of using it. I've been very hesitant about it, because it always gives me issues. But I think overall, it's one way that we can be secure. Taylor, do you have other like? I know, you said that you're not necessarily a developer. But do you have things that you commonly see with developers, web developers, where they forget to implement certain things?

Unknown Speaker  21:11  
Let's see, I don't rent now. Okay, cool.

Emma  21:13  
If any come up with a call us out?

Unknown Speaker  21:16  
Please, yes. I this year, I'll be getting more into, like, actually pin testing, because I've been more of like the defender of the network. So I'm into like, logs and monitoring you stuff like that. Um, what is interesting. So you would basically you hack, like, you guys will put out a website or application, and you would hire me to come in and find all the holes. Ah,

Emma  21:48  
that's so cool. That is, it's like the people that they hire, it's like when I hire people to come try to break into your home to see how secure it is, I love that would be a fun job.

Unknown Speaker  21:58  
That is, everything, all of these, you know, features that we're going to be discussing, we basically come in and make sure that you guys have everything on this list. And if you don't, you know, we tell you like we found this, we found that and then you would have to either, I don't. Usually when you hire someone, they do it separately, because I know I've done. I did like a project with a guy and my German he like hired me to come in and like to test the application. And he told me, he's like, I don't fix them. I just tell them what is open? Like, yeah, yeah, he was like,

Sidney  22:35  
I don't cuz it's not your job. It's not like you're not supposed to be doing that. He

Unknown Speaker  22:38  
hacks it. And then he reports he typed the report. And then he talked to him about what we found. So cool. That's so that's, yeah, like his office is doing. And I was like, Oh,

Emma  22:52  
you're making me like, you're convincing me that I'm in the wrong field.

Sidney  22:57  
Honestly, because I know you guys get paper, you guys get paid for that. Fix, fix that shit.

Unknown Speaker  23:03  
That's, that's the thing. I feel like, yeah. I know. It's because I'm really passionate about what I do. And I'm really I love what I do. I get a lot of people and I started talking about what I do. And I really hope I'm not like, glamorizing it so much. Because it is work, because I've had a lot of people come to me, and they're like, Oh, my God, I want to do it. And it is it can't be fun. I've been to so many events and you know, hacked into stuff and the thing, but it is work. And it is it can be frustrating, you know, basically the police work.

Emma  23:37  
I feel like that's important for all aspects of programming. Because a lot of times, especially on Twitter, I've noticed people definitely glamorize this profession. And while it can be great, and it provides you with a generally like a really great lifestyle. It's not all rainbows and butterflies, and I see so many people, maybe specific types of people who, who just, yeah, they glamorize this whole thing. But yeah, to your point, it's all it is worth.

Unknown Speaker  24:04  
It's worth it. It's fun. It is worth. Definitely.

Emma  24:09  
So you had mentioned TLS and SSL earlier, do you mind giving us some information about what those are?

Unknown Speaker  24:16  
Yes. So TLS is basically the newer version of SSL is basically a port protocol that makes sure that the data that we're sending back and forth on the network or legitimate so you want to make sure that these are implemented because any server can pretend to be like you can have a fake server come up and it can pretend to be your server. Yeah. So that's why you want to make sure that you have these in place. Because it just it made sure all your information is being transferred privately securely. Everything is locked in key. Um, so yeah, you have here you done Some pretty good notes so far that I've seen. I am impressed. Oh,

Emma  25:05  
that's the extent of my googling here. So I'm gonna be pretty transparent. There are a multitude of acronyms In this episode, I'm gonna do my best to we'll do our best to define them. But TLS Transport Layer Security. And like Taylor mentioned, yeah, it's just a protocol for enabling networked applications.

Unknown Speaker  25:26  
We're using now for this. So

Emma  25:28  
yeah, cool. Yeah. And you know, if you're a web developer, there's a very high likelihood you've heard of HTTPS, or hypertext transfer protocol secure, which is an encrypted version of HTTP. I'm curious, like, why would anyone use HTTP? Like, maybe that's stupid of me to

Unknown Speaker  25:45  
Honestly? Well, like, no, I, I have the same question

Unknown Speaker  25:48  
they want, if they want to be bust wide open, and they want their stuff? Yes, use HTTP, if you want. If you want people like me, and, you know, more skilled hackers to me, and just,

Emma  26:02  
why does it even exist? That was my question.

Unknown Speaker  26:04  
There's a lot of things, you know, we just got rid of windows seven, like they just made it obsolete, but it's like, why are you still hosting and that you're not? updating? You're not finding any type of why I didn't have that. Right. You know, if you're not gonna provide any patches, and there's still a lot of older people, or people who are not in security that keep old things, and they don't, I don't know why.

Sidney  26:32  
So, just this is a question kind of a theoretical one. Is it still insecure? If you use like Windows seven? to like, go to your website and things is there still like a degree of insecurity that is happening when you when people are making their way like to your hopefully, quote, unquote, secure site when you're going through? Something like Windows seven

Unknown Speaker  26:58  
is saying if you're on an HTTPS site, so they use the secure protocol, and you're on seven? So if they would have to be hacking the system? If they because there's so many holes, there's not they haven't they haven't updated the system, the any type of security issues that Windows seven has, when they're looking for vulnerable systems on the network, and they see you still have windows seven in Windows seven has all these unpatched security holes. That's how they're going to get you. I see. Yeah. Huh. Wow.

Emma  27:36  
Interesting. Yeah. And one more area of connection security. To mention here is certificate transparency. I'm not sure if you're familiar with this, it'd be great if you could elaborate. The definition I'd written down as it's an open framework designed to protect against and monitor for certificate Miss issuances. That's a big word Miss issuances. Newly issued certificates are logged to publicly run often independent CT logs, which maintain an append only cryptographically assured record of issued TLS certificates. So I guess my question is, what are website certificates? And why do we need them.

Unknown Speaker  28:09  
But your website certificate basically just keeps every all the information that you host on your site to make sure that it's up to date, save, you're running a website, and you go to it, and it doesn't have an updated, updated certificate, the website hosting service is not going to work, because you're basically telling them that you're not secure, you don't have your certificate running. So we're not going to host your website, you know. Um, so for certificate transparency, it helps to guard against several types of certificate based threats, misuse certificates, maliciously acquired certificates, role certificates. And these threats can increase your financial liabilities for domain owners. So, certificate transparency basically gives you early detection of misuse certificates, malicious certificates, it gives you faster mitigation, better oversight of the T LS and SSL system. So that's basically what that is. I tried to make this

Emma  29:18  
No, that was really helpful. Because what I guess my so like, most of my websites are built through Squarespace. And they do have you know, I have to go through requesting a certificate and all of that. If I just create like an index dot HTML file, and I throw it up through a no cyber duck, I use FTP and I get my file uploaded. Does that like I'm not doing anything to get myself a certificate? Does that mean my site is going to be HTTP and not HTTPS? Like there's no it's not going to be secure? Or

Unknown Speaker  29:44  
Yeah, you're saying you need a specific security certificate for it to run through?

Emma  29:48  
Yeah, do I need one because like, I'm not like I've done that before. I'll just make a basic static website. I'll throw it up on a random server through like, name not named chief. That's a hosting domain, but like, you know, by hosting through GoDaddy, for example, do they handle the certificate? Or is that something like I need to be aware of?

Unknown Speaker  30:06  
They handle it, but you have to buy that? Oh, yeah. Okay. Yeah. So if you don't buy that certain certificate, you're gonna just have HTTP. say like, yes. What if you just make just a random website and you host it up? It's not going to be HTTPS? That makes so much

Emma  30:22  
sense now. Okay, I'm just gonna make clear that I'm

Unknown Speaker  30:27  
super important.

Emma  30:28  
Yeah. All my all my old sites are really insecure.

Unknown Speaker  30:32  
Your fuck demo here. So

Emma  30:35  
it's not like anyone knows who I am. Um, so that was the connection security at a high level. There's another area of security called Data Security, that this isn't something I necessarily thought about as being an area of security. But when we think about local storage, which is often used in web development, so your window dot local storage property, it's a way for us to store data on a client side server, a client side server, a client side session. And between that and HTTP cookies, you know, these are small amounts of data that that can sit inside of your web browser. I didn't think about the fact that these are an area of security, we need to be concerned about, like, have you. Like, what things do developers need to be concerned about with with data security?

Unknown Speaker  31:20  
Well, you know, when you get a people are nowadays are talking about, they'll be sorry, kids, they'll be talking about, oh, you know, I'm, I'll be researching something, or I'll be talking about something, and it pops up randomly. Yeah. Your cookies. So if your cookies get if your cookies are outdated, and someone hijacks, you know, the cookies after your website, cookies are basically, I did a project on this. A while back with Python, I'm trying to remember, we basically have to go through the cookies, because if you don't secure the cookies, if something happens to where hackers can take, you know, information from your cookies, and exploited, you know, however they want to. So I guess with you guys, as far as like being developers, there's a very simple way to go in and secure cookies are at the top of my head. I don't know right now I see. But there's a very simple way that you guys can go in and secure cookies.

Emma  32:28  
Yeah, I'm wondering if like maybe after maybe after a certain amount of time, we have to clear the local storage or something for like, yeah, and then I wonder how that works with like, GDPR as well, because I think, I don't know, there are so many different things to think about. But um, never. Yeah.

Sidney  32:44  
So then my other question is, so we see, I guess, all the time, where websites are now like, having those like pop ups where like, we would like you to do something with cookies and whatever, like accept the terms for like doing like cookies and whatever is grabbing all of the data that

Unknown Speaker  33:01  
your

Sidney  33:02  
that your Oh, we are actively consenting, that's not okay.

Unknown Speaker  33:06  
I don't

Emma  33:08  
think that makes a lot of sense. Okay, you know, I just want to say I'm kind of angry at the fact that they they called cookies, something like really enjoyable,

Unknown Speaker  33:19  
enjoyable.

Unknown Speaker  33:22  
I don't get some of these.

Emma  33:24  
But, Taylor, do you just always use incognito mode?

Unknown Speaker  33:30  
I don't, sometimes.

Emma  33:33  
I sometimes. I wonder like, if I was in security. I feel like I never use it unless I'm looking for flights because I'm like, Oh, I don't want them to like, look at my cookies. Otherwise, I don't care. Yeah, I

Unknown Speaker  33:43  
use a VPN. Okay, cool, huh? Yeah.

Emma  33:46  
Do you have a favorite VPN? Because I have thoughts on this.

Unknown Speaker  33:51  
So I work with protonmail with their current time, basically. I'm a affiliate of them. So I'm actually there VPN with everybody. But I The reason why I work with them is because when I was in college, my professors, they basically were pushing proton mail, like get a proton mail, you know, they're based in Switzerland. They're very secure. Everything's encrypted. It's not like Google, you know, how Google, you know, is, can be I mean, Google security is pretty good. But still, it's hackable. But the difference with protonmail you know, everything is, you know, ensured that it's encrypted, and it's based in Switzerland and stuff like that. So they reached out to me, and they were like, Oh, we would like you to be an affiliate for us to you know, support our VPN. And I was like, yeah. Yeah, and I have like their hot I have their What is it not there. I have like the advanced plan or the plus something like that. Second to highest and I love it so far. The music You know,

Emma  35:02  
for everyone listening if you want protonmail we're gonna link Taylor's affiliate link in our show notes. Yes, absolutely. Like, not even. Yes, shameless, for sure. Okay, Melissa. So we're gonna take a quick break here from our mineral sponsor. When we come back, we'll talk about data integrity.

Kelly  35:23  
Building full stack applications can sometimes be overwhelming, but so many different technologies to think about. live streams are a great way to see how the pieces fit together by joining other developers as they build applications from scratch. The neo 4g live stream features developers building applications with technologies like graph qL, react, view, graph algorithms, Gatsby, next Js goaling, TypeScript, data visualization, and much more. You'll see how a graph database fits into modern development workflows, and how other developers tackle problems like authorization, cloud deployments, data import, and analytics, covering how to use the technologies needed to build and deploy full stack applications. Follow neo 4g on Twitch or YouTube to join the regular neo 4g live streams focus on building full stack applications in graph data science. Okay, let's

Emma  36:17  
talk about data integrity. There are a few areas here that are really important. I know Sydney, when you develop websites, have you ever encountered a access control allow origin response header? issue?

Unknown Speaker  36:32  
Oh, my gosh, have I not lately? Okay, where

Unknown Speaker  36:35  
am I?

Emma  36:35  
How cool. They're awful. I actually remember the first time I heard they're terrible. I remember the first time I got one of these. And I was like, What the fuck is this. And it took me like a year to figure it out. I was working at IBM. And I was requesting a resource from obviously a different platform, I don't remember may think I was developing for WordPress. And I hit a an access control allow origin response header. And essentially what this says is, it indicates whether the response that we are requesting, the resource that we're requesting can be shared from the origin that we are requesting it from. And this is something that I had no idea what it was. And it took me a long time to figure out but this is an integrity security issue or area. I'm not really sure the right term for that

Unknown Speaker  37:19  
the which issue was that, you know, this

Emma  37:21  
is the HTTP access control allow origin. And you'll often get this if you're trying to make an API call to a third party library, and you haven't set it up to be able to communicate securely.

Unknown Speaker  37:36  
I see. Yeah. Like the developers

Emma  37:39  
that one specifically is, is web development. Yeah. And it's a very common one if you're working with an application that requests from different API's, but are like what other areas of data integrity are there.

Unknown Speaker  37:54  
Um, so as far as integrity, what I mean is, you basically want to make sure that all the information that you come across, it is what it is, and you don't want to be putting out any type of information. They did dig a lot in this about health care, you know, making sure that the integrity of the information health care is what it is, and that you can confirm it on all platforms, across every platform, and you don't want to go like if you're in a company, and you know, they have different websites in different parts of the state or the world. You don't want to go to one website, and it says this or this and go here. And it's this. That's basically what integrity is.

Emma  38:45  
Wonderful. Yeah. Yeah. And I think there are a couple other things, too, that I found in the course of my amateur sleuthing. So sub resource integrity, or Sri is a security feature that enables our browsers to verify that the resources that we're fetching, for example, from a CDN, that they're delivered that unexpected manipulation. And one other area of interest integrity, I think this is again, specifically for web development, it's gonna be the same origin policy. So this is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin. So this is going to help isolate potentially malicious documents and reduce possible attack vectors. I love that word. That's a sexy word vectors. So those are just a couple areas of integrity from the web development perspective. There's a lot there's a lot here.

Unknown Speaker  39:35  
There's a lot that I've seen. I'm like, Oh, I haven't learned this one. Yeah, yeah.

Emma  39:40  
And you know, there are other areas of web security specifically like clickjacking, just kind of making sure that if you're clicking on something, what you appear to be clicking on is indeed what you think it is. And you know, because I think developers can actually one like clickjacking, quote unquote, is you know, if they let overlay of an invisible button on top of when you think is going to execute a specific action and actually do something else like, like download malware or something like that.

Unknown Speaker  40:08  
Yeah. That sounds like something someone uploading or you're thinking you're downloading the software right now. That's what that sounds

Emma  40:19  
right. And I'm not so sure it's like an issue so much anymore. Like we're moving away from, like, iframes and whatnot. But you just be aware that this can happen. But yeah, I think one of the last big things is just information security and password protection. Taylor, do you have thoughts on password protection?

Unknown Speaker  40:38  
Yeah, we

Unknown Speaker  40:38  
would love to hear that. Especially for Emma. Yeah.

Unknown Speaker  40:42  
Okay, so. So I have heavily been encouraging people to work with a password manager. I see this tweet that goes viral a lot where people are joking about their passwords being weak, or told that it's weak through the web browser. And they feel they're like, Oh, well, I don't like I have a poor memory. And that just makes me cringe. Because they're like, Oh, I have a poor memory. I'm gonna, and I just in my mind, they don't say it. But I already know that they're like, using the same password over and over and over again. So I've been trying to recommend to people like use this password manager or, you know, I give them mine bash me.

Emma  41:27  
That's what I use. I love it. Because I've tried LastPass. And I've tried one pass, and I didn't like either. And I

Unknown Speaker  41:35  
dazzling.

Unknown Speaker  41:36  
Thank you,

Emma  41:36  
thank you really good. I like them a lot.

Unknown Speaker  41:38  
Yeah. And you can like create, like, if you don't like the setting that they have defaulted. You can go in with their generator, and like, I sometimes go in there. And sometimes I go to websites, I'm like, Oh, you need a symbol. So I'm like, Okay, well, let me go and generate a symbol, or whatever. But it's great. Like, I have no issues. But with security with the passwords. I'm the social impact that we're going through over here with the government, and how you basically are under siege, because solar winds decided to make their password updates over solar winds wanting

Unknown Speaker  42:23  
fucking serious.

Unknown Speaker  42:24  
No, I'm not. I mean, as I am, I'm not kidding. Oh,

Unknown Speaker  42:27  
my God,

Unknown Speaker  42:29  
let it say no. So in 2019, a security researcher actually voted. And he found He's like, you know, he's doing his job and, you know, testing the waters. And he sounds like you guys, update servers, basically. And nobody, this is another problem with security. You tell them something, and they don't. And year later, 2020, they find out they start hacking into like the solar wind applications, and some of these government facilities use solar winds, applications. And now they're in there like, what I like to call it their swag. Oh, password security is something I To this day, I don't get why people lack

Emma  43:28  
so much. Yeah, there's no excuse. There's no excuse. Well, wow, this is your sign. If you're listening, and you don't have a password manager, highly recommend it, check out dashlane. We'll link this all in the show notes. Oh, my God. Taylor, you asked your Twitter followers for questions about cybersecurity. Do you want to answer some of those now? Yes, please.

Unknown Speaker  43:52  
I know one of them. Input security. One of my friends cybersyn. He was looking into that. And I actually found a really great article on a loss that I saw that they basically explained it that input validation should happen as early as possible in the data flow. It should be applied on purpose syntactically to me to global whitelist validation. So they they basically said for this part, instead of I used to have to do this a lot when working with servers in blocking certain sites blocking certain applications or whitelisting them as they say. They recommend an input security which you whitelist more than you blacklist. So instead of like everything that I've done that like I've been in a place where we've like blocked a bunch of stuff, and then they're like, you can't the users are calling here like I can't get to this website or I can't get to this advocate. I can't use this application because we blocked something that the application or the website For input security, they recommend to whitelist you know, things that you want to come in. So you're not blocking off things, you know, services or functions that certain applications and websites need. So it says whitelist validation also involves defining exactly what is authorized by the definition. So you are going through this email, server side application, anything that you're running on your network you want to go through and whitelist what you want coming in instead of like, blocking everything. So, and I have the the website where I found basically those tips.

Sidney  45:42  
Oh, yes, definitely, like, give that to us. And we'll make sure we link it in the show notes. Thank you so much for that.

Unknown Speaker  45:47  
That is a lot of hope to hear. But

Emma  45:51  
yeah, that'd be awesome.

Sidney  45:54  
So the next question, I know that I had this question, and so I just kind of listed out. So okay, for a person that is interested in getting into cybersecurity, we are definitely making sure that we gossip your workbook. However, I do want to know if there are any cert cert certifications that you would recommend for anybody that is interested in getting into cybersecurity. Yes.

Unknown Speaker  46:17  
So the main one I like to recommend is security plus, that you're gonna hear basically, from everyone. That's what I heard from my professors, they base they told me to skip the A plus, which is for more for help this actually working and taking apart computers. But over time, they started to tell us to kind of skip to a plus and network plus, because we're security, so why not just go straight hop into security. So security plus is going to make sure that employers know you know, the foundations of security, what you're doing, how to manage servers, systems, how to set up firewalls, you know, all of your basic security foundation. Yeah, that's what I recommend. Anyway, ebook. And I have had a few people come to me and told me they got it. And now they're on their way to get it done. That's awesome. So exciting.

Unknown Speaker  47:21  
Yeah,

Emma  47:22  
so for y'all listening, Taylor has an ebook, which we will be giving away this week, if you tweet about it more on that in the outro. But we're linking all that in the show notes as well. My question is, like, if someone wants to get into cybersecurity, like, do you have any general advice for them?

Unknown Speaker  47:41  
I don't want to say I think a lot of people give technical advice, before they give people the mental aspect that they need before they come into this field. Because I think a lot of people, like we discussed earlier, like, they hear us talk about this stuff, and it's kind of glamorized and a fake Oh, we're just, you know, kind of sitting at the computer and typing away and getting into stuff. Um, and that's where I feel like a lot of people want to hop to when they hear about this field. And then when they start studying and stuff like that, they kind of, I've had a lot of people come to me when I'm consulting, and they're scared of interviewing, or they feel like, they're not competent enough. So or they're not motivated, they need someone to constantly be telling them, you need to do this, you do that when a lot of us in this field are self starters, like, if you're not doing your own research, you're not getting up and doing your own projects. It's gonna be hard for you know, no one's gonna want to hold your hand throughout the whole thing. So there's three things that I recommend self motivation, self confidence, and consistency, self motivation, you need to know that, you know, you're capable of surviving in this field and bringing solutions to us in the security field. were bad enough as it is over here in the United States. So you know, we don't want anyone coming in and sleazy, especially after what happened to the Capitol and stuff like that, we kind of have, we have to really be on our toes going on from 2024 self confidence, just knowing that the work that you do the studying that you do is not sure that you're getting you somewhere, you don't want to get into this field, and do not believe that you can do it and get where you need to go. And that's going to take you far it's going to go back to the interviews. If you have self confidence, you're going from company interviews, you're going to feel more confident networking, you're going to feel more confident, you know, discussing security types of topics with other people that come before and you know, the study and everything and applying for jobs. I think consistency you have to be consistent with studying you had to be consistent with doing projects. doing homework doing whatever you need to do. Because a lot of people come to me and they're like, Oh, I don't want to keep studying or I don't want to work or I don't want to do eight years of schooling. And if I, I'm still learning, I'm still learning every day. I'm still, this field is always something new every day. There's zero days every day, there's holes, vulnerabilities every day. So if you're not consistent in learning and building your skills, you're not going to get very far.

Unknown Speaker  50:34  
Absolutely. Your keys, your major keys that wow, absolutely.

Emma  50:39  
Yeah. Well, I think that's a great note to wrap this up on I, I learned a lot to be honest, I thought I knew a lot about cybersecurity. And then I realized I know nothing. So I very much appreciate you being here.

Unknown Speaker  50:53  
Thank you, there's still a lot, there's still so much that I don't know, I still feel like I'm a new when it comes to a lot of this stuff, even though like the title works in a company. And there's still a lot. And then there's so much that I don't know about developing, I need to know as far as as well for security.

Sidney  51:15  
I'm super embarrassed that like you had asked us that question. And we're just like, no, like, we don't have any contact with any of that, like security stuff at all. So let me copy your book. You know,

Unknown Speaker  51:28  
I did that a lot. But my book, does it, I wouldn't go to my book for help with what you guys are looking for. Yeah, so it's more for people who are trying to get into trying to get like a general pathway of like, where they should start with networking, how to build a network and stuff like that a resume. As far as you guys, I would start maybe focusing on more like security related projects. When developing. I know, there's like a field now where people can kind of go into software development, and we have like a security focus. So they're building your software all day. So I don't really look. I think

Emma  52:09  
also Mozilla has an entire web security section. We'll add that to our show notes as well. For you to check out. Via But with that, I just want to say a huge thank you for joining us today. And unless y'all have anything else I say we move into shoutouts Absolutely,

Sidney  52:26  
yeah. Okay with that, um, thank you so much. Taylor. Like, this is just I fangirl I've been fangirling this entire time. Excuse me. Um, my shout out first off, um, have any of y'all checked out Taylor's badass YouTube channel, she has 11,000 subscribers. She's always talking about cybersecurity. They're making sure that you guys are aware of what you need to do to get into the field. what she's doing right now what her projects are, how to look for cybersecurity solutions, making sure that you're understanding the right policies. She's answering all of your questions make sure that you guys subscribe to her channel gassing you up as much as possible. Make sure you go check out her shit guys, just I am in awe. I'm

Emma  53:18  
not only because we just dropped but also because you have a video called tips and tricks for social media security, and I definitely need a wire.

Unknown Speaker  53:26  
Goodness.

Emma  53:27  
Yeah, Taylor, what's your shout out for this week.

Unknown Speaker  53:29  
Um, my shout out is for everyone that's gonna be listening to the podcast and supporting you guys and tuning in. I'm so happy to be on here and doing what I love to do, which is providing security awareness.

Unknown Speaker  53:51  
To give a shout out to

Emma  53:54  
you know why I love this though, because this shows that we're real people with real lives and real families.

Unknown Speaker  54:01  
These are my nieces and nephews. So you know, I guess I'm watching them because they're babysitters. Oh, no. Yeah, everybody that listens to the podcast. Everybody that's interested in cybersecurity and, you know, really serious about coming into this field and providing solutions and helping upgrading our security. Thank you for coming in. Thank you for eventually being a super power interview. Love that.

Emma  54:33  
Awesome. And my shout out is just a 2021 for being at this point in time. 15 days in and already throwing me massive life events that I am very, extremely grateful for but also what the hell that's it. That's Are you ready to

Unknown Speaker  54:50  
revoke your 15 day trial,

Emma  54:52  
my 15 day trial is not gonna expire ever. So with that, if y'all liked this episode, tweet about it. This week we are selecting one tweeter to win Taylor's ebook, the ultimate guide for getting into cybersecurity for beginners, which sounds fabulous. So if you want to win a copy, make sure that you're tweeting and we post new podcasts every Monday. So make sure to be subscribed so that you can get notified. And make sure to leave us a review. And with that, thank you again, Taylor for joining us. And yeah, I hope everyone listening has an awesome day.

Sidney  55:21  
Thank you so much. We will guys next week. This has been the ladybug podcast. Thank you so much, Taylor. So happy that you're here. All right, I'm done. See you guys.

Transcribed by https://otter.ai
