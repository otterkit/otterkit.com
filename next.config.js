import bundleAnalyzer from '@next/bundle-analyzer'
import mdx from '@next/mdx'
import remarkGfm from 'remark-gfm'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})

export default withBundleAnalyzer(withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}),{
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
});
