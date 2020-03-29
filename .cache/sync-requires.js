const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-tsx": hot(preferDefault(require("/Users/youngguo/misc/oldguo.github.io/src/templates/blog-post.tsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/youngguo/misc/oldguo.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/youngguo/misc/oldguo.github.io/src/pages/404.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/youngguo/misc/oldguo.github.io/src/pages/index.tsx")))
}

