import * as path from 'node:path'

export function woof() {
	console.log('Woof!')
}

export function xdg(appname: string) {
	const home = process.env.HOME
	if (!home) {
		throw new Error('Failed to get environment variable: HOME')
	}

	let dataHome = process.env.XDG_DATA_HOME
	if (dataHome.at(0) != '/') dataHome = path.join(home, '.local', 'share')

	let configHome = process.env.XDG_CONFIG_HOME
	if (configHome.at(0) != '/') configHome = path.join(home, '.config')

	let stateHome = process.env.XDG_STATE_HOME
	if (stateHome.at(0) != '/') stateHome = path.join(home, '.local', 'state')

	let cacheHome = process.env.XDG_CACHE_HOME
	if (cacheHome.at(0) != '/') cacheHome = path.join(home, '.cache')

	return {
		dataHome: path.join(dataHome, appname),
		configHome: path.join(configHome, appname),
		stateHome: path.join(stateHome, appname),
		cacheHome: path.join(cacheHome, appname),
	}
}
