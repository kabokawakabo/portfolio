export const fetchGasData = async (category: "about" | "history" | "work") => {
    const response = await fetch(
        `https://script.google.com/macros/s/AKfycbyWvGsCgOyt7XPKvaBgKrn32LZ-0zT3Dmp03A_-24nw_JcDanFkRAP8yECKxYkkkeyH/exec?category=${category}`
    );

    if (response.ok) return await response.json();
    else return undefined; //({"APIエラー": "データを取り出せませんでした"});
    //throw "APIエラー  " + response.message;
};
