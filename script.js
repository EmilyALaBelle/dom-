
 function displayDate() {
    document.getElementById('demo').innerHTML =Date()
    }
    document.getElementsByTagName('button')[0]
    .addEventListener("click", () => {
      alert('You clicked the button')
    })

    window.addEventListener('resize', () => {
      document.getElementById('demo').innerHTML = "You resized the window!"
    })
    
    window.addEventListener("keydown", (event) => {
      switch(event.key) {
          case 'r':
              document.body.style.backgroundColor = 'red'
              break
          case 'o':
              document.body.style.backgroundColor = 'orange'
              break
          case 'y':
              document.body.style.backgroundColor = 'yellow'
              break
          case 'g':
              document.body.style.backgroundColor = 'green'
              break
          case 'b':
              document.body.style.backgroundColor = 'blue'
              break
          case 'i':
              document.body.style.backgroundColor = 'indigo'
              break
          case 'v':
              document.body.style.backgroundColor = 'violet'
              break
          case 'p':
              document.body.style.backgroundColor = 'pink'
              break
          case 'w':
              document.body.style.backgroundColor = 'white'
              break
      }
    })
