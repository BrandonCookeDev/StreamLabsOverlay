If Not WScript.Arguments.Named.Exists("elevate") Then
  CreateObject("Shell.Application").ShellExecute WScript.FullName _
    , """" & WScript.ScriptFullName & """ /elevate", "", "runas", 1
  WScript.Quit
End If

Dim parent
Dim cmdCommand
Dim ps1Command

parent = CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName)
cmdCommand = parent + "\permissions.bat"
ps1Command = "powershell.exe -noexit " + parent + "\dependencies.ps1"

Wscript.Echo cmdCommand

Set cmdRunner = CreateObject("Wscript.shell")
cmdRunner.run(cmdCommand)

Set ps1Runner = CreateObject("Wscript.shell")
ps1Runner.run(ps1Command)