���������£�����������

submit���ص�ַ��http://www.sublimetext.com/

��ݼ���
	Ctrl+P������
	Ctrl+Shift+P���������
	Ctrl + D��ѡ����
	
�����װ��
	1.��Sublime�Ŀ���̨
		Ctrl + `  �򿪿���̨   view->Hide Console
	2. ������������
		import urllib.request,os,hashlib; h = 'df21e130d211cfc94d9b0905775a7c0f' + '1e3d39e33b79698005270310898eea76'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
	3 ʹ��Package Control��װ���
		Ctrl + Shift + P�����������	
	4.��װ��
		install Package  ��������װ��
	4.1 Emment ��cssѡ��������html  ��ʾ/��ݼ���
		emment��ǰ����zen coding ����ʹ�ã�http://www.w3cplus.com/tools/emmet-cheat-sheet.html
		meta:vp�������ƶ���meta��ǩ
		
	4.2 BracketHighlighter (ƥ�����ţ�������ʾ)
	4.3 Chinese?Localization�����������
	4.4 DocBlockr���Զ�����ע�Ϳ飩
	4.5 SublimeLinter������У�飩
	4.6 AutoFileName����ȫsrc��href�ļ�·����
	20�������https://www.oschina.net/translate/20-powerful-sublimetext-plugins