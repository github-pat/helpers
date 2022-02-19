function Convert_Base64(data, output) {   
    var reader  = new FileReader();
    reader.onloadend = function () {
        output(reader.result);
    }
    reader.readAsDataURL(data);
}
