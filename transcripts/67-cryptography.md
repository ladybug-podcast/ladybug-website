Emma  0:00  
cryptography is the method of protecting information and communication through the use of code. So only those for whom the information is intended can read and process it. Cryptography is used for many things from online banking to GitHub commits. Today, we'll dive into the basics of cryptography. So let's get started.

Kelly  0:22  
Welcome to the ladybug podcast. I'm Kelly.

Ali  0:24  
I'm city. I'm Allie.

Emma  0:25  
And I'm Emma. And we're debugging the tech industry. What are your experiences with cryptography? Kelly? Do you have any experience with creepers, grandma things?

Kelly  0:38  
You've been in Sweden for too long? Because you've forgotten how to speak.

Emma  0:41  
I know.

Kelly  0:43  
Second, I have no experience with cryptography. This is all new to me. Like I've I've been given things to enter in. But I have never actually configured anything that involves doing anything with photography. So this is totally new to me.

Emma  0:59  
We alley What about you? Yeah, pretty

Ali  1:01  
much the same. I have taught authentication a bunch of times. And sometimes like some cryptography stuff comes up in that. But other than that, really not much at all.

Emma  1:14  
It's just funny because it sounds like a really scary area. It sounds like you're in the FBI, and you're trying to like hack the mainframe. I guess that's what I think of when I think of cryptography. And to some extent, I think it's true, like that's what they're doing when they're hacking into things that they're trying to break through these cryptographic algorithms, I don't really even know what to call them. But so my experience is I took a class on cryptography in college, I was taking it pass fail, which meant basically all I had to do was pass the class and I didn't get a letter grade associated with my grade point average, I just had to pass it. And so we only had a midterm and a final and I bombed the midterm. I think I got like a 40%. And then my college like counselor came to me like, Oh, you know, sorry, you can't actually take this pass fail, you actually have to get a grade for this class. And I was like, Oh, no, like, I'm so screwed. Like I, I just bombed my cryptography, midterm. And there were only two exams. So I like went to my professor, and I just cried to him. And I was like, please help me like, help me study. And so I like studied my butt off for the rest of the semester. And I ended up with like a B in the class, which was really good. But yeah, that's great. It's hard. It's definitely not easy. But it's funny because I did actually receive a job offer from IBM to join their cryptography team. When I got my first job straight. After my internship, it was between a cryptography job in New York at Poughkeepsie, or an enterprise storage job in Austin, in Texas. And so I took the one in Texas, but I was offered a cryptography position. It's just, I don't know, it's hard. And honestly, like, I wasn't, I wasn't like, it wasn't my passion. But we're talking about it today, because I still think it's really interesting. And at least the foundational aspects are decently approachable, so

Kelly  3:01  
yeah, and I am totally cool with somebody who got to be in the class teaching me everything I need to know about cryptography.

Emma  3:08  
Alright, well, let's unlock the secrets of this episode. But um, okay, so what is cryptography? You kind of heard a little bit about that in the intro, but it's essentially just a method of protecting information and communication through your code or through the use of code, so only those for whom the information is intended can read and process it. So the prefix crypt actually means hidden and or volt, and the suffix graphene graphy. I can't really say that properly, but that means writing. And so hidden writing is what that word means. And there are

Ali  3:44  
a little bit more of it, but isn't a crypto where they keep like dead people.

Emma  3:47  
Yeah, like in Paris, they have the underground Crips that I visited. And it's literally just walls full of bones. So yeah, I guess it probably comes from French, to some extent, like, we're a French is French Germanic language. I don't know. It doesn't really matter. This. It's actually

Kelly  4:07  
it has a Greek origin. Ah.

Emma  4:10  
kryptos Oh, that's cool.

Ali  4:12  
That makes sense.

Kelly  4:14  
Yeah, it does. Also also Latin crypto.

Emma  4:17  
I like this is turning into like an etymology course,

Unknown Speaker  4:19  
I did not take Latin or an apology episode.

Emma  4:21  
But in any case, um, there are four main objectives of cryptography. What do you think the first one could be if you were trying to make something secure and safe? What is one of the things that you would want it to be?

Ali  4:36  
Well, we have the sheet and

Emma  4:40  
I'm trying to do this as if we're like in the class, but in any case,

Kelly  4:45  
yeah, well, okay. I know I'm reading it. But based on what you said, my first one I would go to is the authentication process of it. Because if it's going to be kept safe, I need to actually authenticate be able to do anything.

Emma  4:58  
Yeah, that's true. It's like you need To be able to validate someone's identity like how do you do that? electronically? How do you validate someone's identity over the internet? So you probably have way more experience with authentication than I do I have not done anything with auth. Oh,

Ali  5:11  
yeah, I used to teach passport j s a lot, which is like a nodal library for authentication. It's wild how to work it as compared to something like rails or Django authentication, where you can just like, kind of turn it on, you have to do a lot, so to get authentication with an Express. So that's pretty much my experience there. But

Kelly  5:35  
yeah, I've got experience with OAuth. So what is that exactly used for? Um, it's just it's a protocol that's used for for authentication. We use OAuth to authenticate that I am a like, if I build a Shopify app, for example, OAuth is what uses to authenticate that I have actually installed that app and I should have access to this. And I should have access to everything from Shopify as API in order to like pull products and pull orders and things like that. So I have to authenticate to actually receive that information. So that goes through the process of OAuth.

Emma  6:09  
Perfect. Yeah, I yeah, I haven't worked with authentication at all, is something I've always wanted to work with, like build a simple login application with OAuth or something. I don't know. But I'm sure some of our listeners have have worked with it. But yeah, authentication is one of the four pillars of cryptography or the four objectives. Another one, that's it makes sense, once you hear it stated is confidentiality. Like you want to make sure this information can only be understood by the person for whom it was intended.

Ali  6:38  
Oh, yeah, one of the biggest rules with authentication is never storing passwords in plain text, no matter where that password is. And so this kind of goes with that, say,

Kelly  6:48  
it's always an interesting conversation I have to have with merchants when we're migrating them from one platform to another as to why customers need to set up their customer accounts again, that we can set up the we can pass over like the email address and like create an account for them, but they have to set a new password. So like, why can't you just move the password over like, I don't have access to their password, I should never have access to their password. So it's a it's a blocker. But it's a necessary blocker for security,

Emma  7:13  
to be honest, like, understanding how keys work with enterprise applications was something that I still struggle with and did struggle immensely with. at IBM, it just kind of felt like something that everyone around me knew they needed to be doing. Like, oh, you need to store your a key and a private file and don't commit it like all these things. But we're not taught this. I was not taught this in my computer science degree. And I was never taught this, like, ever. So I always struggle with authentication and confidentiality and things of that nature don't tell my job that

Kelly  7:49  
I just tweeted at them so

Emma  7:51  
nice. So kind of along the same lines of your information shouldn't be understandable by someone for whom it was not intended, I found that really confusing. Like, it should only be understandable to the people you want to read it. It should also never be altered in any way. We want to make sure that someone can intercept it and change the contents that could be really harmful. And this, as we'll see later in this episode is really important if you're it if you're at war, and this was a huge thing. Back in the day during war when they were sending and receiving transmissions about they're like, I don't know now. What am I looking at strategy? Yeah, I guess that's the word I'm looking for. Yeah. So integrity is definitely an integral part of cryptography. So the last objective of cryptography is non repudiation, where the creator or the sender of the message cannot deny at a later stage, their intention in the creation or transmission of information. So it's kind of like they send a message and I don't know someone were to intercept it, the sender can't come back and say, Oh, I didn't do this. So that's the fourth objective. And it seems like there's a pretty straightforward process for cryptography. That is followed, I would assume, as well, in many modern web apps, right? Like to Ali's point, you shouldn't be storing your passwords in plain text, right, we have to encrypt our keys. So it starts out as plain text, we encrypt it using some encryption method. At that point becomes non readable. It's encrypted data. And the sender. I'm sorry, the receiver is going to decrypt that message using a key or some other method, and it will eventually return to plain text. So that's kind of the overall process, or any of you available with the different types of cryptography. Have you heard of like single key or symmetric key encryption or public key?

Kelly  9:44  
Yeah, I mean, public keys. I've like GitHub. I've used it across that there have been a couple other scenarios that I'm completely blanking on where I've had to generate a public key or enter it in somewhere. I'm still like, I'm still not past non repeating Because I'd never heard of that word before, either. And I googled it. And I mean, I guess it applies to other scenarios like Wikipedia gives the example of Mallory buys a cell phone for $100, and writes a paper check as payment, and signs the check with the pen. Later, she finds she can't afford it and claims that the check is a forgery. Unfortunately, the signature guarantees that only Mallory could have signed the check. And so Mallory's bank must pay the check. This is non repudiation. She cannot repudiate the check. But it's been like, apparently, like it, the general use of it is specifically in terms of digital security, which is something that's really interesting to me, it's like the it, it came about, specifically for digital purposes,

Emma  10:43  
it must have been a big issue. Like That must have been a huge issue back back when, you know, with people trying to play off the fact that they did or did not send something.

Kelly  10:54  
Yeah. So

Emma  10:55  
kinda interesting. It kind of reminds me of like, modern day issues would be like deep fakes, like, Oh, I didn't say that. You know, what I mean, is that maybe that's like, a common example of non repudiation is like, how do we prove that something is or is not? valid?

Kelly  11:12  
Yeah, yeah, that's but I think in terms of like signing a contract as well, like, No, your digital signature is actually valid. And you did actually sign this. And yeah, so

Emma  11:22  
very interesting. Yeah. So the first type of cryptography, we'll talk about a single key or symmetric key encryption. So with this type of encryption, you create a fixed length of bits, which is known as a block cipher. And you have a secret key that the creator or the sender uses to encipher data, and this is the actual process of encryption. And then the receiver is going to use this to decipher it. So one example is going to be the Advanced Encryption Standard or abs. And it was a standard published in 2001, by the National Institute of Standards and Technology as a Federal Information Processing standard. There's so many like acronyms in this, I can't handle it. But yeah, this seems to be a pretty straightforward, pretty popular method of encryption. We'll talk a little bit more about ciphers in just a minute. But I don't To be honest, I don't know that much about symmetric key encryption, it just seems like, Okay, we've got a secret key that you know, the person receiving this message needs to have in order to, to read this message, and you're good to go. Seems pretty straightforward.

Ali  12:26  
Yeah, there's like a hashing algorithm, right, which is how the text or whatever is actually encrypted, and then the inverse of it is used to decrypt it, right? I don't know, I think you have a salt that starts the process as well, which is like some sort of phrase that you provide to start the hashing algorithm,

Emma  12:48  
you know a lot about that I actually know not that much about like single key or symmetric key encryption.

Ali  12:54  
I don't know at least that's my experience with it. The next one that we're going to talk about it, though, is public key, which you have to do for GitHub, right, in order to get SSH working for GitHub.

Emma  13:05  
Yeah. So do you want to quickly talk about that? And also, can you define what SSH means?

Ali  13:10  
Oh, I have no idea what it stands for is what I'm now now learning. Um, but SSH is when you essentially, like connect to a server via the command line.

Kelly  13:25  
It stands for Secure Shell Okay,

Ali  13:26  
there you go.

Emma  13:29  
I asked you that not for our listeners benefits, but for mine, okay, cuz I didn't know either.

Ali  13:34  
Okay, cool. Um, but normally, if you want to get onto like remote server, you'll have to SSH onto it. But then GitHub allows you to clone and push and connect to GitHub in two ways. One is via HTTP, I think. And then, which is not what I use, but there's also the SSH method. And in order to do that, you have to set up the public keys on your computer. Do you all use the SSH version or the HTTP?

Kelly  14:07  
I mean, I've been using HTTP version, but I've used other SSH things in the past May. I mean, maybe I do. I it's been so long since I've actually looked at my configuration that I don't remember. But I was just looking at a list of SSH clients because it's been a while I used to do things with SSH that I just yeah, totally forgot about. And there are a couple of clients that I had recognized by name like open SSH and putty

Ali  14:33  
putty I definitely see is that in college, actually, to submit assignments, we had to have the server that stored all of our homework on it, and so we'd have to SSH but I like a little bit more modern. I've used SSH to get onto servers at work and stuff.

Unknown Speaker  14:53  
But, yeah,

Ali  14:55  
yeah, I think that SSH just is just a protip. Every time that you Do the SSH version of GitHub, you have to set it up on new computers. So you would probably know, but I find the user interface for it much more straightforward, and it works more consistently than the HTTP. So I don't know if anybody's listening to this, I strongly recommend SSH version of GitHub instead of or the GitHub CLA. This is now totally tangential. Um,

Kelly  15:26  
that's okay. I think I actually do use SSH.

Emma  15:30  
I think I do. Remember, but I'm just What I don't understand is why even bother having a public and a private key? Like, what's the benefit? And like, if it's public, like anyone should know what that is? Right? So why even bother? Why don't you just have the private key? That's what I don't get. I don't understand how it works. So

Ali  15:49  
I'm not totally sure either to be honest.

Emma  15:52  
Yeah, I don't understand. Okay. So one example is because

Kelly  15:57  
I think one gets sent to the server. And so if you only had a private key, then it's no longer private, because it has to be sent to a server, whereas the private key will always stay with you, and only you. So they mapped together, but the whatever you expose to a server, that's what's actually going to be shareable.

Emma  16:16  
I wonder, I guess, I think

Kelly  16:17  
at some events will be like a project,

Emma  16:18  
I guess you could equate this to like. So in Europe, as many apartments as I've been in at this point, you everyone has the same key for the front door to get in the building. But then you've got your own private key for your apartment, maybe it's something similar. That's a good analogy. One example of what is this asymmetric key encryption is the RSA algorithm. And this stands for oh my gosh, I can't pronounce their names. But essentially, this acronym is three last names, I think of probably the founders or the creators of it. And RSA is an algorithm that's used by computers to encrypt and decrypt messages, shocker. Because that's what we're talking about. But so asymmetric. Yeah, it means are two different keys. So from what I can read, yeah, one of the keys can be given to anyone and the other one has to be kept private. I just, I just don't understand. I

Kelly  17:15  
just, I had no idea that RSA was an acronym for the inventors of RSA. Yeah, that's fascinating. It's like Rivest Shamir Adelman Edelman. Yeah.

Emma  17:29  
Interesting. Just think it's interesting how this is so mathematical. It's like, it deals a lot with permutations. And oh, gosh, this is why I did so badly. Because I'm not good at that type of math. I always did really badly in those types of math classes. And so maybe that's why like these, if you go look at the Wikipedia page for the RSA algorithm, it's just like a lot of like, theta. I just, I see Greek symbols. And I just shut down. I can't. So maybe that's why I didn't do great at cryptography, which is why it's so great that I'm teaching this to you all today. You know,

Kelly  18:05  
I never realized like I use RSA a lot. Like when I was working at CDC, for example, we had like the hard RSA token that was like goes on our key chain that just regenerates a new six digit number every 30 seconds. And that's what we use to actually authenticate into the system at at CDC. That's

Emma  18:26  
what I use at Spotify. They have the Google authenticator app. Yeah, those are really nice, because you can get push notifications that you can accept, or you have the six digit turned over, like values that you have to input into a website. I was

Kelly  18:41  
I was trying to understand like, is there a difference between like, two FA via something like coffee or Google Authenticator and RSA?

Emma  18:49  
I don't know,

Kelly  18:50  
or is that literally what it is? I don't know. I'm just I'm not sure. Like, because there are they're all six digit codes. I also have one from Symantec as well, like another app that that does a six digit code.

Emma  19:04  
I don't know from everything that I'm looking at right now. It doesn't explicitly state that multi factor authentication isn't a type of encryption, or it's a good doesn't equate it to RSA as far as I can tell. But essentially, it's just like, I would assume that multi factor authentication is a type of cryptography and ensures the integrity right. What are the other four aspects that we talked about integrity is the whole authentication piece of a

Kelly  19:31  
non repudiation. I'm never gonna forget that word now.

Emma  19:34  
So I think, yeah, I would say multi factor authentication is like a type of cryptography Now, what's going on under the hood? I don't know. I couldn't tell you. So to maintain this data integrity, we use these things called hash functions that Allie previously mentioned. And basically, led you want to explain at a high level what a hash function is.

Ali  19:54  
I'm not sure if I could do this justice. But essentially, it's a function that does this encryption. So It takes some sort of, you know, it takes somebody's password, and then it encrypts it according to the algorithm that you have defined.

Emma  20:07  
Yeah. So I think that definition that I found is that it returns a deterministic output from an input value. And it's used to map data to a fixed data size. So I guess, given the same input, it will always return the same output. But, you know, we just talked about GitHub, GitHub you commits use Sha. And Sha stands for Secure Hash algorithm. And so we've got Sha one, two, and three. And honestly, I don't know the difference between any of them. But I never realized that commit messages were Secure Hash algorithms. And like how it all works. It's very interesting. I also like in our show notes that you have on here is Sha one shot two and three, I told you my English is great. I think at this point, the Scandinavians speak better English than I do. But let's, let's talk about a really fun cipher. This one's my favorite. It's one of the quote unquote, easier ones to comprehend. I don't like that word. But when we talk about the complexity of different ciphers and different encryption algorithms, I think this one is by far the most straightforward, we'll use straightforward instead of easy. This one's called a Caesar shift cipher, that's so hard to say, Caesar shift cipher. I'm worried I'm gonna say something believable on this podcast. But this is the simplest encryption method. And it's a substitution cipher, where each letter in your plain text message is replaced by a letter that has some fixed number of positions down the alphabet. So let's say we have a left shift of three, D would be replaced by a, he would become B, and so on. And this method was named after Julius Caesar, who used this algorithm and his private correspondence. What was he? What was he writing about that required him to create an encryption method?

Ali  21:56  
Probably war things be my guess.

Emma  21:59  
Make sense is dire at Korea secret life?

Ali  22:02  
This is a pretty common like hacker rank type problem. If you go on those. Yeah, Caesar shift. Yeah. Those types of sites, it's not very difficult to implement at all. Well, I mean, relative,

Emma  22:13  
right. It's like you have like a font. I think the only tricky thing about that would be once you get to the end of the alphabet, wrapping around. Yeah, like, how would you solve that? Like, let's just talk about that for a sec, because that is like a decently common problem. Because it's really easy to say, oh, take every letter of the alphabet and map it to a corresponding one, right, you could do it iteratively iteratively, where you've got a dictionary of sorts, or like a,

Ali  22:42  
what I object always do is I just do a, an array or a list of all the letters in the alphabet. So then each one has an index value. And then you can just like subtract three or whatever, and then you use a modulo to if you get past the end.

Emma  23:00  
That's super smart. But so yeah, so let's say like you're at index 25, which would be as the I believe, and then you've got a shift of three, what you would or no, it would be the other way, it would be like if you had a one, right, and you had a shift of three. And that would put you at a negative number. Yeah, if you modulus, am I right way. This is very good. Yeah, no,

Ali  23:25  
you I think you're good. The other thing is that some languages support negative indexing, like Python supports negative indexing, and then it becomes much easier. So Hmm,

Emma  23:34  
there you go. Interesting. noise. Nice. So yeah, that one was always my favorite cipher, probably because I found it like the only one I can understand all the other ones I did not do well. So now that we've talked a little bit about the types of encryption, let's talk very quickly about the historical context of this. One example of historical cryptography as the Enigma machine. This was probably one of the biggest examples of how cryptography was used in in warfare. So the Enigma machine was a cipher device developed in use in the 20th century to protect military communication. And it was used by Nazi Germany during World War Two, it was definitely considered to be extremely secure. And it was an electromechanical rotor mechanism. And it just scrambled the 26 letters of the alphabet. I won't go into the details of how it works fully, but it had something to do with, again, rotor mechanisms, and it had to do with lights and plaintext and all of that kind of thing. We'll link a couple resources in the show notes. If you want to check out more about the Enigma machine. It's super interesting. But what was really cool is that in December 1932, a Polish mathematician and cryptanalysis use the theory of permutations and flaws in the German military messes procedures to actually break the keys of the plugboard Enigma machine. I can't even imagine how do you look at something that complex and intercepts the message And just understand how to decrypt it. I don't understand that at all,

Kelly  25:04  
you know, who can probably do this are Taylor Swift fans who figure out everything but Taylor Swift slips those easter eggs into everything that she does.

Emma  25:13  
That's the modern, there are a lot of people that should go into photography, who are just using their social stalking. And I just can't imagine I don't know, I find the history of computing really interesting, especially as it pertains to modern warfare and like, like different strategies, but I just don't understand it. I don't think I'll ever understand it. And I don't know. I always envied people who were really, it seems naturally intelligent to be able to look at something and just decipher it. Was that like a beautiful mind? The movie? Like, wasn't he able to do that kind of thing? Was that about cryptography? Or is that like mathematical equations? Oh, I have not seen I don't remember.

Kelly  25:55  
I think I thought it was like, he I know. He was like a math genius. I don't know if it had to do with cryptography.

Emma  26:01  
I think a lot of this is math. I think that's why I struggle so much with cryptography in general, just conceptually, is because a lot of it is heavy math

Kelly  26:08  
is totally Yeah. I know that I think about it. It's totally related to cryptography. Yeah,

Emma  26:13  
it has to be. There's just funny, it's like, people think of hackers or computer programmers. They just think of people hacking mainframes. It's like I think of cryptography. And I think of the main character from A Beautiful Mind, just like all these numbers floating around him, and he's just deciphering things. It's probably like, if you were to get a job in cryptography, that's probably not what it's like. I can assure you that is probably not like that. But that's what I think of.

Kelly  26:38  
It's like people who work on like, red teams and stuff for like hacking, like not that they just sit there and just like, they look like the hacker on television doing or on movies. It's the little low

Ali  26:47  
end green terminal.

Kelly  26:49  
Yep, that's all I do. Rapid typing in that?

Ali  26:52  
For sure. For sure. Um, I don't know, I think something that we should talk about as well is that probably rolling your own cryptography. algorithms in applications is probably not the way to go. If you're like us. Just from a security perspective, it's probably going to be better if you use a managed Authentication Service. So something like AWS zero or Amazon cognito, or I'm sure there many others out there that you can use their authentication systems that they have created, instead of doing all this here. Yeah,

Kelly  27:32  
I just think Don't try to reinvent the wheel and be creative here is

Ali  27:37  
security, frankly, exactly. Especially not using like the Caesar Cipher, whatever, because that's to store your password, because that's pretty easy to crack.

Kelly  27:49  
Just looking at it. Yeah.

Ali  27:52  
So I would definitely recommend those that makes it so that it's like a couple lines of code to get authentication instead of having to write a hashing algorithm and all that.

Emma  28:02  
Right, those from scratch every time.

Ali  28:04  
Yeah, cute. That'd be super funny. Well, not really funny. That'd be more dangerous than anything. We did have even worse hacks of every website.

Emma  28:14  
Oh, my gosh, I remember the day like back in the day, I didn't even know two factor authentication was the thing. That scares me, to be honest, it wasn't that long ago. It wasn't Yeah,

Unknown Speaker  28:24  
I

Ali  28:25  
don't even think it was a thing before relatively recently. Probably the last like decade or so. This is

Emma  28:31  
your sign. I feel like a tick tock person, this is your sign to go have a photo shoot in a motel? No, this is your son to enable two factor authentication all of your all of your things your bank, your social media. It's very important.

Kelly  28:47  
Okay. Also talking to FA the codes are more secure than sending a text to your phone number because if you lose your phone, or somebody steals your phone, they can still get access to your phones. That's more on the companies who default to just using SMS for for validation. But speaking of two FA I googled it to FA came out in 1980. Oh,

Ali  29:09  
wow. Okay, so it has been around long. Yeah.

Kelly  29:11  
I was just it says though there have been several predecessors to the modern day two FA system. The two FA that we will recognize today was made commercially available by the RSA company as a key fob in 1986.

Emma  29:24  
Oh, a key fob.

Kelly  29:27  
That's the key fob that I was talking about that I used at CDC. Oh, wow. I'm sure it looks

Ali  29:32  
like he's at work. And it's the best thing ever. Yeah. Because people use these in slack all the time, which is one you just randomly press your yubikey and, you know, like a Slack channel or whatever. And it's just a bunch of letters. I don't know it makes me laugh.

Emma  29:49  
Want to, I want to give a shout out to the whole country of Sweden right now because and maybe this is my shout out for the week. So we can skip me later. But one thing Sweden does really, really Well is authentication. So when I signed up for a bank account, they gave me this card reader that you, it looks like a calculator, but you stick your card in. And to validate with your online banking, you have to physically have this keypad that you enter your passwords and stuff into. And they'll give you a code that you then have to type in online. And you do that until you get this thing that's called bank ID. And the whole country is using this bank ID system. And basically, anytime you make a purchase online, it's all done with bank ID. So you can create accounts with bank ID, it's so nice, because I don't have to remember username and passwords for anything. It's just like log in with bank ID to your health insurance. To buy a product online to buy things anywhere. Essentially, you're using your two factor authentication app. And you can use face ID you can use like your, like passcode. But everything is done with this. And so it honestly Sweden is the most secure country I've ever been to.

Ali  30:54  
That's so cool. Oh, wow.

Emma  30:56  
That's really cool. If you are interested in this topic, there are a few different courses that we recommend that you can check out. The first is a Coursera course I like Coursera. Personally, some other courses are hit or miss. But in general, I think you can take the course for free. And it's only if you want the actual accreditation, or access to special things that you have to pay for it. Coursera is generally a great place to learn. So we'll link that one. There's also a cryptography crash course on YouTube that you can check out. And lastly, there's one on Khan Academy as well. So if you want to learn more, could start with those three.

Kelly  31:30  
Well, I love that they're free resources.

Emma  31:34  
I feel like I'm kind of surprised though I'm kind of surprised they're not paid. This seems like an area that would charge money to learn some of these things.

Ali  31:43  
Yeah, I think of it as such a college thing, too, that it's interesting that it is free. But that's cool.

Emma  31:50  
He really is. This is not something that you learn in boot camp programs or as a self taught developer, which is very interesting. And this is a maybe it should be maybe it should be something that we at least are made aware of, from an authentication perspective, because I still struggle with authentication to this day. But it's important if you're going to be a developer,

Ali  32:08  
we taught it at GA, kind of this stuff in here. But I don't I had mixed feelings about it. Because it was one of those things where I was like a junior developers not gonna be rolling their own authentication system. So I kind of don't even I think that there are more important things for them to, to learn. But I do agree that maybe having some sort of security fundamentals would be really important. And we did that as well.

Emma  32:34  
Definitely. And we actually have an episode this season with special guest Taylor Tolliver that talked about web app security. So we'll link that in the show notes. If you're looking to learn some more about security that's maybe more web application focused. But with that, since I give my shout out to the entire country of Sweden, Kelly, what's your shout out?

Kelly  32:56  
My shout out this week is to gusto, which is our HR and payroll solution. I've had a couple incidences occur over the past few months that have required their HR support that I'm entirely thankful for helping me navigate because I am definitely not an HR expert and do not want to run into any legal issues. But most importantly, they helped me offer health insurance to my team at a very affordable rate. And I'm as we're recording today, today's the day that the health insurance kicks in for my team. And I'm really, really excited to finally be able to actually offer this

Ali  33:32  
might as much later it's kirkstone, which is a board game. I could be pronouncing that wrong. I think it's Italian. But it is really, really fun. You have to have a lot of strategy for it. And there's also like expansion packs. So the game is always something different. I don't know I have fun with it. So recommend, especially if you're looking for you know, we're almost like a year into quarantine. Now, this is nuts. So always looking for new things to

Emma  33:59  
Oh, it's a German style board game that it says shape the medieval landscape of France claiming cities, monasteries and farms. It's like real life Farmville.

Ali  34:08  
Yeah, it's so much fun. It requires so much strategy. Very cool. And again, you can buy these expansion packs and make it a whole different game. So if you're looking for a new challenge, I highly recommend

Emma  34:21  
board games are highly underrated.

Unknown Speaker  34:23  
Yeah, okay. Agreed

Emma  34:25  
noise. Well, if you liked this episode, tweet about it. We select one tweeter to win a copy of the code book by Simon Singh this week, and it looks really really cool. It got great reviews, and it'll help you learn about lots of things expanded on the cryptography topic, but we post new podcasts every Monday so make sure that you are subscribed to be notified and leave us a review. And with that, hope y'all have a great day.
