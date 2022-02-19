	function EnviarTodo() {
		var zip = new JSZip();
		$('.archivo').each(function(i, val) {
			if ($(this).val()) {
				zip.file($(this)[0].files[0].name, $(this)[0].files[0])
			}
		})
		zip.generateAsync({type:"base64"})
		.then(function(base64) {
			var data = $('#f1').serialize();

			data += '&base64='+base64;
			$.ajax({
				url: 'upload_archivos_correos.asp',
				type: 'POST',
				data: data,
				success: function(data){
					console.log(data)
				},
				error: function(e){
					console.log(e.responseText)
				}
			})
		})
	}
