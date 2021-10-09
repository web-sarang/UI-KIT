const defaultSelect = () => {
	const element = document.querySelector('.default');
  const choices = new Choices(element, {
		searchEnabled: false,
		
	});


};

defaultSelect();

const multiDefault = () => {
	const elements = document.querySelectorAll('.multi-default');
	elements.forEach(el => {
		const choices = new Choices(el, {
			searchEnabled: false,
			
		});
	});
	
}

multiDefault();

const paginatorDefault = () => {
	const element = document.querySelector('.paginator-default');
  const choices = new Choices(element, {
		searchEnabled: false,
		
	});


};

paginatorDefault();