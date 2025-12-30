import { unlinkSync, existsSync } from "fs"
import { join } from "path"

// Remove any cached favicon.ico files before build
const faviconPath = join(process.cwd(), "app", "favicon.ico")

if (existsSync(faviconPath)) {
  console.log("[v0] Removing cached favicon.ico...")
  unlinkSync(faviconPath)
  console.log("[v0] Cached favicon.ico removed successfully")
} else {
  console.log("[v0] No favicon.ico found to remove")
}
