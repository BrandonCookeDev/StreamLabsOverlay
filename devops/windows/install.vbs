If Not WScript.Arguments.Named.Exists("elevate") Then
  CreateObject("Shell.Application").ShellExecute WScript.FullName _
    , """" & WScript.ScriptFullName & """ /elevate", "", "runas", 1
  WScript.Quit
End If

Dim parent
Dim cmdCommand
Dim ps1Command
Dim cmdScript
Dim ps1Script

parent = CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName)
cmdScript = "permissions.bat"
ps1Script = "nodeSolution.ps1"
cmdCommand = parent + "\" + cmdScript
ps1Command = "powershell.exe -noprofile -executionpolicy bypass -file " + parent + "\" + ps1Script

Set cmdRunner = CreateObject("Wscript.shell")
cmdRunner.run(cmdCommand)

Set ps1Runner = CreateObject("Wscript.shell")
ps1Runner.run(ps1Command)