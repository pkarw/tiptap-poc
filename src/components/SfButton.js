import { Node } from 'tiptap'
import { SfButton as SfButtonCore } from '@storefrontui/vue'

export default class SfButton extends Node {

  get name() {
    return 'SfButton'
  }

  get schema() {
    return {
      attrs: {
        src: {
          default: null,
        },
      },
      group: 'block',
      selectable: false,
      parseDOM: [{
        tag: 'SfButton'
      }],
      toDOM: node => ['SfButton', { // attributes
      }],
    }
  }

  get view() {
    return Object.assign(SfButtonCore, {
      props: ['node', 'updateAttrs', 'view'],
      computed: {
        src: {
          get() {
//            return this.node.attrs.src
          },
          set(src) {
            this.updateAttrs({
//              src,
            })
          },
        },
      },
      template: `
        <SfButton>Hello world</SfButton>
      `,
    })
  }

}