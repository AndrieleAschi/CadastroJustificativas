import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)
/**
 * Para colocar uma nova frase/palavra coloque no fim do obj de CADA linguagem,
 * se você esquecer irá dar erro no console
 * pt - Português
 * es - Espanhol
 * en - Inglês
 * sendo ele no formato:
 * nomeDaFrase: 'Nome da frase'
 * ---
 * Para chamar uma frase daqui você precisará colocar
 * v-text="$ml.get('nomeDaFrase')"
 * Obrigado
 */

export default new MLCreate({
  initial: 'pt',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('pt').create({
      language: 'br',
      titleListUnsubscribe: 'Por que você quer se descadastrar?',
      titleUnsubscrible: 'Nós sentiremos sua falta',
      txtUnsubscrible: 'Lamentamos ver você indo embora.Para que possamos melhorar nossa comunicação, gostaríamos de saber os motivos que o levaram a tomar essa decisão.',
      txtObs: 'O questionário é opcional.',
      emailUnsubscrible: 'O descadastramento será efetuado para o e-mail:',
      buttonUnsubscrible: 'Descadastrar'
    }),

    new MLanguage('en').create({
      language: 'en',
      titleListUnsubscribe: 'Why do you want to unsubscribe?',
      titleUnsubscrible: 'We will miss you',
      txtUnsubscrible: 'We"re sorry to see you go. To improve our communication, we would like to know the reasons that led you to make this decision.',
      txtObs: 'The questionnaire is optional.',
      emailUnsubscrible: 'Unsubscribe of registration will be made to the email:',
      buttonUnsubscrible: 'Unsubscribe',
    }),

    new MLanguage('es').create({
      language: 'es',
      titleListUnsubscribe: '¿Por qué quieres darte de baja?',
      titleUnsubscrible: 'Te extrañaremos',
      txtUnsubscrible: 'Lamentamos que te vayas, para mejorar nuestra comunicación, nos gustaría conocer los motivos que te llevaron a tomar esta decisión.',
      txtObs: 'El cuestionario es opcional.',
      emailUnsubscrible: 'La baja se realizará al correo electrónico:',
      buttonUnsubscrible: 'darse de baja',
    })
  ]
})
