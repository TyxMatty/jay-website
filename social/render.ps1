# Renders social/banner.html to assets/social/banner.png (1200x630) with headless Edge.
# The site must be served first (npm run dev, port 5180): ES modules don't load from file://.
#   powershell -File social/render.ps1
param([string]$Url = 'http://localhost:5180/social/banner.html')

$edge = "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) { $edge = "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe" }
$out = Join-Path $PSScriptRoot '..\assets\social\banner.png'
New-Item -ItemType Directory -Force (Split-Path $out) | Out-Null
$profileDir = Join-Path $env:TEMP "jay-banner-$PID"  # its own profile: never touches the user's Edge
# virtual-time-budget: wait for the Inter font and the icons before the picture is taken.
& $edge --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 `
  --window-size=1200,630 --virtual-time-budget=4000 --user-data-dir="$profileDir" `
  --screenshot="$out" $Url | Out-Null
Remove-Item $profileDir -Recurse -Force -ErrorAction SilentlyContinue
if (-not (Test-Path $out)) { throw "Edge didn't write $out" }
Write-Host "wrote $out ($((Get-Item $out).Length) bytes)"
