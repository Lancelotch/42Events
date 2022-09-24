export interface IResponseRaceEvent {
    code: number;
    data: IRaceEvent;
}

export interface IRaceEvent {
    _id: string;
    featured: Array<IEvent>;
    startingSoon: Array<IEvent>;
    popular: Array<IEvent>;
    newRelease: Array<IEvent>;
    bestDeals: Array<IEvent>;
    free: Array<IEvent>;
    past: Array<IEvent>;
    offline: Array<IEvent>;
    updateAt: Date;
}

interface IRaceNameLang {
    en: string;
    cn: string;
    tw: string;
    id: string;
    th: string;
    vi: string;
}

export interface IEvent {
    _id: string;
    raceIDs: Array<string>;
    slug: string;
    race_name: string;
    race_name_lang: IRaceNameLang;
    start_date: Date;
    end_date: Date;
    race_type: string;
    sportType: string;
    filterTypes: Array<string>;
    raceRunners: number;
    launch_date: Date;
    is_new: boolean;
    racePeriod: string;
    racePrice: string;
    banner_card: string;
    medalViewImage: string;
    isBundle: boolean;
    joined: boolean;
    bestDeals: string;
    participants: string;
    medal_engraving_end_date?: Date;
    isFreeEngraving?: boolean;
    eventType?: string;
    brandRaceSlug?: string;
    is_brand_race?: string;
}

export interface IResponseWithPagination<T>{
    code: number;
    data: Array<T>;
    totalData: number;
    totalPagination: number;
    cachedData: boolean;
}