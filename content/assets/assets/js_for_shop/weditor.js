function initEditor(id, height) {
    // 创建富文本编辑器元素节点
    var wehtml = "<div id='wangcontent'></div>"
    const $text1 = $(id)
    // 获取的div
    var field_div = $text1.parent();
    // field_div[0].insertAdjacentHTML('afterbegin', '<label for="id_body">Body</label>');
    field_div[0].insertAdjacentHTML('beforeend', wehtml);
    // field_div.find('label').attr('style', 'display:none');

    const E = window.wangEditor
    const editor = new E("#wangcontent")
    // 或者 const editor = new E( document.getElementById('div1') )
    console.log($text1.val())
    editor.config.onchange = function (html) {
        // 第二步，监控变化，同步更新到 textarea
        $text1.val(html)
    }

    editor.config.height = height
    // 配置 server 接口地址
    editor.config.uploadImgServer = '/api/editor_upload_img/'
    editor.config.uploadFileName = 'spuImg'
    editor.create()
    editor.txt.html($text1.val())
    // 第一步，初始化 textarea 的值
    $text1.val(editor.txt.html())
    $text1.attr("style","display:none")
}
