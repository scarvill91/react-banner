webpackJsonp([0],{151:function(s,n){s.exports='<p>Top navigation bars are great when your site is being viewed on larger screens like desktops and laptops, however when users visit your site from a mobile phone you need to offer a more friendly alternative. There\'s a lot of options out there: <a href="https://dribbble.com/shots/2225840-Simplified-Mobile-Navigation">top-down menus</a>, <a href="https://dribbble.com/shots/2193651-Mobile-menu">full-screen overlay menus</a>, <a href="https://dribbble.com/shots/2695255-Profile-and-side-panel-menu">panels</a> and many more. Personally I think side panels are the most intuitive and, with <a href="https://github.com/balloob/react-sidebar">React Sidebar</a>, very easy to configure. </p>\n<blockquote>\n<p>Tip: View this page on a mobile screen (or with mobile dev tools) to see this in action. Clicking the hamburger menu in the top right corner will display the sidebar.</p>\n</blockquote>\n<h2>Basic Setup</h2>\n<p>Luckily, this package provides a built-in hamburger menu displayed on smaller screens that you can hook into to display the menu. Going forward with our original example, you would <code>npm install react-sidebar --save</code> and update the code as such:</p>\n<pre><code class="hljs language-javascript"><span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">\'react\'</span>\n<span class="hljs-keyword">import</span> Banner <span class="hljs-keyword">from</span> <span class="hljs-string">\'react-banner\'</span>\n<span class="hljs-keyword">import</span> Sidebar <span class="hljs-keyword">from</span> <span class="hljs-string">\'react-sidebar\'</span> <span class="hljs-comment">// Import it</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'react-banner/dist/style.css\'</span>\n\n<span class="hljs-comment">// Define sidebar content (here it\'s just an empty div)</span>\n<span class="hljs-keyword">const</span> SidebarContent = <span class="hljs-function"><span class="hljs-params">props</span> =></span> {\n    <span class="hljs-keyword">return</span> (\n        <span class="xml"><span class="hljs-tag">&#x3C;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span>\n            <span class="hljs-attr">width:</span> \'<span class="hljs-attr">80vw</span>\',\n            <span class="hljs-attr">height:</span> \'<span class="hljs-attr">100vh</span>\',\n            <span class="hljs-attr">background:</span> \'<span class="hljs-attr">white</span>\'\n        }} /></span>\n    )\n}\n\n// Use a full component class to maintain visible state\nexport default class Site extends React.Component {\n    state = {\n        sidebarVisible: false\n    }\n\n    render() {\n        return (\n            </span>&#x3C;Sidebar\n                sidebar={ &#x3C;}\n                open={ this.state.sidebarVisible }\n                onSetOpen={ this._toggleSidebar }>\n                &#x3C;Banner\n                    logo="My Logo"\n                    url={ window.location.pathname }\n                    onMenuClick={ this._openSidebar }\n                    links={[\n                        { "title": "Example Link", "url": "/example" },\n                        { "title": "Another", "url": "/another" },\n                        { "title": "Link w/ Children", "url": "/children", "children": [\n                            { "title": "John", "url": "/children/john" },\n                            { "title": "Jill", "url": "/children/jill" },\n                            { "title": "Jack", "url": "/children/jack" }\n                        ]}\n                    ]} />\n\n                &#x3C;main>\n                    &#x3C;h2>Hey, I\'m some content&#x3C;/h2>\n                &#x3C;/main>\n            &#x3C;/Sidebar>\n        )\n    }\n\n    _toggleSidebar = visible => {\n        this.setState({\n            sidebarVisible: visible\n        })\n    }\n\n    _openSidebar = () => {\n        this._toggleSidebar(true)\n    }\n}</code></pre>\n<blockquote>\n<p>Note: The above example just shows an empty <code>&#x3C;div></code> for brevity, however in a real site you\'d likely use the same link array passed to the <code>Banner</code> to generate a vertical navigation menu displayed within <code>SidebarContent</code>.</p>\n</blockquote>\n<p>Using <a href="https://github.com/balloob/react-sidebar">React Sidebar</a> is just one of many possibilities. Using the <code>onMenuClick</code> property you could pass a callback that triggers any kind of menu or behavior to occur.</p>\n'}});
//# sourceMappingURL=0.root.bundle.js.map