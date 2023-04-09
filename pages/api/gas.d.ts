type ProfileData = {
    項目: string;
    値: string;
};
type GasProfilesData = {
    data: Array<ProfileData>;
};

type HistoryData = {
    期間: string;
    していたこと: string;
};
type GasHistoriesData = {
    data: Array<HistoryData>;
};

type WorkData = {
    title: string;
    imageURL: string;
    URL: string;
    クリック先: string;
    技術: string;
    直したい点: string;
    start: string;
    end: string;
    description: string;
};
type GasWorksData = {
    data: Array<WorkData>;
};
