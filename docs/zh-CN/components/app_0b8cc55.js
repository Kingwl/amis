amis.define('docs/zh-CN/components/app.md', function(require, exports, module, define) {

  module.exports = {
    "title": "App 多页应用",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "App 多页应用",
    "icon": null,
    "order": 99,
    "html": "<div class=\"markdown-body\"><p>用于实现多页应用，适合于全屏模式，如果只是局部渲染请不要使用。</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2><p>类型定义为 <code>app</code>，通过 pages 定义页面，支持层级，支持内嵌 schema，或者 通过 schemaApi 远程拉取页面。</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"app\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"brandName\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"应用名称\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"pages\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"分组1\"</span><span class=\"token punctuation\">,</span>\n\n      <span class=\"token property\">\"children\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n          <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"父页面\"</span><span class=\"token punctuation\">,</span>\n          <span class=\"token property\">\"url\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"/parent\"</span><span class=\"token punctuation\">,</span>\n          <span class=\"token property\">\"children\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n            <span class=\"token punctuation\">{</span>\n              <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"子页面\"</span><span class=\"token punctuation\">,</span>\n              <span class=\"token property\">\"url\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"pageA\"</span><span class=\"token punctuation\">,</span>\n              <span class=\"token property\">\"schema\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n                <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"page\"</span><span class=\"token punctuation\">,</span>\n                <span class=\"token property\">\"title\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Page A\"</span>\n              <span class=\"token punctuation\">}</span>\n            <span class=\"token punctuation\">}</span>\n          <span class=\"token punctuation\">]</span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  ...\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<blockquote>\n<p>请点击顶部菜单示例最底下的 JSSDK 页面查看效果。</p>\n</blockquote>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%AF%B4%E6%98%8E\" href=\"#%E5%B1%9E%E6%80%A7%E8%AF%B4%E6%98%8E\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性说明</h2><ul>\n<li><p><code>type</code> 请配置成 <code>app</code></p>\n</li>\n<li><p><code>api</code> 页面配置接口，如果你想远程拉取页面配置请配置。返回配置路径 <code>json&gt;data&gt;pages</code>，具体格式请参考 <code>pages</code> 属性。</p>\n</li>\n<li><p><code>brandName</code> 应用名称。</p>\n</li>\n<li><p><code>logo</code> 支持图片地址，或者 svg。</p>\n</li>\n<li><p><code>className</code> css 类名。</p>\n</li>\n<li><p><code>header</code> 顶部区域。</p>\n</li>\n<li><p><code>asideBefore</code> 页面菜单上前面区域。</p>\n</li>\n<li><p><code>asideAfter</code> 页面菜单下前面区域。</p>\n</li>\n<li><p><code>footer</code> 页面。</p>\n</li>\n<li><p><code>pages</code> <code>Array&lt;页面配置&gt;</code>具体的页面配置。\n通常为数组，数组第一层为分组，一般只需要配置 label 集合，如果你不想分组，直接不配置，真正的页面请在第二层开始配置，即第一层的 children 中。</p>\n<p>具体的页面配置也支持属性结构，每层有以下配置。</p>\n<ul>\n<li><code>label</code> 菜单名称。</li>\n<li><code>icon</code> 菜单图标，比如：fa fa-file.</li>\n<li><code>url</code> 页面路由路径，当路由命中该路径时，启用当前页面。当路径不是 <code>/</code> 打头时，会连接父级路径。比如：父级的路径为 <code>folder</code>，而此时配置 <code>pageA</code>, 那么当页面地址为 <code>/folder/pageA</code> 时才会命中此页面。当路径是 <code>/</code> 开头如： <code>/crud/list</code> 时，则不会拼接父级路径。另外还支持 <code>/crud/view/:id</code> 这类带参数的路由，页面中可以通过 <code>${params.id}</code> 取到此值。</li>\n<li><code>schema</code> 页面的配置，具体配置请前往 <a href=\"/amis./page\">Page 页面说明</a></li>\n<li><code>schemaApi</code> 如果想通过接口拉取，请配置。返回路径为 <code>json&gt;data</code>。schema 和 schemaApi 只能二选一。</li>\n<li><code>link</code> 如果想配置个外部链接菜单，只需要配置 link 即可。</li>\n<li><code>redirect</code> 跳转，当命中当前页面时，跳转到目标页面。</li>\n<li><code>rewrite</code> 改成渲染其他路径的页面，这个方式页面地址不会发生修改。</li>\n<li><code>isDefaultPage</code> 当你需要自定义 404 页面的时候有用，不要出现多个这样的页面，因为只有第一个才会有用。</li>\n<li><code>visible</code> 有些页面可能不想出现在菜单中，可以配置成 <code>false</code>，另外带参数的路由无需配置，直接就是不可见的。</li>\n<li><code>className</code> 菜单类名。</li>\n</ul>\n</li>\n</ul>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "属性说明",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%AF%B4%E6%98%8E",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%AF%B4%E6%98%8E",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
