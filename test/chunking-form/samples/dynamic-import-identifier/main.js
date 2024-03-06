(async () => {
	const module = await import('./module');
	module.foo();
})();
