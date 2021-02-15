
let theme = localStorage.getItem('theme')

if(theme == null) {
  setTheme('light')
} else {
  setTheme(theme)
}

let themeDot = document.getElementsByClassName('theme-dot');

for(let i = 0; themeDot.length > i; i++) {
  themeDot[i].addEventListener('click', function(){
    let mode = this.dataset.mode
    console.log('Option Clicked:', mode)
    setTheme(mode)
  })
}

function setTheme(mode) {
  if(mode == 'light') {
    document.getElementById('theme-style').href = 'default.css'
  } else if(mode == 'dark') {
    document.getElementById('theme-style').href = 'dark.css'
  } else if(mode == 'colored') {
    document.getElementById('theme-style').href = 'colored.css'
  }

  localStorage.setItem('theme', mode)
}
