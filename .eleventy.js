module.exports = function (eleventyConfig) {
  // Copy assets straight through
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });

  // Responsive YouTube embed shortcode
  eleventyConfig.addShortcode('youtube', function (id, title = '') {
    const esc = (s) => (s || '').replace(/"/g, '&quot;');
    return `<div class="video-container">
      <iframe src="https://www.youtube.com/embed/${esc(id)}" title="${esc(title)}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen loading="lazy"></iframe>
    </div>`;
  });

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateFormats: ['md', 'njk', 'html'],
  };
};
