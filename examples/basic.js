import ApiCache from 'apicache'
import express from 'express'

let app = express()
let apicache = new ApiCache

// apicache
//  .middleware(req, res, next)
//  .middleware('1 week')
// 	.setDefaultDuration('1 week')
// 	.setCacheGetter((key) => {})
// 	.setCacheSetter((key, value, duration, onExpire) => {})
// 	.setCacheClear((key) => {})
// 	.whitelist((req, res) => {})
// 	.blacklist((req, res) => {})
// 	.include((req, res) => req.statusCode === 200)
// 	.exclude((req, res) => req.statusCode !== 200)
// 	.when((req, res) => {})
// 	.notWhen((req, res) => {})
//  .on('postCachetimeout', (key, cache))
//  .on('precachetimeout', (key, cache))

let cache = apicache

app.get('/someroute', cache,  (req, res) => {
  res.send('hello!')
})

cache('1 week') === function(res, req, next) {}

cache === function(res, req, next) {}

class ApiCache {
	constructor(config) {
		const events = [
			'cachetimeout',
			'cachemiss',
			'cachehit',
			'cacheinsert',
			'middleware'
		]

		this._events = {}

		events.forEach(event => {
			this._events[event] = []
		})
	}

	middleware(req, res, next) {
		const passthru = res === undefined // && (typeof req === 'number' || typeof req === 'string')
		const duration = (passthru && req) || 30000

		let fn = (req, res, next) => {
			console.log('caching', req, res, 'for', duration, 'seconds')
		}

		return (passthru ? fn : fn(req, res, next))
	}
}
