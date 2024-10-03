import localforage from 'localforage'
import { matchSorter } from 'match-sorter'
import { LoaderFunctionArgs } from 'react-router-dom'
import { sortBy } from 'sort-by-typescript'

export interface Contact {
	id: string
	first?: string
	last?: string
	avatar?: string
	twitter?: string
	notes?: string
	favorite?: boolean
	createdAt?: number
}

export async function getContacts(query?: string): Promise<Contact[]> {
	await fakeNetwork(`getContacts:${query}`)
	let contacts: Contact[] | null = (await localforage.getItem('contacts')) ?? []
	if (!contacts) contacts = []
	if (query) {
		contacts = matchSorter(contacts, query, { keys: ['first', 'last'] })
	}
	return contacts.sort(sortBy('last', 'createdAt'))
}

export async function createContact(): Promise<Contact> {
	await fakeNetwork()
	const id = Math.random().toString(36).substring(2, 9)
	const contact: Contact = { id, createdAt: Date.now() }
	const contacts = await getContacts()
	contacts.unshift(contact)
	await set(contacts)
	return contact
}

export async function getContact(id?: string): Promise<Contact | null> {
	if (!id) return null
	await fakeNetwork(`contact:${id}`)
	const contacts: Contact[] | null = await localforage.getItem('contacts')
	const contact = contacts?.find(contact => contact.id === id)
	return contact ?? null
}

export async function updateContact(id: string, updates: Partial<Contact>): Promise<Contact> {
	await fakeNetwork()
	const contacts: Contact[] | null = await localforage.getItem('contacts')
	const contact = contacts?.find(contact => contact.id === id)
	// ここでcontactsのnullチェックは担保されるからNon-Null-Assertion使用
	if (!contact) throw new Error(`No contact found for ${id}`)
	Object.assign(contact, updates)
	await set(contacts!)
	return contact
}

export async function deleteContact(id: string): Promise<boolean> {
	const contacts: Contact[] | null = await localforage.getItem('contacts')
	if (!contacts) return false

	const index = contacts.findIndex(contact => contact.id === id)
	if (index > -1) {
		contacts.splice(index, 1)
		await set(contacts)
		return true
	}
	return false
}

function set(contacts: Contact[]): Promise<Contact[]> {
	return localforage.setItem('contacts', contacts)
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache: { [key: string]: boolean } = {}

async function fakeNetwork(key?: string): Promise<void> {
	if (!key) {
		fakeCache = {}
	}

	if (fakeCache[key || '']) {
		return
	}

	fakeCache[key || ''] = true
	return new Promise(res => {
		setTimeout(res, Math.random() * 800)
	})
}
