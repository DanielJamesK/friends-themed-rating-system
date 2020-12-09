const chan = document.querySelector('#chanimg')
const mon = document.querySelector('#monimg')
const rach = document.querySelector('#rachimg')
const pheobe = document.querySelector('#pheobeimg')
const joey = document.querySelector('#joeyimg')
const ross = document.querySelector('#rossimg')

const rossaudio = document.querySelector('#rossaudio')
const joeyaudio = document.querySelector('#joeyaudio')
const rachaudio = document.querySelector('#rachaudio')

// Chandler 
chanimg.addEventListener('mouseenter', () => {
  chanimg.src = "FriendsIcons/chanlight.png"
  joeyimg.src = "FriendsIcons/joeylight.png"
  rossimg.src = "FriendsIcons/rosslight.png"
  monimg.src = "FriendsIcons/monlight.png"
  pheobeimg.src = "FriendsIcons/pheobelight.png"
  rachimg.src = "FriendsIcons/rachlight.png"
})
chanimg.addEventListener('mouseleave', () => {
  chanimg.src = "FriendsIcons/chandark.png"
  joeyimg.src = "FriendsIcons/joeydark.png"
  rossimg.src = "FriendsIcons/rossdark.png"
  monimg.src = "FriendsIcons/mondark.png"
  pheobeimg.src = "FriendsIcons/pheobedark.png"
  rachimg.src = "FriendsIcons/rachdark.png"
})

// Joey 
joeyimg.addEventListener('mouseenter', () => {
  joeyimg.src = "FriendsIcons/joeylight.png"
  rossimg.src = "FriendsIcons/rosslight.png"
  monimg.src = "FriendsIcons/monlight.png"
  pheobeimg.src = "FriendsIcons/pheobelight.png"
  rachimg.src = "FriendsIcons/rachlight.png"
})
joeyimg.addEventListener('mouseleave', () => {
  joeyimg.src = "FriendsIcons/joeydark.png"
  rossimg.src = "FriendsIcons/rossdark.png"
  monimg.src = "FriendsIcons/mondark.png"
  pheobeimg.src = "FriendsIcons/pheobedark.png"
  rachimg.src = "FriendsIcons/rachdark.png"
})

// Ross 
rossimg.addEventListener('mouseenter', () => {
  rossimg.src = "FriendsIcons/rosslight.png"
  pheobeimg.src = "FriendsIcons/pheobelight.png"
  monimg.src = "FriendsIcons/monlight.png"
  rachimg.src = "FriendsIcons/rachlight.png"
})
rossimg.addEventListener('mouseleave', () => {
  rossimg.src = "FriendsIcons/rossdark.png"
  pheobeimg.src = "FriendsIcons/pheobedark.png"
  monimg.src = "FriendsIcons/mondark.png"
  rachimg.src = "FriendsIcons/rachdark.png"
})

// Pheobe
pheobeimg.addEventListener('mouseenter', () => {
  pheobeimg.src = "FriendsIcons/pheobelight.png"
  monimg.src = "FriendsIcons/monlight.png"
  rachimg.src = "FriendsIcons/rachlight.png"
})
pheobeimg.addEventListener('mouseleave', () => {
  pheobeimg.src = "FriendsIcons/pheobedark.png"
  monimg.src = "FriendsIcons/mondark.png"
  rachimg.src = "FriendsIcons/rachdark.png"
})

monimg.addEventListener('mouseenter', () => {
  monimg.src = "FriendsIcons/monlight.png"
  rachimg.src = "FriendsIcons/rachlight.png"

})
monimg.addEventListener('mouseleave', () => {
  monimg.src = "FriendsIcons/mondark.png"
  rachimg.src = "FriendsIcons/rachdark.png"
})

rachimg.addEventListener('mouseenter', () => {
  rachimg.src = "FriendsIcons/rachlight.png"
})
rachimg.addEventListener('mouseleave', () => {
  rachimg.src = "FriendsIcons/rachdark.png"
})

chanimg.addEventListener('click', () => {
  chanimg.src = "FriendsIcons/chanlight.png"
  joeyimg.src = "FriendsIcons/joeylight.png"
  rossimg.src = "FriendsIcons/rosslight.png"
  monimg.src = "FriendsIcons/monlight.png"
  pheobeimg.src = "FriendsIcons/pheobelight.png"
  rachimg.src = "FriendsIcons/rachlight.png"
})

rossimg.addEventListener('click', () => {
  rossaudio.play()
})

joeyimg.addEventListener('click', () => {
  joeyaudio.play()
})

rachimg.addEventListener('click', () => {
  rachaudio.play()
})