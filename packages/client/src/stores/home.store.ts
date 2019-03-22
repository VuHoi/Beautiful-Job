import { action } from 'easy-peasy';
export const homeStore = {
	IsOpenLogin: false,
	// 👇 define actions
	setOpenLoginDialog: action((state: TypeHome, payload: any) => {
		state.IsOpenLogin = payload;
	})
};

type TypeHome = Partial<{
	IsOpenLogin: boolean;
}>;
