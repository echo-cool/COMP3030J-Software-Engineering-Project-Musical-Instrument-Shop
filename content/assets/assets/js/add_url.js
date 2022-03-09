function addUrlPara(url, key, value) {
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