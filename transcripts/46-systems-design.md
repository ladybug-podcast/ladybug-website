**Emma**  0:00  
Systems Design interviews are becoming more and more prevalent and can indicate your ability to work with complex systems. Many engineers struggle with the systems design interviews as a result of their inexperience developing large scale systems. Today will teach you some of the foundational elements of systems design, so you can nail your next interview. Let's get started.

**Kelly**  0:24  
Welcome to the ladybug podcast. I'm Kelly. I'm Allie. And I'm Emma. And we're debugging the tech industry.

**Emma**  0:32  
Hey, Kelly, have you heard about this cool tool called AWS amplify? Tell me about it. It's a suite of tools and services that enables developers to build full stack serverless and cloud based web and mobile apps. You get to use whichever framework or technology you want on the front end

**Kelly**  0:46  
does. Sounds cool. Well help me get up and running with things like hosting. Yeah, authentication. You betcha. Manage graph QL. Totally. How about serverless functions API is machine learning chatbots file storage.

Unknown Speaker  0:58  
Yes to everything. is built especially in a wage and it will traditionally front end developers

**Kelly**  1:03  
like yourself, Kelly

**Emma**  1:04  
to be successful because you can use your existing skill set to build a real world full stack apps than in the past would require deep knowledge around back end DevOps and scalable infrastructure. The amplify console also allows you to use a GitHub repository to deploy to a globally available CDN with ci NCD built in. It's super cool. Where can I learn more if you want to learn more about AWS amplify Mr. AWS? amplify.github.io. So let's kick things off and talk about what exactly is systems design? I know I have some experience with this, but I'm gonna ask Kelly, what is systems design? Since you have no experience? I literally

**Kelly**  1:41  
have no idea if you

**Emma**  1:44  
I mean, I can read it for our guests. Like if you were teaching a college course and we're like, Alright, you got to teach us some design like define it, please.

**Kelly**  1:51  
I don't like being put on the spot like this. That's why I did it. I don't know like I assume like is do you want to say this? design the system.

**Emma**  2:01  
It's so weird because design systems and systems design have literally zero to do with each other.

**Ali**  2:06  
Yeah, but they're the same words. So there's something to do with each other.

**Kelly**  2:10  
I know what design systems are, but I do not know what systems design or design is,

**Emma**  2:15  
are is, you also know English is okay. So, systems design is kind of really the process of defining your architecture, your modules, your interface and the data for your system. So when we think about platforms like Twitter, Instagram, Facebook, they all have these architectures where they've got servers, they've got load balancers, they have cash. And each of these applications have different needs. Some of them need to really persist data. So they have to make sure they replicate their data so that if one server goes down, all is not lost. They can continue operating, but perhaps something like Twitter can give up reliability, for speed. So they all have different needs. And I think that kind of leads into this

**Kelly**  2:59  
before we dig into it. I would love to know like you said, this is asked in interviews. I obviously don't do interviews anymore. So like what? What kind of interviews? Would I expect the these kinds of questions like, if I'm interviewing for a front end position, am I going to get questions about systems design?

**Ali**  3:17  
So in my experience

Unknown Speaker  3:21  
for

**Ali**  3:22  
a couple of the large companies for management roles, the systems design interviews are the only technical interview that they do. I don't know. Okay, if you have experience with

**Emma**  3:33  
Google, I did have systems designed for an enroll.

Unknown Speaker  3:38  
Did I

Unknown Speaker  3:40  
know

**Emma**  3:41  
No, I don't remember. Actually, I can't remember if Google does system design interview. I'm pretty sure they did. But Spotify definitely did. I had a systems design interview for Spotify. Meanwhile, I was very anxious about it because I was convinced that I would have to actually calculate values for how much cash I would need in terms of gigabytes, terabytes. And how much latency I would have like, I thought I was gonna have to go and calculate all these values. And we'll explain what all of these terms are during this episode. But for a front end interview, I actually spent more time to find an API. So what would what kind of data do we need? So when if it was just signing Twitter, for example, you need text content for your post, you would need a tweet ID you would need the user's ID, maybe a location A geolocation? So kind of just sketching out the API's. I also did kind of like draw out what the system looked like. So have some servers have a couple load balancers? You know, have the client you might be asked to draw these kinds of things. But yeah, I think Spotify and potentially Google were the only jobs I interviewed for for for an enroll that requires systems design. Yeah,

**Ali**  4:58  
I know that. A lot. Learn the big ones do for engineering management, because that might be a discussion that I've had a couple times recently. Um, just to recap, in my thought, systems design is the high level decisions that you make when building an application. So what programming language are you going to use? What frameworks are you going to use? What database Are you going to use? How scalable is that database? What types of servers? Are you using? What? How are you architecting this so that all of these work together and your How are you building out the whole entire application? What high level decisions are you making in order to fit the things that you need for your application? So weighing the pros and cons of different things and picking which one are going to fit your requirements best?

**Emma**  5:52  
It's actually quite fascinating to to think about how we partition our data. This isn't something you would necessarily think about every day, but If we think about

**Kelly**  6:01  
when you talk about I think about it daily,

**Emma**  6:05  
you are a very interesting person. Thank you. So like when we will talk about this when we talk about data partitioning, but just the concept of Okay, well, for Twitter, for example, how do we want to partition our data? Do we want all tweets from one user on one server aggregated together? Or do we want to split up our tweets by a hashing function, or something else. So these are very interesting problems to solve. But the granularity of these interviews will will vary depending upon whether it's a front end role or a back end roll.

**Ali**  6:38  
All of this is still a little bit confusing and intimidating. To me. It is, especially as somebody who's worked at startups for my whole career, because it's not necessarily that they're expecting a lot of people on applications. So and then also, Dev was still running on Heroku when I was there, so Heroku did a lot of that, for us, instead of us having to do yeah, up front?

**Emma**  7:05  
Well do we want to talk about what a distributed system is Go for it. So a distributed system is a system whose components are located on different networked computers. And they communicate by passing messages between themselves. And there are key characteristics of a distributed system that are very important to know for these types of interviews. So scalability is the first and this is kind of the capability of a system, a process or network to grow and manage increase demand. So as your user base is growing, how scalable is your system, and and we have this concept of like horizontal scaling, where you would actually add more machines into an existing pool. And this would be like Cassandra or MongoDB, if you've heard of those, but you've also got vertical scaling. So you're limited to the capacity of one server, but you just scale the the capacity vertically, which you can't hit a limit right? Like you can only increase the capacity Do you have a server so much before you're going to need another one? So that's the first big one. Yeah, so

**Ali**  8:06  
a no SQL database, you can add more computers, because it's a series of key value pairs. And so that allows you to have that database stored across different servers. Whereas the SQL database, you need to fertile school scaling to scale up that one server because your database needs to all be stored in one place so that it can relate properly to other tables and the columns need to all be in one place in the rows and all that. That being said, I think that there are SQL databases that do scale horizontally now, but that's traditionally why you'd use no SQL database instead of a SQL database.

**Emma**  8:45  
We'll also talk a little bit more about this towards the end of the episode. But yeah, that's a good point. Um, there are what for more for more key characteristics of distributed systems will very quickly touch on. The second is availability So this is the amount of time that a system is going to remain operational and be able to performance required functions within a specific period of time. So you could think of this as the percentage of time that a system or machine remains operational under normal conditions. So think about an airplane, you know, we can fly an airplane for hundreds of hours a month without that much downtime. So we could say that this is a highly available machine. This kind of leads into reliability, because reliability is the probability that your system is going to fail within a given period of time. It's a little confusing to like kind of distinguish between availability and reliability. But we can think about, you know, your system is considered reliable if it keeps delivering services, even when one or several parts of its software or hardware fail. So we can think about Amazon for example, you know, a user transaction shouldn't be canceled because your machine fails. I mentioned if you spend like Hours, you know, just buying way too much shit you don't need on the internet. You get to check out and their server fails, and all of a sudden your cart is empty, like you'd be pretty pissed off. So, you know, in their case, they need to make sure that their system is highly reliable. Alan, do you want to cover the last two?

**Ali**  10:12  
Yeah. So the next one is efficiency, which is the response time for an application. So this ties into performance and making sure that your user gets data back in a short amount of time, we did a whole episode on performance and why it's so important. But there were statistics in that episode, like a huge percentage of your user base with leave if your request took more than a certain amount of time, like I forget the exact numbers. But it's super, super important that if you have an application with a large user base, that they're getting what they need in short periods of time.

**Kelly**  10:53  
I think even if it's not a large user base, even smaller user bases like people are impatient, and they want they want everything quickly. Super trail. That's super true,

**Ali**  11:01  
I was thinking it's a little bit less important, it's still important but a little bit less important for internal applications, like you should obviously still make it so that your employees can use things quickly. But they still have to use the internal application, even if it takes a second to load versus point 01 seconds to load, you know, until that was my, my edge case that I was thinking about. And then manageability so how easy is it to operate and maintain? So do you need like 30 engineers to maintain your servers? Are you can you do like two engineers? And is it easy to add code to the system? Or does it break everything every single time that you do? And also that it's easy to actually diagnose and see the problems when they occur? So I think that those are the next

**Emma**  12:00  
Till awesome, I think let's so just as an important note, when you are designing a scalable system, or I'm sorry, a distributed system, something's gotta give, right? You can't have a highly scalable, available, reliable, efficient and manageable system, you're going to have to pick the ones that are most important for you. And the others are going to take a hit by default.

**Kelly**  12:22  
I wonder if there's a phrase for that, like in terms of like project management, you have like time quality and costs, it's called the Iron Triangle. So if you give more on one, the triangle will change its shape to you know, something has to give, as you said, it's I wonder if this is like a similar phrase for, for distributed systems.

**Ali**  12:43  
I wonder there's definitely graphics of a bunch of circle graphs, or what are the ones where there's different circles and they overlap and diagram and live on Darden diagram? Yeah, there's definitely Venn diagrams of like, you can't have everything. You can have three things but not

**Kelly**  13:01  
everything.

**Ali**  13:04  
It's like the memes where it's like you can have friends sleep or good grades, you can only pick two. It's like, yeah, the same thing for this.

**Kelly**  13:12  
I only picked good grades.

**Ali**  13:15  
Oh, no, no. So I'm sad. Who

**Emma**  13:19  
wants says she's excited about load balancing. I'm very excited about load balancing. I could talk about this all day, like, I could just, oh my god, I would be horrible to take on a date, I just realized cuz all I would want to talk about is load balancing. Alright, let's balance some loads. So load balancers help spread traffic across different cluster pick across clusters of servers in order to improve responsiveness and availability of your applications, your websites or your databases. These also are going to keep track of the status of all resources while distributing requests. So they're aware load balancers are aware of, hey, if server is down, let's let's keep traffic away from there. Let's reroute it to other servers. So if a server yet if it's not available to take your request, it's not responding, the load balancer actually stopped sending traffic to that server. So typically, load balancers sit between the client and server. They accept these incoming network and application requests. And they distribute this traffic across multiple back end servers using various algorithms. And I love this. This is fascinating to me. And perhaps maybe we'll include, like a graphic for this to be super fun to illustrate this. But we have these different algorithms to balance our traffic. So when we receive an incoming request, how do we want to handle that? The first is the least connection method. So this is going to direct traffic to the server with the fewest active connections. This is pretty useful when there are a large number of client connections that are unevenly distributed between servers. So that's the least connection method. We've also got the least response time method so this algorithm drives traffic to the server with the fewest active connections. And the lowest average lowest average response time, we have three more the least bandwidth method. So this actually selects the server that is currently serving the least amount of traffic measured in megabits or per second. The round robin one is very interesting to me. This actually cycled through a list of servers and since each new request to the next server, so it's just successively iterating through when it reaches the end of the list, it kind of just starts over at the beginning. And this is really useful when your servers kind of have equal specification. So you're not having one super powerful server and you know, for weaker ones, that wouldn't really distribute very evenly. But if you have comparable server power, I guess this is a pretty good method for that. We've also got the weighted Round Robin. So it does continue this round robin idea where you distribute, you know, in a round robin process, but this is really good for servers with different processing capabilities. So each server is assigned a weight, there's just an integer indicating its processing capability. So servers with higher weights, they receive new connections before those with less weights, and servers with higher weights, they just have, they typically get more connections with those with less weights. So that's a nice way to do it if your servers are not equal in terms of processing capabilities. But there is one last load balancing algorithm and this is the IP hash. So we just take the IP address of the client, and we calculate it using a hash function and redirect the request to that server. So that was a lot. This is hard to conceptualize through audit audio. So I think this might be useful. Maybe not this particular, but we're going to see caching in the next section. And caching is pretty similar. But that I think we should put together a graphic for that would be pretty useful.

**Kelly**  16:50  
Before we move on to caching, like, do you choose one of these methods and that's it, or do you use a combination of methods? Like how is that Does that work? Why are you asking me questions? I don't know the answer to? I don't know the answers either. No, I,

**Emma**  17:06  
if I had to make an educated guess I would say you would pick one based on your needs. So look at the types of servers that you have. Are they all pretty equal in terms of capability processing, things like that? If so, maybe round robin would be a good distribution method, but it's all based on what are your needs? Is it really important that you get a response as fast as possible, because at that point, maybe you want to go with the least response time method, or if you don't care as much about latency, and maybe you want to distribute a little bit evenly throughout your, your hardware, and at that point rate, round robin would work better.

**Ali**  17:41  
Yeah, that's how I understand it, as well as that you pick one strategy

**Kelly**  17:46  
to show.

**Ali**  17:48  
Cool. So caching is something that I do have more experience with. So caching makes it so that you For some data so that you can use it again. So there's client side caching, which is when you store data in the user's browser, so that when they come back to the page, they already have pieces of it loaded. Then there's also server side caching. And that's when you have certain data stored in like your database or something, some other layer, some other machine. And so it's so that users are going to be requesting that data a lot. And so you're making it so that it's as quick to get that data as possible. So one example of this, from my experience, or I can do a couple here is that I had a query that would take forever to come back from my database, but it was data that we used a lot. So it was stored in one format, and then we added transform it into another format. And we actually use a database called Redis. To store that second data structure, that second format of the data so that when you look to get that data in the future, it was already stored in that second format. So you didn't have to redo that process. So that's one example of server layer caching. But then, also, there's the client side caching. Dev had a really fun story about this failing. April Fool's last year, they decided to change the font for everybody to Comic Sans, which meant that they had to clear everybody's caches, so that the old font wasn't there for anybody anymore. And this made it so there were a lot more requests going to the server then right then usual, and so it completely over blue. They're servers and the site went down for hours and hours because the system was so overflowed because of this comic sans thing. So maybe I don't even think. Yeah. April Fool's was really on Devin Seta. I can link an article about that to

**Emma**  20:20  
stack overflow. Could you explain why wouldn't we just use cash for everything.

**Ali**  20:26  
So you can only really use caching for the data that's going to remain static every time that they make the request, at least on the front end, and then the back end, if you cashed everything, then there wouldn't be a purpose to cashing in the first I

**Emma**  20:41  
think the biggest thing is it's very expensive to very expensive. Yeah, like monetarily. Yes, cash is much more accessible to serving requests much quicker, but it is very, very expensive. And that's kind of why you have to be really careful about How you add new values to cache and how you evict data from cache and we'll talk about cache eviction policies soon

**Kelly**  21:08  
caches a cache is an important part for progressive web apps, isn't it? I think, isn't the data. Yeah, cache so that it doesn't have to keep on loading every single time when you change to a new page. Yeah,

**Ali**  21:20  
it stores a lot of the information about the page in the browser so that when you go back to the page, that information is already loaded. And so then you can actually access that site or parts of it when you're offline. Okay, that's what I thought.

**Emma**  21:35  
Yeah. For sure. What about CDN

**Kelly**  21:38  
content delivery networks? Kelly, you are networks? I don't know. I mean, I just said it the wrong thing. You have a new content distribution network and as a delivery network, but

**Emma**  21:49  
I thought it was a content delivery network too. But Wikipedia lied to me.

Unknown Speaker  21:52  
Oh, or maybe I lied to Wikipedia. I don't know. Wait, what? content delivery network?

**Emma**  21:59  
No, it's definitely content. Delivery Network. Why did I write content distribution network? I don't know. In any case, so a CDN is a kind of cache that comes into play for sites that serve a large amount of static media. So you can think of, I think cloud Neri is a CDN, if I'm not mistaken. Yeah. I see like, upload your media, whether it's photos or photos. I don't know. I've seen their videos. I'm not sure because that's not it. It's technically a static thing. But yeah, yeah. Yeah. I don't work with CDM schema, your CSS

**Kelly**  22:32  
Shopify, Shopify uses a CDN to refer all of its assets. Yeah. Yeah. So it's all your theme assets and things that you upload your styling your

**Ali**  22:42  
j s files to Yep. And being true.

**Kelly**  22:47  
I was gonna say, which is something that was hard for me to learn at first when you're using a CDN, because, again, if you make a change to that file, it's cached. So you have to break that cache in order to see that update. Twitter cards.

**Ali**  23:01  
Yeah, Twitter card cache. Yeah, hard. If you tweet something out and the preview doesn't work properly for a tweet, you have to add like a query parameter onto the URL to make it work. So sometimes you'll see on my tweets, I have like my blog post, and then query parameter i equals j or something on there. And that's just to clear the Twitter's cache.

**Kelly**  23:23  
LinkedIn is even worse about it. Oh, really. You can't even break the cache, it's at times, you literally have to wait seven days for declare, oh, that's painful.

**Emma**  23:33  
Speaking of what happens when we update our data, let's talk about cache invalidation. So if you go and modify your data in the database, we need to invalidate those in the cache or it can cause inconsistent application behavior like we just mentioned. So this process of invalidating these out of date, resources is called cache invalidation. And there are three different types that we can use. So the first Here's the first through. The first is right through cache. So with this scheme, data is written into the cache and the corresponding database at the same time. So you're doing both. While this minimizes the risk of data loss, because every write operation is done twice before returning a successful response to the client, the schema has the disadvantage of higher latency from array operation. So because we're doing this twice, it does take a little bit longer, but at the, you know, the trade off is you are getting data replication. The second is right around cache. So this is kind of similar to write through cache. But data is actually just written directly to permanent storage. So it bypasses the cache. And this can reduce the cache just being flooded with the write operations that aren't necessarily going to be read. But the disadvantage here is a read request for recently written data is going to create a cache miss. So a cache misses like oh, we're gonna check the cache and if this exists, return up, but if not, we have to go to the database that's called a cache, cache miss getting dumped Alright.

Unknown Speaker  25:01  
So you know, this is good, it keeps our cache clean and being.

**Emma**  25:08  
It keeps it from being overrun with new requests. But at the same time, if we're trying to read a lot of newly written data is we're gonna have a lot of misses. So the last one is just a write back cache. So data is going to be written to cache alone. And that's it. And once it's written a cache, our client gets the successful response. And we do this permanent storage writing later. So after specified intervals, or under certain conditions, at that point, let's take everything in cash and put it into the database. And this is great if you need low latency. So if you need really, really fast write operations, but the disadvantages, you risk data loss. So if your servers crashed and you haven't written the data from cache to

Unknown Speaker  25:52  
your servers, you're going to lose all that data. That was a lot was a lot.

Unknown Speaker  25:57  
Yeah, caching is complex.

**Emma**  25:59  
Well, We're not done yet though, because caches very fun. Let's talk really, really quickly about cache eviction policies. So the premise of cache eviction policies is at some point, we're going to have to decide which elements in our cache need to be evicted or kicked out. And there are several different ways that we can do this. So we've talked about FIFO, and LIFO. In previous episodes, first in first out or last in first out, we talked about this with stacks and queues and our data structures episodes. So in first and first out, we get rid of the first block that was accessed first. That's a lot of First, the first block that was entered into cash is going to be kicked out, regardless of how often it was accessed or how long it's been there. lastin first out was the opposite. So the one that was just accessed most recently is going to be kicked out. Again, doesn't matter how often we've accessed it, that it's the one that was just written is going to be thrown out. We've also got Lou Recently Used and most recently used. So these are pretty self explanatory. We throw out the least recently used items first, which seems like a really good cash eviction policy to me. If you're not using it, throw it out. I don't know why you would use most recently used, like, if you're actively trying to access something the most wouldn't you want to keep it in cash? I don't even know why it's a cache eviction policy, but it does exist. And then there's one that really confused me. So we have least recently is at least frequently used. I guess this is confusing for me, because I thought they were the same but least recently used was like the one.

**Kelly**  27:36  
I don't know. I'm gonna be like, I, my guess would be like in terms of historical usage. When was the last time if it hasn't been used in a while, like, oh,

**Emma**  27:45  
okay, that makes more sense, because I'm like, why would we throw out the one that we're using all the time? That's not what most recently uses. It's like the one we just accessed. Yeah,

**Ali**  27:53  
exactly. And so most recently used would discard. So if all of your page than your timeline is cached or something or your timeline is your most recently added thing to the cache, you'd want to clear that in order to make space for new tweets. So that's probably when most recently used cache invalidation comes in, if that makes sense.

**Emma**  28:16  
Yeah, that makes sense. Yeah. And then least frequently, so they actually count how many times an item is accessed. And those that aren't used, often aren't discarded first. But then we just got random where they basically say, you know, screw it, just pick a random person in your out. Don't know how well that works. That kind of, I don't know why you would use that. But you know, it exists if you're

**Ali**  28:38  
wanting to learn more about caching. Nick Craver, who works at Stack Overflow has this like, amazing blog post about how they do it at Stack Overflow. We'll link it in the show notes. But in this article, there are some reasons for not caching. So first off, caching comes with some costs. So you can purge values, if and when needed. And that's kind of what we've been talking about that that's a tricky process. Also, the cache uses a lot of memory and you have to pay for memory, even though it's become a lot cheaper over time, still something that you have to pay for. And then also the speed of access to the cache, and then additional time and mental overhead writing code and debugging something that's more complex. Because caching something's usually more complex than just having like Standard Code, or storing it in a database like normal. So in order to decide whether or not you should use a cache, you should really think about what you're saving how much faster it is to hit the cache than it would be without it. And if it's worth the storage and the cleanup in order to implement this, so you should really think about whether you should be caching before you do it.

**Emma**  29:56  
It's a good point and I'm really thought about that.

**Ali**  29:59  
Yeah, so This is an amazing blog post and it shows you like all the technical details of exactly what kind of servers they use for caching what databases they use, they use Redis, which is what I've typically used for caching in the past to know is that what you've used before to

**Emma**  30:18  
know I've never done it, okay, I use MongoDB. I

**Kelly**  30:21  
have MongoDB. It makes sense to Heroku.

**Ali**  30:24  
Okay. Um, so Redis is like, its key value pairs like NO SEQUEL, like MongoDB, but I think it's specifically made for I've only use it for caching. It's not like MongoDB where you'd normally have all your data stored in there, like Redis it's really I've only heard of it being used for cash. I

**Kelly**  30:47  
really wish there was one time that I added it to this terrible. I couldn't figure out how to keep something alive in running on Heroku. So I added Redis had an error in it. So I kept on triggering the error message to the app never went to sleep. So it never goes to sleep. Terrible. Don't do that.

**Ali**  31:09  
Oh, no

**Emma**  31:10  
life lessons from Kelly.

**Ali**  31:12  
Yeah. Now I'm looking at whether or not people use Redis. For other things. Yeah,

**Emma**  31:17  
I feel like we could do a whole episode on databases, we probably should. Because there's just so much to cover. I do want to maybe switch a little bit in saying that in the same areas servers, but we're talking about data partitioning. So when you've got all these different servers, how do you how do you break up all this data? How do you decide the way that you want to store it? So data partitioning is a technique we can use to break our big databases into smaller parts. So this allows you to improve your manageability your performance, availability and load balancing of your applications. And there are a few different partitioning methods that we can use. The first is going to be horizontal partitioning. so in this situation, work Going to put different rows into different tables. So let's say that we are storing different places in a table. So yeah, if we think about zip codes, maybe want to store zip codes less than 10,000. In one table, I'm places with zip codes greater than 10,000 are stored in a different table. You also might have here this called range based partitioning, because we're storing different ranges of data in different tables. You also might hear horizontal partitioning is data sharding. This sounds like a tear, tear. I've never said that word out loud. And I really hate it. Who came up with Yeah, but the big problem with this approach, I'm not going to say that word again. The key problem with this approach is that the value is ranges used for partitioning isn't chosen carefully, then your partitioning scheme can lead to unbalanced servers. So you just have to be pretty careful about that. You know, the opposite I guess is this is vertical partitioning. So in the scheme, we divide our data to store tables related to specific features on our system. So let's say we're building Instagram, when we need to store data related to building users or photos that they upload the people who follow, we might want to place all of our user data on one database server, maybe we want to have all of our friend list on another server and our photos on a third server. The biggest problem with this approach, though, is that if our application experiences additional growth, we might actually have to partition databases across various servers, this can be a little bit tricky. The last one is directory based partitioning. So this kind of works around some of the issues we previously just mentioned in horizontal and vertical partitioning, where it creates a lookup service and it knows your current partitioning scheme. And it obstructs that away from your database access. So if you want to find out what particular data entry lives, you just query, the directory server that holds this map between you know, the tableau key and database server. That one's a little abstract for me, I never fully understood it. But it's it's an interesting concept. You know, there are many other things we could talk about with this, we could talk about partitioning criteria. As a web developer, if you're in a front end interview, a systems design interview, you probably don't need to know everything about partitioning criteria. I think just being aware that these things exist. And when you might want to choose vertical partitioning over horizontal, like those might be interesting. But I wouldn't say that you need to know exactly what composite partitioning is, or whatnot. We should, however, quickly discuss redundancy and replication, because these are very important that you're definitely gonna want to mention in your interviews. So redundancy is just going to be making sure that you have copies of your data and components. So if you have one server that fails, you have a second one that can ensure that you don't lose your data. I guess that's the biggest thing. replication just means sharing information to ensure consistency between these redundant resources. So if you have two servers that have redundant information, just make sure that they're installed sync with each other. So, you know, if server one goes down server two can take over and have the same data.

**Ali**  35:05  
And very, very important so that if you drop the production database, you have a copy of it. You could also set it up so that it automatically creates copies for you too. So you don't have to do that like manually or anything like that.

**Emma**  35:19  
Nice. So Allie and previously mentioned SQL versus no SQL. Alec, could you give us first of all, what are SQL and no SQL? For those listening? Who have no idea? I've never heard of it. And what are the differences?

**Ali**  35:31  
For sure. So we can even go beyond no SQL and SQL databases here to relational databases versus unreliable databases. But we can kind of group these into SQL because most SQL and no SQL because most SQL databases are relational databases. So relational databases store data in rows and columns.

**Kelly**  35:53  
Each row

**Ali**  35:54  
stores all the information about one entry. So if we had database for Twitter, each row would be one tweet or one user. And then the columns would contain all the different data points about that thing. So our username, our profile picture,

**Kelly**  36:15  
the date that

**Ali**  36:17  
our user was created, all those sorts of things. And for a tweet, it would be the actual tweet text, it would be at the time that that tweet was tweeted. All those types of things. So each row contains the information about one individual thing. And each column has the different data points about that thing. It's really like an Excel sheet. Yeah, just for larger data sets. So some of the most popular ones are my SQL, Oracle SQL Server by Microsoft, SQL, I, Postgres Maria dB, Postgres is like my, my favorite database to work with. I love Postgres. It stores it in tables and Each row represents one thing like we talked about. And the different rows can relate to each other across tables. So if I have a tweet, it belongs to a user. And so we can store that that tweet belongs to that user, we use something called a foreign key. And that foreign key is the ID of the element, that rule is the parent of the child one. So we always have these like Parent Child relationships in programming where the parent has children. And the same is true within SQL relationships. The thing with SQL databases is that each record has to conform to a fixed schema. That means that if we have tweets, all of them have names all of or they don't have names, all of them have texts, all of them have an author, all of them have a time that they were created. And all of them have likes, all of them have respected replies, they're super, super standardized. And they're represented the same way in that database row. So the data needs to be structured, it needs to fit a prescribed format. These are vertically scalable, so you can make it so that the server takes up more and more space. And they're acid compliant, which means I don't know how to pronounce this, but I had to miss out a mystery. Yeah, Item A city. It's like Adam with an SD. Yeah,

**Emma**  38:33  
I'm pretty sure it's just the ability to break things up into smaller pieces, right?

**Ali**  38:37  
Yeah, no, I definitely read the word mentally a bunch of times, but just not out loud. I was like, I don't know how to say this. Consistency, isolation and durability.

**Emma**  38:48  
And acid compliance is something you should definitely be aware of. I think that's important in an interview to know at least conceptually, but it's essentially just a set of properties of database transition. actions that guarantee validity even in the event of errors or power failures,

**Ali**  39:04  
yeah. And then no SQL databases, they are the rebels of the database world, you can store the data in any format you want. So instead of having to fit these rows and columns, it's more like storing in a lot of them. It's more like storing a JSON object, or something along those lines where there's usually key value stores. Or there's also document databases where you can just store data in chunks in their, their wide column databases. And so instead of tables, those ones have containers for rows, graph databases, those are becoming more of a thing as well, where there are nodes and then relationships in between the nodes. So no SQL databases can look really different depending on the database that you're using. The one that I have used the most Most is Mongo DB. And then Redis, which we talked about earlier, which is especially used for caching. And then another big one is Cassandra, that one is really well used within the data science community, in my experience. How about you all? What are your experiences with no SQL database? I have not used them.

**Kelly**  40:23  
Yeah, I don't think I have any experience with no SQL databases. But I love that one's just named Cassandra.

**Emma**  40:30  
I like the Baltimore person. Cassandra is boring. I like Voldemort.

**Ali**  40:35  
Of course you do whatever. Yep, that's wild. I've never heard of that one. I'm

Unknown Speaker  40:44  
like eight users.

**Ali**  40:52  
We might be shouting out some database that actually exists.

Unknown Speaker  40:57  
Some dude created in his face. A

Unknown Speaker  41:02  
side side project.

**Ali**  41:05  
Wait, okay, no, it's actually coming up Voldemort DB project Voldemort. Oh, it's by like Stanford. It looks like this is a legit thing. I've just never heard of it before.

**Emma**  41:17  
The name that Voldemort interesting.

**Ali**  41:20  
Wait, this website though is like

**Emma**  41:22  
project Voldemort calm it. That's a sexy website.

**Ali**  41:27  
Yeah. 2.4 thousand

**Emma**  41:28  
stars shout out to Voldemort. Oh,

**Ali**  41:31  
okay. Oh, it's an open source clone of Amazon's Dynamo of a

**Kelly**  41:38  
NACA, so what exactly are we promoting here?

**Emma**  41:41  
So one of the things is no SQL database This is that they kind of sacrifice acid compliance. For performance and scalability. This is going to be really, really important. If you are designing something like Twitter, for example, versus a, I don't know, if you're designing Amazon's Checkout, you might want to be acid compliant. If you are working on building an app like Twitter, it can be a little bit less reliable, right? Like, it's not a huge deal of users are seeing different tweets. So long as the performance is really, really fast, people would expect it to be fast. So at that point, you might wanna use NO SEQUEL. But for applications that are dealing with maybe financial data or things like that, you might want to go with something acid compliant.

**Ali**  42:24  
Yeah. also thinking about the structures of your data, whether it fits well into the rows and columns format, or not like, is every single thing going to have a standardized rows and columns? So an example of an industry that uses no SQL databases a lot is the medical industry because everybody's medical records are going to be different. For example, not everybody should have Well, yeah, not everybody's going to have a column that's like, has this person had the flu? true false, like there's not like a Boolean field for every single How much it would be ridiculous? Can you imagine? Every single alien? Everybody has this like,

Unknown Speaker  43:09  
true false, that it has not happened, then

**Ali**  43:15  
this is the most efficient use of data, but everybody's medical records are gonna look really good. So usually no SQL databases like are used for that. That's what we use, at least.

**Emma**  43:25  
Oh, my goodness. Well, I feel like our brain cells are dying from this episode, because this is a very heavy topic. If you're still listening. Thank you. You know, I think originally we were going to go into a fully fledged example of how would you design Twitter? I don't necessarily think we need to I think maybe you could talk about the general process of what you might go through if you get a question like that. So when I got this kinds of questions on my systems, design interviews, I always started with functional requirements. So what are the things this system absolutely needs to have? So if we're doing Twitter, users have to be able to post new tweets, they maybe have to follow other users, they have to be able to favorite tweets, there should be a timeline feature. And also our tweets have to be able to contain photo and video. So these are the things that your system has to do. Non functional requirements are next. These are things that aren't functional requirements. So for example, our system might want to be highly available. That might be one example. From there, you can talk about storage. So how many tweet favorites today? Are we going to have to have? How many tweet views are we going to have to have? If you're doing a front end interview? What I've noticed is there going to be less data heavy, so you won't necessarily need to calculate latency or how much storage we'll need. But it's important to be aware of the high level concept. Why would you choose my SQL MySQL, why would you just SQL versus no SQL? Should we have load balancers, things like that, but in my experience, you won't need to be able to calculate how much cash You're going to need to have one other thing you might want to focus on for your interviewer systems API's. So what does it look like when you post a new tweet? What do you need maybe an API key, and maybe you need the actual tweet data, the location, things like that. And then that's where you would get into the system design. So you know, Twitter, for example, is a very read heavy system. So you're definitely doing more reading than you are writing. So you have to account for that in our distribution, our load balancing our storage and things like that. We're going to need you know, file storage for photos and videos. Maybe we want to use data sharding based on user ID I can't say that word I'm just over it.

**Kelly**  45:40  
So you know, when you I think it's important to specify for data shorting is sh AR D IMG.

**Emma**  45:50  
Yeah. What are we all 12? Maybe it's just me.

Unknown Speaker  45:55  
No, we absolutely are. 12 we're seriously who decided on that word? I don't know.

**Emma**  46:01  
I would not want to meet them. Maybe I would actually I have a 12 year old.

Unknown Speaker  46:07  
Well, it does kind of make sense like shards of glass. They

**Kelly**  46:10  
could have picked right wintering. Do you have to like make it into a verb? Yeah, well, yeah,

**Emma**  46:16  
if you don't want sharding is the colloquial term. I'm not gonna explain it on this podcast.

**Kelly**  46:22  
But you mean we're not gonna link it in our show notes? Maybe? Um,

**Ali**  46:32  
maybe we should just leave

**Kelly**  46:33  
it at that. No, well, I'll just leave it at that. All you need to know is that when we're referring to data starting it is sh AR d i n g. Let's move on. Yeah, anyway,

**Emma**  46:46  
I think this is a very hefty episode on systems design. How can you learn more about it?

**Kelly**  46:54  
I don't know. How can you learn more about it?

**Emma**  46:56  
Um, so the way that I learned some simas through educative IO course, it is kind of expensive. It's $67 for the course, or you can pay $17 a month. But to be honest, there weren't a lot of systems design resources out there. I liked facets of this educative course, but I will say overall, the structure was pretty problematic for me. I know, Ollie, you also had took issue with this,

**Ali**  47:20  
I thought that the education model for it was really strange, not well thought out. But that being said, I think that the information on it was like, very unique and not something that I've seen elsewhere. And so I have like mixed feelings about it. I think that you'd probably have to get like a book elsewhere to get the same information that was in the course.

**Kelly**  47:42  
But

**Ali**  47:44  
the course itself wasn't the best structured thing I've ever I've ever taken

**Emma**  47:48  
awesome either. There's also a Free Code Camp article on systems design, we'll link in the show notes. I don't remember if I read it. I feel like I definitely read it because I listed it Hear, but I honestly don't remember well enough to know if it's like a super great resource. Yeah, it just seems like there's a lack of educational material on systems design. So I'd be interested if you know of any system design, courses, books, blogs, etc. Please let us know on Twitter. We're happy to link them in a shutdown spell

**Kelly**  48:18  
we move into shoutouts Yes. La You go first. What's your shout out?

**Ali**  48:24  
I have my shout out to egghead I've been having a ton of fun building videos for them. They're just super quick. And I'm just doing like fun tips that I have. I have a little list of like hot development tips that I'm working through to make videos on and I'm just having fun doing it. So my shadows Egghead. How about you?

**Emma**  48:46  
My shot this week goes to to be a sponge Snyder. He is awesome. He has a ton of really great resources He has created he actually used to work at Spotify. totally unrelated, but he created a platform called some please Which is beautiful it is you can use it to build portfolios and personal websites and things like that. I think it's WordPress based. But he was super nice and gave me a free trial of it. But yeah, I would highly recommend going to check that out if you're looking for a really beautiful tool to design and build a portfolio with.

**Kelly**  49:21  
How are you killing? I wrote a book. By the time this episode launches actually, the day this episode launches is the day I launched my book. So perfect timing. I decided to write a book about getting started with freelancing and how to grow your freelancing career and become more confident as a freelancer. And it's all inspired by Emma in her writing her book, she very much told me I should absolutely do this. So here I am. I'm still writing the book at the time of this recording and it's really fun and it's a lot of work but I'm super excited. So you can go to start freelancing dot today. To purchase it. You got dot today. Yeah, what is that called an extension? What is a TLD? top level domain?

**Ali**  50:06  
What is that?

**Kelly**  50:08  
It's like.com or

**Emma**  50:10  
o.oh. Interesting. We should do a whole episode on domains. That'd be boring, but I would listen to it.

**Ali**  50:19  
We can go into the history of like, demand squatting. Yes.

Unknown Speaker  50:22  
That's gold. The how the

**Ali**  50:26  
old thing of like buying domains and selling them for a lot of money.

**Kelly**  50:30  
I bought the taproom for $2,000. So,

**Ali**  50:32  
yes, there you go.

**Kelly**  50:35  
But I don't have to pay $2,000 anymore for it. I paid $12 a year. So it was a one time it was an investment. Anyway. So yeah, let's close out this episode. If you liked this episode, tweet about it. We would love to read your feedback. We now have a Patreon you can support us by visiting patreon.com slash Ladybug podcast. This month's Ladybug book club his book is make it stick by Peter C. Brown joins us on this discussion by joining our Goodreads group and learn more about future book club books this season by visiting our website at Ladybug Dev. And also Emma is actually rebuilding your website right now. So by the time you listen to this episode, we should be live. So I'm excited for that.

**Ali**  51:17  
So you can actually see the show. Yes,

**Kelly**  51:19  
you'll finally be able to see the show notes and transcripts really excited about that. You'll also be able to comment on all of our episodes so you can give us all of your thoughts, questions, or whatever else. Be nice, please. Yes, sir. We post new podcasts every Monday so make sure to subscribe to be notified and leave us a review. We'll see you next week.

There's a thing where as soon as one person starts Going as everyone else feels the need to do it.

Transcribed by https://otter.ai
