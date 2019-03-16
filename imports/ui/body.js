import { Template } from 'meteor/templating';
import './body.html';

Template.body.helpers({
  todos: [
    { text: 'This is todo 1' },
    { text: 'This is todo 2' },
    { text: 'This is todo 3' },
  ],

  tasks: [
  	{ line: 'This is task 1' },
  	{ line: 'This is task 2' },
  ],
});