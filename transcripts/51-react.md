**Ali**  0:00  
react is a front end library that's in super high demand in the industry. But it can be difficult to get up and running with stable talk, starting with react, why it's so great how data flows and the gotchas we encountered when we were learning. Let's get started.

**Unknown Speaker**  0:20  
Welcome to the ladybug podcast. I'm Kelly.

**Emma**  0:23  
I'm Allie. And I'm Emma. And we're debugging the tech industry. Finance is a cloud communications platform that allows developers to integrate voice video and messaging into their applications using their communication API's. Whether you're wanting to build video calls into your app, create a Facebook bot, or build applications on top of programmable phone numbers. You'll have all the tools you need. They also have open source libraries, code snippets and demos in node j. s, and more languages, formerly known as nexmo. Vonage has you covered for all API communications projects, sign up for an account at nexmo dot dev slash Ladybug, and use promo code LD bu g 10. For 10 euro of free credit. Again, that's nexmo dot dev slash Ladybug, and use code LD bu g 10. For 10 euro of free credit. Hey, Kelly, have you heard about this cool tool called AWS amplify? Tell me about it. It's a suite of tools and services that enables developers to build full stack serverless and cloud based web and mobile apps, you get to use whichever framework or technology you want on the front end.

**Unknown Speaker**  1:29  
That sounds cool will help me get up and running with things like hosting. Yeah, authentication. You betcha. Manage graph qL? Totally. How about serverless functions API is machine learning chatbots. file storage, yes to

**Emma**  1:42  
everything amplify is built, especially in a way it's enabled. Traditionally, front end developers like yourself, Kelly to be successful, because you can use your existing skill set to build a real world full stack apps than in the past would require deep knowledge around backend DevOps and scalable infrastructure. The amplifi console also allows you to use a GitHub repository to deploy to a globally available CDN with ci NCD built in,

**Unknown Speaker**  2:06  
it's super cool. Where can I learn more, if you want to learn more about AWS

**Emma**  2:09  
amplify miss the AWS amplify.github.io.

**Ali**  2:15  
React was originally built in roughly like 2013, by Facebook. And it was built to make user interface. User Interfaces not facias, more modular, or reusable. And they're supposed to be more easy to maintain as well, especially when you're working with a larger development team. Because if you're working with just a vanilla JavaScript, HTML and CSS project, if you change your code, you can tend to have to rewrite it in a bunch of different places. Because you can't write dry HTML or dry is don't repeat yourself. And that doesn't really work that way with HTML code. And so react allows us to build components, which when I was starting out, I kind of thought of as custom HTML tags, and allows you to essentially read us chunks of your code and write your HTML and JavaScript all in one and then reuse those chunks throughout your code. So that's a little bit about what react is,

**Unknown Speaker**  3:19  
I have a confession to make. Oh, again, Kelly again. So I never wanted to learn react. Because to me, it was super confusing. But I just told everybody it was because it was built by Facebook.

**Emma**  3:34  
I knew I wanted to learn react because all the bros in my office were raving about it. And I was like, I don't care. For real though, I didn't want to learn react because it seemed really confusing. And I was always interview when I was at IBM. And it was only when I switched to LogMeIn, where they were using react Redux and TypeScript and I had to pick it all up at once. But I think we need to talk about the fact that like react really took the internet by storm. It was really the first time a framework or a library had come in. And so polarized like the framework and library space, because prior to that, we had Ember, we had Angular, which was having an identity crisis of its own. And we have a whole episode on JavaScript frameworks. I think it was season one that will link in the show notes. That gives you a better overview on this some of these different things. Yeah, I don't know. I feel like jQuery was one of the biggest libraries at the time. And react was really the first competitor to Angular and jQuery.

**Ali**  4:30  
Yeah, I was using AngularJS or Angular one at the time. I learned reactive thing with two years after it came out to the public and was using it in production around then. But before that, I was using Angular j s. And so using react was like this massive step forward and the error messages were so much easier to understand. And so for me react was so much easier than when I was using and then I use view for a little bit after that, but most of my career has been In react for the most part, and for me, it's like, so nice and straightforward. And just like the greatest way to build things, but I also know that there are so many downsides with it as well that they can really hurt the performance of your application, like any JavaScript framework. But react is pretty huge. There are ways around that, like using server side rendering, and using the like preact to minimize your bundle size. But that is a huge downside with react. But I find it very developer friendly and very nice to write.

**Emma**  5:36  
I think there's a learning curve that you need to get past but once you do, I think things just kind of click into place. And then you can build from there I there. And we'll get into this a little bit later. But like this shift, I think, also there's been like a minor identity crisis within react as well as as versioned. And like switching over to react hooks, if you're just learning, react, seeing a What do you call it like, not, not hooks? What is the class based component? Yeah, like, yeah, finding tutorials, we're trying to figure out how to do something, then you see, both of them can get really confusing. Yeah. And we'll talk about some of that a little bit later on, I think we'll discuss as well, things that were difficult for us to learn. But I think before we move on, it warrants a brief conversation about what a framework is, versus what a library is, because this really confused me, I'm gonna let Allie teach us because she's the best teacher of all of us. So

**Ali**  6:35  
no, so a framework has basically opinions about how you structure your code. And a library is just additional functionality that you can use within your code. So essentially, other people's code that you don't have to write from scratch, and you can reuse your code because you don't want to reinvent the wheel every time you write an application. But the frameworks are more opinionated. So react in itself is a library. And that's what it says all throughout his documentation is that react is a library. But a lot of times, you'll use a tool on top of react to make it more into a framework. So something like create react app will generate files for you. And that would impose the structure of sorts instead, that would be closer to a framework, or something like Gatsby or next j s, those would also be considered more of a framework. I think, Kelly or Emma has a great now I do. But

**Emma**  7:31  
before I jump into that, I would love to quickly just say like create react app is essentially a command that you would run in your terminal, which will auto generate a folder structure for you already built in with like Webpack. And so it'll come with a dev server and all of those things. So you just you in create react up, you give your folder name, and it'll auto generate these files for you. And you just essentially can run NPM start or yarn Dev, depending upon what you're doing whatever the command is in your package, JSON file, and you're good to go. And that comes with a lot of boilerplate code. And Allie had mentioned Gatsby, and what was the other thing that you mentioned? Next, next j. s. Those are? Well, next comes with a lot of different functionality, if I'm not mistaken, but Gatsby is a static, of what is it called a static site generator. And static sites, essentially, what Gatsby does at a very high level, just because you know, when you're learning route, you will hear these things. And this confused me for a long time. What Gatsby will do is allow you to build a react application, it dehydrates into static files or HTML, CSS, and JavaScript. And these are simply files that are not going to be changing. They're not volatile. And you can upload them to a server, so you could host them on GitHub Pages for free. And what's nice is in the browser, it will hydrate back into react application. So you're getting the best of both worlds. Be I just I just quickly wanted to find those because these were all things that very much confused me when I was starting out.

**Ali**  8:59  
Yeah. And we'll dive more into create react app and build tools and all that at the end of the episode. Because I think it's important to talk about more of those.

**Unknown Speaker**  9:06  
Please give me an analogy for frameworks versus libraries.

**Emma**  9:10  
So I don't think it's a secret. I like pizza. And I don't think it's a secret. I like food. But But pizza has a special place in my heart because I come from New York and maybe in New Yorker, I love quality pizza. So Pizza Hut is one of my favorite places. And when we think about frameworks versus libraries, let's think about Pizza Hut versus Domino's. Both of them make pizza, obviously, pizza, it's better. But both of them have different ways or different frameworks of actually making these pizzas and they taste differently because pizza is aeons better than Domino's. So Pizza Hut has its own framework for how they build their pizzas. And Domino's has their own framework for how they make pizzas. So the framework actually controls the way the pizza is made. And they might use common materials or what we would equate to libraries and these are things like flour, cheese, pepperoni, pineapple and Domino's cake. Garlic. Yeah, yeah, that's Yeah. I mean, I like garlic, he says, but I love garlic. I don't like eating cardboard. But that's a whole other episode. Um

**Unknown Speaker**  10:09  
Is it an episode? Are we talking about an episode?

**Emma**  10:12  
I think we just skipped over the fact that I said I put pineapple on my pizza. But anyway, I love. Okay, cool. I'm glad that we settled that. But anyway, my point is like, they might use these common materials or libraries from other manufacturers, right? They're not gonna sit there are manufacturers around saucer cheese, but they still use them. And they they might, they might produce their own. So it's, you know, a very high level, we can think about it like that good analogy.

**Unknown Speaker**  10:33  
So let's dig into exactly why react has been such a step forward in web development, I guess.

**Ali**  10:43  
Yeah, I think it's really this component based system. And most frameworks since that point in history have either refactored themselves to be component based or been component base from that point forward. So this is really a big landmark in development history. And Facebook, or sorry, not Facebook. But react is super helpful, because it allows you to modularize your code, and it makes it easier to work with multiple developers. So the analogy that I like to give is, when Facebook group moved from likes to reactions, do you all remember that? Yes, like way back in the day, there used to just be a Like button. And now there's like, still, like it wasn't while ago. It wasn't that long ago. It was definitely before 2017, though, because I taught my first react workshop in 2017. And I use this analogy, and that was probably, yeah, it was a while ago.

**Unknown Speaker**  11:42  
I've been angry reacting to posts for that long.

**Ali**  11:45  
Yeah. Yeah. Okay. I don't know. I also got Facebook, like the day that I was allowed to, I think if when you turn 13, you're technically allowed to get a Facebook account. And I got one the day that I turned

**Kelly**  11:57  
back when you had to have somebody from the school verify that you actually went there. And you got asked security questions like who is the school's mascot, which is really fun when I switch schools when I moved from Michigan down to Georgia, and I didn't know any of the answers to these security questions. So like, I belong here, I promise.

**Ali**  12:14  
Oh, no, no, I was after that point. You shouldn't be allowed to get anything at 13. Yeah, yeah. And looking at user data. I'm like, yikes, you have some stuff for me when I was like, really young, I don't

**Unknown Speaker**  12:28  
I don't know how I feel about this. But speaking of being able to do whole episodes on things,

**Ali**  12:32  
yeah, our social media histories, okay, so they moved from like, reactions to go back to our drones discussion, instead of Dan did on Facebook. Um, and so that was a pretty big feature. There are likes on so many different things or likes on posts, their likes, on pictures, they're like some pages. And so if they wanted to change that, if they have like vanilla, HTML, CSS, and JavaScript pages, that would be a huge amount of work, they would have to essentially do Command F in their codebase to find every like button, and then refactor it to implement the reaction. And that could lead to a lot of bugs and bugs in different places, because there's so many different instances of dislike buttons. And so having a component based system makes that process a lot easier. And you'd only have to update the code in one place.

**Emma**  13:25  
Yeah, I guess. So you can think of that like, very much as like a rubber stamp, or like, when you're building a house, let's you know, you're not gonna have as every single window with the same dimensions is not going to remain in a different way, they're going to essentially have a blueprint, and you're going to be stamping them over and over again. And that's how I like to think of components is essentially just like a rubber stamp you have, it's all of the metrics are there and you just make a copy of it with maybe different data. Maybe you have a blue window and a purple window. You could even do different sizes, a very interesting house.

**Ali**  13:56  
I live in Sweden now. No, I thought of it as building my own custom HTML tags. And they're usually bigger than that. But with HTML tags, you can have an image with a different source. And then a different picture shows up on the page. And with a react component, it's like a bigger version of that you can pass multiple things to them and things will change. But you're reusing the same functionality over and over near code, and you even use a syntax that looks like an HTML tag.

**Unknown Speaker**  14:24  
It's just true that it's kind of like it just looks like a custom HTML tag. And I think I was really confused by that at first when I left my first react project. But yeah, definitely, I don't know that I feel like it's, there's so much air like room for creativity there. By being able to do like, those additional like those custom components. I love it.

**Emma**  14:44  
And I think too, it's important because like, when I was beginning, I didn't understand how to extract different pieces of code into different files and like when to do it and things of that nature. I think that's really important because I have this problem now where I try to over explain rapidly things and over engineer things from the beginning. And I have to kind of remember to only extract out different components, if you're going to be reusing them in multiple places. Don't over engineer things. But yeah, I essentially in the beginning, we just write all of my code in one file, and we get really, really long and I, it was unmanageable, right? And so we try to avoid this by composing different pieces of our webpage anatomy using components. And

**Unknown Speaker**  15:28  
I think it's also important to note, you know, as you said, you can you can reuse this content, but you can also have components within components, you have sub components as well.

**Ali**  15:38  
Definitely, it's like a HTML tag, you can have a tag, and then you can have child tags within it. And that's the same concept with a sub component. And I always get the question of when you should extract code into sub components. And like so many questions and engineering? it? The answer is kind of it depends. And it depends mostly on your use case, when are you going to be reusing something, or what code naturally is grouped? well together. And so it's one of those things that you build up those patterns over time and start to recognize those. And there are some rules that you can think like there's the or that you can follow us there. There's the rules for first components, essentially, components should be focused, they should be independent. So that means that they don't rely on one another to be created, essentially, if that makes sense. So one component can be created.

**Emma**  16:33  
It should be standalone. Like they shouldn't have these. Yeah, dependencies on each other. Like, yeah, that's a good point.

**Ali**  16:39  
Yeah. reusable, they should be testable. So you should be able to write automated tests for that individual components. So those are some rules to follow. But a lot of it is really, it just depends on your use case. And whether you are going to reuse that component. And whether the features are should be grouped together or not. I

**Emma**  16:59  
think it's important to note too, this might seem really overwhelming. But this is something that will come over time, at some point, you'll be able to look at design spec and understand or be able to visualize what should be components. It just takes time and experience. So don't feel overwhelmed. If you don't have this finite answer right now.

**Ali**  17:20  
Yeah, for sure. It's almost like when you're starting writing JavaScript, and you're like, what should be a function? And what should I just put in multiple functions or whatever? It's the same thing for sub components.

**Emma**  17:32  
Speaking of sub components, this is not actually a transition. But we're going to take a moment to hear from our sponsors. Are you a developer looking for your next challenge meets Shopify, they're on a mission to make commerce better for everyone. And they do things a bit differently. They don't tell you how to solve problems. They give you the tools, trust and autonomy to build new solutions. They don't want you to work alone, those structures so you can leverage the diverse perspectives across teams and everything you do, and they don't pretend to have all the answers. They're big enough for you to tackle problems at scale, but small enough for you to discover and solve new problems. If you're a builder at heart, who wants to solve highly technical problems, if you want to take all of your life experiences and apply them to a blank canvas. Or if you want to access really powerful tools, Shopify is the place for you. Visit shopify.com slash careers today. Kelly, remember how we talked about AWS amplify at the beginning of this episode, you mean a suite of tools and services that enables developers to build full stack serverless and cloud based web and mobile apps? Yeah, and you can use your framework or technology of choice on the front end. And since we're talking about react, we want to be sure to point out that there's a free react tutorial offered by amplify

**Unknown Speaker**  18:44  
what will that tutorial show me,

**Emma**  18:46  
you'll learn how to build a react app and quickly get up and running with things like hosting authentication and manage graph qL? What else you'll also learn how to build serverless functions, API's, machine learning chat bots, and storage for files, like images, videos and

**Unknown Speaker**  19:01  
PDFs. That sounds great. It seems like amplify is built in a way to enable traditionally front end developers to be successful.

**Emma**  19:08  
That's because you can use your existing skill set to build real world full stack apps that in the past would require deep knowledge around back end DevOps and scalable infrastructure.

**Unknown Speaker**  19:18  
Perfect. Where can I find this tutorial,

**Emma**  19:20  
you can check how to build a react app with amplify at AWS amplify dot info slash Ladybug. Again, that's AWS amplify dot info slash Ladybug.

**Ali**  19:32  
So something that I also want to talk about is how react has had multiple areas. Like most frameworks or libraries that are out there, there are multiple different versions of it. And within those versions, there are very different patterns that haven't merged. So when I started learning react, like way back in the day, it was before ESX was really rolled out. And so we use a function called create class that you pass an object And that's what created a react component. And then four years after that, we use ESX classes to implement react components, at least react components with state. And we'll talk about state next. And then now, most recently, as of 2018, we have hooks implemented into react. And that allows us to use functions to implement all of our components. And I think that they're really nice. They make components much less verbose. But I think that this can be a little bit more difficult to visualize when you're starting out. So it's easier to write the code, but it's a little bit more difficult to visualize what's going on. And it also adds the complexity because when you Google, you might get all these three different versions of react. And so you have to kind of distill what you actually need, and find resources that are using the crit, correct implementation of react. So classes or hooks or create class, you won't be using that now. But

**Emma**  21:04  
maybe it's worth discussing how like what things might allow you to recognize which thing is using. So like, let's quickly mentioned, like class components, how would I look at a piece of code and other stages in class components. And I think the syntax was like, class button extends react component. And inside of that class, you would have a constructor and a constructor. This goes back to it's not really object oriented. It's not really classical programming, right? Like classes, a syntactical sugar added to ESX that allows you to, I don't know, I don't know, like create these fake hierarchies for like, it's not really classical, like a c++ or a Java. It's still a prototype based inheritance. It's not classical inheritance. But yeah, you would use this constructor would take in properties, it would set different values on your constructor, and then it could have functionality inside of that, right. But you would definitely see like, no class button extends react component or component, if you've destructured out in the import. How would I recognize how would you recognize like, just a functional like a stateless functional component.

**Ali**  22:16  
So for these, it'll just be function and then the name of the component. And then you may see hooks, so use effects and use date, or I would guess, the two most used ones and the two that we'll talk about within this episode, because they're probably the two that are most essential for starting out. I also want to point out that within your class based component, you'll be using this dot set state versus use date. And that's something that would be a pretty big red flag that you should move to a hug space tutorial if you're looking at a

**Emma**  22:52  
class base. And I think too, it's important to note these lifecycle methods that you're also going to encounter in class, the class syntax, you're going to get component did mount component will mount component will unmount. These are all really important hooks and a life cycle. And this life cycles confuse the living shit out of me when I was beginning, I didn't understand what that meant. So like, and some of these are deprecated, like, you'll have to go look at the proper documentation. But like component will mount it means it's not mounted to your Dom yet, so it's not visible in your UI. It's not visible to screeners. It hasn't mounted, you would use this hook, if you needed to add something, maybe like you're making an API request, right. And you need to like populate your UI before it gets mentioned to your DOM. That would be a lifecycle hook that you would see in classical react versus hooks. It's quite different. We don't have these necessarily the same lifecycle methods. And we'll go into this deeper in a future episode where we discuss a deeper react, advanced react, excuse me, but they are the whole premises like you're grouping. You're kind of grouping like mounting and unmounting. Like it's a whole different paradigm of how we think about component life cycles. And I don't want to get into that now. But typically, my point was, like, if you see a component did mount component will mount component will unmount. That's a good sign that it's using the class syntax.

**Ali**  24:14  
Yeah, for sure. So the we can kind of jump into the React lifecycle, since we mentioned it. So essentially, the React lifecycle are certain events that happen over the course of your component existing. So the first one is component will mount and component did mount and those happen the first time that your component mounts on the page, and that means that it renders on the page, it actually shows up and displays on your user interface that's mounting. And then there is component did update, and that runs whenever your data changes. So if your state changes or your props and we'll talk about what those are in a minute. If those changes Your updates are going to run. And then finally unmounting. And that's when your component is taken off the page or unmount. So there are special methods built into class based react that will run automatically. So you do not need to call these, you just need to name them certain things and react will call them for you. That's the component did mount for example, there. And so that's a little bit about react lifecycle, difficult to talk about these things all in isolation.

**Unknown Speaker**  25:32  
Just to note as well, I'm adding a link to the show notes that just has like more visual diagram of the lifecycle as well. So you can have a general idea of what this looks like. I pulled this from reacts website,

**Ali**  25:47  
let's work backwards a little bit now and talk about data in react. And there's a couple different types of data that you'll use fundamentally within your projects. So the first one is, state and state is going to allow you to have data that changes over the course of your application. Running

**Emma**  26:07  
though state Yeah, state was also very confusing. I feel like react in general, just computer programming confuses me. state. Like, I remember sitting in a conversation with a coworker one day, they're like, Oh, yeah, you like you need up your state. And like, what a state like, I don't get it like, what is it? state? It can be something as simple like, is your mobile navigation open? Or is it closed? It can be? Do I have data? Do I not have data? It could be? I think another good example is it's an online store, here's your shopping cart, do you have any items in your shopping cart? exactly what's the state of your shopping cart? If you remove an item, it needs to be reflected in your state. And you need a way to keep track of all these things. One, your components are rendering, because you aren't, you're going to have instances where things are re rendering when they get populated with new data. And you need to make sure you remember this across your site, right? Because if a user navigates away, or like something happens, we need to make sure we don't lose all of these pieces of information.

**Unknown Speaker**  27:02  
Can you imagine not being able to add more than one item to the car? Because every time you shift elsewhere, it's just like,

**Emma**  27:08  
Oh, your carts empty? Again, maybe it would be less poor? fare. So yeah, so that's kind of state in a nutshell, let's talk about props. alley, can you kind of explain what props are

**Ali**  27:20  
props are data that's passed from one component to another. And these are immutable, which means that within the child components of your pasture data from your parent component to your child's component, that data is not going to change within your child's component, you can change props into state, which is another interesting piece of this. But you can just think of steel, essentially for now, as data that will change over your application via live and props as data that's passed from one component to another. Another thing that's important to mention, I think, is that the real benefit of react and what makes react programming generally, a little bit more developer friendly, once you get the hang of it, is that in vanilla JavaScript, if your data changes, you need to write a bunch of code to now manipulate your Dom in order to match the data up to you, right. So if you have a scoreboard, and in your vanilla JavaScript app, your score changes from zero to one, then you have to write like some sort of code that changes that zero to a one on your user interface as well, right. Whereas react, your data changes in state. And react just updates to show that update in state. So as long as you use this dot set state, or the set state function that you're given from you state, your interface will update automatically to reflect those changes. So you don't need to write that code yourself. You don't need to do like, dot that your element dot inner HTML to update it or anything like that. It'll just do it automatically.

**Emma**  29:02  
I think it might be worth just providing an example or a few examples of what props might be like, what what kind of data would you pass through from one component to the next I yeah, I like to use examples like this goes back to design systems, which we have an entire episode on as well. So I recommend listening to that. If you're interested in learning more about maybe composable components. I like to take the example of buttons, I think we forget how many different types of buttons there are in the world. You know, we've got large buttons, small buttons, error, success, warning, we have icon buttons, icon buttons with text. All of these things are different properties on our basic button component. So there are things that you could be passing as props, size, for example, I want a button component, but maybe I want the large version, or maybe I want the small version depending upon where I am. But I don't want to create individual components for all of these. Just you know, I just need one prop I need just, I need one size. I don't need six different button components. That might be one example

**Ali**  29:58  
or even just button text. You Want your buttons to have different things displayed on them, that would also be something that you

**Kelly**  30:04  
could but I most recently just created like a badge that you know, like a little bit little badge that shows up at the top left corner, actually, I have a direction on there. So you can choose to put it in the left side or the right side, you can choose the color of the badge, which, according to the design system, it can be one of three colors. And then I pass the text through as well. So it actually shows what the batch text should I

**Emma**  30:23  
just also want to mention, too, that you don't necessarily need to pass text as a prop, because there is a children property we can be using. So so you might see this in your if you're working on an enterprise codebase. Because this confused me as well, I always thought I had to pass text as a property and then render it in the component. But what you can actually do is, you know, we're creating this custom components. And we like we mentioned earlier, you can you render them similar to like a custom HTML or JSX component. And inside of that, we can put things right, um, most HTML tags have a start and a close tag, and you can put content, the content that we pass in the middle can be text, it can also be other components. And all of that gets rendered as the children prop. So yeah, you can technically pass the label. But if we're rendering a button component, for example, a custom button component, you can just throw the text in there as the actual content between the start and end tag and render it using the children prop. So that's something that you might see.

**Ali**  31:21  
Yeah, it is still props, though.

**Emma**  31:23  
Yeah, yeah, for sure. Yeah, you just might not need like a text Prop, it might just be coming through a drink. Yeah, yeah, definitely, you

**Ali**  31:30  
can just use like a fancy syntax of make it a little cleaner. Do other fun facts about react data. First off, data is unidirectional, or follows unidirectional data flow within react. And what that means is we can pass data from a Parent to Parent component to a child component, but not the inverse, the data does not get passed back from the child, to the parent. And I think that that is probably the most difficult thing about react. Data Flow for most people. And I can see that as like the thing that people get most stuck on when they're learning react. There are ways around this, like passing functions as props. But it is important to know that rule that data flow is unidirectional, and react,

**Emma**  32:19  
I was just gonna say like, it's a kind of like a waterfall, we're actually gonna like a waterfall with a state of flow where like, it all starts at the top and it trickles down, you know, lower and lower in terms of typography. So from higher up to lower down. But yeah, I think you were gonna mention some other frameworks are bidirectional, right?

**Ali**  32:37  
Yeah, exactly like view, especially the data goes in both directions, from parent to child and child to parent. And so it does become more difficult with react that you have to think, what is the top level component that I need to use this data in, and to create it there initially, and then pass it down to your child,

**Emma**  32:56  
this is a huge problem. Like, I struggle with this to this day. Like, literally today, I was struggling with this because like, if you have, so let's take the example of like models, for example, you know, a lot of times we trigger models, and they pop over top of whatever content is on your UI. But sometimes you need to trigger a certain modal from all over the UI from multiple different places. And, you know, unless you pull it out and put it at the top level, how are you going to maintain state, like from all parts of your application? So yeah, I will admit like, this is really tricky with react and and something even It doesn't matter how senior you are, sometimes you still struggle with how do you actually architect these things?

**Ali**  33:34  
Yeah, for sure. And then the other thing to talk about is how to actually change state. And this is actually really similar to what you do in normal vanilla JavaScript is you'd have an event handler to change that state, in most situations. So on button click, change this state from true to false. Or once the user does something, increase the score. So event handlers are what we use to change or update our state as our application runs. For the most part, you could have like randomly updating data, but for the most part, it's going to be on user interaction.

**Emma**  34:17  
Yeah. And I think I think it's important. So like, if you have classical react, you would see set state, right, and it would be an object, essentially, it would take the key, which is the piece of state that you're trying to update and then the new value. In hooks, hooks are very straightforward. I think they're more straightforward than trying to set like this massive state object. Essentially, one caveat with hooks that we didn't mention. They have to be the first thing in your function. They have to be top level and it has, I don't know all the details as to why but you will get errors. If you're new to using react hooks. And you're getting all these errors. Just make sure that your hooks are defined at the top And so you call you state and you pass in the default value. So let's use the example of a score card, you're playing a game, your score is going to start at zero. So we want to use this use state hook, we pass zero as the default value, and we pass it in as the first argument to state, what gets returned from you state is an array with two or two pieces of information in it. The first is going to be your state object or your state variable. So it'd be score in our instance. And the second piece is the updater function. So it'd be set score. And you'll see this you'll see the destructuring as the hook syntax that, for me was really confusing, I didn't understand what that syntax was, like const. And then, you know, in these array brackets, you have like two variables. And I like didn't understand why. And it's just simply because you know, this use state hook will return you two pieces of information in an array that we're then destructuring. The first is the variable and the second step theater function. So if we want to update state with hooks, it would be set score, and we would just pass in score plus one,

**Unknown Speaker**  36:02  
I think it's worth noting that this is a lot to discuss, like, really understanding hooks in particular, is a lot to discuss. So next season, we're going to do another episode on react to to do a deeper dive into this.

**Emma**  36:16  
And I think too, we should, we will link some of our favorite tutorials in the show notes, I have a bunch of favorite react tutorials that I used. And if you're looking to get hooked on react, you can go check out our show notes for some free as well as some paid resources.

**Ali**  36:34  
Definitely. And I've done myself a lot a lot of tutorials on this, so I can link those two. Um, another thing to talk about is JSX. Even though JSX can be used outside of react, I, it's used 99% of the time, I would say within react applications. And so JSX is JavaScript code that looks like HTML, but it's really JavaScript behind the hood, but it looks like HTML tags, you can just write them directly within your JavaScript code. These are normally returned from your react components, and then what renders on your webpage. Your browser, by default is not going to understand this, you have to use something like Babel, to transpile your react code into something that the browser can understand.

**Unknown Speaker**  37:24  
And this is why you're often using something like create react app to help you actually do that.

**Ali**  37:30  
Yes, for sure. Back in the day, we'd have to write all of this ourselves before create react app existed. And it was so painful, like the days of Webpack, configs. And all that. So create react app is one of my favorite tools for writing these applications, because it does all your Babel configuration and generating files and all that upfront for you. So you don't have to do it. I think

**Unknown Speaker**  37:57  
JSX was confusing to me at first as well, coming into it, because I'm like, Wait, is this HTML? Or is this JavaScript? And the answer is yes.

**Emma**  38:06  
It's funny. I feel like the mantra of this episode was like, this was confusing.

**Unknown Speaker**  38:11  
I think you're absolutely right. But I mean, it's that's normal. It is confusing. Exactly. It's the life cycle of learning.

**Ali**  38:18  
Yeah, for sure. It's also important to say that you can write react without JSX, you just almost never see that because it's like, a bunch of functions that you have to run that look kind of I don't want to say ugly, but it's pretty clunky.

**Emma**  38:34  
You can say ugly, it's okay. It's not very composable, right? Like you're not composing a UI out of syntactically beautiful components. You're simply just chaining together a bunch of function calls. And it's not as intuitive. Yeah, like under the hood, elegant, doing right. It's just JSX is that more human readable version of architecting? Around application?

**Ali**  38:59  
Definitely.

**Emma**  38:59  
Okay, so I am new to react. I want to get started today. Like, how can I get started, if I don't know where to begin? For me, I just want to mention code sandbox is incredible. If you don't understand how to use the terminal, if you don't know how to use create react app, head over to code sandbox.io and spin up a simple react project. You don't have to worry about anything Webpack, you can just simply start writing react today. And it's really great as you're following along with the tutorials that we've linked in the show notes for you to go ahead and get started for sure.

**Ali**  39:32  
Once you're ready to get started building applications that you would probably have like deployed or out there for users to use. There are other tools that you can use to so you could just use CD ends and link those in like content delivery networks and use script tags within a normal HTML file and you'd have to link in react in Babel. You don't see that very often. It is a possible way to build these applications does work. What you'll see more often though, is using something like create react app. And you would run the command, create react app, or NPM, create react app, your command, and it's going to generate a project for you, it's going to create a bunch of different files. And then you can start writing your code within there. And it'll have a lot of the boilerplate setup code already there for you. So you don't have to do that. Or you can go even fancier and use something like Gatsby or next j. s. But I would say that those are for a little bit down the road, I would say like, if you're a beginner, I would learn react hooks, right now,

**Emma**  40:41  
that's probably going to be the most beneficial place for you to start. I would learn a static site generator later down the line if you need it, or just to expand your skill set. But unless you're working on an enterprise application that uses classical react, I would stick with react hooks, until you kind of get the hang of it.

**Ali**  40:58  
I super agree. My one warning, though, is that so many of the resources that come up when you search for things at this point, are still using class based react, which is my one red flag there, yeah, that it may be helpful to have some background in knowing that at least the syntax for class B is to react so that when you're searching for these things, you know, at least to weed them out or know how to interpret that into what you need. Because that's something that I dealt with a lot. I actually am taught class based react first for a very long time and then moved into teaching hooks first. And that was something that I noticed the whole entire time is that most of the good resources and the answers when you googled questions, were all using class based components, which makes sense because they're they've been around longer, so their SEO is going to be better. But it does make for a little bit more of a difficult learning experience.

**Emma**  41:58  
I also want to add in that I struggle to feel like I know what I'm doing with react on a regular basis. Actually, today I was sitting here having this, like midlife crisis that I didn't understand what I was doing. Because I think once you get past like the basics of react, it can loop again, you can go through the second wave of feeling overwhelmed learning it with some of the other hooks and I still, I still feel like that. And I think it can also be really overwhelming to because it is the most widely used framework or library at this moment. Although it is being closely followed by Vue js. There's a huge ecosystem around it. And like for me personally, I get this massive imposter syndrome of sitting here thinking like, yeah, I workers who act, but there's so much I don't know. And I will continue to learn for a long time.

**Ali**  42:48  
Definitely, I would also say that learning something like view to be a good stepping stone into react because you have to think about the component based architecture in passing data from component to component. And using something like the vcli instead of create react up. And so those things are similar without JSX or unidirectional data flow. And so maybe it would be a good stepping stone into react if you have time to learn both. That being said, I think that view is like super widely used internationally. But in the US specifically, most jobs are looking for react at this point in history. Yeah, very good point.

**Emma**  43:34  
Nice. Well, I think that was a pretty solid intro to react again, like we had mentioned, there's so much to discuss. And to be fair, it's really hard to discuss all of these things through podcasting, just because a lot of it is visual. And so you know, we're doing our best but we do we would like to do a follow up episode on more intermediate aspects of react. And if you guys are, I don't know why you wouldn't, but if you don't follow Allie already, she tweets a lot of stuff about react as a teacher of react. So highly recommend following her if you aren't already also offended if you're not already following her. Be Should we do want to shift into shoutouts

**Ali**  44:17  
Yeah, let's do it. You already yours first

**Emma**  44:19  
or so I think I just announced on Twitter today that I picked a date from an ex friend and masters course. I am going to be doing one in London. Hopefully in January. We'll see how the world situation is about time. But it's going to be on foundations of CSS. So I'm like kind of excited about that. What about you, Kelly? So my shout out this week is for LA cologne. They fed me a Facebook ad for pumpkin spice draft lattes and I immediately purchased them because I'm a sucker for everything pumpkin spice so they're like these cold brew pumpkin spice draft lattes, and they're really delicious that I'm probably going to order some more Oh, that sounds cool. What about you, Allie?

**Ali**  45:02  
I'm gonna do a shameless self promotion here. And I have a blog post called the complete Beginner's Guide to react. And it has a lot of the same topics that we talked about today. But also it goes through a interactive tutorial of building a color switcher application using react. So I personally think it's a pretty good resource, and we'll link it in the show notes. But it goes along well, with this episode, musing. If you liked this episode, please tweet about it. We'd love to read your feedback. We're also giving away a copy of a day of study as pure react book. It's amazing. So as Dave, you should definitely follow him on Twitter and subscribe to his email list because he puts out so many amazing resources on react. Honestly, Dave is one of my favorite people. Dave is so nice.

**Emma**  45:52  
Yeah, highly recommend him.

**Ali**  45:54  
Yeah, highly recommend. He also makes a ton of stuff on egghead too, so check that out as well. We post new podcast every Monday, so make sure to subscribe to be notified and leave us a review.

I'm transitioning back in Oh, no. No, no YouTube, stop it. Okay.
