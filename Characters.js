const hiragana = [
  {
    kana: "あ",
    roman: "a",
  },
  {
    kana: "い",
    roman: "i",
  },
  {
    kana: "う",
    roman: "u",
  },
  {
    kana: "え",
    roman: "e",
  },
  {
    kana: "お",
    roman: "o",
  },
  {
    kana: "か",
    roman: "ka",
  },
  {
    kana: "き",
    roman: "ki",
  },
  {
    kana: "く",
    roman: "ku",
  },
  {
    kana: "け",
    roman: "ke",
  },
  {
    kana: "こ",
    roman: "ko",
  },
  {
    kana: "さ",
    roman: "sa",
  },
  {
    kana: "し",
    roman: "shi",
  },
  {
    kana: "す",
    roman: "su",
  },
  {
    kana: "せ",
    roman: "se",
  },
  {
    kana: "そ",
    roman: "so",
  },
  {
    kana: "た",
    roman: "ta",
  },
  {
    kana: "ち",
    roman: "chi",
  },
  {
    kana: "つ",
    roman: "tsu",
  },
  {
    kana: "て",
    roman: "te",
  },
  {
    kana: "と",
    roman: "to",
  },
  {
    kana: "な",
    roman: "na",
  },
  {
    kana: "に",
    roman: "ni",
  },
  {
    kana: "ぬ",
    roman: "nu",
  },
  {
    kana: "ね",
    roman: "ne",
  },
  {
    kana: "の",
    roman: "no",
  },
  {
    kana: "は",
    roman: "ha",
  },
  {
    kana: "ひ",
    roman: "hi",
  },
  {
    kana: "ふ",
    roman: "hu",
  },
  {
    kana: "へ",
    roman: "he",
  },
  {
    kana: "ほ",
    roman: "ho",
  },
  {
    kana: "ま",
    roman: "ma",
  },
  {
    kana: "み",
    roman: "mi",
  },
  {
    kana: "む",
    roman: "mu",
  },
  {
    kana: "め",
    roman: "me",
  },
  {
    kana: "も",
    roman: "mo",
  },
  {
    kana: "や",
    roman: "ya",
  },
  {
    kana: "ゆ",
    roman: "yu",
  },
  {
    kana: "よ",
    roman: "yo",
  },
  {
    kana: "ら",
    roman: "ra",
  },
  {
    kana: "り",
    roman: "ri",
  },
  {
    kana: "る",
    roman: "ru",
  },
  {
    kana: "れ",
    roman: "re",
  },
  {
    kana: "ろ",
    roman: "ro",
  },
  {
    kana: "わ",
    roman: "wa",
  },
  {
    kana: "を",
    roman: "wo",
  },
  {
    kana: "ん",
    roman: "n",
  },
  {
    kana: "が",
    roman: "ga",
  },
  {
    kana: "ぎ",
    roman: "gi",
  },
  {
    kana: "ぐ",
    roman: "gu",
  },
  {
    kana: "げ",
    roman: "ge",
  },
  {
    kana: "ご",
    roman: "go",
  },
  {
    kana: "ざ",
    roman: "za",
  },
  {
    kana: "じ",
    roman: "ji",
  },
  {
    kana: "ず",
    roman: "zu",
  },
  {
    kana: "ぜ",
    roman: "ze",
  },
  {
    kana: "ぞ",
    roman: "zo",
  },
  {
    kana: "だ",
    roman: "da",
  },
  {
    kana: "ぢ",
    roman: "ji",
  },
  {
    kana: "づ",
    roman: "zu",
  },
  {
    kana: "で",
    roman: "de",
  },
  {
    kana: "ど",
    roman: "do",
  },
  {
    kana: "ば",
    roman: "ba",
  },
  {
    kana: "び",
    roman: "bi",
  },
  {
    kana: "ぶ",
    roman: "bu",
  },
  {
    kana: "べ",
    roman: "be",
  },
  {
    kana: "ぼ",
    roman: "bo",
  },
  {
    kana: "ぱ",
    roman: "pa",
  },
  {
    kana: "ぴ",
    roman: "pi",
  },
  {
    kana: "ぷ",
    roman: "pu",
  },
  {
    kana: "ぺ",
    roman: "pe",
  },
  {
    kana: "ぽ",
    roman: "po",
  },
  {
    kana: "っ",
    roman: "(pause)",
  },
  {
    kana: "きゃ",
    roman: "kya",
  },
  {
    kana: "きゅ",
    roman: "kyu",
  },
  {
    kana: "きょ",
    roman: "kyo",
  },
  {
    kana: "しゃ",
    roman: "sha",
  },
  {
    kana: "しゅ",
    roman: "shu",
  },
  {
    kana: "しょ",
    roman: "sho",
  },
  {
    kana: "ちゃ",
    roman: "cha",
  },
  {
    kana: "ちゅ",
    roman: "chu",
  },
  {
    kana: "ちょ",
    roman: "cho",
  },
  {
    kana: "にゃ",
    roman: "nya",
  },
  {
    kana: "にゅ",
    roman: "nyu",
  },
  {
    kana: "にょ",
    roman: "nyo",
  },
  {
    kana: "ひゃ",
    roman: "hya",
  },
  {
    kana: "ひゅ",
    roman: "hyu",
  },
  {
    kana: "ひょ",
    roman: "hyo",
  },
  {
    kana: "みゃ",
    roman: "mya",
  },
  {
    kana: "みゅ",
    roman: "myu",
  },
  {
    kana: "みょ",
    roman: "myo",
  },
  {
    kana: "りゃ",
    roman: "rya",
  },
  {
    kana: "りゅ",
    roman: "ryu",
  },
  {
    kana: "りょ",
    roman: "ryo",
  },
  {
    kana: "ぎゃ",
    roman: "gya",
  },
  {
    kana: "ぎゅ",
    roman: "gyu",
  },
  {
    kana: "ぎょ",
    roman: "gyo",
  },
  {
    kana: "じゃ",
    roman: "ja",
  },
  {
    kana: "じゅ",
    roman: "ju",
  },
  {
    kana: "じょ",
    roman: "jo",
  },
  {
    kana: "びゃ",
    roman: "bya",
  },
  {
    kana: "びゅ",
    roman: "byu",
  },
  {
    kana: "びょ",
    roman: "byo",
  },
  {
    kana: "ぴゃ",
    roman: "pya",
  },
  {
    kana: "ぴゅ",
    roman: "pyu",
  },
  {
    kana: "ぴょ",
    roman: "pyo",
  },
];

const katagana = [
  {
    kana: "ア",
    roman: "a",
  },
  {
    kana: "イ",
    roman: "i",
  },
  {
    kana: "ウ",
    roman: "u",
  },
  {
    kana: "エ",
    roman: "e",
  },
  {
    kana: "オ",
    roman: "o",
  },
  {
    kana: "カ",
    roman: "ka",
  },
  {
    kana: "キ",
    roman: "ki",
  },
  {
    kana: "ク",
    roman: "ku",
  },
  {
    kana: "ケ",
    roman: "ke",
  },
  {
    kana: "コ",
    roman: "ko",
  },
  {
    kana: "サ",
    roman: "sa",
  },
  {
    kana: "シ",
    roman: "shi",
  },
  {
    kana: "ス",
    roman: "su",
  },
  {
    kana: "セ",
    roman: "se",
  },
  {
    kana: "ソ",
    roman: "so",
  },
  {
    kana: "タ",
    roman: "ta",
  },
  {
    kana: "チ",
    roman: "chi",
  },
  {
    kana: "ツ",
    roman: "tsu",
  },
  {
    kana: "テ",
    roman: "te",
  },
  {
    kana: "ト",
    roman: "to",
  },
  {
    kana: "ナ",
    roman: "na",
  },
  {
    kana: "ニ",
    roman: "ni",
  },
  {
    kana: "ヌ",
    roman: "nu",
  },
  {
    kana: "ネ",
    roman: "ne",
  },
  {
    kana: "ノ",
    roman: "no",
  },
  {
    kana: "ハ",
    roman: "ha",
  },
  {
    kana: "ヒ",
    roman: "hi",
  },
  {
    kana: "フ",
    roman: "hu",
  },
  {
    kana: "ヘ",
    roman: "he",
  },
  {
    kana: "ホ",
    roman: "ho",
  },
  {
    kana: "マ",
    roman: "ma",
  },
  {
    kana: "ミ",
    roman: "mi",
  },
  {
    kana: "ム",
    roman: "mu",
  },
  {
    kana: "メ",
    roman: "me",
  },
  {
    kana: "モ",
    roman: "mo",
  },
  {
    kana: "ヤ",
    roman: "ya",
  },
  {
    kana: "ユ",
    roman: "yu",
  },
  {
    kana: "ヨ",
    roman: "yo",
  },
  {
    kana: "ラ",
    roman: "ra",
  },
  {
    kana: "リ",
    roman: "ri",
  },
  {
    kana: "ル",
    roman: "ru",
  },
  {
    kana: "レ",
    roman: "re",
  },
  {
    kana: "ロ",
    roman: "ro",
  },
  {
    kana: "ワ",
    roman: "wa",
  },
  {
    kana: "ヲ",
    roman: "wo",
  },
  {
    kana: "ン",
    roman: "n",
  },
  {
    kana: "ガ",
    roman: "ga",
  },
  {
    kana: "ギ",
    roman: "gi",
  },
  {
    kana: "グ",
    roman: "gu",
  },
  {
    kana: "ゲ",
    roman: "ge",
  },
  {
    kana: "ゴ",
    roman: "go",
  },
  {
    kana: "ザ",
    roman: "za",
  },
  {
    kana: "ジ",
    roman: "ji",
  },
  {
    kana: "ズ",
    roman: "zu",
  },
  {
    kana: "ゼ",
    roman: "ze",
  },
  {
    kana: "ゾ",
    roman: "zo",
  },
  {
    kana: "ダ",
    roman: "da",
  },
  {
    kana: "ヂ",
    roman: "ji",
  },
  {
    kana: "ヅ",
    roman: "zu",
  },
  {
    kana: "デ",
    roman: "de",
  },
  {
    kana: "ド",
    roman: "do",
  },
  {
    kana: "バ",
    roman: "ba",
  },
  {
    kana: "ビ",
    roman: "bi",
  },
  {
    kana: "ブ",
    roman: "bu",
  },
  {
    kana: "ベ",
    roman: "be",
  },
  {
    kana: "ボ",
    roman: "bo",
  },
  {
    kana: "パ",
    roman: "pa",
  },
  {
    kana: "ピ",
    roman: "pi",
  },
  {
    kana: "プ",
    roman: "pu",
  },
  {
    kana: "ペ",
    roman: "pe",
  },
  {
    kana: "ポ",
    roman: "po",
  },
  {
    kana: "ッ",
    roman: "(pause)",
  },
  {
    kana: "キャ",
    roman: "kya",
  },
  {
    kana: "キュ",
    roman: "kyu",
  },
  {
    kana: "キョ",
    roman: "kyo",
  },
  {
    kana: "シャ",
    roman: "sha",
  },
  {
    kana: "シュ",
    roman: "shu",
  },
  {
    kana: "ショ",
    roman: "sho",
  },
  {
    kana: "チャ",
    roman: "cha",
  },
  {
    kana: "チュ",
    roman: "chu",
  },
  {
    kana: "チョ",
    roman: "cho",
  },
  {
    kana: "ニャ",
    roman: "nya",
  },
  {
    kana: "ニュ",
    roman: "nyu",
  },
  {
    kana: "ニョ",
    roman: "nyo",
  },
  {
    kana: "ヒャ",
    roman: "hya",
  },
  {
    kana: "ヒュ",
    roman: "hyu",
  },
  {
    kana: "ヒョ",
    roman: "hyo",
  },
  {
    kana: "ミャ",
    roman: "mya",
  },
  {
    kana: "ミュ",
    roman: "myu",
  },
  {
    kana: "ミョ",
    roman: "myo",
  },
  {
    kana: "リャ",
    roman: "rya",
  },
  {
    kana: "リュ",
    roman: "ryu",
  },
  {
    kana: "リョ",
    roman: "ryo",
  },
  {
    kana: "ギャ",
    roman: "gya",
  },
  {
    kana: "ギュ",
    roman: "gyu",
  },
  {
    kana: "ギョ",
    roman: "gyo",
  },
  {
    kana: "ジャ",
    roman: "ja",
  },
  {
    kana: "ジュ",
    roman: "ju",
  },
  {
    kana: "ジョ",
    roman: "jo",
  },
  {
    kana: "ビャ",
    roman: "bya",
  },
  {
    kana: "ビュ",
    roman: "byu",
  },
  {
    kana: "ビョ",
    roman: "byo",
  },
  {
    kana: "ピャ",
    roman: "pya",
  },
  {
    kana: "ピュ",
    roman: "pyu",
  },
  {
    kana: "ピョ",
    roman: "pyo",
  },
];
