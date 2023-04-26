import React from "react";

function ContactMe() {
  return (
    <>
      <div class="contact-form">
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="name"
            class="form-control"
            placeholder="First Name, Last Name"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">
            Message
          </label>
          <textarea class="form-control" rows="3"></textarea>
        </div>
        <button type="button" class="btn btn-primary">
          Primary
        </button>
      </div>
    </>
  );
}

export default ContactMe;
