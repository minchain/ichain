---
layout: layouts/base.njk
title: Videos
description: Short demos and explainers.
---

# Videos

Use either YouTube (recommended) or self-hosted MP4s.

## YouTube/Vimeo (recommended)

Embed a YouTube video by ID with the shortcode:


```
{% raw %}{% youtube "dQw4w9WgXcQ", "Our Product Demo" %}{% endraw %}
```

{% youtube "dQw4w9WgXcQ", "Our Product Demo" %}

## Self‑hosted MP4 (simple)

Put your video file at `src/assets/your-video.mp4`, then embed:

```html
<video controls preload="metadata" style="width:100%; border-radius: 1rem;">
  <source src="/assets/your-video.mp4" type="video/mp4">
  Sorry, your browser doesn't support embedded videos.
</video>
```

> Tip: External hosting (YouTube/Vimeo) is best for large files to save bandwidth.
