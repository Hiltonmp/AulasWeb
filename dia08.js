
    var today = new Date;
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'lancha seu puto'
    } else if (hourNow > 6) {
        greeting = 'Na fazedinha'
    } else if (hourNow > 12) {
        greeting = 'comidinha fml'
    } else if(hourNow) {
        greeting = 'bem vindo seu esquisito'
    }

    document.write('<h3>' + greeting + '<h3>');
