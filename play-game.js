const htmlOr = `<span class="introduce-decision">or</span>`
const stories = [[[], [], `<p class="story">You decide to bear down and study hard to make sure you get every question right - just like Eugene did. After all, your mother often tells you, "As a Jewish kid, you have to earn an A+ to get an A."<br>The day of the test comes around and you ace it. You get every answer right, but the teacher marks you wrong for one, saying you didn't use the technique taught in your textbooks.</p><span class="introduce-decision">You still got an A, but you can...</span><button class="decision" id="contest" value="00">Approach the teacher about this petty markdown</button>${htmlOr}<button class="decision" id="go-home" value="01">Just take the A and go home</button>`],
[[], [], `<p class="story">You decide to go to the marshy creek area by your home - just as Eugene did on many occasions. You walk into the clearing and are hit with a wall of sound. You can't believe how loud it is! Frogs croaking, birds chirping, the vast amount of nature is astounding, but you're used to it. You find your friends and begin chasing each other around, climbing trees, when you hear a kid yell from behind, "Hey, YiIidDd!".</p><span class="introduce-decision">You whip your head around and realize you know this kid. He's bullied you and the other Jews in your class before. You...</span><button class="decision" id="fight-the-shit" value="10">Turn around and fight the kid</button>${htmlOr}<button class="decision" id="ignore-the-shit" value="11">Ignore the kid and keep playing</button>`], 
`<p class="story">You were born on a military base, and most of what you do is monitored and dictated by the government. Additionally, as a Jew, you're further discriminated against by schoolmates and teachers. Your teacher tells you that you have a math test coming up, and you're confident you can get a good grade on it.</p><span class="introduce-decision">You have some freetime in the afternoon, would you like to...</span><br><button class="decision" id="study" value="0">Study for the test</button>${htmlOr}<button class="decision" id="play" value="1">Walk to the creek and play with friends</button>`]
const storyField = document.querySelector('div.story-field')


function get_id_from_value(value) {
  let outputList = []
  for (let stringNum of value) {
    outputList.push(Number(stringNum))
  }
  return outputList
}


function get_story(storyID) {
  let innerList = stories
  for (let idNumber of storyID) {
    innerList = innerList[idNumber]
  }
  for (let element of document.querySelectorAll('button')) {
    element.remove()
  }
  for (let element of document.querySelectorAll('span.introduce-decision')) {
    element.remove()
  }
  storyField.innerHTML += innerList[2]
}


function play_eugene_game() {
  let currentStoryID = []
  get_story(currentStoryID)
  let studyChoice = document.getElementById('study')
  studyChoice.addEventListener('click', function () {
    currentStoryID.push(get_id_from_value(studyChoice.value))
    get_story(currentStoryID)
    currentStoryID = []
  })
  let playChoice = document.getElementById('play')
  playChoice.addEventListener('click', function () {
    currentStoryID.push(get_id_from_value(playChoice.value))
    get_story(currentStoryID)
    currentStoryID = []
  })
  let contestChoice = document.getElementById('contest')
  contestChoice.addEventListener('click', function () {
    currentStoryID.push(get_id_from_value(contestChoice.value))
    get_story(currentStoryID)
    currentStoryID = []
  })
  let goHomeChoice = document.getElementById('play')
  goHomeChoice.addEventListener('click', function () {
    currentStoryID.push(get_id_from_value(goHomeChoice.value))
    get_story(currentStoryID)
    currentStoryID = []
  })
  let fightChoice = document.getElementById('fight-the-shit')
  fightChoice.addEventListener('click', function () {
    currentStoryID.push(get_id_from_value(fightChoice.value))
    get_story(currentStoryID)
    currentStoryID = []
  })
  let ignoreChoice = document.getElementById('ignore-the-shit')
  ignoreChoice.addEventListener('click', function () {
    currentStoryID.push(get_id_from_value(ignoreChoice.value))
    get_story(currentStoryID)
    currentStoryID = []
  })
}

document.querySelector('button#eugene-start').addEventListener('click', function () {
  play_eugene_game()
})
