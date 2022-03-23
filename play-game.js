const htmlOr = `<span class="or"><em>or</em></span>`
const eugeneStories = [[[[[], [], [`words`]], [], 
`<span class="story">&emsp;&emsp;You approach the teacher about your unfair grade. She refuses to amend it, telling you that you have to follow the government methods. You go home having learned two valuable lessons: everything you do here will be dictated by the government, and it will always be harder for you as a Jew. These were the main points Eugene learned as a child, and they greatly influenced his later decisions.</span><br><div class="choice"><button class="decision" id="next" value="000">7 years later...</button></div>`], 
[[[], [], [`words`]], [], 
`<span class="story">&emsp;&emsp;You decide it's not worth the fight and go home, A in hand. You meet with your mom, and she tells you that she's proud of you, that you did all you could. You know she's right, but you still toss and turn that night, thinking how hard it is for you here. You set your mind on making it to a place where you can make a name for yourself and be recognized for your achievements, just as Eugene did at an early age.</span><br><div class="choice"><button class="decision" id="next" value="000">7 years later...</button></div>`], 
`<span class="story">&emsp;&emsp;You decide to bear down and study hard to make sure you get every question right - just like Eugene did. After all, your mother often tells you, "As a Jew, you have to earn an A+ to get an A!"<br>&emsp;&emsp;Lo and behold, the day of the test comes around and you ace it. You get every answer right, but the teacher marks you wrong for one, saying you didn't use the technique taught in your textbooks.</span><br><span class="introduce-decision">You did receive an A, but you can...</span><br><div class="choice"><button class="decision" id="talk" value="0">Talk to your teacher about your grade</button>${htmlOr}<button class="decision" id="go-home" value="1">Just go home</button></div>`],
[[[[], [], [`words`]], [], 
`<span class="story">&emsp;&emsp;You walk over to the kid and throw a punch. He's taken off his guard and you hit him square in the face. He stumbles back, before throwing a punch of his own. After a bit more back and forth, you get up and he stays down. You walk home slowly, wiping the mud off your pants. When you get home, your mom cleans up your wounds, and asks what happens. You tell her the story and she nods sadly. She says she's proud you stood up for yourself, but she urges you not to interact next time. You learn that you'll never be treated as an equal here, and that there's no good way to fight back. Eugene also fought a few bullies as a kid, and learned a similar lesson.</span><br><div class="choice"><button class="decision" id="next" value="0">7 years later...</button></div>`], 
[[[], [], [`words`]], [], 
`<span class="story">&emsp;&emsp;You ignore the kid and keep playing. He yells again, louder this time, "Heeeyy, YiiIIidDD!!" You don't react and he yells at you again, and again. You don't pay him any mind, and he eventually gets bored and leaves. You go home soon after, thinking about the way you're being treated and the fact that it won't get any better while you live here.</span><br><div class="choice"><button class="decision" id="next" value="0">7 years later...</button></div>`], 
`<span class="story">&emsp;&emsp;You decide to go to the marshy creek area by your home - just as Eugene did on many occasions. You walk into the clearing and hear the sounds you've become accustomed to: frogs croaking, birds chirping, the amount and loudnees of the nature is astounding, yet calming. You find your friends and begin chasing each other around, climbing trees, when you hear a kid yell from behind, "Hey, YiIidDd!".</span><br><span class="introduce-decision">You whip your head around and realize you know this kid. He's bullied you and the other Jews in your class before. You...</span><br><div class="choice"><button class="decision" id="fight" value="0">Walk over and stand up to him</button>${htmlOr}<button class="decision" id="ignore" value="1">Ignore him and keep playing</button></div>`], 
`<span class="story">&emsp;&emsp;Welcome to the great USSR! The year is 1971, and you just turned 10 in Brest, Belarus, a military city of about 200,000 near the Polish border. You were born on a military base, and most of what you do is monitored and dictated by the government. Additionally, as a Jew, you're further discriminated against by schoolmates and teachers. Your teacher tells you that you have a math test coming up, and you're confident you can get a good grade on it.</span><br><span class="introduce-decision">You have some freetime in the afternoon, will you...</span><br><div class="choice"><button class="decision" id="study" value="0">Study for the test</button>${htmlOr}<button class="decision" id="play" value="1">Walk to the creek and play with your friends</button></div>`]
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
        currentStoryId.push(Number(nextButton.value))
        nextStory = get_story(currentStoryId, eugeneStories)
        document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
        storyField.innerHTML += nextStory
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
        currentStoryId.push(Number(nextButton.value))
        nextStory = get_story(currentStoryId, eugeneStories)
        document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
        storyField.innerHTML += nextStory
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
        currentStoryId.push(Number(nextButton.value))
        nextStory = get_story(currentStoryId, eugeneStories)
        document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
        storyField.innerHTML += nextStory
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
        currentStoryId.push(Number(nextButton.value))
        nextStory = get_story(currentStoryId, eugeneStories)
        document.getElementById(`${currentStoryId.length - 1}`).style.color = 'grey'
        storyField.innerHTML += nextStory
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
