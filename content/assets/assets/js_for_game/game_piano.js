let sound_data = [];
let sound_pack = [];
let sound_pack_index = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 8, 8.5, 9, 9.5, 10, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15];

notes =
    [{"num": 1, "time": 150}, {"num": 1, "time": 265}, {"num": 5, "time": 380}, {
        "num": 5,
        "time": 501
    }, {"num": 6, "time": 625}, {"num": 6, "time": 748}, {"num": 5, "time": 871}, {
        "num": 4,
        "time": 1126
    }, {"num": 4, "time": 1247}, {"num": 3, "time": 1365}, {"num": 3, "time": 1477}, {
        "num": 2,
        "time": 1597
    }, {"num": 2, "time": 1714}, {"num": 1, "time": 1837}]

let now_note_id = 0;
let next_note_id = 0;
let playing_time = 0;
let record_time = 0;
let now_press_key = -1;

let player = null;
let recorder = null;
let display_keys = [
    {num: 1, key: 90, type: 'white'},
    {num: 1.5, key: 83, type: 'black'},
    {num: 2, key: 88, type: 'white'},
    {num: 2.5, key: 68, type: 'black'},
    {num: 3, key: 67, type: 'white'},
    {num: 4, key: 86, type: 'white'},
    {num: 4.5, key: 71, type: 'black'},
    {num: 5, key: 66, type: 'white'},
    {num: 5.5, key: 72, type: 'black'},
    {num: 6, key: 78, type: 'white'},
    {num: 6.5, key: 74, type: 'black'},
    {num: 7, key: 77, type: 'white'},
    {num: 8, key: 81, type: 'white'},
    {num: 8.5, key: 50, type: 'black'},
    {num: 9, key: 87, type: 'white'},
    {num: 9.5, key: 51, type: 'black'},
    {num: 10, key: 69, type: 'white'},
    {num: 11, key: 82, type: 'white'},
    {num: 11.5, key: 53, type: 'black'},
    {num: 12, key: 84, type: 'white'},
    {num: 12.5, key: 54, type: 'black'},
    {num: 13, key: 89, type: 'white'},
    {num: 13.5, key: 55, type: 'black'},
    {num: 14, key: 85, type: 'white'},
    {num: 15, key: 73, type: 'white'}
];


let audio_player_html = "";
for (let i = 0; i < sound_pack_index.length; i++) {
    let url = "https://awiclass.monoame.com/pianosound/set/" + sound_pack_index[i] + ".wav";
    sound_pack.push({
        number: sound_pack_index[i],
        url: url
    });
    audio_player_html = audio_player_html +
        " <audio data-num=\"" + sound_pack_index[i] + "\" preload=\"auto\">\n" +
        "            <source src=\"" + url + "\" type=\"audio/ogg\"/>\n" +
        "        </audio>"
}
sound_data = sound_pack;

let display_keys_html = "";
for (let i = 0; i < display_keys.length; i++) {
    let s = display_keys[i];
    let label = String.fromCharCode(s.key);
    if (s.type === "black") {
        display_keys_html = display_keys_html +
            "    <div class=\"black\" id=\"key-" + s.key + "\" onClick=\"add_note(" + s.num + ")\">\n" +
            "        <div class=\"label\">" + label + "</div>\n" +
            "    </div>";
    } else {
        display_keys_html = display_keys_html +
            " <div class=\"white\" id=\"key-" + s.key + "\" onClick=\"add_note(" + s.num + ")\">\n" +
            "        <div class=\"label\">" + label + "</div>\n" +
            "    </div>";
    }
}

let nodes_list_html = "";
notes.forEach((note, id) => function () {
    nodes_list_html = nodes_list_html +
        "   <li class=\"now_note_id-1==id?\">\n" +
        "        <div class=\"num\">" + note.num + "</div>\n" +
        "        <div class=\"time\">" + note.time + "</div>\n" +
        "    </li>";
});


// console.log("audio_player_html", audio_player_html);
// console.log("display_keys_html", display_keys_html);
// console.log("nodes_list_html", nodes_list_html);

$(".audio_player").html(audio_player_html);
$(".piano_key").html(display_keys_html)
$(".notes_list").html();

function play_note(id, volume) {
    if (id > 0) {
        let audio_obj = $("audio[data-num='" + id + "']")[0];
        audio_obj.volume = volume;
        audio_obj.currentTime = 0;
        audio_obj.play();
    }
}

function play_next(volume) {
    let play_note = this.notes[this.now_note_id].num;
    console.log(play_note);

    // remove highlight
    for (let i = 0; i < display_keys.length; i++) {
        let hovered_key = "#key-" + display_keys[i].key;
        $(hovered_key).attr("type", '');
    }

    // highlight
    for (let i = 0; i < display_keys.length; i++) {
        if (play_note === display_keys[i].num) {
            let hovered_key = "#key-" + display_keys[i].key;
            $(hovered_key).attr("type", 'hover');
            break;
        }
    }

    this.play_note(play_note, volume);
    this.now_note_id += 1;

    if (this.now_note_id >= this.notes.length) {
        this.stop_play();
    }
}

function start_record() {
    this.record_time = 0;
    this.recorder = setInterval(function () {
        record_time++;
    })
}

function stop_record() {
    clearInterval(this.recorder);
    this.record_time = 0;
}

function start_play() {
    this.now_note_id = 0;
    this.playing_time = 0;
    this.next_note_id = 0;
    let vobj = this;
    this.player = setInterval(function () {
        // console.log(vobj);
        if (vobj.playing_time >= vobj.notes[vobj.next_note_id].time) {
            vobj.play_next(1);
            vobj.next_note_id++;
        }
        vobj.playing_time++;
    }, 2);
}

function stop_play() {
    clearInterval(this.player);
    this.now_note_id = 0;
    this.playing_time = 0;
    this.next_note_id = 0;
}

function add_note(id) {
    console.log("add_note_id: ", id);
    if (this.record_time > 0)
        this.notes.push({num: id, time: this.record_time});
    this.play_note(id, 1);
}

function load_sample1() {
    let vobj = this;
    $.ajax({
        url: "https://awiclass.monoame.com/api/command.php?type=get&name=music_dodoro",
        success: function (res) {
            vobj.notes = JSON.parse(res);
        }
    });
    this.now_note_id = 0;
    this.playing_time = 0;
    this.next_note_id = 0;
    this.player = setInterval(function () {
        // console.log(vobj);
        if (vobj.playing_time >= vobj.notes[vobj.next_note_id].time) {
            vobj.play_next(1);
            vobj.next_note_id++;
        }
        vobj.playing_time++;
    }, 2);
}

function load_sample2() {
    let vobj = this;
    vobj.notes = [{num: 3, time: 105}, {num: 3, time: 223}, {num: 4, time: 331}, {num: 5, time: 482}, {
        num: 5,
        time: 565
    }, {num: 4, time: 673}, {num: 3, time: 782}, {num: 2, time: 893}, {num: 1, time: 1006}, {
        num: 1,
        time: 1113
    }, {num: 2, time: 1220}, {num: 3, time: 1337}, {num: 3, time: 1456}, {num: 2, time: 1623}, {
        num: 2,
        time: 1680
    }, {num: 3, time: 1883}, {num: 3, time: 1988}, {num: 4, time: 2107}, {num: 5, time: 2218}, {
        num: 5,
        time: 2337
    }, {num: 4, time: 2446}, {num: 3, time: 2555}, {num: 2, time: 2664}, {num: 1, time: 2771}, {
        num: 1,
        time: 2880
    }, {num: 2, time: 2992}, {num: 3, time: 3103}, {num: 2, time: 3220}, {num: 1, time: 3395}, {num: 1, time: 3449}];
    this.now_note_id = 0;
    this.playing_time = 0;
    this.next_note_id = 0;
    this.player = setInterval(function () {
        // console.log(vobj);
        if (vobj.playing_time >= vobj.notes[vobj.next_note_id].time) {
            vobj.play_next(1);
            vobj.next_note_id++;
        }
        vobj.playing_time++;
    }, 2);
}

$(window).keydown(function (e) {
    let key = e.which;
    now_press_key = key;
    for (let i = 0; i < display_keys.length; i++) {
        if (key === display_keys[i].key) {
            let hovered_key = "#key-" + key;
            // console.log("hovered_key: ", hovered_key);
            $(hovered_key).attr("type", 'hover');
            add_note(display_keys[i].num);
        }
    }
});

$(window).keyup(function (e) {
    now_press_key = -1;

    let key = e.which;
    let hovered_key = "#key-" + key;
    $(hovered_key).attr("type", '');
});
