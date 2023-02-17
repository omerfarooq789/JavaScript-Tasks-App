declare let navList: NavType[];
declare let desc: boolean;
type NavType = {
    id: number;
    displayText: string;
    class: string;
};
declare const getNavData: () => Promise<void>;
declare const sortNavList: (data: NavType[], desc: boolean) => NavType[];
declare const addActiveClass: (data: NavType[], i: number) => void;
declare const createNav: (data: NavType[]) => void;
declare const controlNav: () => void;
declare const navFun: (data: NavType[]) => void;
declare const startFun: () => Promise<void>;
declare const searchFun: () => void;
declare const ascDesc: () => void;
