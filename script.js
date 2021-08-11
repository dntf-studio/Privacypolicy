function eng(){
    let str = ""
    str += "<h2>Normal Counter - Privacy policy</h2>"
    str += '<strong>"Using Ads ID"</strong>'
    str += "<p>This app uses he unique id to display ads.</p>"
    str += "<p>this id is used to sent data.</p>"
    str += "<p>Your personal information will not be identification from this id. </p>"
    str += '<strong>"Network access"</strong>'
    str += "<p>That used to display ads. </p>"
    document.getElementById('lang_1').innerHTML = str
}

function jpn(){
    let str = ""
    str += "<h2>ノーマルカウンター - プライバシーポリシー</h2>"
    str += '<strong>『広告IDの利用』</strong>'
    str += "<p>広告を表示する際に固有のIDを利用しています。</p>"
    str += "<p>これはアプリから送信され利用されます。</p>"
    str += "<p>このIDから個人が特定されることはありません。</p>"
    str += '<strong>『ネットワークアクセス』</strong>'
    str += "<p>広告を表示するために行われます。</p>"
    document.getElementById('lang_1').innerHTML = str
}