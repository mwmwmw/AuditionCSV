const Papa = require('papaparse');

export default class AuditionCSV {
	static getMarkers(file) {
		return AuditionCSV
			.load(file)	
			.then((response)=>response.ok ? response.text() : Promise.reject(response))
			.then((results)=>AuditionCSV.convert(results))
			.then((results)=>results.data);
	}
    static convert(file) {
        return new Promise((resolve, reject) => {
            Papa.parse(file, {
                complete: function(results) {
                    resolve(results)
                }
            });
        })
    }
    static load(file) {
    	return fetch(file);
    }
}