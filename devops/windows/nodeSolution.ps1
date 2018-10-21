Start-Process powershell -Verb runAs
echo 'got admin privileges'

#chocolatey
echo 'installing chocolatey package manager for Windows...'
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
echo 'chocolatey installed.'

choco upgrade chocolatey
echo 'chocolatey upgraded.'

echo 'installing nodejs'
choco install nodejs.install --version 8.9.4 
echo 'node installed'

echo 'preparing package...'
npm run install-all
npm run build
echo 'preparations complete'

echo 'starting server'
npm run start