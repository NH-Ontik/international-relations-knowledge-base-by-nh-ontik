import { QuartzComponentConstructor, QuartzComponent } from "./types"

export default (() => {
  const CloudflareAnalytics: QuartzComponent = () => {
    return (
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "1fa08667fb394a6e8e4421a7f947dfe7"}'
      />
    )
  }
  return CloudflareAnalytics
}) satisfies QuartzComponentConstructor
