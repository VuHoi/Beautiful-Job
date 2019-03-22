import { action } from 'easy-peasy';
export const homeStore = {
	IsOpenLogin: false,
	IsOpenRegister: false,
	hoi: false,
	// 👇 define actions
	setOpenLoginDialog: action((state: TypeHome, payload: any) => {
		state.IsOpenLogin = payload;
	}),
	setOpenRegisterDialog: action((state: TypeHome, payload: any) => {
		state.IsOpenRegister = payload;
	})
};

type TypeHome = Partial<{
	IsOpenLogin: boolean;
	IsOpenRegister: boolean;
	// setOpenRegisterDialog:void;
	// setOpenLoginDialog:void;
}>;
