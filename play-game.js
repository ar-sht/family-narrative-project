const htmlOr = `<span class="or"><em>or</em></span>`
const eugeneStories = [[[[[[[[[[], [], `<span class="story">&emsp;&emsp;You choose not to leave. After all, this is the only home you've ever known and it seems inconceiveable to start over again. You stay and live out your life in Russia.</span><br><span class="intermission"><em>You- the goal was to get out, what's wrong with you?!?!</em></span><br><center><span class="story">Refresh the page to start over or <a href="about/eugene.html" id="in-text">learn more about Eugene</a></span>`], 
  [[], [], `<span class="story">&emsp;&emsp;You book a flight to New York. You're allowed to take one suitcase and $100 per person with you. You land in the US with $400, and after being processed by immigration you go to a store nearby to get some food. In the Soviet Union, bananas were incredibly rare, you've seen just one in your life. You walk into the store and see bunches of bananas everywhere. You're taken aback, and decide to buy some to give to your kids. You ask the owner how much they are in your very limited English, and he tells you five dollars, just over $10 today. You buy them and after you get out, you meet your friend who's lived here for some time, and he tells you that you were cheated. Here, you realize that some people will only take advantage of you. You're not out of the woods yet. You board your next flight to San Francisco, and when you arrive, you meet up with your sister and she introduces you to the local Jewish community. Here you get support and assistance in finding a home and a job. After a lot of hard work and dedication, you're fluent in English and working as a professor at Stanford University.</span><br><span class="intermission"><em>Congratulations! You took the path Eugene took, and made it to America!</em></span><br><center><span class="story">Refresh the page to start over or <a href="about/eugene.html" id="in-text">learn more about Eugene</a></span>`], 
`<span class="intermission"><em>7 years later, and Gorbachev's Perestroika is in full effect</em></span><br><span class="story">&emsp;&emsp;You got married in ____, and you have two young children. Thanks to Perestroika's immigration policies, your sister tries to move to the US with her son, and after living in refugee camps in Austria and Italy for nearly a year, they get a visa and move to San Francisco, California. After seeing them leave, you decide to begin the immigration process yourself. Unfortunately, for a woman (as an adult) to leave the Soviet Union, both her parents must agree to it. This is a problem, because your wife's parents got divorced when she was very young, and her dad hasn't been a part of her life. You eventually track him down, and you're able to leave after almost 2 years.</span><br><span class="introduce-decision">You have the chance, it's now or never, will you...</span><br><div class="choice"><button class="decision" id="stay" value="0">Stay</button>${htmlOr}<button class="decision" id="leave" value="1">Leave</button></div>`], 
[], `<span class="story">&emsp;&emsp;You agree to help him, and read up on how to use punch cards and basic algorighms to program the computer. Every day, your friend asks your coworkers seemingly innocous questions that show a true approval rating of the regime when put together. Instead of asking if people agree with the Party's policies, he asks how they feel about the price of vodka and how well they think the stores are stocked. You take his results, put them into your program, and the results show just what you'd expected: not even the well-payed workers support the Party.<br>&emsp;&emsp;Eventually you save up enough money to buy a personal computer, and you start programming in C and C++. Now you can get graphical representations and charts of the statistics. You continue to work in the factory, but you feel like something's missing.</span><br><div class="choice"><button class="decision" id="next" value="0000000">7 years later...</button></div>`], 
  [[], [], `<span class="story">&emsp;&emsp;You decide not to risk helping him - you could get in trouble with the government after all, and instead continue working. Years later as you try to immigrate to the US, you're refused a visa because you don't have enough applicable skills. If only you'd learned how to program with your friend so many years ago.</span><br><span class="intermission"><em>You failed to get out...</em></span><br><center><span class="story">Refresh the page to start over or <a href="about/eugene.html" id="in-text">learn more about Eugene</a></span>`], 
`<span class="story">&emsp;&emsp;You approach the department head about joining the doctorate program, but he tells you that the university's post-graduate courses aren't available to Jews. Instead, you're forced to find a job at a factory that manufactures equipment for nuclear power plants. You work as an engineer, but you're only paid about 1/3 of what the assembly line workers make. You meet a co-worker with an interest in psychology, and he tells you about an experiment he wants to conduct.</span><br><span class="introduce-decision">He wants to poll some of the workers about their living conditions, and he wants you to help him program the big factory computer to analyze the results. Will you...</span><br><div class="choice"><button class="decision" id="poll" value="0">Agree to help him</button>${htmlOr}<button class="decision" id="refuse" value="1">Refuse to help him</button>`], 
  [[], [], `<span class="story">&emsp;&emsp;You look for a job and find one at a factory that manufactures equipment for nuclear power plants. You work as an engineer, but you're only paid about 1/3 of what the assembly line workers make. You meet a co-worker with an interest in psychology, and he tells you about an experiment he wants to conduct.</span><br><span class="introduce-decision">He wants to poll some of the workers about their living conditions, and he wants you to help him program the big factory computer to analyze the results. Will you...</span><br><div class="choice"><button class="decision" id="poll" value="000000">Agree to help him</button>${htmlOr}<button class="decision" id="refuse" value="000001">Refuse to help him</button>`],
`<span class="story">&emsp;&emsp;You apply to Leningrad Politechnika instead, one of the few universities open to Jewish students. You are accepted into the university and exempted from the draft. You begin studying physics and engineering, and become friendly with the other Jews in your classes, and even with the head of the school of engineering. You work hard and learn a lot, and are at the top of your class by graduation.</span><br><span class="introduce-decision">Now you can...</span><br><div class="choice"><button class="decision" id="work" value="1">Get a job right after graduation</button>${htmlOr}<button class="decision" id="phd" value="0">Try to get a PhD</button></div>`], 
[[], [], `<span class="story">You decide it's not worth trying to get into another university and join the military. You drift around the country, working out of different bases. You rarely see active combat, and your childhood ambitions of recognition and oppurtinity are dashed.</span><br><span class="intermission"><em>You failed to get out...</em></span><br><center><span class="story">Refresh the page to start over or <a href="about/eugene.html" id="in-text">learn more about Eugene</a></span>`], 
`<span class="intermission"><em>7 years pass, and you're now in your final year of high school</em></span><br><span class="story">&emsp;&emsp;If you can't get into a college that will give you a deferral, you'll be drafted into the military just like your father was. Your sister is already studying at Leningrad Polytechnika, but you've been called to Leningrad University for your acceptance test and interview. When you arrive, you're taken into a room, and given a series of questions. You struggle to answer most of them, and this is no accident. Many Soviet universities have a different set of questions to ask Jewish applicants to prevent them from getting in.</span><br><span class="introduce-decision">You're frustrated at this unfairness, and decide to...</span><br><div class="choice"><button class="decision" id="apply" value="0">Apply to Polytechnika to get an education and avoid the draft</button>${htmlOr}<button class="decision" id="military" value="1">Go into the military</button></div>`], [], 
`<span class="story">&emsp;&emsp;You approach the teacher about your unfair grade. She refuses to amend it, telling you that you have to follow the government methods. You go home having learned two valuable lessons: everything you do here will be dictated by the government, and it will always be harder for you as a Jew.</span><br><div class="choice"><button class="decision" id="next" value="000">7 years later...</button></div>`], 
[[], [], 
`<span class="story">&emsp;&emsp;You decide it's not worth the fight and go home, A in hand. You meet with your mom, and she tells you that she's proud of you, that you did all you could. You know she's right, but you still toss and turn that night, thinking how hard it is for you here. You set your mind on making it to a place where you can make a name for yourself and be recognized for your achievements.</span><br><div class="choice"><button class="decision" id="next" value="000">7 years later...</button></div>`], 
`<span class="story">&emsp;&emsp;You decide to bear down and study hard to make sure you get every question right. After all, your mother often tells you, "As a Jew, you have to earn an A+ to get an A!"<br>&emsp;&emsp;Lo and behold, the day of the test comes around and you ace it. You get every answer right, but the teacher marks you wrong for one, saying you didn't use the technique taught in your textbooks.</span><br><span class="introduce-decision">You did receive an A, but you can...</span><br><div class="choice"><button class="decision" id="talk" value="0">Talk to your teacher about your grade</button>${htmlOr}<button class="decision" id="go-home" value="1">Just go home</button></div>`],
[[[], [], 
`<span class="story">&emsp;&emsp;You walk over to the kid and throw a punch. He's taken off his guard and you hit him square in the chest. He stumbles back, dazed, before throwing a punch of his own. After a bit more back and forth, you get up and he stays down. You walk home slowly, wiping the mud off your pants. When you get home, your mom cleans up your wounds, and asks what happens. You tell her the story and she nods sadly. She says she's proud you stood up for yourself, but urges you not to interact next time. You learn that you'll always be discriminated against based on your religion here, and that there's no good way to fight back.</span><br><div class="choice"><button class="decision" id="next" value="000">7 years later...</button></div>`], 
[[], [], 
`<span class="story">&emsp;&emsp;You ignore the kid and keep playing. He yells again, louder this time, "Heeeyy, YiiIIidDD!!" You don't react and he yells at you again, and again. You don't pay him any mind, and he eventually gets bored and leaves. You go home soon after, thinking about the way you're being treated and you realize that it won't get any better while you live here.</span><br><div class="choice"><button class="decision" id="next" value="000">7 years later...</button></div>`], 
`<span class="story">&emsp;&emsp;You decide to go to the marshy creek area by your home. You walk into the clearing and hear the sounds you've become accustomed to: frogs croaking, birds chirping, the volume of the natural world is astounding, yet calming. You find your friends and begin chasing each other around, climbing trees, when you hear a kid yell from behind, "Hey, YiIidDd!".</span><br><span class="introduce-decision">You whip your head around and realize you know this kid. He's bullied you and the other Jews in your class before. You...</span><br><div class="choice"><button class="decision" id="fight" value="0">Walk over and stand up to him</button>${htmlOr}<button class="decision" id="ignore" value="1">Ignore him and keep playing</button></div>`], 
`<span class="story">&emsp;&emsp;Welcome to the great USSR! The year is 1971, and you just turned 10 in Brest, Belarus, a military city of about 200,000 near the Polish border. You were born on a military base, and most of what you do is monitored and dictated by the government. Additionally, as a Jew, you're further discriminated against by schoolmates and teachers. Your teacher tells you that you have a math test coming up, and you're confident you can get a good grade on it.</span><br><span class="introduce-decision">You have some freetime in the afternoon, will you...</span><br><div class="choice"><button class="decision" id="study" value="0">Study for the test</button>${htmlOr}<button class="decision" id="play" value="1">Walk to the creek and play with your friends</button></div>`]

const nataStories = [[], [], `words`]

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

document.querySelector('button#eugene-start').onclick = function () {
  for (let element of document.querySelectorAll('span.info')) {
    element.remove()
  }
  for (let element of document.querySelectorAll('button.start')) {
    element.remove()
  }
  document.querySelector('header').remove()
  play_eugene_game()
}
