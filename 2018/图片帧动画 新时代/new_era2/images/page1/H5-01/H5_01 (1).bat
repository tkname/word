@ECHO OFF&SetLocal ENABLEDELAYEDEXPANSION 
::���� ���ֱ���
::set������ 
::local�����أ����������� 
::enable���ܹ� 
::delayed���ӳ� 
::expansion����չ 
::setlocal enabledelayedexpansion������չ���ػ��������ӳ٣�

::echo %1
::�鿴�Ƿ��д��ļ�
::IF EXIST %1     echo %1 �ҵ�   
::IF NOT EXIST %1 ECHO %1 û�ҵ�

::type %1
::type %2

set ss=0
for %%c in (*.jpg) do (
   set "name=%%c"
   set "name=!name: (=!"
   set "name=!name:)=!"
   set  /a ss=ss+1 ::ת���ֿ������� /a
   echo !ss!
   ren "%%c" "!name!" 
)

::set str2=0
::for  %%i in (*.txt) do ( 
::set "str=%%i" 
::set  /a str2=str2+1
::echo !str! !str2!
::) 
