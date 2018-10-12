start-process powershell –verb runAs
echo 'got admin privileges'

#chocolatey
echo 'installing chocolatey package manager for Windows...'
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
echo 'chocolatey installed.'

choco upgrade chocolatey
echo 'chocolatey upgraded.'

#docker
echo 'installing docker...'
choco install docker -y
echo 'docker installed.'