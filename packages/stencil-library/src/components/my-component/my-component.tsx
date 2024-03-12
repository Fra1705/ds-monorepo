import { Component, Prop, h, State, Method  } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * Modal 
   */
  @State() showModal: boolean = false;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  @Method()
  async toggleModal() {
    this.showModal = !this.showModal;
  }

  render() {
    return (
      <div>
        <div>Hello, World!! I'm {this.getText()}</div>
        <button onClick={() => this.toggleModal()}>Open Modal</button>
        {this.showModal &&
          <div class="modal">
            <div class="modal-content">
              <span class="close" onClick={() => this.toggleModal()}>&times;</span>
              <p>This is a modal</p>
            </div>
          </div>
        }
      </div>
    );
  }
}
