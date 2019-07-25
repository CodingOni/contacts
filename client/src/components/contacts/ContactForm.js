import React, { useState } from 'react';

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  return (
    <form>
      <h2 className="text-primary">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={onChange}
        />
        <h5>Contact Type</h5>
        <input
          type="radio"
          name="type"
          id=""
          value="personal"
          checked={type === 'personal'}
        />{' '}
        Personal{' '}
        <input
          type="radio"
          name="type"
          id=""
          value="Professional"
          checked={type === 'professional'}
        />
        Professional{' '}
        <div>
          <input
            type="submit"
            value="Add Contact"
            className="btn btn-primary btn-block"
          />
        </div>
      </h2>
    </form>
  );
};

export default ContactForm;
