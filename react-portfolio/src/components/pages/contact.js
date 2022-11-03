import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Name:</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address:</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
        </div>
        <button type="button" class="btn btn-primary">Submit</button>
    </div>
  );
}