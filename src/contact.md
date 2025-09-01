---
layout: layouts/base.njk
title: Contact
description: Get in touch.
---

# Contact

<div class="callout">
  <p>Email: <a href="mailto:{{ site.email }}">{{ site.email }}</a><br>
  
  Phone: {{ site.phone }}</p>
</div>

<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact">
  <p><label>Your Name<br><input type="text" name="name" required></label></p>
  <p><label>Email<br><input type="email" name="email" required></label></p>
  <p><label>Message<br><textarea name="message" rows="6" required></textarea></label></p>
  <p><button type="submit">Send</button></p>
</form>

> This form works on Netlify with zero code changes.
