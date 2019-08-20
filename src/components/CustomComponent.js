import { Node } from 'tiptap'
import CustomComponentCore from './CustomComponentCore'

export default class SfButton extends Node {

  get name() {
    return 'CustomComponent'
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
        tag: 'CustomComponent'
      }],
      toDOM: node => ['CustomComponent', { // attributes
      }],
    }
  }

  get view() {
    return Object.assign(CustomComponentCore, {
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
      }
    })
  }

}