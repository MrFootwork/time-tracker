export default class Database {
	private _rawData
	private static instance: Database

	private constructor() {}

	static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database()
		}
		return Database.instance
	}

	set data(customData) {
		this._rawData = customData
	}

	get data(): any {
		return this._rawData
	}

	async fetchMongo() {
		try {
			const data = await fetch('api/get-data')
			let json = await data.json()
			this._rawData = json
		} catch (e) {
			console.log('could not fetch MongoDB: ', e)
			this._rawData = null
		}
	}
}
