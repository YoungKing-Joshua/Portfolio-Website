$files = @(
  "./tailwind.config.mjs",
  "./app/layout.js",
  "./app/page.js",
  "./app/globals.css",
  "./app/components/About.jsx",
  "./app/components/Contact.jsx",
  "./app/components/Footer.jsx",
  "./app/components/Header.jsx",
  "./app/components/Navbar.jsx",
  "./app/components/Services.jsx",
  "./app/components/Work.jsx"
)

$output = "combined-output.txt"

Remove-Item $output -ErrorAction SilentlyContinue

foreach ($file in $files) {
    if (Test-Path $file) {
        Add-Content $output $file
        Get-Content $file | Add-Content $output
        Add-Content $output "`r`n`r`n"
    } else {
        Add-Content $output "$file (File not found)"
        Add-Content $output "`r`n`r`n"
    }
}

Write-Host "✅ Files merged into combined-output.txt"
