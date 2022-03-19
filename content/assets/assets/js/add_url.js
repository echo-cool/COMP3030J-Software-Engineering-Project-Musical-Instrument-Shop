function addUrlPara(url, key, value) {
    if (value != null && value !== "") {
        var returnUrl = ''
        if (url.indexOf('?') == -1) {
            returnUrl += url + '?' + key + '=' + value
        } else {
            if (url.indexOf('?' + key + '=') == -1 && url.indexOf('&' + key + '=') == -1) {
                returnUrl += url + '&' + key + '=' + value
            } else {
                var isDone = false
                var startIndex = 0
                var endIndex = url.length - 1
                var parm = '?' + key + '='
                for (var i = 0; i < url.length; i++) {
                    if (url.substr(i, parm.length) == parm) {
                        startIndex = i + parm.length
                        for (var j = startIndex; j < url.length; j++) {
                            if (url[j] == '&') {
                                endIndex = j
                                break
                            } else if (j == url.length - 1) {
                                endIndex = url.length
                            }
                        }
                        isDone = true
                        break
                    }
                }
                if (!isDone) {
                    parm = '&' + key + '='
                    for (var i = 0; i < url.length; i++) {
                        if (url.substr(i, parm.length) == parm) {
                            startIndex = i + parm.length
                            for (var j = startIndex; j < url.length; j++) {
                                if (url[j] == '&') {
                                    endIndex = j
                                    break
                                } else if (j == url.length - 1) {
                                    endIndex = url.length
                                }
                            }
                            break
                        }
                    }
                }
                var parmKeyValue = parm + url.substring(startIndex, endIndex)
                returnUrl = url.replace(parmKeyValue, parm + value)
            }
        }
        return returnUrl
    }
    else {
        return removeURLParameter(url, key)
    }
}

function removeURLParameter(url, parameter) {
	var urlparts = url.split('?');
	if(urlparts.length >= 2) {
		//参数名前缀
		var prefix = encodeURIComponent(parameter) + '=';
		var pars = urlparts[1].split(/[&;]/g);

		//循环查找匹配参数
		for(var i = pars.length; i-- > 0;) {
			if(pars[i].lastIndexOf(prefix, 0) !== -1) {
				//存在则删除
				pars.splice(i, 1);
			}
		}

		return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
	}
	return url;
}