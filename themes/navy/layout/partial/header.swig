<header id="header" class="wrapper">
  <div id="header-inner" class="inner">
    <h1 id="logo-wrap">
      <a href="{{ url_for_lang('') }}" id="logo">Lifeway</a>
    </h1>
    <nav id="main-nav">
      {{ header_menu('main-nav') }}
    </nav>
    <div id="lang-select-wrap">
      <div id="search-input-wrap">
        <div id="search-input-icon">
          <i class="fa fa-search"></i>
        </div>
        <input type="search" id="search-input" placeholder="Search...">
      </div>
    </div>
    <a id="mobile-nav-toggle">
      <span class="mobile-nav-toggle-bar"></span>
      <span class="mobile-nav-toggle-bar"></span>
      <span class="mobile-nav-toggle-bar"></span>
    </a>
  </div>
</header>
