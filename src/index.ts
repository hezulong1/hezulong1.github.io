import './styles/prose.css'
import 'virtual:windi-utilities.css'
import Typed from 'typed.js'

if (typeof document !== 'undefined') {
  new Typed(document.querySelector('#hello')!, {
    typeSpeed: 125,
    backSpeed: 100,
    smartBackspace: false,
    startDelay: 100,
    backDelay: 1500,
    showCursor: false,
    loop: true,
    strings: ['哈喽', 'Hello', 'こんにちは', 'Hola', 'Bonjour']
  })
}
