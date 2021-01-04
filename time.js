module.exports = {
  format(date, format) {
    date = date || new Date();
		let map ={
      'Y': date.getFullYear(),
			'M': date.getMonth()+1,//month
			'D': date.getDate(),//date
			'H': date.getHours(),//hours
			'm': date.getMinutes(),//minutes
			's': date.getSeconds() //seconds
		};
		for(let i in map){
			if(map.hasOwnProperty(i)){
				if(map[i]<10){
					map[i] = '0'+map[i];
				}
			}
		}
		format = format || 'YYYY-MM-DD HH:mm:ss';
		let reg = new RegExp('Y+|M+|D+|H+|m+|s+','g');
		let regY = new RegExp('Y');
		format = format.replace(reg,function(v){
			let old = v;
			if(regY.test(v)){
				let y = ""+map['Y'];
				let len = 4-v.length;
				old = y.substr(len);
			}else{
				let key = v.substr(0,1);
				old = map[key];
			}
			return old;
		});
	   return format;	
  }
}