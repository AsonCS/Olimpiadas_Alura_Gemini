export const names = {
	login: 'login',
	signUp: 'signup',
	tabs: 'tabs',
};

export const tabNames = {
	consults: 'consults',
	explore: 'explore',
	main: 'main',
	profile: 'profile',
};

export function navigateToSignUp(navigation: any) {
	return () => {
		navigation.navigate(names.signUp);
	};
}

export function navigateToTabs(navigation: any) {
	return () => {
		navigation.navigate(names.tabs);
	};
}
