**Ali**  0:00  
Computer science concepts like data structures and algorithms can be super intimidating, especially if you're cramming the night before an interview. And this episode will discuss common algorithms and data structures and give you some tips for your next whiteboarding challenge.

**Unknown Speaker**  0:16  
Welcome to the ladybug podcast. I'm Kelly. I'm Allie. And I'm Emma. And we're debugging the tech industry.

**Emma**  0:24  
Hey, Kelly, have you heard about this cool tool called AWS amplify? Tell me about it. It's a suite of tools and services that enables developers to build full stack serverless and cloud based web and mobile apps. You get to use whichever framework or technology you want on the front end. That sounds cool will help me get up and running with things like hosting. Yeah, authentication. You betcha. Managed graph QL. Totally. How about server list functions API is machine learning chatbots file storage. Yes to everything amplifies but especially in a way to enable traditionally front end developers like yourself Kelly to be successful because you can use your existing skill set to build a real world.

full stack apps done in the past would require deep knowledge around backend DevOps and scalable infrastructure. The amplifi console also allows you to use a GitHub repository to deploy to a globally available CDN. With ci and CD built in. It's super cool. Where can I learn more if you want to learn more about AWS amplify Mr. AWS dash amplified

**Unknown Speaker**  1:20  
github.io

**Ali**  1:22  
we want to ask you a quick favor. Before we get started. Please leave us a review on Apple podcasts. It helps new people find out about the show. Each week will select one reviewer to win a buck from Smashing Magazine, which we're super excited about. So let's get started with the the episode. Let's first talk about our experience with data structures and algorithms. And I want to start with Kelly here.

**Emma**  1:44  
I think Kelly was an expert in it, right?

**Unknown Speaker**  1:46  
Yeah, I'm an absolute expert. Actually, no. Okay. I have zero experience with this. So when we just say you have

**Kelly**  1:52  
a big zero experience, so with it, I tried to make a tech joke and it didn't work because it's big on notation

**Unknown Speaker**  2:00  
I was going to you and you just threw me off because I don't know anything.

**Emma**  2:04  
I don't realize that after I made the joke.

**Unknown Speaker**  2:06  
So yeah, this episode is kind of fun for me because I have never had a public experience the proper whiteboarding interview. And because I'm a company, I'm not going to interview myself. So I don't know any of this. And I'm really excited to basically have a teach Kelly everything about algorithms and data structures episode.

**Unknown Speaker**  2:25  
I'm excited for it, too.

**Emma**  2:27  
I

**Unknown Speaker**  2:28  
started my career at IBM. So I went through, I wouldn't say it was a white boarding interview for my first full time role. But once I got there, and I interviewed internally for different teams, I actually went through the whiteboarding process then as an employee, which was strange, I interviewed at Google as well, and I've interviewed other companies like Facebook and other larger companies. But most recently, I work at LogMeIn, which is it's not a huge company, but I still did do some semblance of live coding. It just wasn't to the extreme of like a Google or Facebook

**Ali**  3:00  
Awesome. So for me, I actually dropped out of computer science for the data structures and algorithms class. It's like a very famous weed out class across colleges. And I did, actually, okay grade wise in the class, but I was putting in so much work, and everybody had so much more experienced than me. And I felt like computer science just wasn't for me based off of this class. But I ended up self teaching it after that, and I've also interviewed at Google and a couple other big companies, but I don't like interviewing, so I don't I don't do it.

**Unknown Speaker**  3:35  
You know, how you get out of the innervating. You just don't change jobs. You just start to success.

**Emma**  3:44  
Great career advice. Thank you for I forgot to say actually went to school for computer science. So like, technically,

**Ali**  3:53  
you're talking about,

**Unknown Speaker**  3:54  
I mean, let's say kind of a big deal in the sense that like, I should have mentioned that when you asked what my experiences but I didn't even think about it. So I

**Emma**  4:00  
Technically went to school for this. I will say while I learned it in school, I didn't retain much of the information I had to kind of relearn it as I had to interview so I'm excited to walk through some of that today. You know, for some reason they didn't teach this in my psychology undergrad. What I know why they should have just dropped like the Freud conversations or like the the BF Skinner conversations and throw up dropping famous names in psychology. I took IB psychology, I was thinking about being a psych major. And then I went into this, which means that I employ lots of psychologists. Plus, we all just read atomic habits, which talks about Skinner a lot. It does to be bring conditioning is real.

Plug for our book club, because we're reading atomic habits as our first book, which by the time this episode is published, it's already out so you should go listen to it.

**Unknown Speaker**  4:52  
Yeah, is it? I don't know.

**Emma**  4:54  
We'll find out. I don't know. We'll find out. Why don't we actually talk about the things we said we're gonna talk about?

**Ali**  5:00  
Okay, awesome. So I wanted to start off with talking about what algorithms are. And I'll give it a TLDR or too long didn't read short answer what an algorithm is an algorithm is a standard way of solving a problem. And they're usually multiple different algorithms that you can use to solve any problem. Some are better than others. They're essentially a step by step solution. People use the analogy of a recipe a lot, that the algorithm is like a recipe for solving some sort of problem. These can be implemented across programming languages, so you don't need to just use JavaScript to solve these or c++ or anything like that, in theory, you should be able to solve them or implement them across different programming languages.

**Emma**  5:44  
So I think that's really good. And I think the concept of recipe is very straightforward. And I think the way I learned it was discussing how to make a sandwich like a peanut butter and jelly sandwich because if you are not very explicit in your instructions to a computer, there are not going to You're talking about and so algorithms are really the steps that you take to solve a problem. And with all of these different steps, there are implications in regards to time and space. Like how how much memory you're using, as well as the runtime performance of your algorithms. And you've probably heard in the ecosystem, these terms floating around now Big O is the most popular. So we'll discuss that one in a second. But there are also two others. And those are big omega and big data. So we'll get some high level definitions. Bigger was the one that you're probably most familiar with. And this is an asymptotic limit, right? I think it's like the limit. So as you increase the input size to your algorithm, the data size, how fast does your algorithm grow in regards to performance? Does that also cover space and time or is adjust for performance,

**Ali**  6:54  
both space and time. So the big reason that we use big O notation Is that it's really hard to generalize the efficiency of an algorithm. If I say that my this program runs in one second on my computer, it could run very differently on somebody's cell phone, it could run very differently on some massive server or supercomputer somewhere. And also with different inputs, like if you have an array with two items in it, or an array with 1000 items in it, or an array with 2 billion items in it, that algorithm is going to take a very different amount of time to run. And so big O notation is a way of standardizing how we describe the efficiency of that algorithm. So ignore the input size, ignore the computer that it's running on. How is this going to scale as we have more and more inputs to that algorithm? So it's a way of generalizing these and we use like families of efficiency to instead of seconds or anything like that. So they're different, bigger families that different algorithms fall into.

**Unknown Speaker**  7:57  
Kelly, can you tell that Ali as a teacher No, never, never would have Yes. No, it's it was a really clear explanation. So bingo is the one that's most notable because I believe it describes like the worst case runtime

**Ali**  8:11  
yet you were being super pessimistic when we use big O notation. We're thinking about only the worst case scenario, which

**Unknown Speaker**  8:17  
sounds like a really good for me.

**Unknown Speaker**  8:19  
Yeah, right. But in in, in contrast, big omega is the asymptotic, lower bound. So this is like, at least it's going to be this performance, I believe, right? And then when we talk about big data, it talks about the does this algorithm kind of fit between these upper bound and this lower bound? So does that fit between big and big omega?

**Ali**  8:42  
Yeah, those ones I've really not used. I studied them when I was studying for Google. But other than that, I have not really looked too

**Unknown Speaker**  8:51  
Yeah, those. If you're studying I would only focus on bigger, don't focus on big omega or big data, but it is generally good to understand that there are different kinds of bounds When we talk about algorithms, and there's a really great chart will link it in the show notes. It's the big O complexity chart. And it describes the runtime of different big O notation. So if we think about something like n factorial, we're taking, let's say a number, let's take five factorial means you multiply it by every number that precedes it. So five times four times three times two times one. And the big O of that is pretty damn high. It's like that's a really bad runtime for your algorithm. If, you know if you have 100 items, that's, that's a huge, huge number, right? So that's going to be a horrible runtime versus something like oh event, as you increase the number of inputs to your algorithm, it's just going to be was it linear is that we call event linear Yeah, linear time.

**Ali**  9:50  
So something like doing a single for loop would be of n. If you have 100 items in an array and are looping through it, it's going to run 100 times. If You have one item in the right, it's going to run one time, if you have 1000 items, it's going to run 1000 times. So that's where it runs the same amount of time as the number of inputs you have over one is constant, which means that no matter what your input is, it's only doing one thing. So if you're passing in an array with 1000 items, it's still just console logging hello world or something along those lines, I'm using JavaScript turns, I don't know, using JavaScript errors, but I guess I'm spending too much of my life in JavaScript world right now,

**Emma**  10:29  
Constantine was kind of like what we all shoot for, right. And this would be something like a variable assignments like var x equals one this, it doesn't matter how much data we're passing our algorithm, this is just going to be a constant time. And what we do is we, we essentially walk through all the lines in our algorithm, whether that's a function, let's say we have a function, and it has a variable declaration. Let's say it says var x equals one, and then we have a for loop that says, you know, from zero to n, I don't know just console log the value of n, something very simple. What we do is we essentially walk through all the lines in our code And we see what is the bigger runtime for this? Well, we just stated our variable declaration is constant time because it doesn't depend on our input. But our for loop, like Alec just explained is going to run and time. So that's a linear, or, yeah, linear time, I'm totally getting tripped up now. And what we do is we we essentially look at, which is the worst Big O runtime, our for loop is going to run more times than our, our constant time declaration. And that's, as a result, the worst or the most on performance within our algorithm, and as a result, this is going to be the value that we take. So we don't even care about anything. That's more performance. We don't care about our Constantine variable declaration, all we care about is the fact that our for loop is going to run n times. So our overall runtime for our entire algorithm is the worst case which is Oh, Ben.

**Ali**  11:47  
Yeah. And on top of that, we can drop the coefficients and the constants. So if you are doing something like three n plus one times or something like that, the That would just be an efficiency. We can simplify it down to those kind of families instead of getting a real niche there.

**Unknown Speaker**  12:08  
And these are this is very confusing, especially for beginners to understand why do we drop the constants? Why do we take, like the worst bingo value? And we're going to go into all the little secrets and nuances of calculating the performance, the runtime of these things, but we're going to link some really good resources for you down in the show notes.

**Unknown Speaker**  12:27  
Yes, it's going to check out those resources. And that's me.

**Emma**  12:31  
Kelly, could you now reiterate exactly what we just told you? Like? I'm kidding. But do you actually do have a little bit better understanding when we say bingo, do you understand what that means?

**Unknown Speaker**  12:42  
Yeah, no, that makes sense to me. I think what's, what's maybe throwing me is, am I having to manually calculate this out.

**Ali**  12:49  
So you look at your code, or look at the algorithm, the recipe for the code that you're going to write and you based off of that code, you would In for the big family that that algorithm or your piece of code falls into. So if there's a for loop, then it's probably n if it's a nested for loop is probably n squared. Okay, there are kind of these patterns that you noticed and you use those to group your algorithms or your your code into these bigger families.

**Emma**  13:22  
Okay, that makes more sense.

And we just need to be clear that like when we say oh of n, n is really just the upper bound, right. So like, in a sense, so let me explain that. So when we have a for that we do like for let i equals zero, i is less than n, i plus plus Well, in this case for is listen, and it's going to run and times if we change that to I don't know, okay? It would be okay. So it's just like an arbitrary value that we are setting for things and this gets more. This becomes more important when we have nested for loops. And this is going to kind of lead us into our first algorithm, which is called bubblesort, which you may or may not have heard of it is a sorting algorithm. So if we have an array of different integers, we want to sort them From the lowest to the highest, for example, and bubblesort is notoriously bad in terms of bingo performance, and you'll hear it, it's going to be called O of n squared, because for every single element in this array, you have to compare it to every other element. So you're doing n times n comparisons, you're running through that list for each item, comparing it to every other item. So that's where we get the O of n squared. But in cases where you have nested for loops that are on different numbers are like a different set of numbers with different values. Let's say we have two arrays, one is of size five, and one is the size of seven. If we have two nested for loops, one is the outer one, for example, will run five times in the inner one run seven times. And you can't just say that's n squared, because those are two different values, right? So you would have to assign different ones like oh of, and M, for example, because they're two different values.

**Ali**  14:52  
Yeah, sorting algorithms are really common family of algorithms to know I for me, I heard that a rule that you're supposed to know, to good sorting algorithms for interviewing I don't know if you all have heard that rule either. But so I mostly memorized like merge sort and quicksort when I was interviewing.

**Emma**  15:14  
Yeah, I would say that's right, like bubblesort is really something you would just learn is in terms of like, why is it so bad? And why is it such a joke that like even famous people with zero technical knowledge, understand how bad it is? Yeah, if you're starting out, or if you're practicing for a whiteboard interview, I would recommend knowing mergesort and quicksort. And those are primarily due to the fact that they are dividing conquer algorithms and not like brute force algorithms, if that makes sense. I don't know if that's the proper term for them. But the essentially is you're breaking down the problem into smaller and smaller partitions, until you can't divide it into any smaller partitions and then you build it back up. So divide it first and then conquer it second.

**Ali**  15:52  
Yeah, definitely. And you're breaking the problem into smaller, smaller problems until the problem is easily solvable, and then you're putting the race back together. bubble, sir is probably the one that you if you were to ask a brand new coder, how to start an array, that was probably be how they would do it because it's a really brute force for brute force algorithm. Words are so hard. And I am also going to link in the show notes, this really awesome visualizer that shows all these different algorithms and visualizes them really, really well. So I am going to link that in the show notes. I think that that's really great, especially for these sorting algorithms.

**Emma**  16:33  
Yeah, for sure. We just mentioned the couple. So bubblesort. To visualize it, just take, let's say we started the first element in array. Let's say it's a four. Compare it to the next item to its right, and let's say it's a seven. Well, seven is greater than four. So at that point, we don't need to switch them. They're already in their order. But if we move up to the seven now, well, what's the item to the right, let's say it's the three. Well, seven is larger than three, so we have to swap them and we do this until seven gets to its proper position or you know, Like I said, you have to compare every element against each other. So this is very non performance and versus like immersed or quicksort. Like Ali said, You break this problem into smaller and smaller parts until you can't anymore. So like mergesort, you divide each. So take our bigger, right divided into, and then take the left half and divide it into. And so you can't divide any of these arrays anymore until they're all just single elements. And that's the point where we start to sort them and say, oh, is the left one greater than the right one? If it is swapped them otherwise, just merge it back? So like, Yeah, well, we'll link some of these in the show notes. It's really hard to like explain visualizations over a podcast. I didn't expect that.

**Ali**  17:39  
Yeah, it's super hard. So let's just say that merge sort and quicksort are probably the ones that you'll see most often an interview type studying. And those would be the ones that I would learn if I were to learn to have these absolutely awesome. Other types of algorithms that I have seen a lot and I know Google really likes these as well. graph traversal algorithms. So we're going to talk about what graphs are in the data structure section. But essentially, they're a data structure that allows you to have relationships between data in any sort of way. And graph traversal algorithms are for moving from one data item to another data item. And a lot of trying to find like the shortest paths between things like think about Google Maps, all of that runs on graph traversal algorithms. And so those will be things that you would most likely see a lot if you're going to be interviewing, especially at the big companies right now.

**Unknown Speaker**  18:32  
Yeah. And you can take the example of the Traveling Salesman is a very popular well known problem. This is a believer graph traversal, where you have a salesman who needs to visit, I don't know seven houses, let's say and there are different paths to get between each house and each path has a weight to it has a different length. How can he actually traverse all of these houses visiting each house once in the shortest time possible or the shortest distance possible so that that would be a grafter result. Or if you think about a practical example, FedEx or you know the UPS or DHL or whatever package delivery service that you use, they need to optimize their deliveries, especially during the holidays. That's a very popular time for shipping packages. And how do they actually optimize this path? That's a graph traversal type of problem. Definitely.

**Ali**  19:20  
Another one is searching algorithms. So going through data structure and trying to find an element within it. That's something that you may see as well. I have gotten binary search questions in interviews before binary searching is when an array is sorted. You can search within it within smaller and smaller sections of it, finding the midpoint of that smaller section and seeing if your item that you're searching for is greater than or less than that point that you're searching for and only then search that segment of the array and this only works for sorted arrays, but it's a Very common algorithm and something that you might see. So I wanted to find that as well.

**Emma**  20:04  
Okay, so we've talked a lot about algorithms, but they kind of relate really well to some of these data structures. Like we can't talk about graph derosa without talking about graphs. So let's just jump right into talking data structures. Now, certain programming languages have. I don't know, the data structures can kind of change from language to language. This is could be a little bit tricky for us to discuss this. So I think as some of these differences show, while we're talking about these things, let's kind of denote them. So let's just let me bring up an example. So when we talk about arrays, arrays are very common data structure. And what's interesting is that in JavaScript arrays are they're not a finite length, you can just keep adding elements to an array versus in a language like Java arrays have a fixed size. So you actually have to declare the size that it's at instantiation and you can't put anything other than that limit that number of items into your array. I think there's also ArrayList, which is not a fixed size. It's a variable size that that would be more like a JavaScript array. But yeah, I would say razor are probably like the base arrays and objects together are probably the two most common data structures. But just be aware, they do kind of change in terms of behavior across languages.

**Ali**  21:16  
Yeah. And so when we talk about these data structures, and we're comparing whether you should use one for a certain use case or not, we're going to go back to that big discussion. So a lot of the operations that you might do with an any data structure would be insertion. So adding a new item to it, deletion, removing an item from it, searching it, trying to find an item within it. I'm sorting it, trying to put it in order.

**Unknown Speaker**  21:44  
Anything else I'm missing? I can't

**Unknown Speaker**  21:47  
think so.

**Ali**  21:48  
Accessing accessing, so getting one item out of that.

**Unknown Speaker**  21:52  
D is not sir. Oh, I guess that's not searching. Yeah, they are different.

**Ali**  21:55  
So those are the common operations and so when we're talking about these That's going to come into play and decide whether you should be using one data structure and another.

**Emma**  22:06  
Absolutely. So let's get started. Let's just start with the race because it's the most alphabetically.

**Unknown Speaker**  22:13  
It starts with the letter A, I don't know how to English well, and plus,

**Ali**  22:17  
most people are probably going to know what arrays are. So I think they're a good way to start with

**Unknown Speaker**  22:21  
if you're if you think it's also you know, worth noting, like I again, I don't really know from like, the bigger standpoint what these things are, but I'm very familiar with a lot of these data structures. So I think my my base knowledge of what arrays and objects are and things like that are going to be really cool to see okay, what's actually going to be best to us,

**Emma**  22:40  
Kelly, what's your favorite data structure? I'm not answering the question.

**Unknown Speaker**  22:43  
Oh, what do you like? How don't you

**Emma**  22:46  
I know you're a hashmap kind of girl.

**Unknown Speaker**  22:48  
No, I use objects a lot. key value pairs are my gym. Don't tell me they're not performance. Or you will like break my heart.

**Ali**  22:58  
They are and in JavaScript. Especially like objects are a great, great everything. Okay, yeah.

**Unknown Speaker**  23:05  
So let's talk about arrays. So arrays are essentially container objects that holds a number of values in Java, that is a fixed number of values in JavaScript, which is I'm going to be referring to JavaScript because that's what I primarily work in these days. But maybe I'll you can give some information on the Python side of things or, you know, a back end of your language. In terms of inserting something into an array in JavaScript, it's constant time. It's over one.

**Ali**  23:27  
Yeah, with arrays. There's, there's this concept of abstract data structures. So abstract data structures are essentially like sets of rules for how data structures are implemented. They're like the concept of a data structure. And you could implement them across languages. And so traditionally, arrays were these things that you cannot add to without moving them in memory, like they were really efficient because you could put them all in one contiguous block of memory or one piece of memory all together on your computer. And that's changed over time, with the More dynamically, which is where instead of storing the actual item at that index in the array in the memory of the computer instead of storing a reference, and that allows you to add more dynamic information and different types of data to that array. And so that's how that's evolved over time with more dynamic languages like JavaScript. And so traditionally, adding an item to an array was an O of n operation, because you had to copy that whole entire right into a new block of memory. But again, these more dynamic languages like JavaScript, they actually pre allocate memory so you have extra space to add new items to the array and it becomes closer to have one

**Unknown Speaker**  24:38  
You sound so smart because you are smart,

**Ali**  24:42  
pretty good reader know these things like fascinate we, I don't know why. And they're not things that we necessarily use every day as developers. But I think understanding the the under the core of programming language is something that just fascinates me and maybe someday, build my own Language, probably not. But

**Emma**  25:01  
that's okay. That's a lot of work.

**Unknown Speaker**  25:03  
That sounds like a lot of work.

**Unknown Speaker**  25:05  
Hard just started racing at the thought of doing that

**Unknown Speaker**  25:07  
this big cheat sheet that I'm linking in the show notes has common data structure operation. So it basically is a table of all of our different data structures. And it tells you how much time or what the bingo runtime for accessing searching insertion, deletion, those kinds of things are in the average and in the worst cases. So just to kind of like wrap up or raise. So we said accessing is approximate, like, oh, have one for JavaScript, or in general now, searching would be O of n, because think about it. If you're searching for a value, and it's not in the array, that means you've searched every single element, or Oh event, right. That's the worst case scenario. It's not in there to insert. I don't well, insertion we said was of n.

**Ali**  25:52  
Yeah. insertion is close to the end. Yeah. But in programming in languages like JavaScript, it's more efficient than that.

**Unknown Speaker**  26:00  
Correct. Yeah. And same with the lesion, I'd say,

**Ali**  26:03  
yeah. Our next one is going to be linked lists, which are one of my favorite data structures. I wrote a blog post last year correlating link lists to Ariana Grande news, Thank you Next, and got some intent, got some interest on the internet, but had a lot of fun with it. And linkless have kind of become one of my favorite data structures. As a result,

**Unknown Speaker**  26:29  
I will say like that that post, which we will definitely be leaking in the show notes was really helpful for me to understand linkless as well. So you lie to us, you do have knowledge. I told you, I know these data structures, but the technical stuff behind it. I do not know I know how to use things. I don't know why I'm using things

**Unknown Speaker**  26:47  
for the next for the next data structure then.

**Unknown Speaker**  26:51  
No, I'm not. Do not put me on No, no, we're not playing that game. So Alex,

**Emma**  26:56  
can you tell me more about what a link list is?

**Ali**  26:59  
So a link live is actually technically a graph data structure. And we'll talk about what graphs are and a little bit. And what that means is that it has nodes and edges. nodes are pieces of information edges are references to the next item in the link twist in this this case. So each item has a piece of data. And then it also says, Okay, my next piece of data is stored at this place in memory, go look for my next piece of data there. And these are really efficient, because again, like we said, with arrays, they had to be stored in one contiguous block of memory. So you had to have all the amount of memory in one place on your computer in order to create an array of linked lists. They can be stored all across your memory and your computer and so instead of having to re move every single item when you insert to that array, instead with linked lists, insertion and deletion is an of one operation where it's really efficient to add a new item to that link list. So that's why linked lists are used. They're especially useful if you're trying to access data in a sequence. So if you're trying to always access the data in the same order, you're not trying to access items or anything like that, then only list could be great for that. The one thing with them is that they don't have indexing like arrays do. So accessing one individual item is much more difficult. So if you're trying to do that, you should go with an array and said,

**Unknown Speaker**  28:36  
I will say like, you can have pointers though, which is super nice. So what that means is, if you want to search for an element, you can have a left pointer and a right pointer, that star on opposite ends of your list and they each migrate inward towards each other. So in half the amount of time you can see whether or not an item is found in that list, which is really cool. That's a that's a good benefit of using a linked list.

**Ali**  28:59  
Definitely There are two types of link lists singly linked lists, where each node just has a reference to the next item in that link list. And then there's also a doubly linked list where each node points to the previous node in the next one.

**Unknown Speaker**  29:15  
Absolutely. Cool. So let's move on. And let's talk about sets. So I actually don't know too much about sets, but they are quite useful if you are trying to store a set of unique values. So they can be primitive values or object references primitive meaning like, I don't know, like integers or strings. So yeah, they let you start unique values of any type. I believe, like if you pass it in like a list of values, and there are duplicates, it'll just remove them right

**Ali**  29:43  
yet sets are my most underrated data structure. They're one of my favorites. And the reason for that is that searching in them is super super performance. So it's, oh roughly Oh of one to search a set, whereas searching an array or a linked list is going to be You closer to the end. And so if you're trying to see if an item is in a collection of data, using a set is the best option there because it's really, really efficient. So doing code challenges, like with massive data sets, things like Google's code GM, or advent of code sets come in handy is so much in those types of challenges.

**Unknown Speaker**  30:22  
So sets are super useful, and you should definitely be aware of them if you're going to have a whiteboarding challenge. And with that, let's kind of transition into talking about objects, maps and heaps because they're all pretty similar. So objects are just a collection of key value pairs. And we use them for a lot of things, especially in JavaScript, because JavaScript uses prototypal inheritance. So Kelly, do you want to explain how you use objects in your day to day programming life since that, I think is probably your favorite data structure.

**Unknown Speaker**  30:53  
I already said it is. Um, so in, in the case of Shopify in the theme development that we do All of the product data is all stored within an object. So all you have like the key value pairs, you know, the product title, the product description, the product, price, and so on. So you can grab a very specific value within that, that key value pair to display it wherever you need to do that. And there are there are like objects within objects as well, which I'm not going to go into because then it's nobody cares about the details of how everything is set up on Shopify, but I use these very regularly some, so those

**Ali**  31:32  
are objects, and then they're also

**Unknown Speaker**  31:35  
maps. I don't know,

**Ali**  31:38  
Emma, you might be able to correct me on this, but I see maps as pretty much the same thing as objects just within different languages. That being said, maps. Remember the original insertion order, which dictionaries now do in Python, by default, JavaScript objects don't. So that's one difference between maps and objects, but for the most part, they're they're pretty similar

**Unknown Speaker**  32:03  
out of curiosity, is there a particular benefit for remembering the original insertion order?

**Ali**  32:09  
If you want to iterate through them in a certain order, then it becomes handy there, okay? Or you have them sorted in some sort of way. So if you want your object to be sorted alphabetically, and output it alphabetically or something like that, then having a map where the insertion order is

**Unknown Speaker**  32:31  
there for you, that becomes helpful.

**Unknown Speaker**  32:33  
Okay? I'm honestly kind of curious, like, Why even bother at that point? Why didn't they just build it into objects? Like, it doesn't really seem like it makes that much sense to have a separate data structure for that, although I think for the key, you can have primitive and objects as the actual key, which is very interesting. So that's another difference from plain objects, but I'm just kind of curious, like, why did they split that into another data structure and JavaScript,

**Ali**  32:56  
not a no, I'm pretty sure that they're more memory efficient, like object are more memory efficient. And so then maps then would become less memory efficient. It also may be less performant to search for items as well, in maps relative to objects, actually really an interesting conversation because Python dictionaries which are analogous to objects in JavaScript, they used to not preserve search or put order like objects do in JavaScript. But they actually recently with a new version of Python, meet it so that the insertion order is there. So now I guess, Python dictionaries are maps instead of objects. Awesome. So let's move on to heaps. I don't know that much about heaps, to be honest. And I think I previously said that they were similar to objects, but I think that's incorrect. They're actually it's a tree based data structure trees or data structures where there is a parent node. Again, a note is a piece of data. And then they have children. So It's a hierarchical data structure, whereas most of our other data structures that we've talked about have been linear where you kind of can iterate through them or move through them in a linear way. Instead, these trees are hierarchical, where one has a hierarchy, over another. They're like parent and children, kind of like the DOM and HTML, or sorry, not the dominant HTML, but like the DOM in JavaScript or HTML, where there's a parent tag and then children ties within that that would count as a tree or your file structure on your computer. You may hear that as the file tree and there are a couple more specific types of trees. One of these is a heap, which allows you to get the maximum values or the minimum values and have them in a sorted manner. binary trees are also a really common one. These ones are aware, each parent can only have two children. A lot of times you'll see binary search trees, which allows you to sort data really well through that and then access the data in that sorted order.

**Unknown Speaker**  35:06  
So as an FYI, I had an interview question to check whether a binary tree had a broken edge. So whether there was a cycle in the binary search tree. And so if you have a whiteboarding interview coming up, I would highly recommend knowing binary trees binding your search tree is really, really well, especially if you're not doing a front end interview. If you're doing a back end interview, I cannot recommend learning them enough. And even if you are doing a front end interview, I would still be familiar with them. I'm gonna link in the show notes every great egghead course that was done by Kyle shovelin, where he actually builds all these different data structures with JavaScript. And I cannot tell you how much that helped me in understanding binary trees as well as some of the one the data structures we're going to talk about in just a second.

**Ali**  35:47  
So two related data structures that you'll hear talks about in conjunction with each other a lot are stacks and queues. And these are data structures where you access the data in a certain order stacks are like a stack of books where if you put a book on top of the stack, that's the book that you're going to take off first, or maybe a stack of plates. So they're all glass, or they're all like ceramic or glass. And if you take one out of the middle that will break all the other ones.

**Emma**  36:18  
Well, that's not true. Because I do that all the time at home when I'm too lazy. Just pull out the middle. And

**Unknown Speaker**  36:23  
that's not how it works in data world. I love how another tangent but like you're too lazy. So you use more effort to pull out a plate from the middle of the stack.

**Ali**  36:36  
Oh, that's a really good analogy.

**Emma**  36:38  
Yeah. Is it an analogy or is it just Kelly being lazy? I might know but my whole thing is that it takes more effort. So why why can you see you're being lazy because I can't physically hold all of the plates on top of the plate that I want to get to. Is that plate special? Is it like your your Disney print plate or something?

Well, don't you ever stack like smaller plates on bigger plates and then somebody You need a bigger plate, but it's under all the smaller plates. They're in different. Yeah.

**Ali**  37:03  
But I just have to be really careful in that case.

**Unknown Speaker**  37:06  
Well, some of us in Europe don't have large kitchens like you, Kelly. Anyway.

**Unknown Speaker**  37:13  
No, no. The other

**Ali**  37:14  
analogy that people always use is, if you remember in elementary school they have or cafeterias in general, yes. They have those like stacks of trays. And you can take one off the top and they kind of all like pop up a little bit, and then you can put one on top, and they'll kind of sing down a little bit

**Unknown Speaker**  37:33  
later. Yeah, I know.

**Ali**  37:35  
Yeah. Okay. Those are cool. Making sure. Yeah, super fancy. So I hear that as an analogy for sex all the time. And so the methods that you'll see on those stacks are push pop and peak pushes for adding a new item pop is for taking one off and peak is for checking to see what is the next item that would be coming off of it. I don't

**Unknown Speaker**  37:53  
think I've ever used peak before. And what's the bigger runtime for the so like to add a new item? It's just oh of one right? It's just coming Some time, right?

**Ali**  38:00  
So it depends on how you implement them actually. So usually under the hood, you're going to use a link to list and in that case, then it would be over one. That being said, I see a lot of people also implement them with like arrays. And in that case, you would take on the efficiency of the array. So it would be closer to Oh, event. So

**Unknown Speaker**  38:18  
just to be clear, stacks in queues are not indigenous data types in a language. So you actually have to build them out with other data structures. I'm sorry, not, they're not data types. They're not indigenous data structures. So like, you wouldn't have like a stack or a queue data structure in JavaScript, you physically have to build them, whether that's with like, I don't know, like Kyle shovelin and of course, I think build some dysfunctions and you have different functions within that or he builds them as classes or something like that. So we have a class for a stack and then within that you have push, pop peak, and then how you actually implement it like you said, it could be with a linguist could be with an array, definitely. And that's the same that the same is true for a lot of these is that they're like more of these abstract data types are abstract data structures where

**Ali**  39:04  
they're not implemented in every single programming languages. And they might look a little bit different across them. So same thing with like trees. And up until recently sets in JavaScript though now JavaScript has set to

**Unknown Speaker**  39:17  
absolutely. So speaking of stacks and queues, let's talk about the second half that which is cues. They're very, very similar to stocks, with the exception of the the order that things are kind of like, removed. So cues are a first and first out data structure. So we can think of a queue as simply a queue or a line to buy a movie ticket. So the person who's been waiting the longest is closer to actually being able to buy the ticket than the person who's just joined the line. So the first person who gets in the line is going to be the first person who is serviced. You can also buy this using arrays or linkless. But the methods that you use are going to be a little bit different. They're called n q, dq and peak again peak is just show me the the item that's next up to be popped off. Essentially, I shouldn't use the word pop. Show me the next item, that's going to be the next dq item. But essentially, it's to insert and remove items, they just have turned terminology,

**Ali**  40:08  
awesome. And a lot of these data structures that we've been talking about fall under the category of graphs and graphs are data structures that have nodes and edges. nodes are pieces of data edges are references to other nodes. And so, cues, anything that's implemented with a linked list falls under that graph category. Same thing with these trees, they fall into the graph category as well. I think a lot of the recent developments and the kind of first frontiers right now of computer science are going under graphs.

**Unknown Speaker**  40:42  
Yeah, absolutely. I think they're a great type of data structure to know and honestly, once you kind of understand the paradigm of using graphs, it's, you're really going to enjoy using them and you're going to understand why they're more efficient than others. And you're going to recognize use cases as they become apparent in your day to day work.

**Unknown Speaker**  40:58  
Definitely. So

**Unknown Speaker**  41:00  
That's really a high level introduction to all of the data structures and algorithms that you may or may not encounter in a whiteboarding interview. And we'll link again, some really great resources down in the show notes for you. And when we talk about whiteboarding interviews, things that you should know for those, you should know the basic data structures, some of the ones that we've covered like objects, arrays, linked lists, I would recommend doing stacks and queues as well as graphs and trees. And then, you know, we mentioned earlier that if you're going to know a couple of sorting algorithms, you should definitely know to maybe like mergesort and quicksort. Be also going to want to be familiar with recursion, which isn't something that we've talked about in this podcast Valley. Do you want to give a quick overview of recursion?

**Ali**  41:42  
Yeah, so recursion is when a function calls itself within itself. So you're continuously calling the same function. Usually this is so that you can break a problem into smaller problems and then solve that smaller problem with the same sort of function. You have problems that Kind of repeat themselves. recursion is great for that. My caveat with recursion is that it's always going to be less efficient than using a while loop. And you can always use a while loop or like a, potentially a for loop. In place of recursion. recursion is just another way of looping. And I think with recruitment is that it needs to take up space on the call stack, if you're programming languages uses call stack to hold function calls. And so this leads to things like stack overflows, which is when you have too many function calls on that call stack, and it can no longer keep doing that. And so I have had people in interviews in the past tell me not to use recursion, but sometimes people will tell you to refactor to use recursion. It's usually more programmer friendly to use recursion usually the implementation is a little bit cleaner and clearer there. That being said, for the computer, in most programming languages, it's going to be more efficient to use loops. The exception is that being functional programming languages, a lot of functional programming languages have what's called tail call optimization built in. And that means that recursion is more efficient. And those that being said, that's not the case in JavaScript or Python, which are the languages we've been talking about mostly. So production is going to be less efficient in those languages, then easy loops,

**Unknown Speaker**  43:20  
I have one additional note to add about recursion. If you've never done a Google search for recursion, I highly recommend it.

**Kelly**  43:27  
Let us know if you do that and tell us your thoughts. Also, as a quick note, merge sore is going to be one of those algorithms that typically you'll see recursion and it recursively brakes on the problem until you get to the base case, which is another like important facet of recursions. You have to have a base case, say you know, recursively, call myself until I hit this condition. If you forget to base case, you're gonna hit StackOverflow and everything's going to break it's gonna be horrible. So it's important to understand recursion it can be tricky, but highly recommend learning it. And then just a few other tips for your interview. So one thing that I was taught early is to speak what's in your mind because the interviewer, you might know what's in your mind that interviewer is not going to know what you're thinking. So definitely, if you have something in your mind you're thinking about, tell them what you're thinking. And ask for clarification, if you're uncertain about things, because often these these whiteboarding questions that they give you, there are different pieces of information they have explicitly left out because they want you to question it, they want you to think about the problem find, you know, different areas that they haven't explicitly told you about and ask them. So those are two What about you, Kelly and Allie, like, what tips would you give people for interviews? I have one that goes, you know, beyond basically for any kind of interview, if you're not sure about something, so you're not sure that's totally fine. Instead of like, coming up with a an answer that doesn't actually make sense where you don't really know what you're talking about. It is totally okay to be like, I'm not sure but I have maybe approached the issue this way and see what would work there. See if it was That's totally fine. I'm a little surprised Kelly said no, bullshitting. I didn't say it. Well, you didn't. But it's inferred. No, it just the premise of like, if you're not sure, don't bs things, right? Like, just admit it. Like there's no shame. And actually, when I was at IBM, I had a manager telling me that one of the biggest things that you saw in candidates, I think that one of the reasons candidates weren't getting hired as they tried to be as an answer, not knowing if it was correct or not, but they acted like they knew it was correct. And so don't bs your way through something like just openly admit you don't know, but take educated guesses.

**Ali**  45:33  
Yeah. And you can also show a really good growth mindset there to have. I don't know this yet. But I am. I love learning new things. And I know this related thing and can use that knowledge to further my knowledge and learn that thing that you asked me about or something like that, like show that you're willing to learn and excited to learn and that just because you don't know this one thing, it's not going to limit you on the job.

**Unknown Speaker**  45:56  
Another one is, take a take a moment to really think about it. Your answer before just immediately jumping in, it's okay to pause, you know, might feel like an awkward pause to you. But if it's useful to be gathering your thoughts before giving an answer, again, totally fine. And you know, the interviewer may be like, they may, you know, in the pause, they may be like, do you need like, guidance or whatever? And you could say, No, I'm ready to go now. You know, whatever, whatever happens, it doesn't really matter. But point being don't feel rushed to immediately answer every single question the moment it's asked.

**Ali**  46:27  
Definitely. I also think writing pseudocode as a first step is a good idea. Unless they tell you specifically not to do that. But writing out your thoughts in plain English and thinking about the steps that you might take to solve a problem could be a really great first step.

**Kelly**  46:42  
You know, it's super funny. We as I had an interview with a very well known company, who's notorious for giving very hard whiteboarding interviews, and I did that I wrote pseudocode on the whiteboard before going to the the computer that they had given me. And one of the pieces of feedback they gave me was I took too long to physically write the code like they Like I spent too long pseudo coding, and not enough time physically writing JavaScript. And I was like, Are you serious? Like, that's your feedback. That's kind of ridiculous, in my opinion, because I took, I took 20 minutes out of 40 to actually think through the problem from like a pseudo code perspective, and fix all the bugs before writing it, that like knocked me down. That's wild. And I think one last thing I want to just another tip, a last tip is to think about the edge cases when you're testing. So one, always test your solutions, think about different inputs and outputs. But also think about the edge cases, like different inputs that can be passed that might break it. That's going to be a big one, and it'll help you iron out some of the bugs, definitely. So if you want to learn more, we're going to link some things down in the show notes. When I was studying for technical interviews, educative was a great platform for me, they have a ton of different like study guide courses. And hacker rank was another one. You can definitely go practice your algorithmic coding on, although I will say it's a lot harder and personally I don't use hackers. Because I find like the, the problems are very, I don't know, I personally find them very like mathematics based and like, they just don't really jive with me very well. I did read Cracking the Coding interview, which is the book that everyone recommends. And what I did, because I was doing JavaScript based programming was I took their solutions, which I believe are written in Java or C, I can't remember. And I, I transcribed them over into JavaScript. That was a really good, like, practice for me.

**Ali**  48:26  
I didn't exactly the same thing with Python way back in the day. But yeah, so definitely, Cracking the Coding interview, I think is a really helpful book. Um, that being said, I think I also want to say that interviews at all companies don't necessarily look like this. Most companies that I have actually interviewed at. Don't ask these types of data structures and algorithms questions. Some companies do, like the big big tech companies normally do. And like the unicorns, unicorn startups usually do as well. Things that most more local companies are early stage startups. I haven't noticed them asking these types of questions as much.

**Unknown Speaker**  49:07  
It's gonna come as a huge surprise. But I don't ask these questions either.

**Ali**  49:11  
Yeah, I don't either. When I interview people,

**Kelly**  49:13  
I don't think they're indicative of a person's future success that a company personally, like I've seen, we could do a whole episode on, like how we should hire maybe that's a great episode to do. And we do have a feature. Lots of thoughts on that one. Yeah, a future episode on engineering management coming up, you know, later in the season. And I think maybe we could talk about the hiring process. But yeah, these whiteboarding interviews, unless you have a very seasoned interviewer understands, like how to actually collaborate with someone and they can go horribly wrong. I've had interviews whiteboarding, where the interviewer just wanted to trick me or they wanted to show me how smart they were and the questions were not going to be related to my day job. Like as a front end developer, I should not be having to fix a broken binary tree. I think that's ridiculous. These are not things that you would see in the real world. Yeah,

**Ali**  49:57  
agreed. So we're giving you All this education because it's something that we've seen in interviews, I actually use some of these things on a day to day basis at work, too. But we don't think that this is right. We don't necessarily think that companies should ask these types of questions. We're just trying to give you an education so that you can be there to answer those questions if they come up. also wanted to shout out BCS, which is an incredible series by by Dickie Joshi. It started off as a series of blog posts that are illustrated, they're incredible that it spun into a video series on death and also a podcast with Sironi beric from ko newbie. So definitely shout that out. I think that that is an incredible resource for diving deeper on all these things that we talked about today. I also love doing co challenges with Project Euler and advent of code. I like the more mathematical problems. So those are fun for me. And they tend to use these types of data structures and algorithms that we talked about today. So great for practicing Those

**Unknown Speaker**  51:00  
awesome, I learned a ton.

**Unknown Speaker**  51:05  
And I also did not learn a lot, because I need to look at the additional resources to really dig in a little bit more to understand, again, since I have no you know, background knowledge and a lot of this it's more about about learning for curiosity sake, as opposed to my next whiteboard interview, that's probably never going to happen. But to be fair, you probably will never need to know any of this. So yeah, it's like, you know, pick your battles of what to learn and not at this point in your career, I would say you have bigger and better things to

**Unknown Speaker**  51:35  
see like the stack of books that I'm reading Mason, mainly most of my focus right now is on learning how to be a better manager business owner, as opposed to these details. So I do like how you said stack

**Emma**  51:46  
of books. Oh,

**Unknown Speaker**  51:50  
totally did that intentionally.

**Ali**  51:52  
Awesome. Awesome. Do we want to do a quick round of shout outs?

**Unknown Speaker**  51:56  
Yeah, yeah, absolutely. So one thing I recently retweeted is a blog post called JavaScript visualize prototypal inheritance. So this woman, Lydia, Holly, I believe is how you say it. She's been posting like this really awesome blog posts on the practical div. And they're all animated and they're all about things JavaScript D like the JavaScript engine and prototypal inheritance. She does an amazing job. So I'm going to link her article down below. She's definitely someone to watch.

**Unknown Speaker**  52:22  
Mine's nothing related to this, but pop sugar released their 2020 reading challenge checklist, which is basically I think, like 4050 books or more how many of the different various various topics and it kind of helps you step out of your comfort zone of the books you normally read? So I'm going through that list with one of my friends right now. So definitely worth checking out.

**Ali**  52:44  
Amazing. I'm pulling that up right now

**Emma**  52:46  
as a my alley. What about you? Do you have a shout out?

**Ali**  52:49  
I kind of said this already, but it goes with the episode I want to give a huge shout out again to be CS. The series by British heroes you I used it so much When I was trying to learn all of this and self teach it after really feeling like I couldn't learn these things when I was in college and thought that I had just, like wasn't smart enough to learn them. So her series really helped me to learn these things. And so I want to give it a second shout out here.

**Unknown Speaker**  53:15  
Awesome. Well, cool, I hope those listening phone this episode to be helpful. So let's close this out. If you liked this episode, tweet about it. We'd love to get your feedback. And we post new episodes every Monday so make sure you're subscribed to be notified in the three

Transcribed by https://otter.ai
