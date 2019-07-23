const express = require('express');
const router = express.Router();

//@ route Get api/contacts
//@ desc Get Register a user
//@ access Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

//@ route POST api/contacts
//@ desc Add a new contact
//@ access Private
router.post('/', (req, res) => {
  res.send('Addcontacts');
});

//@ route PUT api/contacts/:id
//@ desc Update Contact
//@ access Private
router.put('/:id', (req, res) => {
  res.send('Update Contact');
});

//@ route DELETE api/contacts/:id
//@ desc Delete Contact
//@ access Private
router.delete('/:id', (req, res) => {
  res.send('Delete Contact');
});

module.exports = router;
