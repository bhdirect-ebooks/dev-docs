---
layout: false
---
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager</title>

  <script>window.CMS_ENV = "{% if process.env.CMS_ENV %}{{ process.env.CMS_ENV }}{% else %}{{'production' }}{% endif %}"</script>

  <!-- Include the styles for the Netlify CMS UI, after your own styles -->
  {% if process.env.CMS_ENV == 'development' %}
    <link rel="stylesheet" href="//cms.netlify.com/assets/cms.css" />
  {% else %}
    <link rel="stylesheet" href="https://unpkg.com/netlify-cms@^1.7.0/dist/cms.css" />
  {% endif %}

  <!-- Netlify Identity Widget for login auth-->
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</head>
<body>
  <nav><a href="/">Home</a></nav>
  <!-- Include the script that builds the page and powers Netlify CMS -->
  {% if process.env.CMS_ENV == 'development' %}
    <script src="//cms.netlify.com/assets/vendor.js"></script>
    <script src="//cms.netlify.com/assets/cms.js"></script>
  {% else %}
    <script src="https://unpkg.com/netlify-cms@^1.7.0/dist/cms.js"></script>
  {% endif %}
</body>
</html>