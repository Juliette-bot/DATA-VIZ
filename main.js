import {hideBtnResteAndInput, citationAleatoirStreameuses, btnResetAndInput, clearCitations} from './chargement.js'
import { addTextAccueil } from './pagePrincipale.js'
import { hideannimation2, visibilityAnnimation2 } from './animation.js'


hideBtnResteAndInput()
citationAleatoirStreameuses()
hideannimation2()

setTimeout(() => {

    btnResetAndInput()
    clearCitations()
    visibilityAnnimation2()
    addTextAccueil()


}
    ,1000)


