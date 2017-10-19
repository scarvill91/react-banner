webpackJsonp([2],{149:function(s,a){s.exports='<p><strong>React Banner</strong> is a react component for generating banners (or "navigation bars") like one displayed above. This component is easy to use, customize, and integrate with other open source react components. </p>\n<p>Banners of one kind or another are used on a wide variety of sites and often provide similar functionality such as <em>navigation</em> and <em>searching</em>. Using this component lets you to quickly get this key part of your site up and running with very little code. Then easily customize and tweak the styling as your requirements or design evolves.</p>\n<h2>Installation</h2>\n<p>This component can be installed from npm:</p>\n<pre><code class="hljs language-bash">npm install --save react-banner</code></pre>\n<p>You can also grab the minified JavaScript and CSS straight from <code>/dist</code> and include it with a <code>&#x3C;script></code> tag.</p>\n<h2>Quick Start</h2>\n<p>The following example shows the most basic setup possible. Note that it assumes a webpack environment, with a pre-processor like <a href="https://babeljs.io/">babel</a> enabled to allow ES2015 and JSX...</p>\n<pre><code class="hljs language-javascript"><span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">\'react\'</span>\n<span class="hljs-keyword">import</span> Banner <span class="hljs-keyword">from</span> <span class="hljs-string">\'react-banner\'</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'react-banner/dist/style.css\'</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> props => {\n    <span class="hljs-keyword">return</span> (\n        <span class="xml"><span class="hljs-tag">&#x3C;<span class="hljs-name">Banner</span>\n            <span class="hljs-attr">logo</span>=<span class="hljs-string">"My Logo"</span>\n            <span class="hljs-attr">url</span>=<span class="hljs-string">{</span> <span class="hljs-attr">window.location.pathname</span> }\n            <span class="hljs-attr">links</span>=<span class="hljs-string">{[</span>\n                { "<span class="hljs-attr">title</span>"<span class="hljs-attr">:</span> "<span class="hljs-attr">Example</span> <span class="hljs-attr">Link</span>", "<span class="hljs-attr">url</span>"<span class="hljs-attr">:</span> "/<span class="hljs-attr">example</span>" },\n                { "<span class="hljs-attr">title</span>"<span class="hljs-attr">:</span> "<span class="hljs-attr">Another</span>", "<span class="hljs-attr">url</span>"<span class="hljs-attr">:</span> "/<span class="hljs-attr">another</span>" },\n                { "<span class="hljs-attr">title</span>"<span class="hljs-attr">:</span> "<span class="hljs-attr">Link</span> <span class="hljs-attr">w</span>/ <span class="hljs-attr">Children</span>", "<span class="hljs-attr">url</span>"<span class="hljs-attr">:</span> "/<span class="hljs-attr">children</span>", "<span class="hljs-attr">children</span>"<span class="hljs-attr">:</span> [\n                    { "<span class="hljs-attr">title</span>"<span class="hljs-attr">:</span> "<span class="hljs-attr">John</span>", "<span class="hljs-attr">url</span>"<span class="hljs-attr">:</span> "/<span class="hljs-attr">children</span>/<span class="hljs-attr">john</span>" },\n                    { "<span class="hljs-attr">title</span>"<span class="hljs-attr">:</span> "<span class="hljs-attr">Jill</span>", "<span class="hljs-attr">url</span>"<span class="hljs-attr">:</span> "/<span class="hljs-attr">children</span>/<span class="hljs-attr">jill</span>" },\n                    { "<span class="hljs-attr">title</span>"<span class="hljs-attr">:</span> "<span class="hljs-attr">Jack</span>", "<span class="hljs-attr">url</span>"<span class="hljs-attr">:</span> "/<span class="hljs-attr">children</span>/<span class="hljs-attr">jack</span>" }\n                ]}\n            ]} /></span>\n    )\n}</span></code></pre>\n<p>Please see the <a href="./customization">customization page</a> to see a full list of props, custom links, and notes on custom styling.</p>\n<h2>Integration</h2>\n<p>See the examples section to learn how to integrate this component with other open-source react components like <a href="./integration/headroom">react-headroom</a> and <a href="./integration/sidebar">react-sidebar</a>.</p>\n'}});
//# sourceMappingURL=2.root.bundle.js.map