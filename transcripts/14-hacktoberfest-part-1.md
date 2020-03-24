**Kelly** [0:00]
October means it's time for Hacktoberfest. And because of this, we're bringing you two episodes this week, Hacktoberfest is an awesome event where you can get involved in open source, whether it's your first time contributing, or you're a seasoned pro. In today's episode, we'll discuss what Hacktoberfest is, how you can start contributing to open source and with our special guests, Peter and Jess from Dev we'll talk about how you can maintain your own open source project. We'll be dropping another episode on Thursday. So keep an eye out for that. But for now, let's get started.

**Kelly** [0:30]
Welcome to the Ladybug Podcast. I'm Kelly. I'm Ali. And I'm Emma. And we're debugging the tech industry. This week's episode is brought to you by LogRocket. How many times have you struggled to figure out an annoying bug in your app? Well struggle no more. LogRocket lets you replay what users do on your site, helping you reproduce bugs and fix issues faster. You can see a perfect replay of what your users saw, inspect Redux actions and state at any point in time, view every network request and response, and even inspect console logs and JavaScript errors. LogRocket lets you support your users without the tedious back and forth conversations. Plus it works with React, Angular, plain JavaScript, Redux, Ember, and Vue. Check out LogRocket today to improve your debugging workflow.

**Ali** [1:14]
Awesome. So we have some special guests today. We have Peter and Jess from Dev. So go ahead and tell us about yourselves.

**Peter Frank** [1:22]
I'm Peter, I'm one of the co founders here at Dev. I work alongside Ben and Jess in running the community and building the Dev platform, which is an open source, social network for programmers of all backgrounds and experience levels to come on and participate in discussions and publish your own articles and generally stay up to date with what's going on in software.

**Ali** [1:46]
Very cool.

**Jess Lee** [1:46]
Like Peter mentioned, I'm one of the co founders of Dev. He already described what the platform is. So I'll just say that I'm also the COO. And so I focus on a lot of our internal operations with the team.

**Kelly** [1:57]
Awesome. Alright, so let's get things started with super, super basics. Can you tell us what open source is?

**Peter Frank** [2:05]
Open source software is software that is free to inspect and modify and use by people throughout the software community and even end users. So whereas closed source software is proprietary, and limited to the companies that actually developed it, open source software can be inspected, and changed and improved by all stakeholders. So it generally is with buy in from the community yields, code that is more durable, better tested, and can be, you know, a bit more nimble than something that's purely the product of a single company.

**Jess Lee** [2:44]
And analogy that I've always loved is that open source code blossoms and close source code decays.

**Ali** [2:53]
I really like that. That's awesome. Okay, so one of the big reasons we brought you on today, other than you just being awesome, of course, is that you all are sponsoring Hacktoberfest. So what is Hacktoberfest?

**Jess Lee** [3:07]
Hacktoberfest is a month long dedication to open source, where people from all over the globe will contribute to open source repositories and projects. And in exchange for that receive a cool t-shirt and a bunch of stickers.

**Peter Frank** [3:25]
Just to build on top of that, I believe this is DigitalOcean's fourth year or fifth year of operating the Haktoberfest campaign, in celebration. And just want to make clear that though Dev is a sponsor, and the only sponsor alongside Digital Ocean this year, it really is their campaign. And that's Registered Trademark and all of those great things. So we're very lucky to have such great friends at DigitalOcean that we've been working together as Dev sponsors for over a year and a half. And we're really excited to be working with a group of folks that really believe in open source as much as we do.

**Kelly** [4:02]
That is really cool. I've never actually participated in Haktoberfest before. Have either of you?

**Jess Lee** [4:07]
Last year, there were a few contributions to the Dev repo. But I personally have not participated in HacktoberFest, not the actual campaign, I may have done like four PRs in the month of October, but I didn't get the free shirt.

**Peter Frank** [4:21]
Well, one thing that I think is cool about the way that DigitalOcean and the general Hacktoberfest celebration is run is that they honor PRs, whether they're merged or not, in any repo, whether they're explicitly participating in Hacktoberfest or not. And even if you sign up on October 28, and you had made multiple PRs earlier in the month, those are also respected. So I feel like there's a very holistic alignment of it's not about the t-shirt, it's not about the sticker pack, it's not about writing the most world changing code that, you know, dramatically affects these projects. It's really just participating, getting started, sort of being a part of this open source movement.

**Ali** [5:03]
That's awesome. I've actually participated at least the last two years, maybe three, I'm not 100% sure, but definitely have the t-shirts. For sure.

**Jess Lee** [5:12]
I didn't realize that the PRs don't have to be merged. That's actually... that makes it so much more accessible. That's awesome.

**Kelly** [5:18]
Yeah, especially if you've never contributed to open source before, it, you know, kind of reduces the barrier of barrier to entry there. Because, you know, if nothing ever actually gets merged, then at least you can still say that you participated and maybe get a shirt. So tell me a little bit more about like getting the shirt or getting the stickers, like, what exactly do you have to do. Is [it] like a certain number of PRs, or, you know, what, what is it?

**Peter Frank** [5:40]
To earn a shirt, or to earn the full rewards you have to submit for PRs in the month of October, that are not deemed to be invalid. So if you submit a PR that's clearly spam, or purely just trying to put a checkmark alongside that requirement, it might be marked as invalid by the maintainer. But, otherwise, if you do four valid prs in the month of October and register on the website, which I believe is hacktoberfest.digitalocean.com, you will be eligible to receive a t-shirt reward. And this is all run through their system, which actively monitors the PRs going on to the GitHub platform. And so it's really as simple as that, again, it doesn't, the PR don't have to be merged. They don't have to be in four separate projects. You don't have to be registered on the Hacktoberfest platform before doing your first PR. They're really trying to make it easy for folks to participate and get rewarded.

**Jess Lee** [6:32]
Should add a little asterisk, asterisk is that how you?

**Kelly** [6:35]
Yes

**Jess Lee** [6:38]
Is that it's actually the t-shirt reward is limited to the first 50,000 contributors and an additional 20,000 will get sticker packs.

**Kelly** [6:50]
Okay.

**Ali** [6:51]
That's a lot of people. Yeah. So one of my favorite parts of Hacktoberfest is that it makes it really accessible for new people to open source to get involved. And like this year, I'm having a bunch of my students participate and had that happen last year as well. And so what should people who are new to contributing to open source look for when they're looking to contribute?

**Jess Lee** [7:12]
Yeah, I love that this campaign is like the gateway drug to open source. Things to look out for. So like, basically, we really recommend maintainers to do a good job of labeling all their issues and making their contribution guidelines as clear as possible. So as a first time contributor, that's what I would look for. Most, I think most, repositories would have a label that's like good first issue or good for newcomers, or something along the lines, like beginner friendly. And those are usually the issues that are a lot more manageable for someone who's never contributed. Again, I would skim through the docs of whatever project you're interested in and just see if you feel like you have all the information that you need. And if it doesn't, then if there's another project, I'm sure there are other projects that that would have that information. Also kind of looking through previous issues or PRs to see how communicative the maintainers are will also give you a sense of how much support you can expect to get

**Kelly** [8:12]
That's smart. I have two questions. First off, do all open source projects like are they all participating? Or is it only certain projects that participate?

**Peter Frank** [8:21]
It's every open source repo and all of GitHub, whether they've officially registered, whether they've officially tagged issues as Hacktoberfest eligible. It's, it's every repo you see, and it's every legitimate PR you can make to any of those repos.

**Jess Lee** [8:36]
Yeah, I should add, there is like an official Hacktoberfest label. They don't have to, repos don't have to use it to be qualified. But if you're doing this for the first time, you probably want a repo that is using that label so that they are like actively thinking about this campaign. I

**Kelly** [8:52]
I love that. I love that you can literally contribute to whatever is most interesting to you. So my second question, I contributed too, I opened my first PR on an open source project, like two months ago. That was my very first one. And it wasn't like incredibly nerve racking. I knew exactly what I was doing. But it was still no, I was nervous. Oh, what would you give? What advice would you give to somebody who is also new to contributing to open source that they're nervous about making their first contribution?

**Peter Frank** [9:22]
Well, I had a very similar experience, even just within the last month of making my first PR to a non Dev-owned repo. And I was very nervous, because if you're a bit new at this, even navigating GitHub, and PRs, in the sort of proper merge, pull request, sort of lexicon can be intimidating. So what I did was I read the repo that I wanted to contribute to really closely, I identified the change that I wanted to make, which in my case, was literally fixing a typo in the README. And despite it being about the sort of lowest level of contribution one can make, I submitted the PR, had it merged and got a thank you from the maintainer. So I think the moral of the story is to read the repo, try and understand what's going on, but also just don't get too freaked out about it. The repo maintainer is all things being equal, are generally going to be excited and thankful for the assistance. And once you do that first one, you sort of get that adrenaline rush, understand you're part of something bigger, and it can sort of get the ball rolling to do more and more.

**Kelly** [10:27]
That's awesome. In my case, my first contribution was to Gatsby. I was making an adjustment to the Shopify GraphQL API, which, obviously everything in my life is set to Shopify, so I'm not really surprised that this was my first one. But I actually I had DMed, Jason Lengstorf, because he obviously Gatsby. And I think I sent him like 20 DMs just like, "Oh, God, am I doing this right Am I doing this right? What am I doing?" and just having an open conversation with the maintainer was actually really helpful as well. So I would say, you know, in my case, reaching out on Twitter was helpful. If you've never contributed to open source before you might find the same benefit.

**Jess Lee** [11:03]
Yeah, I'd say, doing everything sort of, quote, unquote, in your control first, such as reading through all documentation, make sure that you're doing it in the format that they, that the maintainers appreciate, then for the uncontrollable aspect of like nerves and anxiety, I find that being transparent is really helpful. Like if you literally are like "This is my first PR, and I'm feeling nervous", people are pretty receptive to that. And they're less likely to, like, they're more likely to just be a little bit more caring, a little bit more considerate, if you're communicative of how you're feeling. But also, like Kelly, you mentioned, you're able to connect through Twitter, I'm... Like a lot of different projects have a separate place that they like to communicate whether it's through Slack, or Discourse, or Twitter. So connecting with somebody directly before you make that PR, I'm sure I'm sure it helps.

**Ali** [11:52]
Yeah, I think so interesting subtext from all this too, was that your first PR or any pull request doesn't have to be this massive feature that's completely changing the project, changing a typo in the documentation is still helpful, and a totally valid PR, and that will get you one of your pull requests for Hacktoberfest.

**Kelly** [12:11]
It's true. Also, my first pull request was very selfish, I just really needed to use one specific part of the GraphQl API for something I was building.

**Ali** [12:20]
Amazing.

**Jess Lee** [12:21]
My first PR was a documentation update, but it was on a tool that I was actually using. It looks totally inactive too, so I was really shocked that anyone even responded to the PR.

**Ali** [12:33]
I love that. I don't remember what my first one was, but probably something documentation related. Or maybe there are lots of like guides that come out for Hacktoberfest too. Like, you know, everybody contributes to blog posts essentially on different topics. And so that may have been part of it, too. But well, yeah. So another question. And you all kind of went into this in your intros, but is Dev part of Hacktoberfest, like the Dev code base, and can people contribute to that?

**Peter Frank** [13:04]
So Dev, being an open source project, which is hosted on GitHub, is eligible for that that very basis. But as I'm sure Jess will expand on better than I can, we're also trying to be a good example of a repo that's really groomed with the proper resources and prerequisite sort of materials, so that a new contributor can come in, understand how to get working on something and then sort of where to get started.

**Jess Lee** [13:30]
Yeah, exactly. We... we're putting a lot of time and effort this week or so to really clean up the repo and try and make it a lot more approachable for new developers or just people who are new to the project.

**Kelly** [13:45]
Before we continue on, we want to give a quick shout out to a couple of our sponsors.

**Ali** [13:51]
DigitalOcean offers the simplest, most developer friendly cloud platform. It's optimized to make managing and scaling apps easy with an intuitive API, multiple storage options, integrated firewalls, load balancers and more. From predictable pricing to flexible configurations to world-class customer support, you'll get access to all the infrastructure services you need to grow. Plus DigitalOcean's community provides over 2000 tutorials to help you stay up to date on the latest open source software, languages and frameworks. Get started on DigitalOcean for free with a free 50 dollar credit at do.co/ladybug. That's do.co/ladybug.

**Kelly** [14:31]
What is it like to run an open source company?

**Jess Lee** [14:34]
I mean, it's awesome. We wouldn't have it any other way. We were closed source initially. And so it was a deliberate decision to open up the code base. And it's been amazing to see the community grow from both the platform, but also on the project side, there's a surprisingly large amount of members who don't really post on Dev, but are active contributors to the platform, one of the most special parts has been to hire from the open source community itself. And we get really good feedback from the community, because we're actively engaging in the discussions of like new features, people are making proposals to us all the time. And just like finding bugs. And really, we have a small team, we have six full time developers on our team right now. And so we're pretty small. And I'd say that [we're] pretty reliant on all the help that we get from the community. And so going open source has really only benefited us.

**Ali** [15:29]
I love that

**Peter Frank** [15:30]
Going open source provides a lot of constraints, but they're good constraints. They're the types of constraints that mean, we can't do evil things, that we can't exploit our users. And I think that there's oftentimes, and rightfully so, the expectation or the misconception, that open source necessarily means nonprofit. And you can still run a for-profit enterprise that has aspirations to be very valuable, it also typically means that you have to do that in an ethical way. And that you have to respect your users, that you have to operate with integrity, because anyone can go inspect every file in the entire code base. So for us, it's been an incredible sort of asset and resource. And that's largely because, or that's certainly partly because, we're actually dealing with developers, so developers on the dev platform, and not only the content producers, and the people leaving comments, and the people leaving reactions, and following each other, they can actually be the people fixing bugs, and proposing features. And that's a very special feedback loop that Jess was describing. That's unique to Dev, but it's certainly not unique in terms of where open source is, open source companies can operate and drive.

**Kelly** [16:41]
I love that. Can you tell me more about the process or like what you went through to convert your company to be open source?

**Jess Lee** [16:49]
Yeah, so there's elements of being closed source that you just want to make sure is secure. So that's like, the biggest concern with going open source is that you have a vulnerability and somebody with... a bad actor won't notice it and and be exploitative. So, so yeah, that was our biggest concern with going open source. And to combat that, we invited a bunch of people from the community to come into the sort of private code base on GitHub, we gave them access, we paid for those extra seats, and just got lots of eyes on it. And we actually, there was a consulting agency Corgibytes, they were pretty early adopters of Dev, and they offered to take a look also. They're Rails experts and we're we Rails shop. So we just did our best to make sure that we didn't have any, any, like, just just make sure we didn't have any vulnerabilities there. And we took our time. That... we were probably closed source with additional contributors for probably like four or five months. That sound right, Peter?

**Peter Frank** [17:50]
Yeah, that's about right.

**Jess Lee** [17:51]
So we we took our time, and once we were comfortable is when we actually opened up.

**Peter Frank** [17:56]
In addition to the security concerns, which I agree where the principal sort of priority, there were also just, oh, only Ben knows what this does. So we need to clean this up or write better documentation or just take some of these aspects of the code that are relying on tribal knowledge and, you know, refactor document or whatever it might be, so that new contributors can come in a little bit easier.

**Jess Lee** [18:19]
Yeah, documentation was definitely the final push. And for reference Ben is our third co-founder.

**Ali** [18:25]
Awesome. So last year, one of my challenges for myself for Hacktoberfest was to actually maintain my own project for the first time, and there were a lot of challenges with that, like, lots of issues and pull requests coming in, a lot more duplicates and having to respond to everybody, it was a ton of work. Do you all have any advice for maintaining open source projects?

**Jess Lee** [18:47]
I think I would just talk about like lots of pulling, like we use different, we got a big influx of issues on PR. So Octobox has been a good inbox to manage a lot of that and to see the activity on every issue. But we also use a bot called stale bots, and stale ballots, you know, you can set the time parameters yourself, but it lets you know how long ago issue was last responded to. So if it goes stale, you can give that some attention. And also see, ifthe issue's still relevant.

**Ali** [19:22]
So something I did for last Haktoberfest was, I tried to be an open source maintainer for the first time, and I allowed contributions to one of my own personal projects. And it was really cool to see. But it was also a lot more challenging than I thought, all these issues were coming in that I had to respond to, it was almost more work than just writing the code myself, especially for a small project like that. Do you all have any advice as maintainers for a much larger repository than I was working on, on how to maintain open source projects?

**Jess Lee** [19:54]
So we really rely on the tools that we use, you mentioned just lots of people making issues. So we got a really high volume of issues and PRs. And I really like using Octobox as a way to manage that. The GitHub notification, like the native GitHub notification system has never really been useful or intuitive for me personally, and Octobox makes it very easy. It feels like like a Gmail inbox. And so yeah, that helps me get a really high level overview of all the different activity from things that are being merged, that didn't get merged and needs, needs further work. So Octobox has been really great to manage all the issues and PRs that come in. And for our team, we use ZenHub internally as sort of a project management tool. And we're able to separate out. 'Cause one of the things about OSS is like, it's kind of funny, that companies, like bigger companies, are going open source. So there's like the open source element. And then there's sort of like the private work that we've been doing or not private work, but there are the company priorities that also need to be laid out for the entire team. So we have the aspect of managing the open source community, but also managing our own work. And so ZenHub has helped us sort of streamline all of that and see what the community is working on. But also allow us to see what our internal team is working on. But if you're not worried about that, that's cool. Other tools that have helped is a bot called PR bot, and it automatically updates the labels on every issue depending on what state a PR is in. So, if a if a PR runs through our CI and it goes through smoothly, the bot will label it as approved. So it's an indicator for us that we can go in and review it, once we review it if we need changes, all automatic, automatically update that it needs changes. So it just like helps us categorize and organize our PRs. And then a bot that's actually been very controversial in our in our repo is stale bot and stale bot is a bot that will automatically close an issue if it's gone stale, and you can set the time of what stale means to you. So for us, it was initially, I think it was initially like one month, and then we moved it to three months. And now it's at six months. Because it's kind of annoying, right? Like if somebody created an issue and three months later, like this bot, just like it's going to stay on closing it like that's, that's like we don't want, we don't want issue creators to feel any sort of disrespect. But a lot of times issues go stale, because they're not really a priority. And so it's really an opportunity for us to revisit the issue that we're trying to make our stale bot less aggressive. But it can be really useful for some people just to keep people who have high volumes of issues to keep it... to keep it clear. Aside from that, there's also some really great, just native GitHub tools like canned responses. So a lot of times we'll get duplicate issues. So you can just do a drop down that says, hey, like, we already got this duplicate. So we're closing it now. And then you can just leave the issue number of which issue to actually follow along to. Yeah, those are just like the few tools I can think of that really helped the process along.

**Kelly** [23:01]
Awesome. I think that's extremely helpful. And I'm sure Ali is going to... I don't know, Ali, are you going to be doing maintenance gain? This being a maintainer again this year?

**Ali** [23:11]
I don't know. That's a good question. So so many things to do, so little time.

**Kelly** [23:16]
I totally get that.

**Jess Lee** [23:18]
If I can just add one additional note, is that, like, these are the things that you can do as a maintainer on platform, but then there's so many ways to, to be like an awesome maintainer, off platform, which is sharing, and like giving shout outs to people who contribute to your code base. And, Peter, I think you have some ideas.

**Peter Frank** [23:39]
Yeah, I think that one, you know, constant challenge as an open source maintainer is just making your project discoverable, helping people understand that you're actually a project that's accepting contributions. So providing clear guidance on what needs to be done and how folks can come join, help you do that is super helpful. So to selfishly plug the Dev platform, through the month of October, we're going to put some time and resources into elevating and spotlighting projects that are doing a good job of sort of laying out expectations and resources to help new contributors. So if you're an open source maintainer out there listening to this podcast, come on to Dev, post under the Hacktoberfest tag, and we'll do our best to signal boost you and put you into a wider audience of eager open source contributors.

**Kelly** [24:24]
I love that. I have one final question. That's more of a fun question. What are your favorite open source projects to contribute to or what are just some of your favorite open source projects in general?

**Peter Frank** [24:38]
Well, one thing that I didn't realize before Dev went open source is that so much of the technology that we use every single day, and that's really sort of foundational to building software projects, is built on open source. So most of the programming languages and frameworks, and libraries that are critical to just development are open source. So that's a bit of a cop out, but it's sort of everything that enables what we do probably falls into this camp, whether you realize it or not.

**Jess Lee** [25:07]
So I mentioned that my first non-Dev open source contribution was for documentation. That's actually been my only non-Dev open source contributions. So I can't personally share, like, what... I can't personally like advocate for specific projects to contribute to because I don't have that experience. Aside from the fact that you should definitely contribute to Dev, but we're pretty close with the maintainer of Babel, Henry Zhu, and just hearing his like talks and his perspective on open source. He's been the maintainer, the main maintainer, of Babel for many years now. And he's very, very thoughtful and considerate. And so I would imagine that his project would be a good one to contribute to.

**Ali** [25:49]
Awesome. Well, thank you all so much for joining us and talking about Hacktoberfest, and creating a great platform for developers to communicate as well.

**Jess Lee** [25:59]
Thank you so much for having us.

**Peter Frank** [26:00]
Yeah. Thanks for having us.

**Kelly** [26:01]
So that was awesome. I've never participated in Hacktoberfest before. So this is going to be my first time and I hope that after listening to this episode, that you also feel encouraged to participate as well, especially if you're brand new to contributing to open source projects. If you liked this episode, tweet about it. We'll select one tweet or when Ladybug stickers each week. If you want to hear someone join us on the podcast, fill out the nomination form on our website. You can nominate yourself, by the way. We post new episodes every Monday, so make sure you're subscribed to be notified. And don't forget we're releasing another episode this Thursday. So be sure to watch for that. Lastly, if you like our podcasts, please leave us a review on Apple Podcasts. Those reviews warm our hearts, and I'm pretty sure Emma and Ali would be very disappointed in me for saying what I just said. Anyway, we'd like to give one final thank you to DigitalOcean for sponsoring this week's episode. We'll see you on Thursday.
