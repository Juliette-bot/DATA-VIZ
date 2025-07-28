import {hideBtnResteAndInput, citationAleatoirStreameuses, btnResetAndInput, clearCitations} from './chargement.js'
import { inputRefresh } from './pagePrincipale.js'


hideBtnResteAndInput()
citationAleatoirStreameuses()

setTimeout(() => {

    btnResetAndInput()
    clearCitations()


}
    ,1000)


inputRefresh()