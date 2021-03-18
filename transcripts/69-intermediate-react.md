Emma  0:00  
react is a JavaScript library for building user interfaces and is one of the most widely used libraries to date. Last season, we discussed the basics of react, and today we're going to dive into the more advanced aspects of the library. Let's get started.

Kelly  0:18  
Welcome to the ladybug podcast. I'm Kelly.

Unknown Speaker  0:20  
I'm Sydney.

Ali  0:21  
I'm Allie.

Emma  0:22  
And I'm Emma.

Kelly  0:23  
And we're debugging the tech industry. What do cats drinking wine and a woman making wigs have in common? A lot actually. They're both the result of someone starting their own business doing things their own way, and pursuing their independence. Just like a million others who started this journey, these entrepreneurs found the support they needed from Shopify. Are you interested in supporting entrepreneurs? Do you want to solve highly technical problems that support treasured local shops? Are you interested in really powerful tooling to change the retail experience with your favorite big brands? Join Shopify. Now digital by default, you'll have the freedom to work from anywhere, and the opportunity to build solutions to help Shopify merchants and partners innovate through chaos and emerge stronger and more adaptable than ever before. Help Shopify make commerce better for everyone. Visit shopify.com slash careers to learn more. Vonage is a cloud communications platform that allows developers to integrate voice video and messaging into their applications using their communication API's. Whether you're wanting to build video calls into your app, create a Facebook bought or build applications on top of programmable phone numbers, you'll have all the tools you need, formerly known as nexmo. Vonage has you covered for all API communications projects, sign up for an account at nexmo dot dev forward slash Ladybug? Again, that's nexmo dot dev forward slash Ladybug.

Emma  1:47  
So just a little caveat, before we jump into this episode, this is going to be covering intermediate and advanced react. However, last season, we had an entire episode on the foundations of react is called getting hooked on react. And we will link that in the show notes. So if you are kind of new to react, or you're looking to refresh your basics, go ahead and check that episode out. Before jumping into this one, it'll make a lot more sense. But with that caveat being stated, let's let's just talk really quickly about the errors of react. How long have we all been coding with react? And do we remember class based,

Sidney  2:22  
right? My God? No. I've been like, on and off not professionally right now for about a year. And I don't teach it because I have been more exposed to Angular, even though I don't love Angular as much. So that is not a professional. I don't remember hardly any of that stuff. So this will be awesome. This will be fun.

Ali  2:47  
I think I've been reading react cents before ESX came out. So before the class base era of react when we used to have to use objects to create react components because classes weren't built into JavaScript yet. So my guess is that's like 2015 ish.

Unknown Speaker  3:05  
Wow.

Emma  3:06  
I forgot about that. I was just graduating college in 2015. So I didn't I didn't start react until 2008. No 2018 Yeah. 2018 when I joined LogMeIn, I started with react Redux and TypeScript. And now at Spotify, we're using react. But before that, it was like dojo view, Angular. Oh, yeah. But to be honest, like, while I love you, and I think it's great to learn, and we have a whole episode called, was at react view, angular Omi, where we talked about these different JavaScript frameworks and libraries. We're here to focus on react. And to be honest, it is my favorite of the libraries and frameworks. I keep saying libraries and frameworks, because I know there will be people who say react, not a framework. And so I am totally going to fight that.

Ali  3:55  
We have a whole conversation about that. And the first version of this as well, yeah, whether it's the library or framework, so we can skip over that conversation. But I do want to say that I think react is the one to learn, especially if you live in the United States, just because they're the most jobs for react here. If you're a front end developer.

Emma  4:16  
Absolutely. And I feel like it used to be a lot more not difficult, but there used to be a lot more about react that made it a higher, steeper learning curve than view. But I think now with hooks, it's actually maybe flatten that curve just a little bit in my personal opinion for me, because I remember I was working at LogMeIn and I got like a DM from Janney, her mom's like, hey, do you want to read the new hooks specification before it goes live? And so I got to be an early reader of the hook stocks. And I remember sitting there reading it like Yeah, it looks good. And I didn't fully understand what any of it did. It really took me like a solid year to grasp what hooks actually were and why they were so great. So imposter syndrome is real but going really quickly back to class based versus hooks, I actually really liked class based, because I learned Java as my first programming language. So I was used to the classical paradigm of programming. And so functional, was stateless functional components and functional components were really a little bit more difficult for me to

Ali  5:19  
say, yeah, that was definitely a huge learning curve. And I think class based components really did mirror some other programming languages that we may live in, but also, React follows this functional paradigm of not directly mutating state. And so it makes sense that it's not also sort of following this object oriented paradigm and half baked kind of way. So I think hooks are really great. And also simplify reacts API other than I think use effect, which can be pretty complicated for people to understand, at least at first,

Unknown Speaker  5:58  
huh?

Emma  5:59  
Yeah, as a preface, before we jump into hooks, I just want to say if you are having a really hard time understanding, react as a library, like you are not alone, because even to this day, even as a professional developer using react for four years now, or three years, whatever it is, I still struggle like some of these hooks that we'll talk about, I just started, it just clicked with me. And it was one of those where I woke up one morning, it just kind of made sense, don't you love, which is how that's how my programming career has gone in general, like for months, or years, if something won't make sense. And all of a sudden, I'll wake up and understand it. But I just wanted to call that out. Because some of these things are really complicated. And if you're struggling, it's okay. I've been there. So let's talk about hooks. What is a hook? Like? How do we explain what a hook is?

Ali  6:47  
a hook is pretty much a special type of function that allow you to hook into the component lifecycle of react components. So they allow you to do special things that a normal function wouldn't be able to do.

Emma  7:03  
Can you tell the alley teaches for a living because that was a great explanation.

Unknown Speaker  7:07  
What what

Emma  7:08  
I got to tell you, I understand array D structuring and object D structuring. The first time I saw hook syntax, I was confused as heck, why it was like const, then there were open and close, like square brackets with two variable names inside. And then it was assigned to like you stay with something. And I'm like, What the heck is this syntax, and I didn't understand it was a re D structuring, like, that's how little I knew not little, because I wouldn't say D structuring is a super, super basic thing to know about JavaScript. But the first time I'd ever seen it, and I was really going to

Ali  7:44  
show it to people first without destructuring of like, you can set it to a variable with the array index zero, and then another one with their index one. But you could also do it in one line, which is much less clunky.

Unknown Speaker  7:57  
Oh my gosh, wow.

Emma  7:59  
That's so smart. Actually, yeah. But again, not all hooks return two pieces of information. So let's talk about a few of them. Before we do that, there are two rules that are really, really important if you are going to use hooks. The first one is like you do not ever call hooks inside loops conditions or nested functions, and they must be called at the top level. This is really important, I think, I forget exactly why but I'm pretty sure react uses its actual location in the function to like, recall it right. It has nothing to do with the location of it in the function that is very important. Yeah, I

Unknown Speaker  8:34  
think that's what I vaguely remember. Sorry.

Ali  8:37  
No, you're good. I think so that's true. But also you could get into some pretty gnarly places, if you were like, nesting hooks, or calling hooks inside of loops or something like that, like that sounds like a good way to blow up the browser.

Emma  8:51  
Mm hmm. Don't do it. Don't be a naughty react developer. The second thing that you definitely should not do is call hooks from JavaScript functions. We should call them from react function components or from custom hooks. And those are those are the two rules that's not too hard to remember, hopefully. So with that, let's give you let's talk about a few of them. I would say you state is the basic, the basic, like most foundational hook that you will come across. Allie, would you like to explain this one?

Ali  9:23  
Yeah, so state is essentially data that persists across component refreshes. So react, by default re renders components whenever state updates. So if I have a counter component, where I have, you know, a zero on the page, and you can press the plus button to increase that the minus button to decrease that react will automatically make it so that when you increase, the one shows up on the page instead of the zero, that trigger that's called a rerender. So that's re rendering the data on the page. And when that does that it by default, reruns all of the things in the component. But some things need to persist. And the state is the data that's going to persist from rerender to rerender.

Emma  10:13  
Absolutely. And so it used to be that, we'd have to call like this dot set state back in the day, with an object, right, you'd be like an object and you had whatever state variable you had and the new value. But now we can just use the use state. And the first return value is the state variable. And the second return value is the updater function. So in the case of a counter which allergists explained, you could have a count and set count. And that's typically the way that you'll see you state structured is you've got a variable name, and then set with that variable name s updater. function to be like, sidebar is open and set sidebar is open. That is generally how you'll see those updater functions named. And then the value inside of the use state function call is the default value. So in the case of counter, it might start at zero, because we're starting at zero. So that's kind of the most foundational hook. And you'll see that in almost every modern react application, I would say, Yeah, nice. Let's talk about some other more intermediate advanced react hooks that you might see in enterprise applications, or maybe like applications that are a little bit more robust. So use a fact, the effect hook is going to let you perform side effects and function components. Data fetching is one example of an effect where let's say you have a an application that every time you click a button will render a new cat photo using the random cat API. And so actually making that request for a new cat image is going to be an effect. So sometimes we want to run additional code after react has updated the DOM, like maybe we want to log something. And these are not going to require cleanup. But you can actually run cleanup on subscriptions, like a set timeout, for example, you don't want all of your timeouts floating around after that component is no longer mounted. So in order to clean that up, we can actually just return a function inside of our use effect, and it'll perform those actions. And yeah, just as a quick note, use the fact it's going to run after every render, including the first render. So yeah, that one took me a little while to understand, to be honest, it looks pretty intimidating. The first time you see a use effect with an arrow function returned, I had no idea what that was. Yeah,

Sidney  12:38  
I think this was the best like description that I've been able to like get out of it like in like just a visual form. So I appreciate you like having that like nice, clear and concise way to put it Thank you,

Ali  12:52  
I think it almost makes the most sense in context of class based component. So in class based components, there used to be this, these lifecycle methods that would run when the component mounted, which means that the component rent like rendered for the first time when the component updates, and then when the component unmount, which means removed from the page. And so use effect takes the place of all three of these, and depending on what you provide to it and what you do inside of it, it can do any to all of those. So component did mount runs on the first render and use effect does as well. If you provide an empty array as the second argument to the use effect, it's only going to run on the first render. If you provide variables though, to that array, then it's going to rerun every time that that variable updates. So a lot of times you'll see this with state variables. And then that takes the place of component did update. And then you can return a function from use effect in order to clean up what's going on inside of it. So like Emma said, a subscription or a timeout or something along those lines. And what's returned from it will be run when the component on mounts or ceases to exist, I guess.

Emma  14:19  
Yes, that was actually really good that you mentioned lifecycle methods, because that was one of the things that hooks really replaced or refactor, essentially, although as a new react developer, you wouldn't necessarily know that. And if you were to see a class based react app, you would be royally confused, or at least I would be. That was good. Thank you for that.

Ali  14:39  
Yeah, for sure. Deanna Abramoff has an essay on use effect to it's like, half an hour read or something like that. But it's really, really great. It goes way into depth on use effect and what you should do in it and what you shouldn't do with it. So we should definitely link that in the show notes. I'll find it.

Emma  14:55  
For sure. Let's move on to use context. This is one that confused the living shit. And still sometimes does. Context is a way that we can pass data through our component tree without having to pass props manually at every level. So let's say, because we have created the world's most inaccessible application, that we have a button element that is returned from a button component, and it is wrapped in 10 divs. Now, why you would do this, please don't do this. I don't know why you would. But now let's say on the outermost div, we've got a piece of state that we need, let's say for example, I know this is probably not how you would do it. But let's say we've got a piece of state called language and its updater function set language, and, or let's say is Swedish and set is Swedish, because I'm living in Sweden. And when the user clicks the button, it will toggle this Boolean variable between Swedish and English. If we have that state set on the outermost div, and we literally would need to pass it through all 10 parent divs to get down to that button element if we were doing it. Like I don't know what the word would be not iteratively. But like, if we were doing it without use context, you would have to pass that piece of state and the updater function through every single diff to get down to that button. And anytime that button was clicked, and returned to this updater function with the opposite state value, it would have to propagate back up or bubble back up to the top most parent. And this is completely ineffective. You see this done a lot with large enterprise applications, context is really a way to not have to do that. It's really great. So we can do this, if we have to pass a color theme down through all components in our component tree or again, a language throughout the entire application tree. So context should be used when data needs to be accessible to many components at different levels. So we can use this create context hook, and we can pass it a default value as an argument. So let's say we're going with the color theme, let's say we've got two color themes, light and dark. Maybe our default is dark, because dark theme is the the default value is only going to be used when the component does not have a matching provider in the tree above it. So we actually have to use this provider element and wrap any consuming components of the context. So any child elements that need access to our context. So whichever elements like our button, need access to our theme, they have to be wrapped in this provider component. And just kind of as like a last minute about use context is that all consumers have this context, that are descendants of a provider element are just going to rerender whenever the providers value prop changes. So just be aware of that. And be aware of which components and how many components you are actually passing this context to you because they will rerender.

Ali  17:45  
Well, in addition, we'll come back to use context in a little bit because we're going to talk more about state management and the different options for that right now. So this is not the last you'll hear of use context in this episode.

Emma  18:00  
Great. Should we talk about use ref we should. So use ref is another hook that you'll probably often see throughout react applications and references. refs in particular kind of confused me as well, when I started rust provide a way to access DOM nodes or react elements. And we can use them in a few different cases. So if we need to manage focus, or text selection, or media playback, if we need to trigger imperative animations, or integrate with third party Dom libraries, we can create rest with this create react, create react, create ref hook and pass it a default value. And when a ref is passed to an element and render, a reference to the node becomes accessible at the current attribute on the ref. So you'd be like, like my ref current, and that's going to give you the the node. I believe we need refs because of the virtual DOM, and we shouldn't be accessing DOM nodes with like, a document query selector. So refs provide a way to access DOM nodes in lieu of that. But Ali, I think that you have a contrasting like view on if we should use refs, right?

Ali  19:07  
Yeah. So I've always avoided using refs because they're more event based. So you would use them to get like the current state of element within react. But instead, I've always had it to that is architected so that that item is stored in state originally. So if it's like the current value of a form element, that would be stored in state no matter what, and each change is updated in state rather than using the ref. So I think refs are necessary for certain things but if you're using use ref a lot, I think something to think about is maybe your architecture and whether it is following kind of the React way of doing things

Emma  20:02  
But one example of where we use this often, Spotify is that we are using a library called Tippie j s to show tooltips. And Tippi is a tooltip. So it has to have like a parent that it attaches to. And it requires a node reference to be able to attach itself. So that's one instance where you would want to use use ref. But you have to always point like, if you can do it with state, you should be doing it with state. It's really just like, if you have animation libraries or component libraries that you need to interfer sure,

Ali  20:32  
if you're using non react things, you'll most likely need to use use ref within that, but if you are not using those, most likely you can avoid using refs. I see Okay,

Sidney  20:45  
okay. I can take us call back. And you guys just kind of support me with that because i a little bit remember what is going on with this. So I know that it returns a memoized callback. And so when we talk about memorization, this is an optimization technique that stores the result of an expensive function call and returns that cached result when the same inputs are like passed around again. And so let's say that we pass use callback in an inline callback. And then an array is developed from like those dependencies. So returning a memorized version of the callback that only changes if one of the dependencies has changed. Hopefully, that makes a little bit of sense. Absolutely, it does. I

Emma  21:40  
think that was a great explanation. And especially given the, you say that you're not super, like, expert level with react, but like, I still don't fully understand use callback,

Unknown Speaker  21:53  
my god diamond format.

Ali  21:55  
You can use memo or two that I've never actually used myself.

Sidney  21:59  
I've never used that. Like it's it's really strange. I remember callback just because I had such a hard time with like getting callback functions. At the time when I was like learning object oriented JavaScript was just like, what is going on here. So we can also talk about use memo which returns a memoized value. And that function passed to us memo runs during rendering just so you guys know,

Emma  22:28  
perfect. Yeah, this is really good at optimizing performance. So any, like super performance heavy calculations, I would say, or a value that's going to be accessed a lot. Perhaps you should think about using these two memoization hooks, but again, I'm not an expert. So do your research. Cool. Let's talk about one more hook, which is use reducer, which you may or may not ever use, that kind of depends. So reducer functions confused the shit out of me when I was learning Redux. And I think use reducer was kind of a way for react to function. Similarly to Redux, which is a state management library, if I'm not mistaken. And there I think we've written done recall, is that another state management library?

Ali  23:21  
Yeah, it's a newer one. I haven't used it personally. But it's the hot one right now.

Emma  23:26  
Nice. So use reducer. Go figure accepts a reducer, which is essentially it's a function that takes a piece of state and an action and returns the new state. So for example, if you go back to this counter example, let's say the state is count, and the action is increment. And the new state, if we pass it, a value of zero, the new state would be one. So basically, like behind the scenes, what that's doing is saying, oh, okay, this action we want to do is increment, which means let's return the current state plus one. And that's what it's going to return. Us reducer is preferable to use state when you have complex state logic. So if you're working on enterprise applications, you may see use reducer if you're solely using react state management. But yeah, you state is good if you have simplistic state.

Ali  24:17  
Yeah. So I think this transitions into an interesting conversation about state management more generally, right now. And so there are lots of options. We've talked about context, we talked about use reducer, we've talked about use date, which is kind of the most simplistic one and works really well for simple state. But when things get more complicated, it probably will get a little bit clunky, like if you have 20 state attributes within a component, then it's probably going to get really, really messy. And then there are also state management libraries like Redux recoil flux is another one. There are a bunch of react state management libraries or state management libraries in general. You can use Redux with view If you wanted to instead, um, but I think one of the biggest questions we had coming into this is which one should you choose right now? And the answer is really, it depends. So something like use context or use reducer doesn't require you to add another library into your code. And that's something that you should always think about is whether you're adding more code to the end user that has to load that. But also, in some cases, when state gets really complex, maybe something like Redux is really still important to use. And I think that like 50% of react apps are still using Redux. So it's not dead yet. And it hasn't been completely replaced. And I think the real benefit of Redux is that it does enforce this consistent architecture. And it also might be more performance than using something like use context or use reducer, I always say is to only use something like Redux as a last resort, because it's pretty complex, and definitely takes a while to learn, it's considerably more difficult to understand, I think, then react, teaching, it is always kind of a nightmare, if you ever have to do that. But in some cases, for large applications with really complex state Redux, or another state library is probably the way to go.

Emma  26:32  
Absolutely. Well, those were all the hooks that we are going to talk about in this episode. And I don't even know if there are any more above and beyond this, this might be just all of them in general. But these are the ones that we talked about today.

Sidney  26:43  
The next thing that we want to start talking about is some really good notes on design patterns. So I understand from both of you guys's experiences that there are a couple of things, especially in like front end developer interview questions that you guys should know. And composition versus inheritance is one of them. And so, when we say composition, this is an is a relationship between a child and a parent class. So let's say for example, a person is a human, it cat is an animal, and the child is a specialized version of the parent or the superclass. Now when it comes to inheritance, this is a has a relationship between a child and a parent class. And when we talk about this, we have an example of a a person has a heart or a house or has money or has a living room. And many react components don't know that they have children kind of ahead of time. And the functions more act more as wrappers so like you have what did you say Um, I think it was like sidebars that might have different functionalities on to that like point. What else? What else

Emma  28:01  
can we think coders as well, basically, if you can think of design systems and the different components within those, a lot of them are wrappers, the ones that are not atomic elements, like buttons or inputs. Anything else is generally just a wrapper.

Sidney  28:14  
Okay, I see I see. And in these cases, we should use the children prop to pass the children elements directly to the output. So I think that you said you don't need to say like you have children equals whatever is going on in the curly braces, you can place the children element tags inside of the React component, opening and closing tags. And I think Facebook, yeah, they they're the creator of react, of course, hasn't found any recommendations to you, like use cases for using inheritance as props, and composition gives you the flexibility to archetype, your app. So just make sure that you guys remember that

Ali  28:54  
it feels like more like HTML, like HTML, you'd have parent and child elements. And within react, you would have parent and child components. And you can nest them similar to that. Like, I think a really common one is having a layout component, for example, that centers everything in the middle of the page. And inside that layout component, you'd have a bunch of other components. That's your actual text and your actual content. And so that's an example of composition.

Sidney  29:22  
I don't know why that just clicked for me when you said like, it's kind of like HTML, parent and child, but it just did. So yes, I thank you. Thank you for helping me solve that problem today. I've learned something new.

Emma  29:34  
Nice. That's a great explanation. So thank you for that. One. One other we've got more than next topic. That is a design pattern for react is higher order components. This is not part of the React API. This is like a is it JavaScript or is it programming in general?

Ali  29:53  
programming in general, I

Emma  29:54  
would assume gramming Yeah, I would guess that makes sense. Instead An advanced technique for reusing component logic. So whereas a component transform props into a user interface, a higher order component just transforms one component into another component, trying to think of an example of this Do either of you have examples of

Ali  30:13  
yet? So at work, we have a component that you can use an amplify that is use authenticator. And what that does is you wrap a component in use authenticator, and then whenever somebody tries to access that component, they have to sign in first. So it takes them to a login screen. If they're No, they're not logged in yet. That would be an example of a higher order component. Um, another one would be for react router, is to have the React router, you wrap your top level component in, I think it's with router. I'm pretty sure. And that makes it so that there is routing in all of your child components.

Emma  30:54  
Hmm, okay, cool. I haven't used react router. But noise. Let's talk about state like we just had a large discussion about state. But what about stateless components? Allie, do you want to tell us a little bit more about those? Yeah.

Ali  31:08  
So I know that this was a really, really common pattern for a while. And I think it is lost favor a little bit. But I think that there's still a lot of validity to this, of having your stateful and your stateless components. And a lot of people would call these presentational verses. I forget the other one. Oh, my goodness, do you do either of you know, like presentational versus

Unknown Speaker  31:33  
container?

Ali  31:34  
Yeah, thank you. So continue. Yeah, thank you presentational versus container components. And so what you would do is you'd have certain components that just have to do with what the user interface looks like. So the buttons and whether things are centered and the content, but then you would have another component, that would be the parent of that component. And it would provide the data, so all the data logic, and the state would be in that container component, and then the user interface would be put in the presentational component. And back when there were class based components and function based components, the presentational one would be a function based component because it wouldn't have state logic. And then the container component would be the one that is a class based component that has all of the lifecycle and state stuff.

Sidney  32:25  
And like processing This, this, it's starting to make a lot more sense as we're talking about. I don't think that I've had to actively use any stateless components just yet. So that'll that'll be fun to eventually do.

Ali  32:42  
Yeah, in a lot of ways. They're simpler, because I mean, it's pretty much just a function that returns JSX from it.

Emma  32:48  
Right? Absolutely. Speaking of different types of components, what about that? What a segue that? What about conditional rendering, in which you have different components, and you either maybe want to render them or not render them based on some like state or evaluation. If you ever see curly brackets in your JSX that have like a state variable, it's like, is visible and and and then like sidebar, so if the sidebars visible, then render it, and if it's false, then it won't render. That's conditional rendering. You might also see ternary expressions in there to toggle between two different components. And we'll talk a little bit about why conditional rendering maybe is not the best performance solution to creating your react application. But conditional writing, conditional rendering is definitely something that you're going to see throughout react applications.

Ali  33:45  
For sure, like, sometimes you'll want to render one component. And sometimes you want to render the other. Or you may have something where you want something to show up sometimes in something else to show up a different time. For example, like a loading thing, if you want to have a loading message or a spinner, before the API call resolves, or something like that, that would be an example of conditional rendering where the spinner shows up until your content loads.

Sidney  34:11  
I think that the next one we want to talk about is render props. And that term refers to a technique for sharing code, I know between react components using a prop whose value is a function. So a component with a render prop takes a function that that returns react element and calls it instead of implementing its own render logic. I've never, I don't think that I've had to use that before. Do you guys have any like, actual examples for like, what you would use that for?

Emma  34:44  
I have used it, but honestly, I couldn't tell you what I've used it for. I'm trying to remember. We used to. I don't know I'll give an example. While I try to like dust off my brain.

Ali  34:57  
I don't have a component or I don't have an example on the top My head either.

Emma  35:02  
Oh, I think I can. Yeah. So like, for example, one of the things that we have in Spotify is the tracklist, where we actually show different, like songs or what have you. And if you. So one thing we do in Spotify is we allow you to add songs to a place playlist that you've created. So if you go, if you have the Spotify app on your phone, you can go create a new playlist, or go to a playlist that you've already created. And there should be an add songs button. And when you click that, it's going to pop up, like an overlay that has an input field. And you can type in an artist, for example. And if you type in an artist, you're going to get a list of songs, you're going to get the list of artists, maybe some playlists, maybe some podcast episodes. And every single one of those is a different type of element. Like we've got an artist element, we've got a playlist element, we've got albums, we've got songs, and all of those things are different components. Well, if we have one tracklist component, we need to tell it what to render, and we use, I believe, render props to do that. So that's one example, potentially of using render props.

Sidney  36:09  
Okay, that makes a lot more sense. Thank you for the example that that makes a lot more sense. We also want to talk about controlled components, which take state through props, and notify changes through callback functions, like let's say, for example, what is it the, like the on change, I believe that's one of them that it can use. Parent components can control this by handling the callback, and then managing its own state. So I'm wondering, like, with the Spotify example, like we've gotten our music to render, is there anything else that like we might use to, like, get back at all?

Emma  36:56  
Yeah, so let's say we have like the search search songs to add to playlist like overlay I just mentioned that has a text box, then it has a list of results. That text box is a controlled component. So every time you type a character, or string into that textbox, we want the parent to be notified. And we want it to make an API request to actually fetch all the results right and render them. So that could be one example of a control component. Yeah,

Ali  37:20  
this is important because data flow in react is unidirectional. And what that means is that data can be passed from a parent component to a child component, but it cannot be passed from a child component to a parent component. But a lot of times, you'll need to update the state in the child component and somehow update it on the parent as well. And the way that you do that is you pass the updater function. So we talked about how you state returns this function, that update state, you pass that down to the child's component, in order to update the state on the parent.

Sidney  37:54  
I was gonna ask you if there was any, like, have it you guys in some of your design pattern interviews before I had to like explain some of these?

Emma  38:04  
Yeah, I had a Gatsby interview where they first of all, they let me choose between three different questions to answer which I Oh, that's so cool. One of those. Yeah, I loved it. Of course, Jason lengstorf was doing the interview. And he's like, the greatest human. So I'm not surprised. It was a great interview. But he one of the questions he asked was, can you explain what render props is? And I, I just, I was like, What is a render prop? So I've not directly been asked that before. But I didn't know.

Unknown Speaker  38:37  
That's totally there.

Emma  38:38  
But I think actually, I think actually, a lot of these are interview questions like, Can you explain the difference between composition and inheritance or explain a higher order function or higher order component? These things are asked in technical interviews, I wish that they weren't. But the reality is that they are. And it's the one suggestion I can give if you're asked one of these questions, first of all, practice responding to them. And don't just like rattle off like a W three schools explanation for it, like try to understand like, why, why these things are the way that they are. For me, that was always asynchronous programming was always the thing I had trouble struck like explaining, come up with a real world analogy that allows you to explain it because if you use an analogy to equate it to real world situations, your interviewer is going to be super impressed. And it'll help you understand it. So for me, like being asked some of these questions, it was like, oh, asynchronous programming, and this is a small tangent, but I think it's useful. asynchronous programming is like if you're at a dinner table, and the waitress asks what you want to eat for dinner and you give her your order, and she goes back in the kitchen starts making it And meanwhile, you can, you know, drink your drinks and eat your appetizers and talk with your friends. And if there's an issue creating your orders will come back to you and let you know and you can figure out what to do from there or still bring your food and everything's good. But in the meantime, you know, you're able to sit and enjoy your time with your friends, or used to be because you No, there wasn't a pandemic. But ah, so my point is yes, you will be asked these things in interviews, not every interview, and I highly recommend looking for analogies to help you understand and explain them. But

Ali  40:12  
I think that's great advice. Also, if you're looking for things that people will ask you, this is a really, really random tip. But I've been doing a lot of streaming recently of like live coding and things like that. And so many of these types of questions are things that people ask me while I'm live coding. So maybe that's another random tip is that a lot of you will ask you interview, ask questions while you're streaming?

Unknown Speaker  40:38  
It's good to know.

Emma  40:39  
Absolutely. Shall we talk about performance? Absolutely, yes.

Sidney  40:43  
Let's start with virtualized long lists. I kind of remember what's going on with this. But if I believe your application renders like long lists of data, we can use a technique called windowing. And this only renders a small subset of rows at any given time. So I know that that's like better. So you're not having to like do that infinite scroll. Like if you have like a bunch of like data, just kind of set on a page. And 3x window and react virtualized, are popular windowing libraries, just so you guys know.

Emma  41:23  
That's awesome. Yeah, it's funny, because I didn't know windowing was a thing. And at a very large tech company that ran for smoogle, I was asked something about like, infinite scrolling. And so I remember sitting there like, I don't understand how to like, how would I do this? Because if you have 1000s, let's say you're building Instagram, for example, they've got infinite scroll with their images. How do they do that? It's not like you can render every single image in the DOM. And you shouldn't be doing that with your react components either. So if you're trying to recreate an Instagram style application, windowing is definitely the way to go. And I remember being in that interview being like, like, I was probably architecting, what is the equivalent of one of these libraries, because I was talking about having like a stack. And as you scroll, you add things to a stack after certain points, you'll have 1000s and 1000s of items in your Dom at one point, and like, if you scroll back up, it'll pop things off and like, add them back to the DOM. And it was just like, this is a hugely important question or problem that solved in real world applications. And you very likely will be asked this in an interview. So

Sidney  42:28  
what about avoid reconciliation? Do you guys like have any advice or any like general information on that?

Ali  42:37  
Yeah, just think thinking about when your component is going to trigger a rerender. So think about the things that are going to trigger a rerender. And that's usually updates to state. And so trying to minimize that, if possible, so that your component isn't re rendering when it doesn't need to rerender

Emma  43:00  
absolutely makes sense. Absolutely, yeah. And react, you'll probably hear this term called the virtual DOM. So basically, like when a components prop or state changes, React is going to decide whether this Dom update is necessary by comparing the newly returned element with the previous one. And if they're not equal, it's going to trigger an update. And also, I would suggest being familiar with what the virtual DOM is, if you're going to react interview now, like, a lot of companies don't ask framework or library specific questions. But it's always good to be aware of some of these. And it's not even like

Sidney  43:34  
I, I react framework, like spec specific question, like, I know that that was something super important when I was learning JavaScript kind of going into es six that we needed to know like, what was going on with the window, like the actual kind of like document that you have when it comes to like a tab on like Google Chrome and things and what exactly you're able to do to manipulate the the document object model. So just make sure that you guys are kind of like going a little bit deeper into those like basic like JavaScript, and things like when it comes to the DOM to help you kind of understand a little bit better what's going on when it comes to react going into the virtual DOM.

Emma  44:18  
Yeah, I think we take for granted presentational aspects of web development often like HTML JSX. Like these things are often overlooked. 100%. And let me tell you, let me tell you right now, as someone who's gone through a ton of technical interviews in the past six years, I can tell you, there's a massive uptick in questions and problems surrounding the UI, a more so than there were a few years ago. So if you are going to be interviewing and I like that this turned into an interviewing thing. But to be honest, a lot of people are probably going to listen to this in the hopes of getting a programming job. You need to understand how the DOM works. Yeah,

Ali  44:53  
and I did get the what is the virtual Dom? As one of my interview questions at AWS, I believe

Emma  45:00  
I've had it before.

Unknown Speaker  45:01  
Yeah, me too.

Emma  45:04  
Let's talk about memorization we briefly touched well, Sidney gave us a great explanation about use callback and use memo. But essentially memorize heavy calculations. If you've got something that's going to take a lot of, not bandwidth, but like computation time, you should definitely be memorizing that. So that it's cached. And if you aren't asking for the same, like, pieces of data, you're getting the same response.

Unknown Speaker  45:31  
That's good to know.

Unknown Speaker  45:32  
Let's talk. That's, that's

Unknown Speaker  45:33  
good to know. This

Emma  45:34  
next one. This next one about performance, I did not even think about I'd heard like for debugging purposes, this was a bad practice. But I didn't realize for performance that also had implications. And that is anonymous functions. So anonymous functions. If you haven't JavaScript, you write like const, my function equals and then you have an arrow function, that's an anonymous function, it is not named. You can name functions with the function keywords like function, my function. And I think classes are also named, it's just like syntactical sugar. But basically, you see, anytime you see like const, variable name equals or, you know, another assignment, like that's going to be an anonymous function, they are not assigned an identifier, which means that they are not persisted with an opponent, when a component gets re rendered. And this is going to cause JavaScript to allocate new memory each time that components re rendering. So I didn't know that I knew it was really bad for debugging purposes. Because if you've got an error in your function, it's not going to tell you it's that function causing an error. Just how about we don't use anonymous functions in general?

Sidney  46:34  
I totally agree with that point. Because I, I need to make sure that I am understanding like, what exactly is going on with my function whenever it like produces an error? So I have, I always tell the students that I know of when I'm practicing JavaScript, like, please don't do any anonymous functions like that is that's going to be so hard for you to like, figure out what exactly is going on when you don't have it named. And it's just like, which function is actually producing the error? Even though you might have the line? You might have the line number, but that is so annoying, having to figure out like, why is where like, Where's this coming from? So that's very interesting that you're saying its performance?

Emma  47:16  
How does that call work with callback functions? Because let's be honest, I always do my callback functions anonymously in line, I'm not sure how that affects it.

Unknown Speaker  47:23  
I'm not sure either.

Emma  47:24  
But if any, if anyone knows, let us know. I'm sure we can do like a test. But I'm, it's 530. My time and I'm about ready to Yeah, no, I will hit happy our

Ali  47:35  
Evo that there are benefits of using anonymous functions, or arrow functions specifically within JavaScript, just because the scoping is different. And context is different. And so they just some cases, it's going to be essential to you, or it's going to be beneficial to use them. Not essential, because you could use like bind this or whatever. But that gets kind of confusing. So sometimes using them is the way to go.

Emma  48:01  
I think that was meant more for like your larger. Yeah, for sure. For parents, right? Yeah,

Ali  48:05  
absolutely.

Emma  48:06  
It's a good point, it's never a good idea to say never use these ever. It's like no, there are specific use cases, you would need them. So the last performance implication, I want to just quickly mention, and we've already talked about this enough, so I'm not gonna harp on it. But conditional rendering with ternary is or the double ampersand to mountain on metal component, it's going to cause the render the render, that's a new word, the browser to rerender or repaint and reflow. And that's expensive. So very much like reconciliation, the dot know that beneficial to not use conditional rendering, if at all possible. There's a great blog post, I'm gonna link it in the show notes. It's an incredible blog post called methods of improving and optimizing performance and react apps by Smashing Magazine. We're gonna link in the show notes. If you want to learn more about react performance.

Ali  48:54  
I also want to shout out next js and other libraries that like it. Because whenever you're using a library, like react, you're having to load that in, and it can cause performance issues, but it's really developer friendly. And so next, JS has a mode where you can make it so that your end user only gets HTML delivered to them, which is very your performance. And so if you're really trying to get something really, really amazing, that is super, super performance out there, more performant than react to be next j s is a really, really amazing tool for that. And we have a whole episode on that, too.

Sidney  49:33  
We actually know that I think about it. Um, what about testing, I know that this is something that eventually, you know, as you start going, going into jobs, like that's going to be important to be able to at least like after you've learned all this knowledge be able to test your code. So what are some things that we can use to test our react code?

Emma  49:56  
First of all, if you need to learn more about testing, we do. We did an episode with Andrew Jones, who is the queen of testing and we love her. We will link that in the show notes. But I've personally used a couple different libraries. So when I started with react I was using just with enzyme. We were using react Redux at the time. So I think enzyme. I don't remember if notes enzyme. I think the interfaces with Redux, I think, I don't know, nevermind. I don't know what I'm talking about. But we use those two. We currently use react testing library. But I think those are the only two that I'm familiar with. A great,

Ali  50:35  
those are the two that I have you used as well, although, yeah, those are. I think enzyme ingest, especially are the ones that I've used historically. But I've seen more and more good things about react testing library. So I think, and that's the one that's built into create react app now, too. So that's probably the way to go. Right. Oh, I

Unknown Speaker  50:51  
see. Okay, that makes more sense. That makes sense.

Emma  50:55  
Um, I'm Kent C. Dodds also has a course about testing react, and it's called fittingly. So testing react, isn't it? Is it tested? know, everything I know. Um, but yeah, if you're interested in learning more about testing, I would say go follow Angie. And go check out Ken's course. And we'll link to all of that stuff in the show notes.

Ali  51:15  
Another fun. This is not a fun to me, I don't know why I was transitioning. This is a fun debate. But something that I see discussed more and more is prop types and TypeScript. So prop types, your components get props sent from one component to another. And you can set up prop types to make it so that those props have to be a certain data type. And it gives you a warning, I believe if the data type does not match what it shouldn't be. But a lot more people are using type scripts within their react applications, which strictly enforces typing throughout your whole entire project. And so I've been seeing more and more people debating prop types versus TypeScript. In fact, I think Kent C. Dodds, who we just talked about, in testing, just tweeted out that he is taking prop types out of all of his courses, because he thinks people should be using TypeScript instead. And I personally think that TypeScript is a huge lift and is oftentimes much more complex for your programming to to learn, then something like prop types. So I think that that's a pretty big statement, and a pretty big decision to make. But something worth noting that some people are saying that TypeScript is really the way to go. Now. To

Emma  52:33  
be honest, like, I, when I hear that, I think it's almost a little bit unfair to pull prop types out of your educational material, because it is an integral part of the library that you're teaching. And you should not be making those decisions for your students like I that's just my personal salty opinion, because TypeScript Tallis point, it is like a, it's another piece of code that you have to add into your code base. And it's frickin hard to learn. Like, I'm going to say that right now, I struggled to learn TypeScript. And that's coming from someone who learned Java as a first language, which is strongly typed. If you want to learn TypeScript, which I think it's a great language, it is, it is a language if I'm not mistaken. There's a book by Stefan Baumgartner that will link in the show notes called TypeScript book word. I don't know if the TypeScript and 50 lessons highly recommend that. But prop types is a really great tool for people looking to get into prop validation, which you should be doing if you're building react apps. But who don't have either the bandwidth or the need to learn TypeScript. And I don't know, I just, I could go on about this, why I don't think that's a fair decision to be making for people. But I'm not going to

Ali  53:45  
I think it's really interesting to see this progression over time. Perhaps it used to be built into react, but the moved it into its own library two years ago, I think it was when Facebook was pushing flow really heavily. So flow is kind of like a TypeScript alternative. But it's built by Facebook. And so I think they were trying to get people onto that. But now TypeScript seems to be that the hot thing so I think more people are talking about that. But I personally don't. I'm not in love with TypeScript. But I know it has a pretty high learning curve. So it's a huge Yeah, to fall in love with. It takes time.

Emma  54:22  
I spend a lot of my days trying to fix TypeScript issues, and I understand the benefit of it. But to be on and here's the thing, it's a double edged sword. I also don't like prop types. I don't like either. I don't like the prop types just gives you a warning and it doesn't actually, like prevent you from doing things incorrectly. But you know what, I we need to do an episode about TypeScript. I think it's actually a valuable topic to discuss and maybe it's warrants bringing someone who is a TypeScript fanatic on to maybe argue in favor, but this episode.

Ali  54:57  
We should add that to the list though, I think it's an important time. She

Unknown Speaker  55:00  
was

Emma  55:00  
not TypeScript or should on TypeScript. Just kidding. Here. Sorry about TypeScript. I was not kidding. I'm salty about it, but just let us know. And maybe we'll add it to Susan. Oh, my goodness.

Ali  55:14  
Oh my god. We're growing up. We're getting.

Emma  55:17  
We're adolescence.

Unknown Speaker  55:20  
Nice. Anything else

Emma  55:21  
y'all want to talk about? For react? I know y'all want to react to make time for me to drink some fermented grape juice. I'm jealous with that. Let's, let's talk. I've had way too much of that today. Let's talk about shout outs. Shout out to my kidneys for filtering all this shit out. Kidding. All right, Cindy, what is your shout out for the week

Sidney  55:44  
the Candyman Tick Tock. Have you guys seen that?

Emma  55:47  
Yeah. No. Okay, please put it in the show notes. I

Sidney  55:52  
definitely well, so there's a video from Tick Tock that is circulating on Twitter. Shout out to this girl who had discovered that there was a huge hole behind her bathroom mirror and actually went into the hole and discovered that there was just this whole abandoned apartment unit that was like just in her bathroom mirror. And allegedly, this is what I have heard. Allegedly, she found bones that may look like that they were human bones. So I am praying for her. That is the most scary thing to have to look at. And yeah, I would definitely not want to live in one of those New York City old buildings. So shout out to her. I hope that she moves. And good luck to all of you sleeping tonight.

Emma  56:45  
Well, that sounds like a scary tic Tock. I did see it on your Twitter. I I'm gonna go next because mine is also I've changed it from a book to a tick tock now that you've mentioned Tick tock, tick tock to this is I shit you not the funniest Tick Tock I have ever seen. I died. I sent it to all my friends. They also died. It's called playground inspector. And he literally has this baby doll and he goes to these playgrounds. I think he's from Australia and he is the funniest person so after you're done watching the news, creepy bone. Watch mine. It's way more fun. alley What is your shout out for them.

Ali  57:19  
I need to get more into tik tok. I haven't gotten past the initial hump of it. So I need to

Sidney  57:25  
I have not either just so you know, like I find all this stuff on Twitter because like that's my addictive use right now. So yeah, I would I wouldn't get anything done. If I did Tick Tock. I wouldn't.

Ali  57:37  
Yeah, yeah. Yeah. Um, okay. It makes me feel old to not that old, but everybody on there is like 16

Emma  57:45  
Well, the question is, where do you park your hair?

Ali  57:47  
Oh, my goodness. I know, right? I can only do the off center because I feel like it just makes my face look asymmetrical. I feel like

Emma  57:54  
I look like Dwight schrute when I'm part.

Ali  57:56  
Yeah, yeah. And it's also the laughing emoji right are the one with the tears coming out that we're allowed to use? Because that makes us look old to a cheese? Kids. You know, I

Emma  58:06  
don't give a shit. I'm getting gray hair. I'm I don't know. Are

Ali  58:09  
you the current hair

Emma  58:11  
is stressed though. I think it's stress. Anyway, what's your shout out?

Ali  58:16  
Totally tangent here. Minus Kim's convenience was just the most adorable TV show on the planet. It is a hilarious It is about convenience store in Canada. It is very wholesome. Very cute. Very funny. I am enjoying it a lot. And it's getting me through a rough week. So the shout out to Kim's convenient.

Sidney  58:40  
Did you know that it was actually based on a play. It was based on a really famous play apparently in Toronto, and they finally decided to make it a TV show. So big ups. I absolutely agree with you. I love that show.

Ali  58:54  
It is so cute. It's just so wholesome. Like the first episode. I didn't like that much. But once I got past that, I was like, Oh my goodness, the show is amazing. It's great.

Emma  59:03  
That is awesome. Well, if you liked our banter, as well as the episode tweet about it. Let us know if you watch those tiktoks or the show. We select one tweeter each week y'all have not been tweeting and let me tell you, we give away free stuff every week. So we will pick one tweeter this week to an e4 cellos, a learning react book and even the most incredible teacher. I love her. She also teaches graph qL go look her up. But we post new podcast every Monday. Actually, the next episode is going to be our last episode for the season and it was going to be recorded with the video. So make sure that you're subscribed to be notified and leave us a review because we read them all the time and we love them. So with that hope y'all have a great day.
