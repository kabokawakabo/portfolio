
/*
const profiles = [
    ["名前:", "Hiromu Murakami"],
    ["誕生月:", "2000年 2月"],
    ["興味:", "可視化、web開発"],
    ["興味手前:", "アプリ開発、機械学習"]
];
*/
type ProfileData = ({
    [key: string]: string
});
type GasProfilesData = {
    data: Array<ProfileData>
};



/*
const history_data = [
    ["大学1年〜大学2年", "一年時にプログラミングを授業で初体験（C言語）。二年でJavaを触る。趣味ではUnityの本を触った程度。"],
    ["大学3年", "授業でC++触る。所属した研究室で可視化の面白さを知りObservable（JavascriptのSaaS）に没頭、駄作可視化を量産する。Unityで強化学習を試みるも断念。研究に備えpythonをチョロチョロ勉強。"],
    ["大学4年", "本格的に研究活動が始まり、pythonを利用する機会が増える。得られた結果をインタラクティブな可視化にするためObservableを利用継続。夏頃からReactとDjangoを勉強開始。"],
    ["修士1年", "continue..."]
];
*/
type HistoryData = ({
    [key: string]: string
});
type GasHistoriesData = {
    data: Array<HistoryData>
};



type WorkData = ({
    [key: string]: string
});
type GasWorksData = {
    data: Array<WorkData>
};