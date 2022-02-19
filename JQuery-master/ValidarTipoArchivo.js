function ValidarArchivo (input) {
	if (!ArchivoAdmitido(input.files[0].name)) {
		$(input).val('')
		alert('El archivo adjuntado no es v\u00E1lido.')
	}
}
function ArchivoAdmitido(fileName){
	var ext = fileName.split('.').pop();
	ext = ext.toLowerCase();
	if (ext == 'jpg' || ext == 'jpeg' || ext == 'png' ||  ext == 'gif' || ext == 'bmp' || 
		ext == 'pdf' || ext == 'docx' || ext == 'doc' || ext == 'docx' || ext == 'xls' || 
		ext == 'xlsx' || ext == 'rtf' || ext == 'ods' || ext == 'odt' || ext == 'zip' || 
		ext == 'rar' || ext == 'txt') {
		return true;
	}
	else{
		return false;
	}
}
