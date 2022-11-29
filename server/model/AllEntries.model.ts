import Database from './Database.model'
import TimeEntry from './TimeEntry.type'

export default class AllEntries {
	// properties
	private _data: TimeEntry[] = []
	private static instance: AllEntries
	private static db: Database

	// input
	public timeArrival: Date
	public timeLeave: Date
	public durationBreak: Date

	private constructor() {
		this.timeArrival = new Date()
		this.timeLeave = new Date()
		this.durationBreak = new Date()
		AllEntries.db = Database.getInstance()
	}

	static getInstance(): AllEntries {
		if (!AllEntries.instance) {
			AllEntries.instance = new AllEntries()
		}
		return AllEntries.instance
	}

	// output
	getEntries(): TimeEntry[] {
		return
		;[
			{
				timeArrival: '123',
				timeLeave: '321',
				durationBreak: '555',
			},
			{
				timeArrival: '222',
				timeLeave: '223',
				durationBreak: '444',
			},
		]
	}
}
