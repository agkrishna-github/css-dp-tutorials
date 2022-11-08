let root = document.documentElement;

const themeBtns = document.querySelectorAll(".theme > button");

themeBtns.forEach((btn)=>{

	btn.addEventListener("click", themeChange);

});

function themeChange(e){

	switch(e.target.value){

	case "dark":
	
	root.style.setProperty("--primary-color", "#222");
	root.style.setProperty("--text-color-primary", "white");
	break;

	case "calm":
	
	root.style.setProperty("--primary-color", "#5b6b6b");
	root.style.setProperty("--text-color-primary", "white");
	break;

	case "light":
	
	root.style.setProperty("--primary-color", "#f5f5f5");
	root.style.setProperty("--text-color-primary", "black");
	break;

	
	
}
}

