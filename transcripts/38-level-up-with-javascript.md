**Kelly**  0:00  
JavaScript is notorious for being one of the most popular yet also one of the most despised programming languages to learn. So today we're covering some of the intermediate and advanced JavaScript concepts. We'll discuss convoluted topics like generators, prototypal, inheritance, and the rendering engine. Knowing intermediate JavaScript concepts like the call stack context, scope, the prototype chain higher order functions. async programming in the event loop is invaluable and will help with learning frameworks. The fundamentals won't change even if the ecosystem does. Alright, let's learn some JavaScript.

**Unknown Speaker**  0:37  
Welcome to the ladybug podcast. I'm Kelly. I'm Allie. And I'm Emma. And we're debugging the tech industry.

**Emma**  0:45  
Hey, Kelly, have you heard about this cool tool called AWS amplify? Tell me about it. It's a suite of tools and services that enables developers to build full stack serverless and cloud based web and mobile apps. You get to use whichever framework or technology you want on the front end.

**Kelly**  0:58  
That sounds cool. Well, help me get up running with things like hosting.

Yeah, authentication. You betcha

managed graph qL? Totally. How about serverless? functions API is machine learning chatbots file storage,

**Emma**  1:10  
yes to everything amplifiers built specially in a way to enable traditionally front end developers like yourself, Kelly to be successful because you can use your existing skill set to build a real world full stack apps that in the past would require deep knowledge around back end DevOps and scalable infrastructure. The amplify console also allows you to use a GitHub repository to deploy to a globally available CDN with ci NCD built in. It's super cool. Where can I learn more? If you want to learn more about AWS amplify, visit AWS? amplify.github.io How often have you struggled to learn programming because you just couldn't find the right resource to suit your learning style. I struggled for nearly a year before stumbling upon a website known as front end masters. I've been a longtime paid user of the online learning platform simply because I find the courses to be comprehend And beginner friendly. They have the best teachers in the tech industry. And they're one of the reasons I was able to land my dream job. With front end masters, you can learn web development, responsive design, back end development, animations, testing algorithms, data structures, and more. You can pick a course you're interested in or follow one of the learning paths like react, view, angular data visualization with d3, node j, s and more. To learn more head to front and masters calm. Alright, so let's just start off with the fact that I read that introduction and I'm like, I don't know what any of these things are. So this is gonna be a really fun episode for me in particular, as Ellie and Emma Teach me all of these topics

well, and it's gonna be fun for our listeners because Kelly is actually gonna be the one teaching you all these cons

**Kelly**  2:48  
Haha,

**Ali**  2:50  
I'm so sorry everywhere at least she'll be a good sanity check for Emma and I have we are explaining things in a very bad way. So

**Kelly**  2:58  
I am going to tell you everything that does not make sense? Amazing.

**Ali**  3:01  
That's what actually prop.

**Kelly**  3:02  
I don't know if I will honestly because it'll be like every three words. Okay, can you re explain that?

**Emma**  3:07  
Now hopefully we do a good enough job where like, when we when I'm Andreas party would do these segments called to teach me like I'm five so if we don't do a good job I would like you to please call us out. Okay, Do you promise I can answer it but we'll try.

**Kelly**  3:21  
All right, you want to get started? Yes, let's do it.

**Ali**  3:24  
So the first thing that I wanted to talk about was functional programming and object oriented programming, which are two paradigms for programming. So we use of organizing your code and also ways of setting rules for yourself on how different things in your programs communicate with one another. And these are probably the two main ones that you'll hear about the most. So functional programming has a bunch of rules associated with it. It doesn't just mean that you are writing functions in your code, which I thought was what it meant. Initially, when I heard that term. I was like, Oh yeah, I write functions. I read from programs. That's not what functional programming is, it has a few more roles for you. The first one is that your functions are pure functions, which means that they have no side effects. You don't have any console logs in there. If you put an input into that function, you get the same output back, no matter what. And nothing external to the function happens within that function. So you're not mutating, or changing, mutating is a thing that we'll talk about a lot in this episode. So get a piece of jargon to break down mutate means change something. So you're not mutating any global variables within your pure functions. In addition to that functions are first class objects, which means that you can set a function to a variable and use it in that way. So you can have a function that takes another function as an argument and does something with that. And pattern that you'll see a lot with in functional functional programming is using higher order functions. We'll talk about that. Later on in this episode, but essentially, they're just functions that take another function as an argument. You may have seen something like map filter reduce for each. All of those are examples of functions that take other functions as arguments within JavaScript. In addition, within functional programming, there's a high emphasis on immutability. And that means that we're not changing our variables or our data's after they're initialized, we're instead creating new variables or overriding them completely, instead of mutating what's already there. So if we had a key in an object, we're not going to just directly overwrite it. Instead, we would create a whole entire new object that copies our old one, but with our new key set to what we need it to be. Our other one is going to be object oriented programming. And that's going to be another organization for our code where we use the classes which are going to be the blueprints for our data, and then we'll have instances of those Classes called objects. And so they will have data associated with them. And it allows us to organize our code in a way that mirrors the real world, the world's kind of object oriented, you have a bunch of objects, they have things about them, which we call attributes. And then they have things that they do, which we'll call methods within a class. So object oriented programming, we're going to use these classes and instances to communicate with another. JavaScript specifically uses something called prototypal inheritance, which is a little bit different than object oriented programming in a lot of other programming languages. Emma, you want to start talking a little bit more about that? Before we get to that? I have a question. Yes.

**Emma**  6:42  
Mm hmm. So functional programming and object oriented programming. I there are certain situations where one is better than the other.

**Ali**  6:50  
I would say so. And I would say that different programmers have different ways that they like to structure things for the most part. But I would also say that they're not always an alternative to wonder. You can use a lot of the rules from functional programming within object oriented programming, and it will usually make your code better. So you could write code with a high level of immutability with an object oriented programming. And that's going to benefit you. So I can put some resources in our show notes about that, and how you can kind of use both together. I know that that's gonna be a controversial statement to some of the listeners. But yeah, there are definitely use cases where functional programming is going to really shine like react really emphasizes using using functional programming and makes writing your code a little bit more difficult. But it also makes it so that it's highly predictable.

**Emma**  7:39  
I think Redux does that too, as well with the immutability, especially when you're updating pieces of state? Yeah, but isn't. Is object oriented programming a paradigm?

**Ali**  7:50  
Yeah, I think so.

**Emma**  7:52  
Oh, okay. Cuz I don't know why. But when I learned Java, I had this object oriented programming class. And so I kind of just assumed it was a way that the language was structured. And realize it was a paradigm that you could adopt for different languages like B. But JavaScript innately is not an object oriented programming language, we have syntactic sugar, which I'll talk about in a second. That makes it kind of look a little bit like object oriented programming, but it's not innately

Yeah, using that paradigm. Some

**Ali**  8:16  
languages follow a paradigm really strictly. So there are functional programming languages like Elm or Haskell or R, and those you have to follow the functional programming principles within them. There are also object oriented languages like Java or c++, or you have to use object oriented programming within your code. And then there are programming languages that are more flexible, like JavaScript or Python. And you get to pick your paradigm within that language. So you can do object oriented programming, or you can do functional programming or none of the above. You can just structure your code however, and you get to decide that more than in other languages.

**Emma**  8:54  
Holy crap, we're five minutes in and I've already learned something like this is so

**Ali**  8:56  
much fun

**Emma**  8:58  
to that. Did that help explain it to you? It did. Yeah.

Okay, cool, because now I'm about to confuse the shit out of you even prototypal inheritance, I will want to know why I'm singing everything. This is a concept that confused me for a while because it there are some concepts that remind me of object oriented programming. And we'll see that now. So I'm going to preface this with the fact that this is a little bit of a dense example. However, I tried to make it as relatable as possible. And additionally, there is a blog post that will be published alongside of this that illustrates these concepts visually. So if you're able to go check that out, and listen at the same time, I would highly recommend. So JavaScript uses prototypal inheritance to share properties between different objects. So we're going to have this example of creating a city. So suppose we have an object called city. We have many different types of cities, but let's say they each city share several properties. So every city is going to have a name, a population size, a median average income, and you average temperature, which now that I think about is kind of a dumb property to have because, you know, temperatures change out there, but we're going to go with it. We don't really want to recreate these properties for every single city like we could. But we have a lot of shared data points, every city that we create, we want to have these same points. So this is where we can use prototypal inheritance to share these properties. So there are two ways that we can kind of declare this city object, and we can do some of the function, or there's this new class keyword that was introduced with ESX, or echo script 2015. And it's simply simply syntactical sugar on top of JavaScript. So while we use this class keyword, to Ali's point about object oriented programming and the class structure there is not the same, but syntactically it does look very similar.

**Unknown Speaker**  10:47  
Did I interrupt over? Yeah, going back to ESX a commis. script? Is it all caps a CMA?

**Unknown Speaker**  10:56  
It is because it is an acronym Yes. Okay. Just making sure

**Unknown Speaker**  10:59  
Also 2015 but ESX

**Unknown Speaker**  11:01  
is what we're currently using. Yes, sex and ACMA script. 2015 are the same exact thing. They're two different names for the same version of JavaScript.

**Unknown Speaker**  11:10  
I think was it created in 2015? Yes. Wait, what's

**Ali**  11:13  
this here? I think this newest version of is iOS 11.

**Unknown Speaker**  11:19  
For

**Unknown Speaker**  11:19  
I don't know, but I think we ESX hosts that fit.

**Unknown Speaker**  11:23  
ESX was the last biggest release. And I think that's why we still refer to it. Yeah. Okay, that's why you keep hearing it was the last big release where we got const. Let so block scoping, variable declarations, and achma is standardized by Acme International. And they kind of, they're the ones that add new things into JavaScript as a standard and all of that, although I'm going to be honest, Oh, okay. I just looked up what the acronym stood for. It's the European computer Manufacturers Association. Oh,

**Unknown Speaker**  11:54  
that's so wild. If you

**Unknown Speaker**  11:56  
hear if you hear e6 if you hear ies 2015. They are the Same thing 2015 refers to the year it came out or was released and six is the version of Java

**Unknown Speaker**  12:05  
yet. It's crazy that we're actually on, like you said iOS 11 yet, but we, I guess they're just like minor updates,

**Ali**  12:12  
they're more minor. So this year is iOS 2020 or iOS 11. And there's going to be some new features as well, but they are having private class variables. So within these ESX classes, we call them ESX. Classes are really just jobs your classes now. But you can have private variables within your classes, which means that you can't access them without outside the class. There's promise dot all settled, I don't know what that does. And there's match all with string. There's the optional chaining operator, which I'm actually pretty excited about. That's pretty sick. And then big int, those are going to be some of the things that come out in ies 2020. So they're usually a couple of different features in JavaScript that come out each year but es six was a really great Really big year for these new features.

**Unknown Speaker**  13:03  
Got it? Okay.

**Unknown Speaker**  13:05  
Got it, though. I feel like we should definitely do maybe an episode on like the history of JavaScript and or like what was released when maybe the future of JavaScript might be a great for an upcoming way. Super fun.

**Ali**  13:15  
For sure.

**Kelly**  13:16  
Okay, cool. That was a great question because I was curious about that as well. So all right back to our city example. So we want to create this class, again, classes syntactic sugar, it's not object oriented programming, but we're going to use the the JavaScript class syntax. So we're going to create a class named city and we write the word class, and then we've got the name city, and you're going to capitalize the name. So any class will typically start with a capital letter. And this kind of lets developers know that it should be recognized as a class. So inside of our curly brackets here, we need something called a constructor. So a constructor function is essentially a blueprint for a JavaScript object. It's going to tell Java developers as well as the JavaScript engine, like every time you want a new city, these are the properties that's going to have Since our city object is gonna have those four properties that I mentioned before, we can add them as values within our constructor. So to declare a city name inside of the constructor, we write this dot name equals name. And what this says is, you're going to receive an argument called name, take the value inside of this and set it as a property on the constructor object. sprinted is for all four of our city properties. So the name, population, median income and yearly temperature. And now we have this blueprint, we can actually create new cities. And we can use this new keyword to instantiate new city objects. So if we create Houston, for example, we can say const Houston equals new city and then pass it in the values for the names. We've got Houston, maybe 232 million or billion people. I don't know there are a lot of people in Texas, you know, maybe the 30.

**Emma**  14:49  
Fine, everything's bigger in Texas.

**Kelly**  14:55  
So we create this new city object passing in the data for Houston. Well, let's Create a second city, let's create Boston, for example. So we create another city, new city, Boston. And now we have two cities, they both have the same board properties. And they're both inheriting from the same city object. But they're each going to retain their own personal data. So when I say, you know, Houston dot name, it'll return Houston. And when I say Boston dot name, it'll return Boston, even though they're both the same. They're both inheriting from the same city object. So this is really great. And we can add different functions inside of our city class, like count population, and it's just gonna return maybe like a template literal that says population of this city is this population. So now every instance of the city can use the same function, but it'll return its own data, which is super nice. We can also declare different types of cities that extend this functionality or maybe override some of it. So perhaps we've got cities that have a baseball team, and I'm going to make a lot of people angry right now I know it just Boston but I'm going to do New York as a baseball city and I'm going to use the, the team I root for Yeah, well, you know, fine. So Let's see, we have this new baseball city class, we do class baseball city, it has to extend the city. So class baseball city extends city. So we're going to get all of the things inside of city. But we're going to add a couple more. So inside of our baseball city constructor, remember, we still need those four pieces of data, we need the name, the income, the temperature and the population. But we're also going to add one more thing. And that's going to be the the best baseball team. That'll be our fifth argument. So inside of our constructor for baseball city, we have to first call super super is a function that says, hey, pass all of these arguments up to up the prototype chain, to the class that we're extending. And so we need to do that with our four arguments that are the same from city so our name, our population, temperature, and income. We can even add new functions to this baseball class. So maybe like play game or something like that, that I'll just return the string saying, you know, oh, the Yankees are playing or this baseball team is playing. There's this concept of prototypes where we've got city Well, maybe we've got baseball Cities, maybe we have tacos cities with talk. I don't know, that's a Houston city. And like I said before, I know this is kind of hard to talk about over a podcast, but we will have that blog post associated with it. But the big kind of paradigm within this prototype chain is a hierarchy of different prototypes. So let's say we're looking for a property name. Let's say we're looking for where the name property lives. And we've got a baseball city as New York, let's say New York is baseball city. Well, where is this name property actually living? Well, turns out, it's living on city. So we start at baseball city, which is its prototype. And we say, Oh, well, this property isn't on baseball city. So we go up a level well is the property on that prototype of baseball city, which is city and yeah, it's there. So essentially, if we're looking for a variable or a piece of data on an object, and it can't find it on the object that it's currently on, it will go up a level to the next highest prototype and see if it's there, and they'll go continue to go up and up the project. until either finds it or it doesn't. And then it will throw a type error that says, Oh, this isn't a function or Oh, this variable cannot be found. So that's kind of like the basics of the prototype chain. It was a lot. But the illustrations on our blog post will definitely help you understand that a little bit better.

**Unknown Speaker**  18:15  
I think it's cool hearing that description, like everything, you just went through it. Yeah, it was a lot. But it's the types of things that I've seen in projects that I've worked on, but never really understood what it was. So kind of provide some context around that. Well, thank you. Yeah. And like, you might have seen weird things like has own property. And this is part of the prototype chain and saying, Hey, does this object actually own this property? So does baseball city own name? So we say like, oh, does baseball city have has own property name, or I don't know the syntax, but it wouldn't because it doesn't live on that specific prototype. It lives on the city prototype that it's extending. So yeah, it's it's a little confusing, but I think visualizing it I think Lydia Holly did a blog post that visualize a prototype chain, we can link in the show notes as well, but

**Unknown Speaker**  19:01  
But I didn't see the illustration you come up with? Yeah.

**Emma**  19:02  
When we're describing these complex JavaScript situations, what helps for me is taking these concepts and relating them to real world situations like when would I ever use this in my day to day job or give me a real life paradigm that would be useful for prototypal inheritance or things like that?

**Ali**  19:20  
Yeah, I think organizing your code in object oriented manner that can really help it be more clear and predictable. Because as I was kind of saying at the intro, like, the world is object oriented in a lot of ways. And so writing classes that represent the real world and having them communicate with one another, it can really we're that also if you want to learn more about object oriented programming, it's something that Emma and I, I'm sure have both taken multiple semesters worth of classes on just object oriented programming because it is Such a huge topic in in computer science and programming in general. So, a book that I highly highly, highly recommend is practical object oriented design in Ruby by Sandi Metz. It's an amazing book about object oriented programming. And you don't have to be a Ruby programmer whatsoever. I don't really do much Ruby. But all the themes in that book are really, really, really important for understanding object oriented programming at a

**Emma**  20:27  
higher level noise noise, should we shift gears into some of the harder topics that you may or may not get during a technical interview?

**Ali**  20:34  
Yes, transitioning back to functional programming. A couple concepts that you might see there are higher order functions. and higher order functions do one of two things, the first thing that they can do is take a function as one or more of its parameters. So you're passing a function in as an argument to another function or they could return a function. So to talks a little bit about how some that you might see pretty frequently in JavaScript or MapReduce and filter. So filter, we could use to return a new array from an old one that contains only the values that fit a condition which we provide. And so filter is this function that takes an argument that is a function. And that function returns whether or not each item in an array should be still included within a new array that's created. And map is one where it's going to manipulate every single item within an array according to a piece of logic that we provide within a function. Reduce is a little bit more complex. Do you all have feelings on reduce? Because I feel like a lot of people have feelings? Yeah,

**Kelly**  21:46  
I like it a lot. But before I jump into that, I want to give a real world example for these different functions if that's okay, just to kind of illustrate the differences. Well, is that cool? All right. So for filter, let's say you have an array of people, objects will filter could Whether each person is older than 21, in an overturn an array of people who are legally allowed to drink in the United States, that would be one good example. Map would be iterating over every single person and console logging their name, I don't know something like that. Um, well, I guess it's more of a for each kind of a thing, actually, because that's just gonna like, execute some kind of thing for every single person, but map to Ali's point is going to do some kind of mutation on each person. So wanted to make them grow up a year each, we could add one to each one of them using map, and then I'll return a new array. So you're not actually altering the data. Like it's immutable, essentially, that goes back to this immutability concept where we're not actually altering the array, but we're returning a new one. There's also like array dot every that tests whether every single item within an array is going to pass a true statement. So array dot LSA people that every person is older than 21. It's like everyone in this array older than 21. Yeah, let's go to David busters, I don't know where people go. Or a ray dot some would check, is there at least one adult in the group, right? Is someone older than 21? Can we go on this field trip to an amusement park, but with reduced this took me so long to figure out and I still feel like sometimes I don't understand it. So here's one example I think I kind of came up with, let's say you have an array of values, their numbers will say their floats. So let's say you have an array of Bill totals, let's say you and your friends go out, you buy coffee, and every single index in that array is someone else's amount that they paid for their coffee. And you want to take all those values and add them up because you want to pay for your bill you enjoyed hanging out with your friends, you want to treat them. And so what we're going to do is we're going to take an accumulator, which is all of the amounts that we've added together currently during the process, and a value. So for every index in that array, it's going to add it to this accumulator. If we structure correctly, and again, we will add this example to our billing Post. But this is one way that you can simply add up every single value in an array is with a reduce. Yeah,

**Ali**  24:05  
I also really like reduced. And it makes a lot of sense to me. But I know that it can be very complicated for people to wrap their heads around at first.

**Kelly**  24:15  
Wait, so is it is the issue that is complicated or do people have actual issues with it?

**Ali**  24:21  
It's just complicated, in my opinion, Oh, okay.

**Kelly**  24:23  
Yeah.

**Emma**  24:25  
It's a confusing syntax, because basically, like you have array dot reduce. And then you've got basically like an arrow function kind of a thing, where you have two arguments, you have accumulator and value. And accumulator is like, it runs, it's passed through every single iteration. So if you're adding up all these values, it's the sum of the values that you've previously worked on. And value is the current value that you're iterating on. And now you don't have to add them. You could do something else, you know, with this accumulator, but it does something like it's passed through every iteration. It's a little confusing. I don't fully understand it.

**Ali**  24:57  
Yeah, it can be funky. Especially if you do Something like an object as your accumulator, and you're constantly adding to that object as you loop through like a pretty common use case for reduce is creating a counter. And counter is a data structure that counts the frequency of something appearing. So if you want to have a function that counts how many times a letter shows up, or each letter shows up in a string, you could use reduce for that. And you could create an object as the accumulator within reduce that has the current tally of how many times that letter has shown up in the string so far, and I think those type of examples are the ones that get more and more complicated. Yeah,

**Emma**  25:43  
agreed. Very confusing. In any case, so yeah, those are just a couple examples of what are those higher order functions, they're just functions that take other functions as argument totally

**Ali**  25:54  
and highly related to those are callback functions and function. callback functions are the functions that are passed as an argument to another function. So when you have a higher order function, you're passing a callback function to that higher order function.

**Emma**  26:08  
So set interval and set timeout are two great examples of that. So let's say I wanted to console log the word high, every one second or every thousand milliseconds, I could do set interval. And inside the first argument is a callback function. And this is an arrow function that just says, you know, console, log this message. And then the second argument is, how often do you want to do that? And in our case, it'd be 1000 milliseconds. So set interval is a higher order function, and then the function we're passing to it as a callback function. Totally awesome. Does that mean how was that explanation? Kelly? Was that pretty easy? Yeah,

**Kelly**  26:39  
I mean, these these in particular are things that I was already more familiar with. So and things that I use on the day to day

**Ali**  26:46  
awesome. I wrote a blog post on functional programming concepts and an introduction. Introduction tree. Oh, my goodness, that word was so hard to

**Kelly**  26:56  
say like me trying to say prototypal so

**Ali**  26:58  
it's cool. I will link That in the show notes, I go into something like function composition and stuff that are really functional programming concepts, not necessarily JavaScript so we can skip over those. We should we talk about closures. Another fun one.

**Emma**  27:12  
Yes, I was gonna ask you to find a closure. Like I've gotten this question in technical interviews like to find a closure. But we have our show notes on someone. Yeah.

**Ali**  27:22  
Well, this is such a common interview question. Have you actually use closures that often in real life? Because I have not, but I know that it's a very common interview question.

**Emma**  27:32  
So only with if I was going to create complex data structures, like a stack or a queue or a linked list with a function, but I've been doing them more with class notation. So generally, no, I do. Yeah,

**Ali**  27:46  
that's a good use case. I hadn't thought too much about that. But so a closure is essentially where you write a function within a function. And that's a way of giving access to a functions scope. From an inner function, even if the outer function has finished running, and this is mostly for data privacy purposes, before we go too much deeper into closures, we should also talk about scope. So scope is InVision what you can currently see. So in real life, your scope is what you can currently see, within programming scope is what variables you currently have access to within a function. So there's global scope. global scope is variables that you create outside of any function. They're accessible anywhere. There's local scope, which is when you create a variable within a function, and then you only have access to that variable while that function is executing. There's also different scope with the different types of variable declarations in JavaScript to which gets fun like letting var have slightly different skills. to them. So that's a high level overview of what scope is

**Emma**  29:05  
the let and var block scoped again, they were introduced with ESX. I believe the definition because I always butcher this, but const cannot be reassigned. If you create a constant that's initialized to an object, you can mutate the data inside the object. So you can change the value of the keys, but you can't actually reassign it to a new object. So if you have an inner function, let's have a function inside of a nested function, I can access the outer functions variables inside the inner function, but I can't access the inner functions variables inside the outer function, right? closure actually closes over the outer function scope. So even after the outer function has finished executing the inner function can still access those variables. So one example that you might see is a make adder function. So I want a function that'll take in one value, and at another point in time will take a second value and be able to add value to it. So I want to function that will let us add five to whatever I pass into it. So I have this function called make adder, it takes one value, I'm returning another function that takes a second argument. And that returns whatever the first value I pass was plus this new second value. So I can create this add five version of this outer function. So I said, let's add five equals make outer five. So I am creating this outer function, the first argument is a five that is now closed over this function has finished executing, but the scope has been closed over. So the next time I call this add five function with three, it remembers that the first number was five, so it'll add five to three, and it'll return eight. And if I call it again, with 10, it'll still remember this first value, we pass in a five, and it'll add 10. So it'll return 15. We will have those code snippets in the blog post as well. But it's just it's a little confusing until you get the hang of it.

**Ali**  30:52  
They're a cool concept, and I understand why they're important and they can be really good for like code challenges. They're lucky Code challenges that could use them, but I haven't used them too much in real life code. I haven't seen as much of a use case for them. But they are, are good to know. Especially because they come up a lot in interviews for some reason.

**Unknown Speaker**  31:12  
So maybe let's talk about iterators and generators with the caveat that I haven't used them. And I don't think any of us are really familiar with them. So this is kind of just our breakdown of sleuthing on the internet. Wow, you're just assuming that I'm not a pro at these. Do you want to explain them? No,

**Ali**  31:28  
I did go to a really awesome talk by Jen Creighton on these though, on generators. It She is tamagotchis. Very fine, that's

**Unknown Speaker**  31:38  
fun. Well, she's

**Emma**  31:40  
insanely intelligent, and she explains things really, really great. So it's really quite common to iterate through a collection of different items. And we can typically do so with for loops or by using array map array filter, which we talked about earlier. iterators and generators bring this concept of iteration directly to the core of a language and they provide a method for customizing this behavior for loops. So an iterator is an object that defines a sequence and potentially a return value upon completion. This object has a next method that returns an object with two properties. And these properties are the value and a value that's done is this iteration done. This kind of reminds me of linked lists, in a sense, because you can't just access specific items in a linked list, you actually have to call next until the next, you know, the pointer value is actually no, so they kind of remind me of linked lists. But yeah, I haven't used these in production or like ever. So

**Ali**  32:35  
I have actually used these a ton in Python. There are new concept to JavaScript, but they've been in Python for a while. And they become really useful if you are doing really data intensive processes, where you want to run one function and then another, but each process takes a while to run. In those cases, generators become really helpful. I don't do as much like data heavy. code within JavaScript, so I haven't used them really there. But definitely use them within Python. I'm also going to link to Jen Creighton's talk because it talks about tamagotchis. And it's very fun.

**Emma**  33:10  
Well, I think what you just touched on were generators, not iterators. So, okay, let's totally fine. But let's just describe what a generator is. So generators to Alice point allow you to kind of define this iterative algorithm by reading a single single function whose execution isn't continuous. So they're written using function asterisk. So you might have seen that in code somewhere. But when called, they don't initially execute their code. Instead, they return a special type of iterator called a generator. And when a value is consumed by calling this generators next function, the generator function is going to execute it until it finds this yield keyword. Basically, the whole point is a generator function can stop midway and then continue where it stopped. So like she said, like Allie was saying, like, it's really it's a good method for data data processing. Yeah, like

**Ali**  33:58  
data heavy. intensive code. I think that they're really, really cool. I am just struggling to see too many use cases for them with front end JavaScript code and see, like node code. But anyways,

**Kelly**  34:14  
I haven't encountered it in my day to day job. I haven't been asked about it in a job interview. I'm not saying you wouldn't ever be questioned about them. But I personally haven't. Yeah,

**Ali**  34:24  
I have four Python jobs. But that's very different.

**Kelly**  34:26  
Cool. So should we kind of switch gears and turn to something? Oh, known as the rendering engine? Yes.

**Unknown Speaker**  34:35  
So cool. We get some very excited about that. I love it.

**Ali**  34:38  
Yes. The way that the browser works like fascinates me, it's such a powerful piece of code. Because if you think about it, the browser has to calculate what color each pixel on your computer is going to light up as. And that to me is like so fascinating.

**Kelly**  34:55  
At the same time, though, this is partially why it's frustrating to develop. on different browsers because like, if you look at a UI in Chrome, and you look at it in Firefox, the the colors are different. And this really, really bothers me. Yeah. Well, you know, rendering engines. So essentially, rendering engines are responsible for displaying a web page, they actually parse your HTML and CSS and display their content on the screen. So there's, I think about four main processes within the rendering engine. So first is going to construct this render tree. So the render tree is the tree of visual elements constructed in the order that will be displayed on your screen. And this includes their CSS. So you start at the root of the DOM tree, and you traverse each visible node. Some notes aren't visible. So we've got nodes like metadata and title, these are omitted. And this is gonna be the same as CSS hidden nodes. So if you set like display none on a node, it's going to be removed from this render tree. For each visible node, the browser is actually then going to find the appropriate matching CSS on CSS arm is CSS object model. I mean, I don't even know if people say like that, but som It's, it's going to find the CSS object model for each individual node. And it's going to style it. And I think this is kind of how specificity is calculated, but I'm not sure I'm just making assumptions there. While the browser is actually constructing the DOM, it might encounter a style sheet that's linked using the link tag in the head. And at this point, the browser is going to say, hey, let me go off and find this file, and it'll send it back. So yeah, the HTML engine has to convert the CSS into something that the browser can work with. And ultimately, this is the CSS object model. The third step is it lays out the render tree. So once it actually constructs the render tree, it's going to actually lay things out. So when the render tree is created, and the tree doesn't actually have any position or size, so it has to actually recursively figure out the layout for every single tree. So it begins with the HTML node and recursively continues through this hierarchy, computing the geometric information for each render. Then lastly, it's just going to take all of that and paint it to the UI. So that's basically the render the the rendering engine in a nutshell

**Ali**  37:00  
Amazing. This is so fascinating to me. It's something that I don't know a ton about. But Lynne Clark does a lot of content on this.

**Unknown Speaker**  37:11  
She has a

**Ali**  37:12  
code newbie episode, that they talk all about how the browser actually works, and it renders things and my mind was so blown, because I had so underappreciated all the things that the browser has to do. But if you think about it, like the browser is such an incredible piece of software, and how much it actually has to do for us as developers is massive. So I am going to link all of that all of her content in the show notes. She also makes cartoons about how the browser works, which I think is so cool as well. She's so talented, so talented. So I'm gonna link those in the show notes. But it's really incredible how much the browser actually does for

**Kelly**  37:54  
sure, for sure. So that was pretty interesting. What about this thing called the cost? And what? Like I didn't know about the call stack for a long time. And then I realized, what do I think Stack Overflow is

**Ali**  38:09  
another important concept. Um, so another thing that the browser does for us is that it keeps track of our place in our code and what functions that we have called and what order we need to call our functions in. So if you have written recursion before recursion is when a function calls itself within itself. So if I have a function named hello world, I would call my hello world function within that function itself. And so you normally need to have like a base case where this function stops calling itself at some point. But something that you may have encountered is a Stack Overflow if you have written these recursive programs, and that's when you call too many function calls within your code and that Causes what's called a Stack Overflow. It's what Stack Overflow is named after means that our call stack has too many calls within it.

**Unknown Speaker**  39:08  
I think there's a moment in every Developers Life for the first time they see this stack overflow error. They're like, haha, I get it. Now I finally understand the connection like,

**Ali**  39:18  
Yeah, so the call stack is the way that the browser keeps track of what functions are then called what functions to call next.

**Kelly**  39:27  
So it's literally like a stack is a data, a data structure, which touched on in our data structures and algorithms episode in season two, I think it was season two. But you can think of it like a stack of books or a stack of pancakes where the last it's lastin first out so the last thing that you put on top of the stack is the first thing that's going to get popped off when it's done. So if we have let's say function Hello, and inside of this function, we've got two other function call. So we have say hello in German and say hello in French. So we first call say Hello, this is the first thing on the stock Well, this now is going to call say hello in German. So it's going to go in and it's going to say hello. And then it's going to finish executing, and it's going to pop that off the stack. So now all we've got is Hello again, well, then it runs into a second function call, say hello in French. And so it returns Bonjour. And then it's done. And it finishes, and we pop back up. And that's off the stack. And we're left with Hello, well guess what that functions went to. And now we're back to zero is kind of how it works. And again, check the show notes, check the blog post, because I'm just reading code out loud on a podcast, which is kind of dumb. So you know, just go check out the visuals.

**Unknown Speaker**  40:30  
Let's just another day for it. Yeah.

**Ali**  40:33  
And another related concept is the event loop. And this is another JavaScript specific concept. in JavaScript, you add event listeners. So if you click on this button, then run this function. So don't run this function immediately. But if down the road, my user clicks on the button, then run this piece of code. This is event listener. And so JavaScript needs To use what's called the event loop to listen for these events, and then run the program that needs to run when the item is interacted with. So that's kind of a very high level overview of what the event loop is. Do you have a more in depth explanation of it?

**Kelly**  41:17  
Yeah, I think we have this topic for later on. But we'll just cover it now. So event bubbling is kind of a big one. I think it's all about event delegation, or was the other word propagation. So by default events bubble in JavaScript. So what that means is, when an event happens, it is going to go from the innermost HTML element and move up the DOM hierarchy until it arrives in an element that's actually listening for this event. So yeah, this is known as event propagation or event delegation. So let's say we've got an unordered list that has three list items. We don't have to put an event listener on every single list item, you could, but why would you and so we could just put an event listener on the unordered list itself, so the parent, so anytime one of the children is clicked, it'll bubble up. To this unordered list, and we can actually capture which Child Element This was triggered from. But I wouldn't recommend setting event listeners on elements that shouldn't be clickable. So like don't set event listeners on an unordered list, because that's not great for accessibility.

**Ali**  42:16  
This allows you if you want to build a drawing app, for example. And so you have pixels across your screen that can be colored different colors, you don't need to add an event listener to every single one of those elements, you can instead add the event listener to the parent and have them bubble down to the child elements and then update them based off of that. So instead of adding 8000 event listeners to your page, you can only just add one. So that's event bubbling. And then I'm also going to link a talk in the show notes by Philip Roberts. What the heck is the event loop anyways? Because he's going to explain this way better than we could. I think one of the most interesting things about JavaScript as a language is that it Primarily synchronous. And what that means is that the script runs from top to bottom. So if you have a function call at the top of your JavaScript file, it's going to run First, if you have a variable declared at the top of file, it's going to be created first. That being said, it has some asynchronous qualities as well. So when you make a AJAX call, that AJAX call is going to run in the background and the code after it is going to continue to run. And then you use usually a promise that will run after the data comes back from that AJAX call.

**Kelly**  43:39  
So one thing that kind of relates to the event loop, and I've encountered this issue a lot in my code is throttling and D bouncing. So we can actually set event listeners on the window scroll. So if the user is actually scrolling in the UI, this is going to be really great for lazy loading. So let's say I have I want an infinite scroll of images of You think of Instagram? Well, I don't want to load a zillion images, it's going to totally take forever, you're not going to get your first paint, or you're not gonna be able to show users images right away, that's gonna really frustrate them. So generally, what you do is lazy load. So I, you know, maybe like when the users within 500 pixels of the end of the UI, let's load some more images. So it looks like they're infinitely scrolling. Well, listening for a page full can be really, really performance heavy. And that's where throttling and D bouncing comes into play. So what is the difference? They're kind of very similar. And I found this really great blog post, we're going to link in the show notes on code, burst IO. So what's the difference between throttling and D bouncing? Well, if you think of a car throttle, the amount you push your foot down limits the amount of gas going into the engine. So we want to actually limit the amount that a function is invoked. So we don't want to trigger an event. Every single for every single pixel that is scrolled on our UI, we actually want to figure out the best way to throttle this. So let's Think of going to the bar. So you go to a bar and the bar man has a policy of only allowing you to drink a drink every 45 minutes. So you order a drink in the first minute and they hand it over. You then try to order one every minute after and the barman is going to deny you until the 45th minute when then, you know he hands over your next drink, so you won't get another drink for 45 minutes. So with throttling, you may want one last invocation to happen after the throttle is over. And contrast and not really contrast. But a different paradigm is d bouncing. So D bouncing works a little differently. With D bouncing, it's more like hey, I'm not going to execute this function until I know that there are no more changes coming in. So we don't execute our function until everyone else is happy. And we're clear to proceed. So you can think of ordering food at a restaurant. You start listing off items to the waiter and waitress, and at the end they ask is that everything and if it is they leave you and they go get your food and drinks but if it's not, you just continue to add to the order. And then they ask you again until you're done. So again, when we're doing scroll events, they're really really performance heavy. So make sure your either using debouncing or throttling.

**Unknown Speaker**  46:02  
I love that you always provide a lot of examples using food and drink. Well,

**Kelly**  46:05  
to be fair, those examples just come from that blog post. I do always provide examples myself with food, because they're very relevant. And another example I always use, I always describe with food, like ordering food at a restaurant is a synchronous programming. So I'm going to turn over Allie and let her talk about promises and other asynchronous programming. Awesome.

**Ali**  46:26  
I always use cars for examples. I don't know anything about cars, it's such a problem, I need to like stop teaching examples, because I get to the halfway and I'm like, um, can anybody tell me even name of another type of car because I cannot think of any more. So JavaScript by default, back to asynchronous programming is mostly synchronous. So what that means is that our scripts run from top to bottom, we have a function call and a function called below it, the one on top is going to run before the one below it. So JavaScript is a mostly synchronous language. It's one of my biggest pet peeves when people are like JavaScript and asynchronous language. Not true. It's mostly synchronous. But there are some asynchronous features to JavaScript. So within JavaScript event listeners, which we just talked about are asynchronous. They don't execute directly when the code runs the first time. Instead, we're listening for the user to interact with the page. Another thing that you will see be asynchronous, most of the time within JavaScript code is Ajax requests. So Ajax requests are when you request data from another source. You can use dollar sign Ajax, which is built into jQuery, you could use fetch, which is built into the most browsers at this point, you can use XML HTTP requests, which is a total throwback, you can use axios, all these different libraries to make these Ajax requests. When you're making one of these requests. You do not know how long it's going to take for that external resource to give you data back, it could take Really, really long time, it could be really quickly. So you don't want to block the rest of your code from running while that Ajax request is executed. And so these in JavaScript are asynchronous. So they allow the rest of your code below that Ajax request to keep running while it's executing. And then you use promises, or async await in order to do something once that that Ajax request is done executing. There are other places where you may use promises as well, such as if you're in node, waiting for your database queries to execute other libraries use promises as well. I'm trying to think of more.

**Unknown Speaker**  48:44  
Oh, we used knockout j s.

**Unknown Speaker**  48:47  
Okay. What does that do?

**Unknown Speaker**  48:49  
Uh, I don't know cuz I was terrible.

**Unknown Speaker**  48:53  
But it says use promises under the hood to like, do everything and so that's why I was so bad.

**Unknown Speaker**  48:59  
You I was gonna say all I have to say is that promises

**Unknown Speaker**  49:03  
are like the bane of my existence really. I just

**Unknown Speaker**  49:05  
cannot care. Like, figure them I love promises.

**Unknown Speaker**  49:08  
No, I don't understand them.

**Unknown Speaker**  49:11  
I cannot I promise.

**Unknown Speaker**  49:13  
I will say no, I was

**Kelly**  49:16  
one of the examples I kind of use, like a real world example of asynchronous programming, potentially your promise is food, the concept of ordering food in a restaurant. So when a waiter or waitress comes to you, and you place your order, well, they you know, they're obviously they have to make your food so they take the your order back to the kitchen, and they start preparing it. But in the meantime, you're free to drink or talk to your family or do other things. You don't have to like, sit and wait for your food before you can continue being a human. And ultimately, they'll either bring you your food, or they'll come back and say, Hey, by the way, we're out of chicken. That would suck. It's a sad day in a restaurant, and we're like, we just have no chicken at all. But that's kind of like the paradigm of asynchronous programming, in my opinion, but yeah, I struggle with promises. Like an absurd amount to this day, I still couldn't write one very eloquently. But I will say one thing I am better at is async await Do you all use I am much more of a

**Ali**  50:09  
fan of promises. So I think we have like, here where I love promises async await is like kind of strange to me. I'm teaching with async await right now, it's a different world for me, promises writing those, it's like second nature because you just do like DOD then and have a function that runs one thing they're done. And then you return something and do another dot then after it if you need do. Promises also have different states they have pending, fulfilled and rejected pending is when they're still running. And then if they are fulfilled, that means that they ran successfully, then you have your dot then that runs and that takes a callback function to execute once the promise is done resolving and then there's rejected. So if it fails, you get an error message back and then you can run a function based off of that rejection as well. A single way is pretty new. What is

**Kelly**  51:00  
it like? ESM? Yeah, I don't know. But yeah, just definitely a pretty new and I'm gonna, I think the whole premise of it is that your code is written more synchronously. Like, you don't get a ton of nesting. It definitely reads more synchronously. But also, the error handling is a lot better. So if you have a ton of nested promise, then like, if you're chaining a lot, like you have to error handle that, like all those different, like, levels, I believe, if I'm not mistaken, but with async await, you can set one error catching, you know, function or whatnot, and it'll handle any part of the process that failed. Which is kind of nice. I think my issue with promises is that I'll say then, but it doesn't actually ever listen to me. That's what I'm saying. I don't understand it. Like I must be doing something fundamentally wrong when I'm writing these, because it just it rarely ever works out in my favor.

**Ali**  51:57  
Oh no. Oh, no. Yeah, I do like the syntax for isn't going it. I just, I mean, yes. So

**Unknown Speaker**  52:06  
I don't know, it is what it is we can have different opinions. Yes, for

**Ali**  52:09  
sure. For sure. So another concept in JavaScript that's like somewhat related is hoisting. And so hoisting is how JavaScript moves, variables and function declarations to the top of your code, no matter where you write them, which is totally a wild JavaScript thing. And so that makes it so that you can call a function before it is declared in your code.

**Unknown Speaker**  52:42  
Yeah, this can get a little confusing. So again, we'll have a code snippet down below. But let's say you've got this function called test. And you declare var one equals string, hello. And then you say console, log one, and it'll console log Hello. But then, let's say you've got a console log that logs out the value of this variable to Well, I haven't declared to you I'm going to declare that right below. So var two equals goodbye. Well, what would you expect that to return? Or what would you expect that to console log? Well, since this variable is hoisted to the top of the function, it's going to return undefined because it recognizes that hey, there's a variable called to it just hasn't been initialized to anything. It's undefined. So this Yes, that'll return undefined. But if you try to like access a variable that just doesn't exist, like console log three, for example, it'll throw a reference error. I will say though, some things are not hoisted. So if you have function expressions, those are not hoisted, it's only function function declaration. So what's the difference a function declares should be like function test, and you have your parentheses and your open closing curly brackets. A function I can't say that word, a function expression. I think this is like const to be like const my function equals open close curly brackets arrow function. I can't say these words out loud in a podcast. So that confusing myself. But it's essentially where you're assigning a function to a variable. That's a function expression. And those are not hoisted, I think is the same with is that the same with immediately invoked function expressions? Yeah, those are also the same thing. So if you want your functions first, they have to be function declarations.

**Ali**  54:20  
Yes. That's the big difference between

**Unknown Speaker**  54:25  
function declarations, very clunky expressions. Yeah, but

**Ali**  54:30  
it's this is a total JavaScript thing. It's not really long in other programming languages. So just wanted to mention that put that out there. Because that's another thing that comes up in interviews sometimes as far as I

**Unknown Speaker**  54:42  
know, huh?

**Kelly**  54:44  
Yeah, cuz a lot of times, they'll give you a code snippet and be like, what is this return? or What is this value? What value does this value container variable contain? And if you don't understand hoisting, it's a little bit confusing. No, you're good. Do you think we should talk about primitive versus references or do you think we should Yeah, no, I think we should I think primitive versus reference types are, it's ironic that we're ending with Venus because I think that they're one of the foundational elements of JavaScript, but I think there's Yeah, we're in. So permanent versus referenced JavaScript has two types of data, primitive values. These are gonna be your basic data types like Boolean, undefined null number, string and symbol. So there are six of them. Reference values are going to be objects. So essentially, these are kind of more of a pointer to a piece of data. And we can see why this is important. So let's take an example. Let's say we have two variables, and they're both declared or they're both initialized to the value one, they're both number one, if you check them for an A for equality, so if you do triple equal sign, they're going to return positive because they're both the same exact primitive value. But now let's say you've got two variables that are declared separately and they are initialized with the same exact objects. So they are two separate declarations but the object that is actually initialized to they have the same keys, the same values, all of that objects are reference values. So if I try to check their quality against each other, it's going to be false, because they don't reference the same exact object. But if I have one object, I don't know, let's say name equals miaa, just 26. So let's say I have that saved in var m, if I set var Kelly equal to var Emma, they're pointing to the same exact reference value. So at this point, they're pointing to the same object. But yeah, you can't just declare two objects separately, they have the same exact key value pairs and expect them to be equal. So that's kind of the difference between reference and primitive values. Yes,

**Ali**  56:36  
and this can cause some issues in your code. If you did that. Kelly equals Emma, and then you tried to change a key and Kelly is going to change the key and Emma as well. And that can cause some funkiness for people who are starting out with JavaScript. The same is true for a raise as well. So arrays are going to be references instead of primitives.

**Kelly**  56:59  
You Nice, awesome. I think the only other area to touch on would be debugging. But we're not gonna really go into that too much because we have an entire episode about debugging that you can go check out from season one.

**Ali**  57:12  
I think so. I don't know. Yeah, it was a really fun episode though. And I learned a lot from it. Yeah, I keep wanting to plug it in all of our episodes.

**Kelly**  57:21  
It was a great episode. And I also learned a lot about debugging because I was never taught that in school or anywhere. And I struggled a lot with it. Cool. Kelly, how's your brain doing? A mush? Oh, no, there was a lot here. Is that any different from No, I mean, this is my normal day to day. It's always much cool. Cool. Cool. Cool. Cool. No, but I mean, we we covered we YouTube covered a lot in this in this episode, and I think it's gonna be, you know, super valuable. I think it's gonna be really helpful to have the illustrations and the code examples in our show notes. So definitely, make sure your You're looking at the show notes on our website to kind of it will help to follow along with that.

**Unknown Speaker**  58:07  
For sure, for sure I had the examples as we were working through this. So

**Kelly**  58:10  
very, very true and I worked really hard in some of these graphics. So if you find mistakes, it's not my fault but if you love them, thank you

**Unknown Speaker**  58:19  
find me things you can blame me. I'll accept it. So

**Kelly**  58:22  
with that this kind of concludes our intermediate and advanced JavaScript topics now I will say it is very hard like Kelly mentioned to understand some of these things through a podcast so if you have the ability to look at our blog slash graphics while going like listening to this episode, highly recommend it. But if you're still struggling with these concepts, it's normal. I I still don't know what the hell engine generator when I would use it.

**Ali**  58:48  
Yeah, it's tough. There's so much out there to to learn and a lot of these things we accumulated over years and years. Let's do our shout outs.

**Unknown Speaker**  58:58  
Emma, you want to go first?

**Unknown Speaker**  59:00  
Yeah, so I made a really good chili. I'm kidding. Okay.

**Kelly**  59:05  
So I if you haven't seen I joined Spotify, I joined I accepted a job offer a Spotify and I just want to thank all of my amazing future co workers who've contacted me on Twitter so like, say welcome or two, some of them put together these incredible Google Docs with insane levels of detail about moving to Stockholm looking at apartment. Some guy wrote down like how much does a big ass bed cost and stock? Oh, how much does a biggest couch cost and stock? I wanted to be I wanted to write back and be like, how much does a small ask about this? It's funny because I say that I say the adjective big ass all the time. I was like, yeah, we're gonna be friends. So anyway, hello. That was mine. thank thank you to all my future co workers. Allie, what about you?

**Ali**  59:47  
I am in New York City. So everything is like completely shut down. And so I've been reading or trying to read a decent amount and one of my favorite books that I'm reading right now is wow, no, thank you by Samantha Irby. It is is a collection of humorous essays and they are so funny. I have been really enjoying it. I've been reading more like light hearted stuff than I normally do just because the world is depressing enough as it is right now. So ready reading a comedy book is pretty great right now. Highly recommend it. Kelly love it.

**Kelly**  1:00:22  
Yeah. So Emma started talking about mine. Um, so I haven't been to the grocery store in about five weeks. Definitely thankful for Amazon Fresh but basically, I've started creating what I call quarantine meals, which are what is in my pantry and what can I make with it, and I wanted to make chili but I couldn't go and make my my usual chili recipe and also didn't have any meat to put in there. So I decided just to grow a bunch of random stuff from my pantry and make some chili and it's one of the best chilies that I've ever made in Daniel. My husband was like, Yes, definitely make this again. I'm like ready going to have to go to the store if we're going to make this again. But I was really excited about the chili. And it's it's my lunch for the near future until it's gone. That's amazing. All right, so let's close this out. If you like this episode tweet about it, we would love to read your feedback. And to keep things topical. This time we'll be picking one lucky tweeter to win the ES six for everyone course by West boss, I'm probably going to be actually I bought it for myself and I still need to do it. It's like the classic learning journey of you buying courses and never actually doing them. I actually did take it and I really, really enjoyed it. And this is coming from someone who felt like they had a good grasp of JavaScript. But his videos are very succinct. They're about three minutes or less than they illustrate, you know, all these complex topics and easy to digest ways. So highly recommend awesome,

**Unknown Speaker**  1:01:49  
and we post new podcast every Monday, so make sure you're subscribed to be notified and leave us a review on Apple podcasts. We'll see you next week.
