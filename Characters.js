const hiragana = [
  // ∅
  {
    index: 0,
    kana: "あ",
    roman: "a"
  },
  {
    index: 1,
    kana: "い",
    roman: "i"
  },
  {
    index: 2,
    kana: "う",
    roman: "u"
  },
  {
    index: 3,
    kana: "え",
    roman: "e"
  },
  {
    index: 4,
    kana: "お",
    roman: "o"
  },
  {
    index: 5,
    kana: "や",
    roman: "ya"
  },
  {
    index: 6,
    kana: "ゆ",
    roman: "yu"
  },
  {
    index: 7,
    kana: "よ",
    roman: "yo"
  },
  // k
  {
    index: 8,
    kana: "か",
    roman: "ka"
  },
  {
    index: 9,
    kana: "き",
    roman: "ki"
  },
  {
    index: 10,
    kana: "く",
    roman: "ku"
  },
  {
    index: 11,
    kana: "け",
    roman: "ke"
  },
  {
    index: 12,
    kana: "こ",
    roman: "ko"
  },
  {
    index: 13,
    kana: "きゃ",
    roman: "kya"
  },
  {
    index: 14,
    kana: "きゅ",
    roman: "kyu"
  },
  {
    index: 15,
    kana: "きょ",
    roman: "kyo"
  },
  // s
  {
    index: 16,
    kana: "さ",
    roman: "sa"
  },
  {
    index: 17,
    kana: "し",
    roman: "shi"
  },
  {
    index: 18,
    kana: "す",
    roman: "su"
  },
  {
    index: 19,
    kana: "せ",
    roman: "se"
  },
  {
    index: 20,
    kana: "そ",
    roman: "so"
  },
  {
    index: 21,
    kana: "しゃ",
    roman: "sha"
  },
  {
    index: 22,
    kana: "しゅ",
    roman: "shu"
  },
  {
    index: 23,
    kana: "しょ",
    roman: "sho"
  },
  // t
  {
    index: 24,
    kana: "た",
    roman: "ta"
  },
  {
    index: 25,
    kana: "ち",
    roman: "chi"
  },
  {
    index: 26,
    kana: "つ",
    roman: "tsu"
  },
  {
    index: 27,
    kana: "て",
    roman: "te"
  },
  {
    index: 28,
    kana: "と",
    roman: "to"
  },
  {
    index: 29,
    kana: "ちゃ",
    roman: "cha"
  },
  {
    index: 30,
    kana: "ちゅ",
    roman: "chu"
  },
  {
    index: 31,
    kana: "ちょ",
    roman: "cho"
  },
  // n
  {
    index: 32,
    kana: "な",
    roman: "na"
  },
  {
    index: 33,
    kana: "に",
    roman: "ni"
  },
  {
    index: 34,
    kana: "ぬ",
    roman: "nu"
  },
  {
    index: 35,
    kana: "ね",
    roman: "ne"
  },
  {
    index: 36,
    kana: "の",
    roman: "no"
  },
  {
    index: 37,
    kana: "にゃ",
    roman: "nya"
  },
  {
    index: 38,
    kana: "にゅ",
    roman: "nyu"
  },
  {
    index: 39,
    kana: "にょ",
    roman: "nyo"
  },
  // h
  {
    index: 40,
    kana: "は",
    roman: "ha"
  },
  {
    index: 41,
    kana: "ひ",
    roman: "hi"
  },
  {
    index: 42,
    kana: "ふ",
    roman: "hu"
  },
  {
    index: 43,
    kana: "へ",
    roman: "he"
  },
  {
    index: 44,
    kana: "ほ",
    roman: "ho"
  },
  {
    index: 45,
    kana: "ひゃ",
    roman: "hya"
  },
  {
    index: 46,
    kana: "ひゅ",
    roman: "hyu"
  },
  {
    index: 47,
    kana: "ひょ",
    roman: "hyo"
  },
  // m
  {
    index: 48,
    kana: "ま",
    roman: "ma"
  },
  {
    index: 49,
    kana: "み",
    roman: "mi"
  },
  {
    index: 50,
    kana: "む",
    roman: "mu"
  },
  {
    index: 51,
    kana: "め",
    roman: "me"
  },
  {
    index: 52,
    kana: "も",
    roman: "mo"
  },
  {
    index: 53,
    kana: "みゃ",
    roman: "mya"
  },
  {
    index: 54,
    kana: "みゅ",
    roman: "myu"
  },
  {
    index: 55,
    kana: "みょ",
    roman: "myo"
  },
  // r
  {
    index: 56,
    kana: "ら",
    roman: "ra"
  },
  {
    index: 57,
    kana: "り",
    roman: "ri"
  },
  {
    index: 58,
    kana: "る",
    roman: "ru"
  },
  {
    index: 59,
    kana: "れ",
    roman: "re"
  },
  {
    index: 60,
    kana: "ろ",
    roman: "ro"
  },
  {
    index: 61,
    kana: "りゃ",
    roman: "rya"
  },
  {
    index: 62,
    kana: "りゅ",
    roman: "ryu"
  },
  {
    index: 63,
    kana: "りょ",
    roman: "ryo"
  },
  // w
  {
    index: 64,
    kana: "わ",
    roman: "wa"
  },
  {
    index: 65,
    kana: "ゐ",
    roman: "wi"
  },
  {
    index: 66,
    kana: "",
    roman: ""
  },
  {
    index: 67,
    kana: "ゑ",
    roman: "we"
  },
  {
    index: 68,
    kana: "を",
    roman: "wo"
  },
  {
    index: 69,
    kana: "",
    roman: ""
  },
  {
    index: 70,
    kana: "",
    roman: ""
  },
  {
    index: 71,
    kana: "",
    roman: ""
  },
  // g
  {
    index: 72,
    kana: "が",
    roman: "ga"
  },
  {
    index: 73,
    kana: "ぎ",
    roman: "gi"
  },
  {
    index: 74,
    kana: "ぐ",
    roman: "gu"
  },
  {
    index: 75,
    kana: "げ",
    roman: "ge"
  },
  {
    index: 76,
    kana: "ご",
    roman: "go"
  },
  {
    index: 77,
    kana: "ぎゃ",
    roman: "gya"
  },
  {
    index: 78,
    kana: "ぎゅ",
    roman: "gyu"
  },
  {
    index: 79,
    kana: "ぎょ",
    roman: "gyo"
  },
  // z
  {
    index: 80,
    kana: "ざ",
    roman: "za"
  },
  {
    index: 81,
    kana: "じ",
    roman: "ji"
  },
  {
    index: 82,
    kana: "ず",
    roman: "zu"
  },
  {
    index: 83,
    kana: "ぜ",
    roman: "ze"
  },
  {
    index: 84,
    kana: "ぞ",
    roman: "zo"
  },
  {
    index: 85,
    kana: "じゃ",
    roman: "ja"
  },
  {
    index: 86,
    kana: "じゅ",
    roman: "ju"
  },
  {
    index: 87,
    kana: "じょ",
    roman: "jo"
  },
  // d
  {
    index: 88,
    kana: "だ",
    roman: "da"
  },
  {
    index: 89,
    kana: "ぢ",
    roman: "ji"
  },
  {
    index: 90,
    kana: "づ",
    roman: "zu"
  },
  {
    index: 91,
    kana: "で",
    roman: "de"
  },
  {
    index: 92,
    kana: "ど",
    roman: "do"
  },
  {
    index: 93,
    kana: "",
    roman: ""
  },
  {
    index: 94,
    kana: "",
    roman: ""
  },
  {
    index: 95,
    kana: "",
    roman: ""
  },
  // b
  {
    index: 96,
    kana: "ば",
    roman: "ba"
  },
  {
    index: 97,
    kana: "び",
    roman: "bi"
  },
  {
    index: 98,
    kana: "ぶ",
    roman: "bu"
  },
  {
    index: 99,
    kana: "べ",
    roman: "be"
  },
  {
    index: 100,
    kana: "ぼ",
    roman: "bo"
  },
  {
    index: 101,
    kana: "びゃ",
    roman: "bya"
  },
  {
    index: 102,
    kana: "びゅ",
    roman: "byu"
  },
  {
    index: 103,
    kana: "びょ",
    roman: "byo"
  },
  // p
  {
    index: 104,
    kana: "ぱ",
    roman: "pa"
  },
  {
    index: 105,
    kana: "ぴ",
    roman: "pi"
  },
  {
    index: 106,
    kana: "ぷ",
    roman: "pu"
  },
  {
    index: 107,
    kana: "ぺ",
    roman: "pe"
  },
  {
    index: 108,
    kana: "ぽ",
    roman: "po"
  },
  {
    index: 109,
    kana: "ぴゃ",
    roman: "pya"
  },
  {
    index: 110,
    kana: "ぴゅ",
    roman: "pyu"
  },
  {
    index: 111,
    kana: "ぴょ",
    roman: "pyo"
  },
  // others
  {
    index: 112,
    kana: "ん",
    roman: "n"
  },
  {
    index: 113,
    kana: "っ",
    roman: "(pause)"
  },
];

const katagana = [
  // ∅
  {
    index: 0,
    kana: "ア",
    roman: "a"
  },
  {
    index: 1,
    kana: "イ",
    roman: "i"
  },
  {
    index: 2,
    kana: "ウ",
    roman: "u"
  },
  {
    index: 3,
    kana: "エ",
    roman: "e"
  },
  {
    index: 4,
    kana: "オ",
    roman: "o"
  },
  {
    index: 5,
    kana: "ヤ",
    roman: "ya"
  },
  {
    index: 6,
    kana: "ユ",
    roman: "yu"
  },
  {
    index: 7,
    kana: "ヨ",
    roman: "yo"
  },
  // k
  {
    index: 8,
    kana: "カ",
    roman: "ka"
  },
  {
    index: 9,
    kana: "キ",
    roman: "ki"
  },
  {
    index: 10,
    kana: "ク",
    roman: "ku"
  },
  {
    index: 11,
    kana: "ケ",
    roman: "ke"
  },
  {
    index: 12,
    kana: "コ",
    roman: "ko"
  },
  {
    index: 13,
    kana: "キャ",
    roman: "kya"
  },
  {
    index: 14,
    kana: "キュ",
    roman: "kyu"
  },
  {
    index: 15,
    kana: "キョ",
    roman: "kyo"
  },
  // s
  {
    index: 16,
    kana: "サ",
    roman: "sa"
  },
  {
    index: 17,
    kana: "シ",
    roman: "shi"
  },
  {
    index: 18,
    kana: "ス",
    roman: "su"
  },
  {
    index: 19,
    kana: "セ",
    roman: "se"
  },
  {
    index: 20,
    kana: "ソ",
    roman: "so"
  },
  {
    index: 21,
    kana: "シャ",
    roman: "sha"
  },
  {
    index: 22,
    kana: "シュ",
    roman: "shu"
  },
  {
    index: 23,
    kana: "ショ",
    roman: "sho"
  },
  // t
  {
    index: 24,
    kana: "タ",
    roman: "ta"
  },
  {
    index: 25,
    kana: "チ",
    roman: "chi"
  },
  {
    index: 26,
    kana: "ツ",
    roman: "tsu"
  },
  {
    index: 27,
    kana: "テ",
    roman: "te"
  },
  {
    index: 28,
    kana: "ト",
    roman: "to"
  },
  {
    index: 29,
    kana: "チャ",
    roman: "cha"
  },
  {
    index: 30,
    kana: "チュ",
    roman: "chu"
  },
  {
    index: 31,
    kana: "チョ",
    roman: "cho"
  },
  // n
  {
    index: 32,
    kana: "ナ",
    roman: "na"
  },
  {
    index: 33,
    kana: "ニ",
    roman: "ni"
  },
  {
    index: 34,
    kana: "ヌ",
    roman: "nu"
  },
  {
    index: 35,
    kana: "ネ",
    roman: "ne"
  },
  {
    index: 36,
    kana: "ノ",
    roman: "no"
  },
  {
    index: 37,
    kana: "ニャ",
    roman: "nya"
  },
  {
    index: 38,
    kana: "ニュ",
    roman: "nyu"
  },
  {
    index: 39,
    kana: "ニョ",
    roman: "nyo"
  },
  // h
  {
    index: 40,
    kana: "ハ",
    roman: "ha"
  },
  {
    index: 41,
    kana: "ヒ",
    roman: "hi"
  },
  {
    index: 42,
    kana: "フ",
    roman: "hu"
  },
  {
    index: 43,
    kana: "ヘ",
    roman: "he"
  },
  {
    index: 44,
    kana: "ホ",
    roman: "ho"
  },
  {
    index: 45,
    kana: "ヒャ",
    roman: "hya"
  },
  {
    index: 46,
    kana: "ヒュ",
    roman: "hyu"
  },
  {
    index: 47,
    kana: "ヒョ",
    roman: "hyo"
  },
  // m
  {
    index: 48,
    kana: "マ",
    roman: "ma"
  },
  {
    index: 49,
    kana: "ミ",
    roman: "mi"
  },
  {
    index: 50,
    kana: "ム",
    roman: "mu"
  },
  {
    index: 51,
    kana: "メ",
    roman: "me"
  },
  {
    index: 52,
    kana: "モ",
    roman: "mo"
  },
  {
    index: 53,
    kana: "ミャ",
    roman: "mya"
  },
  {
    index: 54,
    kana: "ミュ",
    roman: "myu"
  },
  {
    index: 55,
    kana: "ミョ",
    roman: "myo"
  },
  // r
  {
    index: 56,
    kana: "ラ",
    roman: "ra"
  },
  {
    index: 57,
    kana: "リ",
    roman: "ri"
  },
  {
    index: 58,
    kana: "ル",
    roman: "ru"
  },
  {
    index: 59,
    kana: "レ",
    roman: "re"
  },
  {
    index: 60,
    kana: "ロ",
    roman: "ro"
  },
  {
    index: 61,
    kana: "リャ",
    roman: "rya"
  },
  {
    index: 62,
    kana: "リュ",
    roman: "ryu"
  },
  {
    index: 63,
    kana: "リョ",
    roman: "ryo"
  },
  // w
  {
    index: 64,
    kana: "ワ",
    roman: "wa"
  },
  {
    index: 65,
    kana: "ヰ",
    roman: "wi"
  },
  {
    index: 66,
    kana: "",
    roman: ""
  },
  {
    index: 67,
    kana: "ヱ",
    roman: "we"
  },
  {
    index: 68,
    kana: "ヲ",
    roman: "wo"
  },
  {
    index: 69,
    kana: "",
    roman: ""
  },
  {
    index: 70,
    kana: "",
    roman: ""
  },
  {
    index: 71,
    kana: "",
    roman: ""
  },
  // g
  {
    index: 72,
    kana: "ガ",
    roman: "ga"
  },
  {
    index: 73,
    kana: "ギ",
    roman: "gi"
  },
  {
    index: 74,
    kana: "グ",
    roman: "gu"
  },
  {
    index: 75,
    kana: "ゲ",
    roman: "ge"
  },
  {
    index: 76,
    kana: "ゴ",
    roman: "go"
  },
  {
    index: 77,
    kana: "ギャ",
    roman: "gya"
  },
  {
    index: 78,
    kana: "ギュ",
    roman: "gyu"
  },
  {
    index: 79,
    kana: "ギョ",
    roman: "gyo"
  },
  // z
  {
    index: 80,
    kana: "ザ",
    roman: "za"
  },
  {
    index: 81,
    kana: "ジ",
    roman: "ji"
  },
  {
    index: 82,
    kana: "ズ",
    roman: "zu"
  },
  {
    index: 83,
    kana: "ゼ",
    roman: "ze"
  },
  {
    index: 84,
    kana: "ゾ",
    roman: "zo"
  },
  {
    index: 85,
    kana: "ジャ",
    roman: "ja"
  },
  {
    index: 86,
    kana: "ジュ",
    roman: "ju"
  },
  {
    index: 87,
    kana: "ジョ",
    roman: "jo"
  },
  // d
  {
    index: 88,
    kana: "ダ",
    roman: "da"
  },
  {
    index: 89,
    kana: "ヂ",
    roman: "ji"
  },
  {
    index: 90,
    kana: "ヅ",
    roman: "zu"
  },
  {
    index: 91,
    kana: "デ",
    roman: "de"
  },
  {
    index: 92,
    kana: "ド",
    roman: "do"
  },
  {
    index: 93,
    kana: "",
    roman: ""
  },
  {
    index: 94,
    kana: "",
    roman: ""
  },
  {
    index: 95,
    kana: "",
    roman: ""
  },
  // b
  {
    index: 96,
    kana: "バ",
    roman: "ba"
  },
  {
    index: 97,
    kana: "ビ",
    roman: "bi"
  },
  {
    index: 98,
    kana: "ブ",
    roman: "bu"
  },
  {
    index: 99,
    kana: "ベ",
    roman: "be"
  },
  {
    index: 100,
    kana: "ボ",
    roman: "bo"
  },
  {
    index: 101,
    kana: "ビャ",
    roman: "bya"
  },
  {
    index: 102,
    kana: "ビュ",
    roman: "byu"
  },
  {
    index: 103,
    kana: "ビョ",
    roman: "byo"
  },
  // p
  {
    index: 104,
    kana: "パ",
    roman: "pa"
  },
  {
    index: 105,
    kana: "ピ",
    roman: "pi"
  },
  {
    index: 106,
    kana: "プ",
    roman: "pu"
  },
  {
    index: 107,
    kana: "ペ",
    roman: "pe"
  },
  {
    index: 108,
    kana: "ポ",
    roman: "po"
  },
  {
    index: 109,
    kana: "ピャ",
    roman: "pya"
  },
  {
    index: 110,
    kana: "ピュ",
    roman: "pyu"
  },
  {
    index: 111,
    kana: "ピョ",
    roman: "pyo"
  },
  // others
  {
    index: 112,
    kana: "ン",
    roman: "n"
  },
  {
    index: 113,
    kana: "ッ",
    roman: "(pause)"
  },
];
