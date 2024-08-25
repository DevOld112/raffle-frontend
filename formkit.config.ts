import { fr } from '@formkit/i18n'
import { defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'

const config = {
  config: {
    classes: generateClasses({
      global: {
        wrapper: 'space-y-2 mb-3',
        message: 'bg-red-500 text-white text-center font-bold uppercase p-2 my-5',
        label: 'block mb-1 font-bold text-lg',
        input: 'w-full p-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400'
      },
      submit: {
        input: '$reset bg-blue-500 hover:bg-blue-600 rounded-lg p-2 text-white font-bold mt-10 w-full'
      }
    })
  }
};

export default defaultConfig({
  locales: { fr },
  locale: 'fr',
  ...config
});