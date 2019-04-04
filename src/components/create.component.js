import { Component } from '../core/component';
import { Form } from '../core/form';
import { Validation } from '../core/validation';

export class CreateComponent extends Component {
  constructor(id) {
    super(id)
  }

  init () {
    this.$el.addEventListener('submit', submitHandler.bind(this));

    this.form = new Form(this.$el, {
      title: [Validation.required],
      fulltext: [Validation.required, Validation.minLength(10)]
    });
  }
}


function submitHandler (event) {
  event.preventDefault();

  if (this.form.isValid()) {
    const formData = {
      type: this.$el.type.value,
      ...this.form.value()
    }

    this.form.clear();
  
    console.log('submit', formData);
  } 

}