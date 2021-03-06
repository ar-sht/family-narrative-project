const htmlOr = `<span class="or"><em>or</em></span>`

const eugeneStories = [[[[[[[[[[], [], `<span class="story">&emsp;&emsp;You choose not to leave. After all, this is the only home you've ever known and it seems inconceiveable to start over again. You stay and live out your life in Russia.</span><br><span class="intermission"><em>You- the goal was to get out, what's wrong with you?!?!</em></span><br><center><span class="story">Refresh the page to start over or <a href="about/eugene.html" id="in-text">learn more about Eugene</a></span>`], 
[[], [], `<span class="story">&emsp;&emsp;You book a flight to New York. You're allowed to take one suitcase and $100 per person with you. You land in the US with $400, and after being processed by immigration you go to a store nearby to get some food. In the Soviet Union, bananas were incredibly rare, you've seen just one in your life. You walk into the store and see bunches of bananas everywhere. You're taken aback, and decide to buy some to give to your kids. You ask the owner how much they are in your very limited English, and he tells you five dollars. You buy them and after you walk out meet your friend who's lived in New York for some time, and he tells you that you were cheated. Here, you realize that some people will only take advantage of you.<br><br>&emsp;&emsp;You board your next flight to San Francisco, and when you arrive, you meet up with your sister and she introduces you to the local Jewish community. Here you get support and assistance in finding a home and a job. After a lot of hard work and dedication, you're fluent in English and working as a professor at Stanford University.</span><br><span class="intermission"><em>Congratulations! You took the path Eugene took, and made it to America!</em></span><br><center><span class="story">Refresh the page to start over or <a href="about/eugene.html" id="in-text">learn more about Eugene</a></span>`], 
`<span class="intermission"><em>7 years later and Gorbachev's Perestroika is in full effect</em></span><br><span class="story">&emsp;&emsp;You have two young children and thanks to Perestroika's immigration policies, your sister tries to move to the US with her son. After living in refugee camps in Austria and Italy, they get a visa and move to San Francisco, California. After seeing them leave, you decide to begin the immigration process yourself. Unfortunately, for a woman (as an adult) to leave the Soviet Union, both her parents must agree to it. This is a problem, because your wife's parents got divorced when she was very young, and her dad hasn't been a part of her life. You eventually track him down, and you're able to leave after almost 2 years.</span><br><span class="introduce-decision">You have the chance, it's now or never, will you...</span><br><div class="choice"><button class="decision" id="stay" value="0">Stay</button>${htmlOr}<button class="decision" id="leave" value="1">Leave</button></div>`], 
[], `<span class="story">&emsp;&emsp;You agree to help him and read up on how to use punch cards and basic algorithms to program the computer. Every day, your friend asks your coworkers seemingly innocuous questions that show a true approval rating of the regime when put together. Instead of asking if people agree with the Party's policies, he asks how they feel about the price of vodka and how well they think the stores are stocked. You take his results, put them into your program, and the results show just what you'd expected: not even the well-payed workers support the Party.<br><br>&emsp;&emsp;Eventually, you save up enough money to buy a personal computer, and you start programming in C and C++. Now you can get graphical representations and charts of the statistics. You continue to work in the factory, but you feel like something's missing.</span><br><div class="choice"><button class="decision" id="next" value="0000000">7 years later...</button></div>`], 
[[], [], `<span class="story">&emsp;&emsp;You decide not to risk helping him - you could get in trouble with the government after all, and instead continue working. Years later as you try to immigrate to the US, you're refused a visa because you don't have enough applicable skills. If only you'd learned how to program with your friend so many years ago.</span><br><span class="intermission"><em>You failed to get out...</em></span><br><center><span class="story">Refresh the page to start over or <a href="about/eugene.html" id="in-text">learn more about Eugene</a></span>`], 
`<span class="story">&emsp;&emsp;You approach the department head about joining the doctorate program, but he tells you that the university's post-graduate courses aren't available to Jews. Instead, you're forced to find a job at a factory that manufactures equipment for nuclear power plants. You work as an engineer, but you're only paid about 1/3 of what the assembly line workers make. You meet a co-worker with an interest in psychology, and he tells you about an experiment he wants to conduct.</span><br><span class="introduce-decision">He wants to poll some of the workers about their living conditions, and he wants you to help him program the big factory computer to analyze the results. Will you...</span><br><div class="choice"><button class="decision" id="poll" value="0">Agree to help him</button>${htmlOr}<button class="decision" id="refuse" value="1">Refuse to help him</button>`], 
[[], [], `<span class="story">&emsp;&emsp;You look for a job and find one at a factory that manufactures equipment for nuclear power plants. You work as an engineer, but you're only paid about 1/3 of what the assembly line workers make. You meet a co-worker with an interest in psychology, and he tells you about an experiment he wants to conduct.</span><br><span class="introduce-decision">He wants to poll some of the workers about their living conditions, and he wants you to help him program the big factory computer to analyze the results. Will you...</span><br><div class="choice"><button class="decision" id="poll" value="000000">Agree to help him</button>${htmlOr}<button class="decision" id="refuse" value="000001">Refuse to help him</button>`],
`<span class="story">&emsp;&emsp;You apply to Leningrad Politechnika instead, one of the few universities open to Jewish students. You are accepted into the university and exempted from the draft. You begin studying physics and engineering and become friendly with the other Jews in your classes, and even with the head of the school of engineering. You work hard and learn a lot, and are at the top of your class by graduation.</span><br><span class="introduce-decision">Now you can...</span><br><div class="choice"><button class="decision" id="work" value="1">Get a job right after graduation</button>${htmlOr}<button class="decision" id="phd" value="0">Try to get a PhD</button></div>`], 
[[], [], `<span class="story">&emsp;&emsp;You decide it's not worth trying to get into another university and join the military. You drift around the country, working out of different bases. You rarely see active combat, and your childhood ambitions of recognition and opportunity are dashed.</span><br><span class="intermission"><em>You failed to get out...</em></span><br><center><span class="story">Refresh the page to start over or <a href="about/eugene.html" id="in-text">learn more about Eugene</a></span>`], 
`<span class="intermission"><em>7 years pass, and you're now in your final year of high school</em></span><br><span class="story">&emsp;&emsp;If you can't get into a college that will give you a deferral, you'll be drafted into the military just like your father was. Your sister is already studying at Leningrad Polytechnika, but you've been called to Leningrad University for your acceptance test and interview. When you arrive, you're taken into a room and given a series of questions. You struggle to answer most of them, and this is no accident. Many Soviet universities have a different set of questions to ask Jewish applicants to prevent them from getting in.</span><br><span class="introduce-decision">You're frustrated at this unfairness, and decide to...</span><br><div class="choice"><button class="decision" id="apply" value="0">Apply to Polytechnika to get an education and avoid the draft</button>${htmlOr}<button class="decision" id="military" value="1">Go into the military</button></div>`], [], 
`<span class="story">&emsp;&emsp;You approach the teacher about your unfair grade. She refuses to amend it, telling you that you have to follow the government methods. You go home having learned two valuable lessons: everything you do here will be dictated by the government, and it will always be harder for you as a Jew.</span><br><div class="choice"><button class="decision" id="next" value="000">7 years later...</button></div>`], 
[[], [], `<span class="story">&emsp;&emsp;You decide it's not worth the fight and go home, A in hand. You meet with your mom, and she tells you that she's proud of you, that you did all you could. You know she's right, but you still toss and turn that night, thinking how hard it is for you here. You set your mind on making it to a place where you can make a name for yourself and be recognized for your achievements.</span><br><div class="choice"><button class="decision" id="next" value="000">7 years later...</button></div>`], 
`<span class="story">&emsp;&emsp;You decide to bear down and study hard to make sure you get every question right. After all, your mother often tells you, "As a Jew, you have to earn an A+ to get an A!"<br>&emsp;&emsp;Lo and behold, the day of the test comes around and you ace it. You get every answer right, but the teacher marks you wrong for one, saying you didn't use the technique taught in your textbooks.</span><br><span class="introduce-decision">You did receive an A, but you can...</span><br><div class="choice"><button class="decision" id="talk" value="0">Talk to your teacher about your grade</button>${htmlOr}<button class="decision" id="go-home" value="1">Just go home</button></div>`],
[[[], [], `<span class="story">&emsp;&emsp;You walk over to the kid and throw a punch. He's taken off his guard and you hit him square in the chest. He stumbles back, dazed, before throwing a punch of his own. After a bit more back and forth, you get up and he stays down. You walk home slowly, wiping the mud off your pants. When you get home, your mom cleans up your wounds, and asks what happens. You tell her the story and she nods sadly. She says she's proud you stood up for yourself, but urges you not to interact next time. You learn that you'll always be discriminated against based on your religion here, and that there's no good way to fight back.</span><br><div class="choice"><button class="decision" id="next" value="000">7 years later...</button></div>`], 
[[], [], `<span class="story">&emsp;&emsp;You ignore the kid and keep playing. He yells again, louder this time, "Heeeyy, YiiIIidDD!!" You don't react and he yells at you again, and again. You don't pay him any mind, and he eventually gets bored and leaves. You go home soon after, thinking about the way you're being treated and you realize that it won't get any better while you live here.</span><br><div class="choice"><button class="decision" id="next" value="000">7 years later...</button></div>`], 
`<span class="story">&emsp;&emsp;You decide to go to the marshy creek area by your home. You walk into the clearing and hear the sounds you've become accustomed to: frogs croaking, birds chirping, the volume of the natural world is astounding, yet calming. You find your friends and begin chasing each other around, climbing trees, when you hear a kid yell from behind, "Hey, YiIidDd!".</span><br><span class="introduce-decision">You whip your head around and realize you know this kid. He's bullied you and the other Jews in your class before. You...</span><br><div class="choice"><button class="decision" id="fight" value="0">Walk over and stand up to him</button>${htmlOr}<button class="decision" id="ignore" value="1">Ignore him and keep playing</button></div>`], 
`<span class="story">&emsp;&emsp;Welcome to the great USSR! The year is 1971, and you just turned 10 in Brest, Belarus, a military city of about 200,000 near the Polish border. You were born on a military base, and most of what you do is monitored and dictated by the government. Additionally, as a Jew, you're further discriminated against by schoolmates and teachers. Your teacher tells you that you have a math test coming up, and you're confident you can get a good grade on it.</span><br><span class="introduce-decision">You have some freetime in the afternoon, will you...</span><br><div class="choice"><button class="decision" id="study" value="0">Study for the test</button>${htmlOr}<button class="decision" id="play" value="1">Walk to the creek and play with your friends</button></div>`]

const nataStories = [[[[[[[], [], `<span class="story">&emsp;&emsp;You turn and walk out of the station and back to your apartment. One of the humanitarians stops by your place later and tells you that you  need to apply for a permit to stay in Austria. You start the process and get a job as a cleaner. You make enough to survive, but you never meet your family in San Francisco, and you live out your life in a small apartment in Vienna.</span><br><span class="intermission"><em>You kind of succeeded!</em></span><br><center><span class="story">Refresh the page to try a different path or <a href="about/nata.html" id="in-text">learn more about Nata and Max</a></span>`], 
[[[[[], [], `<span class="story">&emsp;&emsp;You decide to stay and apply for a corporate job, but you get denied because you have no business experience. You keep working at your local store, and just make enough to get by. Your son works as a babysitter to help you get by, and a relative gives you some money to get a car so you can move to a cheaper area. After a few years, the regional manager position is up again, and the company wants to hire from the inside. You apply again and thanks to your stellar record you get the job. You adapt quickly to the new job, and your son gets accepted to Berkeley. You have a semi-successful career at Safeway, and your son follows your example and gets an MBA. He starts a business in Silicon Valley, and helps you to retire early.</span><br><span class="intermission"><em>You mostly succeeded! You made it to America and had a successful career, but you made a family of business people so, eh.</em></span><br><center><span class="story">Refresh the page to try to find the path Nata really took or <a href="about/nata.html" id="in-text">learn more about her and Max</a></span>`], [], 
`<span class="story">&emsp;&emsp;You start learning some English from TV shows or wherever else you can hear it. You get in touch with the local immigrant community and they give you some tips on where to work, shop, and be social in the city. Your son goes to school and starts learning English there, and you apply for a job at a few local markets and big chains. Your resume isn't very impressive to an American employer, but after a couple weeks you get an interview to be a cashier at Safeway. You've learned enough English to get by and you reassure the manager that you'll get better as you go. They ask you a few more questions then shake your hand and offer you the job. You work hard and make a name for yourself in the company, becoming a store manager in just a year. You learn that the company has an education program, they'll give you a bit of money to take time off and go to college.</span><br><span class="introduce-decision">You already got an engineering degree in St. Petersburg so you decide to...</span><br><div class="choice"><button class="decision" id="cad" value="0000101">Take the CAD class at the community college</button>${htmlOr}<button class="decision" id="company" value="0">Keep working and rising through the ranks</button></div>`], 
[[], [], `<span class="story">&emsp;&emsp;You decide to take the course. You do some babysitting on the side to keep making money and your family gives you some more cash to help you get by. Your experience and work ethic help you get through the course faster and after 4 months you get a job making $12/hr. It's barely enough to support yourself, and a family member lends you some money to get a car so you can get your license and get a cheaper place farther from your job. Your son works as a babysitter when he's not studying to bring in a little extra income.<br><br>&emsp;&emsp;After a couple of years you get a job at Applied Materials, a big semiconductor company, that pays $20/hr. You start to pay back your relatives, and a man you met while living in Italy completes his immigration. He moves in with you, and your son is accepted to Berkeley. You move up the chain in engineering companies and eventually get into management. Your son moves to Michigan and becomes a professor. In June of 2022, you retire after a long, successful career.</span><br><span class="intermission"><em>Congratulations! You made it to America and had a successful career in engineering!</em></span><br><center><span class="story">Refresh the page to try a different path or <a href="about/nata.html" id="in-text">learn more about Nata and Max</a></span>`], 
`<span class="story">&emsp;&emsp;Then organization gives you the tickets and tells you that you'll have to pay them back later. You take them with your shaking hand and walk into the airport. You board your plane, and as it speeds up on the runway, you feel like you've finally made it. Your plane lands in New York and you transfer to another one. 6 hours later you land in San Francisco. Your mom's cousin picks you up from the airport and takes you to a dinner at her place. All of your family members in the area come, and they give you a bit of money so you can get situated in the US. You thank them and find an apartment and a community college nearby. It offers a free education in CAD that would allow you to get an engineering job in the US. You also want to move off your dependence on your relatives and get a job.</span><br><span class="introduce-decision">Will you...</span><br><div class="choice"><button class="decision" id="retail" value="0">Try to find a job</button>${htmlOr}<button class="decision" id="cad" value="0000101">Take the classes and make what you can on the side</button></div>`],
[],`<span class="story">&emsp;&emsp;You decide to board the train. It rumbles past mountains and farms, and you can't help but feel nervous about what's to come. After a long ride, the train pulls into Rome. You get off the train and are taken to an old motel. They show you to your room and tell you to come to a large communal hall for dinner soon. You unpack your things and head down to eat. You're seated at a long table with all the other new residents and told that you have 10 days to find a place to stay in a nearby suburb. You finish your meal and go back to your room.<br><br>&emsp;&emsp;The next day you go out to sell some of your things and look for a place to stay. While you're walking in one of the nicer neighborhoods, you run into the woman you stayed with in Vienna. She tells you that she lives in the area and has been looking to rent out a room. You tell her that you can't pay what it's worth, but she tells you that whatever you can give is fine. The next morning you meet with a group of refugees in the area and are told you need to check in there to learn your immigration status. You sell your things and save money for a month when your friend is approved and leaves for Israel. After another month, you're told that you've been approved to fly to the US.</span><br><br><div class="choice"><button class="decision" id="america" value="0">Take your chance and fly to America</button></div>`],
`<span class="story">&emsp;&emsp;After 20 days, the organization that housed you tells you that you've been approved to take the next train to Italy. You gather your things and walk to the station. The trains are guarded by troops, and you look at them nervously. You're told they're only here because you're a refugee and a possible threat, but you still feel uneasy about it.</span><br><span class="introduce-decision">You can follow your instincts and...</span><br><div class="choice"><button class="decision" id="vienna" value="0">Stay in Vienna</button>${htmlOr}<button class="decision" id="train" value="1">Board the train</button></div>`], [],
`<span class="story">&emsp;&emsp;You accept their invitation and walk into the eating area. The woman that you met tells you that her husband went to Israel a few years ago, and he's helping them to come to join him. The meal is served. Nothing grand, but more food than you've seen in a while. You and your son thank her and dig in.<br><br>&emsp;&emsp;The next morning you go into town to sell some of your things. You make a bit of money, and you buy some food and basics for your family. You go back to the apartment and eat a small lunch. You wonder what will happen next...</span><br><br><div class="choice"><button class="decision" id="apartment" value="0">About 3 weeks later...</button></div>`],
[[[[], [], `<span class="story">&emsp;&emsp;You turn and walk out of the station and back to your apartment. One of the humanitarians stops by your place later and tells you that you  need to apply for a permit to stay in Austria. You start the process and get a job as a cleaner. You make enough to survive, but you never meet your family in San Francisco, and you live out your life in a small apartment in Vienna.</span><br><span class="intermission"><em>You kind of succeeded!</em></span><br><center><span class="story">Refresh the page to try to find the path Nata took or <a href="about/nata.html" id="in-text">learn more about her and Max</a></span>`],
[[], [], `<span class="story">&emsp;&emsp;You decide to board the train. It rumbles past mountains and farms, and you can't help but feel nervous about what's to come. After a long ride, the train pulls into Rome. You get off the train and are taken to an old motel. They show you to your room and tell you to come to a large communal hall for dinner soon. You unpack your things and head down to eat. You're seated at a long table with all the other new residents and told that you have 10 days to find a place to stay in a nearby suburb. You finish your meal and go back to your room.<br><br>&emsp;&emsp;The next day you go out to sell some of your things and look for a place to stay. You see your old roommate out for a walk and say hello before going back to the motel. You eventually find a ratty old apartment in Rome, but you can't get a job and are evicted after a month. You move back into the motel and the humanitarians help you find a job so you can get a new place. You stay in Rome, barely afloat.</span><br><span class="intermission"><em>You failed to get out...</em></span><br><center><span class="story">Refresh the page to start over or <a href="about/nata.html" id="in-text">learn more about Nata and Max</a></span>`],
`<span class="story">&emsp;&emsp;After 20 days, the organization that housed you tells you that you've been approved to take the next train to Italy. You gather your things and walk to the station. The trains are guarded by troops, and you look at them nervously. You're told they're only here because you're a refugee and a possible threat, but you still feel uneasy about it.</span><br><span class="introduce-decision">You can follow your instincts and...</span><br><div class="choice"><button class="decision" id="vienna" value="0">Stay in Vienna</button>${htmlOr}<button class="decision" id="train" value="1">Board the train</button></div>`], [],
`<span class="story">&emsp;&emsp;You decline their offer, and you and Max go to sleep. The next morning, you wake up and go into town to sell some of the things you brought with you. You make some money and buy a bit of food. You go back to the apartment and make a small lunch for yourself and Max. You chew your food, wondering what'll happen next...</span><br><br><div class="choice"><button class="decision" id="apartment" value="0">About 3 weeks later...</button></div>`],
`<span class="story">&emsp;&emsp;The squeal of the bus's brakes wakes you up. You sit up and look out the window. You see tents and buses on a backdrop of old architecture and mountains. The date is April 30, and you're in Vienna! You and your son walk off the bus and into one of the humanitarian group's tents. They give you a bit of money and tell you that all the apartments they have available are occupied. They take you to an old chocolate factory and give you some blankets. You sleep in offices and on the factory floor for a week, before the group in front of you leaves for Italy, and you move into an apartment. You share the apartment with a family of four, and they invite you over for dinner.</span><br><span class="introduce-decision">You haven't had a good night of sleep in weeks, but you don't want to be rude. You decide to...</span><br><div class="choice"><button class="decision" id="dinner" value="0">Accept and eat with them</button>${htmlOr}<button class="decision" id="sleep" value="1">Decline and get some rest</buton></div>`], [],
`<span class="story">&emsp;&emsp;You decide to begin the immigration process. You hope that you can make a better life for yourself and your son abroad. You're only allowed to immigrate to your 'ethnic homeland', which is Israel for Jews, so that's what you put on the form, when really you'll be going to the US to be with your relatives.<br><br>&emsp;&emsp;After about a year, a message from the government arrives in the mail. You open it nervously, and read the header, <span class="big"><em>"YOUR APPLICATION HAS BEEN APPROVED"</em></span> it says in big, black letters. You pay the fee to revoke your citizenship (you can only afford it thanks to money your relatives sent you), prepare to leave, and sell all your furniture, as you can't take it with you. You go to the Dutch Embassy and leave your proof of education and other important papers, and board a bus for Vienna with just $300 and 3 suitcases, mostly filled with items to sell later on.</span><br><div class="choice"><button class="decision" id="bus" value="0">One long bus ride later...</button></div><br>`],
[[], [], `<span class="story">&emsp;&emsp;You choose not to risk your job - your livelihood really - on a chance of immigration. When your son turns 17 he is drafted into the Russian army and he fights for two years in the First Chechen War. He tries to get into a university after, but his PTSD and Jewish ethnicity prevent him from doing so. He gets a job on an assembly line and is paid badly. You keep working as a teacher for terrible wages, and never again find the opportunity to move.</span><br><span class="intermission"><em>You failed to get out...</em></span><br><center><span class="story">Refresh the page to start over or <a href="about/nata.html" id="in-text">learn more about Nata and Max</a></span>`],
`<span class="story">&emsp;&emsp;The year is 1987. Gorbachev's Perestroika is in full effect, and your cousin who had immigrated to the US comes to visit you for the first time since. He tells you that his life is much better in the US and that he can help you get a visa and a place to live if you try to immigrate. You hesitate. You've lived in the Soviet Union your whole life, and even applying for immigration is dangerous. If denied, you'd be blackballed by employers, and you barely make enough money as is. Then again, you've faced so much injustice growing up, and your son, Max, will be drafted into the army in a few years if you stay.</span><br><span class="introduce-decision">Will you...</span><br><div class="choice"><button class="decision" id="immigrate" value="0">Apply to immigrate</button>${htmlOr}<button class="decision" id="not-go" value="1">Not take the risk and stay</button></div>`]

const storyField = document.querySelector('div.story-field')

function get_story(storyId, story) {
  for (let element of document.querySelectorAll('button.decision')) {
    element.remove()
  }
  for (let element of document.querySelectorAll('span.introduce-decision')) {
    element.remove()
  }
  for (let element of document.querySelectorAll('div.choice')) {
    element.remove()
  }
  let i = 0
  for (let idNumber of storyId) {
    story = story[idNumber]
    i++
  }
  return `<div id="${i}">${story[2]}</div>`
}

function play_eugene_game() {
  let currentStoryId = []
  let nextStory = get_story(currentStoryId, eugeneStories)
  storyField.innerHTML += nextStory
  const studyChoice = document.getElementById('study')
  studyChoice.addEventListener('click', function () {
    currentStoryId.push(Number(studyChoice.value))
    nextStory = get_story(currentStoryId, eugeneStories)
    document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
    storyField.innerHTML += nextStory
    const talkChoice = document.getElementById('talk')
    talkChoice.addEventListener('click', function () {
      currentStoryId.push(Number(talkChoice.value))
      nextStory = get_story(currentStoryId, eugeneStories)
      document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
      storyField.innerHTML += nextStory
      const nextButton = document.getElementById('next')
      nextButton.addEventListener('click', function () {
        currentStoryId = []
        for (id of nextButton.value) {
          currentStoryId.push(Number(id))
        }
        nextStory = get_story(currentStoryId, eugeneStories)
        document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
        storyField.innerHTML += nextStory
        const collegeChoice = document.getElementById('apply')
        collegeChoice.addEventListener('click', function () {
          currentStoryId.push(Number(collegeChoice.value))
          nextStory = get_story(currentStoryId, eugeneStories)
          document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
          storyField.innerHTML += nextStory
          const phdChoice = document.getElementById('phd')
          phdChoice.addEventListener('click', function () {
            currentStoryId.push(Number(phdChoice.value))
            nextStory = get_story(currentStoryId, eugeneStories)
            document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
            storyField.innerHTML += nextStory
            const pollChoice = document.getElementById('poll')
            pollChoice.addEventListener('click', function () {
              currentStoryId.push(Number(pollChoice.value))
              nextStory = get_story(currentStoryId, eugeneStories)
              document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
              storyField.innerHTML += nextStory
              const nextButton = document.getElementById('next')
              nextButton.addEventListener('click', function () {
                currentStoryId = []
                for (id of nextButton.value) {
                  currentStoryId.push(Number(id))
                }
                nextStory = get_story(currentStoryId, eugeneStories)
                document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                storyField.innerHTML += nextStory
                const stayChoice = document.getElementById('stay')
                stayChoice.addEventListener('click', function () {
                  currentStoryId.push(Number(stayChoice.value))
                  nextStory = get_story(currentStoryId, eugeneStories)
                  document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                  storyField.innerHTML += nextStory
                })
                const leaveChoice = document.getElementById('leave')
                leaveChoice.addEventListener('click', function () {
                  currentStoryId.push(Number(leaveChoice.value))
                  nextStory = get_story(currentStoryId, eugeneStories)
                  document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                  storyField.innerHTML += nextStory
                })
              })
            })
            const refuseChoice = document.getElementById('refuse')
            refuseChoice.addEventListener('click', function () {
              currentStoryId.push(Number(refuseChoice.value))
              nextStory = get_story(currentStoryId, eugeneStories)
              document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
              storyField.innerHTML += nextStory
            })
          })
          const workChoice = document.getElementById('work')
          workChoice.addEventListener('click', function () {
            currentStoryId.push(Number(workChoice.value))
            nextStory = get_story(currentStoryId, eugeneStories)
            document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
            storyField.innerHTML += nextStory
            const pollChoice = document.getElementById('poll')
            pollChoice.addEventListener('click', function () {
              currentStoryId = []
              for (id of pollChoice.value) {
                currentStoryId.push(Number(id))
              }
              nextStory = get_story(currentStoryId, eugeneStories)
              document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
              storyField.innerHTML += nextStory
              const nextButton = document.getElementById('next')
              nextButton.addEventListener('click', function () {
                currentStoryId = []
                for (id of nextButton.value) {
                  currentStoryId.push(Number(id))
                }
                nextStory = get_story(currentStoryId, eugeneStories)
                document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                storyField.innerHTML += nextStory
                const stayChoice = document.getElementById('stay')
                stayChoice.addEventListener('click', function () {
                  currentStoryId.push(Number(stayChoice.value))
                  nextStory = get_story(currentStoryId, eugeneStories)
                  document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                  storyField.innerHTML += nextStory
                })
                const leaveChoice = document.getElementById('leave')
                leaveChoice.addEventListener('click', function () {
                  currentStoryId.push(Number(leaveChoice.value))
                  nextStory = get_story(currentStoryId, eugeneStories)
                  document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                  storyField.innerHTML += nextStory
                })
              })
            })
            const refuseChoice = document.getElementById('refuse')
            refuseChoice.addEventListener('click', function () {
              currentStoryId = []
              for (id of refuseChoice.value) {
                currentStoryId.push(Number(id))
              }
              nextStory = get_story(currentStoryId, eugeneStories)
              document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
              storyField.innerHTML += nextStory
            })
          })
        })
        const enlistChoice = document.getElementById('military')
        enlistChoice.addEventListener('click', function () {
          currentStoryId.push(Number(enlistChoice.value))
          nextStory = get_story(currentStoryId, eugeneStories)
          document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
          storyField.innerHTML += nextStory
        })
      })
    })

    const goHomeChoice = document.getElementById('go-home')
    goHomeChoice.addEventListener('click', function () {
      currentStoryId.push(Number(goHomeChoice.value))
      nextStory = get_story(currentStoryId, eugeneStories)
      document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
      storyField.innerHTML += nextStory
      const nextButton = document.getElementById('next')
      nextButton.addEventListener('click', function () {
        currentStoryId = []
        for (id of nextButton.value) {
          currentStoryId.push(Number(id))
        }
        nextStory = get_story(currentStoryId, eugeneStories)
        document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
        storyField.innerHTML += nextStory
        const collegeChoice = document.getElementById('apply')
        collegeChoice.addEventListener('click', function () {
          currentStoryId.push(Number(collegeChoice.value))
          nextStory = get_story(currentStoryId, eugeneStories)
          document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
          storyField.innerHTML += nextStory
          const phdChoice = document.getElementById('phd')
          phdChoice.addEventListener('click', function () {
            currentStoryId.push(Number(phdChoice.value))
            nextStory = get_story(currentStoryId, eugeneStories)
            document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
            storyField.innerHTML += nextStory
            const pollChoice = document.getElementById('poll')
            pollChoice.addEventListener('click', function () {
              currentStoryId.push(Number(pollChoice.value))
              nextStory = get_story(currentStoryId, eugeneStories)
              document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
              storyField.innerHTML += nextStory
              const nextButton = document.getElementById('next')
              nextButton.addEventListener('click', function () {
                currentStoryId = []
                for (id of nextButton.value) {
                  currentStoryId.push(Number(id))
                }
                nextStory = get_story(currentStoryId, eugeneStories)
                document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                storyField.innerHTML += nextStory
                const stayChoice = document.getElementById('stay')
                stayChoice.addEventListener('click', function () {
                  currentStoryId.push(Number(stayChoice.value))
                  nextStory = get_story(currentStoryId, eugeneStories)
                  document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                  storyField.innerHTML += nextStory
                })
                const leaveChoice = document.getElementById('leave')
                leaveChoice.addEventListener('click', function () {
                  currentStoryId.push(Number(leaveChoice.value))
                  nextStory = get_story(currentStoryId, eugeneStories)
                  document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                  storyField.innerHTML += nextStory
                })
              })
            })
            const refuseChoice = document.getElementById('refuse')
            refuseChoice.addEventListener('click', function () {
              currentStoryId.push(Number(refuseChoice.value))
              nextStory = get_story(currentStoryId, eugeneStories)
              document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
              storyField.innerHTML += nextStory
            })
          })
          const workChoice = document.getElementById('work')
          workChoice.addEventListener('click', function () {
            currentStoryId.push(Number(workChoice.value))
            nextStory = get_story(currentStoryId, eugeneStories)
            document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
            storyField.innerHTML += nextStory
            const pollChoice = document.getElementById('poll')
            pollChoice.addEventListener('click', function () {
              currentStoryId = []
              for (id of pollChoice.value) {
                currentStoryId.push(Number(id))
              }
              nextStory = get_story(currentStoryId, eugeneStories)
              document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
              storyField.innerHTML += nextStory
              const nextButton = document.getElementById('next')
              nextButton.addEventListener('click', function () {
                currentStoryId = []
                for (id of nextButton.value) {
                  currentStoryId.push(Number(id))
                }
                nextStory = get_story(currentStoryId, eugeneStories)
                document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                storyField.innerHTML += nextStory
                const stayChoice = document.getElementById('stay')
                stayChoice.addEventListener('click', function () {
                  currentStoryId.push(Number(stayChoice.value))
                  nextStory = get_story(currentStoryId, eugeneStories)
                  document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                  storyField.innerHTML += nextStory
                })
                const leaveChoice = document.getElementById('leave')
                leaveChoice.addEventListener('click', function () {
                  currentStoryId.push(Number(leaveChoice.value))
                  nextStory = get_story(currentStoryId, eugeneStories)
                  document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                  storyField.innerHTML += nextStory
                })
              })
            })
            const refuseChoice = document.getElementById('refuse')
            refuseChoice.addEventListener('click', function () {
              currentStoryId = []
              for (id of refuseChoice.value) {
                currentStoryId.push(Number(id))
              }
              nextStory = get_story(currentStoryId, eugeneStories)
              document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
              storyField.innerHTML += nextStory
            })
          })
        })
        const enlistChoice = document.getElementById('military')
        enlistChoice.addEventListener('click', function () {
          currentStoryId.push(Number(enlistChoice.value))
          nextStory = get_story(currentStoryId, eugeneStories)
          document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
          storyField.innerHTML += nextStory
        })
      })
    })
  })

  const playChoice = document.getElementById('play')
  playChoice.addEventListener('click', function () {
    currentStoryId.push(Number(playChoice.value))
    nextStory = get_story(currentStoryId, eugeneStories)
    document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
    storyField.innerHTML += nextStory
    const fightChoice = document.getElementById('fight')
    fightChoice.addEventListener('click', function () {
      currentStoryId.push(Number(fightChoice.value))
      nextStory = get_story(currentStoryId, eugeneStories)
      document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
      storyField.innerHTML += nextStory
      const nextButton = document.getElementById('next')
      nextButton.addEventListener('click', function () {
        currentStoryId = []
        for (id of nextButton.value) {
          currentStoryId.push(Number(id))
        }
        nextStory = get_story(currentStoryId, eugeneStories)
        document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
        storyField.innerHTML += nextStory
        const collegeChoice = document.getElementById('apply')
        collegeChoice.addEventListener('click', function () {
          currentStoryId.push(Number(collegeChoice.value))
          nextStory = get_story(currentStoryId, eugeneStories)
          document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
          storyField.innerHTML += nextStory
          const phdChoice = document.getElementById('phd')
          phdChoice.addEventListener('click', function () {
            currentStoryId.push(Number(phdChoice.value))
            nextStory = get_story(currentStoryId, eugeneStories)
            document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
            storyField.innerHTML += nextStory
            const pollChoice = document.getElementById('poll')
            pollChoice.addEventListener('click', function () {
              currentStoryId.push(Number(pollChoice.value))
              nextStory = get_story(currentStoryId, eugeneStories)
              document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
              storyField.innerHTML += nextStory
              const nextButton = document.getElementById('next')
              nextButton.addEventListener('click', function () {
                currentStoryId = []
                for (id of nextButton.value) {
                  currentStoryId.push(Number(id))
                }
                nextStory = get_story(currentStoryId, eugeneStories)
                document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                storyField.innerHTML += nextStory
                const stayChoice = document.getElementById('stay')
                stayChoice.addEventListener('click', function () {
                  currentStoryId.push(Number(stayChoice.value))
                  nextStory = get_story(currentStoryId, eugeneStories)
                  document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                  storyField.innerHTML += nextStory
                })
                const leaveChoice = document.getElementById('leave')
                leaveChoice.addEventListener('click', function () {
                  currentStoryId.push(Number(leaveChoice.value))
                  nextStory = get_story(currentStoryId, eugeneStories)
                  document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                  storyField.innerHTML += nextStory
                })
              })
            })
            const refuseChoice = document.getElementById('refuse')
            refuseChoice.addEventListener('click', function () {
              currentStoryId.push(Number(refuseChoice.value))
              nextStory = get_story(currentStoryId, eugeneStories)
              document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
              storyField.innerHTML += nextStory
            })
          })
          const workChoice = document.getElementById('work')
          workChoice.addEventListener('click', function () {
            currentStoryId.push(Number(workChoice.value))
            nextStory = get_story(currentStoryId, eugeneStories)
            document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
            storyField.innerHTML += nextStory
            const pollChoice = document.getElementById('poll')
            pollChoice.addEventListener('click', function () {
              currentStoryId = []
              for (id of pollChoice.value) {
                currentStoryId.push(Number(id))
              }
              nextStory = get_story(currentStoryId, eugeneStories)
              document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
              storyField.innerHTML += nextStory
              const nextButton = document.getElementById('next')
              nextButton.addEventListener('click', function () {
                currentStoryId = []
                for (id of nextButton.value) {
                  currentStoryId.push(Number(id))
                }
                nextStory = get_story(currentStoryId, eugeneStories)
                document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                storyField.innerHTML += nextStory
                const stayChoice = document.getElementById('stay')
                stayChoice.addEventListener('click', function () {
                  currentStoryId.push(Number(stayChoice.value))
                  nextStory = get_story(currentStoryId, eugeneStories)
                  document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                  storyField.innerHTML += nextStory
                })
                const leaveChoice = document.getElementById('leave')
                leaveChoice.addEventListener('click', function () {
                  currentStoryId.push(Number(leaveChoice.value))
                  nextStory = get_story(currentStoryId, eugeneStories)
                  document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                  storyField.innerHTML += nextStory
                })
              })
            })
            const refuseChoice = document.getElementById('refuse')
            refuseChoice.addEventListener('click', function () {
              currentStoryId = []
              for (id of refuseChoice.value) {
                currentStoryId.push(Number(id))
              }
              nextStory = get_story(currentStoryId, eugeneStories)
              document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
              storyField.innerHTML += nextStory
            })
          })
        })
        const enlistChoice = document.getElementById('military')
        enlistChoice.addEventListener('click', function () {
          currentStoryId.push(Number(enlistChoice.value))
          nextStory = get_story(currentStoryId, eugeneStories)
          document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
          storyField.innerHTML += nextStory
        })
      })
    })

    const ignoreChoice = document.getElementById('ignore')
    ignoreChoice.addEventListener('click', function () {
      currentStoryId.push(Number(ignoreChoice.value))
      nextStory = get_story(currentStoryId, eugeneStories)
      document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
      storyField.innerHTML += nextStory
      const nextButton = document.getElementById('next')
      nextButton.addEventListener('click', function () {
        currentStoryId = []
        for (id of nextButton.value) {
          currentStoryId.push(Number(id))
        }
        nextStory = get_story(currentStoryId, eugeneStories)
        document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
        storyField.innerHTML += nextStory
        const collegeChoice = document.getElementById('apply')
        collegeChoice.addEventListener('click', function () {
          currentStoryId.push(Number(collegeChoice.value))
          nextStory = get_story(currentStoryId, eugeneStories)
          document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
          storyField.innerHTML += nextStory
          const phdChoice = document.getElementById('phd')
          phdChoice.addEventListener('click', function () {
            currentStoryId.push(Number(phdChoice.value))
            nextStory = get_story(currentStoryId, eugeneStories)
            document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
            storyField.innerHTML += nextStory
            const pollChoice = document.getElementById('poll')
            pollChoice.addEventListener('click', function () {
              currentStoryId.push(Number(pollChoice.value))
              nextStory = get_story(currentStoryId, eugeneStories)
              document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
              storyField.innerHTML += nextStory
              const nextButton = document.getElementById('next')
              nextButton.addEventListener('click', function () {
                currentStoryId = []
                for (id of nextButton.value) {
                  currentStoryId.push(Number(id))
                }
                nextStory = get_story(currentStoryId, eugeneStories)
                document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                storyField.innerHTML += nextStory
                const stayChoice = document.getElementById('stay')
                stayChoice.addEventListener('click', function () {
                  currentStoryId.push(Number(stayChoice.value))
                  nextStory = get_story(currentStoryId, eugeneStories)
                  document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                  storyField.innerHTML += nextStory
                })
                const leaveChoice = document.getElementById('leave')
                leaveChoice.addEventListener('click', function () {
                  currentStoryId.push(Number(leaveChoice.value))
                  nextStory = get_story(currentStoryId, eugeneStories)
                  document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                  storyField.innerHTML += nextStory
                })
              })
            })
            const refuseChoice = document.getElementById('refuse')
            refuseChoice.addEventListener('click', function () {
              currentStoryId.push(Number(refuseChoice.value))
              nextStory = get_story(currentStoryId, eugeneStories)
              document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
              storyField.innerHTML += nextStory
            })
          })
          const workChoice = document.getElementById('work')
          workChoice.addEventListener('click', function () {
            currentStoryId.push(Number(workChoice.value))
            nextStory = get_story(currentStoryId, eugeneStories)
            document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
            storyField.innerHTML += nextStory
            const pollChoice = document.getElementById('poll')
            pollChoice.addEventListener('click', function () {
              currentStoryId = []
              for (id of pollChoice.value) {
                currentStoryId.push(Number(id))
              }
              nextStory = get_story(currentStoryId, eugeneStories)
              document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
              storyField.innerHTML += nextStory
              const nextButton = document.getElementById('next')
              nextButton.addEventListener('click', function () {
                currentStoryId = []
                for (id of nextButton.value) {
                  currentStoryId.push(Number(id))
                }
                nextStory = get_story(currentStoryId, eugeneStories)
                document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                storyField.innerHTML += nextStory
                const stayChoice = document.getElementById('stay')
                stayChoice.addEventListener('click', function () {
                  currentStoryId.push(Number(stayChoice.value))
                  nextStory = get_story(currentStoryId, eugeneStories)
                  document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                  storyField.innerHTML += nextStory
                })
                const leaveChoice = document.getElementById('leave')
                leaveChoice.addEventListener('click', function () {
                  currentStoryId.push(Number(leaveChoice.value))
                  nextStory = get_story(currentStoryId, eugeneStories)
                  document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                  storyField.innerHTML += nextStory
                })
              })
            })
            const refuseChoice = document.getElementById('refuse')
            refuseChoice.addEventListener('click', function () {
              currentStoryId = []
              for (id of refuseChoice.value) {
                currentStoryId.push(Number(id))
              }
              nextStory = get_story(currentStoryId, eugeneStories)
              document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
              storyField.innerHTML += nextStory
            })
          })
        })
        const enlistChoice = document.getElementById('military')
        enlistChoice.addEventListener('click', function () {
          currentStoryId.push(Number(enlistChoice.value))
          nextStory = get_story(currentStoryId, eugeneStories)
          document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
          storyField.innerHTML += nextStory
        })
      })
    })
  })
}

function play_nata_game() {
  let currentStoryId = []
  let nextStory = get_story(currentStoryId, nataStories)
  storyField.innerHTML += nextStory
  const immigrateChoice = document.getElementById('immigrate')
  immigrateChoice.addEventListener('click', function () {                         
    currentStoryId.push(Number(immigrateChoice.value))
    nextStory = get_story(currentStoryId, nataStories)
    document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
    storyField.innerHTML += nextStory
    const busButton = document.getElementById('bus')
    busButton.addEventListener('click', function () {
      currentStoryId.push(Number(busButton.value))
      nextStory = get_story(currentStoryId, nataStories)
      document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
      storyField.innerHTML += nextStory
      const dinnerChoice = document.getElementById('dinner')
      dinnerChoice.addEventListener('click', function () {
        currentStoryId.push(Number(dinnerChoice.value))
        nextStory = get_story(currentStoryId, nataStories)
        document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
        storyField.innerHTML += nextStory
        const apartmentButton = document.getElementById('apartment')
        apartmentButton.addEventListener('click', function () {
          currentStoryId.push(Number(apartmentButton.value))
          nextStory = get_story(currentStoryId, nataStories)
          document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
          storyField.innerHTML += nextStory
          const viennaChoice = document.getElementById('vienna')
          viennaChoice.addEventListener('click', function () {
            currentStoryId.push(Number(viennaChoice.value))
            nextStory = get_story(currentStoryId, nataStories)
            document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
            storyField.innerHTML += nextStory
          })
          const trainChoice = document.getElementById('train')
          trainChoice.addEventListener('click', function () {
            currentStoryId.push(Number(trainChoice.value))
            nextStory = get_story(currentStoryId, nataStories)
            document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
            storyField.innerHTML += nextStory
            const americaButton = document.getElementById('america')
            americaButton.addEventListener('click', function () {
              currentStoryId.push(Number(americaButton.value))
              nextStory = get_story(currentStoryId, nataStories)
              document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
              storyField.innerHTML += nextStory
              const retailChoice = document.getElementById('retail')
              retailChoice.addEventListener('click', function () {
                currentStoryId.push(Number(retailChoice.value))
                nextStory = get_story(currentStoryId, nataStories)
                document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                storyField.innerHTML += nextStory
                let cadChoice = document.getElementById('cad')
                cadChoice.addEventListener('click', function () {
                  currentStoryId = []
                  for (id of cadChoice.value) {
                    currentStoryId.push(Number(id))
                  }
                  nextStory = get_story(currentStoryId, nataStories)
                  document.getElementById(`7`).style.color = 'grey'
                  storyField.innerHTML += nextStory
                })
                const companyChoice = document.getElementById('company')
                companyChoice.addEventListener('click', function () {
                  currentStoryId.push(Number(companyChoice.value))
                  nextStory = get_story(currentStoryId, nataStories)
                  document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                  storyField.innerHTML += nextStory

                })
              })
              let cadChoice = document.getElementById('cad')
              cadChoice.addEventListener('click', function () {
                currentStoryId = []
                for (id of cadChoice.value) {
                  currentStoryId.push(Number(id))
                }
                nextStory = get_story(currentStoryId, nataStories)
                document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
                storyField.innerHTML += nextStory
              })
            })
          })
        })
      })
      const sleepChoice = document.getElementById('sleep')
      sleepChoice.addEventListener('click', function () {
        currentStoryId.push(Number(sleepChoice.value))
        nextStory = get_story(currentStoryId, nataStories)
        document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
        storyField.innerHTML += nextStory
        const apartmentButton = document.getElementById('apartment')
        apartmentButton.addEventListener('click', function () {
          currentStoryId.push(Number(apartmentButton.value))
          nextStory = get_story(currentStoryId, nataStories)
          document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
          storyField.innerHTML += nextStory
          const viennaChoice = document.getElementById('vienna')
          viennaChoice.addEventListener('click', function () {
            currentStoryId.push(Number(viennaChoice.value))
            nextStory = get_story(currentStoryId, nataStories)
            document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
            storyField.innerHTML += nextStory
          })
          const trainChoice = document.getElementById('train')
          trainChoice.addEventListener('click', function () {
            currentStoryId.push(Number(trainChoice.value))
            nextStory = get_story(currentStoryId, nataStories)
            document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
            storyField.innerHTML += nextStory
          })
        })
      })
    })
  })
  const notGoChoice = document.getElementById('not-go')
  notGoChoice.addEventListener('click', function () {
    currentStoryId.push(Number(notGoChoice.value))
    nextStory = get_story(currentStoryId, nataStories)
    document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
    storyField.innerHTML += nextStory

  })
}

document.querySelector('button#eugene-start').addEventListener('click', function () {
  for (let element of document.querySelectorAll('span.info')) {
    element.remove()
  }
  for (let element of document.querySelectorAll('button.start')) {
    element.remove()
  }
  document.querySelector('header').remove()
  play_eugene_game()
  document.querySelector('button#eugene-start').removeEventListener()
})

document.querySelector('button#nata-start').addEventListener('click', function () {
  for (let element of document.querySelectorAll('span.info')) {
    element.remove()
  }
  for (let element of document.querySelectorAll('button.start')) {
    element.remove()
  }
  document.querySelector('header').remove()
  play_nata_game()
})
